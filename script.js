function breakTheText (){
    let h1 = document.querySelector("h1")
let h1Text = h1.textContent

let splittedText = h1Text.split("")
let halfValue = splittedText.length/2

let clutter = ""
splittedText.forEach(function (elem,indx) {
    if (indx<halfValue) {
        clutter += `<span class = "a">${elem}</span>`
    }else{
        clutter += `<span class= "b">${elem}</span>`
    }
})

h1.innerHTML = clutter
}

breakTheText ()

gsap.from("h1 .a",{
    y:70,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:0.15
})
gsap.from("h1 .b",{
    y:70,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:-0.15
})