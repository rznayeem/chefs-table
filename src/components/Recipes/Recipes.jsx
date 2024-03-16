import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const Recipes = ({ handleCookBtn }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('recipes.json')
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  return (
    <div className="lg:grid grid-cols-2 col-span-7 gap-6">
      {recipes.map((recipe, idx) => (
        <Recipe
          handleCookBtn={handleCookBtn}
          key={idx}
          recipe={recipe}
        ></Recipe>
      ))}
    </div>
  );
};

Recipes.propTypes = {
  handleCookBtn: PropTypes.any,
};

export default Recipes;
