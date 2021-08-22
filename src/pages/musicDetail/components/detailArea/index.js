import React, { useState, useLayoutEffect } from "react";
import bgImg from "../../../../assets/img/detailArea.jpg";
import "./detailArea.css";

const DetailArea = () => {
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
  // Retrieve the object from storage
  var detailItemObject = localStorage.getItem("detailItem");
  var detailObj = JSON.parse(detailItemObject);
  return (
    <div className="_1bing _11MAo" style={{ background: `url(${bgImg})` }}>
      <div className="_1VgeC">
        <div className="_2yxNK">
          <button
            title="Play Full Song"
            data-e2e="songPreview-playButton"
            className="P8Lj3 _39ITX _1hnuK _2KOJq J4CLR dtlplay"
            type="button"
          >
            <span>
              <svg width={24} height={24} viewBox="0 0 24 24">
                <path d="M20.7 12.4L7.9 20a.5.5 0 01-.8-.4v-15a.5.5 0 01.8-.4l12.8 7.5a.5.5 0 010 .8z" />
              </svg>
            </span>
          </button>
          <h1 className="_2Zt7D _1CKAi">{detailObj.title}</h1>
          <div className="_116I0">
            Dark and dramatic, featuring piano, strings, brass, synthesizers,
            and boomy beats building to a heroic, powerful mood.
          </div>
          <div className="_2BWz1">
            By{" "}
            <a className="_5id_o _3ZGgq" href="/artist/arthur-basov">
              {detailObj.artist}
            </a>
          </div>
          <div className="_16jqA">
            <div>
              <button
                data-e2e="buyButton"
                className="P8Lj3 _3GnAa _2Kym9 Sr81W _8I5jo"
                type="button"
              >
                <span>
                  BUY LICENSE&nbsp;
                  <svg
                    width={24}
                    height={24}
                    className="_2CBBU"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 15.6a1 1 0 01-.6-.3l-5.5-5.1a1 1 0 011.3-1.5l4.9 4.5 4.8-4.5a1 1 0 111.4 1.5l-5.5 5a1 1 0 01-.7.4z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="z8Plx" style={width<=768?{display: 'none'}:null}>
          <div className="_3mKS0">
            <div className="_16jqA">
              <a className="_1psnD" href="/royalty-free-music?proFree=true">
                <span className="yukoJ">
                  <svg width={32} height={32} viewBox="0 0 32 32">
                    <path d="M14.7 20.7a1 1 0 01-.7-.3l-5.7-6A1 1 0 119.7 13l5 5.3L28.7 5A1 1 0 1130 6.4l-14.6 14a1 1 0 01-.7.3z" />
                    <path d="M14 28.3a12.3 12.3 0 116.8-22.5c.2 0 .4.2.6.4a1 1 0 01-1.2 1.6l-.5-.4a10.3 10.3 0 104.6 8.6 1 1 0 012 0A12.3 12.3 0 0114 28.3z" />
                  </svg>
                </span>
                <span className="_3jvt5">PRO-free</span>
              </a>
            </div>
            <div className="_1psnD">
              <div className="yukoJ">{detailObj.duration}</div>
              <div className="_3jvt5">Minutes</div>
            </div>
            <div className="_1psnD">
              <div className="yukoJ">{detailObj.bpm}</div>
              <div className="_3jvt5">BPM</div>
            </div>
            <button type="button" className="_1psnD">
              <div className="yukoJ">
                <svg width={32} height={32} viewBox="0 0 32 32">
                  <path d="M16 28.8a1 1 0 01-.6-.2l-1-.8C6.1 21.1 1 17 1 11.2c0-4 2-6.9 5.3-7.8A9.7 9.7 0 0116 7a9.5 9.5 0 019.5-3.6c3.4.9 5.5 3.8 5.5 7.8 0 5.8-5 10-13.4 16.6l-1 .8a1 1 0 01-.6.2zM8.3 5.2a6 6 0 00-1.5.2C4.3 6 3 8 3 11.2c0 4.9 4.8 8.7 12.7 15l.3.3.3-.2C24.3 19.9 29 16 29 11.2c0-3-1.4-5.2-4-5.8a7.6 7.6 0 00-8 3.9 1 1 0 01-.9.5 1 1 0 01-.9-.5 8 8 0 00-6.8-4.1z" />
                </svg>
              </div>
              <div className="_3jvt5">Favorite</div>
            </button>
            <button type="button" className="_1psnD">
              <div className="yukoJ">
                <svg width={32} height={32} viewBox="0 0 32 32">
                  <path d="M9.5 7.3H7V4.8a1 1 0 00-2 0v2.5H2.5a1 1 0 000 2H5v2.5a1 1 0 002 0V9.3h2.5a1 1 0 100-2z" />
                  <path d="M26.5 10.2h3a1 1 0 000-2h-7.2l-.5-.1h-.6q-.3 0-.5-.2h-.4l-.5-.2-.4-.1-.4-.2-.4-.2-.4-.2-.3-.3-.4-.3-.4-.3-.3-.4-.4-.4-.4-.5-.4-.5a1.8 1.8 0 00-.1-.2 1 1 0 00-.3-.2 1.1 1.1 0 00-.3-.1.8.8 0 00-.3 0 1.6 1.6 0 00-.3 0 .7.7 0 00-.1.1.8.8 0 00-.2.2 1.1 1.1 0 00-.2.3 1.4 1.4 0 000 .5v13.4A7 7 0 009 16.6c-3.6 0-6.6 2.6-6.6 5.8s3 5.8 6.6 5.8 6.6-2.6 6.6-5.8V7.5c2.8 2.7 5.6 2.7 10.8 2.7zm-17.4 16c-2.5 0-4.6-1.7-4.6-3.8s2-3.8 4.6-3.8 4.6 1.7 4.6 3.8-2 3.8-4.6 3.8z" />
                  <path d="M29.5 14.1h-9a1 1 0 000 2h9a1 1 0 100-2zM27 24.6h-6.6a1 1 0 000 2H27a1 1 0 000-2zm2.5-5.2h-9a1 1 0 000 2h9a1 1 0 100-2z" />
                </svg>
              </div>
              <div className="_3jvt5">Playlist</div>
            </button>
            <button type="button" className="_1psnD">
              <div className="yukoJ">
                <svg width={32} height={32} viewBox="0 0 32 32">
                  <path d="M27.3 29H4.6a1 1 0 01-1-1v-6.8a1 1 0 012 0V27h20.6v-5.8a1 1 0 112 0V28a1 1 0 01-1 1z" />
                  <path d="M22.1 16.9a1 1 0 00-1.4 0L17 20.6V4a1 1 0 00-2 0v16.6L11.3 17a1 1 0 00-1.4 1.4l5.4 5.4a1 1 0 001.4 0l5.4-5.4a1 1 0 000-1.4z" />
                </svg>
              </div>
              <div className="_3jvt5">Download Comp</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailArea;
