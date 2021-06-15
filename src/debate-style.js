import React from "react";
import styled from "styled-components";

const Container = styled.div`
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      margin: 0;
      display: flex;
      
      background-color: yellow;

     .debates {
      background: #2f3136;
      height: 100vh;
      display: flex;
      flex-direction: column;
     

      .heading{
            color: white;
            border-bottom: 1px solid rgb(4,4,5,0.5);
            height: 60px;
      }
      .title {
      margin: 20px 20px;
      font-size: 1.1em;
      }

      .debates-list{
      position: sticky;
      overflow: scroll;
      scrollbar-color: #2f3136 #2f3136;
      scrollbar-width: 0;
   
      }
      .debates-list:hover{
      scrollbar-color: #222 #2f3136 ;
  scrollbar-width: thin;
      }

      
}

.debate {
      background: #36393f;
      height: 100vh;
      width: 100%;

      .name{
            border-bottom: 1px solid #2f3238;
            height: 60px;
      }
}
     @media screen and (max-width: 1440px) {
      .debates{
            width: 25%;

      } 
      .debate{
            width: 75%;
      }

      }
      @media screen and (min-width: 1440px) {
      .debates{
            width: 20%;

      } 
      .debate{
            width: 80%;
      }

      }
 @media screen and (max-width: 900px) {
      .debates{
            width: 100%;
            display: none;

      } 
      .debate{
            width: 100vw;
            display: block;
      }

      }
 

`;

export default Container
