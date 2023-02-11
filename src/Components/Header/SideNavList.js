import React from 'react'

export const SideNavList = () => {
  return (
    <>
      <ul className="nav_dropdown bg_right">
        <div className="right_nav_category nav_dropdown_category ">
          <p class=" dropdown-item m-0 right_nav_item_title">
            Browse Categories
          </p>
          <li>
            <a className="dropdown-item " href="/shots/popular/animation">
              Animation
            </a>
          </li>
          <li>
            <a className="dropdown-item " href="/shots/popular/branding">
              Branding
            </a>
          </li>
          <li>
            <a className="dropdown-item " href="/shots/popular/illustration">
              Illustration
            </a>
          </li>
          <li>
            <a className="dropdown-item " href="/shots/popular/mobile">
              Mobile
            </a>
          </li>
          <li>
            <a className="dropdown-item " href="/shots/popular/print">
              Print
            </a>
          </li>
          <li>
            <a className="dropdown-item " href="/shots/popular/product-design">
              Product Design
            </a>
          </li>
          <li>
            <a className="dropdown-item " href="/shots/popular/typography">
              Typography
            </a>
          </li>
          <li>
            <a className="dropdown-item " href="/shots/popular/web-design">
              Web Design
            </a>
          </li>
        </div>
      </ul>
    </>
  );
}
