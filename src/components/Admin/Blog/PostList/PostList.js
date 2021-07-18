import React from "react";
import { List, Button, Modal, notification } from "antd";
import { EyeFilled, EditFilled, DeleteFilled, QuestionCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getAccessTokenApi } from "../../../../api/auth";
import { deletePostApi } from "../../../../api/post";
import "./PostList.scss";

const { confirm } = Modal;

export default function PostList(props) {
  const { posts, setReloadPosts, editPost } = props;

  const deletePost = post => {
    const accessToken = getAccessTokenApi();

    confirm({
      icon: <QuestionCircleFilled/>,
      title: "Eliminando post",
      content: `¿Estás seguro de querer eliminar el post: ${post.title}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
         deletePostApi(accessToken, post._id)
          .then((response) => {
            const typeNotification =
              response.code === 200 ? "success" : "warning";
            notification[typeNotification]({
              message: response.message,
            });
            setReloadPosts(true);
          })
          .catch((err) => {
            notification['error']({
              message: "Error del servidor",
            });
          });
      },
    });
  };

  return (
    <div className="post-list">
      <List
        dataSource={posts.docs}
        renderItem={post => <Post post={post} deletePost={deletePost} editPost={editPost} />}
      />
    </div>
  );
}

function Post(props) {
  const { post, deletePost, editPost } = props;

  return (
    <List.Item
      actions={[
        <Link to={`/blog/${post.url}`} target="_blank">
          <Button shape="circle" size="large" type="primary" target="_blank">
            <EyeFilled />
          </Button>
        </Link>,

        <Button type="primary" shape="circle" size="large" onClick={ ()=> editPost(post)   } >
          <EditFilled />
        </Button>,

        <Button
          type="danger"
          shape="circle"
          size="large"
          onClick={() => deletePost(post)}
        >
          <DeleteFilled />
        </Button>,
      ]}
    >
      <List.Item.Meta title={post.title} />
    </List.Item>
  );
}
