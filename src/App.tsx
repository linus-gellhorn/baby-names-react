import "./App.css";
import babyNamesData from "./babyNamesData.json";

babyNamesData.sort((a, b) => (a.name < b.name ? -1 : 1));

function App(): JSX.Element {
  return (
    <>
      <div className="names-box">
        <h1>Baby Names Picker</h1>
        {babyNamesData.map((baby) => (
          <BabyName key={baby.id} name={baby.name} sex={baby.sex} />
        ))}
      </div>
    </>
  );
}

interface BabyNameProps {
  id?: number;
  name: string;
  sex: string;
}

function BabyName({ name, sex }: BabyNameProps): JSX.Element {
  return <button className={sex + " baby-name"}>{name}</button>;
}

export default App;
