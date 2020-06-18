import React from 'react';

const Item = props => {
   const { page, time } = props.item;
   return (
      <div className='item'>
         <h4 className='link'>{page}</h4>
         <h4 className='time'>
            {`${time}${time === 1 ? ' min ' : ' mins '}`}
            <span>ago</span>
         </h4>
      </div>
   );
};

export default Item;
