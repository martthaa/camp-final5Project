import React from "react";
import { useState, useEffect } from "react";
import {
  Form,
  Button,
  Modal
} from "react-bootstrap";
import FormContainer from "../../components/FormContainer/FormContainer";
import { Link, useParams, useNavigate } from "react-router-dom";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { toast } from "react-toastify";
import {
  useGetUserDetailsQuery,
  useUpdateUserMutation,
} from "../../slices/usersApiSlice";

const UserEditScreen = () => {
  const [showModal, setShowModal] = useState(true);

  const { id: userId } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = useGetUserDetailsQuery(userId);

  const [updateUser, { isLoading: loadingUpdate }] = useUpdateUserMutation();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateUser({ userId, name, email, isAdmin });
      toast.success("user updated successfully");
      refetch();
      navigate("/admin/userlist");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [user]);

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
        <FormContainer>
          <h1>Edit User</h1>
          {loadingUpdate && <Loader />}
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">
              {error?.data?.message || error.error}
            </Message>
          ) : (
            <Form onSubmit={submitHandler}>
              <Form.Group className="my-2" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="my-2" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="my-2" controlId="isadmin">
                <Form.Check
                  type="checkbox"
                  label="Is Admin"
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                ></Form.Check>
              </Form.Group>

              <Button type="submit" variant="primary">
                Update
              </Button>
            </Form>
          )}
        </FormContainer>
      </>
    </Modal>
  );
};

export default UserEditScreen;
