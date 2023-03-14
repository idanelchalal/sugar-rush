import React from 'react'
import Rate from '../Rate/Rate'
import TabbedTitle from '../../layout/UI/TabbedTitle/TabbedTitle'
import './Rates.css'
const Rates = () => {
    return (
        <div>
            <TabbedTitle title="SOCIALS" />
            <section className="rates-bar">
                <Rate
                    img={require('../../images/youtube.png')}
                    objectValue="1.2M+"
                    objectValueDescriber="subscribers"
                />
                <Rate
                    img={require('../../images/instagram.png')}
                    objectValue="1.8M+"
                    objectValueDescriber="followers"
                />
            </section>
        </div>
    )
}

export default Rates
