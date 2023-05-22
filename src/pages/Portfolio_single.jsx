import { useParams } from "react-router-dom"
import React from "react"
import {useEffect, useState} from "react"
function Portfolio_single() {
    const {id}=useParams()
    const [data,setData]=useState([])
    useEffect(() => {
        fetch(`http://localhost:1313/portfolio-singles/${id}`)
            .then((a) => a.json())
            .then((a) => setData(a))
    }, [])
  return (
    <>
          <section style={{ backgroundImage: `url(${data.single_img})`,}} className="portfolio_single_first position">
                <div key={data.id} className="portfolio_single_prds">
                        <div className="portfolio_single_prd">
                            <h2 className="h2">{data.name}</h2>
                            <p className="p">Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                        </div>

                        <div className="portfolio_single_prd_infos">
                            <div className="portfolio_single_prd_info">
                                <h3 className="h3">Date</h3>
                                <p className="p">: December 4, 2022</p>
                            </div>
                            <div className="portfolio_single_prd_info">
                                <h3 className="h3">Client</h3>
                                <p className="p">: Kevin Martin</p>
                            </div>
                            <div className="portfolio_single_prd_info">
                                <h3 className="h3">Category</h3>
                                <p className="p">: Agriculture , Eco</p>
                            </div>
                            <div className="portfolio_single_prd_info">
                                <h3 className="h3">Service</h3>
                                <p className="p">: Organic Products</p>
                            </div>
                        </div>
                    </div>
            </section>
    
            <section className="portfolio_empty"></section>

            <section className="portfolio_single_second">
                <div className="portfolio_single_container">
                    <h2>About The Farm:</h2>
                  <p className="p">t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.<br></br><br></br>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
            <div className="portfolio_single_img">
                <img src={data.info_pic}></img>
                    <p className="p">The Organic Products</p>
            </div>
            <h2>How To Farm:</h2>
            <p className="p">t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.<br></br><br></br> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy.Various versions have evolved over the years</p >
            <h2>Conclusion:</h2>
            <p className="p">t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                      <br></br><br></br>
        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy.Various versions have evolved over the years</p >
        </div >
    </section >
    </>
  )
}

export default Portfolio_single