import { useState } from "react";
import { shorten } from "../api/shorten";
const shortener = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const handleShorten = async (e) => {
    e.preventDefault();
    try {
      const data = await shorten(inputUrl);
      setShortUrl(data.shortUrl);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleShorten}>
        <input
          type="text"
          value={inputUrl}
          placeholder="Enter the url to shrink"
          onChange={(e) => setInputUrl(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {shortUrl && (
        <div>
          <p>Your Url:</p>
          <a href={`http://localhost:8080/${shortUrl}`}>
            http://localhost:8080/{shortUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default shortener;
