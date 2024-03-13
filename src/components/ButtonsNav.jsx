import React from 'react';

const ButtonsNav = () => {
  const list = [
    "Home", "All", "Musics", "Songs", "Movies", "StandUp", "Coding", "Web Development",
    
  ];

  return (
    <div className='flex  text-nowrap p-2 gap-3'>
      {list.map((data, index) => (
        <button key={index} className='bg-gray-300 rounded-md px-3 font-bold text-base'>
          {data}
        </button>
      ))}
    </div>
  );
};

export default ButtonsNav;
