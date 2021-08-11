import React, { Component  } from 'react';
import { Button, Form, Container,Input, InputGroupText } from 'reactstrap';
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
          <section>
            
              <Container className= "ml-5 my-5 p-lg-5 "> 
                <Form onSubmit= {this.handleOnSubmit} className= "chatLogIn" >
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

                    </div>

                
                </Form>
              </Container> 
           </section>
        );
    }

}
 
export default LogIn;