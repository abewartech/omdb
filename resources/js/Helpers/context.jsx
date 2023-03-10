import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";

export const API_URL = `https://www.omdbapi.com/?apikey=94fc83a4`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: "false", msg: "" });
    const [query, setQuery] = useState("");

    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.Response) {
                setIsLoading(false);
                setMovie(data.Search);
            } else {
                setIsError({
                    show: true,
                    msg: data.Error,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            if (query === "") {
                getMovies(`${API_URL}&s=game&page=1`);
            } else getMovies(`${API_URL}&s=${query}`);
        }, 500);
    }, [query]);

    return (
        <AppContext.Provider
            value={{ isLoading, isError, movie, query, setQuery }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { useGlobalContext, AppContext, AppProvider };
