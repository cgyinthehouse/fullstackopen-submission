const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <div>
      <Header course={course} />
      <Content
        names={[part1, part2, part3]}
        exercises={[exercises1, exercises2, exercises3]}
      />
      <Total
        number={[exercises1, exercises2, exercises3].reduce((a, b) => a + b)}
      />
    </div>
  );
};

const Part = ({ name, exercise }) => (
  <p>
    {name} {exercise}
  </p>
);
const Header = ({ course }) => <h1>{course}</h1>;
const Total = ({ number }) => <p>Number of exercises {number}</p>;

const Content = ({ names, exercises }) => {
  return (
    <div>
      <Part name={names[0]} exercise={exercises[0]} />
      <Part name={names[1]} exercise={exercises[1]} />
      <Part name={names[2]} exercise={exercises[2]} />
    </div>
  );
};

export default App;
