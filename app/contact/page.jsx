"use client";
import React from "react";

import "./contact.css";

export const page = () => {
  return (
    <main className="main bg-[#f9fbff]">
      <div className="contact_background">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div className="app-contact">
                  CONTACT INFO : +62 81 314 928 595 <br /> Email :
                  Johndoe@JohnDoe.com
                </div>
              </div>
              <div className="screen-body-item">
                <form className="app-form">
                  <div className="app-form-group">
                    <input
                      className="app-form-control input_"
                      placeholder="NAME"
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control input_"
                      placeholder="EMAIL"
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control input_"
                      placeholder="CONTACT NO"
                    />
                  </div>
                  <div className="app-form-group message">
                    <input
                      className="app-form-control input_"
                      placeholder="MESSAGE"
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button button_" type="submit">
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
