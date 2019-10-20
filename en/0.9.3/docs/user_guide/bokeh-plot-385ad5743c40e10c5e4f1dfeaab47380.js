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

  var elt = document.getElementById("729977b1-733b-4940-9d40-f3f1f3900cd6");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '729977b1-733b-4940-9d40-f3f1f3900cd6' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "Button", "attributes": {"doc": null, "callback": null, "icon": null, "tags": [], "label": "Foo", "type": "success", "id": "aa891b49-2d08-476b-a275-c0c7b07ebe0c"}, "id": "aa891b49-2d08-476b-a275-c0c7b07ebe0c"}, {"type": "VBoxForm", "attributes": {"doc": null, "children": [{"type": "Button", "id": "aa891b49-2d08-476b-a275-c0c7b07ebe0c"}], "id": "34544b56-44b8-4248-b9ed-a70d1f53c5e9", "tags": []}, "id": "34544b56-44b8-4248-b9ed-a70d1f53c5e9"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("729977b1-733b-4940-9d40-f3f1f3900cd6", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("729977b1-733b-4940-9d40-f3f1f3900cd6", all_models);
    });
  }

}(this));