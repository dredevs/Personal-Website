
const e = React.createElement;

function App() {
  return e('h1', null, 'Hello, React!');
}

ReactDOM.render(e(App), document.getElementById('react-root'));
