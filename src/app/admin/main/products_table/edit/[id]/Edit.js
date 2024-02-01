"use client";
import React, { use, useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { GetData, PutData } from "../../../../../../utlis/ClientApi";
import "react-quill/dist/quill.snow.css";
import QuillNoSSRWrapper from "react-quill";
import InputColor from "react-input-color";

export default function Edit({ params }) {
  const [products_table, setproducts_table] = useState([]);
  const [images, setImages] = useState(products_table.images);
  const [productId, setProductId] = useState(products_table.product_id);
  const [printing, setPrinting] = useState(products_table.sp_rp);
  const [dimensions, setDimensions] = useState(products_table.dimensions);
  const [colors, setColors] = useState(products_table.colors);
  const [categ_id, setCateg_id] = useState(products_table.categ_id);
  const [names, setNames] = useState(products_table.names);
  const [desc, setDesc] = useState(products_table.desc);
  const [price, setPrice] = useState(products_table.price);
  const [invent_qty, setInvent_qty] = useState(products_table.invent_qty);
  const [bag_color, setBag_color] = useState(products_table.bag_color);
  const [css_style, setCss_style] = useState(products_table.css_style);
  const [designid, setDesignid] = useState(products_table.designid);
  const [overview_title, setOverview_title] = useState(
    products_table.overview_title,
  );
  const [faq, setFaq] = useState(products_table.faq);
  const [specs, setSpecs] = useState(products_table.specs);
  const [overview_list, setOverview_list] = useState(
    products_table.overview_list,
  );
  const [imagePreview, setImagePreview] = useState(products_table?.images);
  const [overview_description, setOverview_description] = useState(
    products_table.overview_description,
  );
  const [loading, setLoading] = useState("false");

  const navigate = useRouter();
  const controller = new AbortController();
  const signal = controller.signal;

  // const handleImageChange = (e) => {
  //     const file = e.target.files[0];
  //     if (file) {
  //         const reader = new FileReader();
  //         reader.onloadend = () => {
  //             console.log(reader)
  //             setImage_data(file);
  //             setImagePreview(reader.result);
  //         };
  //         reader.readAsDataURL(file);
  //     }
  // };
  // const handleImageChange = (e) => {
  //     const files = e.target.files;

  //     if (files.length > 0) {
  //         const promises = Array.from(files).map((file) => {
  //             return new Promise((resolve) => {
  //                 const reader = new FileReader();
  //                 reader.onload = (e) => {
  //                     resolve(e.target.result);
  //                 };
  //                 reader.readAsDataURL(file);
  //             });
  //         });

  //         Promise.all(promises).then((base64Images) => {
  //             setImagePreview([...base64Images]);
  //         });
  //     }
  // };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // if (files.length > 0) {
    //     const newImages = [products_table?.images, ...imagePreview];

    //     Array.from(files).forEach((file, index) => {
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //             newImages[index] = e.target.result;
    //         };
    //         reader.readAsDataURL(file);
    //     });

    //     setImagePreview(newImages);
    // }

    const reader = new FileReader();

    reader.onload = (e) => {
      setImages(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = (index) => {
    // Create a copy of the arrays and remove the element at the specified index
    // const newPreview = [...imagePreview];

    // newPreview.splice(index, 1);

    // setImagePreview(newPreview);
    setImages("");
  };

  const sumbitForm = async () => {
    const data = {
      categ_id: categ_id.toString(),
      names: names,
      desc: desc,
      price: price.toString(),
      invent_qty: invent_qty.toString(),
      bag_color: bag_color.hex,
      css_style: css_style,
      // designid: designid.toString(),
      overview_title: overview_title,
      faq: faq,
      specs: specs,
      overview_list: overview_list,
      images: images,
      overview_description: overview_description,
      sp_rp: printing,
      dimensions: dimensions,
      colors: colors,
      // "parent_id": "0",
      // "designid": "0",
    };
    const res = await PutData(
      "products_table/" + params?.id,
      setLoading,
      signal,
      data,
    );

    if (res) {
      setproducts_table(res);
      navigate.push("/admin/main/products_table/table");
    }
  };

  const getEditData = async () => {
    const res = await GetData(
      "products_table/" + params?.id,
      setLoading,
      signal,
    );

    if (res) {
      setproducts_table(res);
      setProductId(res?.productId);
      setPrinting(res?.sp_rp);
      setDimensions(res.dimensions);
      setColors(res.colors);
      setCateg_id(res.categ_id);
      setNames(res.names);
      setDesc(res.desc);
      if (res.price && res?.price[0] === "[") {
        const imagesData = JSON.parse(res?.images);
        var elementPrice = imagesData[0];
      } else if (res.images) {
        var elementPrice = res?.price;
      } else if (res.atributes) {
        var elementPrice;
        const attribute = JSON.parse(res.atributes);
        Object.entries(attribute).forEach(([key, value]) => {
          elementPrice = Object.values(value?.dimensions)[0].price;
        });
      }

      setPrice(elementPrice);
      if (res.invent_qty && res?.invent_qty[0] === "[") {
        const imagesData = JSON.parse(res?.invent_qty);
        var iventqty = imagesData[0];
      } else if (res.invent_qty) {
        var iventqty = res?.invent_qty;
      } else if (res.atributes) {
        var iventqty;
        const attribute = JSON.parse(res.atributes);
        Object.entries(attribute).forEach(([key, value]) => {
          iventqty = Object.values(value?.dimensions)[0].invent_qty;
        });
      }
      setInvent_qty(iventqty);
      setBag_color(res.bag_color);
      setCss_style(res.css_style);
      setDesignid(res.designid);
      setOverview_title(res.overview_title);
      setFaq(res.faq);
      setSpecs(res.specs);
      setOverview_list(res.overview_list);
      if (res.images && res?.images[0] === "[") {
        const imagesData = JSON.parse(res?.images);
        var image = imagesData[0];
      } else if (res.images) {
        var image =
          res?.images.slice(0, 4) === "http"
            ? res.images
            : urlImage + "/" + res?.images?.slice(7);
      } else if (res.atributes) {
        var image;
        const attribute = JSON.parse(res.atributes);
        Object.entries(attribute).forEach(([key, value]) => {
          image = value.image[0];
        });
      }
      setImagePreview(image);
      setOverview_description(res.overview_description);
      setImages(image);
    }
  };

  // const PrintingOptions = printing?.map(({ id: value, value: label, ...rest }) => ({
  //     value,
  //     label,
  //     ...rest,
  // }));

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  useEffect(() => {
    getEditData();
  }, []);

  return (
    <>
      <div className="page-toolbar px-xl-4 px-sm-2 px-0 py-3">
        <div className="container-fluid">
          <div className="row g-3 mb-3 align-items-center">
            <div className="col">
              <ol className="breadcrumb bg-transparent mb-0">
                <li className="breadcrumb-item">
                  <a className="text-secondary" href="index.html">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">Products table</li>
                <li className="breadcrumb-item active" aria-current="page">
                  {" "}
                  Products table Account
                </li>
              </ol>
            </div>
          </div>
          {/* <!-- .row end --> */}
          <div className="row align-items-center">
            <div className="col-auto">
              <h1 className="fs-5 color-900 mt-1 mb-0">
                {" "}
                Edit Products table Account{" "}
              </h1>
              <small className="text-muted">
                You have 12 new messages and 7 new notifications.
              </small>
            </div>
            <div className="col d-flex justify-content-lg-end mt-2 mt-md-0">
              <div className="p-2 me-md-3">
                <div>
                  <span className="h6 mb-0">8.18K</span>{" "}
                  <small className="text-secondary">
                    <i className="fa fa-angle-up"></i> 1.3%
                  </small>
                </div>
                <small className="text-muted text-uppercase">Income</small>
              </div>
              <div className="p-2 me-md-3">
                <div>
                  <span className="h6 mb-0">1.11K</span>{" "}
                  <small className="text-secondary">
                    <i className="fa fa-angle-up"></i> 4.1%
                  </small>
                </div>
                <small className="text-muted text-uppercase">Expense</small>
              </div>
              <div className="p-2 pe-lg-0">
                <div>
                  <span className="h6 mb-0">3.66K</span>{" "}
                  <small className="text-danger">
                    <i className="fa fa-angle-down"></i> 7.5%
                  </small>
                </div>
                <small className="text-muted text-uppercase">Revenue</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-12">
              <div className="card">
                <div className="card m-0 p-0 border-warning">
                  <div class="card-header py-3 bg-transparent border-bottom-0 bg-primary">
                    <h6 className="card-title mb-0 text-light">
                      Edit Products table Account
                    </h6>
                  </div>
                </div>

                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Categ_id</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={products_table.categ_id}
                        onChange={(e) => setCateg_id(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Names</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={products_table.names}
                        onChange={(e) => setNames(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <label className="form-label">Desc</label>
                      {/* <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                defaultValue={products_table.desc}
                                                onChange={e => setDesc(e.target.value)}
                                            /> */}
                      <QuillNoSSRWrapper
                        modules={modules}
                        formats={formats}
                        theme="snow"
                        placeholder="Enter here"
                        value={desc}
                        onChange={(editor) => setDesc(editor)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Price</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Invent_qty</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={invent_qty}
                        onChange={(e) => setInvent_qty(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Bag_color</label>
                      <div className="form-control form-control-lg">
                        <InputColor
                          initialValue={products_table.bag_color || "#00000"}
                          onChange={setBag_color}
                          placement="left"
                          placeholder="Enter here"
                        />
                        <p>{bag_color?.hex}</p>
                        <p>{bag_color?.rgba}</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Css_style</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={products_table.css_style}
                        onChange={(e) => setCss_style(e.target.value)}
                      />
                    </div>
                    {/* <div className="col-lg-4 col-md-6">
                                            <label className="form-label">Designid</label>
                                            <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                defaultValue={products_table.designid}
                                                onChange={e => setDesignid(e.target.value)}
                                            />
                                        </div> */}
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Overview_title</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={products_table.overview_title}
                        onChange={(e) => setOverview_title(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Faq</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={products_table.faq}
                        onChange={(e) => setFaq(e.target.value)}
                      />
                      {/* <Select
                                                PrintingOptions={PrintingOptions}
                                                defaultValue={products_table.faq}
                                                onChange={(e) => {
                                                    e ? setFaq(e.value) : setFaq(0);
                                                }}
                                                isSearchable={true}
                                                isClearable={true}
                                                classNames={{
                                                    control: (state) =>
                                                        state.isFocused
                                                            ? "border-color-orange h-55px form-control form-control-lg"
                                                            : "border-color-grey h-55px form-control form-control-lg",
                                                }}
                                            /> */}
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <label className="form-label">Specs</label>
                      {/* <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                defaultValue={products_table.specs}
                                                onChange={e => setSpecs(e.target.value)}
                                            /> */}
                      <QuillNoSSRWrapper
                        modules={modules}
                        formats={formats}
                        theme="snow"
                        placeholder="Enter here"
                        value={specs}
                        onChange={(editor) => setSpecs(editor)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Dimensions</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={products_table.dimensions}
                        onChange={(e) => setDimensions(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Colors</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={products_table.colors}
                        onChange={(e) => setColors(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Printing</label>
                      {/* <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                defaultValue={products_table.sp_rp}
                                                onChange={e => setPrinting(e.target.value)}
                                            /> */}
                      <select
                        defaultValue={products_table.sp_rp}
                        onChange={(e) => setPrinting(e.target.value)}
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                      >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                      </select>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <label className="form-label">Overview_list</label>
                      {/* <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                defaultValue={products_table.overview_list}
                                                onChange={e => setOverview_list(e.target.value)}
                                            /> */}
                      <QuillNoSSRWrapper
                        modules={modules}
                        formats={formats}
                        theme="snow"
                        placeholder="Enter here"
                        value={overview_list}
                        onChange={(editor) => setOverview_list(editor)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Images</label>
                      {/* <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                defaultValue={products_table.images}
                                                onChange={e => setImages(e.target.value)}
                                            /> */}
                      <div className="form-control form-control-lg col-md-6 g-3 justify-content-between align-items-center">
                        <div className="d-flex mr-4">
                          {images && (
                            <>
                              <img
                                src={images}
                                alt="Preview"
                                style={{
                                  maxWidth: "80%",
                                  maxHeight: "100px",
                                  marginRight: "4px",
                                }}
                              />
                              <RxCross1
                                className="btn lift btn-sm rounded-4 btn-light-secondary"
                                size={30}
                                onClick={handleImageDelete}
                              />
                            </>
                          )}
                        </div>

                        <input
                          name="file"
                          // value={imagePreview}
                          onChange={handleImageChange}
                          accept="image/*"
                          id="image-button"
                          type="file"
                          style={{ display: "none" }}
                        />
                        <label
                          htmlFor="image-button"
                          className="btn lift btn-sm rounded-4 btn-light-secondary"
                        >
                          Upload image
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <label className="form-label">Overview_description</label>
                      {/* <input type="text" className="form-control form-control-lg" placeholder="Enter here"
                                                defaultValue={products_table.overview_description}
                                                onChange={e => setOverview_description(e.target.value)}
                                            /> */}
                      <QuillNoSSRWrapper
                        modules={modules}
                        formats={formats}
                        theme="snow"
                        placeholder="Enter here"
                        value={overview_description}
                        onChange={(editor) => setOverview_description(editor)}
                      />
                    </div>
                  </div>
                </div>

                <div className="card-footer">
                  <button
                    type="button"
                    className="btn lift btn-lg rounded-4 btn-light-primary"
                    onClick={sumbitForm}
                    style={{ margin: "10px" }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn lift btn-lg rounded-4 btn-light-secondary"
                    onClick={() => navigate.back()}
                  >
                    <i className="fa fa-times-circle"></i> Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
