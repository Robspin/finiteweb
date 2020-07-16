import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import History from '../components/History';
import Loading from '../components/loading/Loading';
import Content from '../components/content/Content';
import Form from '../components/form/Form';
import RecentContainer from '../components/recentcontainer/RecentContainer';

const Search = ({ match }) => {
   const [data, setdata] = useState({});
   const [loading, setLoading] = useState(true);
   const [current, setCurrent] = useState('');
   const [input, setInput] = useState('');
   const [editMode, setEditMode] = useState(false);

   useEffect(() => {
      if (current === '') {
         let x = match.params.id;
         if (x.length > 12) x = x.slice(0, 12);
         setCurrent(x);
      }
      // console.log(match.params.id);
      axios
         .get(
            `http://localhost:8080/api/${current}
         `
         )
         .then(res => {
            setdata(res.data);
            setLoading(false);
         })
         .catch(err => console.log(err));
      //es-lint-disable-next-line
   }, [current, editMode]);

   const onSubmit = e => {
      e.preventDefault();
      setCurrent(input.trim().toLowerCase());
      History.push('/' + input.trim().toLowerCase());
      setInput('');
      setEditMode(false);
   };

   const content = () => {
      if (loading === true) {
         return <Loading />;
      } else if (editMode === false) {
         return <Content data={data} setEditMode={() => setEditMode(true)} />;
      } else {
         return <Form setEditMode={() => setEditMode(false)} data={data} />;
      }
   };

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
                              maxLength={12}
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
               {content()}
               {/* {editMode === false ? (
                  <Content data={data} setEditMode={() => setEditMode(true)} />
               ) : (
                  <Form setEditMode={() => setEditMode(false)} data={data} />
               )} */}
            </div>
            <div className='row-2'>
               <RecentContainer
                  setCurrent={setCurrent}
                  setEditMode={setEditMode}
               />
            </div>
         </div>
      </Fragment>
   );
};

export default Search;
