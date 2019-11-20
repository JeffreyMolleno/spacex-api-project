export default class Transition{

    constructor(elementReference, imagebg){
        this.elementReference = elementReference;
        this.imagebg = imagebg;
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


// add this to css file]
// .animate-overlay-fadein{
//     animation-name: fadein;
//     animation-duration: 1s;
//   }
  
//   .animate-overlay-fadeout{
//     animation-name: fadeout;
//     animation-duration: 1s;
//   }
  
//   @keyframes fadein{
//     0%{opacity: 0;}
//   }
  
//   @keyframes fadeout{
//     100%{opacity: 0;}
//   }