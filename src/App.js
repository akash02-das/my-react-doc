import Clock from "./components/clock";

function App() {
  return (
      // Return 'Clock' component
      <>
        {/* Pass props named locale in the 'Clock' component */}
        <Clock locale='bn-BD' />
        <Clock locale='en-US' />
      </>
  );
}

export default App;
