import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class ChatList extends Component {

    styles= { 
        borderRadius: 20,
        height: 30,
        width: 30,
    }


    messageCount() { 
        return this.props.notif_value;
     }

     handleMouseOver() {         
         console.log ("Mouse Entered");
     }

     handleChatList = () =>{        
        console.log ("Recent Chat List");
     }

     getBadgeClass() {
        let badgeClass = "badge badge-pill badge-";
        badgeClass += (this.props.notif_value !== 0) ? "info" : "none";
        return badgeClass;
    }

    getRandomColors() {
        let bgColor1 ="red", bgColor2= "green", bgColor3= "blue";
        let randomBgColor = [bgColor1, bgColor2, bgColor3];
        for (let index = 0; index < randomBgColor.length; index++) {
            randomBgColor.sort()   
            
        }

    }
     
    render() {        
        let badgeClass = this.getBadgeClass();

        return ( 
           <div >
              <ListGroup onMouseOver= {this.handleMouseOver } >
                <ListGroupItem onClick= { this.handleChatList }> 
                    <img className=" mr-2"
                            style= {this.styles }
                            // src= ""
                            alt=  {this.getRandomColors}
                        />

                    {
                        this.props.notif_value === 0 ? (this.props.name  + " " + this.props.num)
                        :  <b> {this.props.name}  {this.props.num } </b>               
                     }

                    {
                       !this.props.notif_value ? null
                        :  <span className={ badgeClass} style={ {marginRight:"25px"} }>  { this.messageCount() } </span> 
                    }               
                </ListGroupItem> 
              </ListGroup>             
           </div>
         );
    }

    
}
 
export default ChatList;