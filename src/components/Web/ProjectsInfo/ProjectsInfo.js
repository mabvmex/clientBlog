import React from "react";
import { Row, Col, Card } from "antd";
import { ClockCircleOutlined, KeyOutlined, MessageOutlined, UserOutlined, DollarCircleFilled, CheckCircleOutlined } from "@ant-design/icons";

import "./ProjectsInfo.scss";

export default function ProjectsInfo() {
  return (
    <Row className="projects-info">
      <Col lg={24} className="projects-info__title">
        <h2> Experiencia </h2>
        <h3>
          Ut anim dolore aliquip magna velit aliquip ad veniam duis aliquip
          cupidatat.
        </h3>
      </Col>

      <Col lg={4} />
      <Col lg={16}>

        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              avatar={ <ClockCircleOutlined />}
              title="Mis Proyectos"
              description=" Ut anim dolore"
            />
          </Col>
          
          <Col md={8}>
            <CardInfo
              icon={<KeyOutlined />}
              avatar={ <KeyOutlined />}
              title="Acceso 24/7"
              description=" Ut anim dolore"
            />
          </Col>

          <Col md={8}>
            <CardInfo
              avatar={ <MessageOutlined />}
              title="Aprendizaje colaborativo"
              description=" Ut anim dolore"
            />
          </Col>
          <Col md={8}>
            <CardInfo
              avatar={ <UserOutlined />}
              title="Mejora tu imagen web"
              description=" Ut anim dolore"
            />
          </Col>

          <Col md={8}>
            <CardInfo
              avatar={<DollarCircleFilled />}
              title="Al mejor precio"
              description=" Ut anim dolore"
            />
          </Col>

          <Col md={8}>
            <CardInfo
              avatar={<CheckCircleOutlined />}
              title="La mejor calidad"
              description=" Ut anim dolore"
            />
          </Col>

        </Row>
      </Col>
      <Col lg={4}></Col>
    </Row>
  );
}

function CardInfo(props) {
  const { avatar, title, description } = props;
  const { Meta } = Card;

  return (
    <Card className="projects-info__card">
      <Meta title={title} avatar={avatar} description={description} />
    </Card>
  );
}
