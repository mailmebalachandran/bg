import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';

const DropDownDetail = (props) =>{
    return (
        <Dropdown
          label={props.labelValue}
          data={props.data}
          onChangeText = {(event) => props.changeHandler(event)}
          value = {props.values}
        />
      );
}

export default DropDownDetail;