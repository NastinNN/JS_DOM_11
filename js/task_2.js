let end=new Date(2024,0,1);

function countdown(){
        let now=new Date();
        let days=Math.floor((end-now)/(1000*60*60*24));
        let hours=24-now.getHours();;
        let minutes=60-now.getMinutes();
        let seconds=60-now.getSeconds();
        let str=`${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
    document.querySelector(".timer").innerHTML=str;
}

setInterval("countdown()",0);