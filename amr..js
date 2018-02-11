function redirect() {
        $('html')['html']('<img src="//1.bp.blogspot.com/-1IIY1Nnhbbc/WZBVRmOA8PI/AAAAAAAAAMk/BNhkHhV3ZnQ6XGXyedaK6Usegcup9E5UACK4BGAYYCw/s1600/redirect.png"> ');
        setTimeout(function() {
                window['location']['assign']('#')
        }, 5e3)
}
var Loct = window['location']['hostname']['toLowerCase']();
var Link = window['location']['href']['toLowerCase']();
var Cont = '';
var Cont2 = '';




if (Link['indexOf']('post-preview') == -1 && Link['indexOf']('www.blogger') == -1 && Link['indexOf']('b/preview') == -1 && Link['indexOf']('template-editor') == -1 && Loct['indexOf']('website.com') == -1 && Loct['indexOf']('NAMESITE') == -1
&& Link['indexOf']('aaaaaaa12356.blogspot.com.eg') == -1 && Link['indexOf']('ah') == -1 
&& Link['indexOf']('href') == -1 ) {
        redirect()
}
