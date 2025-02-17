import { useState } from "react";
import Button from "./BookmarkButton";
import BookmarkActions from "./BookmarkActions";

const BookmarkForm = ({ onSubmit, bookmarks, onImport }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const urls = input.split("\n").filter((url) => url.trim() !== "");
        onSubmit(urls);
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 mb-5">
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter URLs (one per line)"
                className="text-gray-600 bg-gray-100 w-full p-5 focus:outline-none rounded-lg"
                style={{ height: "200px" }}
            ></textarea>
            <div className="flex gap-4 justify-between">
                <Button
                    type="submit"
                    as={"button"}
                    anotherClasses={"bg-blue-500 hover:bg-blue-700"}
                >
                    Add Bookmarks
                </Button>
                <BookmarkActions bookmarks={bookmarks} onImport={onImport} />
            </div>
        </form>
    );
};
export default BookmarkForm;
