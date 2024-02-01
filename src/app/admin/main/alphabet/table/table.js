"use client";
import React, { useEffect, useState } from "react";
import TableCard from "./TableCard";
import Pagination from "../../../../../app/admin/adminComponents/Pagination";
import LoadingComponet from "../../../../../app/admin/adminComponents/LoadingComponent";
import "jquery/dist/jquery.min.js";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { CustomeHookTable } from "../../../../../Environment/CustomeHooksFortable";
import { ToastColor } from "../../../../../utlis/Toast";
import { DeleteData } from "../../../../../utlis/ClientApi";

export default function Table() {
  const [loading, setLoading] = useState(true);
  const [secondLoading, setSecondLoading] = useState(true);
  const tableData = CustomeHookTable("alphabet_design", setLoading);
  const controller = new AbortController();
  const signal = controller.signal;

  const handleDelelt = async (e) => {
    const id = e.target.id;
    const response = await DeleteData(
      `alphabet_design/${id}`,
      setSecondLoading,
      signal,
    );
    if (response) {
      ToastColor("Delete successfully");
    }
  };
  useEffect(() => {}, [secondLoading]);
  return (
    <>
      {loading ? (
        <LoadingComponet />
      ) : (
        <>
          <Pagination heading="Alphabet design" page={"Table"} />
          <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3 mb-5">
            <div className="container-fluid">
              <div className="row g-3">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-header">
                      <h6 className="card-title mb-0">
                        Cms Pages Account Manager
                      </h6>
                      <div className="dropdown morphing scale-left">
                        <a
                          href="#y"
                          className="card-fullscreen"
                          data-bs-toggle="tooltip"
                          title="Card Full-Screen"
                        >
                          <i className="icon-size-fullscreen"></i>
                        </a>
                        <a
                          href="#y"
                          className="more-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-h"></i>
                        </a>
                        <ul className="dropdown-menu shadow border-0 p-2">
                          <li>
                            <a className="dropdown-item" href="#y">
                              File Info
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#y">
                              Copy to
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#y">
                              Move to
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#y">
                              Rename
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#y">
                              Block
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#y">
                              Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          id="myAllAgents"
                          className="table myDataTable align-middle custom-table"
                        >
                          <thead>
                            <tr>
                              <th>Design</th>
                              <th>Font name</th>

                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tableData.map((table, index) => (
                              <TableCard
                                key={index}
                                table={table}
                                handleDelelt={handleDelelt}
                              />
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- .row end --> */}
            </div>
          </div>
        </>
      )}
    </>
  );
}
