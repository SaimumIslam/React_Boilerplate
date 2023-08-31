import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { TextButton } from "components/widgets/buttons";
import { RootHeader } from "components/modules/headers";
import { ResponseLoader } from "components/modules/loaders";
import { BasePagination } from "components/material-ui/paginations";

import { MinimizeIcon, SearchIcon } from "assets/icons";

import useNavigation from "hooks/useNavigation";
import { totalUsers } from "services/rest-api/users";

import Card from "./card";
import Filters from "./filters";
import { Container, ItemsWraper } from "./_styles";

function Root() {
  const { query, setPath } = useNavigation();
  const initialPage = parseInt(query?.page) || 1;

  const [isSearch, setIsSearch] = useState(false);
  const toggleSearch = () => {
    setIsSearch((prev) => !prev);
  };

  const offset = import.meta.env.VITE_PAGE_OFFSET * 1;
  const [page, setPage] = useState(initialPage);
  const handleChange = (event, value) => {
    const params = new URLSearchParams({ ...query, page: value });
    setPath({ search: params.toString() });
    setPage(value);
  };

  const { data, isFetching } = useQuery({
    queryKey: ["total_users", page, offset, query],
    queyFn: () =>
      totalUsers({
        ...query,
        limit: offset,
        offset: (page - 1) * offset,
      }),
  });

  const items = (Array.isArray(data?.results) && data?.results) || [];

  if (isFetching) return <ResponseLoader />;

  return (
    <Container>
      <RootHeader items_count={data?.count || 0} route="create" title="Users">
        <TextButton
          text="Advanced Search"
          onClick={toggleSearch}
          startIcon={isSearch ? MinimizeIcon : SearchIcon}
        />
      </RootHeader>
      {isSearch && <Filters />}
      <ItemsWraper>
        {items.map((item, index) => (
          <Card key={index} instance={item} />
        ))}
      </ItemsWraper>
      <BasePagination
        page={page}
        offset={offset}
        changePage={handleChange}
        total_data={data?.count}
      />
    </Container>
  );
}

export default Root;
