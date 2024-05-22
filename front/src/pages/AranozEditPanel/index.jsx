import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

function AranozEditPanel() {
  let { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getById(id);
  }, []);

  async function getById(id) {
    const response = await fetch(`http://localhost:9000/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const aranozData = await response.json();
    setName(aranozData.name);
    setPrice(aranozData.price);
    setImage(aranozData.image);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9000/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        image,
      }),
    });

    window.location.href = "/addPage";
  }

  return (
    <div className="menuUpdatePanel">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          onChange={(e) => setImage(e.target.value)}
          value={image}
          placeholder="Image"
        />

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />

        <br />
        <button type="submit">Update </button>
      </form>
    </div>
  );
}

export default AranozEditPanel;
