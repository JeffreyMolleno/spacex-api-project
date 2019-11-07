import GetAPI from './GetAPI.js'; 
import RandomIndex from './RandomIndex.js';
import ViewMore from './ViewMore.js';
import CheckIfNull from './CheckIfNull.js';

// For Navigations
const locations = [
    'capsules',
    'cores',
    'dragons',
    'history',
    'landpads',
    'launches',
    'launchpads',   
    'missions',
    'payloads',
    'rockets',
    'roadster',
    'info'
];

var state = {
    progression:{
        current:0,
        length:locations.length
    }
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

function getContentProgression(dir){

    if(dir === 'next'){
        state.progression.current = (state.progression.current+1) < locations.length ?  state.progression.current+1:0;
    }else if(dir === 'info'){
        state.progression.current = 4;
        return GetAPI('info');
    }else{
        state.progression.current = (state.progression.current-1) > -1 ?  state.progression.current-1: locations.length-1;
    }

    return GetAPI(locations[state.progression.current]);
}

function previewDisplay(data){

    let res = '';

    let headermode = '',
        maindetails = '',
        maincaptions = '';


    if(locations[state.progression.current] == 'capsules'){
        let ndata = RandomIndex(data);
                
        headermode = 'CAPSULES';
        maindetails = ` ${ndata.type} ${ndata.capsule_serial}`;
        maincaptions = `${CheckIfNull(ndata.details)}`;
    }

    if(locations[state.progression.current] == 'cores'){
        let ndata = RandomIndex(data);if(locations[state.progression.current] == 'cores'){
            let ndata = RandomIndex(data);
                
            headermode = 'CORES';
            maindetails = `${CheckIfNull(ndata.core_serial)}`;
            maincaptions = ` ${CheckIfNull(ndata.details)}`;

        fadingin(bgCollectives.cores);
        }

        headermode = 'CORES';
        maindetails = `${ndata.core_serial}`;
        maincaptions = ` ${ndata.details}`;
    }

    if(locations[state.progression.current] == 'dragons'){
        let ndata = RandomIndex(data);
        
        headermode = 'DRAGON';
        maindetails = `${ndata.name}`;
        maincaptions = ` ${ndata.description}`;

        fadingin(ndata.flickr_images);
    }

    if(locations[state.progression.current] == 'history'){
        let ndata = RandomIndex(data);
        
        headermode = 'HISTORY';
        maindetails = `${ndata.title}`;
        maincaptions = ` ${ndata.details} <br> ${ndata.event_date_utc}`;
    }

    if(locations[state.progression.current] == 'info'){
        
        headermode = 'SPACE X';
        maindetails = `Founded by ${data.founder}`;
        maincaptions = ` ${data.summary} <br> <section class="c-links-out">
        <a target='_blanck' href="https://www.flickr.com/photos/spacex/"><img src="./graphics/fb-icon.png"></a>
        <a target='_blanck' href="${data.links.twitter}"><img src="./graphics/tw-icon.png"></a>
        <a target='_blanck' href="https://www.youtube.com/user/spacexchannel"><img src="./graphics/yt-icon.png"></a>
    </section>`;

        fadingin(bgCollectives.info);
    }

    if(locations[state.progression.current] == 'landpads'){
        let ndata = RandomIndex(data);
        
        headermode = 'LANDING PADS';
        maindetails = `${ndata.full_name}`;
        maincaptions = ` ${ndata.details} <br><br> STATUS: ${ndata.status.toUpperCase()}`;

        fadingin(bgCollectives.landpads);
    }

    if(locations[state.progression.current] == 'launches'){
        let ndata = RandomIndex(data);
        
        headermode = 'LAUNCHES';
        maindetails = `${ndata.mission_name}`;
        maincaptions = ` ${CheckIfNull(ndata.details)} <br><br> Launched from : ${ndata.launch_site.site_name_long}`;

        if(ndata.flickr_images){
            fadingin(ndata.flickr_images);
        }
    }

    if(locations[state.progression.current] == 'launchpads'){

        let ndata = RandomIndex(data);
        
        headermode = 'LAUNCH PADS';
        maindetails = `${ndata.name}`;
        maincaptions = `${ndata.site_name_long}  <br><br> ${ndata.details} <br><br> STATUS : ${ ndata.status.toUpperCase()}`;

        fadingin(bgCollectives.launchpads);

    }

    if(locations[state.progression.current] == 'missions'){
        let ndata = RandomIndex(data);
        
        headermode = 'MISSIONS';
        maindetails = `${ndata.mission_name}`;
        maincaptions = `Mission ID : ${ndata.mission_id}  <br><br> ${ndata.description} <br><br>`;
    }

    if(locations[state.progression.current] == 'payloads'){
        let ndata = RandomIndex(data);
        
        headermode = 'PAYLOAD';
        maindetails = `${ndata.payload_id}`;
        maincaptions = `A commisioned payload of ${ndata.customers.map(data=>{
            return `${data}`;
        })} that is manufactured by ${CheckIfNull(ndata.manufacturer)} delivered into a ${CheckIfNull(ndata.orbit_params.reference_system)} ${CheckIfNull(ndata.orbit_params.regime)} orbit.`;
    }

    if(locations[state.progression.current] == 'rockets'){
        let ndata = RandomIndex(data);
        
        headermode = 'ROCKETS';
        maindetails = `${ndata.rocket_name}`;
        maincaptions = `${ndata.description} <br><br> First Flight : ${ndata.first_flight}`;

        fadingin(bgCollectives.rockets);
    }

    if(locations[state.progression.current] == 'roadster'){
        headermode = 'ROADSTER';
        maindetails = `${data.name}`;
        maincaptions = `${data.details}`;

        fadingin(data.flickr_images);
    }

    res = `<section class="c-main-content-header">
            ${headermode}
        </section>

        <section class="c-main-story">
        <section class="c-mission-name">
            ${maindetails}
        </section>
        <section class="c-mission-story">
            ${maincaptions}
        </section>
        </section>

        <section class="c-view-missions-timeline prim-co" data-moreof="${locations[state.progression.current]}">
            VIEW MORE
        </section>`;

    document.querySelector('.j-main-content').innerHTML = res;
    
    locations[state.progression.current] === 'roadster' || locations[state.progression.current] === 'info'?
    hide('.c-view-missions-timeline'):show('.c-view-missions-timeline','flex');
}

function hide(target){
    document.querySelector(target).style.display = 'none';
}

function show(target, type){
    type?document.querySelector(target).style.display = type: document.querySelector(target).style.display = 'block';
}

function defaultHides(){
    hide('.j-view-more-container');
}

function hideMain(){
    hide('.c-main-content-container');
}

function fadesin(ndata){
    
        document.querySelector('.content-image-overlay').style.background = `url('${RandomIndex(ndata)}')`;

        document.querySelector('.content-image-overlay').classList.add('animate-overlay-fadein');

        document.querySelector('.content-image-overlay').style.backgroundSize = `cover`;

    setTimeout(function(){
        document.querySelector('.content-image-overlay').classList.remove('animate-overlay-fadein');
    },1000);
}

// fadeout first what is overlayed
function fadingin(ndata){


    document.querySelector('.content-image-overlay').classList.add('animate-overlay-fadeout');

    setTimeout(function(){
        document.querySelector('.content-image-overlay').classList.remove('animate-overlay-fadeout');
        document.querySelector('.content-image-overlay').style.background = `'')`;

        fadesin(ndata)
    },1000);
}

defaultHides();

// Hide navigation bar when scrolling
var prevScrollpos = window.pageYOffset;

// var understart = true;

prevScrollpos = 1000;

window.onscroll = function() {

  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName('j-header')[0].style.top = "0";
    
    // hide('.j-icon-rocket-up');

  } else {
    document.getElementsByClassName('j-header')[0].style.top = "-100px";

    show('.j-icon-rocket-up');
  }
  prevScrollpos = currentScrollPos;
}

