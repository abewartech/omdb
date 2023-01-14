import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function DetailProdukCard(props) {
    console.log(props.movie);
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.movie.Title}
                subheader={props.movie.Released}
            />
            <CardMedia
                component="img"
                height="194"
                image={props.movie.Poster}
                alt={props.movie.Title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.movie.Plot}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Actors: {props.movie.Actors}</Typography>
                    <Typography paragraph>Awards: {props.movie.Awards}</Typography>
                    <Typography paragraph>Country: {props.movie.Country}</Typography>
                    <Typography paragraph>Director: {props.movie.Director}</Typography>
                    <Typography paragraph>Genre: {props.movie.Genre}</Typography>
                    <Typography paragraph>Language: {props.movie.Language}</Typography>
                    <Typography paragraph>Writer: {props.movie.Writer}</Typography>
                    <Typography paragraph>Rated: {props.movie.Rated}</Typography>
                    <Typography paragraph>imdbRating: {props.movie.imdbRating}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
