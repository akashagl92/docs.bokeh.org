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

  var elt = document.getElementById("e1651726-f1c4-4ff9-a832-ca89cabc369f");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'e1651726-f1c4-4ff9-a832-ca89cabc369f' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"tags": [], "doc": null, "title": "Option:", "value": "foo", "id": "27dbd843-eea5-431d-8ccc-6298750f1a50", "callback": null, "options": ["foo", "bar", "baz", "quux"]}, "type": "Select", "id": "27dbd843-eea5-431d-8ccc-6298750f1a50"}, {"attributes": {"tags": [], "doc": null, "id": "e5f977dd-9327-4ab7-9edc-bb4d6dda119c", "children": [{"type": "Select", "id": "27dbd843-eea5-431d-8ccc-6298750f1a50"}]}, "type": "VBoxForm", "id": "e5f977dd-9327-4ab7-9edc-bb4d6dda119c"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("e1651726-f1c4-4ff9-a832-ca89cabc369f", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("e1651726-f1c4-4ff9-a832-ca89cabc369f", all_models);
    });
  }

}(this));