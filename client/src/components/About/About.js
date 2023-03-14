import React from 'react'
import './About.css'
import TabbedTitle from '../../layout/UI/TabbedTitle/TabbedTitle'
import Button from '../../layout/UI/Button/Button'
const About = (props) => {
    return (
        <div className="about-container">
            <TabbedTitle title={'WELCOME'} />
            <section className="about">
                <div className="about-left-col">
                    <h1 className="about-title">Hello I'm Idandi.</h1>
                    <h2 className="about-secondary-title">
                        Shit Creator / Only fans seller
                    </h2>
                    <p className="about-content">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ipsam quaerat magni voluptatem ducimus id enim
                        praesentium totam nesciunt perspiciatis voluptatibus
                        quibusdam cum eaque harum animi eum fuga, delectus
                        voluptas officiis eligendi atque rem molestiae saepe
                        veniam. Labore accusamus assumenda nobis repellendus
                        delectus possimus quod porro omnis earum doloremque enim
                        veniam nam quos, dolorem reprehenderit provident animi.
                    </p>
                    <Button value={'JOIN INSIDER'} />
                </div>
                <div className="about-right-col"></div>
            </section>
        </div>
    )
}

export default About
