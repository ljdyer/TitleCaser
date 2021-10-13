# Title Caser

Title Caser is a Google Chrome Extension that converts titles and headings in Wikipedia, BBC News, and the Guardian pages from sentence case into title case.

Title casing is done with python's str.title method via a call to a Heroku Flask API. See [app.py](app.py) for the Python source code.

## How to use

1. In Google Chrome, go to the [extension page](https://chrome.google.com/webstore/detail/title-caser/kbchokdkkcomkengjmddfalefnehmkak) on the Chrome Web Store and click the blue **Add to Chrome** button.
2. Confirm that the extension is installed and enabled in the Chrome [Extension manager](chrome://extensions/)
3. Open any page on Wikipedia, BBC News, or the Guardian websites and look at the titles and headings! Try opening the pages below to get started.

## Example pages

* [https://en.wikipedia.org/wiki/Python_(programming_language)](https://en.wikipedia.org/wiki/Python_(programming_language))<br>
* [https://www.theguardian.com/uk-news/2021/sep/18/snake-on-a-pane-dudley-couple-shocked-to-find-python-on-vanity-mirror](https://www.theguardian.com/uk-news/2021/sep/18/snake-on-a-pane-dudley-couple-shocked-to-find-python-on-vanity-mirror)<br>
* [https://www.bbc.co.uk/news/uk-england-birmingham-58611602](https://www.bbc.co.uk/news/uk-england-birmingham-58611602)

<table style="width: 100%; border: 1px solid black;" >
    <th>
        <td style="width:50%">Without Title Caser</td>
        <td style="width:50%">With Title Caser</td>
    </th>
    <tr>
        <td style="width:50%"><img src="demo-img/bbc-python-before.PNG" /></td>
        <td style="width:50%"><img src="demo-img/bbc-python-after.PNG" /></td>
    </tr>
</tr></table>

