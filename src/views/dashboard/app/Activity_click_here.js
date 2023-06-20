import { useState, useRef, useEffect } from "react"
import ClientDetails from "./ClientDetails"
import Dates from "./Dates"
import Footer from "./Footer"
import { Api } from '../constant/constant';
import axios from "axios"

import avatars2 from '../../../assets/images/avatars/02.png'
import FileBase from "react-file-base64";
import { useHistory, useParams } from "react-router-dom"
import { Row, Col, Image, Form, Nav,Button, Dropdown, Tab, Accordion,FormControl, InputGroup, NavDropdown } from "react-bootstrap";
import Card from '../../../components/Card'
import FsLightbox from "fslightbox-react";


import Header from "./Header"
import MainDetails from "./MainDetails"
import Notes from "./Notes"
import Table from "./Table"
import TableForm from "./TableForm"
import ReactToPrint from "react-to-print"
import styled from 'styled-components';
import Profile_Picture from "./Profile_Picture";
import jsPDF from "jspdf"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [data1, setData1] = useState([]);
    const [data, setData] = useState([]);
 
  const [ship_to__address, setShip_to__address] = useState('')
  const [ship_to__attn, setShip_to__attn] = useState('')
  const [name, setName] = useState("")
  const [fax, setfax] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [bankName, setBankName] = useState("")
  const [bankAccount, setBankAccount] = useState("")
  const [website, setWebsite] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")
  const [description, setDescription] = useState("")
  const [heading, setHeading] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [company, setCompany] = useState('')
const navigate=useHistory()
const params=useParams()
  const [l_address, setL_address] = useState('')
  const [l_payment_terms, setL_payment_terms] = useState('')
  const [l_shipping_terms, setL_shipping_terms] = useState('')
  const [l_currency, setL_currency] = useState('')
  const [l_contract, setL_contract] = useState('')
  const [l_contact, setL_contact] = useState('')
  const [l_bill_to_address, setL_bill_to_address] = useState('')
 
  const [l_bill_to_attn, setL_bill_to_attn] = useState('')
  const [l__bill_to_state, setL__bill_to_state] = useState('')
  const [amount, setAmount] = useState("")
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  const [width] = useState(641)

  const componentRef = useRef()
  const inputhandeler = (e) => { setsendpo({ ...sendpo, [e.target.name]: e.target.value }) }


  const handleattachments = (e) => {
     console.log(e.target.files[0])
     setsendpo({ ...sendpo, file: e.target.files[0] })
     console.log("==", sendpo.file, "===", sendpo.file.name)
  };
  const handlePrint = () => {
    window.print()
  }

  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  useEffect(() => {
    if (window.innerWidth < width) {
      alert("Place your phone in landscape mode for the best experience")
    }
  }, [width])
  const getproducts = async () => {
    let result = await fetch(`${Api}/userRFQ/view/${params.id}`);
    result = await result.json();
    setData(result);
 
 
   console.log("This is to ", data.map(user => user.to))
 };
 useEffect(() => {
    getproducts()
 }, [ ])
 const [sendpo, setsendpo] = useState({
    file: '',
    body: '',
    to:  data.map(user => user.to),
    subject: '',
    userid: params.id,
 })
  const goback = () => {}
  const sendEmail = async () => {
 
          const formdata = new FormData()
          formdata.append('file', sendpo.file, sendpo.file.name)
          formdata.append('to',  data.map(user => user.to))
    
          const result = await axios.post(`${Api}/pofinal`, formdata)
    
          const result12 = await fetch(`${Api}/attachments`, {
            method: "post",
            body: JSON.stringify({
                title:"PO has been sent to the Vendor!",
                userid:params.id,
              
                Dates
            }),
            headers: { "Content-Type": "application/json" },
          });
          if (result.status == 200) {
             alert("Email sent to the Vendor!")
             navigate.push(`/dashboard/app/user-profile/${params.id}`)
              }
    
          console.warn(result);
       };

    const pdfGenerator = () => {
    setShow1(true)
    setShow2(false)
    const doc = new jsPDF()
    doc.html(document.querySelector("#print"), {
        callback: function (pdf) {
           
             pdf.save("mypdf")


           
           


        },
        x: 28,
        y: 5,
        width: 180,
        windowWidth: 1000
    });
    // navigate.push(`/dashboard/app/UserProfile2/${params.id}`)
}

 
const [show1, setShow1] = useState(true)
const [show2, setShow2] = useState(true)
 
  const [toggler, setToggler] = useState(false);
  return (
    <>

      <>
        <FsLightbox
          toggler={toggler}
        />
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col lg="12">
              <Card>
{show1?

<>
                <br/>
              <div className="col-md-12">
 
              <br/>
                        <h3  >Send it to the Vendor  </h3>
 
              <br/>
                      
                        </div>




                        <Card>
                              <Card.Body>
                                    <div class="file-upload-wrapper">

                                       {/* <Form.Control type="file" id="customFile1" onChange={handleattachments} name="file" /> */}

                                     
                                     
                                  

                                       <Form.Group>
                                          <Form.Label className="custom-file-input"> Add file</Form.Label>
                                          <Form.Control type="file" id="customFile1" onChange={handleattachments} name="file" />
                                       </Form.Group>

                                    </div>
                                    <br />

                                    <Button variant="btn btn-primary" type="button" onClick={sendEmail}>Send to Vendor</Button>{' '}


                                 
                                 </Card.Body>
                              </Card>
                        
                                         
                      
                        </>:null}
              </Card>
            </Col>
 


          </Row>
        </Tab.Container>
        <ToastContainer/>
      </>


    </>
  )
}

