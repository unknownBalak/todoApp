import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./styles.css";
import Button from "@mui/material/Button";
import axios from "axios";
const url = "http://localhost:3001/updateItem";
const contents = [
  { id: 13, content: "this is content1" },
  { id: 14, content: "this is content2" },
  { id: 15, content: "this is content3" },
  { id: 16, content: "this is content4" },
  { id: 17, content: "this is content5" },
];

function addItem(e, url) {
  e.preventDefault();
  let payload = { name: "Shashi", content: e.target[0].value };
  axios.post(url, payload);
  e.target.reset();
}

function Home() {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    async function getContents() {
      const url = "http://localhost:3001/getContent";
      const fetched__contents = await axios.get(url);
      setContents(fetched__contents.data);
    }
    getContents();
  }, []);
  console.log("This is contents", contents);
  return (
    <div className="">
      <h1>Add Item</h1>
      <hr />
      <div className="semiContainer">
        <div className="form">
          <form action="" onSubmit={(e) => addItem(e, url)}>
            <textarea type="text" rows={2} cols={20} />
            <Button variant="contained" type="submit">
              Add Items
            </Button>
          </form>
        </div>
        {contents.map((item) => (
          <Card {...item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
