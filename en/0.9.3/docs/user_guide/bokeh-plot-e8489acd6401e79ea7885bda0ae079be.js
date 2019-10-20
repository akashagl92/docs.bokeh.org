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

  var elt = document.getElementById("4e5ae97a-0e84-4bda-8877-0f46421cb3db");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '4e5ae97a-0e84-4bda-8877-0f46421cb3db' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "VBoxForm", "attributes": {"doc": null, "children": [{"type": "CheckboxButtonGroup", "id": "d179ac8c-8329-473c-9cdf-43a9d35e0861"}], "id": "ef9df9e5-d895-4624-aeae-e9b7cbfa8527", "tags": []}, "id": "ef9df9e5-d895-4624-aeae-e9b7cbfa8527"}, {"type": "CheckboxButtonGroup", "attributes": {"active": [0, 1], "tags": [], "doc": null, "id": "d179ac8c-8329-473c-9cdf-43a9d35e0861", "labels": ["Option 1", "Option 2", "Option 3"]}, "id": "d179ac8c-8329-473c-9cdf-43a9d35e0861"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("4e5ae97a-0e84-4bda-8877-0f46421cb3db", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("4e5ae97a-0e84-4bda-8877-0f46421cb3db", all_models);
    });
  }

}(this));