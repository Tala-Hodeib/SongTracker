import './App.css';
import SearchEngine from './components/SearchEngine/SearchEngine';
import GlobalStyles from "@mui/material/GlobalStyles";
import SearchResult from './components/SearchResult/SearchResult';



function App() {
  return (
    <div className="App">
       <GlobalStyles
        styles={{
          body: { boxSizing: "border-box", fontFamily:"Raleway"},
          "body *": { boxSizing: "border-box",fontFamily:"Raleway"}
        }}
      />
      <SearchEngine/>
      <SearchResult/>
    </div>
  );
}

export default App;
