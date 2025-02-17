import BookmarkIcon from "./BookmarkIcon";

const BookmarkGrid = ({ bookmarks, onDelete }) => {
    return (
        <div className="flex flex-wrap gap-4">
            {bookmarks.map((url, index) => (
                <BookmarkIcon
                    key={index}
                    url={url}
                    onDelete={() => onDelete(index)}
                />
            ))}
        </div>
    );
};

export default BookmarkGrid;
