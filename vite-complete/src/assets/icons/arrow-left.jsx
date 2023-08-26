import { BaseSvgIcon } from "components/material-ui/svgicons";

function ArrowLeftIcon(props) {
  return (
    <BaseSvgIcon {...props}>
      <svg>
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
    </BaseSvgIcon>
  );
}

export default ArrowLeftIcon;
