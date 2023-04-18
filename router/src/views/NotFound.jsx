import { React } from 'react';
import { useRouteError, Link  } from 'react-router-dom';

const NotFound = () => {
    const error = useRouteError();
    console.log(error);

    return (

        <div>
            <h1>{error.status}</h1>
            <p>Page not found</p>
            <p>{error.statusText}</p>
            <Link to="/">Go to home</Link>
        </div>
    );
};

export default NotFound;
