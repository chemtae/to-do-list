const todayDate=document.querySelector(".js-date");
const datefind=todayDate.querySelector(".js-date-title");

function GettingDate() {
    const dateLate = new Date();
    const dateGet = dateLate.getDate();
    const monthGet = dateLate.getMonth()+1;
    const yearGet = dateLate.getFullYear();
    
    datefind.innerText=`${dateGet} / ${monthGet} / ${yearGet} 📅`;
}

  function init() {
    GettingDate(); 
 }
 
 init();  

