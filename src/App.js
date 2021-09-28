import './App.css';
import SearchEngine from './components/SearchEngine/SearchEngine';
import GlobalStyles from "@mui/material/GlobalStyles";



function App() {
  return (
    <div className="App">
       <GlobalStyles
        styles={{
          body: { boxSizing: "border-box", backgroundColor: "grey" },
          "body *": { boxSizing: "border-box"}
        }}
      />
      <SearchEngine/>

    </div>
  );
}

export default App;
