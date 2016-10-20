module MainMenu {


    type TabId = 'HomeTab' | 'PlayTab' | 'InventoryTab' | 'BlogTab' | 'WatchTab' | 'AwardsTab' | 'OptionsTab';
    var SELECTED: TabId;


    export function init() {

        var menu = document.getElementById( 'TopMenu' ) !;

        // start with the first tab selected
        SELECTED = <TabId>( menu.firstElementChild.id + 'Tab' );
        changeTab( SELECTED );

        var openTab = function ( this: HTMLElement ) {
            changeTab( <TabId>( this.id + 'Tab' ) );
        }

        for ( var a = 0; a < menu.children.length; a++ ) {
            var item = <HTMLElement>menu.children[ a ];

            if ( item.classList.contains( 'button' ) ) {
                item.onclick = openTab;
            }
        }
    }


    export function changeTab( tabId: TabId ) {
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