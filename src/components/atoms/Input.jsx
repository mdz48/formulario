import styled from "styled-components";

const InputStyled = styled.input`
    width: 100%;
    height: 40px;
    border: 1px gray solid;
    border-radius: 5px;
    font-size: 20px;
    color: #0308a3;
    padding: 0 10px;
`;

function Input(props) {
    return(
        <InputStyled type={props.type} placeholder={props.placeholder}  onChange={props.onChange} value={props.value}/> 
    )
}

export default Input;