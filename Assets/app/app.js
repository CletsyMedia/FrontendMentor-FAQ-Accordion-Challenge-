const faq = document.querySelectorAll(".faq-title");

faq.forEach(faq => {
    faq.addEventListener("click", ()=>{
       faq.classList.toggle("faq-active") 
    })
});