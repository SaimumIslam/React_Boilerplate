import { useState } from "react";

import { RoundedButton } from "components/material-ui/buttons";

import { ActionWraper, Container, Span, Text } from "./_styles";

const Landing = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <Container>
      <Text>
        Count: <Span data-testid="count">{count}</Span>
      </Text>
      <ActionWraper>
        <RoundedButton variant="contained" onClick={increment}>
          Increment
        </RoundedButton>
        <RoundedButton variant="contained" onClick={decrement}>
          Decrement
        </RoundedButton>
      </ActionWraper>
    </Container>
  );
};

export default Landing;
