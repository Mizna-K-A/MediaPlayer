import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../components/Add'
import View from '../components/View'
import Categories from '../components/Categories'

const Home = () => {
  const [uploadVideoResponse,setUploadVideoResponse] = useState("")
  return (
    <div style={{paddingTop:'100px'}}>
      <div className="container d-flex justify-content-between">
          <Add setUploadVideoResponse={setUploadVideoResponse}/>
          <Link to={'/history'}>Watch History</Link>
      </div>
      <div className="container-fuild row my-5">
        <div className="col-lg-6">
          <h3>All Videos</h3>
          <View uploadVideoResponse={uploadVideoResponse}/>
        </div>
        <div className="col-lg-6">
          <Categories/>
        </div>
      </div>
    </div>
  )
}

export default Home