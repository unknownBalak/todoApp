import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./styles.css";
import Button from "@mui/material/Button";
import axios from "axios";
import baseUrl from "../configuration/baseUrl";
const url = `${baseUrl}/updateItem`;
function addItem(e, url) {
  console.log("Thsi isurd", url);
  e.preventDefault();
  let payload = {
    name: "Shashi",
    content: e.target[0].value,
    time: new Date().getTime(),
  };
  axios.post(url, payload);
  e.target.reset();
}

function Home() {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    async function getContents() {
      const url = `${baseUrl}/getContent`;
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
