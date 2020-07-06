import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { Context } from './Context';
import History from './History';

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
         <div className='bg-dark text-light'>
            <div className='container pt-5' style={{ height: '100vh' }}>
               <Link to='/' className='btn btn-success mb-5'>
                  &#11207; Back to Home
               </Link>

               <form onSubmit={onSubmit} className='mt-5'>
                  <div className='input-group'>
                     <input
                        type='text'
                        className='form-control'
                        placeholder='Type page...'
                        value={input}
                        onChange={e => setInput(e.target.value)}
                     />

                     <div className='input-group-append'>
                        <button className='btn btn-primary' type='submit'>
                           Go!
                        </button>
                     </div>
                  </div>
               </form>

               <h1>{current}</h1>
               <p>
                  {data.content}
                  {/* <span className='text-info'>{current} </span>Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Rerum sequi placeat
                  explicabo alias inventore officiis, facilis laudantium. Harum
                  quod dolorum optio facere vel praesentium ab!{' '}
                  <span className='text-info'>{current} </span> . */}
               </p>
            </div>
         </div>
      </Fragment>
   );
};

export default Search;
