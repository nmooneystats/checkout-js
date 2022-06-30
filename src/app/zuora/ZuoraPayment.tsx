import React from 'react';

export default function ZuoraPayment() {

    const client_id = process.env.ZUORA_CLIENT_ID
    console.log(client_id)
    const client_secret = process.env.ZUORA_CLIENT_SECRET
    console.log(client_secret)
    const grant_type = process.env.ZUORA_CLIENT_GRANT_TYPE
    console.log(grant_type)


    async function getOauthToken() {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
        let urlencoded = new URLSearchParams();
        urlencoded.append("client_id", process.env.ZUORA_CLIENT_ID!);
        urlencoded.append("client_secret", process.env.ZUORA_CLIENT_SECRET!);
        urlencoded.append("grant_type", process.env.ZUORA_CLIENT_GRANT_TYPE!);
    
        // let requestOptions = {
        //     method: 'POST', headers: myHeaders, body: urlencoded, redirect: 'follow'
        // };
    
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://rest.sandbox.eu.zuora.com/oauth/token", {
            method: 'POST', headers: myHeaders, body: urlencoded, redirect: 'follow'
        })
    
        const data = await response.json();
    
        if (!response.ok) {
            throw new Error(data.message)
        }
        console.log('zuora token: ' + data.access_token)
        return data.access_token;
    }

    return (
        <button onClick={getOauthToken}>Make Zuora token call</button>
    );

    //     const shoot = () => {
    //       alert("Great Shot!");
    //     }

    //     return (
    //       <button onClick={shoot}>Take the shot!</button>
    //     );


    // const helloVar = 'hello again'
    // console.log(helloVar)
    // return (

    // <div>
    //     <h1>{helloVar}</h1>
    // </div>
    // )

}
