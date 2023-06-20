import React from "react"
import styled from 'styled-components';

export default function Table({ list, total }) {
  return (
    <>
    <CSS>
      <table width="100%" className="mb-10" >
        <thead>
          <tr className="  p-1">
            <td className="font-bold"> <h5><b>Description</b></h5></td>
            <td className="font-bold"><h5><b> Quantity</b></h5></td>
            <td className="font-bold"><h5><b> Price</b></h5></td>
            <td className="font-bold"><h5> <b>Amount</b></h5></td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount,heading }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
              <td><u><p> <b>{heading}:</b></p>  </u><br/><p> {description} </p></td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h4 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          $ {total.toLocaleString()}
        </h4>
      </div>
      </CSS>
    </>
  )
}
const CSS =styled.div``
 