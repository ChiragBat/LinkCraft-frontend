import { useEffect, useState } from "react";
import { fetchUrls } from "../api/urlService";

const dashboard = () => {
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    const loadUrls = async () => {
      try {
        const data = await fetchUrls();
        setUrls(data);
      } catch (e) {
        console.log(e);
      }
    };
    loadUrls();
  }, []);
  return (
    <div>
      <h1>DASHBOARD</h1>
      {urls.length === 0 ? (
        <p>Loading or no links yet 🤷‍♂️</p>
      ) : (
        <div className="space-y-4">
          {urls.map((link) => (
            <div
              key={link.id}
              className="bg-gray-900 rounded-xl p-4 border border-pink-600"
            >
              <p className="text-sm text-gray-400">Original:</p>
              <a
                href={link.originalUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline break-words"
              >
                {link.originalUrl}
              </a>

              <p className="mt-2 text-sm text-gray-400">Shortened:</p>
              <a
                href={`http://localhost:8080/${link.shortUrl}`}
                target="_blank"
                rel="noreferrer"
                className="text-pink-400 hover:underline"
              >
                http://localhost:8080/{link.shortUrl}
              </a>

              <p className="mt-2">🖱️ Total Clicks: {link.clickCount}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default dashboard;
