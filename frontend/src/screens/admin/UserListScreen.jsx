import React from "react";
import { useState, useEffect } from "react";
import {
  Button,
  Modal,
  Table,
} from "react-bootstrap";
import { Link} from "react-router-dom";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { toast } from "react-toastify";
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "../../slices/usersApiSlice";
import { FaTimes, FaTrash, FaEdit, FaCheck } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

const UserListScreen = () => {
  const [showModal, setShowModal] = useState(true);
  const { data: users, refetch, isLoading, error } = useGetUsersQuery();

  const [deleteUser, { isLoading: loadingDelete }] = useDeleteUserMutation();

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await deleteUser(id);
        toast.success("User deleted");
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <Modal
      className="login no-shadow"
      show={showModal}
      style={{
        border: "none",
        backgroundColor: "white",
        color: "#274C5B",
        padding: "0 10px",
      }}
    >
      <>
        <div style={{ textAlign: "right" }}>
          <Link to="/" className="btn btn-light">
            Go Back
          </Link>
        </div>
        <h1>Users</h1>
        {loadingDelete && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">
            {error?.data?.message || error.error}
          </Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ADMIN</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td>
                    {user.isAdmin ? (
                      <FaCheck style={{ color: "green" }} />
                    ) : (
                      <FaTimes style={{ color: "red" }} />
                    )}
                  </td>
                  <td>
                    {!user.isAdmin && (
                      <>
                        <LinkContainer
                          to={`/admin/user/${user._id}/edit`}
                          style={{ marginRight: "10px" }}
                        >
                          <Button variant="light" className="btn-sm">
                            <FaEdit />
                          </Button>
                        </LinkContainer>
                        <Button
                          variant="danger"
                          className="btn-sm"
                          onClick={() => deleteHandler(user._id)}
                        >
                          <FaTrash style={{ color: "white" }} />
                        </Button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </>
    </Modal>
  );
};

export default UserListScreen;
