import PropTypes from 'prop-types';
import Ingredient from './Ingredient/Ingredient';
import { FaRegClock } from 'react-icons/fa6';
import { AiOutlineFire } from 'react-icons/ai';
const Recipe = ({ handleCookBtn, recipe }) => {
  const { image, name, description, ingredients, time, calories } = recipe;

  return (
    <div className="card p-6 bg-base-100 shadow-xl border-2">
      <figure className="">
        <img src={image} alt="Recipe Image" className="rounded-2xl" />
      </figure>
      <div className=" p-0 text-start space-y-4">
        <h2 className="card-title pt-4">{name}</h2>
        <p className="text-[#878787]">{description}</p>
        <hr />
        <h3 className="text-[18px] font-medium">
          Ingredients: {ingredients.length}
        </h3>
        <ul className="list-disc ml-4 min-h-36 text-[#878787] ">
          {ingredients.map((ingredient, idx) => (
            <Ingredient key={idx} ingredient={ingredient}></Ingredient>
          ))}
        </ul>
        <hr />
        <div className="flex gap-4 text-[#282828CC]">
          <div className="flex  items-center gap-2">
            <FaRegClock /> <span>{time} minutes</span>
          </div>
          <div className="flex  items-center gap-2">
            <AiOutlineFire /> <span>{calories} calories</span>
          </div>
        </div>
        <div className="card-actions">
          <button
            onClick={() => handleCookBtn(recipe)}
            className="btn rounded-full bg-[#0BE58A] "
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  handleCookBtn: PropTypes.func,
  recipe: PropTypes.shape({
    calories: PropTypes.any,
    description: PropTypes.any,
    id: PropTypes.any,
    image: PropTypes.any,
    ingredients: PropTypes.array,
    name: PropTypes.any,
    time: PropTypes.any,
  }),
};

export default Recipe;
