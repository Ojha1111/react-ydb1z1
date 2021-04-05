import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>

    Grid<Person> grid = new Grid<>();

grid.setSelectionMode(SelectionMode.SINGLE);
SingleSelect<Grid<Person>, Person> personSelect =
        grid.asSingleSelect();

personSelect.addValueChangeListener(e -> {
    Person selectedPerson = e.getValue();
});

grid.setSelectionMode(SelectionMode.MULTI);
MultiSelect<Grid<Person>, Person> multiSelect =
        grid.asMultiSelect();
multiSelect.addValueChangeListener(e -> {
    Set<Person> selectedPersons = e.getValue();
});
  );
}
