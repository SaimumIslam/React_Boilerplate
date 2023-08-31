import { useForm } from "react-hook-form";

import { FieldController } from "components/__controllers";
import { SearchAction } from "components/modules/actions";
import { OutlineInputField } from "components/material-ui/inputs";
import { OutlineSelectField } from "components/material-ui/selects";

import useNavigation from "hooks/useNavigation";

import { formatSearchData } from "utils/format-helper";
import { CREATE_UPDATE_SORT_BY } from "data/search";

import { FilterContainer, FilterFields } from "./_styles";

function Filters() {
  const { query, setPath } = useNavigation();

  const setParams = (value) => {
    const params = new URLSearchParams(value);
    setPath({ search: params.toString() });
  };

  const defaultValues = {
    keyword: query?.keyword || "",
    order_by: query?.order_by || "",
  };

  const { reset, control, handleSubmit } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = (data) => {
    const searchData = formatSearchData(data);
    setParams(searchData);
  };

  const handleClear = () => {
    reset({
      keyword: "",
      order_by: "",
    });
    setPath({ search: `` });
  };

  return (
    <FilterContainer>
      <FilterFields>
        <FieldController name="keyword" control={control}>
          <OutlineInputField label="Keyword" />
        </FieldController>
        <FieldController name="order_by" control={control}>
          <OutlineSelectField items={CREATE_UPDATE_SORT_BY} label="Order By" />
        </FieldController>
      </FilterFields>
      <SearchAction onSubmit={handleSubmit(onSubmit)} onCancel={handleClear} />
    </FilterContainer>
  );
}

export default Filters;
