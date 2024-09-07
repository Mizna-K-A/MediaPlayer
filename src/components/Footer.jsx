import React from 'react'

const Footer = () => {
  return (
    <div style={{height:'300px'}} className='container-fluid mt-5 w-100'>
      <div className='d-flex justify-content-center'>
        <div className="intro  m-2">
          <h5><i className="fa-solid fa-music me-3"></i>
          Media Player</h5>
          <p>Design and build with all the love in the world by <br /> the luminar team with the help of our contributors.</p>
          <p>Code licensed Luminar, docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>
        <div className="links  m-2">
          <h5>Links</h5>
          <a className='footerlink'>Landing Pages</a>
          <a className='footerlink'>Home Pages</a>
          <a className='footerlink'>Watch History Pages</a>
        </div>
        <div className="guides  m-2">
          <h5>Guides</h5>
          <p>React</p>
          <p>React Bootstrap</p>
          <p>React Router</p>
        </div>
        <div className="contact m-2">
          <h5>Contact Us</h5>
          <div className='d-flex'>
            <input type="text" className='form-control' placeholder='Enter your email here'/>
            <button className='bg-info rounded p-1'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='d-flex flex-row justify-content-evenly mt-4'>
            <i class="fa-brands fa-github me-2 fs-4"></i>
            <i class="fa-brands fa-instagram me-2 fs-4"></i>
            <i class="fa-brands fa-facebook me-2 fs-4"></i>
            <i class="fa-brands fa-whatsapp me-2 fs-4"></i>
          </div>
        </div>
      </div>
      <p className='text-center mt-3'>Copyright &copy; may 2024 Batch,Media Player.Built with React</p>   
      </div>
  )
}

export default Footer