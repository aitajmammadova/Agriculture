import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import React from "react"
function Blog_single() {
    const {id}=useParams();
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:1313/blog-singles/${id}`)
        .then((a)=>a.json ())
        .then((a)=> setData(a))
    },[])
  
    console.log(data)

  return (
    <>
     
        <section className="blog_single_first position">
            <img src={data.image}/>
            <div className ="blog_single_prds">
                <div className ="blog_single_prd">
                    <div className="blog_single_info">
                        <h3>Posted On: <span className="p"> January 6, 2022</span></h3>
                        <div className="flex">
                            <i className="fa-solid fa-user"></i>
                            <p className="p">{data.farmer}</p>
                        </div>
                    </div>
                    <div className="blog_research">
                        <h2 className="h2">{data.header}</h2>
                        <p className="p">Established fact that a reader will be distracted by the readable content of a page when
                            looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                            of letters, as opposed</p>
                    </div>
                </div>
            </div>
        </section>
    

     <section className="blog_empty"></section>
    <section className="blog_single_second">
        <div className="blog_single_container">
            <p className="p">Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than
            friction technology.</p>
            <h2>Preferred Form of Vitamin D?</h2>
            <p className="p">t is a long established fact that a reader will be distracted by the readable content of a page
                when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters, as opposed to using 'Content here, content here', making it look like readable English.
                <br></br></p>
            <ul className="blog_single_ul_circle">
                <li className="p">Publishing packages and web pageLorem Ipsum as their default</li>
                <li className="p">Content here, content here', making it look like readable</li>
                <li className="p">Packages and web pageLorem Ipsum as their default</li>
            </ul>
            <div className="blog_single_div">
                <h3>“The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the
                efficiency. The second is that organic applied to an inefficient operation will magnify the health.”</h3>
            </div>
            <h2>Make perfect organic product with us</h2>
            <p className="p">t is a long established fact that a reader will be distracted by the readable content of a page
                when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters, as opposed to using 'Content here, content here', making it look like readable English.
                <br></br></p >
    <ol className="blog_single_ol_order">
      <li className="p">Publishing packages and web pageLorem Ipsum as their default</li>
      <li className="p">Content here, content here', making it look like readable</li>
      <li className="p">Packages and web pageLorem Ipsum as their default</li>
      <li className="p">more-or-less normal distribution of letters</li>
    </ol>
             
        </div >
    </section >
    </>
  )
}

export default Blog_single