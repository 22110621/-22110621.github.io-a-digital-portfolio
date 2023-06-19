import Container from "./components/container";
import { useRouteError } from "react-router-dom";

function NotFound() {
  const error = useRouteError();

  const goToProjects = () => window.location.replace("/projects");
  const goHome = () => window.location.replace("/");

  return (
    <Container>
      <div className="page-not-found">
        <div className="main-content">
          <div className="title">
            <h1>It all looks empty here...</h1>
          </div>
          <p>
            It looks like the page you are looking for doesn't or no longer
            exists
          </p>
          <div className="actions">
            <button onClick={goHome} className="btn-primary">
              home
            </button>
            <button onClick={goToProjects} className="btn-primary">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default NotFound;
