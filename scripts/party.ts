module Party {


    var PARTY: HTMLElement;
    var PARTY_CHAT: HTMLElement;


    export function init() {
        PARTY = document.getElementById( 'Party' ) !;
        PARTY_CHAT = document.getElementById( 'PartyChat' ) !;

        var chatButton = document.getElementById( 'PartyChatButton' ) !;
        var chatOpened = false;

        chatButton.onclick = function () {
            if ( chatOpened ) {
                closeChat();
            }

            else {
                openChat();
            }

            chatOpened = !chatOpened;
        };

        var kickFromParty = document.getElementById( 'KickFromParty' ) !;
        kickFromParty.onclick = function () {
            removeFriend( ContextMenu.getAssociated() );
        }
    }


    export function addFriend( friend: HTMLElement ) {

        var friendName = friend.textContent!;

        // this player is already in the party
        if ( PARTY.textContent!.indexOf( friendName ) >= 0 ) {
            return;
        }

        var partyPlayer = <HTMLElement>friend.cloneNode( true );
        partyPlayer.onclick = function ( event ) {
            ContextMenu.show( ContextMenu.Type.Party, friend, {
                left: event.clientX,
                top: event.clientY
            });

            event.stopPropagation();
        }

        PARTY.appendChild( partyPlayer );
    }


    function removeFriend( friend: HTMLElement ) {
        for ( var a = 0; a < PARTY.childNodes.length; a++ ) {
            var partyElement = PARTY.childNodes[ a ];

            if ( partyElement.textContent === friend.textContent ) {
                PARTY.removeChild( partyElement );
                return;
            }
        }
    }


    function openChat() {
        PARTY_CHAT.classList.remove( 'hidden' );
    }


    function closeChat() {
        PARTY_CHAT.classList.add( 'hidden' );
    }
}