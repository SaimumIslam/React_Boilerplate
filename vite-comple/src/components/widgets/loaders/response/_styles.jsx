import { styled } from "@mui/material/styles";

export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  height: "70vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: theme.zIndex.modal,
}));
