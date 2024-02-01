import { useRouter } from "next/navigation";
import React from "react";
export default function TableCard({ table }) {
  const router = useRouter();
  const HandleEdit = (e) => {
    router.push(`edit/${e.target.id}`);
  };
  const handleGotoDesigner = (e) => {
    sessionStorage.setItem("categoryId", e.target.id);
    router.push(`/admin/design2`);
  };
  return (
    <tr>
      <td>
        <div>{table.id}</div>
      </td>

      <td>
        <div>{table.title}</div>
      </td>
      {/* <td>
        <div>{table.sub_categ_id}</div>
      </td> */}
      <td>
        <div>{table.categ_id}</div>
      </td>

      <td>
        <div className="d-flex " style={{ gap: "5px" }}>
          <button
            type="button"
            className="btn lift btn-lg rounded-4 btn-light-primary"
            onClick={HandleEdit}
            id={table.id}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn lift btn-lg rounded-4 btn-light-primary"
            onClick={handleGotoDesigner}
            id={table.id}
          >
            Add Product
          </button>
        </div>
      </td>
    </tr>
  );
}
