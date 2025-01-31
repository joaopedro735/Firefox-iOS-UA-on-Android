/*
Initialize the UA;
*/
var ua = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/115.1 Mobile/15E148 Safari/605.1.15";

/*
Rewrite the User-Agent header to "ua".
*/
function rewriteUserAgentHeaderBlocking(e) {
    for (let header of e.requestHeaders) {
        if (header.name.toLowerCase() === "user-agent") {
            header.value = ua;
            console.log("sending ua: "+ua)
        }
    }
    return { requestHeaders: e.requestHeaders };
}

/*
Add rewriteUserAgentHeaderBlocking as a listener to onBeforeSendHeaders,
only for the target page.

Make it "blocking" so we can modify the headers.
*/
browser.webRequest.onBeforeSendHeaders.addListener(
    rewriteUserAgentHeaderBlocking,
    {
        urls: targetPage
    },
    [
        "blocking",
        "requestHeaders"
    ]
);
