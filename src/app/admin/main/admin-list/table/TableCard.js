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
        <div>{table.id}</div>
      </td>
      <td>
        <div>{table.name}</div>
      </td>
      <td>
        <div>{table.email}</div>
      </td>

      {/* <td><div className="d-flex">

                <button type="button" class="btn lift btn-lg rounded-4 btn-light-primary"
                    onClick={HandleEdit} id={table.id}

                >Edit</button>
            </div></td> */}
    </tr>
  );
}
