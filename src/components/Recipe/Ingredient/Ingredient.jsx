import PropTypes from 'prop-types';
const Ingredient = ({ ingredient }) => {
  return (
    <li>
      <p>{ingredient}</p>
    </li>
  );
};

Ingredient.propTypes = {
  ingredient: PropTypes.any,
};

export default Ingredient;
