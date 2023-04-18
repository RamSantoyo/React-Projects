import { createBrowserRouter } from "react-router-dom";

import Layaout from "../content/Layout.jsx";
import NotFound from "../views/NotFound.jsx";
import Pokemones from "../views/Pokemones.jsx";
import Favoritos from "../views/Favoritos.jsx"
import Pokemon from "../views/Pokemon.jsx";
import api from "../Apis/Api.jsx";


export const Router = createBrowserRouter([    
    {
      path: "/",
      element: <Layaout />,
      errorElement: <NotFound />,
        children: [
            {
                index : true,
                element: <Pokemones />,
                loader: api.getData,
            },
            {
                path: "/favoritos",
                element: <Favoritos />,                
            },
            {
                path: "/pokemon/:name",
                element: <Pokemon />,
                loader: ({ params }) => api.getPokemon(params.name),
            },  
        ],
    },
]);