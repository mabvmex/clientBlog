import React from 'react';
import { YoutubeFilled, TwitterSquareFilled, FacebookFilled, LinkedinFilled, GithubFilled } from '@ant-design/icons';
// import { ReactComponent as YT_icon } from '../../../assets/img/svg/youtube.svg'
// import { ReactComponent as TW_icon } from '../../../assets/img/svg/twitter.svg'
// import { ReactComponent as FB_icon } from '../../../assets/img/svg/facebook.svg'
// import { ReactComponent as LI_icon } from '../../../assets/img/svg/linkedin.svg'

import './SocialLinks.scss';

export default function SocialLinks(){
    return (
        <div className='social-links'>
            <a 
                href='https://www.youtube.com/channel/UCDskiily5De8sXxZ1QslW8g/videos?view_as=subscriber'
                className='youtube'
                target='_blank'
                rel='noopener noreferrer'
            >   
                <YoutubeFilled />
                {/* <YT_icon /> */}
            </a>
            <a 
                href='https://www.twitter.com/mabvmex'
                className='twitter'
                target='_blank'
                rel='noopener noreferrer'
            >   
                <TwitterSquareFilled />
                {/* <TwitterOutlined /> */}
                {/* <TW_icon /> */}
            </a>
            <a 
                href='https://www.facebook.com/mabvmex'
                className='facebook'
                target='_blank'
                rel='noopener noreferrer'
            >   
                <FacebookFilled />
                {/* <FB_icon /> */}
            </a>
            <a 
                href='https://www.linkedin.com/in/mabvmex'
                className='linkedin'
                target='_blank'
                rel='noopener noreferrer'
            >   
                <LinkedinFilled />
                {/* <LI_icon /> */}
            </a>
            <a 
                href='https://www.github.com/mabvmex'
                className='github'
                target='_blank'
                rel='noopener noreferrer'
            >   
                <GithubFilled />
                {/* <LI_icon /> */}
            </a>
        </div>
    )
}