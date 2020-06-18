import React from 'react';

const Content = props => {
   const page = props.props[0];
   return (
      <div>
         <h1>{page.page}</h1>
         <p>{page.text}</p>
      </div>
   );
};

export default Content;
