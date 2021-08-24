import React, { useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import "./playListAboveFilters.css";
import queryString from "query-string";
import { musicConstants } from "../../redux/constants";
const { SELECTED_SORT_ITEM } = musicConstants;

const PlayListAboveFilters = ({
  genreFilters,
  setGenreFilters,
  vocalFilters,
  setVocalFilters,
  moodFilters,
  setMoodFilters,
  artistFilters,
  setArtistFilters,
  instrumentFilters,
  setInstrumentFilters,
  bpmValue,
  setbpmValue,
  addDeleteUrl,
  toggleSideBar,
}) => {
  let location = useLocation();
  const dispatch = useDispatch();
  const _music = useSelector((state) => state.music);
  let history = useHistory();
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
  const [sortOpen, setSortOpen] = useState(false);
  const showFilters1 = () => {    
    
    const deleteFilter = (filterText) => {
      let params = queryString.parse(location.search);
      let newquery = "";
      let text = filterText;
      for (let i = 0; i < Object.keys(params).length; i++) {
        if (Object.keys(params)[i] === "genres") {          
          if (Array.isArray(params.genres)) {
            for (let i = 0; i < params.genres.length; i++) {
              if (params.genres[i] !== text) {
                newquery += `&genres=${params.genres[i]}`;
              }
            }
          }
        } else if (Object.keys(params)[i] === "vocals") {          
          if (Array.isArray(params.vocals)) {
            for (let i = 0; i < params.vocals.length; i++) {
              if (params.vocals[i] !== text) {
                newquery += `&vocals=${params.vocals[i]}`;              
              }
            }
          }
        } else if (Object.keys(params)[i] === "moods") {
          if (Array.isArray(params.moods)) {
            for (let i = 0; i < params.moods.length; i++) {
              if (params.moods[i] !== text) {                
                newquery += `&moods=${params.moods[i]}`;
              }
            }
          }
        }
        else if (Object.keys(params)[i] === "artists") {          
          if (Array.isArray(params.artists)) {
            for (let i = 0; i < params.artists.length; i++) {
              if (params.artists[i] !== text) {                
                newquery += `&artists=${params.artists[i]}`;                
              }
            }
          }
        }
        else if (Object.keys(params)[i] === "instruments") {
          console.log(params.instruments);
          if (Array.isArray(params.instruments)) {
            for (let i = 0; i < params.instruments.length; i++) {
              if (params.instruments[i] !== text) {                
                newquery += `&instruments=${params.instruments[i]}`;                
              }
            }
          }
        }
      }
      history.push(`/royalty-free-music?${newquery}`);
    };

    const showNpmFilters = () => {
      if (bpmValue[0] !== 0 || bpmValue[1] !== 250) {
        return (
          <span
            data-e2e="activeFilter_mood_action-adventure"
            className="P8Lj3 _1RWxw _1hnuK C70yO _1eRGl"
            href="/"
          >
            <span className="h0Y4E">BPM {`${bpmValue[0]}-${bpmValue[1]}`}</span>
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              onClick={() => setbpmValue([0, 250])}
            >
              <path d="M9.4 8l3.3-3.3a1 1 0 00-1.4-1.4L8 6.6 4.7 3.3a1 1 0 00-1.4 1.4L6.6 8l-3.3 3.3a1 1 0 101.4 1.4L8 9.4l3.3 3.3a1 1 0 001.4-1.4z" />
            </svg>
          </span>
        );
      } else {
        return null;
      }
    };

    const showFilters = () => {
      let fA = [];
      let params = queryString.parse(location.search);
      for (let i = 0; i < Object.keys(params).length; i++) {
        if (Object.keys(params)[i] === "genres") {
          if (Array.isArray(params.genres)) {
            for (let i = 0; i < params.genres.length; i++) {
              fA.push(
                <span
                  data-e2e="activeFilter_mood_action-adventure"
                  className="P8Lj3 _1RWxw _1hnuK C70yO _1eRGl"
                  href="/"
                  key={i}
                >
                  <span className="h0Y4E">
                    {params.genres[i].split("-").join(" ")}
                  </span>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    onClick={() => deleteFilter(params.genres[i])}
                  >
                    <path d="M9.4 8l3.3-3.3a1 1 0 00-1.4-1.4L8 6.6 4.7 3.3a1 1 0 00-1.4 1.4L6.6 8l-3.3 3.3a1 1 0 101.4 1.4L8 9.4l3.3 3.3a1 1 0 001.4-1.4z" />
                  </svg>
                </span>
              );
            }
          } else {
            fA.push(
              <span
                data-e2e="activeFilter_mood_action-adventure"
                className="P8Lj3 _1RWxw _1hnuK C70yO _1eRGl"
                href="/"
                key={i}
              >
                <span className="h0Y4E">
                  {params.genres.split("-").join(" ")}
                </span>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  onClick={() => deleteFilter(params.genres)}
                >
                  <path d="M9.4 8l3.3-3.3a1 1 0 00-1.4-1.4L8 6.6 4.7 3.3a1 1 0 00-1.4 1.4L6.6 8l-3.3 3.3a1 1 0 101.4 1.4L8 9.4l3.3 3.3a1 1 0 001.4-1.4z" />
                </svg>
              </span>
            );
          }
        } else if (Object.keys(params)[i] === "vocals") {
          if (Array.isArray(params.vocals)) {
            for (let i = 0; i < params.vocals.length; i++) {
              fA.push(
                <span
                  data-e2e="activeFilter_mood_action-adventure"
                  className="P8Lj3 _1RWxw _1hnuK C70yO _1eRGl"
                  href="/"
                  key={i}
                >
                  <span className="h0Y4E">
                    {params.vocals[i].split("-").join(" ")}
                  </span>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    onClick={() => deleteFilter(params.vocals[i])}
                  >
                    <path d="M9.4 8l3.3-3.3a1 1 0 00-1.4-1.4L8 6.6 4.7 3.3a1 1 0 00-1.4 1.4L6.6 8l-3.3 3.3a1 1 0 101.4 1.4L8 9.4l3.3 3.3a1 1 0 001.4-1.4z" />
                  </svg>
                </span>
              );
            }
          } else {
            fA.push(
              <span
                data-e2e="activeFilter_mood_action-adventure"
                className="P8Lj3 _1RWxw _1hnuK C70yO _1eRGl"
                href="/"
                key={i}
              >
                <span className="h0Y4E">
                  {params.vocals.split("-").join(" ")}
                </span>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  onClick={() => deleteFilter(params.vocals)}
                >
                  <path d="M9.4 8l3.3-3.3a1 1 0 00-1.4-1.4L8 6.6 4.7 3.3a1 1 0 00-1.4 1.4L6.6 8l-3.3 3.3a1 1 0 101.4 1.4L8 9.4l3.3 3.3a1 1 0 001.4-1.4z" />
                </svg>
              </span>
            );
          }
        } else if (Object.keys(params)[i] === "moods") {
          if (Array.isArray(params.moods)) {
            for (let i = 0; i < params.moods.length; i++) {
              fA.push(
                <span
                  data-e2e="activeFilter_mood_action-adventure"
                  className="P8Lj3 _1RWxw _1hnuK C70yO _1eRGl"
                  href="/"
                  key={i}
                >
                  <span className="h0Y4E">
                    {params.moods[i].split("-").join(" ")}
                  </span>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    onClick={() => deleteFilter(params.moods[i])}
                  >
                    <path d="M9.4 8l3.3-3.3a1 1 0 00-1.4-1.4L8 6.6 4.7 3.3a1 1 0 00-1.4 1.4L6.6 8l-3.3 3.3a1 1 0 101.4 1.4L8 9.4l3.3 3.3a1 1 0 001.4-1.4z" />
                  </svg>
                </span>
              );
            }
          } else {
            fA.push(
              <span
                data-e2e="activeFilter_mood_action-adventure"
                className="P8Lj3 _1RWxw _1hnuK C70yO _1eRGl"
                href="/"
                key={i}
              >
                <span className="h0Y4E">
                  {params.moods.split("-").join(" ")}
                </span>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  onClick={() => deleteFilter(params.moods)}
                >
                  <path d="M9.4 8l3.3-3.3a1 1 0 00-1.4-1.4L8 6.6 4.7 3.3a1 1 0 00-1.4 1.4L6.6 8l-3.3 3.3a1 1 0 101.4 1.4L8 9.4l3.3 3.3a1 1 0 001.4-1.4z" />
                </svg>
              </span>
            );
          }
        } else if (Object.keys(params)[i] === "artists") {
          if (Array.isArray(params.artists)) {
            for (let i = 0; i < params.artists.length; i++) {
              fA.push(
                <span
                  data-e2e="activeFilter_mood_action-adventure"
                  className="P8Lj3 _1RWxw _1hnuK C70yO _1eRGl"
                  href="/"
                  key={i}
                >
                  <span className="h0Y4E">
                    {params.artists[i].split("-").join(" ")}
                  </span>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    onClick={() => deleteFilter(params.artists[i])}
                  >
                    <path d="M9.4 8l3.3-3.3a1 1 0 00-1.4-1.4L8 6.6 4.7 3.3a1 1 0 00-1.4 1.4L6.6 8l-3.3 3.3a1 1 0 101.4 1.4L8 9.4l3.3 3.3a1 1 0 001.4-1.4z" />
                  </svg>
                </span>
              );
            }
          } else {
            fA.push(
              <span
                data-e2e="activeFilter_mood_action-adventure"
                className="P8Lj3 _1RWxw _1hnuK C70yO _1eRGl"
                href="/"
                key={i}
              >
                <span className="h0Y4E">
                  {params.artists.split("-").join(" ")}
                </span>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  onClick={() => deleteFilter(params.artists)}
                >
                  <path d="M9.4 8l3.3-3.3a1 1 0 00-1.4-1.4L8 6.6 4.7 3.3a1 1 0 00-1.4 1.4L6.6 8l-3.3 3.3a1 1 0 101.4 1.4L8 9.4l3.3 3.3a1 1 0 001.4-1.4z" />
                </svg>
              </span>
            );
          }
        } else if (Object.keys(params)[i] === "instruments") {
          if (Array.isArray(params.instruments)) {
            for (let i = 0; i < params.instruments.length; i++) {
              fA.push(
                <span
                  data-e2e="activeFilter_mood_action-adventure"
                  className="P8Lj3 _1RWxw _1hnuK C70yO _1eRGl"
                  href="/"
                  key={i}
                >
                  <span className="h0Y4E">
                    {params.instruments[i].split("-").join(" ")}
                  </span>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    onClick={() => deleteFilter(params.instruments[i])}
                  >
                    <path d="M9.4 8l3.3-3.3a1 1 0 00-1.4-1.4L8 6.6 4.7 3.3a1 1 0 00-1.4 1.4L6.6 8l-3.3 3.3a1 1 0 101.4 1.4L8 9.4l3.3 3.3a1 1 0 001.4-1.4z" />
                  </svg>
                </span>
              );
            }
          } else {
            fA.push(
              <span
                data-e2e="activeFilter_mood_action-adventure"
                className="P8Lj3 _1RWxw _1hnuK C70yO _1eRGl"
                href="/"
                key={i}
              >
                <span className="h0Y4E">
                  {params.instruments.split("-").join(" ")}
                </span>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  onClick={() => deleteFilter(params.instruments)}
                >
                  <path d="M9.4 8l3.3-3.3a1 1 0 00-1.4-1.4L8 6.6 4.7 3.3a1 1 0 00-1.4 1.4L6.6 8l-3.3 3.3a1 1 0 101.4 1.4L8 9.4l3.3 3.3a1 1 0 001.4-1.4z" />
                </svg>
              </span>
            );
          }
        }
      }      
      return fA;
    };

    return (
      <div className="_1Aitw _3zBs1">        
        {showFilters()}
        {showNpmFilters()}
      </div>
    );
  };

  const handleSortSelect = (selected) => {
    dispatch({ type: SELECTED_SORT_ITEM, payload: selected });
    setSortOpen(false);
  };

  const showListing = () => {
    return (
      <div
        className="v1iFY _1Aitw _3zBs1"
        style={
          width <= 768
            ? { display: "flex", justifyContent: "space-between" }
            : null
        }
      >
        <button
          className="P8Lj3 _1RWxw _1hnuK C70yO _2cfsN"
          type="button"
          style={width >= 768 ? { display: "none" } : null}
          onClick={() => toggleSideBar()}
        >
          <span>
            <svg width={24} height={24} viewBox="0 0 24 24">
              <path d="M4 8.5h2a3.2 3.2 0 006 0h8a1 1 0 000-2h-8a3.2 3.2 0 00-6 0H4a1 1 0 000 2zm5-2.2a1.3 1.3 0 11-1.3 1.2A1.3 1.3 0 019 6.3zm11 9.2h-2a3.2 3.2 0 00-6.2 0H4a1 1 0 000 2h7.8a3.2 3.2 0 006.1 0H20a1 1 0 000-2zm-5.1 2.2a1.3 1.3 0 111.2-1.2 1.3 1.3 0 01-1.2 1.2z" />
            </svg>
            &nbsp;Filter
          </span>
        </button>
        <div className="_16jqA">
          <button
            title="Sort Tracks"
            id="E2E_SortTracksContracted"
            className="P8Lj3 _1RWxw _1hnuK C70yO _1EtLf"
            type="button"
            onClick={() => setSortOpen(!sortOpen)}
          >
            <span>
              <svg width={16} height={16} viewBox="0 0 16 16">
                <path d="M7.7 9.5a.7.7 0 00-1 0l-2 2V2.7a.8.8 0 10-1.5 0v8.8l-1.9-2a.8.8 0 00-1 1.1l3.2 3.2a.8.8 0 001 0l3.2-3.2a.7.7 0 000-1zm8-4.1L12.5 2a.7.7 0 00-1 0L8.3 5.4a.8.8 0 101 1l2-2v8.9a.8.8 0 001.4 0V4.5l2 2a.8.8 0 101-1.1z" />
              </svg>
              &nbsp;&nbsp;{_music.selectedSortItem}&nbsp;
              <svg width={16} height={16} viewBox="0 0 16 16">
                <path d="M8 10.3a.7.7 0 01-.5-.3L4.4 7a.8.8 0 111-1L8 8.4l2.6-2.6a.8.8 0 111 1.1l-3 3a.7.7 0 01-.6.3z" />
              </svg>
            </span>
          </button>

          <div
            className="_30AID"
            style={
              sortOpen
                ? { transition: "opacity 200ms ease-out 0s" }
                : { display: "none" }
            }
          >
            <div
              className="_119tv _3Iahq"
              style={{ left: "-59.8984px", maxWidth: 1045 }}
            >
              <div
                className="_1ORAT"
                style={{ color: "rgb(255, 255, 255)", right: 0 }}
              />
              <div
                className="_3OJMp inverted"
                style={{ backgroundColor: "rgb(255, 255, 255)" }}
              >
                <div>
                  <span
                    style={{ cursor: "pointer" }}
                    className="_3XF8I _2-G8W"
                    // href="/royalty-free-music?moods=action-sports&sort=relevant"
                    onClick={() => handleSortSelect("Most Relevant")}
                  >
                    <span id="E2E_relevantSelected">Most Relevant</span>
                    <svg
                      style={
                        _music.selectedSortItem === "Most Relevant"
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      width={16}
                      height={16}
                      className="_1i0Ld"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.3 3.7L5.6 11 2.7 7.7a1 1 0 00-1.4 1.4l3.5 4a1 1 0 00.7.2 1 1 0 00.8-.2l8.4-8a1 1 0 00-1.4-1.4z" />
                    </svg>
                  </span>
                  <span
                    style={{ cursor: "pointer" }}
                    className="_3XF8I"
                    // href="/royalty-free-music?moods=action-sports&sort=popular"
                    onClick={() => handleSortSelect("Popularity")}
                  >
                    <span id="E2E_popularUnSelected">Popularity</span>
                    <svg
                      style={
                        _music.selectedSortItem === "Popularity"
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      width={16}
                      height={16}
                      className="_1i0Ld"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.3 3.7L5.6 11 2.7 7.7a1 1 0 00-1.4 1.4l3.5 4a1 1 0 00.7.2 1 1 0 00.8-.2l8.4-8a1 1 0 00-1.4-1.4z" />
                    </svg>
                  </span>
                  <span
                    style={{ cursor: "pointer" }}
                    className="_3XF8I"
                    // href="/royalty-free-music?moods=action-sports&sort=recent"
                    onClick={() => handleSortSelect("Most Recent")}
                  >
                    <span id="E2E_recentUnSelected">Most Recent</span>
                    <svg
                      style={
                        _music.selectedSortItem === "Most Recent"
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      width={16}
                      height={16}
                      className="_1i0Ld"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.3 3.7L5.6 11 2.7 7.7a1 1 0 00-1.4 1.4l3.5 4a1 1 0 00.7.2 1 1 0 00.8-.2l8.4-8a1 1 0 00-1.4-1.4z" />
                    </svg>
                  </span>
                  <span
                    style={{ cursor: "pointer" }}
                    className="_3XF8I"
                    // href="/royalty-free-music?moods=action-sports&sort=title"
                    onClick={() => handleSortSelect("Alphabetical")}
                  >
                    <span id="E2E_titleUnSelected">Alphabetical</span>
                    <svg
                      style={
                        _music.selectedSortItem === "Alphabetical"
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      width={16}
                      height={16}
                      className="_1i0Ld"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.3 3.7L5.6 11 2.7 7.7a1 1 0 00-1.4 1.4l3.5 4a1 1 0 00.7.2 1 1 0 00.8-.2l8.4-8a1 1 0 00-1.4-1.4z" />
                    </svg>
                  </span>
                  <span
                    style={{ cursor: "pointer" }}
                    className="_3XF8I"
                    // href="/royalty-free-music?moods=action-sports&sort=artist"
                    onClick={() => handleSortSelect("Artist")}
                  >
                    <span id="E2E_artistUnSelected">Artist</span>
                    <svg
                      style={
                        _music.selectedSortItem === "Artist"
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      width={16}
                      height={16}
                      className="_1i0Ld"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.3 3.7L5.6 11 2.7 7.7a1 1 0 00-1.4 1.4l3.5 4a1 1 0 00.7.2 1 1 0 00.8-.2l8.4-8a1 1 0 00-1.4-1.4z" />
                    </svg>
                  </span>
                  <span
                    style={{ cursor: "pointer" }}
                    className="_3XF8I"
                    // href="/royalty-free-music?moods=action-sports&sort=bpm"
                    onClick={() => handleSortSelect("BPM (lowest first)")}
                  >
                    <span id="E2E_bpmUnSelected">BPM (lowest first)</span>
                    <svg
                      style={
                        _music.selectedSortItem === "BPM (lowest first)"
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      width={16}
                      height={16}
                      className="_1i0Ld"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.3 3.7L5.6 11 2.7 7.7a1 1 0 00-1.4 1.4l3.5 4a1 1 0 00.7.2 1 1 0 00.8-.2l8.4-8a1 1 0 00-1.4-1.4z" />
                    </svg>
                  </span>
                  <span
                    style={{ cursor: "pointer" }}
                    className="_3XF8I"
                    // href="/royalty-free-music?moods=action-sports&sort=-bpm"
                    onClick={() => handleSortSelect("BPM (highest first)")}
                  >
                    <span id="E2E_-bpmUnSelected">BPM (highest first)</span>
                    <svg
                      style={
                        _music.selectedSortItem === "BPM (highest first)"
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      width={16}
                      height={16}
                      className="_1i0Ld"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.3 3.7L5.6 11 2.7 7.7a1 1 0 00-1.4 1.4l3.5 4a1 1 0 00.7.2 1 1 0 00.8-.2l8.4-8a1 1 0 00-1.4-1.4z" />
                    </svg>
                  </span>
                  <span
                    style={{ cursor: "pointer" }}
                    className="_3XF8I"
                    // href="/royalty-free-music?moods=action-sports&sort=length"
                    onClick={() =>
                      handleSortSelect("Duration (shortest first)")
                    }
                  >
                    <span id="E2E_lengthUnSelected">
                      Duration (shortest first)
                    </span>
                    <svg
                      style={
                        _music.selectedSortItem === "Duration (shortest first)"
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      width={16}
                      height={16}
                      className="_1i0Ld"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.3 3.7L5.6 11 2.7 7.7a1 1 0 00-1.4 1.4l3.5 4a1 1 0 00.7.2 1 1 0 00.8-.2l8.4-8a1 1 0 00-1.4-1.4z" />
                    </svg>
                  </span>
                  <span
                    style={{ cursor: "pointer" }}
                    className="_3XF8I"
                    // href="/royalty-free-music?moods=action-sports&sort=-length"
                    onClick={() => handleSortSelect("Duration (longest first)")}
                  >
                    <span id="E2E_-lengthUnSelected">
                      Duration (longest first)
                    </span>
                    <svg
                      style={
                        _music.selectedSortItem === "Duration (longest first)"
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      width={16}
                      height={16}
                      className="_1i0Ld"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.3 3.7L5.6 11 2.7 7.7a1 1 0 00-1.4 1.4l3.5 4a1 1 0 00.7.2 1 1 0 00.8-.2l8.4-8a1 1 0 00-1.4-1.4z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="_3fyuh _1tUb_"
          style={width <= 768 ? { display: "none" } : null}
        >
          <div className="_16jqA">
            <button
              id="E2E_SimpleView"
              aria-label="Simple View"
              className="P8Lj3 _1RWxw _1hnuK C70yO _1StST"
              type="button"
            >
              <span>
                <svg width={24} height={24} viewBox="0 0 24 24">
                  <path d="M8 4.3h12v2H8zm-4 0h2v2H4zm4 4.5h12v2H8zm-4 0h2v2H4zm4 4.5h12v2H8zm-4 0h2v2H4zm4 4.5h12v2H8zm-4 0h2v2H4z" />
                </svg>
              </span>
            </button>
          </div>
          <div className="_16jqA">
            <button
              id="E2E_ExpandedView"
              aria-label="Expanded View"
              className="P8Lj3 _1RWxw _1hnuK C70yO"
              type="button"
            >
              <span>
                <svg width={24} height={24} viewBox="0 0 24 24">
                  <path d="M8 4.5h12v3H8zm-4 0h2v3H4zm4 6h12v3H8zm-4 0h2v3H4zm4 6h12v3H8zm-4 0h2v3H4z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="rkN9G">
        <div className="_1JcWf">
          <h1 className="_1bXlu _1wP-l">
            Royalty Free Music - Incredible music awaits &nbsp;
          </h1>
          <span className="_3AUcc" data-e2e="listHeaderCount">
            (126)
          </span>
        </div>

        <div className="_3Qz8C">
          {showFilters1()}
          <br />
          {showListing()}
        </div>
      </div>
    </>
  );
};

export default PlayListAboveFilters;
