"use client";
import React, { useEffect, useState } from "react";
import { urls } from "../../Environment/index";
import $ from "jquery";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import { toast } from "react-toastify";

import Link from "next/link";
import { useRouter } from "next/navigation";

const SupportTicket = () => {
  const [fullscreen, setFullScreen] = useState(false);
  const [table, setTable] = useState([]);
  const [data, setData] = useState([]);
  const [french_id, setFrenchId] = useState(1);
  const [user_id, setUserId] = useState("");
  const [countLeads, setLeadsCount] = useState(0);
  const [statusComp, setStatusComp] = useState(0);
  const [statusReje, setStatusRejec] = useState(0);
  const [statusProgess, setStatusProgess] = useState(0);
  const [statusHold, setStatusHold] = useState(0);
  const [statusNew, setStatusNew] = useState(0);
  const [loading, setLoading] = useState(true);
  const local = JSON.parse(sessionStorage.getItem("loginUser"));
  if (local) {
    var [role, token] = local.split("|");
    var headersT = { Authorization: `Bearer ${token}`, role: role };
  }
  const leadCreate = (e) => {
    setLoading(true);
    e.preventDefault();
    var userName = e.target[3].value;
    var remakrs = e.target[6].value;
    var serviceId = e.target[5].value;
    var leadStaus = e.target[7].value;
    var Note = e.target[8].value;
    var CompanyName = e.target[9].value;
    var ContactNo = e.target[10].value;
    var address = e.target[12].value;
    var emailId = e.target[11].value;
    var comment = e.target[13].value;
    if (role === "6ee2cfa2db9590c15da140b7e064e88796d02d92") {
      userName = e.target[2].value;
      serviceId = e.target[3].value;
      remakrs = e.target[4].value;
      leadStaus = e.target[5].value;
      Note = e.target[6].value;
      CompanyName = e.target[7].value;
      ContactNo = e.target[8].value;
      emailId = e.target[9].value;
      address = e.target[10].value;
      comment = e.target[11].value;
    }
    fetch(urls + "newlead", {
      method: "POST",
      body: JSON.stringify({
        name: userName,
        service_id: serviceId,
        comment: comment,
        remarks: remakrs,
        lead_status: leadStaus,
        user_id: user_id,
        french_id: french_id,
        note: Note,
        company_name: CompanyName,
        cont_no: ContactNo,
        email_id: emailId,
        address: address,
      }),
      headers: headersT,
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.success) {
          setLoading(false);
          for (var i = 0; i < e.target.length; i++) {
            e.target[i].value = "";
          }
        } else {
          loading(false);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    var dt1 = $.fn.dataTable.tables()[0];
    $(dt1).DataTable().destroy();
    try {
      fetch(urls + "admin_tickets", { headers: headersT })
        .then((response) => response.json())
        .then((json) => {
          if (json.success) {
            setTable(json.data);
            setLeadsCount(json.data.length);
            try {
              $(document).ready(function () {
                $("#assetTable").DataTable({
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
                            var val = $.fn.dataTable.util.escapeRegex(
                              $(this).val(),
                            );
                            column.search(val ? val : "", true, false).draw();
                          });
                      });
                  },
                  pagingType: "full_numbers",
                  pageLength: 5,
                  processing: true,
                  dom: "Bfrtip",
                  buttons: [
                    "copyHtml5",
                    "excelHtml5",
                    "csvHtml5",
                    "pdfHtml5",
                    "print",
                  ],
                  responsive: true,
                  columnDefs: [
                    { responsivePriority: 1, targets: 0 },
                    { responsivePriority: 2, targets: -1 },
                  ],
                  stateSave: true,
                  bDestroy: true,
                });
              });
              var dt1 = $.fn.dataTable.tables()[0];
              $(dt1).DataTable().destroy();
            } catch (err) {
              console.log(err, "table");
            }
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
    try {
      fetch(urls + "liab_exp_infos/" + 1, { headers: headersT })
        .then((response) => response.json())
        .then((json) => {
          if (json.success) {
            setData(json.data);
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
  const navigate = useRouter();
  useEffect(() => {
    let valueNew = 0;
    let valueRej = 0;
    let valueComp = 0;
    let valueProgre = 0;
    let valueHold = 0;
    for (const item of table) {
      if (item.status === "C") {
        valueComp += 1;
        setStatusComp(valueComp);
      } else if (item.status === "P") {
        valueProgre += 1;
        setStatusProgess(valueProgre);
      } else if (item.status === "H") {
        valueHold += 1;
        setStatusHold(valueHold);
      } else if (item.status === "Y") {
        valueNew += 1;
        setStatusNew(valueNew);
      } else if (item.status === "R") {
        valueRej += 1;
        setStatusRejec(valueRej);
      }
    }
  }, [table, loading]);
  const [searchValue, setSearchVaule] = useState("");
  const handleChange = (e) => {
    setSearchVaule(e.target.value);
  };
  const HandleSearch = () => {
    var box = document.getElementsByClassName("dataTables_filter");
    var input = box[0].childNodes[0];
    input.childNodes[1].value = searchValue;
  };
  return (
    <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
      <div className="container-fluid">
        <div className="row g-3">
          {/* /adding new code here */}
          <div className="page-toolbar px-xl-4 px-sm-2 px-0 py-3">
            <div className="container-fluid">
              <div className="row g-3 mb-3 align-items-center">
                <div className="col">
                  <ol className="breadcrumb bg-transparent mb-0">
                    <li className="breadcrumb-item">
                      <Link href="/"> Home </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {" "}
                      Support Ticket{" "}
                    </li>
                  </ol>
                </div>
              </div>
              {/* <!-- .row end --> */}
              <div className="row align-items-center">
                <div className="col-auto">
                  <h1 className="fs-5 color-900 mt-1 mb-0"> Support Ticket </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Modal: Add new Leads */}
          {/* <button className="btn btn-primary px-4 text-uppercase" data-bs-toggle="modal" data-bs-target="#add_leads" type="button" ><i className="fa fa-plus"></i>Add new Leads</button> */}
          <div
            className="modal fade"
            id="add_leads"
            tabIndex={-1}
            aria-labelledby="add_leads"
            style={{ display: "none" }}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-scrollable">
              <form onSubmit={leadCreate}>
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Add New Lead</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>

                  <div className="modal-body">
                    <h6 className="fw-bold">Lead Information</h6>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="row g-2">
            {/* add herrererere */}

            <div className="col-12" style={{ marginBottom: "15px" }}>
              <div className="card overflow-hidden">
                <div className="progress" style={{ height: 4 }}>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "20%" }}
                    aria-valuenow={32}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "30%" }}
                    aria-valuenow={23}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "10%" }}
                    aria-valuenow={13}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow={7}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-3 col-sm-6">
                      <div className="card p-3">
                        <div className="text-muted text-uppercase">
                          <i className="fa fa-circle me-2 text-danger" />
                          New Ticket
                        </div>
                        <div className="mt-1">
                          <span className="fw-bold h4 mb-0">{statusNew}</span>
                          {/* <span className="ms-1">
                                                        5% <i className="fa fa-caret-up" />
                                                    </span> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="card p-3">
                        <div className="text-muted text-uppercase">
                          <i className="fa fa-circle me-2 text-info" />
                          In Prograss
                        </div>
                        <div className="mt-1">
                          <span className="fw-bold h4 mb-0">
                            {statusProgess}
                          </span>
                          {/* <span className="ms-1">
                                                        8% <i className="fa fa-caret-down" />
                                                    </span> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="card p-3">
                        <div className="text-muted text-uppercase">
                          <i className="fa fa-circle me-2 text-warning" />
                          On Hold
                        </div>
                        <div className="mt-1">
                          <span className="fw-bold h4 mb-0">{statusHold}</span>
                          {/* <span className="ms-1">
                                                        2% <i className="fa fa-caret-up" />
                                                    </span> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="card p-3">
                        <div className="text-muted text-uppercase">
                          <i className="fa fa-circle me-2 text-success" />
                          Completed
                        </div>
                        <div className="mt-1">
                          <span className="fw-bold h4 mb-0">{statusComp}</span>
                          {/* <span className="ms-1">
                                                        18% <i className="fa fa-caret-up" />
                                                    </span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-xxl-9 col-lg-8 col-md-8">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Find Ticket..."
                          onChange={handleChange}
                        />
                        <label>Find Ticket...</label>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-md-4 text-lg-end">
                      <button
                        type="button"
                        className="btn btn-lg btn-primary"
                        onClick={HandleSearch}
                      >
                        Search
                      </button>
                      <button
                        className="btn btn-lg btn-primary"
                        // data-bs-toggle="modal"
                        // data-bs-target="#add_leads"
                        type="button"
                        onClick={() => navigate("/admin_tickets/add")}
                        style={{ margin: "5px" }}
                      >
                        Add New Ticket
                      </button>
                    </div>
                    <div className="col-12 fs-6">
                      <form>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="All"
                          />
                          <label className="form-check-label" htmlFor="All">
                            All
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="NewTicket"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="NewTicket"
                          >
                            NewTicket
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="InPrograss"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="InPrograss"
                          >
                            In Prograss
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="OnHold"
                          />
                          <label className="form-check-label" htmlFor="OnHold">
                            On Hold
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="Completed"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Completed"
                          >
                            Completed
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>{" "}
                  {/* Row end  */}
                </div>
              </div>
            </div>

            {/* end therhrere */}
            <div className="col-xxl-12 col-xl-12 col-lg-7 col-md-12">
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
                      {/* <h6 className="card-title mb-0 text-light"> Assets </h6> */}

                      <h6 className="card-title mb-0 text-light">
                        Showing {countLeads} Tickets
                      </h6>
                      {/* <span className="text-muted small">Based your preferences</span> */}

                      <div className="dropdown morphing scale-left">
                        <a
                          className="card-fullscreen"
                          data-bs-toggle="tooltip"
                          title="Card Full-Screen"
                          style={{ cursor: "pointer", color: "#f8f6f2" }}
                          onClick={() => setFullScreen(!fullscreen)}
                        >
                          <i
                            className="icon-size-fullscreen"
                            style={{ color: "#f8f6f2" }}
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table
                              id="assetTable"
                              className="table align-middle table-bordered mb-0 custom-table-2"
                            >
                              <thead>
                                <tr>
                                  <th>ID</th>
                                  <th> User Id</th>
                                  <th>Franchise ID</th>
                                  {/* <th>Ticket Id</th> */}
                                  <th>Status</th>
                                  {/* <th >Doc Url</th> */}
                                  {/* <th>Message</th> */}
                                  {/* <th>Request Date </th> */}
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {table?.map((value, i) => (
                                  <tr>
                                    <td>{value.id}</td>
                                    <td>
                                      <a
                                        onClick={() =>
                                          navigate("/ticketsview/" + value.id)
                                        }
                                        style={{
                                          cursor: "pointer",
                                          color: "orange",
                                        }}
                                      >
                                        {value.user_id}
                                      </a>
                                    </td>
                                    <td>{value.french_id}</td>
                                    {/* <td>{value.cont_no}</td> */}
                                    {/* <td>{value.tkt_id}</td> */}
                                    <td>{value.status}</td>
                                    {/* <td>{value.doc_url}</td> */}
                                    {/* <td>{value.msgs}</td> */}
                                    <td>
                                      <button
                                        type="button"
                                        className="btn btn-link btn-sm text-muted"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        aria-label="View"
                                        data-bs-original-title="View"
                                        onClick={() =>
                                          navigate("/ticketsview/" + value.id)
                                        }
                                      >
                                        <i className="fa fa-eye" />
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-link btn-sm text-muted"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        aria-label="comments"
                                        data-bs-original-title="comments"
                                        onClick={() =>
                                          navigate(
                                            "/ticketsview/" + value.id + "/c",
                                          )
                                        }
                                      >
                                        <i className="fa fa-comments" />
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* .row end */}
      </div>
    </div>
  );
};

export default SupportTicket;

// < div className = "page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3" >
//     <div className="container-fluid">
//         <div className="row g-2">
//             <div className="col-12">
//                 <div className="card overflow-hidden">
//                     <div className="progress" style={{ height: 4 }}>
//                         <div
//                             className="progress-bar bg-danger"
//                             role="progressbar"
//                             style={{ width: "20%" }}
//                             aria-valuenow={32}
//                             aria-valuemin={0}
//                             aria-valuemax={100}
//                         />
//                         <div
//                             className="progress-bar bg-info"
//                             role="progressbar"
//                             style={{ width: "30%" }}
//                             aria-valuenow={23}
//                             aria-valuemin={0}
//                             aria-valuemax={100}
//                         />
//                         <div
//                             className="progress-bar bg-warning"
//                             role="progressbar"
//                             style={{ width: "10%" }}
//                             aria-valuenow={13}
//                             aria-valuemin={0}
//                             aria-valuemax={100}
//                         />
//                         <div
//                             className="progress-bar bg-success"
//                             role="progressbar"
//                             style={{ width: "40%" }}
//                             aria-valuenow={7}
//                             aria-valuemin={0}
//                             aria-valuemax={100}
//                         />
//                     </div>
//                     <div className="card-body">
//                         <div className="row g-3">
//                             <div className="col-md-3 col-sm-6">
//                                 <div className="card p-3">
//                                     <div className="text-muted text-uppercase">
//                                         <i className="fa fa-circle me-2 text-danger" />
//                                         New Ticket
//                                     </div>
//                                     <div className="mt-1">
//                                         <span className="fw-bold h4 mb-0">12</span>
//                                         <span className="ms-1">
//                                             5% <i className="fa fa-caret-up" />
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-md-3 col-sm-6">
//                                 <div className="card p-3">
//                                     <div className="text-muted text-uppercase">
//                                         <i className="fa fa-circle me-2 text-info" />
//                                         In Prograss
//                                     </div>
//                                     <div className="mt-1">
//                                         <span className="fw-bold h4 mb-0">55</span>
//                                         <span className="ms-1">
//                                             8% <i className="fa fa-caret-down" />
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-md-3 col-sm-6">
//                                 <div className="card p-3">
//                                     <div className="text-muted text-uppercase">
//                                         <i className="fa fa-circle me-2 text-warning" />
//                                         On Hold
//                                     </div>
//                                     <div className="mt-1">
//                                         <span className="fw-bold h4 mb-0">8</span>
//                                         <span className="ms-1">
//                                             2% <i className="fa fa-caret-up" />
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-md-3 col-sm-6">
//                                 <div className="card p-3">
//                                     <div className="text-muted text-uppercase">
//                                         <i className="fa fa-circle me-2 text-success" />
//                                         Completed
//                                     </div>
//                                     <div className="mt-1">
//                                         <span className="fw-bold h4 mb-0">105</span>
//                                         <span className="ms-1">
//                                             18% <i className="fa fa-caret-up" />
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="card-body">
//                         {" "}
//                         {/* Row end  */}
//                     </div>
//                 </div>
//             </div>
//             <div className="col-12">
//                 <h5 className="mb-0 mt-3">Showing 8 Ticket</h5>
//                 <span className="text-muted small">Based your preferences</span>
//             </div>
//             <div className="col-12">
//                 <div className="table-responsive">
//                     <table className="table align-middle table-bordered mb-0 custom-table-2">
//                         <thead>
//                             <tr>
//                                 <th>Ticket ID</th>
//                                 <th>Subject</th>
//                                 <th>Status</th>
//                                 <th>Last Update</th>
//                                 <th>Supoort</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <Data data={data} />
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>{" "}
//         {/* Row end  */}
//     </div>
//         </div >
