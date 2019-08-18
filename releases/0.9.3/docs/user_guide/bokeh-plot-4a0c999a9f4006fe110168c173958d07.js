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

  var elt = document.getElementById("0b90d059-1a16-475d-915d-0679f793e335");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '0b90d059-1a16-475d-915d-0679f793e335' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "VBoxForm", "attributes": {"doc": null, "children": [{"type": "RadioButtonGroup", "id": "3294ef50-5dbc-46df-96d9-ddb837fecd6c"}], "id": "4e665adc-cf0d-4c78-9d4f-173d24ab299d", "tags": []}, "id": "4e665adc-cf0d-4c78-9d4f-173d24ab299d"}, {"type": "RadioButtonGroup", "attributes": {"active": 0, "tags": [], "doc": null, "id": "3294ef50-5dbc-46df-96d9-ddb837fecd6c", "labels": ["Option 1", "Option 2", "Option 3"]}, "id": "3294ef50-5dbc-46df-96d9-ddb837fecd6c"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("0b90d059-1a16-475d-915d-0679f793e335", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("0b90d059-1a16-475d-915d-0679f793e335", all_models);
    });
  }

}(this));