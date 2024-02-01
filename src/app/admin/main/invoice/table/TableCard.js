import React from "react";
import { useRouter } from "next/navigation";

export default function TableCard({ table }) {
  const navigate = useRouter();

  const HandleEdit = (e) => {
    navigate.push(`edit/${e.target.id}`);
  };
  const HandleView = (e) => {
    navigate.push(`view/${e.target.id}`);
  };
  // const HandleDownload = (e) => {
  //     navigate.push(`download/${e.target.id}`)
  // }

  return (
    <tr>
      <td>
        <div>{table.invoice_no}</div>
      </td>
      <td>
        <div>{table.discount}</div>
      </td>
      <td>
        <div>{table.tax}</div>
      </td>
      <td>
        <div>{table.shipping_address}</div>
      </td>
      <td>
        <div>{table.mobile_no}</div>
      </td>
      <td>
        <div>{table.email}</div>
      </td>
      <td>
        <div>{table.amount}</div>
      </td>

      <td>
        <div className="d-flex gap-2">
          <button
            type="button"
            class="btn lift btn-lg rounded-4 btn-light-primary"
            onClick={HandleEdit}
            id={table.id}
          >
            Edit
          </button>

          <button
            type="button"
            class="btn lift btn-lg rounded-4 btn-light-primary"
            onClick={HandleView}
            id={table.id}
          >
            View
          </button>
          {/* <button type="button" class="btn lift btn-lg rounded-4 btn-light-primary"
                    onClick={HandleDownload} id={table.id}

                >Download</button> */}
        </div>
      </td>
    </tr>
  );
}
