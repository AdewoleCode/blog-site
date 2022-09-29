import AddAtricle from "./component/AddAtricle";
import Articles from "./component/Articles";


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <Articles />
        </div>
        <div className="col-md-4">
          <AddAtricle />
        </div>
      </div>
    </div>
  );
}

export default App;
