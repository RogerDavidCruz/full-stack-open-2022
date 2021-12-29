## Part 0 - Exercise 0.4 - New Note

**Exercise Problems:**[Full Stack Open Link To Exercises 0.1-0.6](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#exercises-0-1-0-6)

---

**user->browser:** 

**note over browser:**<br/>
user writes a note inside<br/> 
the form and clicks submit<br/>
**end note**<br/>

**browser->server:** HTTP POST https://studies.cs.helsinki.fi/exampleapp/notes<br/>

**note over server:**<br/>
server receives request from user<br/> 
to write a note to the database<br/>
**end note**<br/>

**server-->browser:** URL redirect to https://studies.cs.helsinki.fi/exampleapp/notes

**note over browser:**<br/>
server writes note to database<br/> 
and browser reloads notes page<br/>
**end note**<br/>

**browser->server:** HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes<br/>
**server-->browser:** HTML-code<br/>
**browser->server:** HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css<br/>
**server-->browser:** main.css<br/>
**browser->server:** HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js<br/>
**server-->browser:** main.js<br/>

**note over browser:**<br/>
browser starts executing js-code<br/>
that requests JSON data from server<br/>
**end note**<br/>

**browser->server:** HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json<br/>
**server-->browser:** [{ content: "HTML is easy", date: "2020-11-9" }, ...]<br/>

**note over browser:**<br/>
browser executes the event handler<br/> 
that renders notes to display<br/>
**end note**<br/>

---
**Resource:** [Link to Web Sequence Diagram Resource](https://www.websequencediagrams.com/)
