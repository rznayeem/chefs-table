import PropTypes from 'prop-types';
const Cook = ({ cook, idx, handlePreparingBtn }) => {
  const { name, time, calories } = cook;
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{name}</td>
      <td>{time}</td>
      <td>{calories}</td>
      <td>
        <button
          onClick={() => handlePreparingBtn(cook)}
          className="btn rounded-full h-auto min-h-0 py-3 px-[18px] font-medium bg-[#0BE58A]"
        >
          Preparing
        </button>
      </td>
    </tr>
  );
};

Cook.propTypes = {
  cook: PropTypes.shape({
    calories: PropTypes.any,
    name: PropTypes.any,
    time: PropTypes.any,
  }),
  handlePreparingBtn: PropTypes.func,
  idx: PropTypes.number,
};

export default Cook;
