import React from "react";
import Button from "./BookmarkButton";

const BookmarkSortButtons = ({ handleSortAsc, handleSortDesc }) => {
    return (
        <>
            <div className="flex gap-4 mr-auto ml-7 mt-1">
                <Button
                    onClick={handleSortAsc}
                    anotherClasses="text-xs text-blue-400 bg-blue-100 hover:text-blue-600 hover:bg-blue-300"
                >
                    A → Z
                </Button>
                <Button
                    onClick={handleSortDesc}
                    anotherClasses="text-xs text-blue-400 bg-blue-100 hover:text-blue-600 hover:bg-blue-300"
                >
                    Z → A
                </Button>
            </div>
        </>
    );
};

export default BookmarkSortButtons;
