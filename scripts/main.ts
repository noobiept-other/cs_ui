window.onload = function () {

    var friends = document.getElementsByClassName( 'friend' );

    for ( var a = 0; a < friends.length; a++ ) {
        let friend = <HTMLElement>friends[ a ];
        friend.onclick = function ( event ) { openFriendContextMenu( event, friend ) };
    }
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
        menu.classList.add( 'hidden' );
    }
}


/**
 * Position the context menu in the mouse position (on click).
 */
function openFriendContextMenu( event: MouseEvent, friend: HTMLElement ) {

    var menu = document.getElementById( 'FriendContextMenu' ) !;

    menu.style.top = event.clientY + 'px';
    menu.style.left = event.clientX + 'px';

    menu.classList.remove( 'hidden' );

    event.stopPropagation();
}