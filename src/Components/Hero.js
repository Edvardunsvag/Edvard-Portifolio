import React from 'react';

export default function Hero() {
    return (
        <header id='header-home'>
            <div className='container'>
                <div className='header-content'>
                    <h1>
                        I am Edvard, a
                        <span
                            className='txt-type'
                            data-wait='1000'
                            data-words='["Web-developer"]'></span>
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
