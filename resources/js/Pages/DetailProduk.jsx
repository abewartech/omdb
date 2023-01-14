import DetailProdukCard from "@/Components/DetailProdukCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";

export default function DetailProduk(props) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        getMoviesById(props.movieId);
    }, []);

    const getMoviesById = async (movieId) => {
        try {
            const res = await fetch(
                `https://www.omdbapi.com/?apikey=94fc83a4&i=${movieId}`
            );
            const data = await res.json();
            if (data) {
                setMovie(data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Detail Movies" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 lg:w-2/4">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <DetailProdukCard movie={movie} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
