## Part 0 - Exercise 0.6 - New note

**Exercise Problems:**[Full Stack Open Link To Exercises 0.1-0.6](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#exercises-0-1-0-6)

---

**user->browser:**<br/> 

**note over browser:**<br/>
user writes a note inside<br/>
the form and clicks "Submit"<br/>
**end note**<br/>

**browser->server:** HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

**note over server:**<br/>
server receives user request<br/> 
to write a note to the database<br/>
**end note**<br/>

**note over browser:**<br/>
server writes note to database<br/>
and browser stays on same page<br/>
**end note**<br/>

**server-->browser:** status code "201 Created" 

---
**Resource:** [Link to Web Sequence Diagram Resource](https://www.websequencediagrams.com/)