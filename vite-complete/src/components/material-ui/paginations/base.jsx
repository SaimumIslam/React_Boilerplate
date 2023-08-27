import PropTypes from "prop-types";
import Pagination from "@mui/material/Pagination";

const BasePagination = (props) => {
  const { offset, total_data, page, changePage } = props;
  const page_count = Boolean(total_data) ? Math.ceil(total_data / offset) : 1;

  return <Pagination count={page_count} page={page} onChange={changePage} />;
};

BasePagination.propTypes = {
  offset: PropTypes.number,
  total_data: PropTypes.number,
  page: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};

BasePagination.defaultProps = {
  page: 1,
  total_data: 1,
};

export default BasePagination;
