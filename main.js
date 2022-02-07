import AboutController from "./controllers/about.controller.js";
import HomeController from "./controllers/home.controller.js";
import PageNotFoundController from "./controllers/pageNotFound.controller.js";
import Croppr from "croppr";
import Cropper from "cropperjs";

const routes = [
  { name: "home", controller: HomeController },
  { name: "about", controller: AboutController },
];

const main = () => {
  let url = window.location.href.split("/");
  let currentPage = url.pop();

  if (url.length === 3 && currentPage == "") {
    new HomeController();
  } else {
    let pageFound = false;

    routes.forEach((route) => {
      if (route.name === currentPage) {
        pageFound = true;
        new route.controller();
      }
    });

    if (!pageFound) {
      window.page = new PageNotFoundController();
    }
  }

  document.querySelector(".my-image").croppie();
};

// window.addEventListener("popstate", (event) => {
//   main();
// });

// main();

// var basic = document.querySelector('.my-image')

// var cropInstance = new Croppr('#croppr', {
//   // ...options
//   aspectRatio: 1.5,
//   startSize: [50, 50],
//   returnMode: "real"
// });

const saveButton = document.querySelector("#save-button");
const emptyImage = document.querySelector("#empty-image");

// saveButton.addEventListener("click",() => {

//   const canvas = document.getElementById('myCanvas')
//   context = canvas.getContext('2d');
//   const image = new Image()
//   cropInstance.getValue()

//   canvas.width = data.width;
//   canvas.height = data.height;
//   const loadedImg = emptyImage
//   image.src = loadedImg.src;

// context.drawImage(image, data.x, data.y, data.width, data.height, 0, 0, canvas.width, canvas.height);
// const dataUrl = canvas.toDataURL('image/jpeg');

// console.log("data url", dataUrl)
//   // console.log();
//   // emptyImage.setAttribute("style", "display:block");
//   // emptyImage.setAttribute("")

// })

const image = document.getElementById("cropper");
let cropper = new Cropper(image, {
  aspectRatio: 207 / 310.5,
  // cropBoxResizable: false,
  // scalable:true,
  viewMode: 3,
  autoCropArea: 1,
  minContainerWidth: 467,
  minContainerHeight: 300,
  minCanvasWidth: 400,
});

// const uploadImage = document.querySelector("#upload-image");

window.cropImage =  (event) => {
  event.preventDefault();

  var croppedimage = cropper.getCroppedCanvas().toDataURL("image/png");
  const emptyImage = document.querySelector("#empty-image");

  emptyImage.setAttribute("src", croppedimage);
  emptyImage.setAttribute("style", "display:block");

  console.log(croppedimage);
};

window.setCropRatio = (event) => {
  event.preventDefault();
  const form = event.target.closest("form");
  cropper.setAspectRatio(form.width.value / form.height.value);
};

window.openCropping = (event, id) => {
  if (event.preventDefault) event.preventDefault();

  const modal = document.getElementById(id);

  new bootstrap.Modal(modal);
  const cropModal = bootstrap.Modal.getInstance(modal);

  cropModal.show();
};

window.cancelCropping = (event) => {
  event.preventDefault();
  const modal = event.target.closest(".modal");

  const cropModal = bootstrap.Modal.getInstance(modal);

  cropModal.hide();
};

window.uploadImageButton = (event) => {
  event.preventDefault();
  const upload = event.target.closest(".upload");
  upload.querySelector("input").click();
};

window.onImageChange = (event) => {
  cropper.destroy();
  image.src = URL.createObjectURL(event.target.files[0]);
  cropper = new Cropper(image, {
    aspectRatio: 207 / 310.5,
    // cropBoxResizable: false,
    // scalable:true,
    viewMode: 2,
    autoCropArea: 1,
    minContainerWidth: 467,
    minContainerHeight: 300,
    minCanvasWidth: 400,
  });
  
  document.querySelector(".img-container").classList.remove("d-none");
};


