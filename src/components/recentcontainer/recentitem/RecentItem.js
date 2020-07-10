import React from 'react';
import { Link } from 'react-router-dom';
import History from '../../History';
import './recentItem.css';

const RecentItem = ({ item, setCurrent }) => {
   return (
      <div className='recent-item'>
         <h4
            className='link'
            onClick={() => {
               setCurrent(item.bPageID.substring(1));
               History.push(item.bPageID.substring(1));
            }}
         >
            {item.bPageID}
         </h4>

         <h4 className='time'>
            {`${item.time}${item.time === 1 ? ' min ' : ' mins '}`}
            <span>ago</span>
         </h4>
      </div>
   );
};

export default RecentItem;
