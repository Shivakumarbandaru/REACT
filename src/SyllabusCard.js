import { Button, Card } from "react-bootstrap";

export function SyllabusCard(props) {
  
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        {props.topics.map((topic, index) => {
          return <Card.Text key={`${index}-topictext`}>{topic}</Card.Text>;
          
        })}
        <Button variant="primary" onClick={() => {props.handleEdit(props.id)}}>Edit</Button>
      </Card.Body>
    </Card>
  );
}