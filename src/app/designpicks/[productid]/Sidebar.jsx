import { Box, Checkbox, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
const Sidebar = ({ notnone }) => {

    return (
        <Grid item md={2.5} xs={0} className={notnone === undefined ? 'mobile-display-none' : ""}>
            <Box paddingLeft={2} marginRight={2}>
                <Box className="border-top border-bottom py-3  ">
                    <Typography className='fs-5 fw-bold '>Colors</Typography>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="white/black" control={<Radio />} label="White/Black" display={"block"} />
                        <FormControlLabel value="black" control={<Radio />} label="Black" display={"block"} />
                    </RadioGroup>
                </Box>
                <Box className=" border-bottom py-3 ">
                    <Typography className='fs-5 fw-bold '>Events</Typography>
                    <ul className='mt-3  list-unstyled' style={{ fontSize: "0.9rem", fontWeight: 400 }}>
                        <li className='my-2' > Baby</li>
                        <li className='my-2' > Birthday</li>
                        <li className='my-2' > General Party</li>
                        <li className='my-2' > Wedding</li>
                    </ul>
                </Box>
                <Box className=" border-bottom py-3 ">
                    <Typography className='fs-5 fw-bold '>Business</Typography>
                    <FormControlLabel control={<Checkbox sx={{
                        color: "black",
                        '&.Mui-checked': {
                            color: "black",
                        },
                    }} />} label="Conservative" />
                </Box>
                <Box className=" border-bottom pt-3 ">
                    <Typography className='fs-5 fw-bold '>Styles & Themes</Typography>
                    <ul className='mt-3  list-unstyled' style={{ fontSize: "0.9rem", fontWeight: 400 }}>
                        <li className='my-2' > Baby</li>
                        <li className='my-2' > Birthday</li>
                        <li className='my-2' > General Party</li>
                        <li className='my-2' > Wedding</li>
                    </ul>
                </Box>
                <Box className=" border-bottom py-3 ">
                    <Typography className='fs-5 fw-bold '>Logo / Photo Area</Typography>
                    <FormControlLabel control={<Checkbox sx={{
                        color: "black",
                        '&.Mui-checked': {
                            color: "black",
                        },
                    }} />} label="
                    Has Logo/Photo Area" />
                </Box>
            </Box>
        </Grid>
    )
}

export default Sidebar

