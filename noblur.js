function changeThumbSize(id,size){
var blogGadget = document.getElementById(id);
var replacement = blogGadget.innerHTML;
blogGadget.innerHTML = replacement.replace(/s72-c/g,&quot;s&quot;+size+&quot;-c&quot;);
var thumbnails = blogGadget.getElementsByTagName(&quot;img&quot;);
for(var i=0;i&lt;thumbnails.length;i++){
thumbnails[i].width = size;
thumbnails[i].height = size;
}
}
changeThumbSize(&quot;Blog1&quot;,210);

$(document).ready(function () {
    if ($("#protect,.protect").attr("href") != "http://coopiscape.blogspot.com/") {
        window.location.href = "http://coopiscape.blogspot.com/";
    }
});
