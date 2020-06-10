console.log('app.js', $)

//sheetUrl is the shared url...anyone can view it with the link
const sheetUrl = 'https://docs.google.com/spreadsheets/d/12v_YzgGL2VG3RbD5zB9MNSG7C_N9-zk2MuZrZR8zqUQ/edit?usp=sharing'
// sheetAsJSON is how we will pull the data as JSON (javascript object notation)
const sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/12v_YzgGL2VG3RbD5zB9MNSG7C_N9-zk2MuZrZR8zqUQ/od6/public/values?alt=json'

console.log('running before ajax')

// .ajax returns a Promise and a Promise is resolved using .then()
$.ajax({
    url: sheetAsJSON
}).then((data) => {
    console.log('data', data)
    const projects = data.feed.entry.map( project => {
        return {
            title: project.gsx$title.$t,
            image: project.gsx$image.$t,
            description: project.gsx$description.$t,
            url: project.gsx$url.$t
        }
    }) //map ends
    /// app()??????
    app(projects)
})
.catch( err => console.log('err', err))
//.catch is meant to handle errors

console.log('running after ajax')

//grab an element and put it on a page
// function app(projectsArr){
//     console.log('app - projectsArr', projectsArr)
//     projectsArr.forEach( project => {
//         let title = $('<h3>')
//         let image = $('<img>')
//         title.text(project.title)
//         image.attr('src',project.image)
//         $('#portfolio').append(title).append(image)
//     })
// }

function app(projectsArr){
    console.log('app - projectsArr', projectsArr)
    projectsArr.forEach( project => {
        let projectdiv = $('<div>')
        let title = $('<h3>')
        let image = $('<img>')
        let link = $('<a>')
        title.text(project.title)
        image.attr('src',project.image).addClass('portfolio-img')
        link.text(project.title).attr('href',project.url)
        $('#portfolio').append(projectdiv).addClass('project-item')
        projectdiv.append(image).append(link)
    })
}

$(() => {

    const $navButtons = $('nav button');
    const $nav = $('nav');
    $navButtons.on('click', () => {
        $nav.toggleClass('open');
    })
})
$(() => {

    const $navButtons = $('nav a');
    const $nav = $('nav');
    $navButtons.on('click', () => {
        $nav.toggleClass('open');
    })
})

$(window).on('resize', () => {
    if (window.innerWidth > 768) {
        $('nav').removeClass('open');
    }
})