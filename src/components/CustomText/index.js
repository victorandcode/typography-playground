import React from "react";
import PropTypes from "prop-types";

class CustomText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { localSettings: {} };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { fontSize, fontFamily, lineHeight, letterSpacing } = nextProps.settings;
    return {
      localSettings: {
        fontSize: `${fontSize.value}${fontSize.unit}`,
        fontFamily,
        lineHeight: `${lineHeight.value}${lineHeight.unit}`,
        letterSpacing: `${letterSpacing.value}${letterSpacing.unit}`
      }
    };
  }

  render() {
    return <div style={this.state.localSettings}>{this.props.text}</div>;
  }
}

CustomText.propTypes = {
  text: PropTypes.string,
  settings: PropTypes.shape({
    fontSize: PropTypes.shape({
      value: PropTypes.number,
      unit: PropTypes.string
    }),
    fontFamily: PropTypes.string,
    lineHeight: PropTypes.shape({
      value: PropTypes.number,
      unit: PropTypes.string
    })
  })
};

export default CustomText;
