import React from 'react';
import MyLogo from '../../../../assets/img/png/logo-white.png';
import SocialLinks from '../../SocialLinks';
import './MyInfo.scss';

export default function Myinfo() {
    return (
        <div className='my-info' >
            <img src={MyLogo} alt='Miguel Barrera' />
            <h4> También puedes encontrarme en: </h4>
            <SocialLinks />
        </div>
    )
}
