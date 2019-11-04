import GetAPI from './GetAPI.js'; 
import RandomIndex from './RandomIndex.js';

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
    'https://live.staticflickr.com/4341/36073878143_8aa04b684b_3k.jpg']
}

function getContentProgression(dir){
    if(dir === 'next'){
        state.progression.current = (state.progression.current+1) < locations.length ?  state.progression.current+1:0;
    }
    else{
        state.progression.current = (state.progression.current-1) > -1 ?  state.progression.current-1: locations.length-1;
    }

    return GetAPI(locations[state.progression.current]);
}

function previewDisplay(data){
    let res = '';

    let headermode = '',
        maindetails = '',
        maincaptions = '';


    console.log(locations[state.progression.current]);

    if(locations[state.progression.current] == 'capsules'){
        let ndata = RandomIndex(data);
        
        console.log(ndata);
        
        headermode = 'CAPSULES';
        maindetails = ` ${ndata.type} ${ndata.capsule_serial}`;
        maincaptions = `${ndata.details}`;
    }

    if(locations[state.progression.current] == 'cores'){
        let ndata = RandomIndex(data);if(locations[state.progression.current] == 'cores'){
            let ndata = RandomIndex(data);
            
            console.log(ndata);
    
            headermode = 'CORES';
            maindetails = `${ndata.core_serial}`;
            maincaptions = ` ${ndata.details}`;
        }
        
        console.log(ndata);

        headermode = 'CORES';
        maindetails = `${ndata.core_serial}`;
        maincaptions = ` ${ndata.details}`;
    }

    if(locations[state.progression.current] == 'dragons'){
        let ndata = RandomIndex(data);
        
        console.log(ndata);

        headermode = 'DRAGON';
        maindetails = `${ndata.name}`;
        maincaptions = ` ${ndata.description}`;

        document.querySelector('.content-image-overlay').style.background = `url('${RandomIndex(ndata.flickr_images)}')`;

        document.querySelector('.content-image-overlay').style.backgroundSize = `cover`;
    }

    if(locations[state.progression.current] == 'history'){
        let ndata = RandomIndex(data);
        
        console.log(ndata);

        headermode = 'HISTORY';
        maindetails = `${ndata.title}`;
        maincaptions = ` ${ndata.details} <br><br> ${ndata.event_date_utc}`;
    }

    if(locations[state.progression.current] == 'info'){
        // let ndata = RandomIndex(data);
        
        console.log(data);

        headermode = 'SPACE X';
        maindetails = `FOUNDER: ${data.founder}`;
        maincaptions = ` ${data.summary}`;
    }

    if(locations[state.progression.current] == 'landpads'){
        let ndata = RandomIndex(data);
        
        console.log(ndata);

        headermode = 'LANDING PADS';
        maindetails = `${ndata.full_name}`;
        maincaptions = ` ${ndata.details} <br><br> STATUS: ${ndata.status.toUpperCase()}`;

        document.querySelector('.content-image-overlay').style.background = `url('${RandomIndex(bgCollectives.landpads)}')`;

        document.querySelector('.content-image-overlay').style.backgroundSize = `cover`;

    }

    if(locations[state.progression.current] == 'launches'){
        let ndata = RandomIndex(data);
        
        console.log(ndata);

        headermode = 'LAUNCHES';
        maindetails = `${ndata.mission_name}`;
        maincaptions = ` ${ndata.details} <br><br> Launched from : ${ndata.launch_site.site_name_long}`;

        document.querySelector('.content-image-overlay').style.background = `url('${ndata.flickr_images?RandomIndex(ndata.flickr_images):`url('../graphics/mission-image-placeholder.jpg'`}')`;

        document.querySelector('.content-image-overlay').style.backgroundSize = `cover`;
    }

    if(locations[state.progression.current] == 'launchpads'){

        let ndata = RandomIndex(data);
        
        console.log(ndata);

        headermode = 'LAUNCH PADS';
        maindetails = `${ndata.name}`;
        maincaptions = `${ndata.site_name_long}  <br><br> ${ndata.details} <br><br> STATUS : ${ ndata.status.toUpperCase()}`;
    }

    if(locations[state.progression.current] == 'missions'){

        let ndata = RandomIndex(data);
        
        console.log(ndata);

        headermode = 'MISSIONS';
        maindetails = `${ndata.mission_name}`;
        maincaptions = `${ndata.mission_id}  <br><br> ${ndata.description} <br><br>`;
    }

    if(locations[state.progression.current] == 'payloads'){

        let ndata = RandomIndex(data);
        
        console.log(ndata);

        headermode = 'PAYLOAD';
        maindetails = `${ndata.payload_id}`;
        maincaptions = `A commisioned payload of ${ndata.customers.map(data=>{
            return `${data}`;
        })} that is manufactured by ${ndata.manufacturer} delivered into a ${ndata.orbit_params.reference_system} ${ndata.orbit_params.regime} orbit.`;
    }

    if(locations[state.progression.current] == 'rockets'){

        let ndata = RandomIndex(data);
        
        console.log(ndata);

        headermode = 'ROCKETS';
        maindetails = `${ndata.rocket_name}`;
        maincaptions = `${ndata.description} <br><br> First Flight : ${ndata.first_flight}`;
    }

    if(locations[state.progression.current] == 'roadster'){
        headermode = 'ROADSTER';
        maindetails = `${data.name}`;
        maincaptions = `${data.details}`;

        document.querySelector('.content-image-overlay').style.background = `url('${RandomIndex(data.flickr_images)}')`;

        document.querySelector('.content-image-overlay').style.backgroundSize = `cover`;
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

        <section class="c-view-missions-timeline prim-co">
            VIEW MORE
        </section>`;

    document.querySelector('.c-main-content').innerHTML = res;
}

document.querySelector('.j-nav-next').addEventListener('click', function(){

    getContentProgression('next').then(previewDisplay).catch(e=>console.warn(e));

});

document.querySelector('.j-nav-prev').addEventListener('click', function(){

    getContentProgression('prev').then(previewDisplay).catch(e=>console.warn(e));

});