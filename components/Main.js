import GetAPI from './GetAPI.js'; 

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
    'roadster',
    'ships'
];

var state = {
    progression:{
        current:0,
        length:locations.length
    }
}

function getContentProgression(dir){
    if(dir === 'next'){
        state.progression.current = (state.progression.current+1) < locations.length ?  state.progression.current+1:0;
    }
    else{
        state.progression.current = (state.progression.current-1) > 0 ?  state.progression.current-1: locations.length-1;
    }

    return GetAPI(locations[state.progression.current]);
}

function previewDisplay(data){

    console.log(data.length>0?data[0]:data);

    

}


document.querySelector('.j-nav-next').addEventListener('click', function(){

    getContentProgression('next').then(previewDisplay).catch(e=>console.warn(e));

});

document.querySelector('.j-nav-prev').addEventListener('click', function(){

    getContentProgression('prev').then(previewDisplay).catch(e=>console.warn(e));

});