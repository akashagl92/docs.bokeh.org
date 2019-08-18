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

  var elt = document.getElementById("052f82bd-b040-4053-8eb5-7e3049985126");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '052f82bd-b040-4053-8eb5-7e3049985126' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "CheckboxGroup", "attributes": {"active": [0, 1], "tags": [], "doc": null, "id": "7ae0d72d-52df-4a63-b3f1-fad4ea6a1da4", "labels": ["Option 1", "Option 2", "Option 3"]}, "id": "7ae0d72d-52df-4a63-b3f1-fad4ea6a1da4"}, {"type": "VBoxForm", "attributes": {"doc": null, "children": [{"type": "CheckboxGroup", "id": "7ae0d72d-52df-4a63-b3f1-fad4ea6a1da4"}], "id": "7aec15db-5119-4952-8eb3-6d49d1cfe326", "tags": []}, "id": "7aec15db-5119-4952-8eb3-6d49d1cfe326"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("052f82bd-b040-4053-8eb5-7e3049985126", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("052f82bd-b040-4053-8eb5-7e3049985126", all_models);
    });
  }

}(this));