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
        <div>{table.user_id}</div>
      </td>
      <td>
        <div>{table.product_id}</div>
      </td>
      <td>
        <div>{table.qty}</div>
      </td>

      {/* <td><div>

                <button type="button" class="btn lift btn-lg rounded-4 btn-light-primary"
                    onClick={HandleEdit}    id= {table.id}

                >Edit</button>
            </div></td> */}
    </tr>
  );
}
