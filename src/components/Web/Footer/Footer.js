import React from 'react';
import { Layout, Row, Col } from 'antd'
import MyInfo from './MyInfo';
import NavigationFooter from './navigationFooter';
import Newsletter from '../Newsletter';
import './Footer.scss';

export default function Footer() {
    const { Footer } = Layout;

    return (
        <Footer className='footer' >
            <Row>
                <Col md={24}>
                    <Row>
                    <Col md={6}> <MyInfo /> </Col>
                    <Col md={6}> <NavigationFooter /> </Col>
                    <Col md={6}> <Newsletter/> </Col>
                    <Col md={6}> Nerds & Geeks </Col>
                    </Row>
                    <Row className='footer__copyright' >
                        <Col md={12}> © 2020 - All rights reserved </Col>
                        <Col md={12}> © Miguel Barrera - Desarrollador web y móvil </Col>
                    </Row>
                </Col>
            </Row>
        </Footer>
    )
}
