import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>🚀 DevOps Demo</h1>

        <p className="subtitle">
          My first React application deployed on AWS EC2
        </p>

        <div className="status">
          <span className="dot"></span>
          Server Status: Running
        </div>

        <div className="cards">
          <div className="card">
            <h2>⚛️ React</h2>
            <p>Frontend Application</p>
          </div>

          <div className="card">
            <h2>☁️ AWS EC2</h2>
            <p>Cloud Server</p>
          </div>

          <div className="card">
            <h2>🌐 Nginx</h2>
            <p>Web Server</p>
          </div>
        </div>

        <button onClick={() => alert("Your DevOps app is working! 🚀")}>
          Test Application
        </button>

        <p className="footer">
          Built while learning DevOps ❤️
        </p>
      </div>
    </div>
  );
}

export default App;