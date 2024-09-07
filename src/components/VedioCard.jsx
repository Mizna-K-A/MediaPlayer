import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import { removeVideoAPI, storeHistoryAPI } from '../services/allAPI';

const VideoCard = ({ displayData,setDeleteVideoResponse }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    
    // save history in json server
    const { caption, link } = displayData;

    // get date & time of watching the video
    const sysTime = new Date();
    const timeStamp = sysTime.toLocaleString('en-US', { timeZoneName: 'short' });
    console.log(timeStamp);
    const videoDetails = { caption, link, timeStamp };
    await storeHistoryAPI(videoDetails);
  };
  const removeVideo = async (videoId)=>{
    const result = await removeVideoAPI(videoId)
    // pass response to view component
    setDeleteVideoResponse(result?.data)
  }
  return (
    <>
      <Card>
        <Card.Img onClick={handleShow} variant="top" height={"200px"} src={displayData?.url} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between'>
            <p className='fs-5'>{displayData?.caption}</p>
            <button onClick={()=>removeVideo(displayData?.id)} className='btn'><i className='fa-solid fa-trash text-danger'> </i></button>
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="480" src={`${displayData?.link}?autoplay=1`} title={displayData?.caption} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
          </iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoCard;