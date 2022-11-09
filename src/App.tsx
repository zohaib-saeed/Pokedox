import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Pokemon from "./components/Pokemon/index";
import Favorite from "./components/Favorite/Favorite";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <Container
        sx={{
          width: "100%",
          maxWidth: "1560px",
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Pokemon />} />
            <Route path="/pokedex" element={<Pokemon />} />
            <Route path="/pokedex/favorites" element={<Favorite />} />
          </Routes>
        </Router>
      </Container>
    </Box>
  );
}

export default App;
