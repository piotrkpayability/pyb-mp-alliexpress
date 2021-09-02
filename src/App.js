import React, {forwardRef, useContext, useRef} from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import ReactWebComponent from "react-web-component";
import SignUp from "./components/SignIn";

const App = (props) => {
    const elementRef = useRef(null);

    function integrate(e) {
        console.log(props);
        if(props.integrate){
            props.integrate(e);
        }
        const event = new CustomEvent(`mp-alliexpress-${props.id}`, {
            detail: e,
        } );
        document.dispatchEvent(event);
    }

    return (
        <div ref={props.ref}>
          <StylesProvider >
              <SignUp integrate={integrate}></SignUp>
          </StylesProvider>
        </div>
    );
};
export default App;

ReactWebComponent.create(<App />,'pyb-mp-alliexpress', false);