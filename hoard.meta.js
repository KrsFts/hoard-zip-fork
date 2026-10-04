// ==UserScript==
// @name         hoard (zip batch fork)
// @namespace    https://github.com/KrsFts/hoard-zip-fork
// @version      2.0.1
// @description  instagram saved collections as an offline reference library, synced to disk (fork with per-batch ZIP export)
// @author       SolRaze, KrsFts (fork additions)
// @homepageURL  https://github.com/KrsFts/hoard-zip-fork
// @supportURL   https://github.com/KrsFts/hoard-zip-fork/issues
// @license      MIT
// @match        https://www.instagram.com/*
// @noframes
// @run-at       document-idle
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_download
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @connect      cdninstagram.com
// @connect      fbcdn.net
// @require      https://cdn.jsdelivr.net/npm/fflate@0.8.2/umd/index.js
// @downloadURL https://raw.githubusercontent.com/KrsFts/hoard-zip-fork/main/hoard.user.js
// @updateURL   https://raw.githubusercontent.com/KrsFts/hoard-zip-fork/main/hoard.meta.js
// ==/UserScript==