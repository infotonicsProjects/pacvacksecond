import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { urlImage } from "../../../../../Environment/index";

export default function TableCard({ table }) {
  const navigate = useRouter();

  const HandleEdit = (e) => {
    navigate.push(`edit/${e.target.id}`);
  };

  const image = urlImage + table?.path + "/" + JSON.parse(table?.file)[0];
  return (
    <tr>
      <td>
        <div>{table.id}</div>
      </td>
      <td>
        <div>{table.user_id}</div>
      </td>
      <td>
        <img
          src={image}
          height={40}
          width={40}
          alt="image"
          className="cursor-pointer rounded zoom-on-hover border p-2"
        />
      </td>
      <td>
        <div>{table.file}</div>
      </td>
      <td>
        <div>{table.path}</div>
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
