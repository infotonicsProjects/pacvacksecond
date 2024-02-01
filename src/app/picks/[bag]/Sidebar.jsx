import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Swtich from './Swtich'
import Link from 'next/link'
const Sidebar = ({ categoryData, pageID, notnone }) => {
    console.log(notnone)
    return (
        <Grid item md={3} xs={0} className={notnone === undefined ? 'mobile-display-none' : ""}>
            <Box paddingLeft={2} marginRight={2}>
                <Box className="border-top border-bottom py-3 ps-4">
                    <Swtich label={"No minimum quantity"} />
                </Box>
                <Box className=" border-bottom py-3 ps-4">
                    <Swtich label={"Backside printing"} />
                </Box>
                <Box className=" border-bottom pt-3 ">
                    <Typography className='fs-5 fw-bold '>Categories</Typography>
                    <ul className='mt-3 text-secondary list-unstyled' style={{ fontSize: "0.78rem" }}>
                        {categoryData?.map((item) => (
                            <li className='my-2' key={item?.id}><Link href={`/picks/${item?.categ_id}`} scroll={false} style={{ color: pageID == item?.categ_id ? "black" : "rgb(92, 92, 92)", fontWeight: pageID == item?.categ_id && "bold" }}>{item?.title}</Link></li>
                        ))}
                    </ul>
                </Box>
            </Box>
        </Grid>
    )
}

export default Sidebar

