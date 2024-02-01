import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function TableCard({ table }) {
  const navigate = useRouter();

  const HandleEdit = (e) => {
    navigate.push(`edit/${e.target.id}`);
  };

  return (
    <tr>
      <td>
        <div>
          <Link href={`/admin/main/userinfo/${table.id}`}>
            {table.username}
          </Link>
        </div>
      </td>
      <td>
        <div>{table.email}</div>
      </td>
      <td>
        <div>{table.shipping}</div>
      </td>
      <td>
        <div>{table.billing}</div>
      </td>
      <td>
        <div>{table.other_info}</div>
      </td>
      <td>
        <div>{table.img}</div>
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
