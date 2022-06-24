import './App.css'
import Danger from "use_button_style/Core/Danger";
import Success from "use_button_style/Core/Success";
import Primary from "use_button_style/Core/Primary";
import Dark from "use_button_style/Core/Dark";
import Secondary from "use_button_style/Core/Secondary";
import Warning from "use_button_style/Core/Warning"
import Info from "use_button_style/Core/Info";
import Light from "use_button_style/Core/Light"


function App() {
//   console.log("add",add(10,20));
//   console.log("sub",sub(10,20));
//   console.log("textJsUpper",textJsUpper);
//  const Save=()=>{
//   alert(add(10,20))
//  }
//  const Sub=()=>{
//   alert(sub(100,30))
//  }

  return (
    <div className="App">
      <h2>React-com</h2>
     <Danger primary>Save</Danger>
     <Success primary>Success</Success>
     <Primary>Danger</Primary>
     <Dark>Dark</Dark>
     <Warning>Warning</Warning>
     <Secondary>Secondary</Secondary>
     <Info>Info</Info>
     <Light>Light</Light>

    </div>
  );
}
export default App;




