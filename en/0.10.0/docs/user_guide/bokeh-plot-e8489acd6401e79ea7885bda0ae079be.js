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

  var elt = document.getElementById("390ff4b6-d8b6-485a-a0af-d65986942c40");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '390ff4b6-d8b6-485a-a0af-d65986942c40' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"tags": [], "active": [0, 1], "doc": null, "labels": ["Option 1", "Option 2", "Option 3"], "id": "a3024f79-58ee-420d-a74b-f44413e26af5"}, "type": "CheckboxButtonGroup", "id": "a3024f79-58ee-420d-a74b-f44413e26af5"}, {"attributes": {"tags": [], "doc": null, "id": "1ca8286e-4986-45a2-8616-eeda4bb5a6e4", "children": [{"type": "CheckboxButtonGroup", "id": "a3024f79-58ee-420d-a74b-f44413e26af5"}]}, "type": "VBoxForm", "id": "1ca8286e-4986-45a2-8616-eeda4bb5a6e4"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("390ff4b6-d8b6-485a-a0af-d65986942c40", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("390ff4b6-d8b6-485a-a0af-d65986942c40", all_models);
    });
  }

}(this));