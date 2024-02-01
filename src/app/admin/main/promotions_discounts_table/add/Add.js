"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PostData } from "../../../../../utlis/ClientApi";
import Pagination from "../../../adminComponents/Pagination";

export default function Add() {
  const [promotions_discounts_table, setpromotions_discounts_table] =
    useState("");
  const [promo_code, setPromo_code] = useState("");
  const [discount, setDiscount] = useState("");
  const [exp_date, setExp_date] = useState("");
  const [applicable_products, setApplicable_products] = useState("");
  const [loading, setLoading] = useState("false");

  const controller = new AbortController();
  const signal = controller.signal;

  const navigate = useRouter();

  const handleClick = () => {
    var x = document.getElementById("hide");
    var y = document.getElementById("hide1");
    var csv = document.getElementById("unhide");
    if (x.style.display === "none" || y.style.display === "none") {
      x.style.display = "block";
      y.style.display = "block";
      csv.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "none";
      csv.style.display = "block";
    }
  };
  const sumbitForm = async () => {
    const data = {
      // name:name,
      promo_code: promo_code,
      discount: discount,
      exp_date: exp_date,
      applicable_products: applicable_products,
    };
    const res = await PostData(
      "promotions_discounts_table",
      setLoading,
      signal,
      data,
    );
    if (res) {
      setpromotions_discounts_table(res);
      navigate.push("/admin/main/promotions_discounts_table/table");
    }
  };

  useEffect(() => {
    return () => controller.abort();
  }, []);
  return (
    <>
      <Pagination heading={"Promoiton discounts"} page="Add" />

      <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-12">
              <div className="card">
                <div className="card m-0 p-0 border-info">
                  <div class="card-header py-3 bg-transparent border-bottom-0 bg-primary">
                    <h6 className="card-title mb-0 text-light"> Add Account</h6>
                    <button
                      type="button"
                      class="btn btn-sm btn-white"
                      onClick={handleClick}
                    >
                      <i class="fa fa-plus"></i> Add Csv{" "}
                    </button>
                  </div>
                </div>

                <div className="card-body" id="hide">
                  <div className="row g-3">
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Promo code</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setPromo_code(e.target.value)}
                      />
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Discount</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setDiscount(e.target.value)}
                      />
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Exp date</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setExp_date(e.target.value)}
                      />
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="form-label">Applicable products</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter here"
                        onChange={(e) => setApplicable_products(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="card-footer" id="hide1">
                  <button
                    type="button"
                    className="btn lift btn-lg rounded-4 btn-light-primary"
                    onClick={sumbitForm}
                    style={{ margin: "10px" }}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="btn lift btn-lg rounded-4 btn-light-secondary"
                    onClick={(e) => navigate.back()}
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
