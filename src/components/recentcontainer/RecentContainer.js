import React, { useEffect, useState } from 'react';
import './recentContainer.css';
import axios from 'axios';

import RecentItem from './recentitem/RecentItem';

const RecentContainer = ({ setCurrent, setEditMode }) => {
   const [recent, setRecent] = useState([]);

   useEffect(() => {
      axios
         .get(
            `http://localhost:8080/api/recent
         `
         )
         .then(res => {
            setRecent(res.data);
         })
         .catch(err => console.log(err));
   }, []);

   return (
      <div className='recent-container'>
         <h3 className='recently'>Recently edited:</h3>
         {recent.map(item => (
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

export default RecentContainer;
