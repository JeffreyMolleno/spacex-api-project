import GetAPI from './GetAPI.js'; 
import RandomIndex from './RandomIndex.js';
import ViewMore from './ViewMore.js';

// For Navigations

const locations = [
    'capsules',
    'cores',
    'dragons',
    'history',
    'info',
    'landpads',
    'launches',
    'launchpads',   
    'missions',
    'payloads',
    'rockets',
    'roadster'
];

var state = {
    progression:{
        current:0,
        length:locations.length
    }
}

var bgCollectives = {
    capsules:[],
    landpads:['https://live.staticflickr.com/4138/35231792310_78192738ec_3k.jpg',
    'https://live.staticflickr.com/4341/36073878143_8aa04b684b_3k.jpg'],
    info:['https://cdn.vox-cdn.com/thumbor/XM6cF9lk2KslumFtuKEmetGLl3M=/0x0:3000x2000/2070x1164/filters:focal(1260x760:1740x1240):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/62153379/REC_Elon_LedeImage__1_.0.png']
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
        maincaptions = `${ndata.details}`;
    }

    if(locations[state.progression.current] == 'cores'){
        let ndata = RandomIndex(data);if(locations[state.progression.current] == 'cores'){
            let ndata = RandomIndex(data);
                
            headermode = 'CORES';
            maindetails = `${ndata.core_serial}`;
            maincaptions = ` ${ndata.details}`;
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
        maincaptions = ` ${ndata.details} <br><br> ${ndata.event_date_utc}`;
    }

    if(locations[state.progression.current] == 'info'){
        // let ndata = RandomIndex(data);
        
        headermode = 'SPACE X';
        maindetails = `FOUNDER: ${data.founder}`;
        maincaptions = ` ${data.summary}`;

        // document.querySelector('.content-image-overlay').style.background = `url('${RandomIndex(bgCollectives.info)}')`;

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
        maincaptions = ` ${ndata.details} <br><br> Launched from : ${ndata.launch_site.site_name_long}`;

        if(ndata.flickr_images){
            fadingin(ndata.flickr_images);
        }
    }

    if(locations[state.progression.current] == 'launchpads'){

        let ndata = RandomIndex(data);
        
        headermode = 'LAUNCH PADS';
        maindetails = `${ndata.name}`;
        maincaptions = `${ndata.site_name_long}  <br><br> ${ndata.details} <br><br> STATUS : ${ ndata.status.toUpperCase()}`;
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
        })} that is manufactured by ${ndata.manufacturer} delivered into a ${ndata.orbit_params.reference_system} ${ndata.orbit_params.regime} orbit.`;
    }

    if(locations[state.progression.current] == 'rockets'){

        let ndata = RandomIndex(data);
        
        headermode = 'ROCKETS';
        maindetails = `${ndata.rocket_name}`;
        maincaptions = `${ndata.description} <br><br> First Flight : ${ndata.first_flight}`;
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
}


function hide(target){
    document.querySelector(target).style.display = 'none';
}

function show(target, type){
    type?document.querySelector(target).style.display = type: document.querySelector(target).style.display = 'block';
}

function defaultHides(){
    // hide('.c-main-content-container');
    hide('.j-view-more-container');
}

function hideMain(){
    hide('.c-main-content-container');
}

function fadesin(ndata){
    // setTimeout(() => {
    
        document.querySelector('.content-image-overlay').style.background = `url('${RandomIndex(ndata)}')`;

        document.querySelector('.content-image-overlay').classList.add('animate-overlay-fadein');

        document.querySelector('.content-image-overlay').style.backgroundSize = `cover`;
        
    // }, 1000);
    
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

window.onscroll = function() {

  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName('j-header')[0].style.top = "0";
  } else {
    document.getElementsByClassName('j-header')[0].style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}


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

        ViewMore(e.target.getAttribute('data-moreof'));
    }

    // let line = document.getElementsByClassName('jcircle');

    // document.getElementsByClassName('j-line')[0].style.left = (line[0].offsetLeft+window.screenX) + 'px';
}) 

document.querySelector('.j-home-link').addEventListener('click', function(){
    hide('.j-view-more-container');
    show('.c-main-content-container');
});

document.querySelector('.j-info-link').addEventListener('click',function(){
    hide('.j-view-more-container');
    show('.c-main-content-container');
    getContentProgression('info').then(previewDisplay).catch(e=>console.log(e));
});

// hideMain();