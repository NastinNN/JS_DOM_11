let price= {
      bwPrint: 5,
      bwCopy: 4,
      colorPrint: 15,
      colorCopy: 12,
      photo3040: 50,
      photo5060: 100
}
let elemsQ=document.querySelectorAll("input[type='number']");
let priceValues=Object.values(price);
let table=document.querySelector("table");
priceValues.forEach(function(elem,index) {
      table.rows[index+1].cells[1].innerHTML=elem;
})

for (let i=0;i<elemsQ.length;i++)
{
      elemsQ[i].oninput=function() {
            document.getElementById(`sum${i}`).innerHTML=priceValues[i]*elemsQ[i].value;
            itogo()
      }
}

function itogo() {
      let sums=Array.from(document.querySelectorAll("[id*='sum']"));
      summ=sums.reduce((sum,elem)=>sum + +elem.innerHTML,0);
      document.querySelector("#itogo").innerHTML=summ
}