module Play {


    var OVERLAY: HTMLElement;
    var PLAYING = false;
    var ACCEPT_DIALOG: HTMLElement;


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
        PLAYING = true;
    }


    function stopSearching() {
        hideOverlay();
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


    export function showAcceptDialog() {
        ACCEPT_DIALOG.classList.remove( 'hidden' );
    }


    function hideAcceptDialog() {
        ACCEPT_DIALOG.classList.add( 'hidden' );
    }
}