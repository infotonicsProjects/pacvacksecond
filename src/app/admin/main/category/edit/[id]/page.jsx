"use client";
import React, { useEffect, useState } from "react";
import Pagination from "../../../../../../app/admin/adminComponents/Pagination";
import { urls } from "../../../../../../Environment/index";
import { Local } from "../../../../../../Environment/Token";
import { useRouter } from "next/navigation";
import { ToastError, ToastSuccess } from "../../../../../../utlis/Toast";
import { CustomeHook } from "../../../../../../Environment/CustomeHook";
import { useParams } from "next/navigation";
import LoadingComponet from "../../../../../../app/admin/adminComponents/LoadingComponent";
import { GetData } from "../../../../../../utlis/ClientApi";
export default function Edit() {
  const [title, setTitle] = useState("");
  const [sub_categ_id, setSub_categ_id] = useState("");
  const [categ_id, setCateg_id] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  // token from local storage
  const token = Local;

  // param for id
  const param = useParams();
  // custome hook for api call to fetch data
  const category = CustomeHook(`category/${param.id}`, setLoading);
  const sumbitForm = async (e) => {
    e.preventDefault();
    setBtnLoading(true);
    const data = {
      title,
      sub_categ_id,
      categ_id,
    };
    const requestOptions = {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(
        `${urls}category/${param.id}`,
        requestOptions,
      );
      if (!response.ok) {
        const errorData = await response.json();
        ToastError(errorData.data.error);
      }
      let actualData = await response.json();
      ToastSuccess("Edit Successfully ");
      // push to table page of category
      router.back();
    } catch (err) {
      console.log(err.message);
    } finally {
      setBtnLoading(false);
    }
  };
  const controller = new AbortController();
  const signal = controller.signal;
  const getEditData = async () => {
    const res = await GetData(`category/${param.id}`, setLoading, signal);

    if (res) {
      setTitle(res.title);
      setCateg_id(res.categ_id);
      setSub_categ_id(res.sub_categ_id);
    }
  };

  useEffect(() => {
    getEditData();
  }, []);
  return (
    <>
      {loading ? (
        <LoadingComponet />
      ) : (
        <>
          <Pagination heading="Category" page={"Edit"} />

          <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
            <div className="container-fluid">
              <div className="row g-3">
                <div className="col-12">
                  <form onSubmit={sumbitForm}>
                    <div className="card">
                      <div className="card m-0 p-0 border-warning">
                        <div className="card-header py-3 bg-transparent border-bottom-0 bg-primary">
                          <h6 className="card-title mb-0 text-light">
                            Edit Category Account
                          </h6>
                        </div>
                      </div>

                      <div className="card-body">
                        <div className="row g-3">
                          <div className="col-lg-4 col-md-6">
                            <label className="form-label">Title</label>
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Enter here"
                              defaultValue={title}
                              onChange={(e) => setTitle(e.target.value)}
                              required
                            />
                          </div>
                          {/* <div className="col-lg-4 col-md-6">
                            <label className="form-label">Sub_categ_id</label>
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Enter here"
                              defaultValue={sub_categ_id}
                              onChange={(e) => setSub_categ_id(e.target.value)}
                              required
                            />
                          </div> */}
                          <div className="col-lg-4 col-md-6">
                            <label className="form-label">Categ_id</label>
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Enter here"
                              defaultValue={categ_id}
                              onChange={(e) => setCateg_id(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="card-footer">
                        {btnLoading ? (
                          <button
                            type="submit"
                            className="btn lift btn-lg rounded-4 btn-light-primary"
                            style={{ margin: "10px" }}
                            disabled
                          >
                            Edit....
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="btn lift btn-lg rounded-4 btn-light-primary"
                            style={{ margin: "10px" }}
                          >
                            Edit
                          </button>
                        )}
                        <button
                          type="button"
                          className="btn lift btn-lg rounded-4 btn-light-secondary"
                          onClick={() => router.back()}
                        >
                          <i className="fa fa-times-circle"></i> Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
