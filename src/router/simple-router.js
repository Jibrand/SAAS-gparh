import React,{lazy,Suspense} from 'react'
import {Switch,Route} from 'react-router-dom'

// auth
const ConfirmMail =lazy(()=>import(  '../views/dashboard/auth/confirm-mail'))
const LockScreen =lazy(()=>import(  '../views/dashboard/auth/lock-screen'))
const Recoverpw =lazy(()=>import(  '../views/dashboard/auth/recoverpw'))
const SignIn =lazy(()=>import(  '../views/dashboard/auth/sign-in'))
const SignUp =lazy(()=>import(  '../views/dashboard/auth/sign-up'))
// errors
 

const SimpleRouter = () => {
    return (
            <>
            <Suspense fallback={<h1>Loading.....</h1>}>

            <Switch>

                {/* auth */}
                <Route exact path="/auth/confirm-mail" component={ConfirmMail}/>
                <Route exact path="/auth/lock-screen"  component={LockScreen}/>
                <Route exact path="/auth/recoverpw"    component={Recoverpw}/>
                <Route exact path="/auth/sign-in"      component={SignIn}/>
                <Route exact path="/auth/sign-up"      component={SignUp}/>  
                <Route exact path="/ath/sign-up"      component={SignUp}/>  
     
            </Switch>
            </Suspense>
               
            </>
    )
}

export default SimpleRouter
