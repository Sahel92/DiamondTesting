function scrollToSkills(){
    //smooth scrooling to the skills section

    document.getElementById("skills-section").scrollIntoView({behavior: 'smooth'});

}

// display contact modal
function showContactModal(){
    let modal = document.getElementById("contactModal");
    modal.style.display = "block";
}

//close contact modal
function closeContactModal(){
    let modal = document.getElementById("contactModal");
    modal.style.display = "none";
}

//close the modal if the user clicks outside of it
 window.onclick = function(){
    let modal = document.getElementById("contactModal");
    if(event.target == modal){
        modal.style.display = "none";
    }
}


