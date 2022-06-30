export async function getOauthToken() {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    let urlencoded = new URLSearchParams();
    urlencoded.append("client_id", process.env.ZUORA_CLIENT_ID!);
    urlencoded.append("client_secret", process.env.ZUORA_CLIENT_SECRET!);
    urlencoded.append("grant_type", process.env.ZUORA_CLIENT_GRANT_TYPE!);

    let requestOptions: any = {
        method: 'POST', headers: myHeaders, body: urlencoded, redirect: 'follow'
    };

    const response = await fetch("https://rest.sandbox.eu.zuora.com/oauth/token", requestOptions)

    console.log('token' + response)

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message)
    }
    return data.access_token;
}

export async function fetchSignature(token) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
        "method": "POST",
        "pageId": "8adcddea7bee643f017bef5cdd550859",
        "uri": "https://sandbox.eu.zuora.com/apps/PublicHostedPageLite.do"
    });

    try {
        const response = await fetch("https://rest.sandbox.eu.zuora.com/v1/rsa-signatures", {
            method: 'POST', body: raw, headers: myHeaders
        })

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message)
        }
        return data;
    } catch (e) {
        return e.message;
    }
}

export async function getZuoraSignatureByFlag() {
    const token = await getOauthToken();
    return await fetchSignature(token);
}
