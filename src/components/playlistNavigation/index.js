import React from "react";

const ListNavigation = () => {
  return (
    <>
      <nav aria-label="pagination" className="_2JUww">
        <button
          disabled
          aria-label="Previous page"
          aria-disabled="true"
          className="P8Lj3 _3GnAa _2Kym9 _1hnuK _2KOJq"
          type="button"
          style={{ padding: 0 }}
        >
          <span>
            <svg width={16} height={16} className="_26FT-" viewBox="0 0 16 16">
              <path d="M8 10.3a.7.7 0 01-.5-.3L4.4 7a.8.8 0 111-1L8 8.4l2.6-2.6a.8.8 0 111 1.1l-3 3a.7.7 0 01-.6.3z" />
            </svg>
          </span>
        </button>
        <span className="_3D0dr">1/7</span>
        <a
          className="_2BuPB"
          aria-current="true"
          aria-label="Page 1"
          href="/"
          style={{ color: "#fff" }}
        >
          1
        </a>
        <a
          className="_2BuPB"
          aria-label="Page 2"
          href="/"
          style={{ color: "#fff" }}
        >
          2
        </a>
        <a
          className="_2BuPB"
          aria-label="Page 3"
          href="/"
          style={{ color: "#fff" }}
        >
          3
        </a>
        <a
          className="_2BuPB"
          aria-label="Page 4"
          href="/"
          style={{ color: "#fff" }}
        >
          4
        </a>
        <a
          className="_2BuPB"
          aria-label="Page 5"
          href="/"
          style={{ color: "#fff" }}
        >
          5
        </a>
        <a
          aria-label="Next page"
          className="P8Lj3 _3GnAa _2Kym9 _1hnuK _2KOJq"
          href="/"
          style={{ padding: 0 }}
        >
          <svg width={16} height={16} className="_1W8Fd" viewBox="0 0 16 16">
            <path d="M8 10.3a.7.7 0 01-.5-.3L4.4 7a.8.8 0 111-1L8 8.4l2.6-2.6a.8.8 0 111 1.1l-3 3a.7.7 0 01-.6.3z" />
          </svg>
        </a>
      </nav>
    </>
  );
};

export default ListNavigation;
