import Transition from './Transition';
import RandomIndex from '../API/RandomIndex';

export default function BackGround(type) {

    let transition = new Transition(document.querySelector('.content-image-overlay'), RandomIndex(bgCollectives[type]));

    transition.Transition()
}

export function BackGround__payload(type, image){

    let transition = new Transition(document.querySelector('.content-image-overlay'), image);

    transition.Transition();

}

const bgCollectives = {
    capsules:[],
    landpads:['https://live.staticflickr.com/4138/35231792310_78192738ec_3k.jpg',
    'https://live.staticflickr.com/4341/36073878143_8aa04b684b_3k.jpg'],
    info:['https://cdn.vox-cdn.com/thumbor/XM6cF9lk2KslumFtuKEmetGLl3M=/0x0:3000x2000/2070x1164/filters:focal(1260x760:1740x1240):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/62153379/REC_Elon_LedeImage__1_.0.png'],
    launchpads:['https://live.staticflickr.com/65535/48052269657_f21b232e79_3k.jpg','https://live.staticflickr.com/4505/36984623903_f0e7c4367b_3k.jpg'],
    rockets:['https://live.staticflickr.com/4654/25254688767_1c6f195789_3k.jpg','https://live.staticflickr.com/4696/40126460511_6d7a260c20_3k.jpg','https://live.staticflickr.com/7834/40628437283_6021ece41b_3k.jpg','https://live.staticflickr.com/65535/48954138902_4913a18600_3k.jpg'],
    cores:['https://live.staticflickr.com/4471/37388002420_ebd36f661d_3k.jpg']
}
