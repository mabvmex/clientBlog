// ¿Cuál es la diferencia entre Switch y switch?

import React, { useState, useEffect } from "react";
import { Switch, List, Avatar, Button, notification, Modal as ModalAntD } from "antd";
import { EditFilled, StopOutlined, DeleteFilled, CheckCircleFilled, QuestionCircleFilled } from "@ant-design/icons";
import noUserAvatar from "../../../../assets/img/png/no-avatar.png";
import Modal from "../../../Modal";
import EditUserForm from "../EditUserForm";
import AddUserForm from '../AddUserForm';
import { getAvatarApi, activateUserApi, deleteUserApi } from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";
import "./ListUsers.scss";

const { confirm } = ModalAntD;

export default function ListUsers(props) {
  const { usersActive, usersInactive, setReloadUsers } = props;
  const [viewUsersActives, setViewUsersActives] = useState(true);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitulo, setModalTitulo] = useState("");
  const [modalContent, setModalContent] = useState(null);



  const addUserModal = () => {
    setIsVisibleModal(true);
    setModalTitulo('Nuevo usuario');
    setModalContent(
      <AddUserForm setIsVisibleModal={setIsVisibleModal} setReloadUsers={setReloadUsers} /> );
  };



  const showDeleteConfirm = (user) => {
    const accessToken = getAccessTokenApi();

    confirm({
      title: "Eliminado usuario",
      icon: <QuestionCircleFilled/>,
      content: `¿Estás seguro que quieres eliminar a ${user.email}?`,
      okText: "Eliminar",
      okType: "danger primary",
      cancelText: "Cancelar",
      onOk() {
        deleteUserApi(accessToken, user._id)
          .then((response) => {
            notification["success"]({
              message: response,
            });
            setReloadUsers(true);
          })
          .catch((err) => {
            notification["error"]({
              message: err,
            });
          });
      },
    });
  };

  return (
    <div className="list-users">
      <div className="list-users__header">
        <div className="list-users__header-switch">
          <Switch
            defaultChecked
            onChange={() => setViewUsersActives(!viewUsersActives)}
          />
          <span>
            {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
          </span>
        </div>
        <Button
          type="primary" shape='round'
          onClick={ addUserModal }
        >
          Nuevo usuario
        </Button>
      </div>

      {viewUsersActives ? (
        <UsersActive
          usersActive={usersActive}
          setIsVisibleModal={setIsVisibleModal}
          setModalContent={setModalContent}
          setModalTitulo={setModalTitulo}
          setReloadUsers={setReloadUsers}
          showDeleteConfirm={showDeleteConfirm}
        />
      ) : (
        <UsersInactive
          usersInactive={usersInactive}
          setReloadUsers={setReloadUsers}
          showDeleteConfirm={showDeleteConfirm}
        />
      )}

      <Modal
        title={modalTitulo}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      >
        {modalContent}
      </Modal>
    </div>
  );
}

function UsersActive(props) {
  const {
    usersActive,
    setIsVisibleModal,
    setModalTitulo,
    setModalContent,
    setReloadUsers,
    showDeleteConfirm,
  } = props;

  const editUser = (user) => {
    setIsVisibleModal(true);
    setModalTitulo(
      `Editar ${user.name ? user.name : "..."} ${
        user.lastname ? user.lastname : "..."
      }`
    );
    setModalContent(
      <EditUserForm
        user={user}
        setIsVisibleModal={setIsVisibleModal}
        setReloadUsers={setReloadUsers}
      />
    );
  };

  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={usersActive}
      renderItem={(user) => (
        <IndividualUserActive
          user={user}
          editUser={editUser}
          setReloadUsers={setReloadUsers}
          showDeleteConfirm={showDeleteConfirm}
        />
      )}
    />
  );
}

function IndividualUserActive(props) {
  const { user, editUser, setReloadUsers, showDeleteConfirm } = props;
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (user.avatar) {
      getAvatarApi(user.avatar).then((response) => {
        setAvatar(response);
      });
    } else {
      setAvatar(null);
    }
  }, [user]);

  const desactivateUser = () => {
    const accessToken = getAccessTokenApi();

    activateUserApi(accessToken, user._id, false)
      .then((response) => {
        notification["success"]({
          message: response,
        });
        setReloadUsers(true);
      })
      .catch((err) => {
        notification["error"]({
          message: err,
        });
      });
  };

  // showDeleteConfirm

  return (
    <List.Item
      actions={[
        <Button
          onChange={Modal}
          type="primary"
          size="large"
          shape="circle"
          onClick={() => editUser(user)}
        >
          <EditFilled />
        </Button>,

        <Button
          type="default"
          danger
          size="large"
          shape="circle"
          onClick={desactivateUser}
        >
          <StopOutlined />
        </Button>,

        <Button
          type="primary"
          danger
          size="large"
          shape="circle"
          onClick={(e) => showDeleteConfirm(user)}
        >
          <DeleteFilled />
        </Button>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={avatar ? avatar : noUserAvatar} />}
        title={`
            ${user.name ? user.name : "..."}
            ${user.lastname ? user.lastname : "..."}
            `}
        description={user.email}
      />
    </List.Item>
  );
}

function UsersInactive(props) {
  const { usersInactive, setReloadUsers, showDeleteConfirm } = props;

  return (
    <List
      className="users-inactive"
      itemLayout="horizontal"
      dataSource={usersInactive}
      renderItem={(user) => (
        <IndividualUserInactive
          user={user}
          setReloadUsers={setReloadUsers}
          showDeleteConfirm={showDeleteConfirm}
        />
      )}
    />
  );
}

function IndividualUserInactive(props) {
  const { user, setReloadUsers, showDeleteConfirm } = props;
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (user.avatar) {
      getAvatarApi(user.avatar).then((response) => {
        setAvatar(response);
      });
    } else {
      setAvatar(null);
    }
  }, [user]);

  // showDeleteConfirm

  const activateUser = () => {
    const accessToken = getAccessTokenApi();

    activateUserApi(accessToken, user._id, true)
      .then((response) => {
        notification["success"]({
          message: response,
        });
        setReloadUsers(true);
      })
      .catch((err) => {
        notification["error"]({
          message: err,
        });
      });
  };

  return (
    <List.Item
      actions={[
        <Button
          type="primary"
          size="large"
          shape="circle"
          onClick={activateUser}
        >
          <CheckCircleFilled />
        </Button>,
        <Button
          type="danger"
          size="large"
          shape="circle"
          onClick={(e) => showDeleteConfirm(user)}
        >
          <DeleteFilled />
        </Button>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={avatar ? avatar : noUserAvatar} />}
        title={`
            ${user.name ? user.name : "..."}
            ${user.lastname ? user.lastname : "..."}
            `}
        description={user.email}
      />
    </List.Item>
  );
}
