import PropTypes from "prop-types";

import {
  DisableContainer,
  EnableContainer,
  IconWraper,
  TextButton,
} from "./_styles";

const TextIconButton = (props) => {
  const { startIcon, endIcon, onClick, disabled, text, ...others } = props;

  const Icon = startIcon || endIcon;
  const Container = disabled ? DisableContainer : EnableContainer;

  return (
    <Container onClick={onClick} {...others}>
      {Boolean(startIcon) && (
        <IconWraper>
          <Icon />
        </IconWraper>
      )}
      <TextButton>{text}</TextButton>
      {Boolean(endIcon) && (
        <IconWraper>
          <Icon />
        </IconWraper>
      )}
    </Container>
  );
};

TextIconButton.propTypes = {
  startIcon: PropTypes.elementType,
  onClick: PropTypes.func,
  endIcon: PropTypes.elementType,
  disabled: PropTypes.bool,
  children: PropTypes.any,
  text: PropTypes.string,
};

TextIconButton.defaultProps = {
  disabled: false,
};
export default TextIconButton;
