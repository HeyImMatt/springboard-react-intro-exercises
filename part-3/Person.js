function Person(props) {
  return (
  <div className="person">
    <p>Learn some information about this person:</p>
    <p>Name: {props.name.length < 8 ? props.name : props.name.substring(0, 6) + '...'}</p>
    <p>Name: {props.age}</p>
    <h3>{props.age >= 18 ? 'Please go vote!' : 'You must be 18 to vote'}</h3>
  </div>
  )
}