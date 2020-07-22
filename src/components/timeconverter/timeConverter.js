const timeConverter = javaTime => {
   let time = javaTime.split('[UTC]');

   time = new Date(time[0]) / 60000;
   let timeNow = new Date() / 60000;

   let timePast = Math.floor(timeNow - time);
   if (timePast < 60) {
      return `${timePast} min${timePast > 1 ? 's' : ''} `;
   } else if (timePast < 1440) {
      timePast = Math.floor(timePast / 60);
      return `${timePast} hour${timePast > 1 ? 's' : ''} `;
   } else {
      timePast = Math.floor(timePast / 1440);
      return `${timePast} day${timePast > 1 ? 's' : ''} `;
   }
};

export const timeConverter2 = javaTime => {
   let time = javaTime.slice(0, 24);
   time = time += 'Z';
   time = new Date(time) / 60000;
   let timeNow = new Date() / 60000;

   let timePast = Math.floor(timeNow - time);
   if (timePast < 60) {
      return `${timePast} min${timePast > 1 ? 's' : ''} `;
   } else if (timePast < 1440) {
      timePast = Math.floor(timePast / 60);
      return `${timePast} hour${timePast > 1 ? 's' : ''} `;
   } else {
      timePast = Math.floor(timePast / 1440);
      return `${timePast} day${timePast > 1 ? 's' : ''} `;
   }
};

export const convertUnlockTime = javaTime => {
   let time = javaTime.split('[UTC]');

   time = new Date(time[0]) / 60000;
   let timeNow = new Date() / 60000;

   let timePast = Math.floor(timeNow - time);
   if (timePast < 0) {
      alert(`Able to edit in ${timePast * -1} min${timePast < -1 ? 's' : ''}`);
   } else {
      return true;
   }
};

export const showUnlockTime = javaTime => {
   let time = javaTime.split('[UTC]');

   time = new Date(time[0]) / 60000;
   let timeNow = new Date() / 60000;

   let timePast = Math.floor(timeNow - time);
   if (timePast < 0) {
      return `Able to edit in ${timePast * -1} min${timePast < -1 ? 's' : ''}`;
   } else {
      return null;
   }
};

export default timeConverter;
