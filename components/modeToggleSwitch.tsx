import React from 'react'

type Props = {}

function toggleSwitch({ }: Props) {
  return (
    <label className="modeToggleSwitch">
      <input type="checkbox" className="modeToggleSwitch" />
      <span className="modeToggleSlider"></span>
    </label>
  )
}

export default toggleSwitch