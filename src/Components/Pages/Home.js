import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <section className="c-start-content-container prim-font j-start-content-container">
            <div className="c-start-content-header">
                <h1>SPACEX API</h1>
            </div>
            <div className="c-start-project-motivations">
                SpaceX designs, manufactures and launches advanced rockets and spacecraft.The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.
            </div>

            <Link className="c-view-missions-timeline j-start-viewing" to='catalog'>
                    START EXPLORING
            </Link>

        </section>
    )
}
