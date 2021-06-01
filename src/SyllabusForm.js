import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";

export function SyllabusForm(props) {
  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.desc);
  const [topics, setTopic] = useState(props.topics);

  const handleFormControlChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle((preTitle) => value);
    } else if (name === "desc") {
      setDesc((preDesc) => value);
    }
  };
  const handleSaveForm = (event) => {
    props.formSaved({ ...props, ...{ title: title, desc: desc } });
  };
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          name="title"
          placeholder="Enter title"
          value={title}
          onChange={handleFormControlChange}
        />
        <Form.Text type="text" className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          name="desc"
          placeholder="Enter Desc"
          value={desc}
          onChange={handleFormControlChange}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Button variant="primary" onClick={handleSaveForm}>
        Save
      </Button>
    </Form>
  );
}
