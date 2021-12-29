## Part 0 - Exercise 0.5 - Single Page App

**Exercise Problems:**[Full Stack Open Link To Exercises 0.1-0.6](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#exercises-0-1-0-6)

---

**browser->server:** HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa<br/>
**server-->browser:** HTML-code for single-page application<br/>
**browser->server:** HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css<br/>
**server-->browser:** main.css<br/>
**browser->server:** HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js<br/>
**server-->browser:** spa.js<br/>

**note over browser:**<br/>
browser starts executing JS code<br/>
requesting JSON data from server<br/> 
**end note**<br/>

**browser->server:** HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json<br/>
**server-->browser:** [{ content: "HTML is easy", date: "2020-11-9" }, ...]<br/>

**note over browser:**<br/>
browser executes event handler<br/>
rendering notes to display<br/>
**end note**<br/>

---
**Resource:** [Link to Web Sequence Diagram Resource](https://www.websequencediagrams.com/)
