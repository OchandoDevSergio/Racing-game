
let arrPages = ["page1", "page2", "page3", "page4"];

const Pageselector = (numpage) => {//función para mostrar una página concreta y ocultar el resto estando todas en el mismo .html
    let goingPage = "page" + numpage;
    arrPages = arrPages.filter (val => !goingPage.includes(val));
    document.getElementById(goingPage).style.display = "block";

    for (let i = 0; i < arrPages.length; i++) {
        document.getElementById(arrPages[i]).style.display = "none";
      }

    arrPages.push(goingPage);
}

document.getElementById("page3").style.display = "block";

document.getElementById("button1").addEventListener("click", () => {
 Pageselector(2);
})

document.getElementById("button2").addEventListener("click", () => {
    Pageselector(3);
   })

document.getElementById("button3").addEventListener("click", () => {
    Pageselector(4);
   })

document.getElementById("button4").addEventListener("click", () => {
    Pageselector(1);
   })   