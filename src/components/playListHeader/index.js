import React, { useState, useLayoutEffect } from "react";

const PlayListHeader = () => {
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
  return (
    <>
      <div className="_3ERvH _17MAc _1xOdi"
      style={width<1260?{ display: "none" }: { color: "white", paddingTop: "5px" } }
      >
        <div className="_3c47N" />
        <div className="_2c6FB" />
        <div className="_2txjL">
          <div className="_1xOdi">
            <div className="_1u7Ts">
              <div className="_1xOdi">
                <div className="_1edU2">
                  <a href="/royalty-free-music?instruments=strings&moods=action-adventure&moods=action-sports&sort=title">
                    Title{" "}
                  </a>
                </div>
                <div className="_1Ilm8" />
                <div className="_1HYs5">
                      <a href="/royalty-free-music?instruments=strings&moods=action-adventure&moods=action-sports&sort=length">
                        Duration{" "}
                      </a>
                    </div>
                <div className="g_zTO">
                      <a href="/royalty-free-music?instruments=strings&moods=action-adventure&moods=action-sports&sort=bpm">
                        BPM{" "}
                      </a>
                    </div>
              </div>
            </div>
            <div className="_1XKT9 _1xOdi">
              {/* <div className="_3D8ys">Instrumental</div> */}
              <div className="zmfCD">Shorts (Sec)</div>
              {/* <div className="_3Y06Z">Loops</div> */}
            </div>
            <div className="_1YYNi" />
            <div className="FBHhC" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayListHeader;
