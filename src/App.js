import React from "react";
import {Route} from 'react-router-dom';
import Form from "./Components/Form";
import HomePage from "./Components/HomePage";


const App = () => {
  return (
    <div>
      <Route exact path ='/'>
          <HomePage />
        </Route>
        <Route path ='/pizza'>
          <Form />
        </Route>
    </div>
  );
};
export default App;
