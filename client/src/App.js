
import { useMemo, useState } from "react";
import styled from "styled-components";
import Dashboard from "./components/Dashboard/Dashboard";
import Expenses from "./components/Expenses/Expenses";
import Income from "./components/Income/Income";
import Navigation from "./components/Navigation/Navigation";
import Orb from "./components/Orb/Orb";
import { MainLayout } from "./styles/Layouts";



function App() {

  const [ active, setActive ] = useState(1);

  const displayData = () => {
    switch(active) {
      case 1: 
       return <Dashboard/>
      case 2: 
       return <Dashboard/>
      case 3: 
       return <Income/>
      case 4: 
       return <Expenses/>
      default: 
       return <Dashboard/>
    }
  }

  const orbMemo = useMemo(()=> {
    return <Orb/>
  },[])

  return (
    <AppStyled  className="App">
    {orbMemo}
      <MainLayout>
     <Navigation active={active} setActive={setActive}/>
     <main>
      {displayData()}
     </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
height: 100vh;
background-color: #dbdbdb;
position: relative;

main{
  flex: 1;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  overflow-x: hidden;
  &::-webkit-scrollbar{
    width: 0;
  }
}
`;
export default App;