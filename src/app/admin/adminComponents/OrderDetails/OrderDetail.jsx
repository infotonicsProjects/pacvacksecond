"use client";

import React, { useState } from "react";
import DataTable from "react-data-table-component";

import { CustomeHook } from "../../../../../../Environment/CustomeHook";
import LoadingComponet from "../LoadingComponent";
import { ActionButton } from "../New-project/Table";

const OrderDetail = () => {
  const [loading, setLoading] = useState(true);
  const orderData = CustomeHook("orders_table", setLoading);
  console.log(orderData);

  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Order Date",
      selector: (row) => row.order_date,
      sortable: true,
    },
    {
      name: "Order Status",
      selector: (row) => row.order_status,
      sortable: true,
    },

    {
      name: "Payment Method",
      selector: (row) => row.payment_method,
      sortable: true,
    },

    {
      name: "Payment Status",
      selector: (row) => row.payment_status,
      sortable: true,
    },
    {
      name: "Shipping Method",
      selector: (row) => row.shipping_method,
      sortable: true,
    },
    {
      name: "Total Amount",
      selector: (row) => row.t_amount,
      sortable: true,
      button: true,
      cell: (e) => <ActionButton props={e} />,
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "12px",
        background: "#F9F4F4",
      },
    },
    cells: {
      style: {
        paddingLeft: "10px", // override the cell padding for data cells
        paddingRight: "8px",
        borderRight: "1px solid #eee",
        borderLeft: "1px solid #eee",
        borderTop: "0px ",
        borderBottom: "0px ",

        minWidth: "25px",
      },
    },
  };

  return (
    <div>
      {loading ? (
        <LoadingComponet />
      ) : (
        <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h6 className="card-title mb-0">Order List</h6>
                    <div className="dropdown morphing scale-left">
                      <a
                        href="#"
                        className="card-fullscreen"
                        data-bs-toggle="tooltip"
                        title="Card Full-Screen"
                      >
                        <i className="icon-size-fullscreen" />
                      </a>
                      <a
                        href="#"
                        className="more-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
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
                  <div className="card-body">
                    <DataTable
                      columns={columns}
                      data={orderData}
                      // expandableRows
                      pagination
                      customStyles={customStyles}
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Row end  */}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetail;
