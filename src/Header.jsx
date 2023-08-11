import PropTypes from "prop-types"; // Import the prop-types library

const Header = (props) => {
  const { products } = props;

  return (
    <header>
      <h1>Header Component</h1>
      <p>Received products: {products.length}</p>
    </header>
  );
};

// Add prop validation using PropTypes
Header.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Header;
