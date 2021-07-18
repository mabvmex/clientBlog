import React from "react";
import { Row, Col, Card, Avatar } from "antd";
import avatarUsuario from "../../../assets/img/png/monkey-avatar.png";

import "./ReviewCourses.scss";

export default function ReviewCourses() {
  return (
    <Row className="review-courses">
      <Row>
        <Col lg={4} />
        <Col lg={16} className="review-courses__title">
          <h2> Forma parte de los +35 mil estudiantes que estan aprendiendo con mis cursos</h2>
        </Col>
        <Col lg={4} />
      </Row>
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Usuario 1"
                subtitle="usuario suscrito"
                avatar={avatarUsuario}
                review=" Un curso excelente, el profesor explica detalladamente como funciona ReactNative y también como hacer componente por componente, he buscado muhcos cursos de ReactNative pero ninguno me ha enseñado tanto como este, ahora estoy desarrollando mi propia aplicacion sin ningún problema gracias al cursos."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Usuario 2"
                subtitle="usuario invitado"
                avatar={avatarUsuario}
                review=" Un curso excelente, el profesor explica detalladamente como funciona ReactNative y también como hacer componente por componente, he buscado muhcos cursos de ReactNative pero ninguno me ha enseñado tanto como este, ahora estoy desarrollando mi propia aplicacion sin ningún problema gracias al cursos."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Usuario 3"
                subtitle="Anonímo"
                avatar={avatarUsuario}
                review=" Un curso excelente, el profesor explica detalladamente como funciona ReactNative y también como hacer componente por componente, he buscado muhcos cursos de ReactNative pero ninguno me ha enseñado tanto como este, ahora estoy desarrollando mi propia aplicacion sin ningún problema gracias al cursos."
              />
            </Col>
          </Row>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Usuario 11"
                subtitle="usuario suscrito"
                avatar={avatarUsuario}
                review=" Un curso excelente, el profesor explica detalladamente como funciona ReactNative y también como hacer componente por componente, he buscado muhcos cursos de ReactNative pero ninguno me ha enseñado tanto como este, ahora estoy desarrollando mi propia aplicacion sin ningún problema gracias al cursos."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Usuario 12"
                subtitle="usuario invitado"
                avatar={avatarUsuario}
                review=" Un curso excelente, el profesor explica detalladamente como funciona ReactNative y también como hacer componente por componente, he buscado muhcos cursos de ReactNative pero ninguno me ha enseñado tanto como este, ahora estoy desarrollando mi propia aplicacion sin ningún problema gracias al cursos."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Usuario 13"
                subtitle="Anonímo"
                avatar={avatarUsuario}
                review=" Un curso excelente, el profesor explica detalladamente como funciona ReactNative y también como hacer componente por componente, he buscado muhcos cursos de ReactNative pero ninguno me ha enseñado tanto como este, ahora estoy desarrollando mi propia aplicacion sin ningún problema gracias al cursos."
              />
            </Col>
          </Row>
        </Col>
        <Col lg={4} />
      </Row>
    </Row>
  );
}

function CardReview(props) {
  const { name, subtitle, avatar, review } = props;
  const { Meta } = Card;

  return (
    <Card className="review-courses__card">
      <p>{review}</p>
      <Meta
        avatar={<Avatar src={avatar} />}
        title={name}
        description={subtitle}
      />
    </Card>
  );
}
