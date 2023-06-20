import React,{ lazy,Suspense} from 'react'


//router
import { Switch,Route} from 'react-router'
//layoutpages
import styled from "styled-components";
import loader from '../assets/loader.gif'

 
//layoutpages
const Index =lazy(()=>import(  '../views/index'))
const Default =lazy(()=>import(  '../layouts/dashboard/default'))
const Horizontal =lazy(()=>import(  '../layouts/dashboard/horizontal'))
const Boxed =lazy(()=>import(  '../layouts/dashboard/boxed'))
const DualHorizontal =lazy(()=>import(  '../layouts/dashboard/dual-horizontal'))
const DualCompact =lazy(()=>import(  '../layouts/dashboard/dual-compact'))
const BoxedFancy =lazy(()=>import(  "../layouts/dashboard/boxed-fancy"))
const Simple =lazy(()=>import(  '../layouts/dashboard/simple'))
const Vendor =lazy(()=>import(  '../layouts/dashboard/Vendor'))
const Athvend =lazy(()=>import(  '../layouts/dashboard/Athvend'))
const Layout =lazy(()=>import(  '../layouts/dashboard/layout-rfq'))
const VendorQuoteLIst =lazy(()=>import(  '../layouts/dashboard/VendorQuoteLIst'))
const VendorQuote =lazy(()=>import(  '../layouts/dashboard/VendorQuote'))
const Approver =lazy(()=>import(  '../layouts/dashboard/Approver'))
const ApproverAhead =lazy(()=>import(  '../layouts/dashboard/ApproverAhead'))
const Admin_Vendor_List =lazy(()=>import(  '../layouts/dashboard/Admin_Vendor_List'))
const Admin_Vendor_Profile =lazy(()=>import(  '../layouts/dashboard/Admin_Vendor_Profile'))
const Admin_po_list =lazy(()=>import(  '../layouts/dashboard/Admin_po_list'))
const Admin_Generate_po =lazy(()=>import(  '../layouts/dashboard/Admin_Generate_po'))
const Admin_Quote =lazy(()=>import(  '../layouts/dashboard/Admin_Quote'))
const User_Add =lazy(()=>import(  '../layouts/dashboard/User_Add'))

const IndexRouters = () => {
    return (
        <>
            <Suspense fallback={ <Container>
          <img src={loader} alt="loader" className="loader" />
        </Container>}>

            <Switch>
            <Route exact path="/" component={Default}></Route>
                <Route exact path="/ath" component={Vendor}></Route>
                <Route exact path="/dashboard/app/Userrfq/:id" component={Admin_Vendor_List}></Route>
                <Route exact path="/athpro/:id" component={Athvend}></Route>
                <Route exact path="/layout/rfq" component={Layout}></Route>
                <Route exact path="/athquote/:id" component={VendorQuote}></Route>
                <Route exact path="/VendorQuoteLIst/:id" component={VendorQuoteLIst}></Route>
                <Route exact path="/approver" component={Approver}></Route>
                <Route exact path="/ApproverAhead/:id" component={ApproverAhead}></Route>

                <Route exact path="/dashboard/app/user-profile/:id" component={Admin_Vendor_Profile}></Route>
                <Route exact path="/dashboard/app/POTable/:id" component={Admin_po_list}></Route>
                <Route exact path="/dashboard/special-pages/billing/:id" component={Admin_Generate_po}></Route>
                <Route exact path="/dashboard/app/QuoteTable/:id" component={Admin_Quote}></Route>
                 <Route exact path="/dashboard/app/user-add" component={User_Add}></Route>



                <Route  path="/dashboard" component={Default}></Route>
                <Route  path="/boxed" component={Boxed}></Route>
                <Route  path="/horizontal" component={Horizontal}></Route>
                <Route  path="/dual-horizontal" component={DualHorizontal}></Route>
                <Route  path="/dual-compact" component={DualCompact} ></Route>
                <Route  path="/boxedFancy" component={BoxedFancy} ></Route>
                <Route  path="/auth" component={Simple}></Route>
                <Route  path="/errors" component={Simple}></Route>
            </Switch>
            </Suspense>
        </>
    )
}

export default IndexRouters
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background-color: 	white;
  height: 100vh;
  width: 100vw;

  .loader {
    max-inline-size: 10%;
  }

  .title-container {
    h1 {
      color: white;
    }
  }
  .avatars {
    display: flex;
    gap: 2rem;

    .avatar {
      border: 0.4rem solid transparent;
      padding: 0.4rem;
      border-radius: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s ease-in-out;
      img {
        height: 6rem;
        transition: 0.5s ease-in-out;
      }
    }
    .selected {
      border: 0.4rem solid orange;
    }
  }
  .submit-btn {
    background-color: white;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: white;
      color: white;
    }
  }
`;