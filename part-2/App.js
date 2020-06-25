function App() {
  return (
    <div className="tweets">
      <Tweet username="jpdude" name="Shawn" date="05/25/2020" message="This is my first tweet!" />
      <Tweet username="piratePete" name="Pete" date="06/01/2020" message="@jpdude's tweet is pretty lame" />
      <Tweet username="jpdude" name="Shawn" date="06/02/2020" message="@piratePete Come at me bruh" />
    </div>
  )
}