import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { Context } from './Context';
import History from '../components/History';
import NavBar from '../components/navbar/NavBar';
import Content from '../components/content/Content';

const Search = ({ location, match }) => {
   // console.log(match.params.id);
   const [data, setdata] = useState({});
   // const [state, setState] = useContext(Context);
   const [current, setCurrent] = useState('');
   const [input, setInput] = useState('');

   // useEffect(() => {
   //    //eslint-disable-next-line
   // }, []);

   useEffect(() => {
      if (current === '') setCurrent(match.params.id);
      console.log(match.params.id);
      axios
         .get(
            `http://localhost:8080/api/${current}
         `
         )
         .then(res => {
            console.log(res.data);
            // console.log(current);
            setdata(res.data);
         })
         .catch(err => console.log(err));
      //eslint-disable-next-line
   }, [current]);

   const onSubmit = e => {
      e.preventDefault();
      setCurrent(input.trim().toLowerCase());
      History.push('/' + input.trim().toLowerCase());
      setInput('');
   };

   return (
      <Fragment>
         <div className='main-container'>
            <div className='nav-container'>
               <Link to='/' className='link'>
                  <h1 className='logo'>
                     FiniteWeb.com <span className='dash'>/</span>
                  </h1>
               </Link>

               <form onSubmit={onSubmit}>
                  <div className='search-container'>
                     <div className='input-group'>
                        <input
                           type='text'
                           className='form-control'
                           placeholder='Type page...'
                           value={input}
                           onChange={e => setInput(e.target.value)}
                        />

                        <div className='input-group-append'>
                           <button className='search-btn' type='submit'>
                              Go!
                           </button>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
            <h1>{current}</h1>
            {/* <Content data={data} /> */}
            <p>{data.content}</p>
         </div>
      </Fragment>
   );
};

export default Search;
