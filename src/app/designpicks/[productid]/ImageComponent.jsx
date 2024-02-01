'use client'
import Link from 'next/link'
import React from 'react'

const ImageComponent = ({ id, item }) => {

    const handleClick = () => {
        localStorage.removeItem('designId')
        localStorage.removeItem("designTemp")

    }
    return (
        <div className="mt-1">
            <Link href={{
                pathname: '/design2',
                query: { designid: id }
            }}
                onClick={handleClick}
            >
                <img
                    src={item}
                    alt={item?.alt_text ?? "bag"}
                    width={400}
                    height={520}
                    style={{ padding: "15%" }}
                    className="responsive-height-width bg-body-tertiary "
                />

            </Link>
        </div>
    )
}

export default ImageComponent