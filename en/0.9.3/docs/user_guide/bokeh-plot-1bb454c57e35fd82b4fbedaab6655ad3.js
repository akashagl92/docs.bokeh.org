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

  var elt = document.getElementById("96bf7449-36c5-4f7c-a2a8-5dca2ba7a60b");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '96bf7449-36c5-4f7c-a2a8-5dca2ba7a60b' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "TableColumn", "attributes": {"doc": null, "editor": {"type": "StringEditor", "id": "a4e85bad-ba7f-46f2-b2b7-df6928405fa1"}, "field": "dates", "tags": [], "formatter": {"type": "DateFormatter", "id": "700da024-493a-4427-b770-ccb26237cbfd"}, "title": "Date", "id": "4c90ce58-113c-48a7-8374-ad85e8e7ea3f"}, "id": "4c90ce58-113c-48a7-8374-ad85e8e7ea3f"}, {"type": "StringFormatter", "attributes": {"doc": null, "id": "8bf21912-86dd-411b-81b3-709dfe640fea", "tags": []}, "id": "8bf21912-86dd-411b-81b3-709dfe640fea"}, {"type": "StringEditor", "attributes": {"tags": [], "doc": null, "id": "a4e85bad-ba7f-46f2-b2b7-df6928405fa1", "completions": []}, "id": "a4e85bad-ba7f-46f2-b2b7-df6928405fa1"}, {"type": "DataTable", "attributes": {"columns": [{"type": "TableColumn", "id": "4c90ce58-113c-48a7-8374-ad85e8e7ea3f"}, {"type": "TableColumn", "id": "7458b345-138e-48cf-9386-5dd110584e1b"}], "height": 280, "width": 400, "tags": [], "doc": null, "source": {"type": "ColumnDataSource", "id": "dd07f4a3-f3bd-4549-88f2-dee4f6bd265f"}, "id": "eb57da73-00b4-435a-93e9-1560e569bdc3"}, "id": "eb57da73-00b4-435a-93e9-1560e569bdc3"}, {"type": "TableColumn", "attributes": {"doc": null, "editor": {"type": "StringEditor", "id": "f7e72337-ae6c-422a-88b8-890945541bf1"}, "field": "downloads", "tags": [], "formatter": {"type": "StringFormatter", "id": "8bf21912-86dd-411b-81b3-709dfe640fea"}, "title": "Downloads", "id": "7458b345-138e-48cf-9386-5dd110584e1b"}, "id": "7458b345-138e-48cf-9386-5dd110584e1b"}, {"type": "VBoxForm", "attributes": {"doc": null, "children": [{"type": "DataTable", "id": "eb57da73-00b4-435a-93e9-1560e569bdc3"}], "id": "ee10f4a7-17d1-4b8a-86e7-909edbc014b9", "tags": []}, "id": "ee10f4a7-17d1-4b8a-86e7-909edbc014b9"}, {"type": "StringEditor", "attributes": {"tags": [], "doc": null, "id": "f7e72337-ae6c-422a-88b8-890945541bf1", "completions": []}, "id": "f7e72337-ae6c-422a-88b8-890945541bf1"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"downloads": [34, 16, 61, 2, 49, 16, 23, 72, 80, 92], "dates": [1393632000000.0, 1393718400000.0, 1393804800000.0, 1393891200000.0, 1393977600000.0, 1394064000000.0, 1394150400000.0, 1394236800000.0, 1394323200000.0, 1394409600000.0]}, "doc": null, "id": "dd07f4a3-f3bd-4549-88f2-dee4f6bd265f", "column_names": ["downloads", "dates"]}, "id": "dd07f4a3-f3bd-4549-88f2-dee4f6bd265f"}, {"type": "DateFormatter", "attributes": {"doc": null, "id": "700da024-493a-4427-b770-ccb26237cbfd", "tags": []}, "id": "700da024-493a-4427-b770-ccb26237cbfd"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("96bf7449-36c5-4f7c-a2a8-5dca2ba7a60b", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("96bf7449-36c5-4f7c-a2a8-5dca2ba7a60b", all_models);
    });
  }

}(this));