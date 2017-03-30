// probably slower or something
/*let optionsBtn = document.querySelector("#nav-option-btn");*/

// /\ \/ /\ \/ /\ \/ /\ \/ /\ \/ /\ \/ /\ \/ /\ \/ /\ /\ //
// \/ /\ \/ /\ \/ /\ \/ /\ \/ /\ \/ /\ \/ /\ \/ /\ \/ /\ //
let optionsBtn = document.getElementById("nav-option-btn");
let options = document.getElementsByClassName("nav-option");
// \/ /\ \/ /\ \/ /\ \/ /\ \/ /\ \/ /\ \/ /\ \/ /\ \/ /\ //
// /\ \/ /\ \/ /\ \/ /\ \/ /\ \/ /\ \/ /\ \/ /\ \/ /\ /\ //

optionsBtn.addEventListener("click", function() {
  for (let i = 0; i < options.length; i++) {
    if (options[i].style.visibility === "hidden" || options[i].style.visibility === "") {
      options[i].style.visibility = "visible";
    } else {
      options[i].style.visibility = "hidden";
    }
  }
});