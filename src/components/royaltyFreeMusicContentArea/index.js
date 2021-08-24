/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import PlayListAboveFilters from "../playListAboveFilters";
import PlayListHeader from "../playListHeader";
import PlayListItem from "../playListItem";
import ListNavigation from "../playlistNavigation";
// import { useLocation } from 'react-router-dom';
import Sidebar from "../sidebar";
import { useSelector } from "react-redux";
import queryString from "query-string";
import "./royaltyFreeMusicContentArea.css";
import { useLocation } from "react-router-dom";

const RoyaltyFreeMusicContentArea = ({ openSideBar, toggleSideBar }) => {
  let location = useLocation();
  const _music = useSelector((state) => state.music);
  // eslint-disable-next-line no-unused-vars
  const [showSoundCloud, setShowSoundCloud] = useState(false);
  //   Genres filters State
  const [genreFilters, setGenreFilters] = useState([
    {
      filterText: "Audio Logos",
      moodNumber: 210,
      filtered: false,
    },
    {
      filterText: "Blues",
      moodNumber: 202,
      filtered: false,
      subFilters: [
        {
          filterText: "Acoustic-Blues",
          moodNumber: 20,
          filtered: false,
        },
        {
          filterText: "Electric-Blues",
          moodNumber: 129,
          filtered: false,
        },
      ],
    },
    {
      filterText: "Classical",
      moodNumber: 694,
      filtered: false,
      subFilters: [
        {
          filterText: "20th Century",
          moodNumber: 51,
          filtered: false,
        },
        {
          filterText: "Baroque",
          moodNumber: 82,
          filtered: false,
        },
        {
          filterText: "Classical Period",
          moodNumber: 66,
          filtered: false,
        },
        {
          filterText: "Medieval",
          moodNumber: 19,
          filtered: false,
        },
        {
          filterText: "Original Compositions",
          moodNumber: 251,
          filtered: false,
        },
        {
          filterText: "Romantic Period",
          moodNumber: 145,
          filtered: false,
        },
      ],
    },
    {
      filterText: "Corporate",
      moodNumber: 2318,
      filtered: false,
      subFilters: [
        {
          filterText: "Inspirational",
          moodNumber: 2040,
          filtered: false,
        },
        {
          filterText: "Motivational",
          moodNumber: 589,
          filtered: false,
        },
        {
          filterText: "Underscore",
          moodNumber: 162,
          filtered: false,
        },
      ],
    },
    {
      filterText: "Country",
      moodNumber: 536,
      filtered: false,
      subFilters: [
        {
          filterText: "Americana",
          moodNumber: 290,
          filtered: false,
        },
        {
          filterText: "Bluegrass",
          moodNumber: 179,
          filtered: false,
        },
        {
          filterText: "Country-Folk",
          moodNumber: 115,
          filtered: false,
        },
        {
          filterText: "Country-Pop",
          moodNumber: 52,
          filtered: false,
        },
        {
          filterText: "Country-Rock",
          moodNumber: 78,
          filtered: false,
        },
      ],
    },
  ]);

  //   Vocals filters State
  const [vocalFilters, setVocalFilters] = useState([
    {
      filterText: "All Vocals",
      moodNumber: 6062,
      filtered: false,
    },
    {
      filterText: "Choir / Group",
      moodNumber: 627,
      filtered: false,
    },
    {
      filterText: "Lead Vocals",
      moodNumber: 666,
      filtered: false,
    },
    {
      filterText: "Oohs & Aahs",
      moodNumber: 2536,
      filtered: false,
    },
    {
      filterText: "Samples / Effects",
      moodNumber: 1858,
      filtered: false,
    },
  ]);

  //   Mood filters State
  const [moodFilters, setMoodFilters] = useState([
    {
      filterText: "Action / Sports",
      moodNumber: 126,
      filtered: false,
    },
    {
      filterText: "Adventure / Discovery",
      moodNumber: 1516,
      filtered: false,
    },
    {
      filterText: "Aerobics / Workout",
      moodNumber: 18,
      filtered: false,
    },
    {
      filterText: "Aggressive",
      moodNumber: 129,
      filtered: false,
    },
    {
      filterText: "Comedy / Funny",
      moodNumber: 100,
      filtered: false,
    },
    {
      filterText: "Crime / Thriller / Spy",
      moodNumber: 147,
      filtered: false,
    },
    {
      filterText: "Dark / Somber",
      moodNumber: 372,
      filtered: false,
    },
    {
      filterText: "Epic / Orchestral",
      moodNumber: 1371,
      filtered: false,
    },
    {
      filterText: "Fashion / Lifestyle",
      moodNumber: 228,
      filtered: false,
    },
    {
      filterText: "Feel Good",
      moodNumber: 1082,
      filtered: false,
    },
    {
      filterText: "Gentle / Light",
      moodNumber: 1284,
      filtered: false,
    },
    {
      filterText: "Happy / Cheerful",
      moodNumber: 635,
      filtered: false,
    },
    {
      filterText: "Horror / Scary",
      moodNumber: 179,
      filtered: false,
    },
    {
      filterText: "Magical / Mystical",
      moodNumber: 369,
      filtered: false,
    },
    {
      filterText: "Military / Patriotic",
      moodNumber: 57,
      filtered: false,
    },
    {
      filterText: "Relaxation / Meditation",
      moodNumber: 204,
      filtered: false,
    },
    {
      filterText: "Religious / Christian",
      moodNumber: 10,
      filtered: false,
    },
    {
      filterText: "Romantic / Sentimental",
      moodNumber: 1216,
      filtered: false,
    },
    {
      filterText: "Sad / Nostalgic",
      moodNumber: 610,
      filtered: false,
    },
    {
      filterText: "Sci-Fi / Future",
      moodNumber: 223,
      filtered: false,
    },
    {
      filterText: "Sexy / Sensual",
      moodNumber: 82,
      filtered: false,
    },
    {
      filterText: "Strange / Bizarre",
      moodNumber: 15,
      filtered: false,
    },
    {
      filterText: "Suspense / Drama",
      moodNumber: 673,
      filtered: false,
    },
    {
      filterText: "Underscores",
      moodNumber: 179,
      filtered: false,
    },
    {
      filterText: "Uplifting",
      moodNumber: 2235,
      filtered: false,
    },
    {
      filterText: "Wedding",
      moodNumber: 164,
      filtered: false,
      subFilters: [
        {
          filterText: "Classical",
          moodNumber: 72,
          filtered: false,
        },
        {
          filterText: "Modern",
          moodNumber: 219,
          filtered: false,
        },
      ],
    },
  ]);
  // Bpm filters State
  const [bpmValue, setbpmValue] = useState([0, 250]);
  //   Artist filters State
  const [artistFilters, setArtistFilters] = useState([
    {
      filterText: "Arthur Basov",
      moodNumber: 3,
      filtered: false,
    },
    {
      filterText: "Ben Beiny",
      moodNumber: 1,
      filtered: false,
    },
    {
      filterText: "Big Score Audio",
      moodNumber: 1,
      filtered: false,
    },
    {
      filterText: "Black Rhomb",
      moodNumber: 1,
      filtered: false,
    },
    {
      filterText: "Brightside Studio",
      moodNumber: 6,
      filtered: false,
    },
  ]);
  //   Artist filters State
  const [instrumentFilters, setInstrumentFilters] = useState([
    {
      filterText: "Acoustic guitar",
      moodNumber: 1,
      filtered: false,
    },
    {
      filterText: "Banjo",
      moodNumber: 1,
      filtered: false,
    },
    {
      filterText: "Bass",
      moodNumber: 11,
      filtered: false,
    },
    {
      filterText: "Bells",
      moodNumber: 2,
      filtered: false,
    },
    {
      filterText: "Brass",
      moodNumber: 72,
      filtered: false,
    },
    {
      filterText: "Cello",
      moodNumber: 2,
      filtered: false,
    },
  ]);

  // eslint-disable-next-line no-unused-vars
  const [musicList, setMusicList] = useState([
    {
      title: "Music 1",
      genre: "Audio Logos",
      vocal: "All Vocals",
      mood: "Action / Sports",
      bpm: 20,
      duration: "4:25",
      artist: "Arthur Basov",
      instrument: "Acoustic guitar",
    },
    {
      title: "Music 2",
      genre: "Blues",
      vocal: "Choir / Group",
      mood: "Adventure / Discovery",
      bpm: 50,
      duration: "3:25",
      artist: "Ben Beiny",
      instrument: "Banjo",
    },
    {
      title: "Music 3",
      genre: "Blues",
      vocal: "Choir / Group",
      mood: "Adventure / Discovery",
      bpm: 80,
      duration: "2:25",
      artist: "Ben Beiny",
      instrument: "Banjo",
    },
    {
      title: "Music 4",
      genre: "Acoustic-Blues",
      vocal: "Lead Vocals",
      mood: "Aerobics / Workout",
      bpm: 125,
      duration: "1:35",
      artist: "Big Score Audio",
      instrument: "Bells",
    },
    {
      title: "Music 5",
      genre: "Classical",
      vocal: "Oohs & Aahs",
      mood: "Aggressive",
      bpm: 200,
      duration: "0:35",
      artist: "Black Rhomb",
      instrument: "Cello",
    },
  ]);

  function capitalizeTheFirstLetterOfEachWord(words) {
    var separateWord = words.toLowerCase().split(" ");
    for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] =
        separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
    }
    return separateWord.join(" ");
  }  

  const showMusicList = () => {
    let params = queryString.parse(location.search);
    let newMusicList = [];
    if (
      Object.keys(params).length > 0 ||
      parseInt(bpmValue[0]) !== 0 ||
      parseInt(bpmValue[1]) !== 250
    ) {
      for (let i = 0; i < Object.keys(params).length; i++) {
        if (Object.keys(params)[i] === "genres") {
          for (let j = 0; j < musicList.length; j++) {
            if (Array.isArray(params.genres)) {
              for (let k = 0; k < params.genres.length; k++) {
                if (
                  musicList[j].genre ===
                  capitalizeTheFirstLetterOfEachWord(
                    params.genres[k].replace(/-/g, " ")
                  )
                ) {
                  newMusicList.push(musicList[j]);
                } 
              }              
            } else {
              if (
                musicList[j].genre ===
                capitalizeTheFirstLetterOfEachWord(
                  params.genres.replace(/-/g, " ")
                )
              ) {
                newMusicList.push(musicList[j]);
              } 
            }            
          }
        } else if (Object.keys(params)[i] === "vocals") {
          for (let j = 0; j < musicList.length; j++) {
            if (Array.isArray(params.vocals)) {
              for (let k = 0; k < params.vocals.length; k++) {
                if (
                  musicList[j].vocal ===
                  capitalizeTheFirstLetterOfEachWord(
                    params.vocals[k].replace(/-/g, " ")
                  )
                ) {
                  newMusicList.push(musicList[j]);
                } 
              }              
            } else {
              if (
                musicList[j].vocal ===
                capitalizeTheFirstLetterOfEachWord(
                  params.vocals.replace(/-/g, " ")
                )
              ) {
                newMusicList.push(musicList[j]);
              } 
            }            
          }
        } else if (Object.keys(params)[i] === "moods") {
          for (let j = 0; j < musicList.length; j++) {
            if (Array.isArray(params.moods)) {
              for (let k = 0; k < params.moods.length; k++) {
                if (
                  musicList[j].mood ===
                  capitalizeTheFirstLetterOfEachWord(
                    params.moods[k].replace(/-/g, " ")
                  )
                ) {
                  newMusicList.push(musicList[j]);
                } 
              }              
            } else {
              if (
                musicList[j].mood ===
                capitalizeTheFirstLetterOfEachWord(
                  params.moods.replace(/-/g, " ")
                )
              ) {
                newMusicList.push(musicList[j]);
              } 
            }            
          }
        } else if (Object.keys(params)[i] === "artists") {          
          for (let j = 0; j < musicList.length; j++) {
            if (Array.isArray(params.artists)) {
              for (let k = 0; k < params.artists.length; k++) {
                if (
                  musicList[j].artist ===
                  capitalizeTheFirstLetterOfEachWord(
                    params.artists[k].replace(/-/g, " ")
                  )
                ) {
                  newMusicList.push(musicList[j]);
                } 
              }              
            } else {
              if (
                musicList[j].artist ===
                capitalizeTheFirstLetterOfEachWord(
                  params.artists.replace(/-/g, " ")
                )
              ) {
                newMusicList.push(musicList[j]);
              } 
            }            
          }
        } else if (Object.keys(params)[i] === "instruments") {          
          for (let j = 0; j < musicList.length; j++) {
            if (Array.isArray(params.instruments)) {
              for (let k = 0; k < params.instruments.length; k++) {
                if (
                  musicList[j].instrument ===
                  capitalizeTheFirstLetterOfEachWord(
                    params.instruments[k].replace(/-/g, " ")
                  )
                ) {
                  newMusicList.push(musicList[j]);
                } 
              }              
            } else {
              if (
                musicList[j].instrument ===
                capitalizeTheFirstLetterOfEachWord(
                  params.instruments.replace(/-/g, " ")
                )
              ) {
                newMusicList.push(musicList[j]);
              } 
            }            
          }
        }
      }

      if (parseInt(bpmValue[0]) !== 0 || parseInt(bpmValue[1]) !== 250) {
        for (let j = 0; j < musicList.length; j++) {
          if (
            musicList[j].bpm >= bpmValue[0] &&
            musicList[j].bpm <= bpmValue[1]
          ) {
            newMusicList.push(musicList[j]);
          }
        }
      }

      const uniqueArray = newMusicList.filter(
        (v, i, a) => a.findIndex((t) => t.title === v.title) === i
      );
      if (_music.selectedSortItem === "Artist") {
        return musicList
          .sort((a, b) =>
            a.artist > b.artist ? 1 : b.artist > a.artist ? -1 : 0
          )
          .map((music, i) => (
            <PlayListItem music={music} setShowSoundCloud={setShowSoundCloud} />
          ));
      } else if (_music.selectedSortItem === "Alphabetical") {
        return musicList
          .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
          .map((music, i) => (
            <PlayListItem music={music} setShowSoundCloud={setShowSoundCloud} />
          ));
      } else if (_music.selectedSortItem === "BPM (highest first)") {
        return musicList
          .sort((a, b) => (a.bpm < b.bpm ? 1 : b.bpm < a.bpm ? -1 : 0))
          .map((music, i) => (
            <PlayListItem music={music} setShowSoundCloud={setShowSoundCloud} />
          ));
      } else if (_music.selectedSortItem === "BPM (lowest first)") {
        return musicList
          .sort((a, b) => (a.bpm > b.bpm ? 1 : b.bpm > a.bpm ? -1 : 0))
          .map((music, i) => (
            <PlayListItem music={music} setShowSoundCloud={setShowSoundCloud} />
          ));
      } else if (_music.selectedSortItem === "Duration (shortest first)") {
        return musicList
          .sort((a, b) =>
            a.duration > b.duration ? 1 : b.duration > a.duration ? -1 : 0
          )
          .map((music, i) => (
            <PlayListItem music={music} setShowSoundCloud={setShowSoundCloud} />
          ));
      } else if (_music.selectedSortItem === "Duration (longest first)") {
        return musicList
          .sort((a, b) =>
            a.duration < b.duration ? 1 : b.duration < a.duration ? -1 : 0
          )
          .map((music, i) => (
            <PlayListItem music={music} setShowSoundCloud={setShowSoundCloud} />
          ));
      }
      return uniqueArray.map((music, i) => (
        <PlayListItem music={music} setShowSoundCloud={setShowSoundCloud} />
      ));
    } else {
      if (_music.selectedSortItem === "Artist") {
        return musicList
          .sort((a, b) =>
            a.artist > b.artist ? 1 : b.artist > a.artist ? -1 : 0
          )
          .map((music, i) => (
            <PlayListItem music={music} setShowSoundCloud={setShowSoundCloud} />
          ));
      } else if (_music.selectedSortItem === "Alphabetical") {
        return musicList
          .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
          .map((music, i) => (
            <PlayListItem music={music} setShowSoundCloud={setShowSoundCloud} />
          ));
      } else if (_music.selectedSortItem === "BPM (highest first)") {
        return musicList
          .sort((a, b) => (a.bpm < b.bpm ? 1 : b.bpm < a.bpm ? -1 : 0))
          .map((music, i) => <PlayListItem music={music} />);
      } else if (_music.selectedSortItem === "BPM (lowest first)") {
        return musicList
          .sort((a, b) => (a.bpm > b.bpm ? 1 : b.bpm > a.bpm ? -1 : 0))
          .map((music, i) => (
            <PlayListItem music={music} setShowSoundCloud={setShowSoundCloud} />
          ));
      } else if (_music.selectedSortItem === "Duration (shortest first)") {
        return musicList
          .sort((a, b) =>
            a.duration > b.duration ? 1 : b.duration > a.duration ? -1 : 0
          )
          .map((music, i) => (
            <PlayListItem music={music} setShowSoundCloud={setShowSoundCloud} />
          ));
      } else if (_music.selectedSortItem === "Duration (longest first)") {
        return musicList
          .sort((a, b) =>
            a.duration < b.duration ? 1 : b.duration < a.duration ? -1 : 0
          )
          .map((music, i) => (
            <PlayListItem music={music} setShowSoundCloud={setShowSoundCloud} />
          ));
      }

      return musicList.map((music, i) => (
        <PlayListItem music={music} setShowSoundCloud={setShowSoundCloud} />
      ));
    }
  };

  // add delete url
  const addDeleteUrl = (filterText, flag, filter) => {
    let query = "";
    // for true
    if (flag) {
      for (let i = 0; i < _music.filteredFilters.length; i++) {
        if (_music.filteredFilters[i].filterType === filter) {
          if (i !== 0) {
            query += `&${filter}s=${_music.filteredFilters[i].filterTitle
              .replace(/\s+/g, "-")
              .toLowerCase()}`;
          } else {
            query += `${filter}s=${_music.filteredFilters[i].filterTitle
              .replace(/\s+/g, "-")
              .toLowerCase()}`;
          }
        }
      }
    }
    // for false
    else {
      for (let i = 0; i < _music.filteredFilters.length; i++) {
        if (_music.filteredFilters[i].filterType === filter) {
          if (filterText === _music.filteredFilters[i].filterTitle) {
          } else if (i !== 0) {
            query += `&${filter}s=${_music.filteredFilters[i].filterTitle
              .replace(/\s+/g, "-")
              .toLowerCase()}`;
          } else {
            query += `${filter}s=${_music.filteredFilters[i].filterTitle
              .replace(/\s+/g, "-")
              .toLowerCase()}`;
          }
        }
      }
    }
    return query;
  };

  return (
    <>
      <div className="_271bo">
        <Sidebar
          openSideBar={openSideBar}
          genreFilters={genreFilters}
          setGenreFilters={setGenreFilters}
          vocalFilters={vocalFilters}
          setVocalFilters={setVocalFilters}
          moodFilters={moodFilters}
          setMoodFilters={setMoodFilters}
          artistFilters={artistFilters}
          setArtistFilters={setArtistFilters}
          instrumentFilters={instrumentFilters}
          setInstrumentFilters={setInstrumentFilters}
          bpmValue={bpmValue}
          setbpmValue={setbpmValue}
          addDeleteUrl={addDeleteUrl}
          toggleSideBar={toggleSideBar}
        />

        {/* PLAY MUSIC LIST START */}
        <div className="_1aM3x">
          <PlayListAboveFilters
            genreFilters={genreFilters}
            setGenreFilters={setGenreFilters}
            vocalFilters={vocalFilters}
            setVocalFilters={setVocalFilters}
            moodFilters={moodFilters}
            setMoodFilters={setMoodFilters}
            artistFilters={artistFilters}
            setArtistFilters={setArtistFilters}
            instrumentFilters={instrumentFilters}
            setInstrumentFilters={setInstrumentFilters}
            bpmValue={bpmValue}
            setbpmValue={setbpmValue}
            addDeleteUrl={addDeleteUrl}
            toggleSideBar={toggleSideBar}
          />

          <PlayListHeader />

          {showMusicList()}

          <ListNavigation />
        </div>
        {/* PLAY MUSIC LIST END */}
      </div>
      <iframe
        style={
          showSoundCloud
            ? { position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1 }
            : { display: "none" }
        }
        id="sc-widget"
        src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/users/1539950/favorites"
        width="100%"
        height={100}
        scrolling="no"
        frameBorder="no"
      />
    </>
  );
};

export default RoyaltyFreeMusicContentArea;
