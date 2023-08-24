import { createRef } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import MuiIconButton from "@mui/material/IconButton";
import { SnackbarProvider as NotificationProvider } from "notistack";

import { CloseIcon } from "assets/icons";

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  "& .MuiIconButton-root": {
    padding: 5,
    color: theme.palette.common.white,
  },
  "& .MuiSvgIcon-root": {
    fontSize: theme.typography.pxToRem(20),
  },
}));

function SnackbarProvider({ children }) {
  const notistackRef = createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <NotificationProvider
      ref={notistackRef}
      action={(key) => (
        <IconButton aria-label="close" onClick={onClickDismiss(key)}>
          <CloseIcon />
        </IconButton>
      )}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}>
      {children}
    </NotificationProvider>
  );
}

SnackbarProvider.propTypes = {
  children: PropTypes.node,
};

export default SnackbarProvider;
