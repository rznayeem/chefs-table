import PropTypes from 'prop-types';
import Cook from '../Cook/Cook';
import Cooking from '../Cooking/Cooking';

const Table = ({ selectedRecipes, handlePreparingBtn, cookingRecipes }) => {
  let totalTime = 0;
  let totalCalories = 0;
  for (const cookingRecipe of cookingRecipes) {
    totalTime += cookingRecipe.time;
    totalCalories += cookingRecipe.calories;
  }

  return (
    <div className="overflow-x-auto border-2 rounded-2xl col-span-5">
      <table className="table table-zebra">
        <caption className="caption-top font-semibold text-2xl mb-4 mt-8">
          Want to cook: {selectedRecipes.length}
          <hr className="mt-4" />
        </caption>
        {/* head */}
        <thead className="my-4">
          <tr className="text-[16px] font-medium">
            <th></th>
            <th>Name</th>
            <th>Times</th>
            <th>Calories</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {selectedRecipes.map((cook, idx) => (
            <Cook
              handlePreparingBtn={handlePreparingBtn}
              selectedRecipes={selectedRecipes}
              cook={cook}
              key={idx}
              idx={idx}
            ></Cook>
          ))}
        </tbody>
      </table>
      <table className="table table-zebra">
        <caption className="caption-top font-semibold text-2xl mb-4 mt-8">
          Currently cooking: {cookingRecipes.length}
          <hr className="mt-4" />
        </caption>
        {/* head */}
        <thead>
          <tr className="text-[16px] font-medium">
            <th></th>
            <th>Name</th>
            <th>Times</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* row 1 */}
          {cookingRecipes.map((cooking, idx) => (
            <Cooking idx={idx} key={idx} cooking={cooking}></Cooking>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td>
              Total Time = <br />
              {totalTime} minutes
            </td>
            <td>
              Total Calories = <br />
              {totalCalories} calories
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  cookingRecipes: PropTypes.array,
  handlePreparingBtn: PropTypes.any,
  selectedRecipes: PropTypes.array,
};

export default Table;
