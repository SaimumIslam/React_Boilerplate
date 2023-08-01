import React from "react";
import { useQuery } from "@tanstack/react-query";

import { ResponseLoader } from "components/templates/loaders";

import useNavigation from "hooks/useNavigation";
import { userDetails } from "services/api/users";

import Form from "./form";

function Manage() {
  const { is_update, params } = useNavigation();
  const user_id = params?.id;

  const { status, data } = useQuery(
    ["user-details", user_id],
    () => userDetails(user_id),
    { enabled: is_update }
  );

  if (status === "loading") return <ResponseLoader />;

  return (
    <>
      <Form instance={is_update ? data : {}} />
    </>
  );
}

export default Manage;
