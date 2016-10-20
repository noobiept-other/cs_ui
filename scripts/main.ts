window.onload = function () {
    FriendList.init();
    Party.init();
    ContextMenu.init();
    Home.init();
    Play.init();
    MainMenu.init();
};


/**
 * Hide the friend's context menu when clicked outside off it.
 */
window.onclick = function ( event ) {
    var element = event.srcElement;

    if ( !element ) {
        return;
    }

    ContextMenu.hide();
};


/**
 * Keyboard shortcuts.
 */
window.onkeyup = function ( event ) {
    var key = event.keyCode;
    var enter = 13;
    var esc = 27;
    var one = 49;
    var two = 50;
    var three = 51;
    var four = 52;
    var five = 53;
    var six = 54;
    var seven = 55;

    // shortcuts only available when the dialog is opened
    if ( Play.isAcceptDialogOpened() ) {
        switch ( key ) {
            case enter:
                Play.acceptMatch();
                break;

            case esc:
                Play.refuseMatch();
                break;
        }
    }

    else if ( MainMenu.currentTab() === 'PlayTab' ) {
        switch ( key ) {
            case enter:
                Play.startSearching();
                break;

            case esc:
                Play.stopSearching();
                break;
        }
    }

    // general shortcuts
    else {
        if ( event.ctrlKey ) {
            switch ( key ) {
                case one:
                    MainMenu.changeTab( 'HomeTab' );
                    break;

                case two:
                    MainMenu.changeTab( 'PlayTab' );
                    break;

                case three:
                    MainMenu.changeTab( 'InventoryTab' );
                    break;

                case four:
                    MainMenu.changeTab( 'BlogTab' );
                    break;

                case five:
                    MainMenu.changeTab( 'WatchTab' );
                    break;

                case six:
                    MainMenu.changeTab( 'AwardsTab' );
                    break;

                case seven:
                    MainMenu.changeTab( 'OptionsTab' );
                    break;

            }
        }
    }
};