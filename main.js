import AboutController from "./controllers/about.controller.js";
import HomeController from "./controllers/home.controller.js";
import PageNotFoundController from "./controllers/pageNotFound.controller.js";
import Croppr from 'croppr';

const routes = [
  { name: "home", controller: HomeController },
  { name: "about", controller: AboutController },
];

const main = () => {
  let url = window.location.href.split("/");
  let currentPage = url.pop();

  if(url.length === 3 && currentPage == ""){
   new HomeController();
  }else {
    
    let pageFound = false;

    routes.forEach((route) => {
        if (route.name === currentPage) {
            pageFound = true;
           new route.controller();
        }
    });

    if(!pageFound) {window.page = new PageNotFoundController()};
  }
  

  document.querySelector(".my-image").croppie();

};

// window.addEventListener("popstate", (event) => {
//   main();
// });

// main();

// var basic = document.querySelector('.my-image')

var cropInstance = new Croppr('#croppr', {
  // ...options
  aspectRatio: 1.5,
  startSize: [50, 50],
  returnMode: "real"
});


const saveButton = document.querySelector("#save-button");
const emptyImage = document.querySelector("#empty-image");

saveButton.addEventListener("click",() => {
  console.log(cropInstance.getValue());
  emptyImage.setAttribute("style", "display:block");

})
