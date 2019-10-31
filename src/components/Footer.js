import React from "react";
import PropTypes from "prop-types";

const FILTERS_BTN = [
  {
    text: "All",
    id: "all"
  },
  {
    text: "Active",
    id: "active"
  },
  {
    text: "Completed",
    id: "completed"
  }
];

const completedStyle = {
  color: "#b294ff"
};

const Footer = ({ amount, activeFilter, changeFilter }) => (
  <div className="footer">
    <span className="amount">{`${amount} Tasks left`}</span>
    <div className="filters-btn">
      {FILTERS_BTN.map(({ text, id }) => (
        <button
          onClick={() => {
            changeFilter(id);
          }}
          key={id}
          className={id === activeFilter ? "filter-btn-active" : "filter-btn"}
          style={id === activeFilter ? completedStyle : null}
        >
          {text}
        </button>
      ))}
    </div>
  </div>
);

Footer.propTypes = {
  amount: PropTypes.number,
  active: PropTypes.bool,
  changeFilter: PropTypes.func
};

export default Footer;
