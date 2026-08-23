// before using other component from other file u need to export it from there and import it here
// syntax : import component from filename;
import KgButton from "./kgButton";
import Hello from "./Hello";
import Random from "./Random";

// defined functional component here 
function App() {
  // this below code looks like html code but it is not. this is internally converted into javascript xml code(JSX).
  return <div>
    <h1>
      Hello world
    </h1>
    {/* this KgButton is a function component */}
    <KgButton></KgButton>
    {/* u acn write like as below those are self closing tag  */}
    <Hello/>
    <Random/>
    </div>
}

// Whatever we define in this file that could be exported in another app using below line
// export default component name
export default App;
