import React from "react";
import "./Section_img_8_blog.css";
import icon from "../../../assets/Images/Icon-send.svg";
import a from "../../../assets/Images/post_5.jpg.webp"
import b from "../../../assets/Images/post_6.jpg.webp"
import c from "../../../assets/Images/post_7.jpg.webp"
import d from "../../../assets/Images/post_8.jpg.webp"
import e from "../../../assets/Images/single_blog_5.webp"

// import imn from "../../../assets/Images/single_blog_1.webp"
const Section_img_8_blog = () => {
  return (
    <>
      <div className="row-width">
        <div className="input-btn-blog">
          <input type="text" placeholder="Search KeyWord" />
          <div className="search-bar">
            <button type="submit" name="submit" className="eml_icon">
              <img src={icon} alt="Send Icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="single_sidebar">
        <h4>Category</h4>
        <ul className="list cat-list">
          <li className="ak">
            <a href="#" className="d-flex">
              <p>Resaurant food</p>
              <p>(37)</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex">
              <p>Travel news</p>
              <p>(10)</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex">
              <p>Modern technology</p>
              <p>(03)</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex">
              <p>Product</p>
              <p>(11)</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex">
              <p>Inspiration</p>
              <p>21</p>
            </a>
          </li>
          <li>
            <a href="#" className="d-flex">
              <p>Health Care (21) </p>
              <p>09</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="row-width">
        <aside className="post_widget">
          <h3>Recent Post</h3>
          <div className="media post_item">
            <img src={a} />
            <div className="media-body">
              <a href="blog_details.html">
                <h3>From life was you fish...</h3>
              </a>
              <p>January 12, 2019</p>
            </div>
          </div>
          <div className="media post_item">
            <img src={b} />
            <div className="media-body">
              <a href="blog_details.html">
                <h3>The Amazing Hubble</h3>
              </a>
              <p>02 Hours ago</p>
            </div>
          </div>
          <div className="media post_item">
            <img src={c} alt="post" />
            <div className="media-body">
              <a href="blog_details.html">
                <h3>Astronomy Or Astrology</h3>
              </a>
              <p>03 Hours ago</p>
            </div>
          </div>
          <div className="media post_item">
            <img src={d} alt="post" />
            <div className="media-body">
              <a href="blog_details.html">
                <h3>Asteroids telescope</h3>
              </a>
              <p>01 Hours ago</p>
            </div>
          </div>
        </aside>
      </div>
      <div className="cloud_widgt">
        <div className="row-width">
          <div className="cloud_widget">
            <h4>Tag Clouds</h4>
            <ul className="list-s">
              <li>
                <a href="#">project</a>
              </li>
              <li>
                <a href="#">love</a>
              </li>
              <li>
                <a href="#">technology</a>
              </li>
            </ul>
            <ul className="list-s">
              <li>
                <a href="#">travel</a>
              </li>
              <li>
                <a href="#">restaurant</a>
              </li>
              <li>
                <a href="#">life style</a>
              </li>
            </ul>
            <ul className="list-s">
              <li>
                <a href="#">design</a>
              </li>
              <li>
                <a href="#">illustration</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className="cloud">
        <div className="row-width">
          <div className="instagram_feeds">
            <h4>Instagram Feeds</h4>
            <ul className="instagram_row">
              <li>
                <a href="#">
                  <img className="img-fluid" src={e} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="img-fluid" src={e} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="img-fluid" src={e} alt="" />
                </a>
              </li>
            </ul>
            <ul className="instagram_row">

              <li>
                <a href="#">
                  <img className="img-fluid" src={e} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="img-fluid" src={e} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="img-fluid" src={e} alt="" />
                </a>
              </li>
            </ul>
          </div>

        </div>

      </div>
      <div className="clou">
        <div className="row-width">
          <div className="dget">
            <h4>Newsletter</h4>
            <form action="#">
              <div className="form-group">
                <input type="email" className="form-control" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email'" placeholder="Enter email" required="" />
              </div>
              <button className="btn-sub" type="submit">Subscribe</button>
            </form>
          </div>

        </div>
      </div>


    </>
  );
}

export default Section_img_8_blog;
