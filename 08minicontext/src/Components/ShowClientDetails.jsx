import React, { useContext } from 'react'
import clienContext from '../context/ClientContext'
import AddClient from './AddClient';

function ShowClientDetails() {
    const {client}=useContext(clienContext);
    // console.log(user);
    if(!client) return  <div>please Login...</div>

    return <div>Welcome client : {client.clientName} <br/>user password is : {client.password}</div>

//    if(client.clientName) {
//     return (
//         <p>
//             Clien name is :{client.clientName}
//             and password is :{client.password}
//         </p>
//     )
// }
// return (
//     <p>
//         Clien name is :
//         and password is :
//     </p>
// )


}

export default ShowClientDetails
