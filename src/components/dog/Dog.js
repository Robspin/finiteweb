import React, { useState, Fragment, useEffect } from 'react';
import './dog.css';

// prettier-ignore
import { d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17,d18,d19,d20,d21,d22,d23,d24,d25,d26,d27,d28,d29,d30,d31,d32,d33,d34,d35,d36,d37,d38,d39,d40,d41,d42,d43,d44,d45,d46,d47,d48,d49,d50,d51,d52,d53,d54,d55,d56,d57,d58,d59,d60, pickRandom } from './dogPics.js';
import textbox from './images/textbox-y.png';

const Dog = () => {
   const [showTextBox, setShowTextBox] = useState(true);
   const [dogPic, setDogPic] = useState(require(`./images/1.png`));

   useEffect(() => {
      const intervalId = setInterval(() => {
         setDogPic(require(`./images/${pickRandom()}.png`));
      }, 10000);
      return () => clearInterval(intervalId);
   }, []);

   return (
      <div className='dog-container'>
         {showTextBox ? (
            <Fragment>
               <img src={textbox} alt='textbox' className='textbox' />
               <div className='text-container'>
                  <button
                     className='close-btn'
                     onClick={() =>
                        showTextBox
                           ? setShowTextBox(false)
                           : setShowTextBox(true)
                     }
                  >
                     x
                  </button>
                  <p>
                     Anything you read here may or may not be true. Use your own
                     judgment and don't cite anything on this site as a source.
                  </p>
               </div>
            </Fragment>
         ) : null}
         <img
            src={dogPic}
            onClick={() => setDogPic(require(`./images/${pickRandom()}.png`))}
            alt='cute doggo'
            className='doggo'
            style={{ height: '100px' }}
         />
      </div>
   );
};

export default Dog;
