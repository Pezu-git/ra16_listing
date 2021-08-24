
import './App.css';
import Listing from './components/Listing';
import sourceData from './data/data.json'

const items=sourceData

export default function App() {
  return (
    <div>
      <Listing items={items}/>
  </div>
  );
}
