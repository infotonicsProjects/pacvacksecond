'use client'
import { Grid, Select, TextField, styled } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TuneIcon from '@mui/icons-material/Tune';
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
        width: "100%"
    },
    '& .css-10gvk6e-MuiFormControl-root-MuiTextField-root': {
        width: "100%"
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
const Filter = () => {
    return (
        <div className="swan-hidden-xs mt-3 pb-3">
            <div className=" mx-0 mw-100 ">
                <Grid container style={{ alignItems: "center" }} className="d-flex ">
                    <Grid item xs={6} md={3} className=" pl-0 pr-5 mt-2">
                        <div className="w-100">
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
                    <Grid item xs={6} md={9} className=" pl-5 pr-0">
                        <div style={{ alignItems: "center" }} className="d-flex justify-content-end ">
                            <button
                                type="button"
                                className="mobile-display-none px-5 btn btn-lg  border rounded-pill mx-4 fs-6 py-3 text-dark"
                            >
                                <FavoriteBorderIcon />
                                {" "}{" "}
                                Favroite
                            </button>
                            <button
                                onClick={() => setDrawer(true)}
                                type="button"
                                className=" me-5 hide-dekstop border border-dark btn btn-sm btn-primary btn-light rounded-circle  mx-4 fs-6 py-2 text-dark "
                            >
                                <TuneIcon />

                            </button>
                        </div>
                    </Grid>
                </Grid>

            </div>
        </div >

    )
}

export default Filter