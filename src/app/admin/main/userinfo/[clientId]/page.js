import React from "react";
import ClientInfo from "../../../adminComponents/Client-info/ClientInfo";
export default function page({ params, searchParams }) {
  return (
    <>
      <ClientInfo params={params} searchParams={searchParams} />
    </>
  );
}
