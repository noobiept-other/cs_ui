module MainMenu {


    var SELECTED: string;   // the tab id ('PlayTab' / 'InventoryTab', etc)


    export function init() {

        var menu = document.getElementById( 'TopMenu' ) !;

        // start with the first tab selected
        SELECTED = menu.firstElementChild.id + 'Tab';
        changeTab( SELECTED );

        var openTab = function ( this: HTMLElement ) {
            changeTab( this.id + 'Tab' );
        }

        for ( var a = 0; a < menu.children.length; a++ ) {
            var item = <HTMLElement>menu.children[ a ];

            if ( item.classList.contains( 'button' ) ) {
                item.onclick = openTab;
            }
        }
    }


    export function changeTab( tabId: string ) {
        if ( SELECTED ) {
            document.getElementById( SELECTED ) !.classList.add( 'hidden' );
        }

        var tab = document.getElementById( tabId ) !;
        tab.classList.remove( 'hidden' );

        SELECTED = tabId;
    }


    export function currentTab() {
        return SELECTED;
    }
}