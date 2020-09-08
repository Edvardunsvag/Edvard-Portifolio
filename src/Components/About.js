import React from 'react';

export default function About(props) {
    const { img } = props;
    return (
        <section id='about-a' className='text-center'>
            <div className='container'>
                <h2 className='section-title text-center'>About Me</h2>
                <div className='bottom-line'></div>
                <div className='about-info'>
                    <img src={img} alt=' ' className='bio-image' />
                    <div className='bio bg-light'>
                        <p className='lead'>
                            My name is Edvard Unsvåg and I am a twenty four year
                            old guy based in Oslo. I finished my bachelors
                            degree in informatics in 2020, and have now started
                            on my masters degree in informatics. Both at the
                            University of Oslo. In my bachelor there were no web
                            development courses, however I have grown fond of it
                            on my own the last year.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
