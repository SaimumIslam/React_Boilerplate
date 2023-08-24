import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

function CheckIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </SvgIcon>
  );
}

export default CheckIcon;