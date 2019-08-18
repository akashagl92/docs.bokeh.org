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

  var elt = document.getElementById("8254527f-4c06-4ed4-930d-74fb45783b3a");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '8254527f-4c06-4ed4-930d-74fb45783b3a' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"tags": [], "doc": null, "label": "Foo", "callback": null, "type": "success", "id": "fad11dec-53e1-4362-a6ce-826ad9a70d0d", "icon": null}, "type": "Toggle", "id": "fad11dec-53e1-4362-a6ce-826ad9a70d0d"}, {"attributes": {"tags": [], "doc": null, "id": "e0eda46a-b51a-4580-bf2c-7193859aeb59", "children": [{"type": "Toggle", "id": "fad11dec-53e1-4362-a6ce-826ad9a70d0d"}]}, "type": "VBoxForm", "id": "e0eda46a-b51a-4580-bf2c-7193859aeb59"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("8254527f-4c06-4ed4-930d-74fb45783b3a", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("8254527f-4c06-4ed4-930d-74fb45783b3a", all_models);
    });
  }

}(this));