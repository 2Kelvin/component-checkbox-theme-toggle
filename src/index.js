function App() {
    const [theme, setTheme] = React.useState(lightTheme);

    const darkTheme = {
        backgroundColor: "#0d1117",
        color: "white"
    };

    const lightTheme = {
        backgroundColor: "#efefef",
        color: "black"
    };

    function handleCheckboxClick() {
        setTheme(!theme);
    }

    return (
        <div className="app" style={theme ? darkTheme : lightTheme}>
            <h1>Checkbox Toggle Button</h1>
            <MyCheckbox onclick={handleCheckboxClick} />
        </div>
    );
}

function MyCheckbox({ onclick }) {
    return (
        <input type="checkbox" name="themeCheckbox" className="checkbox" onClick={onclick} />
    );
}

const rootNode = document.getElementById("reactContainer");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));