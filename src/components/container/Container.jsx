/* eslint-disable react/prop-types */


function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto '>{children}</div>;
  
}

export default Container

// container is used for style pourpose
//  because if we used the component like 
// this then we can made changes easily
