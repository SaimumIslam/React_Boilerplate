import { BaseSvgIcon } from "components/material-ui/svgicons";

function CloseIcon(props) {
  return (
    <BaseSvgIcon {...props}>
      <svg>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </BaseSvgIcon>
  );
}

export default CloseIcon;
