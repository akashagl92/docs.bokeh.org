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

  var elt = document.getElementById("ab94f390-6225-4f00-b10e-eab46882339e");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'ab94f390-6225-4f00-b10e-eab46882339e' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"tags": [], "active": 0, "doc": null, "labels": ["Option 1", "Option 2", "Option 3"], "id": "9b56f7dc-3a15-41ac-823b-7831c760c6ac"}, "type": "RadioButtonGroup", "id": "9b56f7dc-3a15-41ac-823b-7831c760c6ac"}, {"attributes": {"tags": [], "doc": null, "id": "7f326382-341e-4478-95f0-9a99e416340a", "children": [{"type": "RadioButtonGroup", "id": "9b56f7dc-3a15-41ac-823b-7831c760c6ac"}]}, "type": "VBoxForm", "id": "7f326382-341e-4478-95f0-9a99e416340a"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("ab94f390-6225-4f00-b10e-eab46882339e", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("ab94f390-6225-4f00-b10e-eab46882339e", all_models);
    });
  }

}(this));