import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import { Button } from "react-bootstrap";

import { SyllabusCard } from "./SyllabusCard";
import { SyllabusForm } from "./SyllabusForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [syllabusItems, setSyllabusItems] = useState([]);

  const handleAddSyllabus = (event) => {
    setSyllabusItems((prevSyllabusItems) => {
      return [
        ...prevSyllabusItems,
        {
          title: "Learn JS",
          desc: "Learn Js and react the heard way",
          topics: [""],
          editMode: true,
          id: uuidv4(),
        },
      ];
    });
  };
  const handleFormSave = (formData) => {
    const { id, title, desc, topics } = formData;
    console.log("formData", formData);
    const syllabusItemsFiltered = syllabusItems.filter(
      (syllabusItem) => syllabusItem.id !== id
    );



    const newSyllabusItems = [
      ...syllabusItemsFiltered,
      { ...formData, editMode: false },
    ];
    setSyllabusItems(newSyllabusItems);
    console.log(syllabusItems);
  };

  const handleEdit = (id) => {

    const formData = syllabusItems.find(syllabusItem => syllabusItem.id === id);

    console.log("form data is ", formData);


    let index = syllabusItems.findIndex(
      syllabusItem => syllabusItem.id === id
    );
    
    console.log(index);
    formData.editMode = true;
    syllabusItems[index] = formData;
    const newSyllabusItem = [...syllabusItems];
    setSyllabusItems(newSyllabusItem);
    console.log("Syllabus items are: ", syllabusItems);
  }

  return (
    <>
      <div className="App">
        <Button variant="secondary" onClick={handleAddSyllabus}>
          Add Syllabus
        </Button>
        {syllabusItems.map((syllabusItem, index) => {
          return syllabusItem.editMode ? (
            <SyllabusForm
              key={`${index}-SyllabusCard`}
              {...syllabusItem}
              formSaved={handleFormSave}
            />
          ) : (
            <SyllabusCard
              key={syllabusItem.id}
              style={{ width: "400px" }}
              {...syllabusItem}
              handleEdit={handleEdit}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;