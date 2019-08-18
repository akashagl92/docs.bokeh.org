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

  var elt = document.getElementById("10ef497c-c349-4853-990a-5e6d0b00e21a");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '10ef497c-c349-4853-990a-5e6d0b00e21a' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "Dropdown", "attributes": {"doc": null, "callback": null, "icon": null, "tags": [], "label": "Dropdown button", "type": "warning", "id": "2908c28f-5820-4afa-baee-0f7d3031d9f2", "menu": [["Item 1", "item_1"], ["Item 2", "item_2"], null, ["Item 3", "item_3"]]}, "id": "2908c28f-5820-4afa-baee-0f7d3031d9f2"}, {"type": "VBoxForm", "attributes": {"doc": null, "children": [{"type": "Dropdown", "id": "2908c28f-5820-4afa-baee-0f7d3031d9f2"}], "id": "ee21725d-36f7-484b-b199-5dea3df82ca2", "tags": []}, "id": "ee21725d-36f7-484b-b199-5dea3df82ca2"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("10ef497c-c349-4853-990a-5e6d0b00e21a", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("10ef497c-c349-4853-990a-5e6d0b00e21a", all_models);
    });
  }

}(this));