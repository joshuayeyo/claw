import styled from "@emotion/styled"
import Header from "@/components/Header"
import Board from "@/components/Board"

function App() {
  return (
    <Wrapper>
      <Header />
      <Board />
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`