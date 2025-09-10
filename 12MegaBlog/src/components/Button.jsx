import React from 'react'

function Button({
    children,type="button",bgColor="bg-blue-600",textColor="text-shite",className="",...props
}) {
    return (
        <button className={`px-4 py-2 h-min w-min rounded-lg hover:translate-1.5  ${bgColor} ${textColor} ${className} `} {...props}>
            {children}
        </button>
    )
}

export default Button
