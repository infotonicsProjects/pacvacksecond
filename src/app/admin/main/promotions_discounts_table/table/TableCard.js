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
        <div>{table.promo_code}</div>
      </td>
      <td>
        <div>{table.discount}</div>
      </td>
      <td>
        <div>{table.exp_date}</div>
      </td>
      <td>
        <div>{table.applicable_products}</div>
      </td>

      <td>
        <div>
          <button
            type="button"
            class="btn lift btn-lg rounded-4 btn-light-primary"
            onClick={HandleEdit}
            id={table.id}
          >
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
}
