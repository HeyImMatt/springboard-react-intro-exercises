function Tweet(props) {
  return (
    <div>
      <h3>{props.message}</h3>
      <p>{props.username} - {props.name} - {props.date}</p>
    </div>
  )
}