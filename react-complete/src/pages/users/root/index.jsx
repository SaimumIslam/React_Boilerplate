import React from "react";
import { useQuery } from "@tanstack/react-query";

import { ResponseLoader } from "components/templates/loaders";
import { RootHeader } from "components/templates/headers";

import { totalUsers } from "services/api/users";

import Card from "./card";

import { Container } from "./elements";

function Root() {
  const { status, data } = useQuery(["total-user"], totalUsers);

  if (status === "loading") return <ResponseLoader />;

  const items = (Array.isArray(data?.results) && data?.results) || [];

  return (
    <Container>
      <RootHeader
        items={data?.count || 0}
        route="create"
        title="People"
      ></RootHeader>
      user Roots
      {items.map((item, index) => (
        <Card key={index} instance={item} />
      ))}
    </Container>
  );
}

export default Root;
