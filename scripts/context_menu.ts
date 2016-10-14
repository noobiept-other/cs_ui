module ContextMenu {

    export enum Type {
        FriendsList,
        Party
    }
    var MENU: HTMLElement;
    var FRIENDS_LIST: HTMLElement;
    var PARTY: HTMLElement;
    var OPENED: HTMLElement | null = null;


    export function init() {
        MENU = document.getElementById( 'ContextMenu' ) !;
        FRIENDS_LIST = document.getElementById( 'FriendContextMenu' ) !;
        PARTY = document.getElementById( 'PartyContextMenu' ) !;
    }


    /**
     * Show the selected menu, and position it in the given position.
     */
    export function show( position: { top: number, left: number }, type: Type ) {
        if ( OPENED ) {
            OPENED.classList.add( 'hidden' );
        }

        else {
            MENU.classList.remove( 'hidden' );
        }

        switch ( type ) {
            case Type.FriendsList:
                OPENED = FRIENDS_LIST;
                break;

            case Type.Party:
                OPENED = PARTY;
                break;

            default:
                return;
        }

        OPENED.classList.remove( 'hidden' );

        // check if the menu will fit in the window, otherwise we need to position it a bit above
        var diff = window.innerHeight - ( position.top + MENU.offsetHeight );

        if ( diff < 0 ) {
            position.top += diff;
        }

        MENU.style.top = position.top + 'px';
        MENU.style.left = position.left + 'px';
    }


    export function hide() {
        MENU.classList.add( 'hidden' );

        if ( OPENED ) {
            OPENED.classList.add( 'hidden' );
            OPENED = null;
        }
    }
}