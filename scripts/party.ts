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
    }


    export function addFriend( friend: HTMLElement ) {

        var friendName = friend.textContent!;

        // this player is already in the party
        if ( PARTY.textContent!.indexOf( friendName ) >= 0 ) {
            return;
        }

        PARTY.appendChild( friend.cloneNode( true ) );
    }


    function openChat() {
        PARTY_CHAT.classList.remove( 'hidden' );
    }


    function closeChat() {
        PARTY_CHAT.classList.add( 'hidden' );
    }
}