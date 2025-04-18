import { SvgIcon } from "./_styles";

function BaseSvgIcon(props) {
  const { children, ...others } = props || {};
  return (
    <SvgIcon fill="none" strokeWidth="1.5" stroke="currentColor" {...others}>
      {children}
    </SvgIcon>
  );
}

export default BaseSvgIcon;
