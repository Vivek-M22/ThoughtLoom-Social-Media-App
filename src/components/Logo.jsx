/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

function Logo({ width = '100px', height = 'auto' }) {
    return (
        <img 
            src="/src/assets/TL_logo.png" 
            alt="Description of the image" 
            style={{ width: width, height: height }}
        />
    )
}

export default Logo
