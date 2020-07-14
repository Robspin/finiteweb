const timeConverter = javaTime => {
   let time = new Date(javaTime.slice(0, 24)) / 60000;
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

export default timeConverter;
