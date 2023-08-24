import { useState } from "react";

import { Button, Container, Span, Text } from "./_styles";

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
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </Container>
  );
};

export default Landing;
