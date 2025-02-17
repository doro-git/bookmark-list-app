export function extractDomain(url) {
    try {
        const domain = new URL(url).hostname;
        return domain.startsWith("www.") ? domain.slice(4) : domain;
    } catch {
        return url;
    }
}

export function getFaviconUrl(url) {
    try {
        const domain = new URL(url).origin;
        return `${domain}/favicon.ico`;
    } catch {
        return "";
    }
}

const STORAGE_KEY = "bookmarks";

export function saveBookmarks(bookmarks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
}

export function loadBookmarks() {
    const storedBookmarks = localStorage.getItem(STORAGE_KEY);
    return storedBookmarks ? JSON.parse(storedBookmarks) : [];
}

export function exportBookmarks(bookmarks) {
    const content = bookmarks.join("\n");
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "bookmarks.txt";
    link.click();
    URL.revokeObjectURL(url);
}

export function importBookmarks(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                console.log("File read successfully");
                const content = e.target.result;
                console.log("File content:", content);
                const bookmarks = content
                    .split("\n")
                    .filter((url) => url.trim() !== "");
                console.log("Parsed bookmarks:", bookmarks);
                resolve(bookmarks);
            } catch (error) {
                console.error("Error parsing file:", error);
                reject(error);
            }
        };
        reader.onerror = (error) => {
            console.error("Error reading file:", error);
            reject(error);
        };
        reader.readAsText(file);
    });
}
