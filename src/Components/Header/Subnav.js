import React from 'react'
import { SideNavList } from './SideNavList';
export const Subnav = ({ ...dropdown_menu }) => {
  const leftDropdown = dropdown_menu[0].left_menu;
  return (
    <>
      <div className="dropdown-menu mt-3 p-0 subnav_dropdown ">
        <ul className="nav_dropdown bg_left ">
          {leftDropdown.map((values, index) => {
            const { path_value, heading, description, hover_arrow, color } =
              values;
            return (
              <>
                <div key={index + 1} className="nav_dropdown_category">
                  <li>
                    <a class="dropdown-item" href=".">
                      <div className="subnav_icon">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          class="site-nav-dropdown-icon"
                          style={{ color: `${color}` }}
                        >
                          <path
                            d={path_value}
                            fill="currentColor"
                            fill-opacity="0.2"
                            stroke="currentColor"
                            stroke-width="1.5"
                          ></path>
                          <path
                            d={values.path_value1}
                            fill="currentColor"
                            fill-opacity="0.2"
                            stroke="currentColor"
                            stroke-width="1.5"
                          ></path>
                          <path
                            d={values.path_value2}
                            fill="currentColor"
                            fill-opacity="0.2"
                            stroke="currentColor"
                            stroke-width="1.5"
                          ></path>
                        </svg>
                      </div>
                      <div className="subnav_items">
                        <h3 className="subnav_heading">{heading}</h3>
                        <p className="subnav_desc">{description}</p>
                      </div>
                      <div className="dropdown_arrow_hover">
                        <i
                          className={`fa-solid ${hover_arrow}`}
                          style={{ color: `${color}` }}
                        ></i>
                      </div>
                    </a>
                  </li>
                </div>
              </>
            );
          })}
        </ul>
        <SideNavList/>   
      </div>
    </>
  );
};








