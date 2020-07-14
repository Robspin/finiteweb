import React from 'react';
import History from '../../History';
import './recentItem.css';

import timeConverter from '../../timeconverter/timeConverter';

const RecentItem = ({ item, setCurrent, setEditMode }) => {
   return (
      <div className='recent-item'>
         <h4
            className='link'
            onClick={() => {
               setCurrent(item.bPageID);
               History.push(item.bPageID);
               setEditMode(false);
            }}
         >
            {item.bPageID}
         </h4>

         <h4 className='time'>
            {timeConverter(item.tsEdited)}
            <span>ago</span>
         </h4>
      </div>
   );
};

export default RecentItem;
