import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import heartIcon from "@iconify/icons-akar-icons/heart";
import heartFilled from "@iconify/icons-ant-design/heart-filled";

// type Props = {
//   pokeName?: string;
//   tag?: string;
//   imgSrc?: string;
//   altText?: string;
// };

const Card: React.FC = (Props: any) => {
  // Select favourite state
  const [favorite, setFavorite] = useState<boolean>(false);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "white",
        overflow: "hidden",
        borderRadius: "4px",
        maxWidth: { xs: "280px", sm: "100%" },
        px: 1.5,
        py: 1.5,
        mx: 1,
        my: 1,
      }}
    >
      {/* Pokemon Image */}
      <Box
        sx={{
          "& img": {
            height: "190px",
            maxWidth: "220px",
            background: "lightgrey",
            borderRadius: "4px",
          },
          layout: "fill",
          objectFit: "contain",
        }}
      >
        <img src={Props?.imgSrc} alt={Props?.altText} />
      </Box>
      {/* Bottom wrapper */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          // px: 2,
          my: 1,
          pt: 0.7,
          borderTop: "2px solid gray",
        }}
      >
        {/* Bottom wrapper => Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            py: 0.3,
            px: 0.4,
            width: "100%",
          }}
        >
          <Button
            sx={{
              py: 0.1,
              px: 0.9,
              backgroundColor: "#9ECC50",
              color: "black",
              textAlign: "center",
              textTransform: "capitalize",
              fontSize: "16px",
            }}
          >
            Grass
          </Button>
          <Button
            sx={{
              py: 0.1,
              px: 0.9,
              backgroundColor: "#B97FC9",
              color: "white",
              textAlign: "center",
              textTransform: "capitalize",
              fontSize: "16px",
              ml: 1,
            }}
          >
            Poison
          </Button>
        </Box>
        {/* Bottom wrapper => Tag + fav button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            mb: 1,
          }}
        >
          <Typography
            sx={{
              color: "black",
              borderRadius: "4px",
              px: 0.5,
              py: 0.5,
              fontSize: "18px",
              textAlign: "left",
              width: "100%",
              textTransform: "capitalize",
            }}
          >
            {Props.tag}
          </Typography>
          {
            <Box
              sx={{
                cursor: "pointer",
              }}
              onClick={() => setFavorite(!favorite)}
            >
              {!favorite ? (
                <Icon icon={heartIcon} color="#da471b" width="30" height="30" />
              ) : (
                <Icon
                  icon={heartFilled}
                  color="#da471b"
                  width="30"
                  height="30"
                />
              )}
            </Box>
          }
        </Box>
        {/* Bottom wrapper => Pokeymon Name */}
        <Typography
          sx={{
            backgroundColor: "#da471b",
            color: "white",
            borderRadius: "4px",
            px: 1,
            py: 0.5,
            fontSize: "18px",
            textAlign: "center",
            width: "100%",
            textTransform: "capitalize",
          }}
        >
          {Props.pokeName}
        </Typography>
      </Box>
    </Box>
  );
};

export default Card;
