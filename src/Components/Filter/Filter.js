import React from "react";
import "./style.css";
export const Filter = () => {
  return (
    <>
      <div className="container-fluid filter-container ">
        <div class="dropdown ">
          <a
            class="btn  btn-md dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            href="."
          >
            Popular
          </a>

          <ul
            class="dropdown-menu dropdown-menu-white"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <a class="dropdown-item active-nav-btn" href=".">
                Popular
              </a>
            </li>

            <li class="" id="recent-btn">
              <a
                class="dropdown-item"
                href="."
                data-track-view="New &amp; Noteworthy"
              >
                New &amp; Noteworthy
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="/marketplace">
                Marketplace
              </a>
            </li>
          </ul>
        </div>

        <button
          class="btn
           filter-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <box-icon name="filter"></box-icon>
          <span>Filters</span>
        </button>
      </div>
      <div class="collapse" id="collapseExample">
        <form className=" row filter-tag-container ">
          <fieldset class="col-lg-3 shots-tag">
            <label>Tags</label>
            <div class="tags input-field">
              <a
                class="nav-link .hero_search-icon"
                aria-current="page"
                href="."
              >
                <box-icon
                  name="search-alt-2"
                  color="#9e9ea7"
                  class="d-block form-control-feedback"
                ></box-icon>
              </a>
              <input
                className="search_tag "
                type="search"
                name="tag"
                id="tag"
                placeholder="Search..."
                autocomplete="off"
              />
            </div>
          </fieldset>
          <fieldset class="col-lg-3  shots-tag">
            <label>Color</label>
            <div class="color input-field">
              <a
                class="nav-link .hero_search-icon"
                aria-current="page"
                href="."
              >
                <box-icon
                  name="palette"
                  type="solid"
                  color="#f643ea"
                  class="d-block"
                ></box-icon>
              </a>

              <input
                type="search"
                className="search_tag "
                name="color"
                id="color"
                placeholder="Enter hex or select"
                autocomplete="off"
                maxlength="7"
                pattern="[a-fA-F\d]+"
                data-name="Color"
                data-track-filter="true"
              />
            </div>
          </fieldset>
          <fieldset class="col-lg-3 shots-tag">
            <label>Timeframe</label>

            <div class="timenav dropdown">
              <a
                class=" timeframe-btn "
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="."
              >
                <span>Now</span>
                <span className="flip_arrow">
                  <box-icon
                    class="up_arrow"
                    name="chevron-up"
                    color="#afa6a6"
                  ></box-icon>
                </span>
              </a>

              <ul
                class="dropdown-menu dropdown-menu-white"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a class="dropdown-item active-nav-btn" href=".">
                    Now
                  </a>
                </li>

                <li class="" id="recent-btn">
                  <a
                    class="dropdown-item"
                    href="."
                    data-track-view="New &amp; Noteworthy"
                  >
                    This Past Week
                  </a>
                </li>
                <li class="" id="recent-btn">
                  <a
                    class="dropdown-item"
                    href="."
                    data-track-view="New &amp; Noteworthy"
                  >
                    This Past Month
                  </a>
                </li>
                <li class="" id="recent-btn">
                  <a
                    class="dropdown-item"
                    href="."
                    data-track-view="New &amp; Noteworthy"
                  >
                    This Past Year
                  </a>
                </li>
                <li class="" id="recent-btn">
                  <a
                    class="dropdown-item"
                    href="."
                    data-track-view="New &amp; Noteworthy"
                  >
                    All Time
                  </a>
                </li>
              </ul>
            </div>
          </fieldset>
          <fieldset class="col-lg-3 shots-tag">
            <label >Downloads</label>
            <div class="dropdown ">
              <a
                class="download-btn"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="."
              >
                <span>All Shots</span>
                <span className="flip_arrow">
                  <box-icon
                    class="up_arrow"
                    name="chevron-down"
                    color="#afa6a6"
                  ></box-icon>
                </span>
              </a>

              <ul
                class="dropdown-menu dropdown-menu-white"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a class="dropdown-item active-nav-btn" href=".">
                    All Shots
                  </a>
                </li>

                <li class="" id="recent-btn">
                  <a
                    class="dropdown-item"
                    href="."
                    data-track-view="New &amp; Noteworthy"
                  >
                    Adobe Ilustrator
                  </a>
                </li>
                <li class="" id="recent-btn">
                  <a
                    class="dropdown-item"
                    href="."
                    data-track-view="New &amp; Noteworthy"
                  >
                    Adobe Photoshop
                  </a>
                </li>
                <li class="" id="recent-btn">
                  <a
                    class="dropdown-item"
                    href="."
                    data-track-view="New &amp; Noteworthy"
                  >
                    Adobe XD
                  </a>
                </li>
                <li class="" id="recent-btn">
                  <a
                    class="dropdown-item"
                    href="."
                    data-track-view="New &amp; Noteworthy"
                  >
                    Figma
                  </a>
                </li>
                <li class="" id="recent-btn">
                  <a
                    class="dropdown-item"
                    href="."
                    data-track-view="New &amp; Noteworthy"
                  >
                    Invision Studio
                  </a>
                </li>
                <li class="" id="recent-btn">
                  <a
                    class="dropdown-item"
                    href="."
                    data-track-view="New &amp; Noteworthy"
                  >
                    Sketch
                  </a>
                </li>
              </ul>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};
