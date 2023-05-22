import { Link } from "react-router-dom"
import { EffectFade } from "swiper";
import React, { useRef, useState ,useEffect} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

function About() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:1313/team`)
            .then((a) => a.json())
            .then((a) => setData(a))
    }, [])
    return (
        <>
            <section className="about_first"></section>

            <section className="about_second">
                <div className="container_about">
                    <div className="about_left_second">
                        <img src="/image2.png"></img>
                    </div>
                    <div className="about_right_second">
                        <h4 className="h4">About us</h4>
                        <h2 className="h2">We do Creative Things for Success</h2>
                        <br></br>
                        <p className="p">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        <br></br>
                        <p className="p">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        <br></br>
                        <div className="about_main_agriculture position">
                            <div className="about_agriculture position">
                                <img className="position" src="/Tractor.jpg"></img>
                                Modern Agriculture Equipment
                            </div>
                            <div className="position about_agriculture">
                                <img className="position" src="/Chemical Plant.png"></img>
                                No growth hormones are used
                            </div>
                        </div>

                        <Link to="/services">
                            <button className="btn about_second_btn flex">
                                Explore More
                                <div className="arrow">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>
                            </button></Link>
                    </div >
                </div >
            </section >

            <section className="about_third">
                <div className="container">
                    <div className="single_flex">

                        <div className="about_third_left ">
                            <h4 className="h4">Why choose us?</h4>
                            <h2 className="h2">We do not buy from the open market & traders.</h2>
                            <p className="p">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                            <div className="position">
                                <div className="grey_asdiv"><span>100% Natural Product</span></div>
                                <p className="p absolute">Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                            </div>
                            <div className="position"><div className="grey_asdiv second_greydiv"><span>Increases resistance</span></div>
                                <p className="p absolute">Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p></div>
                        </div>
                        <div className="about_third_right">
                            <img src="/cucumber.jpg"></img>
                        </div>

                    </div>
                    <div className="about_third_second_part">
                        <div className="about_info position">
                            <div className="about_info_img position"><img src="/Return Purchase.png"></img></div>
                            <h2 className="about_info_h2">Return Policy</h2>
                            <div className="about_pp"><p className="p">Simply dummy text of the printintypesetting industry.</p></div>

                        </div>
                        <div className="about_info position">
                            <div className="about_info_img position"><img src="/Natural Food.png"></img></div>
                            <h2 className="about_info_h2">100% Fresh</h2>
                            <div className="about_pp">
                                <p className="p">Simply dummy text of the printintypesetting industry.</p>
                            </div>
                        </div>
                        <div className="about_info position">
                            <div className="about_info_img position"><img src="/Phone Time.png"></img></div>
                            <h2 className="about_info_h2">Support 24/7</h2>
                            <div className="about_pp">
                                <p className="p">Simply dummy text of the printintypesetting industry.</p>
                            </div>
                        </div>
                        <div className="about_info position">
                            <div className="about_info_img position"><img src="/Card Security.png"></img></div>
                            <h2 className="about_info_h2">Secured Payment</h2>
                            <div className="about_pp">
                                <p className="p">Simply dummy text of the printintypesetting industry.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="about_fourth about_swipper">
                <div className="container">
                    <div className="about_center">
                        <h4 className="h4">Team</h4>
                        <h2 className="h2">Our Organic Experts</h2>
                        <p className="p">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley.</p>
                    </div>
                    <div className="about_experts">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            {data.map((a)=>(
                            <SwiperSlide>
                                <div className="about_expert">
                                    <div className="about_expert_img">
                                        <img src={a.image}></img>
                                    </div>
                                    <div className="about_expert_infos">
                                        <h2 className="about_blue">{a.name}</h2>
                                        <div className="about_expert_infoss">
                                            <h4 className="h4">{a.profession}</h4>
                                            <div className="about_info_i">
                                                <a href="https://www.facebook.com/"><img src="/facebook.png"></img></a>
                                                <a href="https://twitter.com/"><img src="/twitter.png"></img></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                            
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className="about_fourth_responsive">
                <div className="container">
                    <div className="about_center">
                        <h4 className="h4">Team</h4>
                        <h2 className="h2">Our Organic Experts</h2>
                        <p className="p">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley.</p>
                    </div>
                    <div className="about_experts">
                        
                                    <div className="about_expert">
                                        <div className="about_expert_img">
                                            <img src="/giovani.jpg"></img>
                                        </div>
                                        <div className="about_expert_infos">
                                            <h2 className="about_blue">Giovani</h2>
                                            <div className="about_expert_infoss">
                                                <h4 className="h4">Farmer</h4>
                                                <div className="about_info_i">
                                                    <a href="https://www.facebook.com/"><img src="/facebook.png"></img></a>
                                                    <a href="https://twitter.com/"><img src="/twitter.png"></img></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        
                        <div className="about_expert about_expert_infos_center">
                            <div className="about_expert_img">
                                <img src="/marianne.jpg"></img>
                            </div>
                            <div className="about_expert_infos">
                                <h2 className="about_blue">Marianne Loreno</h2>
                                <div className="about_expert_infoss">
                                    <h4 className="h4">Designer</h4>
                                    <div className="about_info_i">
                                        <a href="https://www.instagram.com/"><img src="/Insta.png"></img></a>
                                        <a href="https://www.facebook.com/"><img src="/facebook.png"></img></a>
                                        <a href="https://twitter.com/"><img src="/twitter.png"></img></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about_expert">
                            <div className="about_expert_img">
                                <img src="/riga.jpg"></img>
                            </div>
                            <div className="about_expert_infos">
                                <h2 className="about_blue">Riga Pelore</h2>
                                <div className="about_expert_infoss">
                                    <h4 className="h4">Farmer</h4>
                                    <div className="about_info_i">
                                        <a href="https://www.instagram.com/"><img src="/Insta.png"></img></a>
                                        <a href="https://www.facebook.com/"><img src="/facebook.png"></img></a>
                                        <a href="https://twitter.com/"><img src="/twitter.png"></img></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about_fifth">
                <div className="container">
                    <div className="about_center">
                        <h4 className="h4">About us</h4>
                        <h2 className="h2 white">What We Offer for You</h2>
                    </div>
                    <div className="about_products">
                        <div className="about_product">
                            <div className="about_product_img">
                                <img src="/spicy.png"></img>
                            </div>
                            <div className="about_product_name">
                                <h2>Spicy</h2>
                            </div>
                        </div>
                        <div className="about_product">
                            <div className="about_product_img">
                                <img src="/nuts.png"></img>
                            </div>
                            <div className="about_product_name">
                                <h2>Nuts & Feesd</h2>
                            </div>
                        </div>
                        <div className="about_product">
                            <div className="about_product_img">
                                <img src="/fruits.png"></img>
                            </div>
                            <div className="about_product_name">
                                <h2>Fruits</h2>
                            </div>
                        </div>
                        <div className="about_product">
                            <div className="about_product_img">
                                <img src="/vegetable.png"></img>
                            </div>
                            <div className="about_product_name">
                                <h2>Vegetable</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About