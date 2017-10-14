# Chrome UA on Google for Firefox Android

This addon for Firefox for Android sends a Firefox for iOS user agent when visiting the Google search domains.
It's useful because Google serves a "lite" version of their mobile page to non-webkit browsers.
It seems that Firefox can handle the "full" version of the site well enough that the extra functionality is beneficial.
Firefox for iOS is used because Google search tries to open certain URLs in Apps that are not installed on the device when browsing Google search with a Chrome UA.

It's not yet available from the Mozilla addon site.

This is the User Agent used:
`Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/600.1.4`


This addon is based on Chrome UA on Google for Firefox Android by JonathanNakandala which is based on user-agent-rewriter from:

https://github.com/mdn/webextensions-examples/tree/master/user-agent-rewriter

It's based on the new Webextensions standard.
