import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
    getGifs(category);

    return (
        <>
            <h4 key={category}></h4>
            <p>{category}</p>
        </>
    );
};
