import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function overview({ data }) {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography style={{ fontWeight: "700" }} variant="h3">
            {data?.overview_title}
          </Typography>
          <Box>
            <ul
              style={{ listStyle: "disc" }}
              className="first-child-hide"
              dangerouslySetInnerHTML={{
                __html: data?.overview_list,
              }}
            ></ul>
          </Box>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.overview_description,
            }}
          >
            {/* <Box>
              <Typography style={{ fontWeight: "700" }} variant="body1">
                Soft edges for a strong impact
              </Typography>
              <Typography variant="body2">
                Rounded corner business cards have a look that’s hard to miss.
                Not to mention, a soft, smooth feel in people’s hands. The
                attention-grabbing shape looks elegant and professional – but
                also gives your design a unique, modern vibe. The best part?
                Rounded edges are less likely to bend than sharp corners,
                meaning these cards can stay looking fresh for longer.
              </Typography>
            </Box>
            <Box pt={1}>
              <Typography style={{ fontWeight: "700" }} variant="body1">
                Customization options
              </Typography>
              <Typography variant="body2">
                Round edge business cards are available with most of our paper
                stocks, and with a lot of other options, too. You can create
                square rounded corner business cards, or enhance your design
                with our foil accents or embossed gloss. And if you’re including
                social media info on your card, this shape works especially well
                with the rounded designs of major social logos. Check out some
                tips on how to add social media icons to business cards.
              </Typography>
            </Box>
            <Box pt={1}>
              <Typography style={{ fontWeight: "700" }} variant="body1">
                Fast & simple to design
              </Typography>
              <Typography variant="body2">
                Sure, you’ve got lots of options – but we make it easy to zero
                in on the choices you want. Upload your own design or quickly
                browse templates created to complement rounded edge business
                cards. Choose the options you want, check out your card in our
                3D preview and fine-tune things from there. Looking for ideas?
                Take a look at some of our favorite business card examples.
              </Typography>
            </Box> */}
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/img/hello.webp"
            alt="product image"
            height={800}
            width={700}
          />
        </Grid>
      </Grid>
    </div>
  );
}
