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

  var elt = document.getElementById("665dc788-53c2-4b11-8277-692b998143b2");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '665dc788-53c2-4b11-8277-692b998143b2' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"tags": [], "doc": null, "title": "Option:", "value": ["foo", "quux"], "id": "284c26b7-0cee-4b3c-82d1-3c0542acd1ef", "callback": null, "options": ["foo", "bar", "baz", "quux"]}, "type": "MultiSelect", "id": "284c26b7-0cee-4b3c-82d1-3c0542acd1ef"}, {"attributes": {"tags": [], "doc": null, "id": "9ec7a0df-89fa-44a5-b50e-7c228207b9f2", "children": [{"type": "MultiSelect", "id": "284c26b7-0cee-4b3c-82d1-3c0542acd1ef"}]}, "type": "VBoxForm", "id": "9ec7a0df-89fa-44a5-b50e-7c228207b9f2"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("665dc788-53c2-4b11-8277-692b998143b2", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("665dc788-53c2-4b11-8277-692b998143b2", all_models);
    });
  }

}(this));