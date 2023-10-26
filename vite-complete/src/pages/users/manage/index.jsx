import { useQuery } from "@tanstack/react-query";

import { ResponseLoader } from "components/modules/loaders";

import useNavigation from "hooks/useNavigation";
import { userDetails } from "services/rest-api/users";

import Form from "./form";
import { Container } from "./_styles";

function Manage() {
  const { is_update, params } = useNavigation();
  const user_id = params?.id;

  const { isFetching, data } = useQuery({
    queryKey: ["details", user_id],
    queryFn: () => userDetails(user_id),
    enabled: is_update,
  });

  if (isFetching) return <ResponseLoader />;

  return (
    <Container>
      <Form instance={is_update ? data : {}} is_update={is_update} />
    </Container>
  );
}

export default Manage;
