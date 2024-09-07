import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VedioCard'
import { getAllVideoAPI } from '../services/allAPI'

const View = ({uploadVideoResponse}) => {
  const [deleteVideoResponse,setDeleteVideoResponse] = useState("")
  const [allVideos,setAllVideos] = useState([])
  
  useEffect(()=>{
    getAllVideos()
  },[uploadVideoResponse,deleteVideoResponse])

  const getAllVideos = async ()=>{
    const result = await getAllVideoAPI()
    console.log(result);
    if(result.status>=200 && result.status<300){
      setAllVideos(result.data)
    }
  }
  console.log(allVideos);
  

  return (
    <>

      <Row>
        {
        allVideos?.map(video=>(  
        <Col key={video?.id} className='mb-4' sm={12} md={6} lg={4}>
        <VideoCard setDeleteVideoResponse={setDeleteVideoResponse} displayData={video}/>
        </Col>))
        }
      </Row>
      
    </>
  )
}

export default View