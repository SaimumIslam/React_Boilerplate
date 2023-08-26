import { styled } from "@mui/material/styles";

import MuiSvgIcon from "@mui/material/SvgIcon";

export const SvgIcon = styled(MuiSvgIcon)(({ theme }) => ({
  "& .MuiSvgIcon-root": {
    width: "24px",
    height: "24px",
  },
}));
