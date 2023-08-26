import { SvgIcon } from "./_styles";

function BaseSvgIcon(props) {
  const { children, ...others } = props || {};
  return (
    <SvgIcon {...others}>
      <svg
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        {children}
      </svg>
    </SvgIcon>
  );
}

export default BaseSvgIcon;
