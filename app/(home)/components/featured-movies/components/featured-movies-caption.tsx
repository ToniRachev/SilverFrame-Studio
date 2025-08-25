interface FeaturedMoviesCaptionProps {
    captionWrapper: React.RefObject<HTMLDivElement | null>;
}

export default function FeaturedMoviesCaption({ captionWrapper }: Readonly<FeaturedMoviesCaptionProps>) {
    return (
        <div ref={captionWrapper} className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col">
            <h1 className="m-0 p-0 leading-none">A Selection of Our Stories</h1>
            <p className="text-right">Crafted with passion to inspire audiences</p>
        </div>
    )
}