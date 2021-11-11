import { useState } from "react";
import "./App.css";
import babyNamesData from "./babyNamesData.json";

babyNamesData.sort((a, b) => (a.name < b.name ? -1 : 1));

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNames = babyNamesData.filter((nameInfo) =>
    nameInfo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="names-box">
        <h1>Baby Names Picker</h1>
        <form>
          <label>Search: </label>
          <input
            type="text"
            placeholder="Type to narrow down your choice!"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </form>
        <hr />
        <div className="shown-names">
          {filteredNames.map((baby) => (
            <BabyName key={baby.id} name={baby.name} sex={baby.sex} />
          ))}
        </div>
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
