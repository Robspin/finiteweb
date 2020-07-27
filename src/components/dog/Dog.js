import React, { useState, Fragment, useEffect } from 'react';
import './dog.css';

import textbox from './images/textbox-y.png';

const pickRandom = () => {
   return Math.floor(Math.random() * 60) + 1;
};

const Dog = () => {
   const [showTextBox, setShowTextBox] = useState(true);
   const [dogPic, setDogPic] = useState(require(`./images/1.png`));
   const [
      text,
      setText
   ] = useState(`Anything you read here may or may not be true. Use your own
   judgment and don't cite anything on this site as a source.`);

   const textArr = [
      `This site doesn't use cookies. Isn't that nice?`,
      'Although I look like a Sheba Inu, I am actually a Corgi!',
      'We appreciate feedback, please let us know in /feedback.'
   ];
   let index = 0;

   useEffect(() => {
      const intervalId = setInterval(() => {
         setDogPic(require(`./images/${pickRandom()}.png`));
         setText(textArr[index]);
         index === 2 ? (index = 0) : index++;
      }, 30000);
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
                  <p className='dog-text'>{text}</p>
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
