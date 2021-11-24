import React,{useState, useEffect} from 'react'
import axios from 'axios';
import GetAPI from '../API/GetAPI';
import SectionContent from './SectionContent' ;
import fbicon from '../../graphics/fbicon.png';
import twicon from '../../graphics/twicon.png';
import yticon from '../../graphics/yticon.png';
import Background from '../Design/BackGround';
import BackGround from '../Design/BackGround';

export default function Info() {

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [caption, setCaptions] = useState('');

    useEffect(()=>{

        BackGround('info');

        GetAPI('info').then(data=>{

            setTitle('Space Exploration Technologies Corp.');

            setDetails(`Founded by ${data.founder}`);

            setCaptions(
                    `${data.summary} <br> <section class="c-links-out">
                        <a target='_blanck' href="https://www.flickr.com/photos/spacex/"><img src=${fbicon}></a>
                        <a target='_blanck' href="${data.links.twitter}"><img src=${twicon}></a>
                        <a target='_blanck' href="https://www.youtube.com/user/spacexchannel"><img src=${yticon}></a>
                    </section>`);
        })
    })


    return (        
        <section className="c-main-content-container prim-font">
            <section className="c-main-content j-main-content j-extended-content">
            
                <SectionContent sectionTitle={title} sectionDetails={details} sectionCaptions={caption} />

            </section>
        </section>
    )
}