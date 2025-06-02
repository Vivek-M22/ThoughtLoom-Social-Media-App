/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import logoImage from '../assets/TL_logo.png'

function Logo({ width = '100px', height = 'auto' }) {
    return (
        <img 
            src={logoImage}
            alt="ThoughtLoom" 
            style={{ width: width, height: height }}
        />
    )
}

export default Logo
