let con = document.querySelector("#container");
let icon = document.querySelector("i");

con.addEventListener("dblclick", function () {
  icon.style.transform = "translate(-50% , -50%) scale(3)";
  icon.style.opacity =  0.8;

  setTimeout(() => {

    icon.style.opacity =  0
  }, 1000);
   setTimeout(() => {

    icon.style.transform = "translate(-50% , -50%) scale(0)"

  }, 2000);
});
