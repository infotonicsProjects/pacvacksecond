"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function TableCard({ table, handleDelelt }) {
  const navigate = useRouter();
  const HandleEdit = (e) => {
    navigate.push(`edit/${e.target.id}`);
  };

  return (
    <tr>
      <td>
        <div>
          {table?.design.slice(0, 4) === "http" && (
            <Image
              src={table?.design}
              alt={table?.font_name}
              width={100}
              height={100}
            />
          )}
        </div>
      </td>
      <td>
        <div>{table.font_name}</div>
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
          <button
            type="button"
            class="btn lift btn-lg rounded-4 btn-light-primary ms-2"
            onClick={handleDelelt}
            id={table.id}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
