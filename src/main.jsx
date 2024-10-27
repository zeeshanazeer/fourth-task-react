// https://react-icons.github.io/react-icons/
// npm i react-icons
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import car1 from "./assets/man.jpg";
import { SlOptions } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { BiCommentDetail } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import "./post.css";
import car from "./assets/car.webp";
import car2 from "./assets/car2.webp";
import car3 from "./assets/car3.jpg";
import car4 from "./assets/car4.jpg";
import car5 from "./assets/car5.jpg";
import car6 from "./assets/car6.jpg";
import { LuFolderMinus } from "react-icons/lu";



function Post(Props) {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-user-detail">
          <img
            src={car1}
            alt="Hedy Lamarr"
            className="dp"
            id="my-id"
          />
          <div>
          <h3>Zeeshan Nazeer</h3>
          <span>25 oct 2024</span>
          </div>
        </div>
        <SlOptions />
      </div>

      <p>
        {Props.par}
      </p>
      <img src={Props.img} alt="post image" className="post-photo" id="my-id" />

      <div>
        <div className="comm">
        <p>Share<IoMdShareAlt /></p>
        <p>Comment<BiCommentDetail /></p>
        <p className="like">Like<FcLike /></p>
        </div>
      </div>
    </div>
  );
}




function App() {
  return (
    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      <Post img={car} par={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciuntarchitecto quaerat sunt illum, esse eveniet quas minima, non aperiam,praesentium impedit itaque enim fugit? Iure explicabo molestiaeasperiores exercitationem minus."}/>
      <Post par={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciuntarchitecto quaerat sunt illum, esse eveniet quas minima, non aperiam,praesentium impedit itaque enim fugit? Iure explicabo molestiaeasperiores exercitationem minus."} />
      <Post img={car2}/>
      <Post img={car3}/>
      <Post img={car4} par={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciuntarchitecto quaerat sunt illum, esse eveniet quas minima, non aperiam,praesentium impedit itaque enim fugit? Iure explicabo molestiaeasperiores exercitationem minus."}/>
      <Post img={car5}/>
      <Post par={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciuntarchitecto quaerat sunt illum, esse eveniet quas minima, non aperiam,praesentium impedit itaque enim fugit? Iure explicabo molestiaeasperiores exercitationem minus."}/>
      <Post img={car2} par={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciuntarchitecto quaerat sunt illum, esse eveniet quas minima, non aperiam,praesentium impedit itaque enim fugit? Iure explicabo molestiaeasperiores exercitationem minus."}/>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);