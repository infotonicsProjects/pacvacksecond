import { FaFileAlt, FaUser, FaShoppingCart } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

import FooterLogo from "../../../app/admin/adminComponents/FooterLogo";
import logo from "./packVack-logo.png";
import Link from "next/link";
import { useState } from "react";
const Sidebar = ({ max, sideBarOpen, setSidebar }) => {
  const [firstLink, setfirstMenu] = useState(false);
  const [secondLink, setSecondMenu] = useState(false);
  const [threeLink, setThreeMenu] = useState(false);
  const [fourLink, setFourMenu] = useState(false);
  const [fiveLink, setFiveMenu] = useState(false);
  const [sixLink, setSixMenu] = useState(false);
  return (
    <>
      <div
        className={
          max
            ? `sidebar p-2 py-md-3 @@cardClass ${
                sideBarOpen ? "open sidebartop" : ""
              }`
            : "sidebar p-2 py-md-3 @@cardClass sidebar-mini"
        }
      >
        <div className="container-fluid">
          {/* sidebar: title*/}

          <div className="title-text d-flex align-items-center mb-4 mt-1">
            <h4
              className="sidebar-title mb-0 flex-grow-1"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Link onClick={() => setSidebar(!sideBarOpen)} href="/admin">
                <FooterLogo src={logo} width={240} height={50} className={""} />
              </Link>
            </h4>
          </div>
          {/* sidebar: Create new */}
          <div className="create-new py-3 mb-2">
            <div className="d-flex">
              <select
                style={{ textAlign: "center", marginRight: "-15%" }}
                disabled
                className="form-select rounded-pill me-1"
              >
                <option>KYC Details</option>
              </select>

              <button
                className="btn bg-primary text-white rounded-circle addkyc-btn"
                data-bs-toggle="modal"
                data-bs-target="#CreateNew"
                type="button"
              >
                <i className="fa fa-plus" />
              </button>
            </div>
          </div>
          {/* sidebar: menu list */}
          <div className="main-menu flex-grow-1">
            <ul className="menu-list">
              <li className="divider py-2 lh-sm">
                <span className="small">MAIN</span>
              </li>
              <li>
                <Link
                  onClick={() => setSidebar(!sideBarOpen)}
                  className="m-link active"
                  href="/admin"
                >
                  <FooterLogo
                    src={logo}
                    width={70}
                    height={15}
                    className={""}
                  />
                  <span className="ms-2">My Dashboard</span>
                </Link>
              </li>
              <li className="collapsed">
                <a
                  className={firstLink ? "m-link" : "m-link collapsed"}
                  onClick={() => setfirstMenu(!firstLink)}
                  data-bs-toggle="collapse"
                  data-bs-target="#insurence-manager"
                  href="#"
                >
                  <i className="fa fa-users"></i>
                  <span className="ms-2">Product Master </span>
                  <span className="arrow fa fa-angle-right ms-auto text-"></span>
                </a>
                {/* <!-- Menu: Sub menu ul --> */}
                <ul
                  className={firstLink ? "sub-menu" : "sub-menu collapse"}
                  id="insurence-manager"
                >
                  {/* <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/new-projects"
                    >
                      New Projects
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/category/add"
                    >
                      <span>Add </span> &nbsp; Category
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/category/table"
                    >
                      Category Table{" "}
                    </Link>
                  </li>

                  {/* <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/products_table/add"
                    >
                      <span >Add </span>{" "}
                      &nbsp; Product Table{" "}
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/products_table/table"
                    >
                      Product Table
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/product_images_table/add"
                    >
                      <span >Add</span>
                      &nbsp; Product Images
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/product_images_table/table"
                    >
                      Product Images Table
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/promotions_discounts_table/add"
                    >
                      <span>Add </span>
                      &nbsp; Promotion Discount{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/promotions_discounts_table/table"
                    >
                      Promotion Table
                    </Link>
                  </li>

                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/reviews_ratings_table/table"
                    >
                      Review Table
                    </Link>
                  </li>
                </ul>
              </li>
              {/* insruace here */}
              <li className="collapsed">
                <a
                  className={secondLink ? "m-link" : "m-link collapsed"}
                  onClick={() => setSecondMenu(!secondLink)}
                  data-bs-toggle="collapse"
                  data-bs-target="#insurance1-manager"
                  href="#"
                >
                  <i className="fa fa-cubes"></i>
                  <span className="ms-2">Cms Master</span>
                  <span className="arrow fa fa-angle-right ms-auto text-"></span>
                </a>
                {/* <!-- Menu: Sub menu ul --> */}
                <ul
                  className={secondLink ? "sub-menu" : "sub-menu collapse"}
                  id="insurance1-manager"
                >
                  {/* <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/cms"
                    >
                      <span >Add </span>{" "}
                      &nbsp; Cms Images
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/cms_images_table/table"
                    >
                      {" "}
                      Cms Images Table
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/cms_pages_table/add"
                    >
                      {" "}
                      <span>Add </span> &nbsp; Cms Pages
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/cms_pages_table/table"
                    >
                      Cms Pages Table
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="collapsed">
                <a
                  className={threeLink ? "m-link" : "m-link collapsed"}
                  onClick={() => setThreeMenu(!threeLink)}
                  data-bs-toggle="collapse"
                  data-bs-target="#cibil-manager"
                  href="#"
                >
                  <FaShoppingCart />
                  <span className="ms-2">Order Manager</span>
                  <span className="arrow fa fa-angle-right ms-auto text-"></span>
                </a>
                {/* <!-- Menu: Sub menu ul --> */}
                <ul
                  className={threeLink ? "sub-menu" : "sub-menu collapse"}
                  id="cibil-manager"
                >
                  {/* <li>
                    <Link
                      
                     
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/order_item/add"
                    >
                      <span >Add </span>{" "}
                      &nbsp; Order Item{" "}
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/order_items_table/table"
                    >
                      Order Items Table
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      
                     
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/order_table/add"
                    >
                      <span >Add </span>{" "}
                      &nbsp; Order Table{" "}
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/orders_table/table"
                    >
                      Order Table
                    </Link>
                  </li>

                  {/* <li>
                    <Link
                      
                     
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/payment_transaction/add"
                    >
                      {" "}
                      <span >Add</span>
                      &nbsp;Payment Transaction
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/payment_transactions_table/table"
                    >
                      Payment Transaction
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      
                     
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/shiping/add"
                    >
                      <span >Add </span>{" "}
                      &nbsp;Shiping Information{" "}
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/shipping_information_table/table"
                    >
                      Shipping Info Table
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/shopping_cart_table/table"
                    >
                      Shopping Cart Table
                    </Link>
                  </li>

                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/invoice/table"
                    >
                      Invoice List
                    </Link>
                  </li>

                  {/* <Link
                    onClick={() => setSidebar(!sideBarOpen)}
                    className="ms-link"
                    href="/admin/main/shopping_cart_table/table"
                  >
                    Shop Table
                  </Link> */}
                </ul>
              </li>

              <li className="collapsed">
                <a
                  className={fourLink ? "m-link" : "m-link collapsed"}
                  onClick={() => setFourMenu(!fourLink)}
                  data-bs-toggle="collapse"
                  data-bs-target="#asset-manager"
                  href="#"
                >
                  <FaUser />
                  <span className="ms-2">User Manager</span>
                  <span className="arrow fa fa-angle-right ms-auto text-"></span>
                </a>
                <ul
                  className={fourLink ? "sub-menu" : "sub-menu collapse"}
                  id="a"
                  style={{ minWidth: "200px" }}
                >
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/admin-list/table"
                    >
                      Admin List
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/users_table/add"
                    >
                      <span>Add </span> &nbsp; User Table
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/users_table/table"
                    >
                      User Table
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/vendor-list/table"
                    >
                      Vendor List
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="collapsed">
                <a
                  className={fiveLink ? "m-link" : "m-link collapsed"}
                  onClick={() => setFiveMenu(!fiveLink)}
                  data-bs-toggle="collapse"
                  data-bs-target="#liability-manager"
                  href="#Link"
                >
                  <MdDesignServices />
                  <span className="ms-2">Designer Master</span>
                  <span className="arrow fa fa-angle-right ms-auto text-"></span>
                </a>

                <ul
                  className={fiveLink ? "sub-menu" : "sub-menu collapse"}
                  id="liability-manager"
                >
                  {/* <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/design2"
                    >
                      <span >Add </span>
                      &nbsp; Design Template
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/design_templates_table/table"
                    >
                      Design Template Table
                    </Link>
                  </li>

                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/user_design_templates_table/table"
                    >
                      User Design Temp Table
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#file-manager"
                  href="#"
                  onClick={() => setCollapseSix(!collapseSix)}
                >
                  <i className="fa fa-folder-open"></i>
                  <span className="ms-2">File Manager</span>
                  <span className="arrow fa fa-angle-right ms-auto text-"></span>
                </a>
               
                <ul
                  className={
                    collapseSix ? "sub-menu collapse" : "sub-menu collapse hide"
                  }
                  id="file-manager"
                >
                  <li>
                    <Link
                      
                     
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/filemanager"
                    >
                      File Manager
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li className="collapsed">
                <a
                  className={sixLink ? "m-link" : "m-link collapsed"}
                  onClick={() => setSixMenu(!sixLink)}
                  data-bs-toggle="collapse"
                  data-bs-target="#asset-manager"
                  href="#"
                >
                  <FaFileAlt />

                  <span className="ms-2">File Manager</span>
                  <span className="arrow fa fa-angle-right ms-auto text-"></span>
                </a>

                <ul
                  className={sixLink ? "sub-menu" : "sub-menu collapse"}
                  id="asset-manager"
                >
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/file_manager/table"
                    >
                      File Manager Table
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/file_manager/add"
                    >
                      <span>Add </span> &nbsp; file Manager
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/alphabet/table"
                    >
                      Alphabet Manager Table
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setSidebar(!sideBarOpen)}
                      className="ms-link"
                      href="/admin/main/alphabet/add"
                    >
                      <span>Add </span> &nbsp; Alphabet Manager
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <ul className="menu-list">
              <li className="divider py-2 lh-sm">
                <span className="small">RESOURCES</span>
                <br></br>
                <small className="text-muted">some important links</small>
              </li>
              <li>
                <Link
                  
                 
                  onClick={() => setSidebar(!sideBarOpen)}
                  className="m-link"
                  href="/company"
                >
                  <i className="fa fa-building"></i>
                  <span className="ms-2">Companies</span>
                </Link>
              </li>
              <li>
                <li>
                  <Link
                    
                   
                    onClick={() => setSidebar(!sideBarOpen)}
                    className="ms-link"
                    href="/dmats/add"
                  >
                    <span >
                      Request{" "}
                    </span>{" "}
                    &nbsp; Demat{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    
                   
                    onClick={() => setSidebar(!sideBarOpen)}
                    className="ms-link"
                    href="/dmats"
                  >
                    Demat Account{" "}
                  </Link>
                </li>
              </li>
            </ul> */}
          </div>
          {/* sidebar: footer link */}
          {/* sidebar: footer link */}
          <ul className="menu-list nav navbar-nav flex-row text-center menu-footer-link">
            <li className="nav-item flex-fill p-2">
              <Link
                className="d-inline-block w-100 color-400"
                title="sign-out"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.5 1v7h1V1h-1z" />
                  <path
                    className="fill-secondary"
                    d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
