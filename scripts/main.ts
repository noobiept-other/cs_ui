window.onload = function () {
    FriendList.init();
    Party.init();
    ContextMenu.init();
};


/**
 * Hide the friend's context menu when clicked outside off it.
 */
window.onclick = function ( event ) {
    var element = event.srcElement;
    var menu = document.getElementById( 'ContextMenu' ) !;

    if ( !element ) {
        return;
    }

    ContextMenu.hide();
}
