import babyNamesData from "./babyNamesData.json";

function App(): JSX.Element {
  console.log(babyNamesData[0].name);

  return (
    <>
      <h1>Baby Names Picker</h1>
    </>
  );
}

export default App;
