import React, { Component } from 'react';
import { FaWifi} from "react-icons/fa";
import {Container} from "reactstrap";

class ChatArea extends Component {
    
    render() { 
        return ( 
            <Container className= "">
                <svg 
                    style= {{background: "#727272" }} >   
                        <FaWifi {...{fontSize: 150, margin: 10 }}/> Hello Aliens   
                </svg>     
            </Container>                
         );
    }
}

 
export default ChatArea;