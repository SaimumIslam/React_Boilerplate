import React from "react";
import PropTypes from "prop-types";

import { Link as RouterLink } from "react-router-dom";
import { RoundedButton } from "components/material/buttons";

import { AddIcon, ArrowLeftIcon } from "assets/icons";

import {
  Title,
  Container,
  BackButton,
  TitleWraper,
  ChildWraper,
} from "./elements";

function RootHeader(props) {
  const {
    items,
    route,
    title,
    onBack,
    children,
    button_icon,
    button_title,
    button_color,
  } = props;

  const Icon = button_icon;

  return (
    <Container>
      <TitleWraper>
        {route && (
          <RoundedButton
            variant="contained"
            color={button_color}
            startIcon={<Icon />}
            component={RouterLink}
            to={route}
          >
            {button_title}
          </RoundedButton>
        )}
        {onBack && (
          <BackButton startIcon={<ArrowLeftIcon />} onClick={onBack}>
            {button_title}
          </BackButton>
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
