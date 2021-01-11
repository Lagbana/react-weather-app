import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, List, ListItem, Card, Flex, Grid } from "component-library-ld";
import { ApiCaller } from "./helpers/ApiCaller";
import { ApiResponse } from './types'
import GoogleAutocomplete from "react-google-places-autocomplete";


const App = () => {

  const namesList: string[] = ["Ottawa", "Toronto", "Chicago"];

  const listItems = namesList.map((item, index) => {
    return (
      <ListItem key={index.toString()} onClick={() => { }}>
        {item}
      </ListItem>
    );
  });
  return (
    <div className="App">
      <header className="App-header">James Fan</header>
      <List flexDirection={"column"}>{listItems}</List>
      <GoogleAutocomplete />
      <Button onClick={async() => { await ApiCaller("Ottawa")}}>{"Get weather response from API"}</Button>
    </div>
  );
};

export default App;
