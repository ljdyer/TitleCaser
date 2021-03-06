# Title Caser

Title Caser is a Google Chrome Extension that converts titles and headings in Wikipedia, BBC News, and the Guardian pages from sentence case into title case.

Title casing is carried out with Python's **str.title** method via a call to a Heroku Flask API. See [app.py](app.py) for the Python source code.

Title Caser was developed as part of an assignment for a University Masters course module in Python to propose potential uses for a selection of Python string methods.

## How to use

1. In Google Chrome, go to the [extension page](https://chrome.google.com/webstore/detail/title-caser/kbchokdkkcomkengjmddfalefnehmkak) on the Chrome Web Store and click the blue **Add to Chrome** button.
2. Confirm that the extension is installed and enabled in the Chrome [Extension manager](chrome://extensions/)
3. Open any page on Wikipedia, BBC News, or the Guardian websites and look at the titles and headings! Try opening the pages below to get started.

## Examples

<table style="width: 100%; border: 1px solid black;" >
    <tr>
        <th style="width:50%">Without Title Caser</td>
        <th style="width:50%">With Title Caser</td>
    </tr>
    <tr>
        <td style="width:50%"><img src="demo-img/bbc-python-before.png" /></td>
        <td style="width:50%"><img src="demo-img/bbc-python-after.png" /></td>
    </tr>
    <tr>
        <td colspan="2" style="text-align:center">https://www.bbc.co.uk/news/uk-england-birmingham-58611602</a>
        </td>
    </tr>
    <tr>
        <td style="width:50%"><img src="demo-img/guardian-python-before.PNG" /></td>
        <td style="width:50%"><img src="demo-img/guardian-python-after.PNG" /></td>
    </tr>
    <tr>
        <td colspan="2" style="text-align:center">https://www.theguardian.com/uk-news/2021/sep/18/snake-on-a-pane-dudley-couple-shocked-to-find-python-on-vanity-mirror</td>
    </tr>
    <tr>
        <td style="width:50%"><img src="demo-img/wikipedia-python-before.PNG" /></td>
        <td style="width:50%"><img src="demo-img/wikipedia-python-after.PNG" /></td>
    </tr>
    <tr>
        <td colspan="2" style="text-align:center">https://en.wikipedia.org/wiki/Python_(programming_language)</td>
    </tr>
</tr></table>

