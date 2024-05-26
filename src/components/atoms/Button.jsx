import styled from "styled-components";

const ButtonStyled = styled.button`
    width: 80%;
    height: 50px;
    background-color: #0308a3;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    box-shadow: 10px 5px 5px 0px rgba(0,0,0,0.75);
    margin: 6px 0;

    &:hover {
        background-color: #5257de;
    }
`;

function Button(props){
    return(
        <ButtonStyled onClick={props.onClick}>{props.text}</ButtonStyled>
    )
}

export default Button;