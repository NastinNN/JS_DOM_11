let end=new Date(2024,0,1);

function countdown(){
        let now=new Date();
        let days=Math.floor((end-now)/(1000*60*60*24));
        let hours=Math.round((end-now)/(1000*60*60)%24);
        let minutes=Math.round((end-now)/(1000*60)%60);
        let seconds=Math.round((end-now)/(1000)%60);
        let str=`${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
    document.querySelector(".timer").innerHTML=str;
}

setInterval("countdown()",0);