import { Button, Flex, Grid, Header } from "component-library-ld";
import "./App.css";

function App() {
  return (
    <>
      <Header color='red'>Weather Dashboard</Header>
      <Button buttonColor="blue" textColor="white">
        Button
      </Button>
      <Flex justifyContent="space-between" >
        <div style={{ height: "100px", width: "200px", background: "gray" }}>
          Flex Item
        </div>
        <div style={{ height: "100px", width: "200px", background: "gray" }}>
          Flex Item
        </div>
        <div style={{ height: "100px", width: "200px", background: "gray" }}>
          Flex Item
        </div>
        <div style={{ height: "100px", width: "200px", background: "gray" }}>
          Flex Item
        </div>
      </Flex>
      <Grid gridTemplateColumns='1fr 1fr 1fr 1fr'>
        <div style={{ height: "100px", width: "200px", background: "brown" }}>
          Grid Item
        </div>
        <div style={{ height: "100px", width: "200px", background: "brown" }}>
          Grid Item
        </div>
        <div style={{ height: "100px", width: "200px", background: "brown" }}>
          Grid Item
        </div>
        <div style={{ height: "100px", width: "200px", background: "brown" }}>
          Grid Item
        </div>
        <div style={{ height: "100px", width: "200px", background: "brown" }}>
          Grid Item
        </div>
      </Grid>
    </>
  );
}

export default App;
