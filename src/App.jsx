import "./App.css";
import ActivityCard from "./components/ActivityCard";

const TYPE_EASY = "easy"
const TYPE_LONG = "long"
const TYPE_INTERVALS = "interval"

const testData = [
  {details: {length: 5, type: TYPE_EASY}},
  {details: {length: 10, type: TYPE_INTERVALS}},
  {details: {length: 7, type: TYPE_EASY}},
  {details: {length: 20, type: TYPE_LONG}},
]

function App() {
  return <>{testData.map((entry) => <ActivityCard details={entry.details} />)}</>;
}

export default App;
