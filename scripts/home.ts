module Home {

    export function init() {

        // load the blog iframe (its done here so it doesn't block the UI loading)
        var iframe = <HTMLIFrameElement>document.querySelector( '#BlogTab iframe' ) !;
        iframe.src = "http://blog.counter-strike.net/";

        var latestBlog = document.getElementById( 'LatestBlog' ) !;
        latestBlog.onclick = function () {
            MainMenu.changeTab( 'BlogTab' );
        }
    }
}