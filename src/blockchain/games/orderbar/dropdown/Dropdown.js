import React from "react";
import { withRouter } from "react-router";


import { NativeSelect, withStyles } from "@material-ui/core";




const MyNativeSelect = withStyles({
  root: {
    width: 100,
  },
})(NativeSelect);

const Dropdown = ({ type, listName, match, state, onChange, selectedValue }) => {
  

  //dropdown list change
  const handleChange = (e) => {
    onChange({ ...state, [listName]: e.target.value, keyword: "", page: 1 });
  };

   


  return (
    <div className={`dropdown-${listName}`}>
      <i className="sorticons fa fa-box"></i>
      <MyNativeSelect
        disableUnderline={true}
        className="select2default select2beforeload"
        value = {selectedValue}
        onChange={(e) => handleChange(e)}
        data-live-search="true"
      >
        {type &&
          type.length > 0 &&
          type.map((order, index) => {
            return (
              <option value={order} key={index}>
                {order}
              </option>
            );
          })}
      </MyNativeSelect>
    </div>
  );
};

export default withRouter(Dropdown);
