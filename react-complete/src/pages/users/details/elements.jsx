import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: 30,
  gap: 10,
}));
