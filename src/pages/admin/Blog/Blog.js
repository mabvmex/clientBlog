import React, { useState, useEffect } from "react";
import { Button, notification } from "antd";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import Modal from "../../../components/Modal";
import { getPostsApi } from "../../../api/post";
import PostList from "../../../components/Admin/Blog/PostList";
import Pagination from "../../../components/Pagination";
import AddEditPostForm from "../../../components/Admin/Blog/AddEditPostForm";
import "./Blog.scss";

function Blog(props) {
  const { location, history } = props;
  const [posts, setPosts] = useState(null);
  const [reloadPosts, setReloadPosts] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const { page = 1 } = queryString.parse(location.search);

  useEffect(() => {
    getPostsApi(10, page)
      .then((response) => {
        if (response?.code !== 200) {
          notification["warning"]({
            message: response.message,
          });
        } else {
          setPosts(response.post);
        }
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor",
        });
      });
    setReloadPosts(false);
  }, [page, reloadPosts]);

  const addPost = () => {
    setIsVisibleModal(true);
    setModalTitle("Nuevo post");
    setModalContent(
      <AddEditPostForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadPosts={setReloadPosts}
        post={null}
      />
    );
  };

  const editPost = post => {
    setIsVisibleModal(true);
    setModalTitle('Editar post');
    setModalContent(
      <AddEditPostForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadPosts={setReloadPosts}
        post={post}
      />
    )
  }



  if (!posts) {
    return null;
  }

  return (
    <div className="blog">
      <div className="blog__add-post">
        <Button type="primary" shape="round" onClick={addPost}>
          Nuevo post
        </Button>
      </div>

      <PostList posts={posts} setReloadPosts={setReloadPosts} editPost={editPost} />
      <Pagination posts={posts} location={location} history={history} />

      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
        width="75%"
      >
        {modalContent}
      </Modal>
    </div>
  );
}

export default withRouter(Blog);
