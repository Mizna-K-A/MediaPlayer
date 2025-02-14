import React, { useState } from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadVideoAPI } from '../services/allAPI';

const Add = ({setUploadVideoResponse}) => {
  const [InvalidLink,setInvalidLink] = useState(false)
  const [videoDetails,setVideoDetails] = useState({
    caption:"",url:"",link:""
  })

  console.log(videoDetails);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedURL = (link) =>{
      if(link.includes("v=")){
        let videoId = link.split("v=")[1].slice(0,11)
        console.log(videoId);
        setVideoDetails({...videoDetails,link:`https://www.youtube.com/embed/${videoId}`})
        setInvalidLink(false)
      }else{
        console.log("Invalid Url");
        setInvalidLink(true)
        setVideoDetails({...videoDetails,links:""})
        
      }
  }
  const handleUpload = async ()=>{
    console.log("inside handleUpload");
    const {caption,url,link} = videoDetails
    if(caption && url && link){
      // toast.warning("Proceed to api") 
      const result = await uploadVideoAPI(videoDetails)
      console.log(result);
      if(result.status>=200 && result.status<300){
        // upload success
        handleClose() // to close modal
        setVideoDetails({...videoDetails,caption:"",url:"",link:""})
        toast.success(`${result.data.caption} added to your collection!!!`)
        setUploadVideoResponse(result)
      }
    }else{
      toast.warning("Please fill the form completely!!")
    }
   }

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className="btn btn-warning ms-3 rounded-circle fw-bolder fs-5">+</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <div className="border rounded p-3">
            
            <FloatingLabel
              controlId="floatingInputCaption"
              label="Video Caption" className="mb-3">
              <Form.Control onChange={e=>setVideoDetails({...videoDetails, caption:e.target.value})} type="text" placeholder="Video Caption" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputImage"
              label="Image URL" className="mb-3">
              <Form.Control onChange={e=>setVideoDetails({...videoDetails, url:e.target.value})} type="text" placeholder="Image URL" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputLink"
              label="Youtube Video Link" className="mb-3">
              <Form.Control onChange={e=>getEmbedURL(e.target.value)} type="text" placeholder="Youtube Video Link" />
            </FloatingLabel>
            {
              InvalidLink && 
              <div className="text-danger fw-bolder mt-3">Invaild Youtube Link</div>
            }

          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default Add