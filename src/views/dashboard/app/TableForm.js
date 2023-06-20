import React, { useState, useEffect } from "react"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { v4 as uuidv4 } from "uuid"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import styled from 'styled-components';

import { Row, Col, Image, Form, Nav,Button, Dropdown, Tab, FormControl, InputGroup, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"


export default function TableForm({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
  heading,
  setHeading,
}) {
  const [isEditing, setIsEditing] = useState(false)

  // Submit form function
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!description || !quantity || !price) {
      toast.error("Please fill in all inputs")
    } else {
      const newItems = {
        id: uuidv4(),
        heading,
        description,
        quantity,
        price,
        amount,
      }
      setDescription("")
      setHeading("")
      setQuantity("")
      setPrice("")
      setAmount("")
      setList([...list, newItems])
      setIsEditing(false)
    }
  }

  // Calculate items amount function
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price)
    }

    calculateAmount(amount)
  }, [amount, price, quantity, setAmount])

  // Calculate total amount of items in table
  useEffect(() => {
    let rows = document.querySelectorAll(".amount")
    let sum = 0

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
        setTotal(sum)
      }
    }
  })

  // Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id)
    setList(list.filter((row) => row.id !== id))
    setIsEditing(true)
    setDescription(editingRow.description)
    setHeading(editingRow.heading)
    setQuantity(editingRow.quantity)
    setPrice(editingRow.price)
  }

  // Delete function
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id))

  return (
    <>
      <CSS>
        <ToastContainer position="top-right" theme="colored" />
        <hr />
        <form  onSubmit={handleSubmit}> 
        <Row>
                                        <h4 style={{  justifyContent: 'center'}}>  Table</h4>
                                        <p></p>
                                    <br/>

                                        <Col>
                                        <Form.Control  type="text" placeholder="  Heading "        value={heading}
              onChange={(e) => setHeading(e.target.value)}/>
                                        </Col>
                                        <Col>
                                        <Form.Control  as="textarea" placeholder="Description"    value={description}
              onChange={(e) => setDescription(e.target.value)}/>
                                        </Col>
                                        <Col>
                           
                                        <Form.Control type="number"  placeholder="Quantity"      value={quantity}
                onChange={(e) => setQuantity(e.target.value)}/>
                                        </Col>
                                        <Col>
                                        <Form.Control type="number"  placeholder="Price"    value={price}
                onChange={(e) => setPrice(e.target.value)}/>

                                        </Col>
                                        <Col>


                                        <Button type="submit" variant="btn btn-primary">  {isEditing ? "Editing Row Item" : "Add Table Item"}</Button>{' '}
                                        </Col>
                                         
                                     
                                      
                               
                                    </Row>
                                        </form>
        {/* <form onSubmit={handleSubmit}>

          
         
     
           

         
          <div className="row">
          <div className="col-md-3">
            <label htmlFor="heading">Item Heading</label>
            <input
              type="text"
              name="heading"
              id="heading"
              placeholder="Item Heading"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
            </div>
           <div className="col-md-3"> 
          <label htmlFor="description">  description</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Item description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="col-md-3">
      
              <label htmlFor="quantity">Quantity</label>
              <input
                type="text"
                name="quantity"
                id="quantity"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              </div>
          </div>  
          <div className="col-md-3">

              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
       
         
          


            <div className="flex flex-col">
              <label htmlFor="amount">Amount</label>
              <p>{amount}</p>
            </div>
          
          <button
            type="submit"
            className="mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            {isEditing ? "Editing Row Item" : "Add Table Item"}
          </button>
        </form> */}

        {/* Table items */}
        <hr/>

        <table width="100%"  >
          <thead>
            <tr className="   p-1">
              <td className=" "><h5>Description</h5></td>
              <td className=" "><h5>Quantity</h5></td>
              <td className="font-bold"><h5>Price</h5></td>
              <td className="font-bold"><h5>Amount</h5></td>
            </tr>
          </thead>
          {list.map(({ id, description, quantity, price, amount, heading }) => (
            <React.Fragment key={id}>
              <tbody>
                <tr className=" ">
                  <td><u><b> {heading} :</b></u> <p> {description} </p></td>
                  <td>{quantity}</td>
                  <td>{price}</td>
                  <td className="amount">{amount}</td>
                   {/* <td>
                    <button onClick={() => editRow(id)}>
                      <AiOutlineEdit className="text-green-500 font-bold text-xl" />
                    </button>
                  </td> */}
                  <td>
                  <Link  className="btn btn-sm btn-icon text-danger" data-bs-toggle="tooltip" title="Delete User" onClick={() => deleteRow(id)}     >
                                                      <span className="btn-inner">
                                                         <svg width="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                            <path d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M20.708 6.23975H3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                         </svg>
                                                      </span>
                                                   </Link>
                  </td>  
                </tr>
              </tbody>
            </React.Fragment>
          ))}
        </table>

        <div style={{"border": "1px solid black"}}>
          <h5 >
            Total: {total.toLocaleString()}$
          </h5>
        </div>
      </CSS>
    </>
  )
}
const CSS = styled.div``
 