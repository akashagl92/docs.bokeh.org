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
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.10.0.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.10.0.min.js"

  var elt = document.getElementById("df1a68f0-a841-4dca-a7b9-76476e9cd439");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'df1a68f0-a841-4dca-a7b9-76476e9cd439' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"end": 10, "title": "Stuff", "doc": null, "tags": [], "value": 1, "start": 0, "step": 0.1, "callback": null, "id": "b0cfd31f-3090-47ab-bb16-ccb0b835af16"}, "type": "Slider", "id": "b0cfd31f-3090-47ab-bb16-ccb0b835af16"}, {"attributes": {"tags": [], "doc": null, "id": "7d0e8fc8-c25c-43e7-89e3-cf078ae2dea2", "children": [{"type": "Slider", "id": "b0cfd31f-3090-47ab-bb16-ccb0b835af16"}]}, "type": "VBoxForm", "id": "7d0e8fc8-c25c-43e7-89e3-cf078ae2dea2"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("df1a68f0-a841-4dca-a7b9-76476e9cd439", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("df1a68f0-a841-4dca-a7b9-76476e9cd439", all_models);
    });
  }

}(this));