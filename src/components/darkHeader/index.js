import React, { useState, useLayoutEffect } from "react";
import "./darkHeader.css";

const DarkHeader = ({ toggleSideBar, sidebar }) => {
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  // eslint-disable-next-line no-unused-vars
  const [width, height] = useWindowSize();
  const [myPlayListMouseEnter, setMyPlayListMouseEnter] = useState(false);
  const [myFavirotsMouseEnter, setMyFavirotsMouseEnter] = useState(false);
  return (
    <div className="_2MBps">
      <div className="_14tK7" id="E2E_MusicHeader_RootContainer">
        <div className="_2wcvJ">
          <button
            type="button"
            className="_1iC2i _3HDPS _2Kym9 FEf9u"
            data-e2e="musicHeader-filterButton"
            title="Filter"
            onClick={() => toggleSideBar()}
            style={sidebar ? null : { display: "none" }}
          >
            <svg width={24} height={24} viewBox="0 0 24 24">
              <path d="M4 8.5h2a3.2 3.2 0 006 0h8a1 1 0 000-2h-8a3.2 3.2 0 00-6 0H4a1 1 0 000 2zm5-2.2a1.3 1.3 0 11-1.3 1.2A1.3 1.3 0 019 6.3zm11 9.2h-2a3.2 3.2 0 00-6.2 0H4a1 1 0 000 2h7.8a3.2 3.2 0 006.1 0H20a1 1 0 000-2zm-5.1 2.2a1.3 1.3 0 111.2-1.2 1.3 1.3 0 01-1.2 1.2z" />
            </svg>
            <span className="lZrXn">Filter</span>
          </button>
          
          <div className="_3yP4V"
          style={width<=1260?{display: "none"}:null}
          >
            <div className="_1zzTs inverted _3Oly9 _25Py_">
              <div className="_1pjdr">
                <div className="gAPp2">
                  <svg
                    width={24}
                    height={24}
                    className="_1dkcv"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.2 19.3l-3.6-3.8a7.5 7.5 0 10-1.5 1.3l3.7 3.9a1 1 0 101.4-1.4zM5.5 10.5A5.5 5.5 0 1111 16a5.5 5.5 0 01-5.5-5.5z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search by genre, mood..."
                    maxLength={50}
                    autoComplete="off"
                    aria-label="Search by genre, mood..."
                    data-e2e="searchInput"
                    className="_38nOO"
                  />
                </div>
              </div>
            </div>
          </div>
        
        </div>

        <div className="_3lNa8">
          <button
            className="_2SOf4 _3HDPS _2Kym9 _1uClP"
            data-e2e="musicHeader-genreButton"
            type="button"
          >
            <svg width={24} height={24} viewBox="0 0 24 24">
              <path d="M17 11a4 4 0 114-4 4 4 0 01-4 4zm0-6a2 2 0 102 2 2 2 0 00-2-2zM7 11a4 4 0 114-4 4 4 0 01-4 4zm0-6a2 2 0 102 2 2 2 0 00-2-2zm10 16a4 4 0 114-4 4 4 0 01-4 4zm0-6a2 2 0 102 2 2 2 0 00-2-2zM7 21a4 4 0 114-4 4 4 0 01-4 4zm0-6a2 2 0 102 2 2 2 0 00-2-2z" />
            </svg>
            <span className="lZrXn">Genre</span>
          </button>
          <button
            className="_2SOf4 _3HDPS _2Kym9 _1uClP"
            data-e2e="musicHeader-moodButton"
            type="button"
          >
            <svg width={24} height={24} viewBox="0 0 24 24">
              <path d="M3 20a1 1 0 01-.4-2l5-2a1 1 0 01.6 0l8.8 2 3.8-1a1 1 0 01.4 2l-4 1a1 1 0 01-.4 0L8 18l-4.7 2a1 1 0 01-.4 0zm14-4a1 1 0 01-.4 0L8 12l-4.5 3a1 1 0 11-1-1.7l5-3a1 1 0 011-.1L17 14l3.6-1.8a1 1 0 11.8 1.8l-4 2a1 1 0 01-.4.1z" />
              <path d="M17 11a1 1 0 01-.5-.1L8.1 6.2 3.6 9.8a1 1 0 01-1.2-1.6l5-4a1 1 0 011 0L17 8.7l3.5-2.6a1 1 0 011.2 1.6l-4 3a1 1 0 01-.6.2z" />
            </svg>
            <span className="lZrXn">Mood</span>
          </button>
          <button
            className="_2SOf4 _3HDPS _2Kym9 _1uClP"
            data-e2e="musicHeader-collectionsButton"
            type="button"
          >
            <svg width={24} height={24} viewBox="0 0 24 24">
              <path d="M21 9H3a1 1 0 00-1 1v10a1 1 0 001 1h18a1 1 0 001-1V10a1 1 0 00-1-1zm-1 10H4v-8h16zM5 7.8h14a.8.8 0 000-1.5H5a.8.8 0 000 1.5zm2-3h10a.8.8 0 000-1.5H7a.8.8 0 000 1.5z" />
            </svg>
            <span className="lZrXn">Collections</span>
          </button>
        </div>

        <div className="CfOJJ"
        style={width<=1260?{display: "none"}:null}
        >
          <a
            aria-label="My Playlists"
            className="_15AGO _3HDPS _2Kym9 _1uClP white"
            data-e2e="musicHeader-playlistsButton"
            href="/"
            style={
              myPlayListMouseEnter ? { color: "#dcad54" } : { color: "white" }
            }
            onMouseEnter={() => setMyPlayListMouseEnter(true)}
            onMouseLeave={() => setMyPlayListMouseEnter(false)}
          >
            <div className="_16jqA">
              <svg width={24} height={24} viewBox="0 0 24 24">
                <path d="M19.6 7.9h2.2a1 1 0 000-2H18a31.1 31.1 0 01-2.4-.2 7 7 0 01-.9-.2 4.8 4.8 0 01-.8-.3 4.5 4.5 0 01-.8-.5 5.9 5.9 0 01-.7-.6 9.8 9.8 0 01-.7-.9 2.3 2.3 0 00-.5-.6 1 1 0 00-.6-.1 1 1 0 00-.6.2 1.1 1.1 0 00-.3.5 3.4 3.4 0 000 .9v9.1a5.6 5.6 0 00-3.3-1c-2.9 0-5.2 2.1-5.2 4.7s2.3 4.6 5.2 4.6 5.3-2 5.3-4.6V6c2 1.7 4.1 1.7 7.9 1.8zM6.4 19.5c-1.8 0-3.2-1.2-3.2-2.6s1.4-2.7 3.2-2.7 3.3 1.2 3.3 2.7-1.5 2.6-3.3 2.6z" />
                <path d="M21.8 10.3H15a1 1 0 000 2h6.8a1 1 0 000-2zm-1.9 8h-5a1 1 0 100 2h5a1 1 0 000-2zm1.9-4H15a1 1 0 000 2h6.8a1 1 0 100-2z" />
              </svg>
            </div>
          </a>
          <a
            aria-label="My Favorites"
            className="_15AGO _3HDPS _2Kym9 _1uClP"
            data-e2e="musicHeader-favoritesButton"
            href="/"
            style={
              myFavirotsMouseEnter ? { color: "#dcad54" } : { color: "white" }
            }
            onMouseEnter={() => setMyFavirotsMouseEnter(true)}
            onMouseLeave={() => setMyFavirotsMouseEnter(false)}
          >
            <div className="_16jqA">
              <svg width={24} height={24} viewBox="0 0 24 24">
                <path d="M12 21a1 1 0 01-.6-.3l-.7-.5c-5.6-4.6-9-7.3-9-11.4 0-2.9 1.3-5 3.7-5.5A6.8 6.8 0 0112 5.5a6.7 6.7 0 016.5-2.2c2.4.6 3.9 2.6 3.9 5.5 0 4-3.5 6.8-9.1 11.4l-.7.5a1 1 0 01-.6.2zM6.8 5a3.7 3.7 0 00-.9.2c-1.5.4-2.3 1.7-2.3 3.6 0 3.1 3.2 5.6 8.4 9.8 5.2-4.2 8.4-6.7 8.4-9.8 0-2-.9-3.2-2.4-3.6a4.7 4.7 0 00-5.1 2.4 1 1 0 01-1.8 0 5 5 0 00-4.3-2.5z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div />
    </div>
  );
};

export default DarkHeader;
