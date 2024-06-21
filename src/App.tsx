import React from 'react';
import './App.css';
import {useViewportSize} from "./hook/useViewportSize";

function App() {
  const {width,height} = useViewportSize()
  return (
      <>
        Width: {width}, height: {height}
      </>
  );
}

export default App;
