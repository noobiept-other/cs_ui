module Play {


    var OVERLAY: HTMLElement;
    var PLAYING = false;


    export function init() {

        OVERLAY = document.getElementById( 'PlayOverlay' ) !;

        var playButton = document.getElementById( 'PlayButton' ) !;
        playButton.onclick = startSearching;

        var cancel = document.getElementById( 'PlayCancel' ) !;
        cancel.onclick = stopSearching;
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
}