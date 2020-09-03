import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import History from '../components/History';
import SearchPageNavBar from '../components/navbar/SearchPageNavBar';
import Loading from '../components/loading/Loading';
import Content from '../components/content/Content';
import Form from '../components/form/Form';
import RecentContainer from '../components/recentcontainer/RecentContainer';
import Dog from '../components/dog/Dog';
import RandomButton from '../components/randomButton/RandomButton';
import zoomOutMobile from '../components/timeconverter/timeConverter';

const URL =
   process.env.NODE_ENV !== 'production'
      ? process.env.REACT_APP_DEV_URL
      : process.env.REACT_APP_PROD_URL;

const Search = ({ match }) => {
   const [data, setdata] = useState({});
   const [loading, setLoading] = useState(true);
   const [current, setCurrent] = useState('');
   const [editMode, setEditMode] = useState(false);
   const [url] = useState(match.params.id);
   const [locationKeys, setLocationKeys] = useState([]);

   const history = useHistory();

   useEffect(() => {
      if (current === '') {
         let x = url;
         if (x.length > 64) x = x.slice(0, 64);
         setCurrent(x.replace(/ /g, ''));
      }
      if (current !== '') {
         axios
            .get(
               `${URL}api/${current}
         `
            )
            .then(res => {
               setdata(res.data);
               setLoading(false);
               zoomOutMobile();
            })
            .catch(err => console.log(err));
      }
      return history.listen(location => {
         if (history.action === 'PUSH') {
            setLocationKeys([location.key]);
         }
         if (history.action === 'POP') {
            // window.location.reload(false);
            let y = History.location.pathname;
            y = y.substring(1);
            setCurrent(y);
         }
      });
   }, [current, editMode, url, locationKeys, history]);

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
                  {current.length > 24
                     ? `/${current.slice(0, 24)}...`
                     : `/${current}`}
               </h1>
               {content()}
            </div>
            <div className='row-2'>
               <div className='inverse-div'>
                  <RandomButton searchPage={true} setCurrent={setCurrent} />
                  <RecentContainer
                     setCurrent={setCurrent}
                     setEditMode={setEditMode}
                  />
               </div>
               <Dog />
            </div>
         </div>
      </Fragment>
   );
};

export default Search;
