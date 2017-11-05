/*
Initialize the UA;
*/
var ua = "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) FxiOS/1.0 Mobile/15A356 Safari/604.1";

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
