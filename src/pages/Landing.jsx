import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/gif.gif'
import { Card } from 'react-bootstrap'
import featuresImg1 from '../assets/piano.jpg'
import featuresImg2 from '../assets/violin.jpg'
import featuresImg3 from '../assets/guitar.jpeg'



const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='ms-5 me-5'>
        {/* landing */}
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1>Welcom to <span className='text-warning'>Media Player</span></h1>
            <p style={{textAlign:'justify'}} className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos rem fugiat ea deserunt consequuntur aspernatur, corrupti quibusdam sed quasi accusantium possimus magnam beatae expedita voluptatum laborum laboriosam eum corporis obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nihil adipisci non eos voluptatem dicta tempore quia facere harum perferendis neque facilis id illo, ducimus accusantium molestias. Laudantium, inventore incidunt?</p>
            <Link to={'/home'} className='btn btn-info'>Get Start</Link>
          </div>
          <div className="col-lg-6">
            <img style={{width:'100%',height:'70vh'}} className='mt-5' src={landingImg} alt="landing image" />
          </div>
        </div>
        {/* features */}
        <div>
          <h1 className='text-center mt-5'>Features</h1>
          <div className="row mt-3">
            <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={featuresImg1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
            <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={featuresImg2} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
            <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={featuresImg3} height={'286,55px'}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
          </div>
        </div>
        {/* links */}
        <div className="container-fluid mt-5">
          <div className="row p-5 border rounded w-100">
            <div className="col-6">
                <h2 className='text-warning'>Simple,fast,powerful</h2>
                <p><h4>Sunt voluptas :</h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas in neque hic! Eligendi distinctio, cum alias, aperiam qui minus quas nobis, magni modi minima labore corrupti quo quaerat laboriosam.</p>
                <p><h4>Sunt voluptas :</h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas in neque hic! Eligendi distinctio, cum alias, aperiam qui minus quas nobis, magni modi minima labore corrupti quo quaerat laboriosam.</p>
                <p><h4>Sunt voluptas :</h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas in neque hic! Eligendi distinctio, cum alias, aperiam qui minus quas nobis, magni modi minima labore corrupti quo quaerat laboriosam.</p>
            </div>
            <div className="col-6">
            <iframe width="600" height="480" src="https://www.youtube.com/embed/qSu6i2iFMO0" title="Sonic the Hedgehog 3 | Official Trailer (2024 Movie) Ben Schwartz, Jim Carrey, Keanu Reeves" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Landing