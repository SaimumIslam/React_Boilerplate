import { BaseSvgIcon } from "components/material-ui/svgicons";

function CheckIcon(props) {
  return (
    <BaseSvgIcon {...props}>
      <svg>
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </BaseSvgIcon>
  );
}

export default CheckIcon;
