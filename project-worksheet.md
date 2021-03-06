# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) |Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | 


## Project Description

Resume website that provides information about myself, my skills and experience, a collection of portfolio projects, and ways to contact me.

## Youtube Video
[Link](https://youtu.be/QLvPDOXYnn0)

## Google Sheet
[Projects sheet](https://docs.google.com/spreadsheets/d/12v_YzgGL2VG3RbD5zB9MNSG7C_N9-zk2MuZrZR8zqUQ/edit?usp=sharing)

## Wireframes

[Link](https://imgur.com/a/JrGacY4)

## Time/Priority Matrix

[Link](https://imgur.com/7wPdeLm)

## MVP
- responsive design for mobile, tablet, and desktop
- portfolio section that dynamically populates with api
- functional hamburger nav

## Functional Components MVP

|Component 	|       Estimated Time	|  Time Invested   |  Actual Time
| ---| --- | --- | --- |
|Research site inspo  |                            1 hr   |     1 hr         |   3 hr complete
|Wireframe            |                           0.5 hr  |      0.5 hr        |   0.5 hr complete
|HTML/written content  |                       4 hr |        3 hr      |   3 hr complete
|mobile structure    |                    5 hr |       5 hr       |   5 hr complete
|implement responsive design   |                   7 hr|        6 hr      |   6 hr complete
|hamburger menu     |                              4 hr|        1 hr      |   1 hr complete
|plan/research css styling   |                     1.5 hr|       4 hr       |   4 hr complete
|implement styling       |                         4 hr|        6 hr      |   6 hr  complete
|compile projects/proj. thumbnails  |              3 hr|       3 hr       |   3 hr complete
|other design elements        |                      3 hr|       2 hr       |   2 hr complete
|finalize github      |                            3   hr|       2 hr       |    3 hr complete     
| TOTAL |  Estimated 36 hrs for MVP | 36.5 hr | 36.5 complete

#### PostMVP 

- additional projects added to 'portfolio' section
- possible styling updates
- contact form

## Additional Libraries
[JQuery](https://code.jquery.com/jquery-3.5.1.min.js)
[Bootstrap](https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css)

## Code Snippet

A very functional (albeit somewhat bloated) function to pull portfolio data from a google sheet

```
function app(projectsArr){
    console.log('app - projectsArr', projectsArr)
    projectsArr.forEach( project => {
        let projectdiv = $('<div>')
        let title = $('<h3>')
        let image = $('<img>')
        let link = $('<a>')
        let description = $('<p>')
        title.text(project.title)
        image.attr('src',project.image).addClass('portfolio-img')
        link.text(project.title).attr('href',project.url)
        description.text(project.description)
        $('#portfolio').append(projectdiv).addClass('project-item')
        projectdiv.append(image).append(link).append(description).css('color','#3990E0').css('font-style','italic').css('font-family','serif')
    })
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
