import React,{useEffect,Suspense,lazy} from 'react'
import Index from '../views/dashboard/index'
import {TransitionGroup,CSSTransition} from "react-transition-group"
import styled from "styled-components";
import loader from '../assets/loader.gif'
import {Switch,Route,useHistory} from 'react-router-dom'
// user
const UserProfile =lazy(()=>import( '../views/dashboard/app/user-profile'))
const PDF =lazy(()=>import( '../views/dashboard/app/PDF'))
const UserProfile2 =lazy(()=>import( '../views/dashboard/app/UserProfile2'))
const Easy_Invoice =lazy(()=>import( '../views/dashboard/app/Easy_Invoice'))
const UserProfile3 =lazy(()=>import( '../views/dashboard/app/UserProfile3'))
const UserProfile4 =lazy(()=>import( '../views/dashboard/app/UserProfile4'))
const Sad =lazy(()=>import( '../views/dashboard/app/sad'))
const Activity_click_here =lazy(()=>import( '../views/dashboard/app/Activity_click_here'))
const VendorProfile =lazy(()=>import( '../views/dashboard/app/VendorProfile'))
const Profile_Picture =lazy(()=>import( '../views/dashboard/app/Profile_Picture'))
const Appjs =lazy(()=>import( '../views/dashboard/app/App'))
const TaskForm =lazy(()=>import( '../views/dashboard/app/TaskForm'))
const VendorQoute =lazy(()=>import( '../views/dashboard/app/VendorQoute'))
const UserAdd =lazy(()=>import( '../views/dashboard/app/user-add'))
const UserList =lazy(()=>import( '../views/dashboard/app/user-list'))
const Rfqmanges =lazy(()=>import( '../views/dashboard/indexRFQ'))
const Userrfq =lazy(()=>import( '../views/dashboard/app/Userrfq'))
const MASproduct_Category =lazy(()=>import( '../views/dashboard/app/MASproduct Category'))
const MASproduct_Category_Update =lazy(()=>import( '../views/dashboard/app/MASproduct_Category_Update'))
const MASApplicableStandards =lazy(()=>import( '../views/dashboard/app/MASApplicableStandards'))
const MASApplicableStandards_Update =lazy(()=>import( '../views/dashboard/app/MASApplicableStandards_Update'))
const MASW_x_D_x_H =lazy(()=>import( '../views/dashboard/app/MASW x D x H'))
const MASW_x_D_x_H_Update =lazy(()=>import( '../views/dashboard/app/MASW x D x H_Update'))
const userProfileEdit =lazy(()=>import( '../views/dashboard/app/user-privacy-setting'))
// widget
 
 
// Form
const FormElement =lazy(()=>import( '../views/dashboard/from/form-element'))
const FormValidation =lazy(()=>import( '../views/dashboard/from/form-validation'))
const FormWizard =lazy(()=>import( '../views/dashboard/from/form-wizard'))
const Rfqform =lazy(()=>import( '../views/dashboard/from/Rfqform'))
const Userrfqf =lazy(()=>import( '../views/dashboard/from/Userrfq'))
// table
 

 
 

//TransitionGroup
//Special Pages
// const Billing =lazy(()=>import( '../views/dashboard/special-pages/billing'))
 
const QuoteTable =lazy(()=>import( '../views/dashboard/app/QuoteTable'))
const Invoice =lazy(()=>import( '../views/dashboard/app/Invoice'))
const App =lazy(()=>import( '../views/dashboard/app/App'))
const Post =lazy(()=>import( '../components/Posts/Post'))
//admin
 

const POTable =lazy(()=>import( '../views/dashboard/app/POTable'))



const Admin=lazy(()=>import("../views/dashboard/admin/admin"))

const DefaultRouter = () => {
    const history=useHistory()
   
     
    return (
        <TransitionGroup>
            <CSSTransition classNames="fadein" timeout={500}>
            <Suspense fallback={   <Container>
          <img src={loader} alt="loader" className="loader" />
        </Container>}>
                <Switch>

                    <Route path="/" exact component={Index} />
                    <Route path="/dashboard/post" exact component={Post} />
                    {/* user */}
                    {/* <Route path="/dashboard/app/user-profile/:id"     exact component={UserProfile} />  */}
                    <Route path="/dashboard/app/Invoice/:id"     exact component={Invoice} />
                    <Route path="/dashboard/app/QuoteTable/:id"     exact component={QuoteTable} />
                    <Route path="/dashboard/app/UserProfile2/:id"     exact component={UserProfile2} />
                    <Route path="/dashboard/app/UserProfile3/:id"     exact component={UserProfile3} />
                    <Route path="/dashboard/app/UserProfile4/:id"     exact component={UserProfile4} />
                    <Route path="/dashboard/app/activity/:id"     exact component={Activity_click_here} />
                    <Route path="/dashboard/app/PDF"     exact component={PDF} />
                    <Route path="/dashboard/app/TaskForm"     exact component={TaskForm} />
                    <Route path="/dashboard/app/Sad"     exact component={Sad} />
                    <Route path="/dashboard/app/PDF"     exact component={VendorProfile} /> 
                    <Route path="/dashboard/app/VendorQoute/:id"     exact component={VendorQoute} />
                    <Route path="/dashboard/app/Easy_Invoice"     exact component={Easy_Invoice} />
                    <Route path="/dashboard/app/user-add"         exact component={UserAdd}/>
                    <Route path="/dashboard/app/appjs"         exact component={Appjs}/>
                    <Route path="/dashboard/app/user-list"        exact component={UserList}/>
                    <Route path="/dashboard/app/profilepicture"        exact component={Profile_Picture}/>
                    <Route path="/dashboard/app/Rfqmanges"        exact component={Rfqmanges}/>
                    {/* <Route path="/dashboard/app/Userrfq/:id"        exact component={Userrfq}/>  */}
                    <Route path="/dashboard/app/MASproduct_Category"        exact component={MASproduct_Category}/>
                    <Route path="/dashboard/app/MASproduct_Category_Update/:id"        exact component={MASproduct_Category_Update}/>
                    <Route path="/dashboard/app/MASApplicableStandards"        exact component={MASApplicableStandards}/>
                    <Route path="/dashboard/app/MASApplicableStandards_Update/:id"        exact component={MASApplicableStandards_Update}/>        
                    <Route path="/dashboard/app/MASW_x_D_x_H"        exact component={MASW_x_D_x_H}/>
                    <Route path="/dashboard/app/MASW_x_D_x_H_Update/:id"        exact component={MASW_x_D_x_H_Update}/>     
                    <Route path="/dashboard/app/user-privacy-setting" exact component={userProfileEdit}/>
                     {/* widget */}
                    
                     {/* icon */}
     
                     {/* From */}
                     <Route path="/dashboard/form/form-element"    exact component={FormElement}/>
                     <Route path="/dashboard/form/form-validation" exact component={FormValidation}/>
                     <Route path="/dashboard/form/form-wizard"     exact component={FormWizard}/>
                     <Route path="/dashboard/form/Rfqform"     exact component={Rfqform}/>
                     <Route path="/dashboard/form/Userrfq/:id"     exact component={Userrfqf}/>
                     {/* <Route path="/dashboard/app/POTable/:id"     exact component={POTable} /> */}
                     {/* table */}
 
                     {/* <Route path="/dashboard/special-pages/billing/:id" exact component={App}/> */}
 
                     {/* extra */}
   
                     {/*admin*/}
                     <Route path="/dashboard/admin/admin" exact component={Admin}/>
                </Switch>
                </Suspense>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default DefaultRouter
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
      border: 0.4rem solid white;
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

