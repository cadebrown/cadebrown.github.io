---
---
/* js/main.js - main JavaScript for cade.site
 *
 *
 *
 * @author: Cade Brown <me@cade.site>
 */


// set the current theme to 'themename', or to the default if given null/undefined/falsy value
function theme_set(themename) {
    // default theme
    if ([null, undefined, 'null', 'undefined', '', 'default'].includes(themename)) themename = "{{ site.theme_default }}"

    // debug what theme is selected
    console.log('theme_set(', themename, ')')

    // set and store for future usage
    document.documentElement.setAttribute('data-theme', themename)
    localStorage.setItem('data-theme', themename)
    /*
    if (!themename) {
        // set theme to the default
        localStorage.removeItem('data-theme')
        document.documentElement.removeAttribute('data-theme')
    } else {
        localStorage.setItem('data-theme', themename)
        document.documentElement.setAttribute('data-theme', themename)
    }*/
}



// initialize stuff like theme, etc
(function () {
    theme_set(localStorage.getItem('data-theme'))
})()
