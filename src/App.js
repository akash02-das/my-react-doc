import Clock from './components/Clock';

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
