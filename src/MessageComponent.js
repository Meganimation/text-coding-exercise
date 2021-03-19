import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import logo from './logo.svg';
import { useFetch } from "./useFetch";
import props from 'prop-types';
import Message from './Message';


const MessageNav =styled.nav`
  height: 40px;
  background: #1C1F2A;
  width: 100%;
  border: 2px;
  border-bottom-style: solid;
  border-bottom-color: lightGray;
  color: white;
  padding: 10px;
`
const MainNav =styled.nav`
    position: absolute:
    background: green;
    z-index: 30;
    display: flex;

`

const MessageWrapper =styled.div`
  width: 30%;
  background: #1C1F2A;
  height: 100%;
  overflow-y:auto  
`

const StyledMessage =styled.div`
  border: 3px;
  border-radius: 10px;
   ::first-line {
      font-weight: bold;
      color: white; 
   }
  ul {
      color: lightGray;
    }
    small {
        position: relative;
        top: -105px;
        right: 0;
        padding-left: 80%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: white;
      }
  &:hover{
      background: #4E5260;
    }
`

const MessageBoard = styled.div`
  background: white;
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  overflow-y:auto
`


function MessageComponent(loading, renderItem) {

    const [state, setState] = useState({id: 1, name: 'Lennie Marks'})
    const {data, loading1} =  useFetch(`http://localhost:3000/messages?ownerId=${state.id}&_sort=messageDateTime&_order=asc`)

  
    if (loading.data === '...') {
        return '...' 
    }    
    if (!loading.loading && !loading1) {


    const printMsgs=()=>{
        return (
          <>
              <Message loading={loading1} data={data} />
          </>
          )
      }
    
  return (

<>
<MessageNav ><h2>Your Inbox</h2></MessageNav>
    <MessageWrapper>
        {loading.data.map(data => 
        <StyledMessage onClick={()=> {setState({id: data.ownerId, name: `${data.first_name} ${data.last_name}`})}}>   
              <ul>{data.first_name} {data.last_name}</ul>
              <ul> {data.lastMessage}</ul>
              <small>{data.lastMessageDateTime}</small>
       </StyledMessage>
        )
        })
    </MessageWrapper>
    
       <MessageBoard>
       <MainNav ><h2>{state.name}</h2></MainNav>
 
        {printMsgs()}
      </MessageBoard>
</>
  );
}
}

export default MessageComponent;