import { useState, useEffect } from "react";
import BookmarkForm from "./components/BookmarkForm";
import BookmarkGrid from "./components/BookmarkGrid";
import {
    saveBookmarks,
    loadBookmarks,
    extractDomain,
} from "./utils/bookmarkUtils";
import { ChevronDown, ChevronUp } from "lucide-react";
import Button from "./components/BookmarkButton.jsx";
import BookmarkSortButtons from "./components/BookmarkSortButtons";
import "./App.css";

const App = () => {
    const [bookmarks, setBookmarks] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const storedBookmarks = loadBookmarks();
        setBookmarks(storedBookmarks);
    }, []);

    const addBookmarks = (newBookmarks) => {
        const updatedBookmarks = [...bookmarks, ...newBookmarks];
        setBookmarks(updatedBookmarks);
        saveBookmarks(updatedBookmarks);
    };

    const deleteBookmark = (index) => {
        const updatedBookmarks = bookmarks.filter((_, i) => i !== index);
        setBookmarks(updatedBookmarks);
        saveBookmarks(updatedBookmarks);
    };

    const handleImport = (importedBookmarks) => {
        const updatedBookmarks = [...importedBookmarks];
        setBookmarks(updatedBookmarks);
        saveBookmarks(updatedBookmarks);
    };

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const handleSortAsc = () => {
        const sortedBookmarks = [...bookmarks].sort((a, b) =>
            extractDomain(a).localeCompare(extractDomain(b))
        );
        setBookmarks(sortedBookmarks);
        saveBookmarks(sortedBookmarks);
    };

    const handleSortDesc = () => {
        const sortedBookmarks = [...bookmarks].sort((a, b) =>
            extractDomain(b).localeCompare(extractDomain(a))
        );
        setBookmarks(sortedBookmarks);
        saveBookmarks(sortedBookmarks);
    };

    return (
        <>
            <main className="container mx-auto p-10 space-y-8 bg-blue-200">
                <div className="flex items-center justify-between">
                    <h1 className="text-blue-600 text-3xl font-bold">
                        Bookmark List App
                    </h1>
                    <BookmarkSortButtons
                        handleSortAsc={handleSortAsc}
                        handleSortDesc={handleSortDesc}
                    />
                    <Button
                        as={"button"}
                        onClick={toggleExpanded}
                        anotherClasses={"bg-blue-400 hover:bg-blue-700"}
                        aria-label={isExpanded ? "Collapse" : "Expand"}
                    >
                        {isExpanded ? (
                            <ChevronUp className="h-6 w-6" />
                        ) : (
                            <ChevronDown className="h-6 w-6" />
                        )}
                    </Button>
                </div>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isExpanded ? " opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    <BookmarkForm
                        onSubmit={addBookmarks}
                        bookmarks={bookmarks}
                        onImport={handleImport}
                    />
                </div>
                <BookmarkGrid bookmarks={bookmarks} onDelete={deleteBookmark} />
            </main>
            {/* <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p> */}
        </>
    );
};

export default App;
