import React from 'react'
import styled from 'styled-components'

export default function Spinner() {
  return <StyledSpinner></StyledSpinner>
}

const StyledSpinner = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgb(34, 84, 112), rgb(34, 84, 112));
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
`
