import { useState } from 'react'
import './index.css'
function FilterOption({option, handleCheck}) {
    const [checked, setChecked] = useState(false)
    function handleClick() {
        const action = !checked ? 'add' : 'remove'
        setChecked(!checked)
        handleCheck(option, action)
    }
    return <button onClick={handleClick} className={checked ? "option active-option" : "option"}>{option}</button>
}

export default FilterOption