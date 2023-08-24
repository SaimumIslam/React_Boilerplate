import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";


export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: 30,
  gap: 10,
}));
