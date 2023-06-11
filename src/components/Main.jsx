import React from 'react'
import { BsClockFill} from 'react-icons/bs';
import { FaAddressCard} from 'react-icons/fa';
import { AiFillAmazonSquare} from 'react-icons/ai';



const Main = () => {
  return (
    <div >
      <div className="container col-xxl-10 px-4 py-5" style={{marginTop:"60px"}}>
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

      <div className="col-10 col-sm-8 col-lg-4">
        <img src="https://onpointfresh.com/wp-content/uploads/2017/04/Mens-Summer-Fashion..png" 
        className="d-block mx-4 img-fluid rounded shadow" alt="Bootstrap Themes" width="900" height="600" loading="lazy" />
      </div>

      <div className="col-lg-8">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">The Style Club.</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" fdprocessedid="47pw37">Primary</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4" fdprocessedid="93pflo">Default</button>
        </div>
      </div>

    </div>
  </div>

  
  
  <div className="container px-4 py-5" id="featured-3">
    <h2 className="pb-2 border-bottom">Columns with icons</h2>

    <div className="row g-4 py-5 ps-lg-5 row-cols-1 row-cols-lg-3">

      <div className="feature col-lg-4">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
           <BsClockFill size={50} style={{padding:"5px"}}/>
        </div>
        <h3 className="fs-2 text-body-emphasis">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>       
      </div>

      <div className="feature col-lg-4">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
         <FaAddressCard size={50} style={{padding:"5px"}}/>
        </div>
        <h3 className="fs-2 text-body-emphasis">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
      </div>

      <div className="feature col-lg-4">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <AiFillAmazonSquare size={50} style={{padding:"5px"}}/>
        </div>
        <h3 className="fs-2 text-body-emphasis">Featured title</h3>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
       
      </div>
    </div>
  </div>

    </div>
  )
}

export default Main