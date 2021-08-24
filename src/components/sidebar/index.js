import React, { useState, useLayoutEffect, useEffect } from "react";
import MyRangeSlider from "./components/myRangeSlider";
import FilterItem from "./components/filterItem";
import "./sidebar.css";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

const Sidebar = ({
  openSideBar,
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
  //   ============== STATES START ============   //
  // Filter Toggle States
  const [openGenre, setOpenGenre] = useState(false);
  const [openVocal, setOpenVocal] = useState(false);
  const [openMood, setOpenMood] = useState(false);
  const [openBmp, setOpenBmp] = useState(false);
  const [openArtist, setOpenArtist] = useState(false);
  const [openInstrument, setOpenInstrument] = useState(false);

  //   ============== STATES END ============   //

  //   ============== SELECTION FUNCTIONS START ============   //  

  const isAlreadySelected = (title, filterType) => {
    let title1 = title.replace(/\s+/g, "-").toLowerCase();
    let params = queryString.parse(location.search);
    if (filterType === "genres") {
      if (params.genres) {
        if (Array.isArray(params.genres)) {
          for (let i = 0; i < params.genres.length; i++) {
            if (title1 === params.genres[i]) {
              return true;
            }
          }
          return false;
        } else {
          if (title1 === params.genres) {
            return true;
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    }
    else if (filterType === "vocals") {
      if (params.vocals) {
        if (Array.isArray(params.vocals)) {
          for (let i = 0; i < params.vocals.length; i++) {
            if (title1 === params.vocals[i]) {
              return true;
            }
          }
          return false;
        } else {
          if (title1 === params.vocals) {
            return true;
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    }
    else if (filterType === "moods") {
      if (params.moods) {
        if (Array.isArray(params.moods)) {
          for (let i = 0; i < params.moods.length; i++) {
            if (title1 === params.moods[i]) {
              return true;
            }
          }
          return false;
        } else {
          if (title1 === params.moods) {
            return true;
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    }
    else if (filterType === "artists") {
      if (params.artists) {
        if (Array.isArray(params.artists)) {
          for (let i = 0; i < params.artists.length; i++) {
            if (title1 === params.artists[i]) {
              return true;
            }
          }
          return false;
        } else {
          if (title1 === params.artists) {
            return true;
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    }
    else if (filterType === "instruments") {
      if (params.instruments) {
        if (Array.isArray(params.instruments)) {
          for (let i = 0; i < params.instruments.length; i++) {
            if (title1 === params.instruments[i]) {
              return true;
            }
          }
          return false;
        } else {
          if (title1 === params.instruments) {
            return true;
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    }
  };

  // Handle vocal filter selection
  const handleGenreFiltersSelect = (filterText, selectionChange) => {
    if (!isAlreadySelected(filterText, "genres")) {
      if (location.search) {
        history.push(
          `${location.search}&genres=${filterText
            .replace(/\s+/g, "-")
            .toLowerCase()}`
        );
      } else {
        history.push(
          `/royalty-free-music?genres=${filterText
            .replace(/\s+/g, "-")
            .toLowerCase()}`
        );
      }
    } else {
      let params = queryString.parse(location.search);
      let newquery = "";
      let text = filterText.replace(/\s+/g, "-").toLowerCase();
      for (let i = 0; i < Object.keys(params).length; i++) {
        if (Object.keys(params)[i] === "genres") {
          console.log(params.genres);
          if (Array.isArray(params.genres)) {
            for (let i = 0; i < params.genres.length; i++) {
              if (params.genres[i] !== text) {
                newquery += `&genres=${params.genres[i]}`;
              }
            }
          }
        } else if (Object.keys(params)[i] === "vocals") {
          console.log(params.genres);
          if (Array.isArray(params.vocals)) {
            for (let i = 0; i < params.vocals.length; i++) {
              newquery += `&vocals=${params.vocals[i]}`;
            }
          } else {
            newquery += `&vocals=${params.vocals}`;
          }
        } else if (Object.keys(params)[i] === "moods") {
          if (Array.isArray(params.moods)) {
            for (let i = 0; i < params.moods.length; i++) {
              newquery += `&moods=${params.moods[i]}`;
            }
          } else {
            newquery += `&moods=${params.moods}`;
          }
        }
        else if (Object.keys(params)[i] === "artists") {          
          if (Array.isArray(params.artists)) {
            for (let i = 0; i < params.artists.length; i++) {
              newquery += `&artists=${params.artists[i]}`;
            }
          } else {
            newquery += `&artists=${params.artists}`;
          }
        }
        else if (Object.keys(params)[i] === "instruments") {
          console.log(params.instruments);
          if (Array.isArray(params.instruments)) {
            for (let i = 0; i < params.instruments.length; i++) {
              newquery += `&instruments=${params.instruments[i]}`;
            }
          } else {
            newquery += `&instruments=${params.instruments}`;
          }
        }
      }
      history.push(`/royalty-free-music?${newquery}`);
    }
  };
  // Handle vocal filter selection
  const handleVocalFiltersSelect = (filterText, selectionChange) => {
    if (!isAlreadySelected(filterText, "vocals")) {
      if (location.search) {
        history.push(
          `${location.search}&vocals=${filterText
            .replace(/\s+/g, "-")
            .toLowerCase()}`
        );
      } else {
        history.push(
          `/royalty-free-music?vocals=${filterText
            .replace(/\s+/g, "-")
            .toLowerCase()}`
        );
      }
    } else {
      let params = queryString.parse(location.search);
      let newquery = "";
      let text = filterText.replace(/\s+/g, "-").toLowerCase();
      for (let i = 0; i < Object.keys(params).length; i++) {
        if (Object.keys(params)[i] === "vocals") {
          if (Array.isArray(params.vocals)) {
            for (let i = 0; i < params.vocals.length; i++) {
              if (params.vocals[i] !== text) {
                newquery += `&vocals=${params.vocals[i]}`;
              }
            }
          }
        } else if (Object.keys(params)[i] === "genres") {
          if (Array.isArray(params.genres)) {
            for (let i = 0; i < params.genres.length; i++) {
              newquery += `&genres=${params.genres[i]}`;
            }
          } else {
            newquery += `&genres=${params.genres}`;
          }
        } else if (Object.keys(params)[i] === "moods") {
          if (Array.isArray(params.moods)) {
            for (let i = 0; i < params.moods.length; i++) {
              newquery += `&moods=${params.moods[i]}`;
            }
          } else {
            newquery += `&moods=${params.moods}`;
          }
        }
        else if (Object.keys(params)[i] === "artists") {          
          if (Array.isArray(params.artists)) {
            for (let i = 0; i < params.artists.length; i++) {
              newquery += `&artists=${params.artists[i]}`;
            }
          } else {
            newquery += `&artists=${params.artists}`;
          }
        }
        else if (Object.keys(params)[i] === "instruments") {
          console.log(params.instruments);
          if (Array.isArray(params.instruments)) {
            for (let i = 0; i < params.instruments.length; i++) {
              newquery += `&instruments=${params.instruments[i]}`;
            }
          } else {
            newquery += `&instruments=${params.instruments}`;
          }
        }
      }
      history.push(`/royalty-free-music?${newquery}`);
    }
  };
  // Handle mood filter selection
  const handleMoodFiltersSelect = (filterText, selectionChange) => {
    if (!isAlreadySelected(filterText, "moods")) {
      if (location.search) {
        history.push(
          `${location.search}&moods=${filterText
            .replace(/\s+/g, "-")
            .toLowerCase()}`
        );
      } else {
        history.push(
          `/royalty-free-music?moods=${filterText
            .replace(/\s+/g, "-")
            .toLowerCase()}`
        );
      }
    } else {
      let params = queryString.parse(location.search);
      let newquery = "";
      let text = filterText.replace(/\s+/g, "-").toLowerCase();
      for (let i = 0; i < Object.keys(params).length; i++) {
        if (Object.keys(params)[i] === "moods") {          
          if (Array.isArray(params.moods)) {
            for (let i = 0; i < params.moods.length; i++) {
              if (params.moods[i] !== text) {
                newquery += `&moods=${params.moods[i]}`;
              }
            }
          }
        } else if (Object.keys(params)[i] === "genres") {
          console.log(params.genres);
          if (Array.isArray(params.genres)) {
            for (let i = 0; i < params.genres.length; i++) {
              newquery += `&genres=${params.genres[i]}`;
            }
          } else {
            newquery += `&genres=${params.genres}`;
          }
        }
        else if (Object.keys(params)[i] === "vocals") {          
          if (Array.isArray(params.vocals)) {
            for (let i = 0; i < params.vocals.length; i++) {
              newquery += `&vocals=${params.vocals[i]}`;
            }
          } else {
            newquery += `&vocals=${params.vocals}`;
          }
        }
        else if (Object.keys(params)[i] === "artists") {          
          if (Array.isArray(params.artists)) {
            for (let i = 0; i < params.artists.length; i++) {
              newquery += `&artists=${params.artists[i]}`;
            }
          } else {
            newquery += `&artists=${params.artists}`;
          }
        }
        else if (Object.keys(params)[i] === "instruments") {
          console.log(params.instruments);
          if (Array.isArray(params.instruments)) {
            for (let i = 0; i < params.instruments.length; i++) {
              newquery += `&instruments=${params.instruments[i]}`;
            }
          } else {
            newquery += `&instruments=${params.instruments}`;
          }
        }
      }
      history.push(`/royalty-free-music?${newquery}`);
    }
  };
  // Handle artist filter selection
  const handleArtistFiltersSelect = (filterText, selectionChange) => {    
    if (!isAlreadySelected(filterText, "artists")) {
      if (location.search) {
        history.push(
          `${location.search}&artists=${filterText
            .replace(/\s+/g, "-")
            .toLowerCase()}`
        );
      } else {
        history.push(
          `/royalty-free-music?artists=${filterText
            .replace(/\s+/g, "-")
            .toLowerCase()}`
        );
      }
    } else {
      let params = queryString.parse(location.search);
      let newquery = "";
      let text = filterText.replace(/\s+/g, "-").toLowerCase();
      for (let i = 0; i < Object.keys(params).length; i++) {
        if (Object.keys(params)[i] === "artists") {          
          if (Array.isArray(params.artists)) {
            for (let i = 0; i < params.artists.length; i++) {
              if (params.artists[i] !== text) {
                newquery += `&artists=${params.artists[i]}`;
              }
            }
          }
        } else if (Object.keys(params)[i] === "genres") {
          console.log(params.genres);
          if (Array.isArray(params.genres)) {
            for (let i = 0; i < params.genres.length; i++) {
              newquery += `&genres=${params.genres[i]}`;
            }
          } else {
            newquery += `&genres=${params.genres}`;
          }
        }
        else if (Object.keys(params)[i] === "vocals") {
          console.log(params.genres);
          if (Array.isArray(params.vocals)) {
            for (let i = 0; i < params.vocals.length; i++) {
              newquery += `&vocals=${params.vocals[i]}`;
            }
          } else {
            newquery += `&vocals=${params.vocals}`;
          }
        }
        else if (Object.keys(params)[i] === "moods") {
          console.log(params.moods);
          if (Array.isArray(params.moods)) {
            for (let i = 0; i < params.moods.length; i++) {
              newquery += `&moods=${params.moods[i]}`;
            }
          } else {
            newquery += `&moods=${params.moods}`;
          }
        }
        else if (Object.keys(params)[i] === "instruments") {
          console.log(params.instruments);
          if (Array.isArray(params.instruments)) {
            for (let i = 0; i < params.instruments.length; i++) {
              newquery += `&instruments=${params.instruments[i]}`;
            }
          } else {
            newquery += `&instruments=${params.instruments}`;
          }
        }
      }
      history.push(`/royalty-free-music?${newquery}`);
    }
  };
  // Handle instrument filter selection
  const handleInstrumentFiltersSelect = (filterText, selectionChange) => {    
    if (!isAlreadySelected(filterText, "instruments")) {
      if (location.search) {
        history.push(
          `${location.search}&instruments=${filterText
            .replace(/\s+/g, "-")
            .toLowerCase()}`
        );
      } else {
        history.push(
          `/royalty-free-music?instruments=${filterText
            .replace(/\s+/g, "-")
            .toLowerCase()}`
        );
      }
    } else {
      let params = queryString.parse(location.search);
      let newquery = "";
      let text = filterText.replace(/\s+/g, "-").toLowerCase();
      for (let i = 0; i < Object.keys(params).length; i++) {
        if (Object.keys(params)[i] === "instruments") {          
          if (Array.isArray(params.instruments)) {
            for (let i = 0; i < params.instruments.length; i++) {
              if (params.instruments[i] !== text) {
                newquery += `&instruments=${params.instruments[i]}`;
              }
            }
          }
        } else if (Object.keys(params)[i] === "genres") {
          console.log(params.genres);
          if (Array.isArray(params.genres)) {
            for (let i = 0; i < params.genres.length; i++) {
              newquery += `&genres=${params.genres[i]}`;
            }
          } else {
            newquery += `&genres=${params.genres}`;
          }
        }
        else if (Object.keys(params)[i] === "vocals") {
          console.log(params.genres);
          if (Array.isArray(params.vocals)) {
            for (let i = 0; i < params.vocals.length; i++) {
              newquery += `&vocals=${params.vocals[i]}`;
            }
          } else {
            newquery += `&vocals=${params.vocals}`;
          }
        }
        else if (Object.keys(params)[i] === "moods") {
          console.log(params.moods);
          if (Array.isArray(params.moods)) {
            for (let i = 0; i < params.moods.length; i++) {
              newquery += `&moods=${params.moods[i]}`;
            }
          } else {
            newquery += `&moods=${params.moods}`;
          }
        }
        else if (Object.keys(params)[i] === "artists") {
          console.log(params.artists);
          if (Array.isArray(params.artists)) {
            for (let i = 0; i < params.artists.length; i++) {
              newquery += `&artists=${params.artists[i]}`;
            }
          } else {
            newquery += `&artists=${params.artists}`;
          }
        }
      }
      history.push(`/royalty-free-music?${newquery}`);
    }
  };
  //   ============== SELECTION FUNCTIONS END ============   //

  //   ============== TOGGLE FUNCTIONS START ============   //
  // Toggle Genre Filter
  const toggleGenre = () => {
    setOpenGenre((prev) => !prev);
  };
  // Toggle Vocal Filter
  const toggleVocal = () => {
    setOpenVocal((prev) => !prev);
  };

  // Toggle Mood Filter
  const toggleMood = () => {
    setOpenMood((prev) => !prev);
  };
  // Toggle Bmp Filter
  const toggleBmp = () => {
    setOpenBmp((prev) => !prev);
  };
  // Toggle Artist Filter
  const toggleArtist = () => {
    setOpenArtist((prev) => !prev);
  };
  // Toggle Instrument Filter
  const toggleInstrument = () => {
    setOpenInstrument((prev) => !prev);
  };
  //   ============== TOGGLE FUNCTIONS END ============ //

  useEffect(() => {
    if (width <= 768) {
      toggleSideBar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* SIDEBAR START */}
      <div
        style={
          openSideBar
            ? width <= 768
              ? {
                  position: "fixed",
                  top: 70,
                  bottom: 0,
                  display: "block",
                  zIndex: "100",
                }
              : { display: "block" }
            : { display: "none" }
        }
        className="_1wFdm _2GnP1"
      >
        <div
          style={
            width <= 768
              ? {
                  textAlign: "right",
                  color: "white",
                  paddingRight: "20px",
                  paddingTop: "20px",
                }
              : { display: "none" }
          }
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            style={{ cursor: "pointer" }}
            onClick={() => toggleSideBar()}
          >
            <path d="M13.4 12l5.7-5.7A1 1 0 0017.7 5L12 10.6 6.3 4.9A1 1 0 005 6.3l5.7 5.7L5 17.7A1 1 0 106.3 19l5.7-5.7 5.7 5.7a1 1 0 001.4-1.4z" />
          </svg>
        </div>
        <div className="_2_npc" data-e2e="FilterSearch">
          <FilterItem
            title="Genres"
            open={openGenre}
            toggleFunction={toggleGenre}
            filters={genreFilters}
            handleFiltersSelect={handleGenreFiltersSelect}
            isAlreadySelected={isAlreadySelected}
          />
          <FilterItem
            title="Vocals"
            open={openVocal}
            toggleFunction={toggleVocal}
            filters={vocalFilters}
            handleFiltersSelect={handleVocalFiltersSelect}
            isAlreadySelected={isAlreadySelected}
          />
          <FilterItem
            title="Moods"
            open={openMood}
            toggleFunction={toggleMood}
            filters={moodFilters}
            handleFiltersSelect={handleMoodFiltersSelect}
            isAlreadySelected={isAlreadySelected}
          />
          <div className="_2StxQ">
            <button
              className="_1zDtR"
              type="button"
              onClick={() => toggleBmp()}
              style={{ zIndex: "1" }}
            >
              <span className="_3rwAx">
                <span>
                  BPM
                  <span class="qajBV">
                    &nbsp;({bpmValue[0]}-{bpmValue[1]})
                  </span>
                </span>
              </span>
              <span className="_2C2WG">
                <svg width={16} height={16} viewBox="0 0 16 16">
                  {openBmp ? (
                    <path d="M13 9H3a1 1 0 110-2h10a1 1 0 110 2z" />
                  ) : (
                    <path d="M13 7H9V3a1 1 0 00-2 0v4H3a1 1 0 000 2h4v4a1 1 0 002 0V9h4a1 1 0 000-2z" />
                  )}
                </svg>
              </span>
            </button>
            <MyRangeSlider
              open={openBmp}
              value={bpmValue}
              setValue={setbpmValue}
            />
          </div>
          <FilterItem
            title="Artists"
            open={openArtist}
            toggleFunction={toggleArtist}
            filters={artistFilters}
            handleFiltersSelect={handleArtistFiltersSelect}
            isAlreadySelected={isAlreadySelected}
          />
          <FilterItem
            title="Instruments"
            open={openInstrument}
            toggleFunction={toggleInstrument}
            filters={instrumentFilters}
            handleFiltersSelect={handleInstrumentFiltersSelect}
            isAlreadySelected={isAlreadySelected}
          />

          {/* <div className="_2StxQ">
            <button className="_1zDtR" type="button">
              <span className="_3rwAx">
                <span>Duration</span>
              </span>
              <span className="_2C2WG">
                <svg width={16} height={16} viewBox="0 0 16 16">
                  <path d="M13 7H9V3a1 1 0 00-2 0v4H3a1 1 0 000 2h4v4a1 1 0 002 0V9h4a1 1 0 000-2z" />
                </svg>
              </span>
            </button>
          </div>

          <div className="_2StxQ" id="E2E_FilterSection_artists">
            <button className="_1zDtR" type="button">
              <span className="_3rwAx">Artists</span>
              <span className="_2C2WG">
                <svg width={16} height={16} viewBox="0 0 16 16">
                  <path d="M13 7H9V3a1 1 0 00-2 0v4H3a1 1 0 000 2h4v4a1 1 0 002 0V9h4a1 1 0 000-2z" />
                </svg>
              </span>
            </button>
          </div>

          <div className="_2StxQ" id="E2E_FilterSection_instruments">
            <button className="_1zDtR" type="button">
              <span className="_3rwAx">Instruments</span>
              <span className="_2C2WG">
                <svg width={16} height={16} viewBox="0 0 16 16">
                  <path d="M13 9H3a1 1 0 110-2h10a1 1 0 110 2z" />
                </svg>
              </span>
            </button>

            <div>
              <div
                className="_38o4s"
                id="E2E_FilterSectionContainer_instruments"
              >
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Acoustic guitar <span className="_22hsR">1</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Banjo <span className="_22hsR">1</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Bass <span className="_22hsR">11</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Bells <span className="_22hsR">2</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Brass <span className="_22hsR">72</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Cello <span className="_22hsR">2</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Choir <span className="_22hsR">42</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Drones <span className="_22hsR">1</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Drum machine <span className="_22hsR">2</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Drums <span className="_22hsR">51</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Duduk <span className="_22hsR">1</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Dulcimer <span className="_22hsR">2</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Electric guitar <span className="_22hsR">30</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Electronics <span className="_22hsR">3</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Ethnic percussion <span className="_22hsR">1</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Ethnic strings <span className="_22hsR">1</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Female oohs aahs <span className="_22hsR">2</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Female vocals <span className="_22hsR">3</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Flute <span className="_22hsR">2</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Glockenspiel <span className="_22hsR">1</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Handclaps <span className="_22hsR">1</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Horns <span className="_22hsR">3</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Marimba <span className="_22hsR">1</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Musicbox <span className="_22hsR">1</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Orchestra <span className="_22hsR">7</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Pads <span className="_22hsR">2</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Percussion <span className="_22hsR">92</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Piano <span className="_22hsR">51</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Sitar <span className="_22hsR">1</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Sound design <span className="_22hsR">36</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz _3Vzoe" href="/">
                    <span aria-selected="true" className="bNcwi GTtEX" />
                    <span>
                      Strings <span className="_22hsR">126</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Synth bass <span className="_22hsR">11</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Synth drums <span className="_22hsR">9</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Synthesizer <span className="_22hsR">61</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Taiko drums <span className="_22hsR">3</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Timpani <span className="_22hsR">1</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Triangle <span className="_22hsR">1</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Trumpet <span className="_22hsR">1</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Tuba <span className="_22hsR">1</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Violin <span className="_22hsR">4</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Vocal oohs <span className="_22hsR">2</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Vocal samples <span className="_22hsR">3</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Vocals <span className="_22hsR">1</span>
                    </span>
                  </a>
                </div>
                <div>
                  <a className="ZZ-fz" href="/">
                    <span aria-selected="false" className="bNcwi" />
                    <span>
                      Woodwinds <span className="_22hsR">9</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="_2StxQ" id="E2E_FilterSection_Advanced">
            <button className="_1zDtR" type="button">
              <span className="_3rwAx">Advanced</span>
              <span className="_2C2WG">
                <svg width={16} height={16} viewBox="0 0 16 16">
                  <path d="M13 7H9V3a1 1 0 00-2 0v4H3a1 1 0 000 2h4v4a1 1 0 002 0V9h4a1 1 0 000-2z" />
                </svg>
              </span>
            </button>
          </div>
         */}
        </div>
      </div>
      {/* SIDEBAR END */}
    </>
  );
};

export default Sidebar;
