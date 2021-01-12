import React, { useState, useEffect, useMemo, useRef, memo } from "react";
import "./App.css";
import { Button, List, ListItem, Card, Flex, Grid } from "component-library-ld";
import { ApiCaller, UserLocation } from "./helpers";
import { getApiKey } from "./utils/getApiKey";
import { ApiResponse } from "./types";
import GoogleAutocomplete from "react-google-places-autocomplete";


const App = memo(() => {
  const [locationObj, setLocationObj] = useState<any>(undefined);
  const count = useRef(0)
  let renders = count.current++


  useEffect(() => {
    UserLocation().then((res) => {
      // if (renders <= 2) {
      console.log(`🟩🟩🟩`, count.current);
      ApiCaller(res);
      // }
    });
  }, []);











  const namesList: string[] = ["Ottawa", "Toronto", "Chicago"];
  const { googleApiKey: apiKey } = getApiKey();
  const listItems = namesList.map((item, index) => {
    return (
      <ListItem key={index.toString()} onClick={() => {}}>
        {item}
      </ListItem>
    );
  });
  return (
    <div className="App">
      <header className="App-header">James Fan</header>
      <List flexDirection={"column"}>{listItems}</List>
      <GoogleAutocomplete
        apiKey={apiKey}
        autocompletionRequest={{
          componentRestrictions: { country: ["us", "ca"] },
        }}
        minLengthAutocomplete={3}
        onLoadFailed={(error) => alert(`Error: ${error}`)}
        selectProps={{
          locationObj,
          onChange: setLocationObj,
        }}
      />
      <Button
        onClick={async () => {
          await ApiCaller("Ottawa, Canada");
        }}
      >
        {"Get weather response from API"}
      </Button>
    </div>
  );
})

export default App;
