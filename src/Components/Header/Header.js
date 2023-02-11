import React from "react";
import "./Header.css";
import {Subnav } from "./Subnav"
import dibbble_logo from "../Images/dibbble_logo.png";
import { NavListData } from "../../Api/NavListData";
  
 
export const Header = () => { 
  const navbar_len = NavListData.length;

  return (
    <>
      <header>
        <nav class="navbar p-0 navbar-expand-lg ">
          <div class="container-fluid px-4">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <a class="navbar-brand logo_link" href=".">
              <img class="logo_image" src={dibbble_logo} alt="" />
            </a>

            <a class="navbar-brand d-lg-none cancel-bag" href=".">
              Sign in
            </a>

            <div
              class="navbar-container collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav sub-nav-links  mb-lg-0">
                {navbar_len > 0 &&
                  NavListData.map((navData) => {
                    const { id, nav_text, dropdown_menu } = navData;
                    return (
                      <>
                        <li key={id} class="nav-item dropdown">
                          <a
                            class="nav-link dropdown px-0 unclickable"
                            href="."
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {nav_text}
                          </a>
                          <Subnav {...dropdown_menu} />
                        </li>
                      </>
                    );
                  })}
              </ul>
              {/* <form class="form-group has-search">
                <box-icon
                  name="search-alt-2"
                  color="#9e9ea7"
                  class="form-control-feedback"
                ></box-icon>

                <input
                  type="search"
                  class="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form> */}

              <ul class=" navbar-nav left-links   mb-lg-0">
                <li class="nav-item">
                  <a class=" search-icon" aria-current="page" href=".">
                    <box-icon
                      name="search-alt-2"
                      color="#9e9ea7"
                      class="d-block form-control-feedback"
                    ></box-icon>
                  </a>
                </li>

                <li class="nav-item">
                  <a class=" sign-in-btn" aria-current="page" href=".">
                    Sign in
                  </a>
                </li>
                <li class="nav-item">
                  <a class=" sign-up-btn" aria-current="page" href=".">
                    Sign up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
