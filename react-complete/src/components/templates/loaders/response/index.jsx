import React, { memo } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import { Container } from "./elements";

const ResponseLoader = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
};

export default memo(ResponseLoader);
