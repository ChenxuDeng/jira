import React from 'react'
import ProjectList from "./pages/projectList";
import {useAuth} from "./context/authContext";
import styled from "@emotion/styled";

const PageHeader=styled.header`
  height: 6rem;
  background-color: gray;
`
const Main=styled.main`
  height: calc(100vh - 6rem);
`
const Container=styled.div`
  display: grid;
  grid-template-rows: 6rem calc(100vh - 6rem);
`

export const Authenticated=()=>{
    const {logout}=useAuth()
    return (
        <Container>
            <header>
                <button onClick={logout}>登出</button>
            </header>
            <main>
                <ProjectList/>
            </main>
        </Container>
    )
}