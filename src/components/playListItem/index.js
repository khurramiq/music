import React, { useState, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import "./playListItem.css";

const PlayListItem = ({ music, setShowSoundCloud }) => {

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


  let history = useHistory();
  const gotToDetailPage = (music) => {
    history.push(
      `/royalty-free-music/${music.title.replace(/\s+/g, "-").toLowerCase()}`
    );
    localStorage.setItem("detailItem", music);
    // Put the object into storage
    localStorage.setItem("detailItem", JSON.stringify(music));
  };
  return (
    <>
      <div className="_39YFr" id="E2E_SongList">
        <div>
          <div className="_2Bj8P">
            <div className="_3SGGL _17MAc _1xOdi" id="E2E_SongListItem_30125">
              <div className="_3c47N" />
              <div className="_2c6FB">
                <button
                  title="Play Full Song"
                  data-e2e="songPreview-playButton"
                  className="playbutton_radious _1hnuK _2KOJq"
                  style={{ height: 45, minWidth: 45 }}
                  type="button"
                  onClick={() => setShowSoundCloud(true)}
                >
                  <span>
                    <svg width={24} height={24} viewBox="0 0 24 24">
                      <path d="M20.7 12.4L7.9 20a.5.5 0 01-.8-.4v-15a.5.5 0 01.8-.4l12.8 7.5a.5.5 0 010 .8z" />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="_2txjL">
                <div className="_1xOdi" data-e2e="songListItemDetails_30125">
                  <div className="_1u7Ts">
                    <div className="_1xOdi">
                      <div className="_1edU2 _2UJmj">
                        <div
                          className="Hhqqg _5uSGA _3h-vt"
                          onClick={() => gotToDetailPage(music)}
                        >
                          <span className="song_title">{music.title}</span>
                        </div>
                        <div
                          className="_3SGZ5 _5uSGA"
                          id="E2E_SongListItemAuthor_30125"                          
                        >
                          <span className="by">by</span>{" "}
                          <span className="song_by">{music.artist}</span>
                        </div>
                      </div>
                      <div className="_1Ilm8">
                        <div className="DtRto">
                          <a
                            className="_3YQyI"
                            href="/royalty-free-music?similar=no-one-on-earth"
                          >
                            Search similar tracks →
                          </a>
                        </div>
                      </div>
                      <div
                        className="_1HYs5"
                        title="Duration"
                        id="E2E_SongListItemDuration_30125"                        
                        style={width<1260?{ display: "none" }: { color: "white", paddingTop: "5px" } }
                      >
                        {music.duration}
                      </div>
                      <div
                        className="g_zTO"
                        title="BPM"
                        id="E2E_SongListItemBPM_30125"                        
                        style={width<1260?{ display: "none" }: { color: "white", paddingTop: "5px" } }
                      >
                        {music.bpm}
                      </div>
                    </div>
                  </div>

                  <div className="_1XKT9 _1xOdi"
                  style={width<1260?{ display: "none" }: null }
                  >
                    <div className="zmfCD">
                      <div className="_1Aitw _12Hif">
                        <button
                          title="Play Short"
                          data-e2e="songPreview-playButton"
                          className="playbutton_radious _1RWxw _1hnuK _2KOJq"
                          type="button"
                        >
                          <span>15</span>
                        </button>
                        <button
                          title="Play Short"
                          data-e2e="songPreview-playButton"
                          className="playbutton_radious _1RWxw _1hnuK _2KOJq"
                          type="button"
                        >
                          <span>30</span>
                        </button>
                        <button
                          title="Play Short"
                          data-e2e="songPreview-playButton"
                          className="playbutton_radious _1RWxw _1hnuK _2KOJq"
                          type="button"
                        >
                          <span>60</span>
                        </button>
                      </div>
                    </div>
                    {/* <div className="_3Y06Z">
                          <div className="_2Yhv_">
                            <div className="_30dbQ">
                              <button
                                className="P8Lj3 _1RWxw _1hnuK _2KOJq"
                                type="button"
                              >
                                <span>
                                  <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M11.5 4.4C13.5 4.4 15 6 15 8s-1.6 3.6-3.5 3.6H10l.4.4a.6.6 0 010 .8l-.4.2c-.1 0-.3 0-.4-.2l-1.3-1.3-.1-.2v-.7l1.5-1.5h.2L10 9h.1l.3.1a.6.6 0 010 .9l-.4.4h1.6c1.3 0 2.4-1.1 2.4-2.5s-1-2.5-2.4-2.5h-3A.6.6 0 018 5c0-.3.3-.5.6-.5zM6.1 3c.1 0 .3 0 .4.2l1.3 1.3.1.2v.6L6.3 6.9h-.2L6 7l-.3-.1a.6.6 0 010-.9l.4-.4H4.5A2.4 2.4 0 002 8c0 1.4 1 2.5 2.4 2.5h3c.2 0 .5.2.5.6 0 .3-.3.5-.6.5h-3C2.7 11.6 1 10 1 8s1.6-3.6 3.5-3.6H6L5.7 4a.6.6 0 010-.8l.4-.2z" />
                                  </svg>
                                </span>
                              </button>
                            </div>
                            <svg
                              width={16}
                              height={16}
                              className="_2CBBU"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 10.3a.7.7 0 01-.5-.3L4.4 7a.8.8 0 111-1L8 8.4l2.6-2.6a.8.8 0 111 1.1l-3 3a.7.7 0 01-.6.3z" />
                            </svg>
                          </div>
                        </div> */}
                  </div>

                  <div className="_1YYNi">
                    <div className="_16jqA">
                      <button
                        aria-label="Add to Favorites"
                        className="P8Lj3 _1RWxw _1hnuK _1tPSC C70yO _2KOJq E2E_favoriteButton_false_30125"
                        type="button"
                        style={{ border: "none" } }
                      >
                        <span>
                          <span className="_1SqDm">
                            <div
                              style={{
                                transition: "opacity 300ms ease-out",
                              }}
                            >
                              <svg width={24} height={24} viewBox="0 0 24 24">
                                <path d="M12 21a1 1 0 01-.6-.3l-.7-.5c-5.6-4.6-9-7.3-9-11.4 0-2.9 1.3-5 3.7-5.5A6.8 6.8 0 0112 5.5a6.7 6.7 0 016.5-2.2c2.4.6 3.9 2.6 3.9 5.5 0 4-3.5 6.8-9.1 11.4l-.7.5a1 1 0 01-.6.2zM6.8 5a3.7 3.7 0 00-.9.2c-1.5.4-2.3 1.7-2.3 3.6 0 3.1 3.2 5.6 8.4 9.8 5.2-4.2 8.4-6.7 8.4-9.8 0-2-.9-3.2-2.4-3.6a4.7 4.7 0 00-5.1 2.4 1 1 0 01-1.8 0 5 5 0 00-4.3-2.5z" />
                              </svg>
                            </div>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div className="_16jqA">
                      <button
                        aria-label="Add to Playlist"
                        data-e2e="addToPlaylist"
                        className="P8Lj3 _1RWxw _1hnuK _1tPSC C70yO _2KOJq"
                        type="button"
                        style={{ border: "none" }}
                      >
                        <span>
                          <svg width={24} height={24} viewBox="0 0 24 24">
                            <path d="M3.4 6.8v1.6a1 1 0 002 0V6.8H7a1 1 0 000-2H5.4V3.2a1 1 0 00-2 0v1.6H1.8a1 1 0 100 2z" />
                            <path d="M20 7.7h2.2a1 1 0 000-2h-3.5a35.5 35.5 0 01-3.4-.3 5.4 5.4 0 01-.7-.2 4.5 4.5 0 01-.5-.2 4.6 4.6 0 01-.6-.4 5.6 5.6 0 01-.5-.4 8 8 0 01-1.1-1.3 1.4 1.4 0 00-.4-.4 1 1 0 00-1.1 0 1 1 0 00-.2.4 1 1 0 00-.2.5V13a5.6 5.6 0 00-3.2-1c-3 0-5.3 2-5.3 4.6s2.4 4.7 5.3 4.7 5.2-2.1 5.2-4.7V6c2 1.7 4.2 1.7 8 1.7zM6.7 19.4c-1.8 0-3.3-1.2-3.3-2.7s1.5-2.6 3.3-2.6 3.2 1.2 3.2 2.6-1.5 2.7-3.2 2.7z" />
                            <path d="M22.2 10.2h-6.9a1 1 0 100 2h6.9a1 1 0 000-2zm-1.9 7.9h-5a1 1 0 100 2h5a1 1 0 000-2zm1.9-3.9h-6.9a1 1 0 100 2h6.9a1 1 0 000-2z" />
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="_16jqA">
                      <button
                        aria-label="Copy link"
                        className="P8Lj3 _1RWxw _1hnuK _1tPSC C70yO _2KOJq _2WonL"
                        type="button"                        
                        style={width<1260?{ display: "none" }: { border: "none" } }
                      >
                        <span>
                          <svg width={24} height={24} viewBox="0 0 24 24">
                            <path d="M22.5 4l-2.6-2.5a3 3 0 00-4.2 0L11 6.2a3 3 0 000 4.2l.4.4-.6.6-.4-.4a3 3 0 00-4.2 0l-4.7 4.7a3 3 0 000 4.2l2.6 2.6a3 3 0 004.2 0l4.7-4.7a3 3 0 000-4.2l-.8-.8.6-.6.8.8a3 3 0 004.2 0l4.7-4.7a3 3 0 000-4.2zm-11 11a1 1 0 010 1.4L7 21a1 1 0 01-1.4 0L3 18.4A1 1 0 013 17l4.7-4.7a1 1 0 011.4 0l.4.4-1.8 1.8A1 1 0 109 16l1.8-1.8zm9.6-8.1l-4.7 4.7a1 1 0 01-1.4 0l-.8-.8L16 9a1 1 0 00-1.4-1.4l-1.8 1.8-.4-.4a1 1 0 010-1.4L17.1 3a1 1 0 011.4 0l2.6 2.6a1 1 0 010 1.4z" />
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="_16jqA">
                      <button
                        aria-label="Download Preview"
                        data-e2e="download-button"
                        className="P8Lj3 _1RWxw _1hnuK _1tPSC C70yO _2KOJq _3Zhv_"
                        type="button"
                        style={width<1260?{ display: "none" }: { border: "none" } }
                      >
                        <span>
                          <svg width={24} height={24} viewBox="0 0 24 24">
                            <path d="M20 17.6a1 1 0 00-1.4.1L16.8 20H7.2l-1.8-2.3A1 1 0 003.8 19L6 21.6a1 1 0 00.8.4h10.6a1 1 0 00.8-.4l2-2.6a1 1 0 00-.1-1.4zM11.3 15a1 1 0 001.4 0l4.7-4.7A1 1 0 0016 8.8l-3 3V3a1 1 0 00-2 0v8.9l-3-3a1 1 0 00-1.4 1.4z" />
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="_15skf _16jqA"
                    style={width>1260?{ display: "none" }: null }
                    >
                          <div>
                            <button
                              title="BUY LICENSE"
                              data-e2e="addToCart_30125"
                              className="P8Lj3 _1RWxw _1hnuK _1tPSC C70yO _2KOJq _8I5jo"
                              type="button"
                              style={{ border: "none" }}
                            >
                              <span>
                                <svg width={24} height={24} viewBox="0 0 24 24">
                                  <path d="M20.1 14.6H8.4L8 12.1h12.1a1 1 0 001-.8l1-5.4a1 1 0 00-1-1.1H7l-.3-2a1 1 0 00-1-.8H3a1 1 0 000 2h1.8l1.7 11.7a1 1 0 001 .9h12.6a1 1 0 100-2zm-.3-7.8l-.5 3.3H7.7l-.4-3.3zM17.7 18a1.5 1.5 0 100 3 1.5 1.5 0 100-3zm-8.2 0a1.5 1.5 0 100 3 1.5 1.5 0 100-3z" />
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                  </div>

                  <div className="FBHhC" style={width<1260?{ display: "none" }: null }>
                    <div className="WRH_I _16jqA">
                      <div>
                        <button
                          data-e2e="buyButton"
                          className="P8Lj3 _3GnAa _2Kym9 _1hnuK _8I5jo"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayListItem;
