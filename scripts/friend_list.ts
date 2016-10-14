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

                ContextMenu.show( {
                    left: event.clientX,
                    top: event.clientY
                }, ContextMenu.Type.FriendsList );

                event.stopPropagation();
            };
        }

        var inviteParty = document.getElementById( 'InviteToParty' ) !;
        inviteParty.onclick = function () {
            Party.addFriend( SELECTED_FRIEND );
            ContextMenu.hide();
        };
    }
}