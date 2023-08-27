import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

import { RoundedButton } from "components/material-ui/buttons";
import { AddIcon } from "assets/icons";

import { ChildWraper, Container, Title, TitleWraper } from "./_styles";

function RootHeader(props) {
  const { items, route, title, children, button_icon, button_title, button_color } =
    props;

  const Icon = button_icon;

  return (
    <Container>
      <TitleWraper>
        {Boolean(route) && (
          <RoundedButton
            to={route}
            variant="contained"
            color={button_color}
            startIcon={<Icon />}
            component={RouterLink}>
            {button_title}
          </RoundedButton>
        )}
        <Title>
          {title}
          {(Boolean(items) || items <= 0) && (
            <>
              <small>|</small>
              <span>Total: {items}</span>
            </>
          )}
        </Title>
      </TitleWraper>
      <ChildWraper>{children}</ChildWraper>
    </Container>
  );
}

RootHeader.propTypes = {
  items: PropTypes.number,
  route: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  button_icon: PropTypes.any,
  button_color: PropTypes.string,
  button_title: PropTypes.string,
  onBack: PropTypes.func,
};
RootHeader.defaultProps = {
  route: "",
  button_icon: AddIcon,
  button_color: "secondary",
  button_title: "Create",
};

export default RootHeader;
