import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import CSSExport from "../CSSExport";

class TextSettings extends React.Component {
  render() {
    return (
      <div className="TextSettings">
        <div>
          <h2 className="TextSettings__title">{this.props.title}</h2>
          <CSSExport settings={this.props.settings} />
        </div>
        <div className="TextSettings-formGroup">
          <label className="TextSettings-formGroupColumn" htmlFor="text">
            Text
          </label>
          <textarea
            className="TextSettings-formGroupColumn"
            name="text"
            onChange={e => this.props.onTextUpdate(e.target.value)}
            value={this.props.text}
          />
        </div>
        <div className="TextSettings-formGroup">
          <label className="TextSettings-formGroupColumn" htmlFor="fontFamily">
            Font family:
          </label>
          <select
            className="TextSettings-formGroupColumn"
            name="fontFamily"
            value={this.props.settings.fontFamily}
            onChange={e => this.props.onFontFamilyUpdate(e.target.value)}
          >
            <optgroup label="Sans Serif">
              <option value="Exo">Exo</option>
              <option value="Lato">Lato</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Open Sans">Open Sans</option>
              <option value="PT Sans">PT Sans</option>
              <option value="Raleway">Raleway</option>
              <option value="Ubuntu">Ubuntu</option>
            </optgroup>
            <optgroup label="Serif">
              <option value="Abril Fatface">Abril Fatface</option>
              <option value="Lora">Lora</option>
              <option value="Gravitas One">Gravitas One</option>
              <option value="Old Standard TT">Old Standard TT</option>
              <option value="Vollkorn">Vollkorn</option>
            </optgroup>
          </select>
        </div>
        <div className="TextSettings-formGroup">
          <label className="TextSettings-formGroupColumn" htmlFor="fontSize">
            Font Size: {this.props.settings.fontSize.value}
            {this.props.settings.fontSize.unit}
          </label>
          <input
            className="TextSettings-formGroupColumn"
            name="fontSize"
            type="range"
            value={this.props.settings.fontSize.value}
            min="0.5"
            max="5"
            step="0.1"
            onChange={e => this.props.onFontSizeUpdate(e.target.value, "em")}
          />
        </div>
        <div className="TextSettings-formGroup">
          <label className="TextSettings-formGroupColumn" htmlFor="letterSpacing">
            Letter spacing: {this.props.settings.letterSpacing.value}
            {this.props.settings.letterSpacing.unit}
          </label>
          <input
            className="TextSettings-formGroupColumn"
            name="letterSpacing"
            type="range"
            value={this.props.settings.letterSpacing.value}
            min="0"
            max="2"
            step="0.1"
            onChange={e => this.props.onLetterSpacingUpdate(e.target.value, "em")}
          />
        </div>
        <div className="TextSettings-formGroup">
          <label className="TextSettings-formGroupColumn" htmlFor="lineHeight">
            Line height: {this.props.settings.lineHeight.value}
            {this.props.settings.lineHeight.unit}
          </label>
          <input
            className="TextSettings-formGroupColumn"
            name="lineHeight"
            type="range"
            min="0"
            max="2.5"
            step="0.1"
            value={this.props.settings.lineHeight.value}
            onChange={e => this.props.onLineHeightUpdate(e.target.value, "em")}
          />
        </div>
      </div>
    );
  }
}

TextSettings.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  onTextUpdate: PropTypes.func,
  onFontFamilyUpdate: PropTypes.func,
  onFontSizeUpdate: PropTypes.func,
  onLineHeightUpdate: PropTypes.func,
  onLetterSpacingUpdate: PropTypes.func,
  settings: PropTypes.shape({
    fontFamily: PropTypes.string,
    fontSize: PropTypes.shape({
      value: PropTypes.number,
      unit: PropTypes.string
    }),
    letterSpacing: PropTypes.shape({
      value: PropTypes.number,
      unit: PropTypes.string
    }),
    lineHeight: PropTypes.shape({
      value: PropTypes.number,
      unit: PropTypes.string
    })
  })
};

export default TextSettings;
