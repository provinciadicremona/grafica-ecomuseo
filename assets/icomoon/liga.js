/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'home': '&#xe900;',
            'house': '&#xe900;',
            'newspaper': '&#xe904;',
            'news': '&#xe904;',
            'images': '&#xe90e;',
            'pictures': '&#xe90e;',
            'camera': '&#xe90f;',
            'photo': '&#xe90f;',
            'book': '&#xe91f;',
            'read': '&#xe91f;',
            'file-text2': '&#xe926;',
            'file4': '&#xe926;',
            'phone': '&#xe942;',
            'telephone': '&#xe942;',
            'envelop': '&#xe945;',
            'mail': '&#xe945;',
            'location': '&#xe947;',
            'map-marker': '&#xe947;',
            'calendar': '&#xe953;',
            'date': '&#xe953;',
            'search': '&#xe986;',
            'magnifier': '&#xe986;',
            'leaf': '&#xe9a4;',
            'nature': '&#xe9a4;',
            'menu': '&#xe9bd;',
            'list3': '&#xe9bd;',
            'download2': '&#xe9c5;',
            'save4': '&#xe9c5;',
            'download3': '&#xe9c7;',
            'save5': '&#xe9c7;',
            'earth': '&#xe9ca;',
            'globe2': '&#xe9ca;',
            'attachment': '&#xe9cd;',
            'paperclip': '&#xe9cd;',
            'play3': '&#xea1c;',
            'player8': '&#xea1c;',
            'backward2': '&#xea1f;',
            'player11': '&#xea1f;',
            'forward3': '&#xea20;',
            'player12': '&#xea20;',
            'first': '&#xea21;',
            'player13': '&#xea21;',
            'last': '&#xea22;',
            'player14': '&#xea22;',
            'circle-up': '&#xea41;',
            'up3': '&#xea41;',
            'facebook2': '&#xea91;',
            'brand11': '&#xea91;',
            'twitter': '&#xea96;',
            'brand16': '&#xea96;',
            'feed3': '&#xea9c;',
            'rss2': '&#xea9c;',
            'youtube': '&#xea9d;',
            'brand21': '&#xea9d;',
            'file-pdf': '&#xeadf;',
            'file10': '&#xeadf;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
