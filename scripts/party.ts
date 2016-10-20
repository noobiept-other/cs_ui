module Party {


    var PARTY: HTMLElement;
    var PARTY_CHAT: HTMLElement;
    var CHAT_INPUT: HTMLInputElement;
    var CHAT_OPENED = false;


    export function init() {
        PARTY = document.getElementById( 'Party' ) !;
        PARTY_CHAT = document.getElementById( 'PartyChat' ) !;

        var chatButton = document.getElementById( 'PartyChatButton' ) !;
        chatButton.onclick = toggleChat;

        var kickFromParty = document.getElementById( 'KickFromParty' ) !;
        kickFromParty.onclick = function () {
            removeFriend( ContextMenu.getAssociated() );
        }

        CHAT_INPUT = <HTMLInputElement>document.getElementById( 'PartyChatInput' ) !;
        CHAT_INPUT.onkeyup = function ( event ) {

            // on 'enter' key press
            if ( event.keyCode === 13 ) {
                addChatLine( CHAT_INPUT.value );
                CHAT_INPUT.value = '';
            }
        };

        var mainPlayer = document.getElementById( 'MainPlayer' ) !;
        mainPlayer.onclick = function ( event ) {
            ContextMenu.show( ContextMenu.Type.MainPlayer, mainPlayer, {
                left: event.pageX,
                top: event.pageY
            });

            event.stopPropagation();
        };

        var leaveParty = document.getElementById( 'LeaveParty' ) !;
        leaveParty.onclick = function () {

            if ( Play.isPlaying() ) {
                return;
            }

            var friends = PARTY.querySelectorAll( '.friend' );

            for ( var a = 0; a < friends.length; a++ ) {
                PARTY.removeChild( friends[ a ] );
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
                left: event.pageX,
                top: event.pageY
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
        CHAT_INPUT.focus();
    }


    function closeChat() {
        PARTY_CHAT.classList.add( 'hidden' );
    }


    export function toggleChat() {
        if ( CHAT_OPENED ) {
            closeChat();
        }

        else {
            openChat();
        }

        CHAT_OPENED = !CHAT_OPENED;
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