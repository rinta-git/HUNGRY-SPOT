import { useRouteError } from "react-router";

export const Error = () => {
    const error = useRouteError();
    return (<div style={{textAlign:"center"}}>
    <h2>Oops! Something went wrong.</h2>
    <p>{error.status} - {error.statusText}</p>
    <button>Go Home</button>
    </div>);
}