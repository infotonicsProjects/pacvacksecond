"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GetData, PutData } from "../../../../../../utlis/ClientApi";
import Pagination from "../../../../adminComponents/Pagination";

export default function Edit({ params }) {
  const [promotions_discounts_table, setpromotions_discounts_table] =
    useState("");

  const [promo_code, setPromo_code] = useState(
    promotions_discounts_table.promo_code,
  );
  const [discount, setDiscount] = useState(promotions_discounts_table.discount);
  const [exp_date, setExp_date] = useState(promotions_discounts_table.exp_date);
  const [applicable_products, setApplicable_products] = useState(
    promotions_discounts_table.applicable_products,
  );
  const [loading, setLoading] = useState("false");

  const navigate = useRouter();
  const controller = new AbortController();
  const signal = controller.signal;

  // useEffect(() => {
  //     fetch(urls + 'promotions_discounts_table/' + params.id, { headers: headersT })
  //         .then(response => response.json())
  //         .then(json => {
  //             if (json) {
  //                 setpromotions_discounts_table(
  //                     json.data
  //                 )

  //                 console.log(json)
  //             }
  //         })
  // }, [])
  const sumbitForm = async () => {
    const data = {
      promo_code: promo_code,
      discount: discount,
      exp_date: exp_date,
      applicable_products: applicable_products,
    };
    const res = await PutData(
      "promotions_discounts_table/" + params?.id,
      setLoading,
      signal,
      data,
    );
    if (res) {
      setpromotions_discounts_table(res);
      navigate.push("/admin/main/promotions_discounts_table/table");
    }
  };

  const getEditData = async () => {
    const res = await GetData(
      "promotions_discounts_table/" + params?.id,
      setLoading,
      signal,
    );

    if (res) {
      setpromotions_discounts_table(res);
      setPromo_code(res.promo_code);
      setDiscount(res.discount);
      setExp_date(res.exp_date);
      setApplicable_products(res.applicable_products);
    }
  };

  useEffect(() => {
    getEditData();
  }, []);

  return (
    <>
      <Pagination heading={"Promotion discount "} page="edit" />

      <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-12">
              <div className="card">
                <div className="card m-0 p-0 border-warning">
                  <div class="card-header py-3 bg-transparent border-bottom-0 bg-primary">
                    <h6 className="card-title mb-0 text-light">
                      Edit Promotions discounts table Account
                    </h6>
                  </div>
                </div>

                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Promo_code</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={promotions_discounts_table.promo_code}
                        onChange={(e) => setPromo_code(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Discount</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={promotions_discounts_table.discount}
                        onChange={(e) => setDiscount(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Exp_date</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={promotions_discounts_table.exp_date}
                        onChange={(e) => setExp_date(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <label className="form-label">Applicable_products</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter here"
                        defaultValue={
                          promotions_discounts_table.applicable_products
                        }
                        onChange={(e) => setApplicable_products(e.target.value)}
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
