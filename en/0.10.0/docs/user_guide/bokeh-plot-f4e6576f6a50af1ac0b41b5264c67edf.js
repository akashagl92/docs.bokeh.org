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

  var elt = document.getElementById("3fd3c1c9-a32c-4fc2-97d1-d27cbf669482");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '3fd3c1c9-a32c-4fc2-97d1-d27cbf669482' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"tags": [], "active": [0, 1], "doc": null, "labels": ["Option 1", "Option 2", "Option 3"], "id": "df0f329f-bc07-4fd8-ba83-03dd42f6a711"}, "type": "CheckboxGroup", "id": "df0f329f-bc07-4fd8-ba83-03dd42f6a711"}, {"attributes": {"tags": [], "doc": null, "id": "5317368f-28c5-4f62-92a9-33636a93af7b", "children": [{"type": "CheckboxGroup", "id": "df0f329f-bc07-4fd8-ba83-03dd42f6a711"}]}, "type": "VBoxForm", "id": "5317368f-28c5-4f62-92a9-33636a93af7b"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("3fd3c1c9-a32c-4fc2-97d1-d27cbf669482", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("3fd3c1c9-a32c-4fc2-97d1-d27cbf669482", all_models);
    });
  }

}(this));