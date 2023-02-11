import React from 'react'
import { Data } from '../../Api/Data';
import './Card.css'
export const Cards = () => {
  


    return (
      <>
        <div className="row  cards_layout ">
          {Data.map((data, index) => {
            return (
              <>
                <div key={index} className="cards_container col-lg-3 col-sm-6 ">
                  <div className="card mb-4 img-field">
                    <img src={data.shots_image} class="card-img" alt="..." />
                    <div className="card-body card-footer">
                      <div className="card-left-content">
                        <a
                          class="user_profile_link"
                          rel="contact"
                          href="/kretyastudio"
                        >
                          <img
                            className="user_profile_photo"
                            src={data.shots_image}
                            alt="profile-pic"
                          />
                          <span class="display-name">{data.account_name}</span>
                        </a>

                        <a class="badge-link" href="/pro">
                          <span className="badge badge-team">{data.role}</span>
                        </a>
                      </div>
                      <div className="card-right-content">
                        <a className="like_shots" href=".">
                          <i color="#918888" class="fa-solid fa-heart"></i>
                          <span>{data.like_counts}</span>
                        </a>
                        <div className="view_shots">
                          <i class="fa-solid fa-eye"></i>
                          <span>{data.view_counts}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div className=" container-fluid load-more-btn ">
            <a href="." class="form-btn load-more">
              Load more Shots
            </a>
          </div>
        </div>
      </>
    );}
