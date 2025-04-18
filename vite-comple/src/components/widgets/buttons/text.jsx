import PropTypes from "prop-types";

import { DisableContainer, EnableContainer, IconWraper, ViewText } from "./_styles";

const TextButton = (props) => {
  const { startIcon, endIcon, onClick, disabled, text } = props;

  const Icon = startIcon || endIcon;
  const Container = disabled ? DisableContainer : EnableContainer;

  return (
    <Container onClick={onClick} role="button">
      {Boolean(startIcon) && (
        <IconWraper>
          <Icon />
        </IconWraper>
      )}
      <ViewText>{text}</ViewText>
      {Boolean(endIcon) && (
        <IconWraper>
          <Icon />
        </IconWraper>
      )}
    </Container>
  );
};

TextButton.propTypes = {
  disabled: PropTypes.bool,
  startIcon: PropTypes.elementType,
  endIcon: PropTypes.elementType,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

TextButton.defaultProps = {
  disabled: false,
};
export default TextButton;
