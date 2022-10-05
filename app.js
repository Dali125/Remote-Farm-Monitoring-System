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




const observerforadmin = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show2')


        } else {
            entry.target.classList.remove('show2')

        }
    })
})
const hiddenElementsforadmin = document.querySelectorAll('.hidden2');
hiddenElementsforadmin.forEach((el) => observer.observe(el));



//Navigation barQuerry
query = document.querySelector(".hamburger");
query.onclick = function() {

    navBar = document.querySelector(".nav-bar");

    navBar.classList.toggle("active");
}