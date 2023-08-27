import { styled } from "@mui/material/styles";

export const FilterContainer = styled("form")(({ theme }) => ({
  gap: 20,
  display: "flex",
  flexDirection: "column",
  width: "100%",
}));

export const FilterFields = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gridGap: 20,
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr));",
  },
  [theme.breakpoints.down("xs")]: {
    gridTemplateColumns: "repeat(1, minmax(0, 1fr));",
  },
}));
