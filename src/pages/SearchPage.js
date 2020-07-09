import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { Context } from './Context';
import History from '../components/History';
import Content from '../components/content/Content';
import Button from '../components/button/Button';
import Form from '../components/form/Form';
import Author from '../components/author/Author';
// import NavBar from '../components/navbar/NavBar';

const Search = ({ location, match }) => {
   // console.log(match.params.id);
   const [data, setdata] = useState({});
   // const [state, setState] = useContext(Context);
   const [current, setCurrent] = useState('');
   const [input, setInput] = useState('');
   const [editMode, setEditMode] = useState(false);

   useEffect(() => {
      if (current === '') setCurrent(match.params.id);
      // console.log(match.params.id);
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
      //es-lint-disable-next-line
   }, [current]);

   const onSubmit = e => {
      e.preventDefault();
      setCurrent(input.trim().toLowerCase());
      History.push('/' + input.trim().toLowerCase());
      setInput('');
   };

   console.log(editMode);

   return (
      <Fragment>
         <div className='grid-container'>
            <div className='row-1'>
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
               {/* --NavBar end -- */}
               <h1 className='current-title'>{`/${current}`}</h1>
               {editMode === false ? (
                  <Content data={data} setEditMode={() => setEditMode(true)} />
               ) : (
                  <Form setEditMode={() => setEditMode(false)} data={data} />
               )}
            </div>
            <div className='row-2'></div>
         </div>
      </Fragment>
   );
};

export default Search;
