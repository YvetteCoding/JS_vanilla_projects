// get  modal element
let modal = document.getElementById("simpleModal");
// get  open modal button
let modalBtn = document.getElementById("modalBtn");  
// get close button
let closeBtn = document.getElementById("closeBtn");


//listen for open click
modalBtn.addEventListener("click", openModal);

//listen for close click
closeBtn.addEventListener('click', closeModal);

//listen for outside modal click
window.addEventListener('click', clickOutside);


//function to create modal
function openModal() {
    modal.style.display = 'block';
}

//function to close modal
function closeModal() {
    modal.style.display = 'none';
}

//function to close modal by clicking outside

function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
    
}