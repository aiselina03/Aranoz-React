import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";
import { Helmet } from "react-helmet-async";

function AddPage() {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [sort, setSort] = useState(null);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    fetch("http://localhost:9000/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  function handleAdd(val) {
    fetch("http://localhost:9000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(val),
    })
      .then((res) => res.json())
      .then((data) => {
        getAll();
      });
  }

  function deleteById(id) {
    fetch("http://localhost:9000/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        getAll();
      });
  }

  function search(e) {
    setInput(e.target.value);
  }
  function lower(data) {
    if (typeof data === "string") {
      return data.toLowerCase();
    }
    return data;
  }
  return (
    <>
      <Helmet>
        <title>Add Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="addPage">
        <div className="forms">
          <Formik
            initialValues={{ name: "", image: "", price: "" }}
            validationSchema={Yup.object({
              name: Yup.string().required("Please enter name"),
              image: Yup.string().required("Please enter image "),
              price: Yup.number().required("Please enter price"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                handleAdd(values);
                setSubmitting(false);
                resetForm();
              }, 400);
            }}
          >
            <Form className="form">
              <label htmlFor="name"></label>
              <Field
                name="name"
                type="text"
                className="field"
                placeholder="name"
              />
              <ErrorMessage name="name" />

              <label htmlFor="image"></label>
              <Field
                name="image"
                type="text"
                className="field"
                placeholder="image"
              />
              <ErrorMessage name="image" />

              <label htmlFor="price"></label>
              <Field
                name="price"
                type="text"
                className="field"
                placeholder="price"
              />
              <ErrorMessage name="price" />

              <button type="submit">Add</button>
            </Form>
          </Formik>
        </div>
        <div className="search">
          <input
            type="text"
            value={input}
            onChange={search}
            placeholder="Search..."
          />
        </div>
        <div className="filter">
          <button onClick={() => setSort({ property: "name", asc: true })}>
            A-Z <i className="fa-solid fa-arrow-up-a-z"></i>
          </button>
          <button onClick={() => setSort({ property: "name", asc: false })}>
            Z-A <i className="fa-solid fa-arrow-down-z-a"></i>
          </button>
          <button onClick={() => setSort(null)}>Default</button>
          <button onClick={() => setSort({ property: "price", asc: true })}>
           Price <i className="fa-solid fa-arrow-up-9-1"></i>
          </button>
          <button onClick={() => setSort({ property: "price", asc: false })}>
            Price <i className="fa-solid fa-arrow-down-9-1"></i>
          </button>
        </div>
        <div className="adminPanel">
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {products
                  .filter((x) =>
                    x.name.toLowerCase().includes(input.toLowerCase())
                  )
                  .sort((a, b) => {
                    if (sort && sort.asc) {
                      return lower(a[sort.property]) > lower(b[sort.property])
                        ? 1
                        : lower(b[sort.property]) > lower(a[sort.property])
                        ? -1
                        : 0;
                    } else if (sort && sort.asc === false) {
                      return lower(a[sort.property]) < lower(b[sort.property])
                        ? 1
                        : lower(b[sort.property]) < lower(a[sort.property])
                        ? -1
                        : 0;
                    } else {
                      return 0;
                    }
                  })
                  .map((x) => (
                    <tr key={x._id}>
                      <td>
                        <img src={x.image} alt="" />
                      </td>
                      <td>{x.name}</td>
                      <td>${x.price}</td>
                      <td>
                        <button onClick={() => deleteById(x._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPage;
