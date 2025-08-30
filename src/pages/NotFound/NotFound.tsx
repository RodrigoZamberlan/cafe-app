import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const NotFound: React.FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h2>
          {error.status} - {error.statusText}
        </h2>
        <p>{error.data || "Page not found"}</p>
        <Link to="/">
          <button>Return Home</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Oops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
};

export default NotFound;
