import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { urlImage } from "../../../../../Environment";
import { PostData, PutData } from "../../../../../utlis/ClientApi";
import Link from "next/link";

export default function TableCard({ table }) {
    const [popular, setPopular] = useState(table?.popular);
    const [branded, setBranded] = useState(table?.branded);
    const [userDesign, setUserDesign] = useState(table?.user_design);
    const [newDesign, setNewDesign] = useState(table?.new_design);
    const [loading, setLoading] = useState(false);

    const navigate = useRouter();

    const controller = new AbortController();
    const signal = controller.signal;

    const HandleEdit = (e) => {
        navigate.push(`edit/${e.target.id}`);
    };
    if (table.images && table?.images[0] === "[") {
        const imagesData = JSON.parse(table?.images);
        var image = imagesData[0];
    } else if (table.images) {
        var image =
            table?.images.slice(0, 4) === "http"
                ? table.images
                : urlImage + "/" + table?.images?.slice(7);
    } else if (table.atributes) {
        var image;
        const attribute = JSON.parse(table.atributes);
        Object.entries(attribute).forEach(([key, value]) => {
            image = value.image[0];
        });
    }
    const handleAddDesign = (id, catId) => {
        localStorage.setItem("productId", id);
        localStorage.setItem("categoryId", catId);
        navigate.push("/admin/design2");
    };
    const submitCheckboxes = async (e, checked, name) => {
        e.preventDefault();
        const data = {
            [name]: checked ? 1 : 0,
        };
        const res = await PutData(
            "products_table/" + e.target.id,
            setLoading,
            signal,
            data,
        );
        if (res) {
        }
    };

    return (
        <tr>
            <td>
                <div>{table.id}</div>
            </td>

            <td>
                <div>
                    {table.categ_id === 1
                        ? "Mobile bag"
                        : table.categ_id === 2
                            ? "Shubham"
                            : table.categ_id === 3
                                ? "Single suit bag"
                                : table.categ_id === 4
                                    ? "Multi Pc bag"
                                    : table.categ_id === 5
                                        ? "Jacket bag"
                                        : table.categ_id === 6
                                            ? "Shoe bag"
                                            : table.categ_id === 7
                                                ? "Jewellery bag"
                                                : table.categ_id === 8
                                                    ? "Accessory bag"
                                                    : table.categ_id === 9
                                                        ? "Bag by size"
                                                        : table.categ_id === 12
                                                            ? "Paper Bag"
                                                            : "NA"}
                </div>
            </td>

            <td>
                <img
                    src={image}
                    height={80}
                    width={80}
                    alt="Product-image"
                    className="cursor-pointer rounded zoom-on-hover"
                />
            </td>

            <td>
                <div>{table.names}</div>
            </td>
            <td>
                <div>{table.desc}</div>
            </td>
            <td>
                <div>{table.price}</div>
            </td>
            <td>
                <div>{table.invent_qty}</div>
            </td>
            <td>
                <div>{table?.bag_color ? table?.bag_color : table?.colors}</div>
            </td>
            <td>
                <div>{table.css_style}</div>
            </td>
            <td>
                <div>{table.designid}</div>
            </td>
            <td>
                <div>{table.overview_title}</div>
            </td>
            <td>
                <div>{table.faq}</div>
            </td>
            <td>
                <div>{table.specs}</div>
            </td>
            <td>
                <div>{table.overview_list}</div>
            </td>
            <td>
                <div>{table.images}</div>
            </td>
            <td>
                <div>{table.overview_description}</div>
            </td>

            <td>
                <input
                    type="checkbox"
                    name="popular"
                    value={popular}
                    checked={popular === 1}
                    onChange={(e) => {
                        setPopular(e.target.checked ? 1 : 0),
                            submitCheckboxes(e, e.target.checked, e.target.name);
                    }}
                    id={table?.id}
                />
            </td>
            <td>
                <input
                    type="checkbox"
                    name="branded"
                    value={branded}
                    checked={branded === 1}
                    onChange={(e) => {
                        setBranded(e.target.checked ? 1 : 0),
                            submitCheckboxes(e, e.target.checked, e.target.name);
                    }}
                    id={table?.id}
                />
            </td>
            <td>
                <input
                    type="checkbox"
                    name="userDesign"
                    value={userDesign}
                    checked={userDesign === 1}
                    onChange={(e) => {
                        setUserDesign(e.target.checked ? 1 : 0),
                            submitCheckboxes(e, e.target.checked, e.target.name);
                    }}
                    id={table?.id}
                />
            </td>
            <td>
                <input
                    type="checkbox"
                    name="newDesign"
                    value={newDesign}
                    checked={newDesign === 1}
                    onChange={(e) => {
                        setNewDesign(e.target.checked ? 1 : 0),
                            submitCheckboxes(e, e.target.checked, e.target.name);
                    }}
                    id={table?.id}
                />
            </td>

            <td>
                <div>
                    <button
                        type="button"
                        className="btn lift btn-sm rounded-4 btn-light-primary m-1"
                        onClick={HandleEdit}
                        id={table.id}
                    >
                        Edit
                    </button>
                </div>
                <div>
                    <Link
                        type="button"
                        className="btn lift btn-sm rounded-4 btn-light-primary m-1"
                        id={table.id}
                        href={`/admin/main/product/${table.id}`}
                    >
                        View
                    </Link>
                </div>
                <div>
                    <Link
                        type="button"
                        className="btn lift btn-sm rounded-4 btn-light-primary m-1"
                        id={table.id}
                        href={`/admin/design2/${table.id}`}
                    >
                        Add More Design
                    </Link>
                </div>
            </td>
        </tr>
    );
}
