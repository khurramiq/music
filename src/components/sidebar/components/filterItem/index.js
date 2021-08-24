import React from "react";
import "./filterItem.css";

const FilterItem = ({
  toggleFunction,
  open,
  title,
  filters,
  handleFiltersSelect,
  isAlreadySelected,
}) => {
  const showFilters = (filters) => {
    if (filters.length > 0) {
      return (
        <div>
          {title === "Vocals" ? (
            <div className="_2ZRkA">
              Most vocal tracks include an instrumental version
            </div>
          ) : null}
          <div className="_38o4s" id="E2E_FilterSectionContainer_moods">
            {filters.map((item, i) => (
              <>
                <div
                  key={i}
                  onClick={() =>
                    handleFiltersSelect(item.filterText, !item.filtered)
                  }
                >
                  <span className="sidebar_link ZZ-fz _3Vzoe" href="/">
                    <span
                      className={
                        isAlreadySelected(item.filterText, title.toLowerCase())
                          ? "bNcwi GTtEX"
                          : "bNcwi"
                      }
                    />
                    <span>
                      {item.filterText}{" "}
                      <span className="_22hsR">{item.moodNumber}</span>
                    </span>
                  </span>
                </div>
                {item.subFilters
                  ? item.subFilters.map((subitem, i) => (
                      <div
                        key={i}
                        className={"-yxpR"}
                        onClick={() =>
                          handleFiltersSelect(
                            subitem.filterText,
                            !subitem.filtered
                          )
                        }
                      >
                        <span className="sidebar_link ZZ-fz _3Vzoe" href="/">
                          <span
                            className={
                              isAlreadySelected(subitem.filterText, title.toLowerCase()) ? "bNcwi GTtEX" : "bNcwi"
                            }
                          />
                          <span>
                            {subitem.filterText}{" "}
                            <span className="_22hsR">{subitem.moodNumber}</span>
                          </span>
                        </span>
                      </div>
                    ))
                  : null}
              </>
            ))}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <>
      <div className="_2StxQ">
        <button
          className="_1zDtR"
          type="button"
          onClick={() => toggleFunction()}
        >
          <span className="_3rwAx">
            {title}{" "}
            {title === "Vocals" ? <span className="_22tPW">NEW</span> : null}
          </span>
          <span className="_2C2WG">
            <svg width={16} height={16} viewBox="0 0 16 16">
              {open ? (
                <path d="M13 9H3a1 1 0 110-2h10a1 1 0 110 2z" />
              ) : (
                <path d="M13 7H9V3a1 1 0 00-2 0v4H3a1 1 0 000 2h4v4a1 1 0 002 0V9h4a1 1 0 000-2z" />
              )}
            </svg>
          </span>
        </button>
        {open ? showFilters(filters) : null}
      </div>
    </>
  );
};

export default FilterItem;
