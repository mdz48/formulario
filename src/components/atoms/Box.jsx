import React from 'react'
import styled from 'styled-components'

const BoxStyled = styled.div `
    width: 80%;
    border: 1px gray solid;
    border-radius: 5px;
    font-size: 20px;
    color: #0308a3;
    padding: 0 10px;
`;

export default function Box(props) {

  return (
    <BoxStyled>{props.val}</BoxStyled>
  )
}
