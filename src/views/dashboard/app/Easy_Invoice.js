import Card from '../../../components/Card'
import avatars11 from '../../../assets/images/avatars/01.png'
import avatars22 from '../../../assets/images/avatars/avtar_1.png'
import avatars33 from '../../../assets/images/avatars/avtar_2.png'
import avatars44 from '../../../assets/images/avatars/avtar_3.png'
import avatars55 from '../../../assets/images/avatars/avtar_4.png'
import avatars66 from '../../../assets/images/avatars/avtar_5.png'
import avatars2 from '../../../assets/images/avatars/02.png'
import avatars3 from '../../../assets/images/avatars/03.png'
import avatars4 from '../../../assets/images/avatars/04.png'
import avatars5 from '../../../assets/images/avatars/05.png'
import chopp from '../../../assets/images/avatars/av.jpg'
import icon1 from '../../../assets/images/icons/01.png'
import icon2 from '../../../assets/images/icons/02.png'
import icon3 from '../../../assets/images/icons/03.png'
import icon4 from '../../../assets/images/icons/04.png'
import icon8 from '../../../assets/images/icons/08.png'
import icon6 from '../../../assets/images/icons/06.png'
import icon7 from '../../../assets/images/icons/07.png'
import icon5 from '../../../assets/images/icons/05.png'
import shap2 from '../../../assets/images/shapes/02.png'
import shap4 from '../../../assets/images/shapes/04.png'
import shap6 from '../../../assets/images/shapes/06.png'
import pages2 from '../../../assets/images/pages/02-page.png'
import ShareOffcanvas from '../../../components/partials/components/shareoffcanvas'
import React, { useEffect, useState, useRef } from "react";
import FileBase from "react-file-base64";

import FsLightbox from "fslightbox-react";
import { allUsersRoute, host } from "../utils/APIRoutes";
import axios from "axios";
import { jsPDF } from "jspdf";
import Base64Downloader from 'react-base64-downloader';
import { Api } from '../constant/constant';

import { io } from "socket.io-client";
import styled from "styled-components";
import { Row, Col, Image, Form, Nav, Dropdown, Tab } from "react-bootstrap";
import { useHistory, Link, useParams, useLocation } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import ChatContainer from "../MessagesForAdmin.js/ComponentsForAdmin";
import Contacts from "../MessagesForAdmin.js/Contacts";
import Welcome from "../MessagesForAdmin.js/Welcome";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserProfile = () => {

    useEffect(() => {
        updateproduct()
        getproducts()

    },  [] )

    const scrollRef = useRef();
    const navigate = useHistory();
    const socket = useRef();
    const params = useParams();
    const [name, setname] = useState('')
    const [data, setdata] = useState([])
    const [toggler, setToggler] = useState(false);

    const deleteproduct = async (id) => {
        let result = await fetch(`${Api}MASapplicationStandard/${id} `, {
          method: "Delete",});
        result = await result.json();
        if (result) { getproducts(); }
      };

      const updateproduct = async ( ) => {
        console.warn(params);
    let result = await fetch(`${Api}MASapplicationStandard/${params.id}`);
    result = await result.json();
    setname( result.name );
      };

    const getproducts = async () => {
        let result = await fetch(`${Api}MASapplicationStandard`);
        result = await result.json();
        setdata(result)
    };

    const handleSubmit = async () => {
        const result = fetch(`${Api}/poattachments/asa`, {
            method: "POST",
            body: JSON.stringify({ name }),
            headers: { "Content-Type": "Application/json" },
        });
        if (result) {
            setname('')
            toast.info("Updated Succesfully!");
       
        }
    };
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));

    useEffect(async () => {if(! localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) navigate.push('/auth/sign-in') }, []);
    useEffect(() => {
      if(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)){
          if (user.username==="Admin1") {navigate.push('/approver')}
          else if(user.username!=="Admin"){navigate.push('/ath')}
      }
      else{
        navigate.push('/auth/sign-in')}},[])

    return (
        <>
            <FsLightbox
                toggler={toggler}
                sources={[icon4, shap2, icon8, shap4, icon2, shap6, icon5, shap4, icon1]}
            />
            <Tab.Container defaultActiveKey="first">
                <Row>
                    <Col lg="12">
                        <Card>
                            <Card.Body>
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
                                            <Image className="theme-color-default-img  img-fluid rounded-pill avatar-100" src={avatars11} alt="profile-pic" />
                                            <Image className="theme-color-purple-img img-fluid rounded-pill avatar-100" src={avatars22} alt="profile-pic" />
                                            <Image className="theme-color-blue-img img-fluid rounded-pill avatar-100" src={avatars33} alt="profile-pic" />
                                            <Image className="theme-color-green-img img-fluid rounded-pill avatar-100" src={avatars55} alt="profile-pic" />
                                            <Image className="theme-color-yellow-img img-fluid rounded-pill avatar-100" src={avatars66} alt="profile-pic" />
                                            <Image className="theme-color-pink-img img-fluid rounded-pill avatar-100" src={avatars44} alt="profile-pic" />
                                        </div>
                                        <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">

                                            <h4 className="me-2 h4"> </h4>



                                            <span> -  </span>
                                        </div>
                                    </div>
                                    
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="3" className="col-lg-3">
                        <Card>
                            <Card.Header>
                                <div className="header-title">
                                    <h4 className="card-title">Form</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <ul className="list-inline m-0 p-0">
                                    <li className="d-flex mb-2">
                                    </li>
                                </ul>
                                <Form.Group className="form-group">
                                    <Form.Label className="custom-file-input">Name</Form.Label>
                                    <Form.Control type="text" id="customFile" value={name} onChange={(e) => { setname(e.target.value); }}/>
                                </Form.Group>
                                <Button variant="btn btn-primary" onClick={handleSubmit}>Update</Button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>

                 
                  
                </Row>
            </Tab.Container>
            <ToastContainer/>
        </>
    )
}

export default UserProfile;


const Container = styled.div`
  height: 70vh;
  width: 35vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.1rem;
  align-items: center;
  background-color:  white;
  .container {
    height: 65vh;
    width: 40vw;
    background-color: ;
    display: grid;
    grid-template-columns: 96%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;



 