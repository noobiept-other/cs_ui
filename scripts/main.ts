window.onload = function () {
    FriendList.init();
    Party.init();
    ContextMenu.init();
    Play.init();
};


/**
 * Hide the friend's context menu when clicked outside off it.
 */
window.onclick = function ( event ) {
    var element = event.srcElement;

    if ( !element ) {
        return;
    }

    ContextMenu.hide();
}
