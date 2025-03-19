import React from 'react'
import clienContext from './ClientContext'

const ClientComponentProvider=({children})=>{
    const[client,setClient]=React.useState(null);
    return(
        <clienContext.Provider value={{client,setClient}}>
        {children}
        </clienContext.Provider>

    )
}


export default ClientComponentProvider
