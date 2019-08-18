(function(global) {
  if (typeof (window._bokeh_onload_callbacks) === "undefined"){
    window._bokeh_onload_callbacks = [];
  }
  function load_lib(url, callback){
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading){
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", new Date());
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", new Date());
    window._bokeh_is_loading = true;
    var s = document.createElement('script');
    s.src = url;
    s.async = true;
    s.onreadystatechange = s.onload = function(){
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.9.3.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.9.3.min.js"

  var elt = document.getElementById("af0ded9f-f436-4a61-86e6-d55326f6276c");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'af0ded9f-f436-4a61-86e6-d55326f6276c' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "Toggle", "attributes": {"doc": null, "callback": null, "icon": null, "tags": [], "label": "Foo", "type": "success", "id": "09237c6a-7492-4ccf-b5a2-0d4898e15415"}, "id": "09237c6a-7492-4ccf-b5a2-0d4898e15415"}, {"type": "VBoxForm", "attributes": {"doc": null, "children": [{"type": "Toggle", "id": "09237c6a-7492-4ccf-b5a2-0d4898e15415"}], "id": "96a95d1d-919b-4eb7-b251-d9a25f901598", "tags": []}, "id": "96a95d1d-919b-4eb7-b251-d9a25f901598"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("af0ded9f-f436-4a61-86e6-d55326f6276c", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("af0ded9f-f436-4a61-86e6-d55326f6276c", all_models);
    });
  }

}(this));