import Clock from './components/Clock';

function App() {
    console.log("App Component Rendered")
    return (
        // Return 'Clock' component
        <>
            {/* Pass props named as locale in the 'Clock' component */}
            <Clock/>
        </>
    );
}

export default App;
