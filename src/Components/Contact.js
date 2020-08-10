import React from 'react';

export default function Contact() {
    return (
        <section id='contact-a' className='text-center'>
            <div className='container'>
                <h2 className='section-title'>Contact Me</h2>
                <div className='bottom-line'></div>
                <div className='contact-items'>
                    <div className='item'>
                        <a
                            href='https://www.linkedin.com/in/edvard-unsv%C3%A5g-a9296b193/'
                            className='fab fa-linkedin fa-4x linkedIn'></a>
                    </div>
                    <div className='item'>
                        <a
                            href='mailto:unsvaag@gmail.com'
                            className='fas fa-envelope-open fa-4x'></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
