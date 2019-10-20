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

  var elt = document.getElementById("56693931-7d50-471d-94cc-68e17bf37ba8");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '56693931-7d50-471d-94cc-68e17bf37ba8' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "TextInput", "attributes": {"value": "default", "tags": [], "doc": null, "title": "Label:", "callback": null, "id": "f046df10-56f1-4ed5-a35f-a1bc358a2539"}, "id": "f046df10-56f1-4ed5-a35f-a1bc358a2539"}, {"type": "VBoxForm", "attributes": {"doc": null, "children": [{"type": "TextInput", "id": "f046df10-56f1-4ed5-a35f-a1bc358a2539"}], "id": "18cb2061-dc24-4a42-a851-6604bde4751c", "tags": []}, "id": "18cb2061-dc24-4a42-a851-6604bde4751c"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("56693931-7d50-471d-94cc-68e17bf37ba8", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("56693931-7d50-471d-94cc-68e17bf37ba8", all_models);
    });
  }

}(this));