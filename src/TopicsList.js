function TopicsList(props) {
  console.log("rendered List");

  return props.topicsList.map((topic) => {
    return <li>{topic}</li>;
  });
}

export default TopicsList;
