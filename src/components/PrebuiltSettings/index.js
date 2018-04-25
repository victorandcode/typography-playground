import React from 'react';
import PropTypes from 'prop-types';
import { SETTINGS_DEFAULT, SETTINGS_FANCY, SETTINGS_FINEPRINT } from '../../config/settings';
import PrebuiltSetting from '../PrebuiltSetting';
import './styles.scss';

class PrebuiltSettings extends React.Component {
    render() {
        return (
            <div>
                <h2 className="PrebuiltSettings__title">Prebuilt Settings</h2>
                <div className="PrebuiltSettings__setting">
                    <PrebuiltSetting title="Default" onClick={() => this.props.updateFn(SETTINGS_DEFAULT)}/>
                </div>
                <div className="PrebuiltSettings__setting">
                    <PrebuiltSetting title="Fancy" onClick={() => this.props.updateFn(SETTINGS_FANCY)}/>
                </div>
                <div className="PrebuiltSettings__setting">
                    <PrebuiltSetting title="Fine print" onClick={() => this.props.updateFn(SETTINGS_FINEPRINT)}/>
                </div>
            </div>
        )
    }
}

PrebuiltSettings.propTypes = {
    updateFn: PropTypes.func
}

export default PrebuiltSettings;