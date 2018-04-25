import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './styles.scss';

class CSSExport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showingCopyMessage: false
        }
        this.getText = this.getText.bind(this);
        this.triggerSuccess = this.triggerSuccess.bind(this);
    }
    
    getText() {
        const {
            fontFamily,
            fontSize,
            letterSpacing,
            lineHeight
        } = this.props.settings;
        const properties = [
            `font-family: '${fontFamily}';\n`,
            `font-size: '${fontSize.value}${fontSize.unit}';\n`,
            `letter-spacing: '${letterSpacing.value}${letterSpacing.unit}';\n`,
            `line-height: '${lineHeight.value}${lineHeight.unit}';\n`
        ]
        return properties.join("");
    }

    triggerSuccess() {
        this.setState({ showingCopyMessage: true})

        setTimeout(() => {
            this.setState({ showingCopyMessage: false})
        }, 1000);
    }

    render() {
        return (
            <div className="CSSExport">
                <CopyToClipboard 
                    text={this.getText()}
                    onCopy={() => this.triggerSuccess()}>
                    <span>
                        {!this.state.showingCopyMessage && 
                            <span className="CSSExport__ctaWaiting">
                                <i className="far fa-copy"></i>
                                <span className="CSSExport__innerText">Copy CSS</span>
                            </span>
                        }
                        {this.state.showingCopyMessage && 
                            <span className="CSSExport__ctaActive">Copied!</span>
                        }
                    </span>
                </CopyToClipboard>
            </div>
        )
    }
}

CSSExport.propTypes = {
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
}

export default CSSExport;