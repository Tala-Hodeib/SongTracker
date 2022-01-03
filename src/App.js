import './App.css';
import SearchEngine from './components/SearchEngine/SearchEngine';
import GlobalStyles from "@mui/material/GlobalStyles";
import SearchResult from './components/SearchResult/SearchResult';
import { ThemeProvider} from '@material-ui/core/styles';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Dosis',
       'sans-serif',
    ].join(','),
  },});


function App() {

  const [isVisible, setIsVisible] = useState(false)  
  const showResults = () => setIsVisible(true)
  
// if we want a toggle button we can add "!isVisible" as param
//   const showResults = () => setIsVisible(!isVisible)

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
       <GlobalStyles
        styles={{
          body: {boxSizing: "border-box", backgroundColor:"#240046"},
          "body *": { boxSizing: "border-box",}
        }}
      />
      <SearchEngine handleClick={showResults}/>
      <SearchResult isVisible={isVisible}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
