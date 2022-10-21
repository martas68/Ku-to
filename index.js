
function doSomething(){
    alert(` CONGRATENNLATIONS!?!
    You won IpH0NE 16 this is not a scam!!!!`);
}
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})