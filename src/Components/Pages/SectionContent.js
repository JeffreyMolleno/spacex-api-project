import React from 'react'
import ReactHtmlParser from 'react-html-parser';

export default function SectionContent(props) {
    return (
        <div>
            <section className="c-main-content-header">
                        <p className='prim-front'>{props.sectionTitle.toUpperCase()}</p>
            </section>
            <section className="c-main-story">
                <section className="c-mission-name">
                        <p>{ReactHtmlParser(props.sectionDetails)}</p>
                </section>
                <section className="c-mission-story">
                        <p>{ReactHtmlParser(props.sectionCaptions)}</p>
                </section>
            </section>
        </div>
    )
}