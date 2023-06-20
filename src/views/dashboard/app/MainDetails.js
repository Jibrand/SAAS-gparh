import styled from 'styled-components';

export default function MainDetails({ name,Qoute_ExpiryDate,Qoute_Date,Qoute_Note,Qoute_status,Qoute_Name,dueDate,invoiceDate,l__bill_to_state,l_contact,l_bill_to_attn,l_bill_to_address,l_contract,l_shipping_terms,l_currency,l_payment_terms,l_address, address,website,fax ,company,ship_to__address,ship_to__attn,ship_to__state}) {
  return (
    <>
 
 
        <h1 className="font-bold text-3xl uppercase mb-1">{company}</h1>
        <h5 className="font-bold text-3xl uppercase mb-1">{name}</h5>
        <p>{address}</p>
        <p>  {website}</p>
        <p>{Qoute_Name}</p>
        <p>{Qoute_status}</p>
        <p>{Qoute_Note}</p>
        <p>{Qoute_Date}</p>
        <p>{Qoute_ExpiryDate}</p>
        <p>  {fax}</p>
        <p>  {ship_to__address}</p>
        <p>  {ship_to__attn}</p>
        <p>  {ship_to__state}</p>
        <p>  {l_address}</p>
        <p>  {l_payment_terms}</p>
        <p>  {l_currency}</p>
        <p>  {l_shipping_terms}</p>
        <p>  {l_contract}</p>
        <p>  {l_contact}</p>
        <p>  {l_bill_to_address}</p>
   
        <p>  {l__bill_to_state}</p>
        <p>  {l_bill_to_attn}</p>
        <p>  {invoiceDate}</p>
        <p>  {dueDate}</p>

  

        
      
 
      
    </>
  )
}
 