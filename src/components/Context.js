import React, { useState } from 'react';
// import axios from 'axios';

export const Context = React.createContext();

export function ContextController({ children }) {
   let intialState = {
      data: {},
      current: ''
      // dispatch: action => this.setState(state => reducer(state, action))
   };

   const [state, setState] = useState(intialState);

   // useEffect(() => {
   //    axios
   //       .get(
   //          `http://localhost:8080/api/${state.current}
   //       `
   //       )
   //       .then(res => {
   //          console.log(res.data);
   //          setState({
   //             data: res.data
   //          });
   //       })
   //       .catch(err => console.log(err));
   //    //eslint-disable-next-line
   // }, []);

   return (
      <Context.Provider value={[state, setState]}>{children}</Context.Provider>
   );
}
