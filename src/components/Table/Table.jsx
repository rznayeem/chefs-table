import PropTypes from 'prop-types';
import Cook from '../Cook/Cook';

const Table = ({ selectedRecipes }) => {
  const handlePreparingBtn = cook => {
    console.log(cook);
  };

  return (
    <div className="overflow-x-auto border-2 rounded-2xl col-span-5">
      <table className="table table-zebra">
        <caption className="caption-top">
          Want to cook: {selectedRecipes.length}
        </caption>
        {/* head */}
        <thead>
          <tr>
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
        <caption className="caption-top">Currently cooking: 02</caption>
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Times</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>{/* row 1 */}</tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  selectedRecipes: PropTypes.array,
};

export default Table;
