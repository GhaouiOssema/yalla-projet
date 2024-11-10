import React from 'react';
import { useParams } from 'react-router-dom';

const PersonInfoPage = () => {
  const { name } = useParams();

  return (
    <div className=''>
      <h1>{name}</h1>
    </div>
  );
};

export default PersonInfoPage;
