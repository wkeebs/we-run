import "./App.css";
import ActivityCalendar from "./components/ActivityCalendar";
import EditActivity from "./components/EditActivity";
import { TYPE_EASY, TYPE_INTERVALS, TYPE_LONG } from "./data";

const testData = [
  { details: { distance: 5, type: TYPE_EASY } },
  { details: { distance: 10, type: TYPE_INTERVALS } },
  { details: { distance: 7, type: TYPE_EASY } },
  { details: { distance: 20, type: TYPE_LONG } },
  { details: { distance: 21, type: TYPE_LONG } },
  { details: { distance: 22, type: TYPE_LONG } },
  { details: { distance: 23, type: TYPE_LONG } },
  { details: { distance: 24, type: TYPE_LONG } },
  { details: { distance: 25, type: TYPE_LONG } },
  { details: { distance: 25, type: TYPE_LONG } },
  { details: { distance: 25, type: TYPE_LONG } },
  { details: { distance: 25, type: TYPE_LONG } },
  { details: { distance: 25, type: TYPE_LONG } },
  { details: { distance: 25, type: TYPE_LONG } },
  { details: { distance: 25, type: TYPE_LONG } },
  { details: { distance: 25, type: TYPE_LONG } },
  { details: { distance: 25, type: TYPE_LONG } },
  { details: { distance: 25, type: TYPE_LONG } },
  { details: { distance: 25, type: TYPE_LONG } },
  { details: { distance: 25, type: TYPE_LONG } },
];

function App() {
  return (
    <>
      <ActivityCalendar data={testData}></ActivityCalendar>
    </>
  );
}

export default App;
