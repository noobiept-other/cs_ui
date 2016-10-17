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

        var chatInput = <HTMLInputElement>document.getElementById( 'PartyChatInput' ) !;
        chatInput.onkeyup = function ( event ) {

            // on 'enter' key press
            if ( event.keyCode === 13 ) {
                addChatLine( chatInput.value );
                chatInput.value = '';
            }
        };
    }


    export function addFriend( friend: HTMLElement ) {

        if ( Play.isPlaying() ) {
            return;
        }

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

        if ( Play.isPlaying() ) {
            return;
        }

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


    function addChatLine( value: string ) {

        if ( value ) {
            var list = PARTY_CHAT.querySelector( 'ul' );
            var text = document.createElement( 'li' );

            text.innerHTML = '<span class="playerName">Player Name</span>: ' + value;

            list.appendChild( text );

            // scroll to the bottom when a new text is added
            list.scrollTop = list.scrollHeight;
        }
    }
}