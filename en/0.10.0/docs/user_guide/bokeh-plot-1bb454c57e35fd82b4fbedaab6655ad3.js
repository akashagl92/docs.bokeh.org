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

  var elt = document.getElementById("83db17ef-089b-41d4-b2c4-b3ce2f6f9b97");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '83db17ef-089b-41d4-b2c4-b3ce2f6f9b97' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"column_names": ["downloads", "dates"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"downloads": [69, 94, 61, 63, 16, 36, 52, 73, 65, 8], "dates": [1393632000000.0, 1393718400000.0, 1393804800000.0, 1393891200000.0, 1393977600000.0, 1394064000000.0, 1394150400000.0, 1394236800000.0, 1394323200000.0, 1394409600000.0]}, "id": "ad1a44bc-d481-4c0a-9ce2-4e3fecabf1ae"}, "type": "ColumnDataSource", "id": "ad1a44bc-d481-4c0a-9ce2-4e3fecabf1ae"}, {"attributes": {"tags": [], "doc": null, "title": "Date", "field": "dates", "editor": {"type": "StringEditor", "id": "c9c949c6-0d35-4a5e-978b-14351dc75369"}, "formatter": {"type": "DateFormatter", "id": "1e7353dc-e9be-4ee0-80f5-863b12eef93f"}, "id": "c325475b-0ef8-41d8-ba4b-3f4b577fb504"}, "type": "TableColumn", "id": "c325475b-0ef8-41d8-ba4b-3f4b577fb504"}, {"attributes": {"completions": [], "tags": [], "doc": null, "id": "c9c949c6-0d35-4a5e-978b-14351dc75369"}, "type": "StringEditor", "id": "c9c949c6-0d35-4a5e-978b-14351dc75369"}, {"attributes": {"completions": [], "tags": [], "doc": null, "id": "ecb2213e-691f-433e-a3f7-02f870f64c41"}, "type": "StringEditor", "id": "ecb2213e-691f-433e-a3f7-02f870f64c41"}, {"attributes": {"tags": [], "doc": null, "id": "60c2d9f1-24ba-45e1-b00b-7ce8b0115c6b", "children": [{"type": "DataTable", "id": "7ee8d380-8f48-46c4-aab1-02d2e8f67023"}]}, "type": "VBoxForm", "id": "60c2d9f1-24ba-45e1-b00b-7ce8b0115c6b"}, {"attributes": {"tags": [], "doc": null, "title": "Downloads", "field": "downloads", "editor": {"type": "StringEditor", "id": "ecb2213e-691f-433e-a3f7-02f870f64c41"}, "formatter": {"type": "StringFormatter", "id": "f97cac66-90be-42f6-9f09-49108b70ebb2"}, "id": "c8c518b9-d0cb-4304-a152-784ef6e7730e"}, "type": "TableColumn", "id": "c8c518b9-d0cb-4304-a152-784ef6e7730e"}, {"attributes": {"tags": [], "doc": null, "height": 280, "width": 400, "source": {"type": "ColumnDataSource", "id": "ad1a44bc-d481-4c0a-9ce2-4e3fecabf1ae"}, "id": "7ee8d380-8f48-46c4-aab1-02d2e8f67023", "columns": [{"type": "TableColumn", "id": "c325475b-0ef8-41d8-ba4b-3f4b577fb504"}, {"type": "TableColumn", "id": "c8c518b9-d0cb-4304-a152-784ef6e7730e"}]}, "type": "DataTable", "id": "7ee8d380-8f48-46c4-aab1-02d2e8f67023"}, {"attributes": {"doc": null, "id": "1e7353dc-e9be-4ee0-80f5-863b12eef93f", "tags": []}, "type": "DateFormatter", "id": "1e7353dc-e9be-4ee0-80f5-863b12eef93f"}, {"attributes": {"doc": null, "id": "f97cac66-90be-42f6-9f09-49108b70ebb2", "tags": []}, "type": "StringFormatter", "id": "f97cac66-90be-42f6-9f09-49108b70ebb2"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("83db17ef-089b-41d4-b2c4-b3ce2f6f9b97", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("83db17ef-089b-41d4-b2c4-b3ce2f6f9b97", all_models);
    });
  }

}(this));