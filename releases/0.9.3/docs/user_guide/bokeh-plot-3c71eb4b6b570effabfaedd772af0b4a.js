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

  var elt = document.getElementById("926eab05-574a-4e9a-ac95-d78cec6a4130");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '926eab05-574a-4e9a-ac95-d78cec6a4130' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "Select", "attributes": {"value": "foo", "options": ["foo", "bar", "baz", "quux"], "tags": [], "doc": null, "title": "Option:", "callback": null, "id": "77196763-8c83-480b-a4fd-757864dab9ac"}, "id": "77196763-8c83-480b-a4fd-757864dab9ac"}, {"type": "VBoxForm", "attributes": {"doc": null, "children": [{"type": "Select", "id": "77196763-8c83-480b-a4fd-757864dab9ac"}], "id": "f8a48b00-926b-49b0-b78a-2ac9f3989120", "tags": []}, "id": "f8a48b00-926b-49b0-b78a-2ac9f3989120"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("926eab05-574a-4e9a-ac95-d78cec6a4130", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("926eab05-574a-4e9a-ac95-d78cec6a4130", all_models);
    });
  }

}(this));