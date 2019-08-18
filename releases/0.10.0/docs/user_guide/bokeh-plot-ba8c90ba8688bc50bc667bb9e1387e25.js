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

  var elt = document.getElementById("a1306abc-f461-4f7c-a7f2-77344b99624c");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'a1306abc-f461-4f7c-a7f2-77344b99624c' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"tags": [], "active": 0, "doc": null, "labels": ["Option 1", "Option 2", "Option 3"], "id": "99784cfd-1481-4426-b124-007f9035a6b5"}, "type": "RadioGroup", "id": "99784cfd-1481-4426-b124-007f9035a6b5"}, {"attributes": {"tags": [], "doc": null, "id": "aa3915e3-c121-4aff-905d-910da3917ff9", "children": [{"type": "RadioGroup", "id": "99784cfd-1481-4426-b124-007f9035a6b5"}]}, "type": "VBoxForm", "id": "aa3915e3-c121-4aff-905d-910da3917ff9"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("a1306abc-f461-4f7c-a7f2-77344b99624c", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("a1306abc-f461-4f7c-a7f2-77344b99624c", all_models);
    });
  }

}(this));