import React from "react";
import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  Modal,
  Table
} from "react-bootstrap";
import { Link} from "react-router-dom";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} from "../../slices/productsApiSlice";
import { FaEdit, FaTrash } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { toast } from "react-toastify";

const ProductListScreen = () => {
  const [showModal, setShowModal] = useState(true);

  const { data: products, isLoading, error, refetch } = useGetProductsQuery();

  const [createProduct, { isLoading: loadingCreate }] =
    useCreateProductMutation();

  const [deleteProduct, { isLoading: loadingDelete }] =
    useDeleteProductMutation();

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await deleteProduct(id);
        toast.success("Product deleted");
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const createProductHandler = async () => {
    if (window.confirm("Are you sure you want to create a new product?")) {
      try {
        await createProduct();
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
      centered
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

        <Row className="align-items-center">
          <Col>
            <h1>Products</h1>
          </Col>
          <Col className="text-end">
            <Button className="btn-sm m-3" onClick={createProductHandler}>
              <FaEdit /> Create Product
            </Button>
          </Col>
        </Row>

        {loadingCreate && <Loader />}

        {loadingDelete && <Loader />}

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Table striped hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th>CATEGORY</th>
                  <th>BRAND</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.brand}</td>

                    <td>
                      <LinkContainer to={`/admin/product/${product._id}/edit`}>
                        <Button variant="light" className="btn-sm mx-2">
                          <FaEdit />
                        </Button>
                      </LinkContainer>
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => deleteHandler(product._id)}
                      >
                        <FaTrash style={{ color: "white" }} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </>
    </Modal>
  );
};

export default ProductListScreen;
