"use client";
import { useRouter } from "next/navigation";
import React from "react";
export default function TableCard({ table }) {
  const navigate = useRouter();

  const HandleEdit = (e) => {
    navigate.push(`edit/${e.target.id}`);
  };

  return (
    <tr>
      <td>
        <div>{table.page_id}</div>
      </td>
      <td>
        <div>{table.id}</div>
      </td>
      <td>
        <div>{table.image_url}</div>
      </td>
      <td>
        <div>{table.alt_text}</div>
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
