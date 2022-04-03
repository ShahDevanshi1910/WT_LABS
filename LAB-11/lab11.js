let selection = document.querySelector('select');
let container = document.getElementById('backgroung_Image')
console.log(container)

selection.addEventListener('change', ()=>{
    var city = selection.options[selection.selectedIndex].value
    if(city=="surat"){
        container.classList.remove("ahmedabad","rajkot")
        container.classList.add("surat");
        alert("Surat is a city of sun")
    }
    else if(city=="ahmedabad"){
        container.classList.remove("surat","rajkot")
        container.classList.add("ahmedabad");
        alert("Ahmedabad is a popular city")
    }
    else if(city=="rajkot"){
        container.classList.remove("surat","ahmedabad")
        container.classList.add("rajkot");
        alert("Rajkot is a city of buisness")
    }

})

