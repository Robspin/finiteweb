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
   const [url] = useState(match.params.id);

   useEffect(() => {
      if (current === '') {
         let x = url;
         if (x.length > 64) x = x.slice(0, 64);
         setCurrent(x.replace(/ /g, ''));
      }
      if (current !== '') {
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
      }
   }, [current, editMode, url]);

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
               <h1 className='current-title'>
                  {current > 24 ? `/${current.slice(0, 24)}...` : `/${current}`}
               </h1>
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
