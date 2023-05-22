import React from 'react'

function Service_single() {
  return (
    <>
      <section className="service_single_banner"></section>

      <section className="service_single_main container">
        <div className="service_single_image">
          <img src="/service_single_photo.jpg" />
        </div>
        <div className="serivice_single_content service_container">
          <div className="service_single_text">
            <h2>Organic Store Services</h2>
            <p>
              t is a long established fact that a reader will be distracted by the
              readable content of a page when looking a layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making it
              look like readable English.<br /><br />
              Many desktop publishing packages and web page editors now use Lorem
              Ipsum as their default model text, and auncover many web sites still
              in their infancy. Various versions have evolved over the years
            </p>
          </div>
          <div className="service_single_row">
            <div className="service_single_row_image">
              <img src="/service_single_row1.jpg" />
            </div>
            <div className="service_single_row_text">
              <h4>Why Organic</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat. page
                editors now use Lorem Ipsum as their default model text, and
                auncover.
              </p>
            </div>
          </div>
          <div className="service_single_row">
            <div className="service_single_row_text">
              <h4>Speciality Produce</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat. page
                editors now use Lorem Ipsum as their default model text, and
                auncover.
              </p>
            </div>
            <div className="service_single_row_image">
              <img src="/service_single_row2.jpg" />
            </div>
          </div>
          <div className="service_single_text">
            <h2>We farm your land</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal distribution
              of letters, as opposed to using 'Content here, content here', making
              it look like readable English.
            </p>
            <div className="service_single_quality">
              <div className="quality_item">
                <div className="quality_number"><h3>01</h3></div>
                <h4>Best quality support</h4>
              </div>
              <div className="quality_item">
                <div className="quality_number"><h3>02</h3></div>
                <h4>Money back guarantee</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service_single