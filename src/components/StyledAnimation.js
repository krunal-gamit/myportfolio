import styled from "styled-components";



export const Container = styled.section`


*{
    width: 100%;
    text-align: center;
}


  .cursor {
    width: 25px;
    height: 25px;
    margin: 0;
    padding: 0;
    background-color: rgb(238, 130, 31);
    border-radius: 50%;
    pointer-events: none;
    position: fixed;
    transform: translate(-50%, -50%);
  }


  ul {
    background: black;
    padding-top: 310px;
    padding-bottom: 100px;
    
  }

`;



export const Ul = styled.ul`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(1, 90%);
  justify-content: center;
  position: relative;
  width:100%;
  
  li {
    
    margin-bottom: 25px;
    font-family: "Poppins", sans-serif;
    font-size: 3vw;
    font-weight: 100;
    background:none;
    span {
      &:hover {
        color : pink;

        & ~ div {  
          transform: rotate(-5deg) scale(1);
          opacity: 1;
        }
      }
      background:none;
    }
    .img-cont {
    z-index:3;
      position: absolute;
      width: 300px;
      margin-left: 570px;
      margin-top: -360px;
      transform: translateX(100px) scale(0.8);
      opacity: 0;
      transition: 0.6s;
      img {
        border: 1px solid rgb(255, 255, 255, 0.5);
        width: 100%;
        border-radius: 15px;
      }
    }
  }

  @media (max-width: 575px) {

    li{
        font-size:4vw;
    }

   
  }

`;