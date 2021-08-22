import { Grid } from "@material-ui/core";
import React from "react";
import "./moreDetail.css";

const MoreDetail = () => {
  // Retrieve the object from storage
  var detailItemObject = localStorage.getItem("detailItem");
  var detailObj = JSON.parse(detailItemObject);
  return (
    <>
      <div className="_3ockE inverted">
        <div
          className="_2tcVG _3hadz _1G6aZ _13PA5"
          style={{ display: "flex" }}
        >
          <Grid container xs={12}>
            <Grid item xs={12} sm={6}>
              <div>
                <div className="_9mOMl _2wnrV">
                  <div className="NfCy-">INCLUDED WITH ANY LICENSE</div>
                </div>
                <div className="_9mOMl _23SOA">
                  <div>
                    <div className="NfCy-">Full</div>
                    <div className="_11CWZ">
                      <div className="_2yl4B _1Aitw _1nSqa">
                        <button
                          title="Play Full Song"
                          data-e2e="songPreview-playButton"
                          className="P8Lj3 _3GnAa _2Kym9 _1hnuK _2KOJq"
                          type="button"
                        >
                          <span>
                            <svg width={24} height={24} viewBox="0 0 24 24">
                              <path d="M20.7 12.4L7.9 20a.5.5 0 01-.8-.4v-15a.5.5 0 01.8-.4l12.8 7.5a.5.5 0 010 .8z" />
                            </svg>
                          </span>
                        </button>
                        <span>Original</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="NfCy-">Shorts</div>
                    <div className="_1Aitw _3zBs1">
                      <button
                        title="Play Short"
                        data-e2e="songPreview-playButton"
                        className="P8Lj3 _3GnAa _2Kym9 _1hnuK _2KOJq"
                        type="button"
                      >
                        <span>15</span>
                      </button>
                      <button
                        title="Play Short"
                        data-e2e="songPreview-playButton"
                        className="P8Lj3 _3GnAa _2Kym9 _1hnuK _2KOJq"
                        type="button"
                      >
                        <span>30</span>
                      </button>
                      <button
                        title="Play Short"
                        data-e2e="songPreview-playButton"
                        className="P8Lj3 _3GnAa _2Kym9 _1hnuK _2KOJq"
                        type="button"
                      >
                        <span>60</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="_9mOMl">
                  <div className="NfCy-">Loops</div>
                  <div className="_1Aitw _3zBs1">
                    <button
                      title="Play Loop"
                      data-e2e="songPreview-playButton"
                      className="P8Lj3 _3GnAa _2Kym9 _1hnuK _2KOJq"
                      type="button"
                    >
                      <span>1</span>
                    </button>
                    <button
                      title="Play Loop"
                      data-e2e="songPreview-playButton"
                      className="P8Lj3 _3GnAa _2Kym9 _1hnuK _2KOJq"
                      type="button"
                    >
                      <span>2</span>
                    </button>
                    <button
                      title="Play Loop"
                      data-e2e="songPreview-playButton"
                      className="P8Lj3 _3GnAa _2Kym9 _1hnuK _2KOJq"
                      type="button"
                    >
                      <span>3</span>
                    </button>
                    <button
                      title="Play Loop"
                      data-e2e="songPreview-playButton"
                      className="P8Lj3 _3GnAa _2Kym9 _1hnuK _2KOJq"
                      type="button"
                    >
                      <span>4</span>
                    </button>
                    <button
                      title="Play Loop"
                      data-e2e="songPreview-playButton"
                      className="P8Lj3 _3GnAa _2Kym9 _1hnuK _2KOJq"
                      type="button"
                    >
                      <span>5</span>
                    </button>
                    <button
                      title="Play Loop"
                      data-e2e="songPreview-playButton"
                      className="P8Lj3 _3GnAa _2Kym9 _1hnuK _2KOJq"
                      type="button"
                    >
                      <span>6</span>
                    </button>
                  </div>
                </div>
                <div className="_9mOMl">
                  <div className="NfCy-">Stems</div>
                  <div className="_1Aitw _3zBs1">
                    <button
                      title="Play Stem"
                      data-e2e="songPreview-playButton"
                      className="P8Lj3 _3GnAa _2Kym9 _1hnuK _2KOJq"
                      type="button"
                    >
                      <span>1</span>
                    </button>
                    <button
                      title="Play Stem"
                      data-e2e="songPreview-playButton"
                      className="P8Lj3 _3GnAa _2Kym9 _1hnuK _2KOJq"
                      type="button"
                    >
                      <span>2</span>
                    </button>
                    <button
                      title="Play Stem"
                      data-e2e="songPreview-playButton"
                      className="P8Lj3 _3GnAa _2Kym9 _1hnuK _2KOJq"
                      type="button"
                    >
                      <span>3</span>
                    </button>
                    <button
                      title="Play Stem"
                      data-e2e="songPreview-playButton"
                      className="P8Lj3 _3GnAa _2Kym9 _1hnuK _2KOJq"
                      type="button"
                    >
                      <span>4</span>
                    </button>
                    <button
                      title="Play Stem"
                      data-e2e="songPreview-playButton"
                      className="P8Lj3 _3GnAa _2Kym9 _1hnuK _2KOJq"
                      type="button"
                    >
                      <span>5</span>
                    </button>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <div className="_9mOMl _2wnrV">
                  <div className="NfCy-">MORE TRACK DETAILS</div>
                </div>
                <div className="_9mOMl">
                  <div className="NfCy-">Genres</div>
                  <div className="_1Aitw _3zBs1">
                    <a className="P8Lj3 _1RWxw _1hnuK" href="/">
                      {detailObj.genre}
                    </a>
                  </div>
                </div>
                <div className="_9mOMl">
                  <div className="NfCy-">Tags</div>
                  <div className="_1Aitw _3zBs1">
                    <a
                      className="P8Lj3 _1RWxw _1hnuK"
                      href="/"
                    >
                      Battle
                    </a>
                    <a
                      className="P8Lj3 _1RWxw _1hnuK"
                      href="/"
                    >
                      Bold
                    </a>
                    <a
                      className="P8Lj3 _1RWxw _1hnuK"
                      href="/"
                    >
                      Building
                    </a>
                    <a
                      className="P8Lj3 _1RWxw _1hnuK"
                      href="/"
                    >
                      Conflict
                    </a>
                    <a
                      className="P8Lj3 _1RWxw _1hnuK"
                      href="/"
                    >
                      Determined
                    </a>
                    <a
                      className="P8Lj3 _1RWxw _1hnuK"
                      href="/"
                    >
                      Dramatic
                    </a>
                    <a
                      className="P8Lj3 _1RWxw _1hnuK"
                      href="/"
                    >
                      Emotional
                    </a>
                    <a
                      className="P8Lj3 _1RWxw _1hnuK"
                      href="/"
                    >
                      Empowering
                    </a>
                    <a
                      className="P8Lj3 _1RWxw _1hnuK"
                      href="/"
                    >
                      Heroic
                    </a>
                    <a
                      className="P8Lj3 _1RWxw _1hnuK"
                      href="/"
                    >
                      Pensive
                    </a>
                    <a
                      className="P8Lj3 _1RWxw _1hnuK"
                      href="/"
                    >
                      Powerful
                    </a>
                    <a
                      className="P8Lj3 _1RWxw _1hnuK"
                      href="/"
                    >
                      Solemn
                    </a>
                    <a
                      className="P8Lj3 _1RWxw _1hnuK"
                      href="/"
                    >
                      Tough
                    </a>
                    <a
                      className="P8Lj3 _1RWxw _1hnuK"
                      href="/"
                    >
                      Triumphant
                    </a>
                  </div>
                </div>
                <div className="_9mOMl">
                  <div className="NfCy-">Moods</div>
                  <div className="_1Aitw _3zBs1">
                    <a
                      className="P8Lj3 _1RWxw _1hnuK"
                      href="/"
                    >
                      {detailObj.mood}
                    </a>
                  </div>
                </div>
                <div className="_9mOMl">
                  <div className="NfCy-">Instruments</div>
                  <div className="_1Aitw _3zBs1">
                    <a
                      className="P8Lj3 _1RWxw _1hnuK"
                      href="/"
                    >
                      {detailObj.instrument}
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default MoreDetail;
