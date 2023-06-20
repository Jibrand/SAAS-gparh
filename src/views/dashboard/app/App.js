import { useState, useRef, useEffect } from "react"
import ClientDetails from "./ClientDetails"
import Dates from "./Dates"
import Footer from "./Footer"
import { Api } from '../constant/constant';

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
  const [ship_to__state, setShip_to__state] = useState('')
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
  const [postData, setPostData] = useState({
    Regulatory_Model_Name: "",
    Product_Name: "",
    Regulatory_Family: "",
    Product_Category: "BATT",
    Product_Description: "",
    Model_Difference: "",
    Household: "",
    Commercial: "",
    Clinical: "",
    Applicable_Standards: "IEC 60086-1:2015",
    Applicant_Name_and_Address: "",
    Manufacturer_Name_and_Address: "",
    TradeMark: "",
    Family: "",
    Market: "Africa",

    Overall_Size_of_Equipment: "",
    WebGLShader: "mm",
    Voltage: "",
    Phase: "",
    Frequency: "",
    Power: "",
    Current: "",
    Operation_Mode: "",
    Ordinary_person: "",
    Children_likely_present: "",
    Instructed_person: "",
    Skilled_person: "",
    AC_mains: "",
    DC_mains: "",
    Battery_Powered: "",
    Skilled_person: "",

    Non_detachable_Supply_Cord: "",
    Appliance_Coupler: "",
    Direct_plug_in: "",
    Non_detachable_Supply_Cord_B: "",
    Appliance_Coupler_B: "",

    Permanent_connection: "",
    Mating_connector: "",
    Movable: "",
    Transportable: "",
    Stationary_for_building_in: "",
    Wall_ceiling_mounted_SRME_rack_mounted: "",
    Hand_held: "",
    Other: "",

    Pollution_Degree: "",
    Manufacturer_Specific_Max_Operating_Ambient: "",
    Ingree_Protection_Classification: "",
    Altitude_During_Operation: "",
    Mass_Of_Equipment: "",
    Relative_Humidity: "",
    Atmospheric_Pressure: "",
    Indoor: "",
    Outdoor: "",

    Copy_of_Marking_Plate: "",
    WarningOrCautionary_Marking: "",
    Fuse_Type: "",
    Fuse_Marking: "",

    //complaince report
    Report_Number: "No Option",
  });
  const [l_bill_to_attn, setL_bill_to_attn] = useState('')
  const [l__bill_to_state, setL__bill_to_state] = useState('')
  const [amount, setAmount] = useState("")
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  const [width] = useState(641)

  const componentRef = useRef()

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
const [postemail, setpostemail] = useState({
  id: params.id,
  file: '',
  status:'Not Approved',
  color:'bg-warning'
})
const handleemail = async (e) => {
  e.preventDefault();
  const result =  await fetch(`${Api}/attachmentforapprover/sendapprover`, {
      method: "post",
      body: JSON.stringify(postemail),
      headers: { "Content-Type": "application/json" },
  });
 

  if (result) {
      toast.info("Attachment added Succesfully!");
navigate.push(`/dashboard/app/user-profile/${params.id}`)

  }
  console.warn(result);
};
const [show1, setShow1] = useState(false)
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
                        <label htmlFor="name">Send for the Approver  </label>
                      
                        </div>
                
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setpostemail({ ...postemail, file: base64 })} />
                        <button      onClick={handleemail} className="bg-blue-500 ml-5 text-black font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                             Send 
                            </button>
                      
                        </>:null}
              </Card>
            </Col>
           
