import logo from "../../logo.svg";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Business from "../Business/Business";

function App() {
  const businesses = [1, 2, 3, 4, 5, 6];

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar></SearchBar>
      <BusinessList businesses={businesses}></BusinessList>
    </div>
  );
}

export default App;
