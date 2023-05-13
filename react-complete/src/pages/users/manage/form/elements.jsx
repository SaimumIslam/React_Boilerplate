import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const FormContainer = styled("form")(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.06)",
  borderRadius: 10,
  width: "100%",
  padding: 30,
  [theme.breakpoints.down("sm")]: {
    padding: 20,
  },
}));

export const FormWraper = styled(Box)(({ theme }) => ({
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
