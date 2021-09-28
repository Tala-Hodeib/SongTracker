import './App.css';
import SearchEngine from './components/SearchEngine/SearchEngine';
import GlobalStyles from "@mui/material/GlobalStyles";
import  CardMap  from './components/Map/CardMap';



function App() {
  return (
    <div className="App">
       <GlobalStyles
        styles={{
          body: { boxSizing: "border-box"},
          "body *": { boxSizing: "border-box"}
        }}
      />
      <SearchEngine/>
      <CardMap/>
    </div>
  );
}

export default App;
