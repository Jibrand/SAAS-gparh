import React,{useEffect,Suspense,lazy} from 'react'
import {Switch,Route} from 'react-router-dom'


const  Index =lazy(()=>import(  '../views/dashboard/index'))
 
const  {TransitionGroup,CSSTransition} =lazy(()=>import(  "react-transition-group"))
 
 
const  SignUp =lazy(()=>import(  '../views/dashboard/auth/sign-up'))
 
 

const DefaultRouter = () => {
    return (
        <TransitionGroup>
            <CSSTransition classNames="fadein" timeout={500}>
            <Suspense fallback={<h1>Loading.....</h1>}>

                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/ath/post" exact component={SignUp} />
                
                
                   
                </Switch>
                </Suspense>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default DefaultRouter
