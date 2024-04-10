import './App.css';
import { ChartEditor } from './Charteditor';
import { Barchart } from './components/Barchart';
import { Candlestick } from './components/Candlestick';
import temperatureData from './components/datasets/tempdata';
import { Geochart } from './components/Geochart';
import Header from './components/Header';
import Linechart from './components/Linechart';
import { Piechart } from './components/Piechart';
function App() {

const tempdata = temperatureData

  return (
  <>
    <Header/>
    <div className='App'>
    
      <Linechart data = {tempdata} />
      <Barchart/>
      <Candlestick/>
      <Geochart/>
      <Piechart/>
      <ChartEditor/>

    </div>
    </>
  );
}

export default App;
