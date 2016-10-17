module Play {


    var OVERLAY: HTMLElement;
    var PLAYING = false;
    var ACCEPT_DIALOG: HTMLElement;

    // time has passed during game search
    var TIMER_ID: number | null = null;
    var TIMER_COUNT = 0;    // in seconds

    // time until the match is "found"
    var MATCH_FOUND_ID: number | null = null;


    export function init() {

        OVERLAY = document.getElementById( 'PlayOverlay' ) !;
        ACCEPT_DIALOG = document.getElementById( 'AcceptDialogOverlay' ) !;

        var playButton = document.getElementById( 'PlayButton' ) !;
        playButton.onclick = startSearching;

        var cancel = document.getElementById( 'PlayCancel' ) !;
        cancel.onclick = stopSearching;

        var acceptMatch = document.getElementById( 'AcceptMatch' ) !;
        acceptMatch.onclick = hideAcceptDialog;
    }


    function startSearching() {
        showOverlay();
        startTimer();
        startMatchFoundTimer();

        PLAYING = true;
    }


    function stopSearching() {
        hideOverlay();
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


    function showAcceptDialog() {
        ACCEPT_DIALOG.classList.remove( 'hidden' );
    }


    function hideAcceptDialog() {
        ACCEPT_DIALOG.classList.add( 'hidden' );
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
}