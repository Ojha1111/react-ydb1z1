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

  from typing import Optional

from fastapi import FastAPI
from fastapi import FastAPI

app = FastAPI()


@app.get("/items/{item_id}")
async def read_user_item(item_id: str, needy: str):
    item = {"item_id": item_id, "needy": needy}
    return item

app = FastAPI()

{
    "detail": [
        {
            "loc": [
                "query",
                "needy"
            ],
            "msg": "field required",
            "type": "value_error.missing"
        }
    ]
}
@app.get("/items/{item_id}")
async def read_user_item(
    item_id: str, needy: str, skip: int = 0, limit: Optional[int] = None
):
    item = {"item_id": item_id, "needy": needy, "skip": skip, "limit": limit}
    return item
}
