import React, { useEffect } from 'react';
import Typist from 'react-typist';

export default function Hero() {
    return (
        <header id='header-home'>
            <div className='container'>
                <div className='header-content'>
                    <h1>
                        I am Edvard, a{' '}
                        <Typist
                            avgTypingDelay={150}
                            cursor={{ hideWhenDone: true }}>
                            Web Developer
                        </Typist>
                    </h1>
                    <p className='lead'></p>
                    <a href='#about-a' className='btn-light'>
                        Read More
                    </a>
                </div>
            </div>
        </header>
    );
}
