"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BreadCrumps = ({ title }) => {
  const pathname = usePathname();
  return (
    <div className="ml-4 p-4">
      <Link href="/" className="m-2 text-dark">
        Home
      </Link>
      <span>/</span>

      {title?.map((item, i) => (
        <React.Fragment>
          {i >= 1 && <span>/</span>}
          <Link
            href={`/${item.name}`}
            className="m-2 text-black text-capitalize"
            key={i}
          >
            {item?.page ?? pathname?.slice(1)}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default BreadCrumps;
