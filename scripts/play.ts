module Play {


    var PLAYING = false;
    var ACCEPT_DIALOG_OPENED = false;

    var OVERLAY: HTMLElement;
    var ACCEPT_DIALOG: HTMLElement;
    var MENU_SEARCHING: HTMLElement;

    // time has passed during game search
    var TIMER_ID: number | null = null;
    var TIMER_COUNT = 0;    // in seconds

    // time until the match is "found"
    var MATCH_FOUND_ID: number | null = null;


    export function init() {

        OVERLAY = document.getElementById( 'PlayOverlay' ) !;
        ACCEPT_DIALOG = document.getElementById( 'AcceptDialogOverlay' ) !;
        MENU_SEARCHING = document.getElementById( 'MenuSearching' ) !;
        MENU_SEARCHING.onclick = function () {
            MainMenu.changeTab( 'Play' );
        };

        var playButton = document.getElementById( 'PlayButton' ) !;
        playButton.onclick = startSearching;

        var cancel = document.getElementById( 'PlayCancel' ) !;
        cancel.onclick = stopSearching;

        var accept = document.getElementById( 'AcceptMatch' ) !;
        accept.onclick = acceptMatch;

        var maps = document.querySelectorAll( '.playList li' );

        for ( var a = 0; a < maps.length; a++ ) {
            var map = <HTMLElement>maps[ a ];

            map.onclick = function ( this: HTMLElement ) {
                this.classList.toggle( 'mapSelected' );
            }
        }
    }


    export function startSearching() {
        if ( PLAYING ) {
            return;
        }

        showOverlay();
        showSearchingMenu();
        startTimer();
        startMatchFoundTimer();

        PLAYING = true;
    }


    export function stopSearching() {
        if ( !PLAYING ) {
            return;
        }

        hideOverlay();
        hideSearchingMenu();
        resetTimer();
        resetMatchFoundTimer();

        PLAYING = false;
    }


    function showOverlay() {
        OVERLAY.classList.remove( 'hidden' );
    }


    function hideOverlay() {
        OVERLAY.classList.add( 'hidden' );
    }


    export function isPlaying() {
        return PLAYING;
    }


    export function isAcceptDialogOpened() {
        return ACCEPT_DIALOG_OPENED;
    }


    function showAcceptDialog() {
        ACCEPT_DIALOG.classList.remove( 'hidden' );
        ACCEPT_DIALOG_OPENED = true;
    }


    function hideAcceptDialog() {
        ACCEPT_DIALOG.classList.add( 'hidden' );
        ACCEPT_DIALOG_OPENED = false;
    }


    function showSearchingMenu() {
        MENU_SEARCHING.classList.remove( 'hidden' );
    }


    function hideSearchingMenu() {
        MENU_SEARCHING.classList.add( 'hidden' );
    }


    function startTimer() {
        TIMER_COUNT = 0;

        var elements = document.querySelectorAll( '.searchTime' );
        updateTimer( elements );

        TIMER_ID = window.setInterval( function () {
            TIMER_COUNT++;
            updateTimer( elements );
        }, 1000 );
    }


    function updateTimer( elements: NodeListOf<Element> ) {
        for ( var a = 0; a < elements.length; a++ ) {
            elements[ a ].textContent = TIMER_COUNT + 's';
        }
    }


    function resetTimer() {
        if ( TIMER_ID !== null ) {
            window.clearInterval( TIMER_ID );
            TIMER_ID = null;
        }
    }


    function startMatchFoundTimer() {
        MATCH_FOUND_ID = window.setTimeout( function () {

            showAcceptDialog();

            stopSearching();
            MATCH_FOUND_ID = null;
        }, 10000 );
    }


    function resetMatchFoundTimer() {
        if ( MATCH_FOUND_ID !== null ) {
            window.clearTimeout( MATCH_FOUND_ID );
            MATCH_FOUND_ID = null;
        }
    }


    /**
     * After a match is found, accept it. Since we're only simulating it, we simply close the dialog.
     */
    export function acceptMatch() {
        hideAcceptDialog();
    }


    /**
     * After a match is found, refuse to play it. Since we're only simulating it, we simply close the dialog.
     */
    export function refuseMatch() {
        hideAcceptDialog();
    }
}