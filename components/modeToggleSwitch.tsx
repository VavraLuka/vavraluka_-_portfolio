import React from 'react'

type Props = {}

function toggleSwitch({ }: Props) {
  return (
    <div className="pt-2">
    <label className="modeToggleSwitch">
      <input type="checkbox" className="modeToggleSwitch" />
      <span className="modeToggleSlider"></span>
    </label>
    </div>
  )
}

export default toggleSwitch