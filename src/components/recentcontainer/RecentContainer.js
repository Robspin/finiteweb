import React from 'react';
import './recentContainer.css';

import RecentItem from './recentitem/RecentItem';
import exampleData from './exampleData';

const recentContainer = ({ setCurrent, setEditMode }) => {
   return (
      <div className='recent-container'>
         <h3 className='recently'>Recently editted:</h3>
         {exampleData.map(item => (
            <RecentItem
               key={item.bPageID}
               item={item}
               setCurrent={setCurrent}
               setEditMode={setEditMode}
            />
         ))}
      </div>
   );
};

export default recentContainer;
