import React from 'react';

type Props = {}

function languageToggleSwitch({ }: Props) {
    return (
        <label className="languageToggleSwitch">
            <input type="checkbox" className="languageToggleSwitch"/>
            <span className="languageToggleSlider"></span>
        </label>
    )
}

export default languageToggleSwitch