import React from 'react'
import './style.css'
export const Hero = () => {
  return (
    <>
      <div className="hero_layout">
        <div className="hero-categories filter-categories ">   
          <ul >
            <li className="hero-category category active">
              <a
                title="Discover"
                data-param="category"
                data-track-sub-nav="true"
                href="/shots/popular/"
              >
                Discover
              </a>
            </li>
            <li className="hero-category category sets-path ">
              <a
                title="Animation"
                data-param="category"
                data-value="animation"
                data-track-sub-nav="true"
                href="/shots/popular/animation"
              >
                Animation
              </a>
            </li>
            <li className="hero-category category sets-path ">
              <a
                title="Branding"
                data-param="category"
                data-value="branding"
                data-track-sub-nav="true"
                href="/shots/popular/branding"
              >
                Branding
              </a>
            </li>
            <li className="hero-category category sets-path ">
              <a
                title="Illustration"
                data-param="category"
                data-value="illustration"
                data-track-sub-nav="true"
                href="/shots/popular/illustration"
              >
                Illustration
              </a>
            </li>
            <li className="hero-category category sets-path ">
              <a
                title="Mobile"
                data-param="category"
                data-value="mobile"
                data-track-sub-nav="true"
                href="/shots/popular/mobile"
              >
                Mobile
              </a>
            </li>
            <li className="hero-category category sets-path ">
              <a
                title="Print"
                data-param="category"
                data-value="print"
                data-track-sub-nav="true"
                href="/shots/popular/print"
              >
                Print
              </a>
            </li>
            <li className="hero-category category sets-path ">
              <a
                title="Product Design"
                data-param="category"
                data-value="product-design"
                data-track-sub-nav="true"
                href="/shots/popular/product-design"
              >
                Product Design
              </a>
            </li>
            <li className="hero-category category sets-path ">
              <a
                title="Typography"
                data-param="category"
                data-value="typography"
                data-track-sub-nav="true"
                href="/shots/popular/typography"
              >
                Typography
              </a>
            </li>
            <li className="hero-category category sets-path ">
              <a
                title="Web Design"
                data-param="category"
                data-value="web-design"
                data-track-sub-nav="true"
                href="/shots/popular/web-design"
              >
                Web Design
              </a>
            </li>
          </ul>
        </div>

        <div className="hero-media">
          <video
            className="hero_media_video"
            autoPlay
            muted
            loop
            playsInline
            data-hero-video=""
            data-src-lg="https://cdn.dribbble.com/uploads/39421/original/963b4f8739cbdf86ca3f3a23245efd18.mp4?1657824985"
            data-src-sm="https://cdn.dribbble.com/uploads/39422/original/2a124f438241970f60b377e881b8dc0b.mp4?1657824997"
          >
            <source
              src="https://cdn.dribbble.com/uploads/39421/original/963b4f8739cbdf86ca3f3a23245efd18.mp4?1657824985"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="text-content hero-text-content">
          <h1 className="hero-text-heading">
            Explore the world’s leading design portfolios
          </h1>
          <h2 className="hero-text-dec font-body margin-v-16">
            Millions of designers and agencies around the world showcase their
            portfolio work on Dribbble - the home to the world’s best design and
            creative professionals.
          </h2>
        </div>

        <form className="search-input-hero ">
          <a
            class="nav-link active .hero_search-icon"
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
            id="search-shots"
            type="search"
            name="search-shots"
            placeholder="Search..."
            className="search-input "
          />
        </form>

        <ul className="hero-search-results ">
          <li className="hero-search-heading">Trending searches</li>
          <li className="hero-search-tag">
            <a href=".">landing page</a>
          </li>
          <li className="hero-search-tag">
            <a href=".">ios</a>
          </li>
          <li className="hero-search-tag">
            <a href=".">food</a>
          </li>
          <li className="hero-search-tag">
            <a href=".">landingpage</a>
          </li>
          <li className="hero-search-tag">
            <a href=".">uxdesign</a>
          </li>
          <li className="hero-search-tag">
            <a href=".">app design</a>
          </li>
        </ul>
        <span className="hero-user-tag">
          <a className="hero-user-link" href="." >
            @glebich
          </a>
        </span>
      </div>
    </>
  );
}
