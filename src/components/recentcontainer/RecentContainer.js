import React from 'react';
import './recentContainer.css';

import RecentItem from './recentitem/RecentItem';
import exampleData from './exampleData';

const recentContainer = ({ setCurrent }) => {
   return (
      <div className='recent-container'>
         <h3 className='recently'>Recently editted:</h3>
         {exampleData.map(item => (
            <RecentItem
               key={item.bPageID}
               item={item}
               setCurrent={setCurrent}
            />
         ))}
      </div>
   );
};

export default recentContainer;
