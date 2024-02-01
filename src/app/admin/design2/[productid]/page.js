'use client'
import React, { Fragment, useEffect } from "react";
import Main from './Main'

export default function page({ params, }) {

  useEffect(() => {
    sessionStorage.removeItem('products')
  }, [])
  return (
    <Fragment>
      <Main params={params} />
    </Fragment>
  )
};


