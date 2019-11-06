import GetAPI from './GetAPI.js';
import CheckIfNull from './CheckIfNull.js';

export default function ViewMore(dataof) {

    DATAOF = dataof;

    GetAPI(dataof).then(AddtoViewMore).catch(e=>alert(e));
}

export function AddtoViewMore(data){
    
    let res = '';
    let headerName = '';
    let extendedContent = '';

    console.log(DATAOF);

    data.map(data=>{
        

        if(DATAOF === 'capsules'){
            headerName = `${data.type} ${data.capsule_serial}`;
            extendedContent = `${CheckIfNull(data.details)} <br><br> Status : ${data.status} <br><br> Original Launch Date : ${data.original_launch}`;
        }
        if(DATAOF === 'cores'){
            headerName = `${CheckIfNull(data.core_serial)}`;
            extendedContent = `${CheckIfNull(data.details)} <br><br> Status : ${data.status} <br><br> Original Launch Date : ${CheckIfNull(data.original_launch)}`;
        }
        if(DATAOF === 'dragons'){
            headerName = `${data.name}`;
            extendedContent = `${data.description} <br><br> Active : ${data.active} <br><br> First Flight: ${data.first_flight}`;
        }
        if(DATAOF === 'history'){
            headerName = `${data.title}`;
            extendedContent = `${data.details} <br><br> Event Date : ${data.event_date_utc}`;
        }
        if(DATAOF === 'landpads'){
            headerName = `${data.full_name}`;
            extendedContent = `${data.details} <br><br> Location : ${data.location.name},${data.location.region} <br><br> Status : ${data.status}`;
        }
        if(DATAOF === 'launches'){
            headerName = `${data.mission_name}`;
            extendedContent = `${CheckIfNull(data.details)} <br><br> Launch Year : ${data.launch_year} <br><br> Rocket Used : ${data.rocket.rocket_name} (${data.rocket.rocket_type})`;
        }
        if(DATAOF === 'launchpads'){
            headerName = `${data.name}`;
            extendedContent = `${data.site_name_long} <br><br> ${data.details} <br><br> Launched Vehicles : ${data.vehicles_launched.join(' , ')}`;
        }
        if(DATAOF === 'missions'){
            headerName = `${data.mission_name}`;
            extendedContent = `${data.description}<br><br> Manufacturer/s : ${data.manufacturers.join(', ')}<br><br> Payloads(ID) : ${data.payload_ids.join(' , ')}`;
        }
        if(DATAOF === 'payloads'){
            headerName = `${data.payload_id}`;
            extendedContent = `Customer/s : ${data.customers}<br><br> Manufacturer/s : ${CheckIfNull(data.manufacturer)}<br><br> Orbit Parameters <br><br> Reference System: ${CheckIfNull(data.orbit_params.reference_system)}<br> Regime : ${CheckIfNull(data.orbit_params.regime)}`;
        }
        if(DATAOF === 'rockets'){
            headerName = `${data.rocket_name}`;
            extendedContent = `${data.description} <br><br> First Flight : ${data.first_flight}<br><br> First Stage Reusability : ${data.first_stage.reusable}<br> Second Stage Reusability : ${data.second_stage.reusable}`;
        }

        res += `   
        <section class="c-circle-point-container jcircle">
                <section class="c-circle-point jcircle-point"></section>
        </section>

            <section class="c-main-content-extended j-main-content-extended-mission-1">
                <section class="c-main-story">
                    <section class="c-mission-name">
                        ${headerName}
                    </section>
                    <section class="c-mission-story">

                        ${extendedContent}
                
                    </section>
                </section>
            </section>`;
    });

    document.querySelector('.j-extended-details-container').innerHTML = res;

    document.getElementsByClassName('jcircle-point')[0].innerHTML = line;

    res = '';
}

const line = `<section class="c-line j-line"></section>`;
var DATAOF = '';