# Useragent Changer to Firefox iOS on Google for Firefox Android

This addon for Firefox for Android sends a Firefox for iOS user agent when visiting the Google search domains.
It's useful because Google serves a "lite" version of their mobile page to non-webkit browsers.
It seems that Firefox can handle the "full" version of the site well enough that the extra functionality is beneficial.
Firefox for iOS is used because Google search tries to open certain URLs in Apps that are not installed on the device when browsing Google search with a Chrome UA.

It's available from the mozilla site: https://addons.mozilla.org/de/firefox/addon/firefox-ios-ua-on-google/

This is the User Agent used:
`Mozilla/5.0 (iPhone; CPU iPhone OS 13_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/20.0 Mobile/15E148 Safari/605.1.15`


This addon is based on Chrome UA on Google for Firefox Android by JonathanNakandala which is based on user-agent-rewriter from:

https://github.com/mdn/webextensions-examples/tree/master/user-agent-rewriter

It's based on the new Webextensions standard.

The name has changed due to Mozilla's naming policy.

The icon has changed due to Mozilla's policy.
