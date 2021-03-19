import React, { useState, useEffect } from "react";
import styled from 'styled-components';


const MessageBubble=styled.div`
   ul{
       background: #234BBD;
       border: 3px;
       border-radius: 30px;
   }
`

const StyledMessage=styled.div`
  max-width: 30vw;
  position: relative;
  top: 0;
  left: 0px;
  float: right;
  color: white;
  font-weight: light; 
`
function Message(data, loading) {
    const [state, setState] = useState({id: 1})

    if (data.data === null) {
        return '...' 
    }    
    else {

  return (
    <StyledMessage onClick={()=>{setState({id: data.data.id})}}>
     {data.data.map((message) => {
         return (<MessageBubble>

         <ul>{message.text}</ul>

         </MessageBubble>
         )})}
      </StyledMessage>
  );
}
}


export default Message;