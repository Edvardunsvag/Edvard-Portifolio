import React from 'react';

export default function Project(props) {
    const { img, gitHub, src, name, description } = props;
    return (
        <div className='item'>
            <div className='item-text'>
                <div className='item-text-wrap'>
                    <h2 className='item-text-title'>{name}</h2>
                    <p className='item-text-category lead'>{description}</p>
                </div>
            </div>
            <div className='item-image'>
                <img src={img} alt='' className='image' />
            </div>
            <div className='item-info'>
                <a href={gitHub} className='btn-light'>
                    Source Code
                </a>
                <a href={src} className='btn-light'>
                    Try the App
                </a>
            </div>
        </div>
    );
}
