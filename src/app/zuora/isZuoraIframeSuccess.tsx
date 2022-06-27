export default function isZuoraIframeSuccess() {

    const data = Math.random() > 0.5 ? "fail" : "success"
    console.log(data)

    if (data) {
        if (data === "success") {
            return true;
        }
    }
    return false;
}
