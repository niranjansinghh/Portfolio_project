//first page gsap
// navbar-content
var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i");
var tl = gsap.timeline();
tl.to("#full", {
    right: "0",
    duration: 0.4
});
tl.from("#full h4", {
    x: 150,
    duration: 0.5,
    stagger: 0.25,
    opacity: 0
});
tl.from("#full i", {
    opacity: 0,
    duration: 0.3
});
tl.pause();
menu.addEventListener("click", function () {
    tl.play();
});
cross.addEventListener("click", function () {
    tl.reverse();
});
// first-page main-content
function breaktheText() {
    var h1 = document.querySelector("h1")
    var h1text = h1.textContent
    var splittedText = h1text.split("")
    var halfValue = splittedText.length / 2
    var clutter = ""
    splittedText.forEach(function (elem, ind) {
        if (ind < halfValue) {
            clutter += `<span class="first"> ${elem} </span>`
        } else {
            clutter += `<span class="last"> ${elem} </span>`
        }

    })
    function breaktheText() {
        var h1 = document.querySelector("h3")
        var h1text = h1.textContent
        var splittedText = h1text.split("")
        var halfValue = splittedText.length / 2
        var clutter = ""
        splittedText.forEach(function (elem, ind) {
            if (ind < halfValue) {
                clutter += `<span class="first"> ${elem} </span>`
            } else {
                clutter += `<span class="last"> ${elem} </span>`
            }

        })
        h1.innerHTML = clutter
    }
    breaktheText()
    gsap.from("h3 .first", {
        y: 60,
        opacity: 0,
        duration: 0.7,
        delay: 0.3,
        stagger: 0.15
    })
    gsap.from("h3 .last", {
        y: 60,
        opacity: 0,
        duration: 0.7,
        delay: 0.3,
        stagger: -0.15
    })

    h1.innerHTML = clutter
}
breaktheText()

gsap.from("h1 .first", {
    y: 60,
    opacity: 0,
    duration: 0.7,
    delay: 0.3,
    stagger: 0.15
})
gsap.from("h1 .last", {
    y: 60,
    opacity: 0,
    duration: 0.7,
    delay: 0.3,
    stagger: -0.15
})

//first-page line-gsap
var initialPath = `M 10 100 Q 500 100 980 100`
var finalPath = `M 10 100 Q 500 100 980 100`

var string = document.querySelector("#string")

string.addEventListener("mousemove", function (dets) {
    initialPath = `M 10 100 Q ${dets.x} ${dets.y} 980 100`

    gsap.to("svg path", {
        attr: { d: initialPath },
        duration: 0.2,
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1,0.2)"
    })
})

// middle-page gsap
gsap.from(".project-item", {
    duration: 2,
    opacity: 0,
    y: 50,
    stagger: 1.5,
    ease: "power2.out"
});



// last-page query
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;

    console.log('Form Submitted');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Message:', message);

    alert('Thank you for reaching out!');
    document.getElementById('contactForm').reset(); // Reset form fields
});


