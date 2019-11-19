import React, { Component } from 'react'
import SectionContent from './SectionContent'
import axios from 'axios';
import GetAPI from '../API/GetAPI'
import RandomIndex from '../API/RandomIndex'
import CheckIfNull from '../API/CheckIfNull'
import {Link} from 'react-router-dom';

export class Catalog extends Component {
    constructor(props){
        super(props);

        this.state={
            locations : [
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
                'roadster'
            ],
            progression:{
                current: 0
            },
            PreviewContent:{
                mainDetails: '',
                mainCaptions: ''
            }
        }   
    }

    componentDidMount(){

        // this.setState({
        //     progression:{
        //         current: this.props.match.params.id ? this.state.locations[this.props.match.params.id] : 0
        //     }
        // });

       GetAPI('missions').then(data=>{
            let  initData = RandomIndex(data);
            this.setState({
                progression:{
                        current: 7
                },
                PreviewContent:{
                        mainDetails: initData.mission_name,
                        mainCaptions: `Mission ID : ${initData.mission_id}
                                            <br><br> ${initData.description}
                                            <br><br>`
                }
            });
       });
    }

    previewDisplay(data){
        let res = '';

        let headermode = '',
            maindetails = '',
            maincaptions = '';

        const {locations, progression, PreviewContent} = this.state;

        if(locations[progression.current] == 'capsules'){
            let ndata = RandomIndex(data);
                    
            headermode = 'CAPSULES';
            maindetails = ` ${ndata.type} ${ndata.capsule_serial}`;
            maincaptions = `${CheckIfNull(ndata.details)}`;
        }

        if(locations[progression.current] == 'cores'){
            let ndata = RandomIndex(data);

            headermode = 'CORES';
            maindetails = `${CheckIfNull(ndata.core_serial)}`;
            maincaptions = ` ${CheckIfNull(ndata.details)}`;
        }

        if(locations[progression.current] == 'dragons'){
            let ndata = RandomIndex(data);
            
            headermode = 'DRAGON';
            maindetails = `${ndata.name}`;
            maincaptions = ` ${ndata.description}`;
    
            // fadingin(ndata.flickr_images);
        }

        if(locations[progression.current] == 'history'){
            let ndata = RandomIndex(data);
            
            headermode = 'HISTORY';
            maindetails = `${ndata.title}`;
            maincaptions = `${ndata.details} <br> ${ndata.event_date_utc}`;
        }

        if(locations[progression.current] == 'landpads'){
            let ndata = RandomIndex(data);
            
            headermode = 'LANDING PADS';
            maindetails = `${ndata.full_name}`;
            maincaptions = ` ${ndata.details} <br><br> STATUS: ${ndata.status.toUpperCase()}`;
    
            // fadingin(bgCollectives.landpads);
        }

        if(locations[progression.current] == 'launches'){
            let ndata = RandomIndex(data);
            
            headermode = 'LAUNCHES';
            maindetails = `${ndata.mission_name}`;
            maincaptions = ` ${CheckIfNull(ndata.details)} <br><br> Launched from : ${ndata.launch_site.site_name_long}`;
    
            // if(ndata.flickr_images){
            //     fadingin(ndata.flickr_images);
            // }
        }

        if(locations[progression.current] == 'launchpads'){

            let ndata = RandomIndex(data);
            
            headermode = 'LAUNCH PADS';
            maindetails = `${ndata.name}`;
            maincaptions = `${ndata.site_name_long}  <br><br> ${ndata.details} <br><br> STATUS : ${ ndata.status.toUpperCase()}`;
    
            // fadingin(bgCollectives.launchpads);
        }

        if(locations[progression.current] == 'missions'){
            let ndata = RandomIndex(data);
            
            headermode = 'MISSIONS';
            maindetails = `${ndata.mission_name}`;
            maincaptions = `Mission ID : ${ndata.mission_id}  <br><br> ${ndata.description} <br><br>`;
        }

        if(locations[progression.current] == 'payloads'){
            let ndata = RandomIndex(data);
            
            headermode = 'PAYLOAD';
            maindetails = `${ndata.payload_id}`;
            maincaptions = `A commisioned payload of ${ndata.customers.map(data=>{
                return `${data}`;
            })} that is manufactured by ${CheckIfNull(ndata.manufacturer)} delivered into a ${CheckIfNull(ndata.orbit_params.reference_system)} ${CheckIfNull(ndata.orbit_params.regime)} orbit.`;
        }

        if(locations[progression.current] == 'rockets'){
            let ndata = RandomIndex(data);
            
            headermode = 'ROCKETS';
            maindetails = ndata.rocket_name;
            maincaptions = `${ndata.description} <br><br> First Flight : ${ndata.first_flight}`;
            
            // fadingin(bgCollectives.rockets);
        }

        if(locations[progression.current] == 'roadster'){
            headermode = 'ROADSTER';
            maindetails = `${data.name}`;
            maincaptions = `${data.details}`;
    
            // fadingin(data.flickr_images);
        }

        this.setState({
            PreviewContent:{
                mainDetails: maindetails,
                mainCaptions: maincaptions
            }
        });
    }

    getContentProgression(dir){

        const {locations, progression, PreviewContent} = this.state;

        if(dir === 'next'){
            progression.current = (progression.current+1) < locations.length ?  progression.current+1:0;
        }else if(dir === 'info'){
            progression.current = 4;
            return GetAPI('info');
        }else{
            progression.current = (progression.current-1) > -1 ?  progression.current-1: locations.length-1;
        }
    
        console.log(progression.current + ' : ' + locations[progression.current])
        
        GetAPI(locations[progression.current]).then(data=>this.previewDisplay(data));
    }


    render() {

        const {locations, progression, PreviewContent} = this.state;

        return (
            <section className="c-main-content-container prim-font">
                <section className="c-navigations prim-font j-navigation">
                        <section className="nav-prev j-nav-prev" onClick={()=>this.getContentProgression('prev')}>
                            <i className="material-icons rounded">
                                arrow_back_ios
                            </i>
                            
                            PREV
    
                        </section>
    
                        <section className="nav-next j-nav-next" onClick={()=>this.getContentProgression('next')}>
                            
                            NEXT  
                            
                            <i className="material-icons rounded">
                            arrow_forward_ios
                            </i>
                        </section>
    
                    </section>
    
                <section className="c-main-content j-main-content j-extended-content">
                
                    <SectionContent sectionTitle={locations[progression.current]} sectionDetails={PreviewContent.mainDetails} sectionCaptions={PreviewContent.mainCaptions} />
    
                    <Link to={`catalog/more-info/${locations[progression.current]}`}>
                        <section className="c-view-missions-timeline prim-co" data-moreof={locations[progression.current]}>
                            OTHER {locations[progression.current].toUpperCase()}
                        </section>
                    </Link>

                </section>

            </section>
        )
    }
}

export default Catalog
