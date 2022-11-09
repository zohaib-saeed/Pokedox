import React from "react";
import { Box, Button, Container } from "@mui/material";
import Card from "../Layout/Card";
import Layout from "../Layout/Layout";

const Pokemon: React.FC = () => {
  //Prop object for card component
  const obj: any = {
    pokeName: "PokeName",
    tag: "PokeTag",
    imgSrc: "/Images/Poke.jpg",
    altText: "Pokemon",
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        overflowX: "hidden",
        mt: 5,
        px: 1,
        pb: 2,
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "xl",
        }}
      >
        {/* Header */}
        <Layout />
        {/* Redirect Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-end" },
            alignItems: "center",
            width: "100%",
            pt: { xs: 8, md: 10 },
          }}
        >
          <Button
            sx={{
              backgroundColor: "#da471b",
              color: "white",
              borderRadius: "4px",
              px: 5,
              py: 1,
              fontSize: "18px",
              textAlign: "center",
              textTransform: "capitalize",
              width: { xs: "100%", sm: "230" },
              maxWidth: "165px",
            }}
          >
            Redirect
          </Button>
        </Box>
        {/* Pokemon cards container */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },

            justifyItems: { xs: "center", sm: "stretch" },
            width: "100%",
            mt: 2,
          }}
        >
          {/* Card */}
          <Card {...obj} />
          <Card {...obj} />
          <Card {...obj} />
          <Card {...obj} />
          <Card {...obj} />
          <Card {...obj} />
        </Box>
      </Container>
    </Box>
  );
};

export default Pokemon;