// Selectors

document.querySelector('.j-nav-next').addEventListener('click', function(){

    getContentProgression('next').then(previewDisplay).catch(e=>console.warn(e));
});

document.querySelector('.j-nav-prev').addEventListener('click', function(){

    getContentProgression('prev').then(previewDisplay).catch(e=>console.warn(e));
});

document.querySelector('.j-main-content').addEventListener('click',function(e){
    if(e.target.getAttribute('data-moreof')&&e.target.getAttribute('data-moreof')!='info'&&e.target.getAttribute('data-moreof')!='roadster'){
        hideMain();
        show('.j-view-more-container');
        hide('.j-icon-rocket-up');
        ViewMore(e.target.getAttribute('data-moreof'));
    }
}) 

document.querySelector('.j-home-link').addEventListener('click', function(){
    hide('.j-view-more-container');
    show('.c-main-content-container');
    hide('.j-start-motivation')
    hide('.j-start-content-container');
    show('.content-image-overlay');

});

document.querySelector('.j-info-link').addEventListener('click',function(){
    hide('.j-view-more-container');
    show('.c-main-content-container');

    getContentProgression('info').then(previewDisplay).catch(e=>console.log(e));

    state.progression.current = 11;

    hide('.j-start-motivation')
    hide('.j-start-content-container');
    show('.content-image-overlay');
    show('.c-main-content-container');
});

document.querySelector('.j-start-viewing').addEventListener('click',function(){
    hide('.j-start-motivation')
    hide('.j-start-content-container');
    show('.content-image-overlay');
    show('.c-main-content-container');
    document.querySelector('.content-image-overlay').classList.add('animate-overlay-fadein');
});


document.querySelector('.j-icon-rocket-up').addEventListener('click',function(){
    
    document.querySelector('.j-icon-rocket-up').classList.add('rocket-move');

    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
    });

    setTimeout(function(){
        document.querySelector('.j-icon-rocket-up').classList.remove('rocket-move');

        hide('.j-icon-rocket-up');
    },3000);
});

function start(){
    hide('.content-image-overlay');
    hide('.j-icon-rocket-up');
}

// for testing
hideMain();
start();

document.getElementsByClassName('j-header')[0].style.top = "0!important";


setTimeout(function(){

    document.querySelector('.j-start-motivation').classList.add('animate-overlay-fadein');

    document.querySelector('.j-start-motivation').style.background = `url('https://live.staticflickr.com/65535/48129269942_618314a6e4_3k.jpg')`;
    document.querySelector('.j-start-motivation').style.left = 0;

    document.querySelector('.j-start-motivation').style.backgroundSize = `cover`;
    //here
    

    document.querySelector('.j-frame-embed').style.display = `none`;
},60000)