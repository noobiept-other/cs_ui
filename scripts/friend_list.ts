module FriendList {


    var CONTEXT_MENU: HTMLElement;


    export function init() {

        var friends = document.getElementsByClassName( 'friend' );
        CONTEXT_MENU = document.getElementById( 'FriendContextMenu' ) !;

        for ( var a = 0; a < friends.length; a++ ) {

            let friend = <HTMLElement>friends[ a ];
            friend.onclick = function ( event ) {

                ContextMenu.show( ContextMenu.Type.FriendsList, friend, {
                    left: event.pageX,
                    top: event.pageY
                });

                event.stopPropagation();
            };
        }

        var inviteParty = document.getElementById( 'InviteToParty' ) !;
        inviteParty.onclick = function () {
            Party.addFriend( ContextMenu.getAssociated() );
        };
    }
}