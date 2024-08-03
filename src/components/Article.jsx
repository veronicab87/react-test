import React from "react";
import Button from "../ui/Button.jsx";
import Title from "../ui/Title.jsx";
import Image from "../ui/Image.jsx";
import Text from "../ui/Text.jsx";



export default function Article({key,mensaje}) {
  return ( 
    
    <div className="row">
      <div className="col">
        <div className="card mb-3" style={{minHeight: "250px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="..." className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Article title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
