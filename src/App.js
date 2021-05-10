import "./styles.scss";
import ToolTip from "./ToolTipComponent";

function App() {
  return (
    <div className="App">
      <ToolTip description={"textual information"} direction={"right"} />
      <ToolTip
        description={"Some random text asdfsdf asdfasdf asdfasdf"}
        direction={"left"}
      />
      <ToolTip
        description={"Some random text asdfsdf asdfasdf asdfasdf"}
        direction={"top"}
      />
      <ToolTip
        description={"Some random text asdfsdf asdfasdf asdfasdf"}
        direction={"bottom"}
      />
    </div>
  );
}

export default App;
