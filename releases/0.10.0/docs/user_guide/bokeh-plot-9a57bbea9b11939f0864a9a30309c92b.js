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

  var elt = document.getElementById("8c481a9d-a024-469e-b495-7f56cdcb7e4a");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '8c481a9d-a024-469e-b495-7f56cdcb7e4a' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"title": "Label:", "doc": null, "tags": [], "value": "default", "callback": null, "id": "314fc7fe-e845-4785-9ae9-1083b262639a"}, "type": "TextInput", "id": "314fc7fe-e845-4785-9ae9-1083b262639a"}, {"attributes": {"tags": [], "doc": null, "id": "97f9bf24-380f-4a1b-9407-7cbbd9689b56", "children": [{"type": "TextInput", "id": "314fc7fe-e845-4785-9ae9-1083b262639a"}]}, "type": "VBoxForm", "id": "97f9bf24-380f-4a1b-9407-7cbbd9689b56"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("8c481a9d-a024-469e-b495-7f56cdcb7e4a", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("8c481a9d-a024-469e-b495-7f56cdcb7e4a", all_models);
    });
  }

}(this));