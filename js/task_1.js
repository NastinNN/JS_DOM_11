import {products} from './objects.js';

let cards=Array.from(document.querySelectorAll(".card"));
cards.forEach(function(elem,index)
{
      elem.querySelector("img").src=`${products[index].imgSrc}`;
      elem.querySelector("h5").innerHTML=`<br>${products[index].nameProduct}`;
      let str=`<br>Корпус: ${products[index].corpus}
      <br>Ремешок: ${products[index].remen}
      <br>Размер дисплея: ${products[index].displaySize}
      <br>Тип дисплея: ${products[index].displayType}`;
      if (products[index].bluetooth)
      str+=`<br>Блютуз: есть`;
      else
      str+=`<br>Блютуз: нет`;
      str+=`<br>Операционная система: ${products[index].OS.os1}, ${products[index].OS.os2}`;
      elem.querySelector(".card-text").innerHTML=str;
}
)