{show2?
            <>
            
            <Col lg="12" className="col-lg-3">
            <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Purchase Order</h4>
                                </div>
                                <Button type="submit" onClick={pdfGenerator}  variant="btn btn-primary"> Print / Download </Button>{' '}

                            
                           
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                <div style={{"border": "1px solid black"}}> 
                                <h6> Logo:</h6>
                                    <Row>
                                    <Col>
                                    <Form.Control type="file"      onChange={handleChange}/>
                                    </Col>
                                    </Row>
                                    </div>
<br/>
                                    <Row>




                                        <Col>
                                        <Form.Control type="text"  placeholder="Company" value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                 />
                                        </Col>
                                        <Col>
                                        <Form.Control type="text"  placeholder="Address"   value={name}
                                    onChange={(e) => setName(e.target.value)}
                                 />
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col>
                                        <Form.Control type="text"  placeholder="Attn"   value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                 />
                                        </Col>
                                        <Col>
                                        <Form.Control type="number"  placeholder="Phone  "   value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                 />
                                        </Col>
                                        <Col>
                                        <Form.Control type="number"  placeholder="Fax  "   v   value={fax}
                                    onChange={(e) => setfax(e.target.value)}
                                 
                                 />
                                        </Col>
                                        <Col>
                                        <Form.Control type="text"  placeholder="Payment Terms  "  value={l_payment_terms}
                                      onChange={(e) => setL_payment_terms(e.target.value)}
                                   />
                                        </Col>
                                        <Col>
                                        <Form.Control type="text"  placeholder="Shipping Terms  "   value={l_shipping_terms}
                                      onChange={(e) => setL_shipping_terms(e.target.value)}
                                   />
                                        </Col>
                                    </Row>
                                     <br/>
                                    <Row>
                                        <Col>
                                        <Form.Control type="text"  placeholder="Currency"   value={l_currency}
                                      onChange={(e) => setL_currency(e.target.value)}
                                    />
                                        </Col>
                                        <Col>
                                        <Form.Control type="text"  placeholder="Contact"    value={l_contact}
                                      onChange={(e) => setL_contact(e.target.value)}
                                   
                                    />
                                        </Col>
                                        <Col>
                                        <Form.Control type="number"  placeholder="Contract  "  value={l_contract}
                                      onChange={(e) => setL_contract(e.target.value)}
                                   />
                                        </Col>
                                        <Col>
                                        <Form.Control as="textarea" placeholder="Additional Notes to the Client "   value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
                                        </Col>
                                 
                                    </Row>
                               
                                    <Row>
                                        <Col>
                                        <p>Invoice Date</p>
                                        <Form.Control type="date"  placeholder="Invoice Date"     value={invoiceDate}
                                    onChange={(e) => setInvoiceDate(e.target.value)}
                                 />
                                        </Col>
                                        <Col>
                                        <p>Due Date</p>
                                        <Form.Control type="date"  placeholder="Due Date "   value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                 />
                                        </Col>
                                        <Col>
                                        </Col>
                                       <br/>
                                       <br/>
                         
                                    </Row>
                                    <br/>
                                    <Row>
                                        <h5>Ship to:</h5>
                                        <p></p>
                                    <br/>

                                        <Col>
                                        <Form.Control as="textarea" placeholder="Ship to Address "   value={ship_to__address}
                                    onChange={(e) => setShip_to__address(e.target.value)}
                                 />
                                        </Col>
                                        <Col>
                           
                                        <Form.Control type="text"  placeholder="Ship to Attn"   value={ship_to__attn}
                                    onChange={(e) => setShip_to__attn(e.target.value)}
                                 />
                                        </Col>
                                        <Col>
                                        <Form.Control type="text"  placeholder="Ship to State"   value={ship_to__state}
                                    onChange={(e) => setShip_to__state(e.target.value)}
                                  />

                                        </Col>
                                       
                               
                                    </Row>
                                    <br/>
                                    <Row>
                                        <h5>Bill to:</h5>
                                        <p></p>
                                    <br/>

                                        <Col>
                                        <Form.Control as="textarea" placeholder="Bill to Address "   value={l_bill_to_address}
                                      onChange={(e) => setL_bill_to_address(e.target.value)}
                                   />
                                        </Col>
                                        <Col>
                           
                                        <Form.Control type="text"  placeholder="Bill to Attn"   value={l_bill_to_attn}
                                      onChange={(e) => setL_bill_to_attn(e.target.value)}
                                   />
                                        </Col>
                                        <Col>
                                        <Form.Control type="text"  placeholder="Bill to State"   value={l__bill_to_state}
                                      onChange={(e) => setL__bill_to_state(e.target.value)}
                                    />

                                        </Col>
                                       
                               
                                    </Row>
                                    <br/>
                               
                                </Form>
                                    <article>
                                <TableForm
                                  heading={heading}
                                  setHeading={setHeading}
                                  description={description}
                                  setDescription={setDescription}
                                  quantity={quantity}
                                  setQuantity={setQuantity}
                                  price={price}
                                  setPrice={setPrice}
                                  amount={amount}
                                  setAmount={setAmount}
                                  list={list}
                                  setList={setList}
                                  total={total}
                                  setTotal={setTotal}
                                />
                              </article>

                            </Card.Body>
                        </Card>
               

                
            

                  <div className="comment-area p-3">



              

                    <hr />

                  </div>
         


            </Col>
           
<Accordion defaultActiveKey="0" c>
 
 
    <Accordion.Item eventKey="2">
        <Accordion.Header>View</Accordion.Header>
        <Accordion.Body>
        <Col lg="12">
    
              <Tab.Content className="profile-content">
                <Tab.Pane eventKey="first" id="profile-feed">
                  <Card>

                    <Card.Body className=" ">





                      <div className="invoice__preview bg-white   rounded">
                       
                    
                     
                        
                      
                  
                   
                        <div ref={componentRef} className="p-5" id="print">

                          <div className="row">
                            <div className="col-x-12">
                              <br />
                              <br />

                              <div className="row">
                                <div className="col-xl">
                               
                                  <Image className=" img-fluid  rounded-pill avatar-80"src={file}  alt="profile-pic" />
                                  <br />
                                  <br />
                                  <h5>  <b>   {company} </b> </h5><span style={{ color: "#84B0CA" }}></span>
                                  <br />
                                  <ul className="list-unstyled">
                            
                                      <li contenteditable="true" className="text-muted">
                                       {name} 
                                        <span style={{ color: "#84B0CA" }}></span>
                                      </li>
                                      <li contenteditable="true" className="text-muted">
                                        {/* address */}
                                        Attn: <span style={{ color: "#84B0CA" }}>{address}</span>
                                      </li>
                                      <li contenteditable="true" className="text-muted">
                                      Phone: <span style={{ color: "#84B0CA" }}>{website}</span>

                                      </li>
                                    
                                    <li contenteditable="true" className="text-muted">
                                    Fax: <span style={{ color: "#84B0CA" }}>{fax}</span>
                                      
                                    </li>


                                    <li contenteditable="true" className="text-muted">
                                      <br />
                                      <div style={{"border": "2px solid black"}}> 


                                      <h5 className="card-title">Ship To:</h5>
                                      <p className="card-text">    <ul className="list-unstyled">
                                        <i>
                                          <li contenteditable="true" className="text-muted">
                                            {ship_to__address}  <span style={{ color: "#84B0CA" }}></span>
                                          </li>
                                          <li contenteditable="true" className="text-muted">
                                          Attn: <span style={{ color: "#84B0CA" }}>{ship_to__attn}</span>

                                          </li>
                                          <li contenteditable="true" className="text-muted">
                                          {ship_to__state} <span style={{ color: "#84B0CA" }}></span>
                                          </li>



                                        </i>



                                      </ul>
                                      </p>
                                          </div>

                                      <span style={{ color: "#84B0CA" }}> </span>
                                    </li>
                                    <br />


                                  </ul></div>
                                <div className="col-xl"></div>
                                <div className="col-xl"></div>
                                <div className="col-xl">
                                  <br />
                                  <br />
                                  <h5   contenteditable="true"  >   


Becton, Dickinson and Company </h5><span style={{ color: "#84B0CA" }}></span>

                                  <br />
                                  <ul className="list-unstyled">


                                    <li contenteditable="true" className="text-muted">
                                    Date: <span style={{ color: "#84B0CA" }}>{invoiceDate}</span>

                                    </li>
                                    <li contenteditable="true" className="text-muted">
                                    Due Date: <span style={{ color: "#84B0CA" }}>{dueDate}</span>

                                    </li>
                                    <li contenteditable="true" className="text-muted">
                                    Payment Terms: <span style={{ color: "#84B0CA" }}>{l_payment_terms}</span>

                                    </li>

                                    <li contenteditable="true" className="text-muted">
                                    Shipping Terms: <span style={{ color: "#84B0CA" }}>{l_shipping_terms}</span>

                                    </li>
                                    <li contenteditable="true" className="text-muted">
                                    Currency: <span style={{ color: "#84B0CA" }}>{l_currency}</span>

                                    </li>
                                    <li contenteditable="true" className="text-muted">
                                    CONTRACT:<span style={{ color: "#84B0CA" }}>{l_contract}</span>

                                    </li>
                                    <li contenteditable="true" className="text-muted">
                                    CONTACT: <span style={{ color: "#84B0CA" }}>{l_contact}</span>

                                    </li>
                                    <li contenteditable="true" className="text-muted">
                                      <br />
                                      <div style={{"border": "2px solid black"}}> 

                                      <h5 className="card-title">Bill To:</h5>
                                      <p className="card-text">    <ul className="list-unstyled">
                                      
                                          <li contenteditable="true" className="text-muted">
                                          {l_bill_to_address}  <span style={{ color: "" }}></span>
                                          </li>


                                          <li contenteditable="true" className="text-muted">
                                          Attn: <span style={{ color: "#84B0CA" }}>{l_bill_to_attn}</span>

                                          </li>
                                      
                                              <li contenteditable="true" className="text-muted">
                                             <span style={{ color: "#84B0CA" }}></span>
                                          </li>
                                     
                                      </ul>
                                      </p>
</div>
                                      <span style={{ color: "#84B0CA" }}> </span>
                                    </li>




                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr/>
                            <Notes notes={notes}   />
                      

                          
 
                          <Table
                            heading={heading}
                            description={description}
                            quantity={quantity}
                            price={price}
                            amount={amount}
                            list={list}
                            setList={setList}
                            total={total}
                            setTotal={setTotal}
                          />
<div> 

<hr />
                        <div className="row">
                                    <div className="col-xl-12">
                                        <p contenteditable="true"  class="text-center text-danger " id="asd">As of <u>January 4, 2021</u>, BD will no longer accept paper or PDF invoices.</p>
                                        <ul className="list-unstyled">

 
                                            <li contenteditable="true"  className="text-center">
                                                <b>Req to Pay Customer Service:</b><span style={{ color: "#84B0CA" }}> </span>
                                            </li>

                                            <li className="text-center"contenteditable="true" >
                                                Monday through Friday<span style={{ color: "#84B0CA" }}> </span>
                                            </li>
                                            <li className="text-center"contenteditable="true" >
                                                <b>Phone:</b><span style={{ color: "#84B0CA" }}> </span>
                                            </li>
                                            <li className="text-center"contenteditable="true" >
                                                855-4BD-Help (855-423-4357)<span style={{ color: "#84B0CA" }}> </span>
                                            </li>
                                            <li className="text-center"contenteditable="true" >
                                                <b>Online:</b><span style={{ color: "#84B0CA" }}> </span>
                                            </li>
                                            <li className="text-center"contenteditable="true" >
                                                <a >BD.com/Services</a><span style={{ color: "#84B0CA" }}> </span>
                                            </li>
                                            <li className="text-center">
                                                <b>For Terms & Condition, visit: :</b><span style={{ color: "#84B0CA" }}> </span>
                                            </li>
                                            <li className="text-center" contenteditable="true" >
                                                North America: <a>PO Terms and Conditions</a><span style={{ color: "#84B0CA" }}> </span>
                                            </li>

                                        </ul>








                                        <p contenteditable="true" > This document isa Purchase Order from Becton, Dickinson and Company issued from our new BD BuySmart solution, powered by Coupa. Please process this order the same as you would any other PO from BD. If you have any questions or concems about thi order, please visit our BD Services Store at ww.hs.com/services (registration may be
                                            required) oc cll the Reqo-Pay customer servic team a 385-425-4957
                                        </p>
                                    </div>
                                    <div className="col-xl-3">

                                        <p className="text-black float-start">
                                            {/* <span className="text-black me-3"> Total</span> */}
                                            {/* <span style={{ fontSize: 25 }}>$1221</span> */}
                                        </p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-xl-12">
                                        <p contenteditable="true" >The purchases on this Purchase Order are assumed tobe Taxable for Sales Tax unless an exemption cerfiate hs been provided sepaatly or this transaction
                                        </p>
                                    </div>

                                    <div className="col-xl-2">

                                    </div>
                                </div>
                      </div>
</div>
                           
                        </div>
                        {/* <button
            onClick={() => setShowInvoice(false)}
            className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            Edit Information
          </button> */}


                       
                    
                    </Card.Body>

                  </Card>





                </Tab.Pane>



              </Tab.Content>
            </Col>        </Accordion.Body>
    </Accordion.Item>
    </Accordion>
 
      
         </>:null}


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
