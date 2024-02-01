'use client'
import { Drawer, Grid, Select, TextField, styled } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import Sidebar from './Sidebar';
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-input': {
        paddingLeft: "45px"
    },
    '& .MuiTextField-root': {
        width: "85%"
    },
    '& .css-10gvk6e-MuiFormControl-root-MuiTextField-root': {
        width: "85%"
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
            paddingLeft: "10px"
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#1773A4',
        },
    },
});
const Filter = ({ categoryData, pageID }) => {
    const [drawerOpen, setDrawer] = useState(false)
    return (
        <div className="swan-hidden-xs mt-3 pb-3 mobile-border-bottom">
            <div className=" mx-0 mw-100 ">
                <Grid container style={{ alignItems: "center" }} className="d-flex ">
                    <Grid item xs={0} md={3} className=" pl-0 pr-5 mobile-display-none">
                        <div className="swan-vanilla-ignore swan-input-with-button-inset swan-input-with-button-left">
                            <CssTextField
                                type="search"
                                placeholder="Search within this category"
                                id="desktop-search-box"
                                data-cy="search-box-input"
                                className=""
                                defaultValue=""
                                data-listener-added_694cd40c="true"

                            />
                            <button
                                role="none"
                                tabIndex={-1}
                                aria-label="Search"
                                type="button"
                                className=" btn-search-picks btn"

                            >
                                <Image
                                    tabIndex={-1}
                                    width={30}
                                    height={30}
                                    src={"/img/search.svg"}
                                    alt="search-icon"
                                />
                            </button>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={9} className=" pl-5 pr-0">
                        <div style={{ alignItems: "center" }} className="d-flex mobile-justify-betweeen">
                            <div className="mr-4 ">
                                <span className="text-x text-grey text-left fs-5 mobile-ps-2">
                                    119 results
                                </span>
                            </div>
                            <span className="text-1 text-dark d-none">
                                <a
                                    id="skipToResults"
                                    href="#"
                                    className="swan-link swan-link-skin-unstyled swan-mr-2 swan-mt-1"
                                >
                                    Skip to filtered results
                                </a>
                            </span>
                            <div className="ms-auto mobile-display-none">
                                <div >
                                    <label className=" me-4" htmlFor="desktop-sort-by">
                                        Sort by
                                    </label>
                                    <Select native defaultValue="" id="grouped-native-select dekstop-sort-by">
                                        <option value="Vistaprint_prod_Discovery_en-US" selected="">
                                            Recommended
                                        </option>
                                        <option value="Vistaprint_prod_Discovery_en-US_popularity">
                                            Popularity
                                        </option>
                                        <option value="Vistaprint_prod_Discovery_en-US_price_asc">
                                            Price low to high
                                        </option>
                                        <option value="Vistaprint_prod_Discovery_en-US_price_desc">
                                            Price high to low
                                        </option>
                                        <option value="Vistaprint_prod_Discovery_en-US_newArrivals">
                                            New arrivals
                                        </option>
                                        <option value="Vistaprint_prod_Discovery_en-US_customerReviews">
                                            Customer reviews
                                        </option>
                                    </Select>
                                </div>
                            </div>
                            <input
                                accept="image/jpeg, image/bmp, image/png, image/gif, image/heic, application/pdf"
                                type="file"
                                style={{ display: "none" }}
                            />
                            <button
                                type="button"
                                className="mobile-display-none btn btn-lg btn-primary  btn-dark rounded-pill mx-4 fs-6 py-3 text-white "
                            >
                                Preview with your design
                            </button>
                            <button
                                onClick={() => setDrawer(true)}
                                type="button"
                                className="px-4 me-5 hide-dekstop border border-dark btn btn-sm btn-primary btn-light rounded-pill mx-4 fs-6 py-2 text-dark "
                            >
                                <TuneIcon />
                                Filter
                            </button>
                            <Drawer
                                anchor={"right"}
                                open={drawerOpen}
                                onClose={() => setDrawer(false)}
                                sx={{
                                    "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100%" },
                                }}
                            >
                                <div className='mt-5'>
                                    <div className="px-3">
                                        <CssTextField
                                            type="search"
                                            placeholder="Search within this category"
                                            id="desktop-search-box"
                                            data-cy="search-box-input"
                                            className="w-100"
                                            defaultValue=""
                                            data-listener-added_694cd40c="true"


                                        />
                                        <button
                                            role="none"
                                            tabIndex={-1}
                                            aria-label="Search"
                                            type="button"
                                            className=" btn-search-picks btn btn-search-picks-second"
                                        >
                                            <Image
                                                tabIndex={-1}
                                                width={30}
                                                height={30}
                                                src={"/img/search.svg"}
                                                alt="search-icon"
                                            />
                                        </button>
                                    </div>

                                    <div className=' px-3 mt-2'>
                                        <label className=" me-4 d-block" htmlFor=" ">
                                            Sort by
                                        </label>

                                        <Select native defaultValue="" id="grouped-native-select dekstop-sort-by" className='px-2 rounded-3 w-100'>
                                            <option value="Vistaprint_prod_Discovery_en-US" selected="">
                                                Recommended
                                            </option>
                                            <option value="Vistaprint_prod_Discovery_en-US_popularity">
                                                Popularity
                                            </option>
                                            <option value="Vistaprint_prod_Discovery_en-US_price_asc">
                                                Price low to high
                                            </option>
                                            <option value="Vistaprint_prod_Discovery_en-US_price_desc">
                                                Price high to low
                                            </option>
                                            <option value="Vistaprint_prod_Discovery_en-US_newArrivals">
                                                New arrivals
                                            </option>
                                            <option value="Vistaprint_prod_Discovery_en-US_customerReviews">
                                                Customer reviews
                                            </option>
                                        </Select>

                                    </div>

                                    <div className='mt-3'>
                                        <Sidebar categoryData={categoryData} pageID={pageID} notnone={false} />
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-end '>
                                    <button
                                        onClick={() => setDrawer(false)}
                                        className='m-2 mt-3 btn btn-dark btn-lg rounded-pill'>See results</button>
                                </div>
                            </Drawer>
                        </div>
                    </Grid>
                </Grid>

            </div>
        </div >

    )
}

export default Filter