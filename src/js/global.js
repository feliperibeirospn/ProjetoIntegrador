function clickMenu(){
  if(sidebar.style.width == '250px'){
    sidebar.style.width = '0px';
  }else sidebar.style.width = '250px';

}

const submiteBotton = document.getElementById("bt")
const resumeToggle =document.getElementById("resume")

submiteBotton.addEventListener('click', ()=>{
    if(resumeToggle.classList.contains("visible")){
        resumeToggle.classList.remove("visible")
    }else{
        resumeToggle.classList.add("visible")
    }
})

function search(){
    let input = document.getElementById('busca').value
    input = input.toLowerCase()

    let x = document.getElementsByClassName('name')
    for(i=0; i<x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = "none"
        }else{
            x[i].style.display = ""
        }
    }
   
    
}

// Seleciona o ícone do menu e o input do menu

/*const menuCheckbox = document.getElementsByClassName('material-symbols-outlined');
console.log(menuCheckbox)
const sidebar = document.getElementById('sidebar');

// Adiciona um evento de clique ao ícone do menu
menuIcon.addEventListener('click', () => {
   menuCheckbox.clickd
});

// Fecha o sidebar quando um item do menu é clicado
const sidebarLinks = document.querySelectorAll('#sidebar a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuCheckbox.clickd = false;
    });
});

// Abre e fecha o sidebar
menuCheckbox.addEventListener('change', () => {
    if (menuCheckbox.checked) {
        sidebar.style.width = '250px';
    } else {
        sidebar.style.width = '0';
    }
}); */