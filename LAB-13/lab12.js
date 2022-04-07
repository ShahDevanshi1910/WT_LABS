let selection = document.querySelector("select");
let container = document.getElementById("backgroung");
console.log(container);

selection.addEventListener("change", () => {
  var city = selection.options[selection.selectedIndex].value;
  if (city == "surat") {
    container.classList.remove("vadodra", "nadiad", "anand");
    container.classList.add("surat");
    alert("Surat is famous for Diamond and food.");
  } else if (city == "vadodra") {
    container.classList.remove("surat", "nadiad", "anand");
    container.classList.add("vadodra");
    alert("Vadodra is famous for cloths.");
  } else if (city == "nadiad") {
    container.classList.remove("surat", "vadodra", "anand");
    container.classList.add("nadiad");
    alert("Nadiad is famous for their food.");
  } else {
    container.classList.remove("surat", "vadodra", "nadiad");
    container.classList.add("anand");
    alert("Anand is famous for their Amul dairy.");
  }
});
