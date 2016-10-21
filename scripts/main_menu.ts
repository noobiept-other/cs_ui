module MainMenu {


    type MenuId = 'Home' | 'Play' | 'Inventory' | 'Blog' | 'Watch' | 'Awards' | 'Options';
    var MENU_SELECTED: HTMLElement;
    var TAB_SELECTED: HTMLElement;


    export function init() {

        var menu = document.getElementById( 'TopMenu' ) !;

        // start with the first tab selected
        changeTab( <MenuId>menu.firstElementChild.id );

        var openTab = function ( this: HTMLElement ) {
            changeTab( <MenuId>this.id );
        }

        for ( var a = 0; a < menu.children.length; a++ ) {
            var item = <HTMLElement>menu.children[ a ];

            if ( item.classList.contains( 'button' ) ) {
                item.onclick = openTab;
            }
        }
    }


    export function changeTab( id: MenuId ) {

        // deselect the previous menu/tab
        if ( MENU_SELECTED ) {

            TAB_SELECTED.classList.add( 'hidden' );
            MENU_SELECTED.classList.remove( 'tabSelected' );
        }

        MENU_SELECTED = document.getElementById( id ) !;
        TAB_SELECTED = document.getElementById( id + 'Tab' ) !;

        TAB_SELECTED.classList.remove( 'hidden' );
        MENU_SELECTED.classList.add( 'tabSelected' );
    }


    export function currentMenu() {
        return MENU_SELECTED.id;
    }
}