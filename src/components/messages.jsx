import React, { Component } from 'react';
import ChatList from './contactList';
import MyNavBar from './navbar';
import ChatArea from "./chatArea";
import { Input, 
        InputGroupText, 
        Row, 
        Col,
        Navbar,
    } 
    from 'reactstrap';
import { FaSearch, FaWifi } from "react-icons/fa";

class Messages extends Component {

    message = { 
        fromContactList: [
           { id: 1, name: "Andre", num: 2348067564534, notif_value: 3, img: "" },
           { id: 2, name: "Nicole", num: 2349087983426, notif_value: 0, img: "" },
           { id: 3, name: "Peter", num: 2348047285935, notif_value: 0, img: "" },
           { id: 4, name: "Sally", num: 2349087638490, notif_value: 1, img: "" },
           { id: 5, name: "Steve", num: 2349054621986, notif_value: 3, img: "" },
           { id: 6, name: "Mike", num: 2348043655935, notif_value: 0, img: "" },
           { id: 7, name: "Julia", num: 2349087583490, notif_value: 2, img: "" },
        ],
        fromMe: 2348062472845
    }
 
    render() { 
        const styles = {
            playArea : {
                minHeight : "100vh",
                // background: 
            },
            chatList : {
                background : "#676767",
                textDecoration: "none",
                color: "black"
            },
            chatArea : {
                borderRadius: 650, 
                height: 300, 
                
            }

        }

        return (
            <div >
                <Navbar color= "info" light expand="sm"></Navbar>
                <Row>
                    <Col md={3} style={styles.playArea, styles.chatList}>   
                        <MyNavBar /> 
                            <div>
                                <InputGroupText> 
                                    <FaSearch ml= {3}/>
                                    <Input type="text" 
                                            name="searchbar" 
                                            id="searchToChat" 
                                            placeholder= "Search or start new chat" />       
                                </InputGroupText>
                            </div>
                        {
                            this.message.fromContactList.map((msg) => {
                                return <ChatList key= { msg.id}
                                                name={ msg.name }
                                                num= { msg.num}
                                                notif_value= { msg.notif_value }
                                                img= {msg.img }
                                />
                            })
                        }     

                    </Col>

                    <Col md={9} style={ styles.playArea }>
                        <ChatArea/>
                    </Col>
                </Row>
            </div> 

        );
    }
}
 
export default Messages;