import FooterLogo from "./FooterLogo";
import React from "react";
import image from "./avtar.jpg";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
const HeaderNameAvtar = () => {
  const router = useRouter();
  const user = useSelector((state) => state.userData);
  const handleSignout = () => {
    document.cookie = `packM=1; path=/; max-age=1; secure; samesite=strict;`;
    router.refresh();
    router.push("/admin/auth/login");
  };

  return (
    <li>
      <div className="dropdown morphing scale-left user-profile mx-lg-3 mx-2">
        <a
          className="nav-link dropdown-toggle rounded-circle after-none p-0"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          <FooterLogo
            src={image}
            width={30}
            height={30}
            className="avatar img-thumbnail rounded-circle shadow"
          />
        </a>
        <div className="dropdown-menu border-0 rounded-4 shadow p-0 ">
          <div className="card border-0 w240" style={{ width: "300px" }}>
            <div className="card-body border-bottom d-flex">
              <FooterLogo
                src={image}
                width={30}
                height={30}
                className="avatar rounded-circle"
              />
              <div className="flex-fill ms-3">
                <h6 className="card-title mb-0">{user?.name}</h6>
                <p
                  className="text-muted text-truncate"
                  style={{ width: "220px" }}
                >
                  {user?.email}
                </p>
              </div>
            </div>
            <div className="list-group m-2 mb-3">
              <a
                className="list-group-item list-group-item-action border-0"
                href="/admin"
              >
                <i className="w30 fa fa-user" />
                My Profile
              </a>
              <a
                className="list-group-item list-group-item-action border-0"
                href="account-settings.html"
              >
                <i className="w30 fa fa-gear" />
                Settings
              </a>
              <a
                className="list-group-item list-group-item-action border-0"
                href="account-billing.html"
              >
                <i className="w30 fa fa-credit-card" />
                Billing
              </a>
              <a
                className="list-group-item list-group-item-action border-0"
                href="/page-teamsboard.html"
              >
                <i className="w30 fa fa-users" />
                Manage Team
              </a>
              <a
                className="list-group-item list-group-item-action border-0"
                href="/dashboard-enevt.html"
              >
                <i className="w30 fa fa-calendar" />
                My Events
              </a>
              <a
                className="list-group-item list-group-item-action border-0"
                href="/page-support-ticket.html"
              >
                <i className="w30 fa fa-tag" />
                Support Ticket
              </a>
            </div>
            <Button
              className="btn bg-secondary text-light text-uppercase rounded-0"
              onClick={handleSignout}
            >
              Sign out
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default HeaderNameAvtar;
