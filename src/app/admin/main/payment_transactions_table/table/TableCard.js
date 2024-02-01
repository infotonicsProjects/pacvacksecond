import React from "react";
import { useRouter } from "next/navigation";
export default function TableCard({ table }) {
  const navigate = useRouter();

  const HandleEdit = (e) => {
    navigate.push(`edit/${e.target.id}`);
  };

  return (
    <tr>
      <td>
        <div>{table.id}</div>
      </td>
      <td>
        <div>{table.order_id}</div>
      </td>
      <td>
        <div>{table.user_id}</div>
      </td>
      <td>
        <div>{table.tr_date}</div>
      </td>
      <td>
        <div>{table.pay_amount}</div>
      </td>
      <td>
        <div>{table.pay_status}</div>
      </td>
      <td>
        <div>{table.gateway_details}</div>
      </td>

      {/* <td><div>

                <button type="button" class="btn lift btn-lg rounded-4 btn-light-primary"
                    onClick={HandleEdit}    id= {table.id}

                >Edit</button>
            </div></td> */}
    </tr>
  );
}
