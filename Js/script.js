
let nav = document.querySelector('nav');
let menu = document.querySelector('.menu');
let wrongmenu = document.querySelector('.wrong-menu');
menu.addEventListener('click', () => {
    nav.classList.toggle('menuop');
    wrongmenu.style.display = "block";
    menu.style.display = "none"
    console.log(nav)
});

function handleNav() {

    nav.classList.toggle('menuop');
    wrongmenu.style.display = "none";
    menu.style.display = "block";

}


AOS.init();

(function () {
    emailjs.init({
        publicKey: "1X-ad81qh6e2uvueV",
    });
})();

const form = document.querySelector('.form');
let mes = document.querySelector(".main-message");
let fm = document.querySelector(".main-failed-message");

function sendEmail(event) {

    event.preventDefault();
    if (form.checkValidity()) {
        var params = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            m: document.getElementById('m').value,
        }

        var serviceID = "service_gmcjqvo";
        var templateID = "template_em2yjod";

        emailjs.send(serviceID, templateID, params)
            .then(res => {
                console.log(res)
                setTimeout(() => {
                    mes.style.display = 'block';
                    setTimeout(() => {
                        form.reset();
                        mes.style.display = 'none';
                    }, 3000);
                }, 1);
            })



            .catch(err => {
                console.log(err)
                setTimeout(() => {
                    form.reset();
                    fm.style.display = 'block';
                    setTimeout(() => {
                        fm.style.display = 'none';
                    }, 2700);
                }, 1);
            })
    } else {
        form.reportValidity();
    }
}


var loading = document.querySelector(".preloading");
window.addEventListener('load', () => {
    setTimeout(() => {
        loading.style.display = "none";
    }, 2500)

});

