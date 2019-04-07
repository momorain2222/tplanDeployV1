import React from "react";
import { Select } from "semantic-ui-react";

class HugeSelect extends React.Component {
  state = {};

  handleChange = (e, { value }) => {
    this.setState({ selectValue: value });
    this.props.onChange(value);
  };

  render() {
    const { selectValue } = this.state;
    const { placeholder, options } = this.props;

    return (
      <Select
        placeholder={placeholder}
        options={options}
        //value={selectValue}
        onChange={this.handleChange}
      />
    );
  }
}

export default HugeSelect;