export default App


const CSS = styled.div`
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url("https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400;700&display=swap");

:root {
  --blue-card: #12036f;
  --red-card: #f12711;
  --yellow-card: #f5af19;
}

::selection,
::-moz-selection {
  @apply bg-teal-500 text-white;
}

::-webkit-scrollbar {
  @apply w-3;
}

::-webkit-scrollbar-track {
  @apply shadow rounded-lg bg-teal-100;
}

::-webkit-scrollbar-thumb {
  @apply bg-teal-400 rounded-lg hover:bg-teal-500 transition-all duration-200;
}

.beta__tag {
  position: absolute;
  left: -6rem;
  top: 2rem;
  background-color: #f12711;
  width: 300px;
  transform: rotate(-45deg);
  padding: 0.5rem;
  text-align: center;
}

body {
  margin: 0;
  font-family: "Reem Kufi", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  @apply bg-teal-50 overflow-x-hidden;
}

.max-width {
  @apply px-5 xl:max-w-7xl xl:mx-auto 2xl:px-0;
}

.slant {
  border-right: 100vw solid #99f6e4;
  border-top: 150px solid transparent;
}

.slant-left {
  border-right: 100vw solid;
  @apply border-r-teal-200;
  border-bottom: 150px solid transparent;
}

.slant-footer {
  border-left: 100vw solid;
  @apply border-l-teal-900;
  border-top: 150px solid transparent;
  @apply absolute;
  top: -150px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #112827;
}

label {
  margin-bottom: 0.3rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: #383838;
}

input,
textarea {
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 0.2rem;
  margin-bottom: 2rem;
  color: #616161;
  border: 2px solid hsl(217, 91%, 60%, 30%);
  outline: none;
}

input:focus,
textarea:focus {
  border: 2px solid hsl(217, 91%, 60%);
}

button {
  user-select: none;
}

.footer li {
  margin: 0.5rem 0.2rem;
}

.navbar {
  position: absolute;
  left: 20px;
  top: -100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  width: calc(100vw - 45px);
  transition: top 0.4s ease-in-out;
  @apply shadow shadow-teal-500;
}

.navbar.open {
  top: 80px;
}

.navbar ul li {
  margin: 1rem 0;
}

.home {
  background-image: linear-gradient(90deg, #f12711 0%, #f5af19 100%);
}

.video {
  width: calc(100vw - 40px);
  margin: auto;
  height: 200px;
}

.testimonials .article:first-child {
  border-color: var(--red-card);
}

.testimonials .article:first-child .content {
  background-color: var(--red-card);
  padding: 1rem;
}

.testimonials .article:nth-child(2) {
  border-color: var(--yellow-card);
}

.testimonials .article:nth-child(2) .content {
  background-color: var(--yellow-card);
  padding: 1rem;
}

.testimonials .article:nth-child(3) {
  border-color: var(--blue-card);
}

.testimonials .article:nth-child(3) .content {
  background-color: var(--blue-card);
  padding: 1rem;
}

.call__to__action {
  background-image: linear-gradient(90deg, #f5af19 0%, #f12711 100%);
}

.about {
  background-image: linear-gradient(90deg, #f12711 0%, #f5af19 100%);
  padding: 2rem 0;
}

.contact__form input,
.contact__form textarea,
.contact__form button {
  width: calc(100vw - 40px);
}

.invoice__preview {
  margin-top: 1.25rem;
}

@media (min-width: 500px) {
  .video {
    height: 300px;
    width: calc(100vw - 60px);
  }
}

@media (min-width: 640px) {
  .video {
    height: 400px;
  }
}

@media (min-width: 768px) {
  .about .overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .contact__form input,
  .contact__form textarea,
  .contact__form button {
    width: calc(50vw - 40px);
  }
}

@media (min-width: 1024px) {
  .navbar {
    position: relative;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0;
    background-color: transparent;
    box-shadow: none;
  }

  .navbar ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar ul li {
    margin: 0 10px;
  }

  .home .overlay {
    height: calc(80vh - 10px);
  }

  .video {
    width: calc(80vw - 100px);
    height: 600px;
  }

  .slant {
    border-top-width: 200px;
  }

  .slant-left {
    border-bottom-width: 200px;
  }

  .slant-footer {
    border-top-width: 200px;
    top: -200px;
  }
}

@media (min-width: 1280px) {
  .invoice__preview {
    transform: scale(0.8);
    position: sticky;
    right: 0;
    top: 0;
    margin-top: -6rem;
    margin-bottom: 2rem;
  }
}

`
