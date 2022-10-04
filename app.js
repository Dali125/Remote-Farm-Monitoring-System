const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')


        } else {
            entry.target.classList.remove('show')

        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



//Navigation barQuerry
query = document.querySelector(".hamburger");
query.onclick = function() {

    navBar = document.querySelector(".nav-bar");

    navBar.classList.toggle("active");
}