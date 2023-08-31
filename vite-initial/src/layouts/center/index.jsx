import PropTypes from "prop-types";


const CenterLayout = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  );
};

CenterLayout.propTypes = {
  children: PropTypes.node,
};
export default CenterLayout;
