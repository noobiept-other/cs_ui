module FriendList {


    var CONTEXT_MENU: HTMLElement;
    var SELECTED_FRIEND: HTMLElement;


    export function init() {

        var friends = document.getElementsByClassName( 'friend' );
        CONTEXT_MENU = document.getElementById( 'FriendContextMenu' ) !;

        for ( var a = 0; a < friends.length; a++ ) {

            let friend = <HTMLElement>friends[ a ];
            friend.onclick = function ( event ) {
                SELECTED_FRIEND = friend;
                openFriendContextMenu( event, friend );
            };
        }

        var inviteParty = document.getElementById( 'InviteToParty' ) !;
        inviteParty.onclick = function () {
            Party.addFriend( SELECTED_FRIEND );
            hideContextMenu();
        };
    }


    export function hideContextMenu() {
        CONTEXT_MENU.classList.add( 'hidden' );

    }


    function showContextMenu() {
        CONTEXT_MENU.classList.remove( 'hidden' );
    }


    /**
     * Position the context menu in the mouse position (on click).
     */
    function openFriendContextMenu( event: MouseEvent, friend: HTMLElement ) {

        CONTEXT_MENU.style.top = event.clientY + 'px';
        CONTEXT_MENU.style.left = event.clientX + 'px';

        showContextMenu();

        event.stopPropagation();
    }
}