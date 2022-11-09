import React from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import Select from "react-select";

const Layout: React.FC = () => {
  //Sort by name and type select box styles
  const sortingStyles = {
    container: ({ provided, state }: any) => ({
      ...provided,
      width: "100%",
      position: "relative",
    }),
  };

  //fitler by abilities select box styles
  const abilitiesFilterStyles = {
    container: ({ provided, state }: any) => ({
      ...provided,
      width: "100%",
      position: "relative",
    }),
  };

  //fitler by types select box styles
  const typesFilterStyles = {
    container: ({ provided, state }: any) => ({
      ...provided,
      width: "100%",
      position: "relative",
    }),
  };

  //Options for  select box
  const options = [
    { value: "asc-name", label: "Sort by Names (A-Z)" },
    { value: "desc-name", label: "Sort by Names (Z-A)" },
    { value: "asc-type", label: "Sort by Types (A-Z)" },
    { value: "desc-type", label: "Sort by Types (Z-A)" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        mt: 2,
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "xl",
          pl: { xs: 0 },
          pr: { xs: 0 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "40px", sm: "65px" },
            fontWeight: "700",
            color: "#da471b",
            marginBottom: 2,
          }}
        >
          Pokedex
        </Typography>
        {/* Top functionality bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            flexWrap: "wrap",
            maWidth: "lg",
            width: "100%",
          }}
        >
          {/* Search bar + reset button  */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center ", sm: "space-between" },
              alignItems: { xs: "center", sm: "flex-end" },
              flexDirection: { xs: "column", sm: "row" },
              "& input": {
                px: 0.6,
                py: 1.2,
                border: "2px solid #616161",
                outline: "none",
                width: "230px",
                mr: { xs: 0, sm: 0.5 },
                borderRadius: "4px",
                fontSize: "16px",
                color: "#616161",
                "::placeholder": {
                  color: "#616161",
                },
              },
              "& input:focus": {
                outline: "none",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  color: "black",
                  py: 0.5,
                  fontSize: "20px",
                  fontWeight: "600",
                  textAlign: "left",
                }}
              >
                Search Pokemons:
              </Typography>
              <input type="text" placeholder="Search pokemon" />
            </Box>
            <Button
              sx={{
                backgroundColor: "#da471b",
                color: "white",
                textTransform: "capitalize",
                fontSize: "16px",
                width: { xs: "100%", sm: "auto" },
                mt: { xs: 1, sm: 0 },
                mb: { xs: 1, sm: 0 },
                px: 2,
                "&:hover": {
                  backgroundColor: "#da471b",
                },
              }}
            >
              Reset
            </Button>
          </Box>
          {/* Sorting by name + type  */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                color: "black",
                py: 0.5,
                fontSize: "20px",
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              Sort by Name and Type:
            </Typography>
            <Box
              sx={{
                width: "230px",
              }}
            >
              <Select options={options} styles={sortingStyles} />
            </Box>
          </Box>
          {/*Filter by abilities  */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
              mt: { xs: 1, sm: 0 },
            }}
          >
            <Typography
              sx={{
                color: "black",
                py: 0.5,
                fontSize: "20px",
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              Filter by Abilities:
            </Typography>
            <Box
              sx={{
                width: { xs: "230px", sm: "170px" },
              }}
            >
              <Select options={options} styles={abilitiesFilterStyles} />
            </Box>
          </Box>
          {/*Filter by types  */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
              mt: { xs: 1, sm: 0 },
            }}
          >
            <Typography
              sx={{
                color: "black",
                py: 0.5,
                fontSize: "20px",
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              Filter by Types:
            </Typography>
            <Box
              sx={{
                width: { xs: "230px", sm: "170px" },
              }}
            >
              <Select options={options} styles={typesFilterStyles} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Layout;
