import React from "react";
import { Row, Col } from "antd";
// import { Link } from "react-router-dom";
import { BookOutlined, CommentOutlined, DatabaseOutlined, DoubleRightOutlined, MobileOutlined, CodeOutlined, ProfileOutlined } from "@ant-design/icons";
import "./NavigationFooter.scss";

export default function NavigationFooter() {
  return (
    
      <Row className="navigation-footer">
        <Col lg={24}> <h3> Navegación </h3> <br/> </Col>
        <Col lg={12} > <RenderListRight /> </Col>
        <Col lg={12}> <RenderListLeft /> </Col>

      </Row>
    
  );
}

function RenderListLeft() {
  return (
    <ul>
      <li>
        <a href="#">
          <BookOutlined /> Libros
        </a>
      </li>

      <li>
        {/* <Link to='/contacto'> */}
        <a href="#">
          <CommentOutlined /> Series y películas
        </a>
      </li>

      <li>
        <a href="#">
          <DatabaseOutlined /> VideoJuegos
        </a>
      </li>

      <li>
        <a href="#">
          <DoubleRightOutlined /> Política de privacidad
        </a>
      </li>
    </ul>
  );
}

function RenderListRight() {
  return (
    <ul>
      <li>
        <a href="#">
          <MobileOutlined /> Móvil
        </a>
      </li>

      <li>
        <a href="#">
          <CodeOutlined /> Web
        </a>
      </li>

      <li>
        <a href="#">
          <ProfileOutlined /> Portfolio
        </a>
      </li>

      <li>
        <a href="#">
          <DoubleRightOutlined /> Política de cookies
        </a>
      </li>
    </ul>
  );
}
