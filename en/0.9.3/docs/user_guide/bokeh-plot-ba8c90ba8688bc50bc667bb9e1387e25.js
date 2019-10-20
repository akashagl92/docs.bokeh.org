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

  var elt = document.getElementById("d3ca7d62-3b33-4f93-9d03-14cf0c79ba2a");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'd3ca7d62-3b33-4f93-9d03-14cf0c79ba2a' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "VBoxForm", "attributes": {"doc": null, "children": [{"type": "RadioGroup", "id": "6da387bd-00c8-4bd7-a188-c1e7a67086a3"}], "id": "6f5d61cc-5e93-4337-b775-3cbfbd7b37e8", "tags": []}, "id": "6f5d61cc-5e93-4337-b775-3cbfbd7b37e8"}, {"type": "RadioGroup", "attributes": {"active": 0, "tags": [], "doc": null, "id": "6da387bd-00c8-4bd7-a188-c1e7a67086a3", "labels": ["Option 1", "Option 2", "Option 3"]}, "id": "6da387bd-00c8-4bd7-a188-c1e7a67086a3"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("d3ca7d62-3b33-4f93-9d03-14cf0c79ba2a", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("d3ca7d62-3b33-4f93-9d03-14cf0c79ba2a", all_models);
    });
  }

}(this));