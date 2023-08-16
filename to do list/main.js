let button = document.querySelector("button");
let container = document.getElementById("container");
let input = document.querySelector("input");
let form = document.querySelector("form");

container.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-bin") {
    eo.target.parentElement.parentElement.remove();
  } else if (eo.target.className == "icon-frown-o") {
    eo.target.classList.add("dn");
    let hart = `<span class="icon-heart"></span> `;
    eo.target.parentElement.innerHTML += hart;
  }
 
});

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  let task = `  <div class="task">
    <span class="icon-star"></span>
    <p>${input.value}</p>
<div class="icon">
    <span class="icon-bin"></span>
 
    <span class="icon-frown-o"></span>
</div>
<!-- <span class="icon-heart"></span> -->
</div>`;
  container.innerHTML += task;
});
