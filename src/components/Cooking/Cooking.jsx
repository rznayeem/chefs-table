import React from 'react';

const Cooking = ({ cooking, idx }) => {
  const { name, time, calories } = cooking;
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{name}</td>
      <td>{time}</td>
      <td>{calories}</td>
    </tr>
  );
};

export default Cooking;
