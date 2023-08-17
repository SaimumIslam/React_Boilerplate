import React, { useState } from "react";

import { Button, Container } from "./_styles";

const Landing = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <Container>
      Count: {count}
      <Button onClick={handleClick}>Increment</Button>
    </Container>
  );
};

export default Landing;
