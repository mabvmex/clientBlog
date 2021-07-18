import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeFilled, UserOutlined, MenuOutlined, BookFilled, MessageFilled } from '@ant-design/icons';

import './MenuSider.scss';

function MenuSider( props ) {
  const { menuCollapsed, location } = props;
  const { Sider } = Layout;

  return (
    <Sider className="admin-sider" theme = 'dark' collapsed = { menuCollapsed }>
      <Menu theme = "dark" mode = "inline" defaultSelectedKeys = {[location.pathname]}>
        <Menu.Item key = "/admin">
          <Link to = {'/admin'}>
          <HomeFilled/>
            <span className = "nav-text"> home </span>
          </Link>
        </Menu.Item>
        <Menu.Item key='/admin/users'>
            <Link to = {'/admin/users'}>
            <UserOutlined/>
                <span className = 'nav-text'> Users </span>
            </Link>
        </Menu.Item>
        <Menu.Item key='/admin/menu'>
            <Link to = {'/admin/menu'}>
            <MenuOutlined/>
                <span className = 'nav-text'> Menu </span>
            </Link>
        </Menu.Item>
        <Menu.Item key='/admin/courses'>
            <Link to = '/admin/courses'>
            <BookFilled/>
                <span className = 'nav-text'> Cursos </span>
            </Link>
        </Menu.Item>
        <Menu.Item key='/admin/blog'>
            <Link to = '/admin/blog'>
            <MessageFilled />
                <span className = 'nav-text'> Blog </span>
            </Link>
        </Menu.Item>
      </Menu> 
    </Sider>
  );
}

export default withRouter(MenuSider);
