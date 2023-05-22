import React from 'react'
import { useState } from "react";
import Video from '../components/Video';
function Services() {
  const [videoShown, setVideoShown] = useState(false);
  return (
    <>
      <section class="services_banner"></section>

      <section class="service_main container">
        <div class="service_title">
          <h5>What we Grow</h5>
          <h3>Better Agriculture for Better Future</h3>
        </div>

        <div class="service_inner">
          <div class="service_product_about">
            <ul class="service_content1">
              <li>
                <img src="/icons/service_icon1.svg" />
                <h2>Dairy Products</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </li>
              <li>
                <img src="/icons/service_icon2.svg" />
                <h2>Store Services</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </li>
              <li>
                <img src="/icons/service_icon3.svg" />
                <h2>Delivery Services</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </li>
            </ul>
            <div class="service_image">
              <img src="/service_product.png" />
            </div>
            <ul class="service_content2">
              <li>
                <img src="/icons/service_icon4.svg" />
                <h2>Agricultural Services</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </li>
              <li>
                <img src="/icons/service_icon5.svg" />
                <h2>Organic Products</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </li>
              <li>
                <img src="/icons/service_icon6.svg" />
                <h2>Fresh Vegetables</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </p>
              </li>
            </ul>
          </div>
          <button class="blue_btn">
            <p>Explore More</p>
            <i class="fa-solid fa-circle-arrow-right"></i>
          </button>
        </div>
      </section>

      <section class="service_video_bg">
        <div class="service_video_content container">
          <div class="service_title">
            <h5>Organic Only</h5>
            <h3>Everyday Fresh & Clean</h3>
            <p>They believe us and we are successful in fulfilling their believes. They play a vital role in our success.
              Each and everyone is most important to us and also for our success.</p>
          </div>
          <div class="video_play_btn">
            <a onClick={() => setVideoShown(!videoShown)} class="video_play_circle" >
              <div class="play_img"> <img src="/play_btn.svg" /> </div>

            </a>
          </div>
        </div>
        {videoShown && <Video videoShown={videoShown} setVideoShown={setVideoShown} />}
      </section>
    </>
  )
}

export default Services