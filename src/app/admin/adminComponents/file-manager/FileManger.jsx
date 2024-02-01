"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { toast } from "react-toastify";
import { urls } from "../../Environment";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import Link from "next/link";
export default function Filemanager() {
  const [fullscreen, setFullScreen] = useState(false);
  const [movbileOpen, setMobileOpen] = useState(false);
  const { useRef } = React;
  const [files, setFiles] = useState();
  const [dir, setDir] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingSecond, setLoadingSecond] = useState(false);
  const [documentView, setDocumentView] = useState([]);
  const [mututalNo, setMutualNo] = useState(0);
  const [insuranceNo, setInsuranceNo] = useState(0);
  const [dmatsNo, setDmatsNo] = useState(0);
  const [otherNo, setOthersNo] = useState(0);
  const checkboxesRef = useRef([]);
  const local = JSON.parse(sessionStorage.getItem("loginUser"));
  if (local) {
    var [role, token] = local.split("|");
    var headersT = { Authorization: `Bearer ${token}`, role: role };
  }
  const handleChange = (e) => {
    setFiles(e.target.files);
  };
  // to handle error in datatable
  const Timeout = () => {
    setTimeout(() => {
      $(document).ready(function () {
        $("#filemanager").DataTable({
          //
          initComplete: function () {
            this.api()
              .columns()
              .every(function () {
                var column = this;
                var title = column.footer().textContent;
                var select = $(`<input placeholder =${title}></input>`)
                  .appendTo($(column.footer()).empty())
                  .on("keyup", function () {
                    var val = $.fn.dataTable.util.escapeRegex($(this).val());
                    column.search(val ? val : "", true, false).draw();
                  });
              });
          },
          pagingType: "full_numbers",
          pageLength: 5,
          processing: true,
          dom: "Bfrtip",
          buttons: ["copyHtml5", "excelHtml5", "csvHtml5", "pdfHtml5", "print"],
          responsive: true,
          columnDefs: [
            { responsivePriority: 1, targets: 0 },
            { responsivePriority: 2, targets: -1 },
          ],
          stateSave: true,
          bDestroy: true,
        });
      });
    }, 1000);
  };
  // upload function

  const handleUpload = () => {
    var checkbox = document.getElementsByClassName("checkbox");
    for (var i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        checkbox[i].checked = false;
      }
    }
    var dt1 = $.fn.dataTable.tables()[0];
    $(dt1).DataTable().destroy();
    setLoading(true);
    const formData = new FormData();
    for (var i = 0; i < files.length; i++) {
      formData.append(`photo[${i}]`, files[i]);
    }
    // Add Dir Here
    formData.append("directory", dir);

    try {
      fetch(urls + "image_upload1", {
        method: "POST",
        body: formData,
        headers: headersT,
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.success) {
            toast.success("upload sucessfully");
            setLoading(false);
            setFiles("");
            Timeout();
          } else {
            setLoading(false);
            for (const ele of json.data) {
              toast.error(ele);
            }
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.message);
        });
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  const fetchDocuments = () => {
    var checkbox = document.getElementsByClassName("checkbox");
    for (var i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        checkbox[i].checked = false;
      }
    }
    var dt1 = $.fn.dataTable.tables()[0];
    $(dt1).DataTable().destroy();
    try {
      fetch(urls + "get_images", { headers: headersT })
        .then((response) => response.json())
        .then((json) => {
          if (json.success) {
            setDocumentView([]);
            setDocumentView(json.data);
            Timeout();

            // "bDestroy": true });

            // })
          } else {
            for (const ele of json.data) {
              toast.error(ele);
            }
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (err) {
      console.log(err);
    }
  };
  // document fetch function
  useEffect(() => {
    var dt1 = $.fn.dataTable.tables()[0];
    $(dt1).DataTable().destroy();
    try {
      fetch(urls + "get_images", { headers: headersT })
        .then((response) => response.json())
        .then((json) => {
          if (json.success) {
            Timeout();
            setDocumentView([]);
            setDocumentView(json.data);
            setMutualNo(
              json.data.filter(
                (item) =>
                  item.path === "f1170e67a3928aea569935139470388db9c15fd4",
              ),
            );
            console.log(mututalNo.length);

            // "bDestroy": true });

            // })
          } else {
            for (const ele of json.data) {
              toast.error(ele);
            }
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (err) {
      console.log(err);
    }
  }, [loading]);
  // mutual fund document fetch
  const fetchDocumentMutual = () => {
    var checkbox = document.getElementsByClassName("checkbox");
    for (var i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        checkbox[i].checked = false;
      }
    }
    var dt1 = $.fn.dataTable.tables()[0];
    $(dt1).DataTable().destroy();

    try {
      fetch(urls + "show_dir/Mutual_Funds", { headers: headersT })
        .then((response) => response.json())
        .then((json) => {
          if (json.success) {
            setDocumentView([]);
            setDocumentView(json.data);
            Timeout();

            // "bDestroy": true });
            // })
          } else {
            for (const ele of json.data) {
              toast.error(ele);
            }
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (err) {
      console.log(err);
    }
  };
  // dmats doucment fetch
  const fetchDocumentDmats = () => {
    var checkbox = document.getElementsByClassName("checkbox");
    for (var i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        checkbox[i].checked = false;
      }
    }
    var dt1 = $.fn.dataTable.tables()[0];
    $(dt1).DataTable().destroy();
    try {
      fetch(urls + "show_dir/Dmats", { headers: headersT })
        .then((response) => response.json())
        .then((json) => {
          if (json.success) {
            setDocumentView([]);
            setDocumentView(json.data);
            Timeout();

            // "bDestroy": true });
            // })
          } else {
            for (const ele of json.data) {
              toast.error(ele);
            }
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (err) {
      console.log(err);
    }
  };
  // insurance fetch document
  const fetchDocumentInsurance = () => {
    var checkbox = document.getElementsByClassName("checkbox");
    for (var i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        checkbox[i].checked = false;
      }
    }
    var dt1 = $.fn.dataTable.tables()[0];
    $(dt1).DataTable().destroy();
    try {
      fetch(urls + "show_dir/Insurance", { headers: headersT })
        .then((response) => response.json())
        .then((json) => {
          if (json.success) {
            setDocumentView([]);
            setDocumentView(json.data);
            Timeout();

            //     "bDestroy": true });

            // // })
          } else {
            for (const ele of json.data) {
              toast.error(ele);
            }
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (err) {
      console.log(err);
    }
  };
  // loan document fetch
  const fetchDocumentLoan = () => {
    var checkbox = document.getElementsByClassName("checkbox");
    for (var i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        checkbox[i].checked = false;
      }
    }
    var dt1 = $.fn.dataTable.tables()[0];
    $(dt1).DataTable().destroy();
    try {
      fetch(urls + "show_dir/Loan", { headers: headersT })
        .then((response) => response.json())
        .then((json) => {
          if (json.success) {
            setDocumentView([]);
            setDocumentView(json.data);
            Timeout();

            // "bDestroy": true });
            // })
          } else {
            for (const ele of json.data) {
              toast.error(ele);
            }
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (err) {
      console.log(err);
    }
  };
  // function to select value
  const [dirQ, setDirQ] = useState("");
  var selectPhoto = [];
  const handleSelect = (e, file, foler, ext) => {
    if (e.target.checked) {
      selectPhoto.push({
        pdirectory:
          foler === "f1170e67a3928aea569935139470388db9c15fd4"
            ? "Mutual_Funds"
            : foler === "e3149c89b03e1acb74f1af5803e97d03945edc59"
              ? "Insurance"
              : foler === "daa75d5087ab19ca2dc899194d81ad5b8cc08db2"
                ? "Dmats"
                : foler === "36c71e41f2d1e438ced9645067526652bd341cdd"
                  ? "Loan"
                  : " ",
        photo: file,
        ext: ext,
        directory:
          dirQ === "f1170e67a3928aea569935139470388db9c15fd4"
            ? "Mutual_Funds"
            : dirQ === "e3149c89b03e1acb74f1af5803e97d03945edc59"
              ? "Insurance"
              : dirQ === "daa75d5087ab19ca2dc899194d81ad5b8cc08db2"
                ? "Dmats"
                : dirQ === "36c71e41f2d1e438ced9645067526652bd341cdd"
                  ? "Loan"
                  : " ",
      });
    }
  };

  var arr = [{}];
  const handlechange = () => {
    setLoadingSecond(true);
    var checkbox = document.getElementsByClassName("checkbox");
    for (var i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        checkbox[i].checked = false;
      }
    }
    try {
      fetch(urls + "change_dir", {
        method: "POST",
        body: JSON.stringify({
          selectPhoto,
        }),
        headers: headersT,
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.success) {
            console.log(json.data);
            setLoadingSecond(false);
            selectPhoto = arr;
            Timeout();

            // "bDestroy": true });
            // })
          } else {
            selectPhoto = arr;
            setLoadingSecond(false);
            for (const ele of json.data) {
              toast.error(ele);
            }
          }
        })
        .catch((err) => {
          console.log(err.message);
          selectPhoto = arr;
          setLoadingSecond(false);
        });
    } catch (err) {
      console.log(err);
      setLoadingSecond(false);
    }
  };

  return (
    <div className="page-body body-layout-1">
      <div className="file-manager d-flex flex-nowrap">
        <div
          className={
            movbileOpen ? "order-1 custom_scroll open" : "order-1 custom_scroll"
          }
        >
          <h5
            style={{ padding: "10px", textAlign: "center" }}
            className="bg-secondary text-light mb-3 w-100"
          >
            Upload Now
          </h5>
          <ul
            className="nav nav-tabs menu-list list-unstyled mb-0 border-0"
            role="tablist"
          >
            <li className="divider mt-4 py-2 border-top text-uppercase text-muted">
              <small>FILE LABELS</small>
            </li>
            <div className="mb-3">
              <label for="formFile" className="form-label">
                Select Directory/Folder
              </label>
              <select
                className="form-control"
                onChange={(e) => setDir(e.target.value)}
              >
                <option selected>Select File</option>
                <option value="Mutual_Funds">Mutual funds</option>
                <option value="Insurance">Insurance </option>
                <option value="Dmats">DEMAT </option>
                <option value="Loan">Loans</option>
                <option value=" ">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="formFileMultiple" className="form-label">
                Multiple files input example
              </label>
              <input
                className="form-control"
                type="file"
                id="formFileMultiple"
                multiple
                onChange={handleChange}
              />
            </div>
            {loading ? (
              <button
                type="submit"
                className="btn bg-secondary text-light mb-3 w-100"
                disabled
              >
                <i className="fa fa-spinner fa-spin"></i> Uploading...
              </button>
            ) : (
              <button
                type="submit"
                className="btn bg-secondary text-light mb-3 w-100"
                onClick={handleUpload}
              >
                Upload Now
              </button>
            )}
            <li className="divider mt-4 py-2 border-top text-uppercase text-muted">
              <small>FOLDERS</small>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="order-2 flex-grow-1 px-lg-3 px-0 custom_scroll">
          {/* start: page toolbar */}
          <div className="page-toolbar py-2">
            <div className="container-fluid">
              <div className="row g-3 mb-3 align-items-center">
                <div className="col">
                  <ol className="breadcrumb bg-transparent mb-0">
                    <li className="breadcrumb-item">
                      <Link className="text-secondary" href="/">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      File Manager
                    </li>
                  </ol>
                </div>
              </div>{" "}
              {/* .row end */}
            </div>
          </div>
          <div className="container-fluid">
            <div className="row g-3">
              <div className="col-12">
                <div className="tab-content">
                  <div
                    className="tab-pane fade active show"
                    id="drive_mydrive"
                    role="tabpanel"
                  >
                    <div className="d-flex justify-content-between mb-2">
                      <h4 className="mt-1 mb-0">My Drive</h4>
                      <button
                        className="btn btn-sm d-block d-lg-none btn-primary file-list-toggle"
                        type="button"
                        onClick={() => setMobileOpen(!movbileOpen)}
                      >
                        <i className="fa fa-bars" />
                      </button>
                    </div>
                    <div className="card fieldset border border-primary mb-5">
                      <span className="fieldset-tile text-primary bg-body">
                        Suggested:
                      </span>
                      <div className="row g-2 row-deck">
                        <div
                          className="col-lg-2 col-md-6 col-sm-12"
                          id="fileManager-heading"
                          onClick={fetchDocumentMutual}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="card p-3 ribbon">
                            <div className="option-9 position-absolute text-light">
                              <i className="fa fa-star" />
                            </div>
                            <i className="fa fa-folder fa-2x" />
                            <div className="mt-3">
                              <h5>Mutual Funds</h5>
                              <div className="d-flex text-muted flex-wrap justify-content-between small text-uppercase">
                                Files: <span>245</span>
                              </div>
                              <div className="d-flex text-muted flex-wrap justify-content-between small text-uppercase">
                                Size: <span>80MB</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-2 col-md-6 col-sm-12"
                          id="fileManager-heading"
                          onClick={fetchDocumentDmats}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="card p-3">
                            <i className="fa fa-folder fa-2x chart-text-color2" />
                            <div className="mt-3">
                              <h5>DEMAT</h5>
                              <div className="d-flex text-muted flex-wrap justify-content-between small text-uppercase">
                                Files: <span>245</span>
                              </div>
                              <div className="d-flex text-muted flex-wrap justify-content-between small text-uppercase">
                                Size: <span>80MB</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-2 col-md-6 col-sm-12"
                          id="fileManager-heading"
                          onClick={fetchDocumentInsurance}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="card p-3">
                            <i className="fa fa-folder fa-2x chart-text-color3" />
                            <div className="mt-3">
                              <h5>Insurance </h5>
                              <div className="d-flex text-muted flex-wrap justify-content-between small text-uppercase">
                                Files: <span>245</span>
                              </div>
                              <div className="d-flex text-muted flex-wrap justify-content-between small text-uppercase">
                                Size: <span>80MB</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-2 col-md-6 col-sm-12"
                          id="fileManager-heading"
                          onClick={fetchDocumentLoan}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="card p-3">
                            <i className="fa fa-folder fa-2x chart-text-color5" />
                            <div className="mt-3">
                              <h5>Loans</h5>
                              <div className="d-flex text-muted flex-wrap justify-content-between small text-uppercase">
                                Files: <span>245</span>
                              </div>
                              <div className="d-flex text-muted flex-wrap justify-content-between small text-uppercase">
                                Size: <span>80MB</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-2 col-md-6 col-sm-12"
                          id="fileManager-heading"
                          onClick={fetchDocuments}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="card p-3 ribbon">
                            <i className="fa fa-folder fa-2x" />
                            <div className="mt-3">
                              <h5>Others</h5>
                              <div className="d-flex text-muted flex-wrap justify-content-between small text-uppercase">
                                Files: <span>245</span>
                              </div>
                              <div className="d-flex text-muted flex-wrap justify-content-between small text-uppercase">
                                Size: <span>80MB</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      {/* .row end */}
                    </div>
                    <div className="row g-2 mb-5">
                      <div className="mb-1" style={{ width: "20%" }}>
                        <label
                          for="formFile"
                          className="form-label"
                          id="mobile-label-file"
                        >
                          Select Directory/Folder
                        </label>
                        <select
                          className="form-control"
                          id="mobile-select-dirchange"
                          onChange={(e) => setDirQ(e.target.value)}
                          style={{ marginBottom: "5px" }}
                        >
                          <option selected>Select File</option>
                          <option value="f1170e67a3928aea569935139470388db9c15fd4">
                            Mutual funds
                          </option>
                          <option value="e3149c89b03e1acb74f1af5803e97d03945edc59">
                            Insurance{" "}
                          </option>
                          <option value="daa75d5087ab19ca2dc899194d81ad5b8cc08db2">
                            Demats{" "}
                          </option>
                          <option value="36c71e41f2d1e438ced9645067526652bd341cdd">
                            Loans
                          </option>
                          <option value="">Other</option>
                        </select>
                        {loadingSecond ? (
                          <button
                            type="button"
                            id="btn-mobile"
                            className="btn bg-secondary text-light mb-3 w-100"
                            disabled
                          >
                            <i className="fa fa-spinner fa-spin"></i>{" "}
                            Changing...
                          </button>
                        ) : (
                          <button
                            type="submit"
                            id="btn-mobile"
                            className="btn bg-secondary text-light mb-3 w-100"
                            onClick={handlechange}
                          >
                            Change Folder/Directory
                          </button>
                        )}
                      </div>

                      <div className="row g-3">
                        <div className="col-xl-12">
                          <div
                            className={
                              fullscreen
                                ? "card m-0 p-0 border-info fullscreen"
                                : "card m-0 p-0 border-info"
                            }
                          >
                            <div className="card-header py-3 bg-transparent border-bottom-0 bg-primary">
                              <h6 className="card-title mb-0 text-light">
                                {" "}
                                Documents{" "}
                              </h6>
                              <div className="dropdown morphing scale-left">
                                <a
                                  className="card-fullscreen"
                                  data-bs-toggle="tooltip"
                                  title="Card Full-Screen"
                                  style={{ cursor: "pointer" }}
                                >
                                  <i
                                    className="icon-size-fullscreen"
                                    onClick={() => setFullScreen(!fullscreen)}
                                    style={{ color: "#f8f6f2" }}
                                  ></i>
                                </a>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="table-responsive">
                                <table
                                  id="filemanager"
                                  className="table myDataTable align-middle custom-table"
                                >
                                  <thead>
                                    <tr>
                                      <th>select</th>
                                      <th>ID</th>
                                      <th>File</th>
                                      {/* <th>Extension/File Type</th>
                                       */}
                                      <th>Extension </th>
                                      <th>Path</th>
                                      <th>Status</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {documentView?.map((item, i) => (
                                      <tr>
                                        <td>
                                          <input
                                            type="checkbox"
                                            className={`checkbox`}
                                            ref={(element) =>
                                              checkboxesRef.current.push(
                                                element,
                                              )
                                            }
                                            id={item.folder_name}
                                            onChange={(e) =>
                                              handleSelect(
                                                e,
                                                item.file,
                                                item.folder_name,
                                                item.extention,
                                              )
                                            }
                                          />
                                        </td>
                                        <td>{item.id}</td>
                                        <td>{item.file}</td>
                                        <td>{item.extention}</td>
                                        {/*<td>{item.created_at}</td>
                                                                <td>{item.updated_at}</td> */}
                                        <td>
                                          {item.folder_name ===
                                          "f1170e67a3928aea569935139470388db9c15fd4"
                                            ? "Mutual Fund"
                                            : item.folder_name ===
                                                "e3149c89b03e1acb74f1af5803e97d03945edc59"
                                              ? "Insurance"
                                              : item.folder_name ===
                                                  "daa75d5087ab19ca2dc899194d81ad5b8cc08db2"
                                                ? "Demat"
                                                : item.folder_name ===
                                                    "36c71e41f2d1e438ced9645067526652bd341cdd"
                                                  ? "Loans"
                                                  : "Other"}
                                        </td>
                                        <td>{item.status}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* .row end */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="drive_withme"
                    role="tabpanel"
                  >
                    <div className="d-flex justify-content-between mb-2">
                      <h4 className="mt-1 mb-0">Shared with Me</h4>
                      <button
                        className="btn btn-sm d-block d-lg-none btn-primary file-list-toggle"
                        type="button"
                      >
                        <i className="fa fa-bars" />
                      </button>
                    </div>
                    <div className="row g-2 row-deck">
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card p-3">
                          <i className="fa fa-folder fa-2x chart-text-color2" />
                          <div className="mt-3">
                            <h5>Birthday Party</h5>
                            <div className="d-flex text-muted flex-wrap justify-content-between small text-uppercase">
                              Files: <span>648</span>
                            </div>
                            <div className="d-flex text-muted flex-wrap justify-content-between small text-uppercase">
                              Size: <span>850MB</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card p-3">
                          <i className="fa fa-folder fa-2x chart-text-color3" />
                          <div className="mt-3">
                            <h5>1 Day Outing</h5>
                            <div className="d-flex text-muted flex-wrap justify-content-between small text-uppercase">
                              Files: <span>172</span>
                            </div>
                            <div className="d-flex text-muted flex-wrap justify-content-between small text-uppercase">
                              Size: <span>790MB</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card p-3">
                          <i className="fa fa-folder fa-2x chart-text-color5" />
                          <div className="mt-3">
                            <h5>Templates</h5>
                            <div className="d-flex text-muted flex-wrap justify-content-between small text-uppercase">
                              Files: <span>890</span>
                            </div>
                            <div className="d-flex text-muted flex-wrap justify-content-between small text-uppercase">
                              Size: <span>506MB</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* .row end */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="drive_recent"
                    role="tabpanel"
                  >
                    <div className="d-flex justify-content-between mb-2">
                      <h4 className="mt-1 mb-0">Recent</h4>
                      <button
                        className="btn btn-sm d-block d-lg-none btn-primary file-list-toggle"
                        type="button"
                      >
                        <i className="fa fa-bars" />
                      </button>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="drive_trash"
                    role="tabpanel"
                  >
                    <div className="d-flex justify-content-between mb-2">
                      <h4 className="mt-1 mb-0">Trash</h4>
                      <button
                        className="btn btn-sm d-block d-lg-none btn-primary file-list-toggle"
                        type="button"
                      >
                        <i className="fa fa-bars" />
                      </button>
                    </div>
                    {/* widgets: No data */}
                    <div className="card m-0 p-0 border-info">
                      <div className="card-body text-center p-5">
                        <img
                          src="./assets/img/no-data.svg"
                          className="w120"
                          alt="No Data"
                        />
                        <div className="mt-4 mb-3">
                          <span className="text-muted">No data to show</span>
                        </div>
                        <button
                          type="button"
                          className="btn btn-white border lift"
                        >
                          Get Started
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary border lift"
                        >
                          Back to Home
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* .row end */}
            </div>
          </div>
          {/* start: page footer */}
        </div>
      </div>
      {/* offcanvas: drive analytics */}
      {/* <button className="btn btn-primary px-4 text-uppercase" data-bs-toggle="modal" data-bs-target="#drive_analytics" type="button">Drive Analytics</button> */}
      {/* offcanvas: drive analytics */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="drive_analytics"
        aria-labelledby="drive_analytics"
      >
        <div className="offcanvas-header">
          <h5>Drive Analytics</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body custom_scroll">
          <div className="row g-2">
            <div className="col-12">
              <div className="card m-0 p-0 border-info">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col fa fa-google fa-2x" />
                    <div className="col-auto">
                      <div className="dropdown morphing scale-left">
                        <a
                          className="dropdown-toggle more-icon"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fa fa-ellipsis-h" />
                        </a>
                        <ul className="dropdown-menu shadow border-0 p-2">
                          <li>
                            <a className="dropdown-item" href="#">
                              File Info
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Copy to
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Move to
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Rename
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Block
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <h6>Google Drive</h6>
                  <div className="mt-2">
                    <div className="progress mb-2" style={{ height: 3 }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        aria-valuenow={87}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "50%" }}
                      />
                    </div>
                    <label className="small d-flex justify-content-between text-muted">
                      7.23GB<span>15GB</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card m-0 p-0 border-info">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col fa fa-dropbox fa-2x" />
                    <div className="col-auto">
                      <div className="dropdown morphing scale-left">
                        <a
                          className="dropdown-toggle more-icon"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fa fa-ellipsis-h" />
                        </a>
                        <ul className="dropdown-menu shadow border-0 p-2">
                          <li>
                            <a className="dropdown-item" href="#">
                              File Info
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Copy to
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Move to
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Rename
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Block
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <h6>Dropbox Drive</h6>
                  <div className="mt-2">
                    <div className="progress mb-2" style={{ height: 3 }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        aria-valuenow={87}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "85%" }}
                      />
                    </div>
                    <label className="small d-flex justify-content-between text-muted">
                      1.8GB<span>2GB</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card m-0 p-0 border-info">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col fa fa-hdd-o fa-2x" />
                    <div className="col-auto">
                      <div className="dropdown morphing scale-left">
                        <a
                          className="dropdown-toggle more-icon"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fa fa-ellipsis-h" />
                        </a>
                        <ul className="dropdown-menu shadow border-0 p-2">
                          <li>
                            <a className="dropdown-item" href="#">
                              File Info
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Copy to
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Move to
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Rename
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Block
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <h6>One Drive</h6>
                  <div className="mt-2">
                    <div className="progress mb-2" style={{ height: 3 }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow={87}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "20%" }}
                      />
                    </div>
                    <label className="small d-flex justify-content-between text-muted">
                      2GB<span>10GB</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card m-0 p-0 border-info">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col fa fa-server fa-2x" />
                    <div className="col-auto">
                      <div className="dropdown morphing scale-left">
                        <a
                          className="dropdown-toggle more-icon"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fa fa-ellipsis-h" />
                        </a>
                        <ul className="dropdown-menu shadow border-0 p-2">
                          <li>
                            <a className="dropdown-item" href="#">
                              File Info
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Copy to
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Move to
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Rename
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Block
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <h6>Server</h6>
                  <div className="mt-2">
                    <div className="progress mb-2" style={{ height: 3 }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow={87}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "20%" }}
                      />
                    </div>
                    <label className="small d-flex justify-content-between text-muted">
                      2GB<span>10GB</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* .row end */}
        </div>
      </div>
      {/* Plugin Js */}
      {/* Jquery Page Js */}
    </div>
  );
}
