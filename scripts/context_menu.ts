module ContextMenu {

    export enum Type {
        FriendsList,
        Party
    }
    var MENU: HTMLElement;
    var FRIENDS_LIST: HTMLElement;
    var PARTY: HTMLElement;
    var OPENED: HTMLElement | null = null;
    var ASSOCIATED_ELEMENT: HTMLElement;  // associated element (from where we opened the context menu)


    export function init() {
        MENU = document.getElementById( 'ContextMenu' ) !;
        FRIENDS_LIST = document.getElementById( 'FriendContextMenu' ) !;
        PARTY = document.getElementById( 'PartyContextMenu' ) !;
    }


    /**
     * Show the selected menu, and position it in the given position.
     */
    export function show( type: Type, associated: HTMLElement, position: { top: number, left: number }) {

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
        ASSOCIATED_ELEMENT = associated;

        // check if the menu will fit in the window, otherwise we need to position it a bit above
        var diff = window.innerHeight - ( position.top + MENU.offsetHeight );

        if ( diff < 0 ) {
            position.top += diff - 1;
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


    export function getAssociated() {
        return ASSOCIATED_ELEMENT;
    }
}