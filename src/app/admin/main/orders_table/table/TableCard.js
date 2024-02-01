import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { PutData } from "../../../../../utlis/ClientApi";
import Link from "next/link";

export default function TableCard({ table }) {
  const [orderStatus, setOrderStatus] = useState(table?.order_status);
  const [loading, setLoading] = useState(false);

  const navigate = useRouter();

  const controller = new AbortController();
  const signal = controller.signal;

  const HandleEdit = (e) => {
    navigate.push(`edit/${e.target.id}`);
  };

  const submitOrderStatus = async (e, value) => {
    e.preventDefault();
    const data = {
      order_status: value,
    };

    const response = await PutData(
      "orders_table/" + e.target.id,
      setLoading,
      signal,
      data,
    );
  };

  return (
    <tr>
      <td>
        <div>
          <Link href={`/admin/main/invoice/view/${table.id}`} id={table.id}>
            {table.id}
          </Link>
        </div>
      </td>
      <td>
        <div>{table.user_id}</div>
      </td>
      <td>
        <div>{table.order_date}</div>
      </td>
      <td>
        <div>{table.t_amount}</div>
      </td>
      <td>
        <select
          defaultValue={table.order_status}
          className="form-select"
          onChange={(e) => {
            setOrderStatus(e.target.value),
              submitOrderStatus(e, e.target.value);
          }}
          id={table.id}
        >
          <option value="Pending">Pending</option>
          {/* <option value="On the Way">On the Way</option> */}
          <option value="Processing">Processing</option>
        </select>
      </td>
      <td>
        <div>{table.shipping_method}</div>
      </td>
      <td>
        <div>{table.payment_method}</div>
      </td>
      <td>
        <div>{table.payment_status}</div>
      </td>

      {/* <td><div>

                <button type="button" class="btn lift btn-lg rounded-4 btn-light-primary"
                    onClick={HandleEdit}    id= {table.id}

                >Edit</button>
            </div></td> */}
    </tr>
  );
}
