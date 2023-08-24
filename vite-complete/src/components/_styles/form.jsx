import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const FormContainer = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 20,
  width: "60%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const FormFlexRow = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 20,
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));
