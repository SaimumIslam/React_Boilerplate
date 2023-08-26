import { useQuery } from "react-query";

import { ResponseLoader } from "components/modules/loaders";

import useNavigation from "hooks/useNavigation";
import { userDetails } from "services/rest-api/users";

import Form from "./form";
import { Container } from "./_styles";

function Manage() {
  const { is_update, params } = useNavigation();
  const user_id = params?.id;

  const { isLoading, data } = useQuery(["details", user_id], () => userDetails(user_id), {
    enabled: false,
  });

  if (isLoading) return <ResponseLoader />;

  return (
    <Container>
      <Form instance={is_update ? data : {}} is_update={is_update} />
    </Container>
  );
}

export default Manage;
