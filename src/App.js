import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import ReactWebComponent from "react-web-component";
import SignUp from "./components/SignIn";

const App = () => {
  return (
    <div>
      <StylesProvider>
        <SignUp></SignUp>
      </StylesProvider>
    </div>
  );
};
export default App;

ReactWebComponent.create(<App />,'pyb-mp-alliexpress', false);
