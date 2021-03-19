
import React, { useState, useEffect } from "react";
import './App.css';
import { useFetch} from "./useFetch";
import MessageComponent from './MessageComponent'
import styled from 'styled-components';

function App() {
  
const {data, loading} =  useFetch('http://localhost:3000/conversationMetadata')

const AllMessagesWrapper = styled.section`
  position: absolute;
  height: 100%;
  width: 100%;
  background: red;
  
`

const printData=()=>{
    return (
      <>
          <MessageComponent loading={loading} data={data}  />
      </>
      )
  }


  return (


    <>
    <AllMessagesWrapper>
      {loading ? '...' : printData()} 
    </AllMessagesWrapper>
    </>
  );
}

export default App;
