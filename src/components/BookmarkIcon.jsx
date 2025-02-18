import { extractDomain, getFaviconUrl } from "../utils/bookmarkUtils";

const BookmarkIcon = ({ url, onDelete }) => {
    const domain = extractDomain(url);
    const faviconUrl = getFaviconUrl(url);
    // const faviconUrl = "";

    const handleClick = () => {
        window.open(url, "_blank");
    };

    return (
        <div className="relative group">
            <div
                className="w-32 h-32 flex flex-col items-center justify-center bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={handleClick}
            >
                <img
                    src={faviconUrl || "/placeholder.svg"}
                    alt={domain}
                    width={36}
                    height={36}
                    className="mb-2"
                    onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextElementSibling.classList.remove("hidden");
                    }}
                />
                <div className="w-8 h-8 mb-2 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold hidden">
                    {domain[0].toUpperCase()}
                </div>
                <span className="text-base text-center break-all text-gray-900">
                    {domain}
                </span>
            </div>
            <button
                className="absolute top-1 right-1 bg-blue-300 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete();
                }}
            >
                ×
            </button>
        </div>
    );
};

export default BookmarkIcon;
