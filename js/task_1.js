let products = [
      {
            nameProduct: "Фитнес-браслет DEXP SB60",
            imgSrc: "./image/DEXPSB60.webp",
            corpus: "черный",
            remen: "черный",
            displaySize: "0,96\"",
            displayType: "OLED",
            bluetooth: true,
            OS: {
                  os1: "Android 4.2",
                  os2: "iOS 8",
            }
      },

      {
            nameProduct: "Смарт-часы RunGo W2",
            imgSrc: "./image/RunGoW2.webp",
            corpus: "зеленый",
            remen: "зеленый",
            displaySize: "3\"",
            displayType: "TFT (TN)",
            bluetooth: true,
            OS: {
                  os1: "Android",
                  os2: "iOS",
            }
      },

      {
            nameProduct: "Смарт-часы Welbe Prime",
            imgSrc: "./image/WelbePrime.webp",
            corpus: "черный",
            remen: "розовый",
            displaySize: "1.69\"",
            displayType: "IPS",
            bluetooth: true,
            OS: {
                  os1: "Android 5.0",
                  os2: "iOS 9",
            }
      },
]

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