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

  var elt = document.getElementById("c79a4ca5-9075-4815-a5a1-307398106c7f");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c79a4ca5-9075-4815-a5a1-307398106c7f' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "Slider", "attributes": {"doc": null, "value": 1, "id": "4f018eea-bbdd-464a-9d8f-8f8fa427a1d9", "tags": [], "step": 0.1, "title": "Stuff", "callback": null, "start": 0, "end": 10}, "id": "4f018eea-bbdd-464a-9d8f-8f8fa427a1d9"}, {"type": "VBoxForm", "attributes": {"doc": null, "children": [{"type": "Slider", "id": "4f018eea-bbdd-464a-9d8f-8f8fa427a1d9"}], "id": "75f7fd85-80fb-4c9f-8a3b-772ee64ebf84", "tags": []}, "id": "75f7fd85-80fb-4c9f-8a3b-772ee64ebf84"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("c79a4ca5-9075-4815-a5a1-307398106c7f", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("c79a4ca5-9075-4815-a5a1-307398106c7f", all_models);
    });
  }

}(this));