import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import hooks from "../../../assets/img/jpeg/react-js-hooks.jpg";
import native from "../../../assets/img/jpeg/react-native.jpg";
import js6 from "../../../assets/img/jpeg/javascript-es6.jpg";
import wordpress from "../../../assets/img/jpeg/wordpress.jpg";
import prestashop from "../../../assets/img/jpeg/prestashop-1-7.jpg";
import grid from "../../../assets/img/jpeg/css-grid.jpg";
import "./HomeProjects.scss";

export default function HomeProjects() {
  return (
    <Row className="home-projects">
      <Col lg={24} className="home-projects__title">
        <h2> Mejorando las habilidades básicas </h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-projects">
          <Col md={6}>
            <CardProject
              image={js6}
              title={"Javascript ES6+"}
              subtitle={"Javascript Moderno actualizado"}
              link={"https://courses.agustinnavarrogaldon.com/javascript"}
            />
          </Col>
          <Col md={6}>
            <CardProject
              image={hooks}
              title={"ReactJS: Hooks"}
              subtitle={"Lo nuevo de ReactJS"}
              link={"https://courses.agustinnavarrogaldon.com/react"}
            />
          </Col>
          <Col md={6}>
            <CardProject
              image={native}
              title={"ReactNative"}
              subtitle={"Aplicaciones móviles con React"}
              link={
                "https://courses.agustinnavarrogaldon.com/react-native-expo"
              }
            />
          </Col>
          <Col md={6}>
            <CardProject
              image={wordpress}
              title={"Wordpress"}
              subtitle={"El CSM más popular a tu alcance"}
              link={"https://courses.agustinnavarrogaldon.com/wordpress"}
            />
          </Col>
        </Row>

        <Row className="row-projects">
          <Col md={6}>
            <CardProject
              image={prestashop}
              title={"Prestashop"}
              subtitle={"Tu tienda en linea fácil"}
              link={"https://courses.agustinnavarrogaldon.com/react"}
            />
          </Col>

          <Col md={6} />
          <Col md={6} />

          <Col md={6}>
            <CardProject
              image={grid}
              title={"Grid"}
              subtitle={"Estilos: CSS con Grid"}
              link={"https://courses.agustinnavarrogaldon.com/css-grid"}
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />

      <Col lg={24} className="home-projects__more">
        <Link to="/proyectos">
          <Button> Ver más </Button>
        </Link>
      </Col>
    </Row>
  );
}

function CardProject(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className="home-projects__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button>Ingresar</Button>]}
      >
        <Meta title={title} description={subtitle} />
      </Card>
    </a>
  );
}
