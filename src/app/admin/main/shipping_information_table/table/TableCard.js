import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import { PutData } from '../../../../../utlis/ClientApi';

export default function TableCard({ table }) {
  // const [shipping, setShipping] = useState(table?.shipping)
  // const [loading, setLoading] = useState(false);

  const navigate = useRouter();

  const controller = new AbortController();
  const signal = controller.signal;

  const HandleEdit = (e) => {
    navigate.push(`edit/${e.target.id}`);
  };

  // const submitShippingStatus = async (e, value) => {
  //     e.preventDefault()
  //     const data = {
  //         receipent_name:table?.receipent_name,
  //         delivery_date:table?.delivery_date,
  //         track_information:table?.track_information,
  //         shipping: value,
  //         cname:table?.cname,
  //         gst:table?.gst,
  //         number:table?.number,
  //         email:table?.email,
  //         s_address:table?.s_address,
  //         s_city:table?.s_city,
  //         s_state:table?.s_state,
  //         b_address:table?.b_address,
  //         b_city:table?.b_city,
  //         b_state:table?.b_state
  //     }

  //     const response = await PutData("shipping_information_table/" + e.target.id, setLoading, signal, data)

  // }

  return (
    <tr>
      <td>
        <div>{table.id}</div>
      </td>
      <td>
        <div>{table.order_id}</div>
      </td>
      <td>
        <div>{table.receipent_name}</div>
      </td>
      <td>
        <div>{table.shipping}</div>
      </td>
      {/* <td><select defaultValue={table.shipping} className='form-select' onChange={(e) => { setShipping(e.target.value), submitShippingStatus(e, e.target.value) }} id={table.id}>
                <option value="Shipped">Shipped</option>
                <option value="On the Way">On the Way</option>
                <option value="Not Shipped">Not Shipped</option>
            </select></td> */}
      <td>
        <div>{table.delivery_date}</div>
      </td>
      <td>
        <div>{table.track_information}</div>
      </td>
      <td>
        <div>{table.cname}</div>
      </td>
      <td>
        <div>{table.gst}</div>
      </td>
      <td>
        <div>{table.number}</div>
      </td>
      <td>
        <div>{table.email}</div>
      </td>
      <td>
        <div>{table.s_address}</div>
      </td>
      <td>
        <div>{table.s_city}</div>
      </td>
      <td>
        <div>{table.s_state}</div>
      </td>
      <td>
        <div>{table.b_address}</div>
      </td>
      <td>
        <div>{table.b_city}</div>
      </td>
      <td>
        <div>{table.b_state}</div>
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
