import React from "react";
import { Route, Switch } from "react-router-dom";
import { /* Layout, */ Row, Col } from "antd";
import MenuTop from '../components/Web/MenuTop';
import Footer from '../components/Web/Footer';
import "./LayoutBasic.scss";

export default function LayoutBasic( props ) {
  const { routes } = props; //  (1) Lo mismo que  esto
  // const { Footer } = Layout;

  return (
    <>
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <MenuTop />
        </Col>
        <Col lg={4} />
      </Row>
      <LoadRoutesBasic routes={routes} />
      <Footer />
    </>
  );

  function LoadRoutesBasic({ routes }) {
    //  (1) Lo mismo que  esto
    // console.log(routes);
    return (
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    );
  }
}