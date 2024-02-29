import "./App.css";
import ActivityCalendar from "./components/ActivityCalendar";
import EditActivity from "./components/EditActivity";
import { TYPE_EASY, TYPE_INTERVALS, TYPE_LONG } from "./data";

const testData = [
  { id: 1, details: { distance: 5, type: TYPE_EASY } },
  { id: 2, details: { distance: 10, type: TYPE_INTERVALS } },
  { id: 3, details: { distance: 7, type: TYPE_EASY } },
  { id: 4, details: { distance: 20, type: TYPE_LONG } },
  { id: 5, details: { distance: 21, type: TYPE_LONG } },
  { id: 6, details: { distance: 22, type: TYPE_LONG } },
  { id: 7, details: { distance: 23, type: TYPE_LONG } },
  { id: 8, details: { distance: 24, type: TYPE_LONG } },
  { id: 9, details: { distance: 7, type: TYPE_EASY } },
  { id: 10, details: { distance: 20, type: TYPE_LONG } },
  { id: 11, details: { distance: 21, type: TYPE_LONG } },
  { id: 12, details: { distance: 22, type: TYPE_LONG } },
  { id: 13, details: { distance: 23, type: TYPE_LONG } },
  { id: 14, details: { distance: 24, type: TYPE_LONG } },
];

function App() {
  return (
    <>
      <ActivityCalendar data={testData}></ActivityCalendar>
    </>
  );
}

export default App;
