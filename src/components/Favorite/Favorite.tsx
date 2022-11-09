import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Card from "../Layout/Card";

const Favorite: React.FC = () => {
  //Props object for card component
  const obj: any = {
    pokeName: "PokeName",
    tag: "PokeTag",
    imgSrc: "/Images/Poke.jpg",
    altText: "Pokemon",
  };

  // In case of no favorite item, return this
  const noFavoritesFound: JSX.Element = (
    <Typography
      sx={{
        fontSize: { xs: "24px", sm: "30px" },
        fontWeight: "700",
        color: "black",
        width: "100%",
        textAlign: "center",
        fontStyle: "italic",
      }}
    >
      No favourites found.
    </Typography>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        mt: 4,
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "xl",
          width: "100%",
          pl: { xs: 0 },
          pr: { xs: 0 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "40px", sm: "68px" },
            fontWeight: "700",
            color: "#da471b",
          }}
        >
          Pokedex
        </Typography>
        {/* Favorite pokemons container */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            mt: 7,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "30px" },
              fontWeight: "700",
              color: "black",
              width: "100%",
              textAlign: "left",
            }}
          >
            Your Favourites:
          </Typography>
        </Box>
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
          {/* Map all the favorite items */}
          <Card {...obj} />
        </Box>

        {noFavoritesFound}
      </Container>
    </Box>
  );
};

export default Favorite;
