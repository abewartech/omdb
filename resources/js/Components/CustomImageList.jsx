import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useGlobalContext } from "@/Helpers/context";

function srcset(image, width, height, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${width * cols}&h=${
            height * rows
        }&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${
            height * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function CustomImageList() {
    const { movie } = useGlobalContext();
    const onCLickMovie = (imdbID) => {
        window.location = `detailmovie/${imdbID}`;
    };
    return (
        <ImageList
            sx={{
                width: 1216,
                height: 595,
                // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                transform: "translateZ(0)",
            }}
            rowHeight={400}
            gap={1}
        >
            {movie.map((item) => {
                const cols = item.Year == "2017" ? 2 : 1;
                const rows = item.Year == "2017" ? 2 : 1;

                return (
                    <ImageListItem
                        key={item.imdbID}
                        cols={cols}
                        rows={rows}
                        onClick={() => onCLickMovie(item.imdbID)}
                    >
                        <img
                            {...srcset(item.Poster, 350, 400, rows, cols)}
                            alt={item.Title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            sx={{
                                background:
                                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                            }}
                            title={item.Title}
                            position="top"
                            actionIcon={
                                <IconButton
                                    sx={{ color: "white" }}
                                    aria-label={`star ${item.Title}`}
                                >
                                    <StarBorderIcon />
                                </IconButton>
                            }
                            actionPosition="left"
                        />
                    </ImageListItem>
                );
            })}
        </ImageList>
    );
}
