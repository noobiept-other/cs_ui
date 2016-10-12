module Party {


    var PARTY: HTMLElement;


    export function init() {
        PARTY = document.getElementById( 'Party' ) !;
    }


    export function addFriend( friend: HTMLElement ) {

        var friendName = friend.textContent!;

        // this player is already in the party
        if ( PARTY.textContent!.indexOf( friendName ) >= 0 ) {
            return;
        }

        PARTY.appendChild( friend.cloneNode( true ) );
    }
}