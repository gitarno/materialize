'use strict';

module.exports = function (grunt) {
    return {
        compile: {
            options: {
                pretty: true,
                data: {
                    debug: false
                }
            },
            files: {
                "index.html": "jade/index.jade",
                "icons.html": "jade/icons.jade",
                "about.html": "jade/about.jade",
                "sass.html": "jade/sass.jade",
                "getting-started.html": "jade/getting-started.jade",
                "mobile.html": "jade/mobile.jade",
                "showcase.html": "jade/showcase.jade",
                "parallax.html": "jade/parallax.jade",
                "parallax-demo.html": "jade/parallax-demo.jade",
                "typography.html": "jade/typography.jade",
                "color.html": "jade/color.jade",
                "shadow.html": "jade/shadow.jade",
                "grid.html": "jade/grid.jade",
                "media-css.html": "jade/media-css.jade",
                "table.html": "jade/table.jade",
                "helpers.html": "jade/helpers.jade",
                "forms.html": "jade/forms.jade",
                "buttons.html": "jade/buttons.jade",
                "navbar.html": "jade/navbar.jade",
                "cards.html": "jade/cards.jade",
                "preloader.html": "jade/preloader.jade",
                "collections.html": "jade/collections.jade",
                "badges.html": "jade/badges.jade",
                "footer.html": "jade/footer.jade",
                "dialogs.html": "jade/dialogs.jade",
                "modals.html": "jade/modals.jade",
                "dropdown.html": "jade/dropdown.jade",
                "tabs.html": "jade/tabs.jade",
                "side-nav.html": "jade/sideNav.jade",
                "pushpin.html": "jade/pushpin.jade",
                "waves.html": "jade/waves.jade",
                "media.html": "jade/media.jade",
                "collapsible.html": "jade/collapsible.jade",
                "scrollfire.html": "jade/scrollFire.jade",
                "scrollspy.html": "jade/scrollspy.jade",
                "transitions.html": "jade/transitions.jade",
                "fullscreen-slider-demo.html": "jade/fullscreen-slider-demo.jade",


            }
        }
    }
};