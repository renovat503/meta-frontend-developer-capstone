import { BrowserRouter as Router } from "react-router-dom";
import RootRoute from "routes";
import { Layout } from "components";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Layout>
        <RootRoute />
      </Layout>
    </Router>
  );
};

export default App;
