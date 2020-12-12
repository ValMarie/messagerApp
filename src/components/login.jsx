import React, { Component  } from 'react';
import { Button, Container,Input, InputGroupText } from 'reactstrap';
import Messages from './messages';

class LogIn extends Component {     
    
    handleOnChange= (e) => {
        this.setState( { username: e.target.value})
    }
    handleOnSubmit= (e) => {
        e.preventDefault()
        this.setState( { submitted: true, username: this.state.username})
    }

    hanadleOnClick= (e) => {
        e.preventDefault()
        this.setState( { submitted: <Messages/>})

    }

    render() { 
        return (  
            <form onSubmit= {this.handleOnSubmit} className= "chatLogIn" >
              <Container className= "ml-5 my-5 p-lg-5 "> 
                <div className="text-center mb-4 text-info" style= {{fontSize :350} } > ChatsSenger </div>  
                <div className= "comtainer ml-5 mr-5 ">
                    <InputGroupText>
                        <Input onChange= {this.handleOnChange}
                                type= "text" 
                                placeholder= "Enter a username or number" 
                                required
                       />
                    </InputGroupText>
                    <center className= "p-5">
                        <Button  color= "info" size= "lg" onClick= { this.hanadleOnClick }  active> Log In</Button>
                    </center>    

                    {
                      this.state.username === ""? 
                    }            
                </div>

               
{/* 

                <div classMame="container my-5 z-depth-1">


  
  <section classMame="dark-grey-text">

    <div classMame="row pr-lg-5">
      <div classMame="col-md-7 mb-4">

        {/* <div classMame="view">
          <img src="https://mdbootstrap.com/img/illustrations/graphics(4).png" classMame="img-fluid" alt="smaple image">
        </div> */}

      {/* </div>
      <div classMame="col-md-5 d-flex align-items-center">
        <div>
          
          {/* <h3 classMame="font-weight-bold mb-4">Material Design Blocks</h3> */}

                

              </Container> 
            </form>
        );
    }

}
 
export default LogIn;