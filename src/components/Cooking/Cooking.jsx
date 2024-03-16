import PropTypes from 'prop-types';

const Cooking = ({ cooking, idx }) => {
  const { name, time, calories } = cooking;
  return (
    <tr className="text-[16px] font-medium text-[#282828B2]">
      <td>{idx + 1}</td>
      <td>{name}</td>
      <td>{time}</td>
      <td>{calories}</td>
    </tr>
  );
};

Cooking.propTypes = {
  cooking: PropTypes.shape({
    calories: PropTypes.any,
    name: PropTypes.any,
    time: PropTypes.any,
  }),
  idx: PropTypes.number,
};

export default Cooking;
