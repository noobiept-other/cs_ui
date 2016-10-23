window.onload = function () {
    FriendList.init();
    Party.init();
    ContextMenu.init();
    Home.init();
    Play.init();
    MainMenu.init();

    // load the blog iframe (its done here so it doesn't block the UI loading)
    var blog = <HTMLIFrameElement>document.querySelector( '#BlogTab' ) !;
    var iframe = document.createElement( 'iframe' );

    iframe.src = "http://blog.counter-strike.net/";
    blog.appendChild( iframe );
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
    var c = 67;
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

        return;
    }

    if ( MainMenu.currentMenu() === 'Play' ) {

        if ( event.ctrlKey ) {
            switch ( key ) {
                case enter:
                    Play.startSearching();
                    break;
            }
        }

        else {
            switch ( key ) {
                case esc:
                    Play.stopSearching();
                    break;
            }
        }
    }

    // general shortcuts
    if ( event.ctrlKey || event.shiftKey ) {
        switch ( key ) {
            case c:
                Party.toggleChat();
                break;

            case one:
                MainMenu.changeTab( 'Home' );
                break;

            case two:
                MainMenu.changeTab( 'Play' );
                break;

            case three:
                MainMenu.changeTab( 'Inventory' );
                break;

            case four:
                MainMenu.changeTab( 'Blog' );
                break;

            case five:
                MainMenu.changeTab( 'Watch' );
                break;

            case six:
                MainMenu.changeTab( 'Awards' );
                break;

            case seven:
                MainMenu.changeTab( 'Options' );
                break;
        }
    }
};