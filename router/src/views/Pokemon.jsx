import { useLoaderData } from "react-router-dom";

const Pokemon = () => {

    const { data } = useLoaderData();

    let { name } = data;

    return (
        <div>
            <h1>pokemon</h1>
            <h2>{name}</h2>
        </div>
    )
}

export default Pokemon;
