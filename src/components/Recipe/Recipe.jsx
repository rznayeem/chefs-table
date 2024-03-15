import PropTypes from 'prop-types';
import Ingredient from './Ingredient/Ingredient';
import { FaRegClock } from 'react-icons/fa6';
import { AiOutlineFire } from 'react-icons/ai';
const Recipe = ({ recipe }) => {
  const { image, id, name, description, ingredients, time, calories } = recipe;

  return (
    <div className="card w-96 p-6 bg-base-100 shadow-xl">
      <figure className="">
        <img src={image} alt="Recipe Image" className="rounded-2xl" />
      </figure>
      <div className="card-body p-0 text-start">
        <h2 className="card-title">{name}</h2>
        <p className="">{description}</p>
        <hr />
        <h3>Ingredients: {ingredients.length}</h3>
        <ul className="list-disc ml-4">
          {ingredients.map(ingredient => (
            <Ingredient ingredient={ingredient}></Ingredient>
          ))}
        </ul>
        <hr />
        <div className="flex gap-4">
          <div className="flex  items-center gap-2">
            <FaRegClock /> <span>{time} minutes</span>
          </div>
          <div className="flex  items-center gap-2">
            <AiOutlineFire /> <span>{calories} calories</span>
          </div>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">Want to Cook</button>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    calories: PropTypes.any,
    description: PropTypes.any,
    id: PropTypes.any,
    image: PropTypes.any,
    ingredients: PropTypes.any,
    name: PropTypes.any,
    time: PropTypes.any,
  }),
};

export default Recipe;
