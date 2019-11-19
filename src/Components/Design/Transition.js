export default class Transition{

    constructor(elementReference, imagebg){
        this.elementReference = elementReference;
        this.imagebg = imagebg;
        
        // this.elementReference.style = Overlay;        
        // this.elementReference.style.background =  `url(${this.imagebg})`;
        // this.elementReference.style.backgroundSize =  `cover`;
    }

    FadeOut(){
        this.elementReference.classList.add('animate-overlay-fadeout');
    }

    FadeIn(){
        this.elementReference.classList.add('animate-overlay-fadein');
    }

    Transition(){

        this.FadeOut();

        let elementref = this.elementReference;
        let imageref = this.imagebg;

        setTimeout(function(){
            elementref.style.background = 'none';
            elementref.classList.remove('animate-overlay-fadeout');
        },990)

        setTimeout(function(){
            elementref.classList.add('animate-overlay-fadein');
            elementref.style.background = `url('${imageref}') 0% 0% / cover`;
            console.log(`url(${imageref}) 0% 0% / cover`);
        },1001);

        setTimeout(function(){
            elementref.classList.remove('animate-overlay-fadein')
        }, 1999)
    } 
}

const Overlay = {
    backgroundSize: 'cover',
    height: `100vh`,
    width: `100%`,
    position: `fixed`,
    top: `0`,
    left: `0`,
    zIndex: `-1`,
    opacity: `0.2`,
    // background: ''
}

const fadein = `@keyframes fadein{
    0%{opacity: 0},
}`

const fadeout = `@keyframes fadeout{
    100%{ opacity: 0; }
}`

const animateFadein = {
    animationName: fadein,
    animationDuration: `1s`
}

const animateFadeOut = {
    animationName: fadein,
    animationDuration: `1s`
}


// const animateFadein = 

// .animate-overlay-fadein{
//     animation-name: fadein;
//     animation-duration: 1s;
// }

// .animate-overlay-fadeout{
//     animation-name: fadeout;
//     animation-duration: 1s;
// }