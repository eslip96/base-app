export default function Home(props) {
  return (
    <div>
      <h1>Home Heading</h1>
      <button
        onClick={() => {
          console.log(props.history);
        }}
      >
        Print History Object
      </button>
    </div>
  );
}
