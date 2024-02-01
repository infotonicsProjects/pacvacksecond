'use client'
import React, { Fragment, useEffect, useState } from 'react'
import { CustomeHook } from '../../../../Environment/CustomeHook'
import DesingerMain from '../Main'
import { useDispatch } from 'react-redux'
import { addEditProducts } from '../../../../redux/slice'
import { GetData } from '../../../../utlis/ClientApi'
const Main = ({ params, }) => {
    const [colors, setColors] = useState("")
    var images;
    var designID;
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const productData = CustomeHook(`products_table/${params.productid}`, setLoading)
    console.log(productData)
    if (productData?.atributes) {
        const attributes = JSON.parse(productData?.atributes)
        Object.entries(attributes)?.map(([key, value]) => {
            console.log(value)
            images = value?.image
            designID = value?.designid[0]
        })
        sessionStorage.setItem('products', productData?.atributes)
        dispatch(addEditProducts(attributes))
    }
    const contoller = new AbortController()
    const signal = contoller.signal

    useEffect(() => {

        if (designID) {
            const getData = async () => {
                const response = await GetData(
                    `design_templates_table/${designID}`,
                    setLoading,
                    signal,
                );
                console.log(response)
                if (response) {
                    setColors(response.colors)
                }
            }
            getData()
        }
    }, [designID])
    return (
        <Fragment>
            <DesingerMain page={'edit'} backGroundColors={images} textColor={colors} />
        </Fragment>
    )
}

export default Main