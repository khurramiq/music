import React from "react";
import {  withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const AirbnbSlider = withStyles({
  root: {
    color: '#dcad54',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -7,
    marginLeft: -13,    
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 0.5px 0.5px 0.5px',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
})(Slider);

function valuetext(value) {
  return `${value}`;
}

export default function MyRangeSlider({ open, value, setValue }) {
  // const classes = useStyles();  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      // className={classes.root}
      style={open ? { zIndex: "100" } : { display: "none" }}
    >
      <AirbnbSlider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        step={1}
        min={0}
        max={250}
      />
    </div>
  );
}

// import React from "react";
// import "./bpmSlider.css";

// const BpmSlider = ({
//   open,
//   leftValue,
//   rightValue,
//   leftChange,
//   rightChange,
// }) => {
//   return (
//     <>
//       <div style={open ? { marginBottom: "30px" } : { display: "none" }}>
//         <div className="_38o4s">
//           <div className="_2rvut">
//             <div className="rangeslider">
//               <input
//                 className="min"
//                 name="range_1"
//                 type="range"
//                 min={leftValue}
//                 max={rightValue}
//                 value={leftValue}
//                 style={{ outline: "none", border: "none" }}
//                 onChange={(e) => leftChange(e.target.value)}
//               />
//               <input
//                 className="max"
//                 name="range_1"
//                 type="range"
//                 min={leftValue}
//                 max={rightValue}
//                 value={rightValue}
//                 style={{ outline: "none", border: "none" }}
//                 onChange={(e) => rightChange(e.target.value)}
//               />
//               <div>
//                 <span className="range_min light left">0</span>
//                 <span className="range_max light right">125+</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BpmSlider;
