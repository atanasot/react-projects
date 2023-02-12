import React from 'react';

const List = ({name, age, img}) => {
  return (
    <div className='person'>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <img src={img} alt={name}></img>
    </div>
  );
};

export default List;
