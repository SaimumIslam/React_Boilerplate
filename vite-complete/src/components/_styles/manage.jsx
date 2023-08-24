import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const ManageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.06)",
  borderRadius: 10,
  width: "100%",
  padding: 30,
  [theme.breakpoints.down("sm")]: {
    padding: 20,
  },
}));
