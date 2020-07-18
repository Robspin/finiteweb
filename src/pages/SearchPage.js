import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import SearchPageNavBar from '../components/navbar/SearchPageNavBar';
import Loading from '../components/loading/Loading';
import Content from '../components/content/Content';
import Form from '../components/form/Form';
import RecentContainer from '../components/recentcontainer/RecentContainer';

const Search = ({ match }) => {
   const [data, setdata] = useState({});
   const [loading, setLoading] = useState(true);
   const [current, setCurrent] = useState('');
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
               <SearchPageNavBar
                  setEditMode={setEditMode}
                  setCurrent={setCurrent}
               />
               {/* --NavBar end -- */}
               <h1 className='current-title'>{`/${current}`}</h1>
               {content()}
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
