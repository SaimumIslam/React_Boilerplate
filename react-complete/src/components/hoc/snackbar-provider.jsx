import React, { createRef } from "react";

import { SnackbarProvider } from "notistack";

import { styled } from "@mui/material/styles";

import MuiIconButton from "@mui/material/IconButton";

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

function SnackbarProviderHoc({ children }) {
  const notistackRef = createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <SnackbarProvider
      ref={notistackRef}
      action={(key) => (
        <IconButton aria-label="close" onClick={onClickDismiss(key)}>
          <CloseIcon />
        </IconButton>
      )}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {children}
    </SnackbarProvider>
  );
}

export default SnackbarProviderHoc;
