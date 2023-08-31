import PropTypes from "prop-types";

function Landing({ children }) {
  return <div>{children}</div>;
}

Landing.propTypes = {
  children: PropTypes.node,
};

export default Landing;
