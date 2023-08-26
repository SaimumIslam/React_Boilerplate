import { useQuery } from "react-query";

import { RootHeader } from "components/modules/headers";
import { ResponseLoader } from "components/modules/loaders";

import { totalUsers } from "services/rest-api/users";

import { Container } from "./_styles";
import Card from "./card";

function Root() {
  const { data, isLoading } = useQuery(["total_users"], totalUsers);

  const items = (Array.isArray(data?.results) && data?.results) || [];

  if (isLoading) return <ResponseLoader />;

  return (
    <Container>
      <RootHeader items={data?.count || 0} route="create" title="People"></RootHeader>
      user Roots
      {items.map((item, index) => (
        <Card key={index} instance={item} />
      ))}
    </Container>
  );
}

export default Root;
