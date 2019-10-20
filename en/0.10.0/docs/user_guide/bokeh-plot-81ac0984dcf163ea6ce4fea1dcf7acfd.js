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

  var elt = document.getElementById("3e119353-c6e0-470b-8ad1-3bda91c36596");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '3e119353-c6e0-470b-8ad1-3bda91c36596' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"tags": [], "menu": [["Item 1", "item_1"], ["Item 2", "item_2"], null, ["Item 3", "item_3"]], "label": "Dropdown button", "callback": null, "doc": null, "type": "warning", "id": "b7491e45-524b-43c4-8325-682852cca7c6", "icon": null}, "type": "Dropdown", "id": "b7491e45-524b-43c4-8325-682852cca7c6"}, {"attributes": {"tags": [], "doc": null, "id": "f3875840-15af-4972-a357-0bed09d3f450", "children": [{"type": "Dropdown", "id": "b7491e45-524b-43c4-8325-682852cca7c6"}]}, "type": "VBoxForm", "id": "f3875840-15af-4972-a357-0bed09d3f450"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("3e119353-c6e0-470b-8ad1-3bda91c36596", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("3e119353-c6e0-470b-8ad1-3bda91c36596", all_models);
    });
  }

}(this));