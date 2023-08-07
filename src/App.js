import "./styles.css";
import useFetchAPI from "./useFetch";

export default function App() {
  const { data, loading, error } = useFetchAPI(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (error) return <p>Error.... </p>;
  if (loading) return <p> Loading... </p>;

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data &&
        data.map((item) => {
          return <li key={item.id}> {item.username} </li>;
        })}
    </div>
  );
}
