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

  var elt = document.getElementById("090b37a6-7818-42b6-bba3-800bd4b0138b");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '090b37a6-7818-42b6-bba3-800bd4b0138b' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "MultiSelect", "attributes": {"value": ["foo", "quux"], "options": ["foo", "bar", "baz", "quux"], "tags": [], "doc": null, "title": "Option:", "callback": null, "id": "c1912d02-2dc4-42e7-935a-3255ef1dfed6"}, "id": "c1912d02-2dc4-42e7-935a-3255ef1dfed6"}, {"type": "VBoxForm", "attributes": {"doc": null, "children": [{"type": "MultiSelect", "id": "c1912d02-2dc4-42e7-935a-3255ef1dfed6"}], "id": "fc6b7af1-c146-4ca9-9a33-286dd337de0b", "tags": []}, "id": "fc6b7af1-c146-4ca9-9a33-286dd337de0b"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("090b37a6-7818-42b6-bba3-800bd4b0138b", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("090b37a6-7818-42b6-bba3-800bd4b0138b", all_models);
    });
  }

}(this));