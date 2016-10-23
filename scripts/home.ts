module Home {

    export function init() {

        var latestBlog = document.getElementById( 'LatestBlog' ) !;
        latestBlog.onclick = function () {
            MainMenu.changeTab( 'Blog' );
        }
    }
}