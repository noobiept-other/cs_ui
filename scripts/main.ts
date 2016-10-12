window.onload = function () {
    FriendList.init();
    Party.init();
};


/**
 * Hide the friend's context menu when clicked outside off it.
 */
window.onclick = function ( event ) {
    var element = event.srcElement;
    var menu = document.getElementById( 'FriendContextMenu' ) !;

    if ( !element ) {
        return;
    }

    if ( !menu.contains( element ) ) {
        FriendList.hideContextMenu();
    }
}
