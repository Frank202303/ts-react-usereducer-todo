import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import tw from "twin.macro";
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Neucha', cursive;
  }
`;

export const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2f74c0;
  font-family: "Neucha", cursive;
`;
// use @media : when less than 800, font-size: 35px
export const TitleSpan = styled.span`
  text-transform: uppercase;
  font-size: 40px;
  margin: 30px 0;
  color: white;
  z-index: 1;
  text-align: center;
  @media (max-width: 800px) {
    margin: 15px 0;
    font-size: 35px;
  }
`;
export const InputWrapper = styled.form.attrs({})`
  display: flex;
  width: 95%;
  position: relative;
  align-items: center;
`;
// input has clasee:.input__box  and  .input__box:focus
// transform to styledComponent: use '&:'
//  when max-width<  700px, set:width is 95%
export const Input = styled.input`
  width: 100%;
  border-radius: 50px;
  padding: 20px 30px;
  font-size: 25px;
  border: none;
  transition: 0.2s;
  box-shadow: inset 0 0 5px black;

  &:focus {
    box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.5);
    outline: none;
  }
  @media (max-width: 700px) {
    width: 95%;
  }
`;
export const Button = styled.button`
  // position: absolute;
  // width: 50px;
  // height: 50px;
  // margin: 12px;
  // border-radius: 50px;
  // right: 0px;
  // border: none;
  // font-size: 15px;
  // background-color: #2f74c0;
  // color: white;
  // transition: 0.2s all;
  // box-shadow: 0 0 10px black;
  ${tw`absolute w-12 h-12 m-3 rounded-full right-0 border-none text-base bg-blue-600 text-white transition-all duration-200 shadow-md`}
  /*  hover style */
    &:hover {
    ${tw`bg-blue-700 shadow-lg`}
    &:active {
      transform: scale(0.8);
      box-shadow: 0 0 5px black;
    }
  }
`;

// class:.todos
export const TodoListWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    width: 95%;
    margin-bottom: 10px;
  }
`;
// when max-width < 1200px, set single Todo :width is 40%
// when max-width < 700px, set single Todo :width is 100%
export const SingleTodoForm = styled.form`
  display: flex;
  border-radius: 5px;
  padding: 20px;
  margin-top: 15px;
  background-image: url("https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg");
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 5px black;
    transform: scale(1.03);
  }
  @media (max-width: 1200px) {
    width: 40%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const SingleTodoSpan = styled.span`
  flex: 1;
  padding: 5px;
  border: none;
  font-size: 20px;
  &.isDone {
    text-decoration: line-through;
  }

  &:focus {
    outline: none;
  }
`;

export const IconsWrapper = styled.div``;
export const SingleIconWrapper = styled.span`
  margin-left: 10px;
  font-size: 25px;
  cursor: pointer;
`;

export const SingleTodoEditInput = styled.input`
  flex: 1;
  padding: 5px;
  border: none;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;
