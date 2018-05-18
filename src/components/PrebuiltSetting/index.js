import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

class PrebuiltSettings extends React.Component {
  render() {
    return (
      <button className="PrebuiltSetting" onClick={this.props.onClick}>
        {this.props.title}
      </button>
    );
  }
}

PrebuiltSettings.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
};

export default PrebuiltSettings;
