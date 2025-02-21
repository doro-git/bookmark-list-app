import Button from "./BookmarkButton";
import { exportBookmarks, importBookmarks } from "../utils/bookmarkUtils";

const BookmarkActions = ({ bookmarks, onImport }) => {
    const handleExport = () => {
        exportBookmarks(bookmarks);
    };

    const handleImport = async (event) => {
        const file = event.target.files?.[0];
        if (file) {
            try {
                console.log("Importing file:", file.name);
                const importedBookmarks = await importBookmarks(file);
                console.log("Imported bookmarks:", importedBookmarks);
                onImport(importedBookmarks);
                console.log("Import completed");
            } catch (error) {
                console.error("Error importing bookmarks:", error);
                alert("エラーが発生しました。ファイルを確認してください。");
            }
        } else {
            console.log("No file selected");
        }
    };

    return (
        <div className="flex gap-4 justify-end">
            <Button
                as={"button"}
                onClick={handleExport}
                anotherClasses={"bg-blue-300 hover:bg-blue-400"}
            >
                Export Bookmarks
            </Button>
            <Button
                as={"label"}
                anotherClasses={"bg-blue-300 hover:bg-blue-400 cursor-pointer"}
            >
                Import Bookmarks
                <input
                    type="file"
                    accept=".txt"
                    value=""
                    className="hidden"
                    onChange={handleImport}
                    onClick={(e) => (e.target.value = "")}
                />
            </Button>
        </div>
    );
};

export default BookmarkActions;
