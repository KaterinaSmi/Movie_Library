import styled from "styled-components";

export const NavbarWrapper = styled.div`
  .logo {
    color: #fff;
    font-size: 2.5rem;
    letter-spacing: 2px;
    background: -webkit-linear-gradient(to right, #eaff00, #f8d4d4);
    background: -moz-linear-gradient(to right, #eaff00, #f8d4d4);
    background: -o-linear-gradient(to right, #eaff00, #f8d4d4);
    background: linear-gradient(to right, #eaff00, #f8d4d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: "Roboto Slab", serif;
  }

  .navLinks,
  .loginBtn {
    margin-left: auto;
  }

  .navLinks a.active{
    border-radius: 10px;
    border-top: 2px solid red;
    border-bottom: 2px solid red;
    color:#fff;
    padding: 15px 0;
  }

  .links {
    font-family: "Libre Baskerville", serif;
    font-size: 20px;
    color: #fffffffe4;
    border-radius: 5px;
    transition: transform 0.3s ease-in-out;
    &:hover{
    transform: scale(1.07);
    color:#eaff00;
    };
    
  }

  @media (max-width: 1060px) {
    .logo {
      font-size: 1.6rem;
    }

    .links,
    .loginBtn {
      font-size: 12px;
    }
  }
`;

export const MovieShowsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin-top: 5rem;
  padding: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);

  .loadingOverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(3, 37, 65, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    z-index: 9999;

    p {
      font-size: 2rem;
      margin-top: 1rem;
      font-family: "Roboto Slab", serif;
      letter-spacing: 2px;
    }
  }

  .movieHeading {
    width: 100%;
    h1 {
      margin-bottom: 1.5rem;
      font-family: "Libre Baskerville", serif;
      margin-left: 2rem;
    }
  }

  .movieCard {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
   

    .movie {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transition: all 0.5s ease-in-out;
      max-width: 200px; /* Ensure consistent size */
      margin-bottom: 3rem;

      .movieImage {
        display: flex;
        justify-content: center;
        position: relative;

        img {
          border-radius: 10px;
          border-bottom-right-radius: 25px;
          box-shadow: 1px 1px 10px 1px #000;
          padding: 5px;
          height: 200px;
        }

        span {
          border: none;
          height: 35px;
          width: 35px;
          border-radius: 50%;
          background-color: #f76429;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-family: "Libre Baskerville", serif;
          font-size: 15px;
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
        }
      }

      &:hover {
        transform: scale(1.04);
      }
    }

    .movieInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 10px;

      h4 {
        margin-bottom: 0;
        width: 150px; /* Reduced width for better fit */
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 12px;
      }

      p {
        margin: 8px 0;
        color: grey;
        border-bottom: 1px solid grey;
        font-size: 0.8rem; /* Reduced font size */
      }
    }
  }

  .buttons {
    text-align: center;
    border: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    margin: 10px;

    .btnPrev,
    .btnNext {
      border: none;
      outline: none;
      color: #fff;
      font-size: 14px; /* Adjusted font size */
      font-weight: bold;
      background-color: #f76429;
      border-radius: 5px;
      padding: 5px 10px; /* Adjusted padding */

      &:hover {
        background-color: #000;
        cursor: pointer;
      }
    }
  }
`;


//Cover Page 
export const Cover = styled.div`
  text-align: center;
  width: 80%;
  margin: 18px auto 0;
  position: relative;
  text-transform: capitalize;
  

  .coverText {
    position: absolute;
    color:#fff;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 30%;
    text-shadow: 1px 2px 3px black;
    letter-spacing: 1px;
    line-height: 1;

    h1{
      font-size: 3rem;

    }

    p{
      font-size: 20px;
    }

    em{
      font-size: 15px;
      margin-top: 10px;
    }

  }
    &::before{
    content: "";
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(3,37,65, 0.8);
    border-bottom-left-radius:240px;
    border-bottom-right-radius:240px;
}

    img{
    height: 300px;
    width: 100%;
    border-bottom-left-radius:240px;
    border-bottom-right-radius:240px;
   
    }

    media (max-width: 800px){
      width: 100%;
      margin: 5.2rem auto 0;

      .coverText{
      line-height:1;
      h1{
        font-size: 2.2rem;
        }
      p, em{  
        font-size: 15px;
      }
    }
      &::before, img{
       height:240px;
       border-bottom-left-radius: 0;
       border-bottom-right-radius: 0; 
      }

    }
   
`;

export const SearchBar = styled.div`
  input, button{
    margin: auto;
    outline: none;
    border: none;
    border-radius: 20px;
    position: absolute;
    top:100%;
    transform: translate(-50%, -50%);
    text-align:center;
  }

  input {
    height: 45px;
    width: 70%;
    box-shadow: 1px 1px 6px 2px grey;
    padding: 10px ;
    font-size: 15px;
    border-radius: 20px;

    &::placeholder {
      font-size: 14px;
    }
  }

  button {
    padding: 10px 25px;
    left:81%;
    font-size: 15px;
    background: linear-gradient(90deg,
    rgba(15,255,184,1) 33%,
    rgba(7,110,112,1) 100%);
    font-weight:bolder;
    cursor:pointer;

    &:hover {
      background: linear-gradient(90deg, rgba(7,110,112,1) 33%, rgba(15,255,184,1) 100%);
    }

  }
    @media (max-width: 800px) {
      width: 90%;

      input {
        width: calc(100% - 90px);
      }

      button {
        right: 10px;
        padding: 10px 15px;
        
      }

    }
`;






export const SearchResultsWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Arrange items in a column */
  align-items: center; /* Center items horizontally */
  margin-top: 2rem;

  .searchResults {
    display: flex;
    flex-direction: column; /* Arrange items in a column */
    align-items: center; /* Center items horizontally */
    gap: 10px; /* Space between items */

    .movie {
      width: 100px; /* Container width */
      text-align: center;

      img {
        width: 100px; /* Set width of image */
        height: 150px; /* Set height of image */
        object-fit: cover; /* Ensure image covers the area without distortion */
        border-radius: 10px;
      }

      h3 {
        font-size: 0.8rem; /* Adjust font size */
        margin: 0.5rem 0;
      }
    }
  }
`;
