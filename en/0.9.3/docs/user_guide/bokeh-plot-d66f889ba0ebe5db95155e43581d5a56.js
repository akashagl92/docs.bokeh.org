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

  var elt = document.getElementById("5b3a59d6-aa64-468e-86cb-c8640ecc07d8");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '5b3a59d6-aa64-468e-86cb-c8640ecc07d8' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "ToolEvents", "attributes": {"doc": null, "id": "c9b9b0ea-3bf9-4594-93ff-d8bd0570fbdc", "tags": [], "geometries": []}, "id": "c9b9b0ea-3bf9-4594-93ff-d8bd0570fbdc"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "a25da916-5056-45ef-921d-2b1f36c86619"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "a7479a2f-5ba9-406d-bb31-82e073276288"}, "plot": {"type": "Plot", "id": "2f63b9f4-937d-4bcb-a118-f8cd57889998", "subtype": "Figure"}, "id": "fe8938ee-fb7f-411d-b3a1-d1437d9d5ae7"}, "id": "fe8938ee-fb7f-411d-b3a1-d1437d9d5ae7"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "a25da916-5056-45ef-921d-2b1f36c86619"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "2f63b9f4-937d-4bcb-a118-f8cd57889998", "subtype": "Figure"}, "dimension": 1, "id": "1d5b9a3e-313c-4296-8d89-dbdd779d271e"}, "id": "1d5b9a3e-313c-4296-8d89-dbdd779d271e"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "dcf68d12-6596-4e7f-b5c6-d8b8b43e6b7f", "tags": []}, "id": "dcf68d12-6596-4e7f-b5c6-d8b8b43e6b7f"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "ecc9b04d-9321-4d0e-a5f4-69393b1c8d01"}, "id": "ecc9b04d-9321-4d0e-a5f4-69393b1c8d01"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "d4ced7f5-3cbc-4cb5-aea2-b514dab2b564"}, "tags": [], "glyph": {"type": "Circle", "id": "2bc63d89-f3d7-46c3-be00-f7d4937f4d35"}, "doc": null, "nonselection_glyph": {"type": "Circle", "id": "0128a205-4c62-42ac-a2a9-261acf913abc"}, "selection_glyph": null, "id": "00b91457-1750-44c6-87f9-18a96e9e08fb"}, "id": "00b91457-1750-44c6-87f9-18a96e9e08fb"}, {"type": "Plot", "attributes": {"plot_height": 400, "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "a4bb464c-531f-44c4-83c8-4e9cc7da68ff"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "c9b9b0ea-3bf9-4594-93ff-d8bd0570fbdc"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "1c1e25c0-d8e2-4ae9-8c28-ba24068d4d3b"}, {"type": "Grid", "id": "a0c38de8-67e9-43bb-a6c7-6bf3dba0f702"}, {"type": "LinearAxis", "id": "fe8938ee-fb7f-411d-b3a1-d1437d9d5ae7"}, {"type": "Grid", "id": "1d5b9a3e-313c-4296-8d89-dbdd779d271e"}, {"type": "GlyphRenderer", "id": "00b91457-1750-44c6-87f9-18a96e9e08fb"}], "below": [{"type": "LinearAxis", "id": "1c1e25c0-d8e2-4ae9-8c28-ba24068d4d3b"}], "left": [{"type": "LinearAxis", "id": "fe8938ee-fb7f-411d-b3a1-d1437d9d5ae7"}], "above": [], "tags": [], "plot_width": 400, "extra_y_ranges": {}, "title": "Mouse over the dots", "tools": [{"type": "HoverTool", "id": "98d72a50-fc67-4682-a345-771c8dc79f78"}], "x_range": {"type": "DataRange1d", "id": "05ec093a-3b11-4f56-8776-630d8f2595a2"}, "id": "2f63b9f4-937d-4bcb-a118-f8cd57889998"}, "id": "2f63b9f4-937d-4bcb-a118-f8cd57889998", "subtype": "Figure"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "a25da916-5056-45ef-921d-2b1f36c86619"}, "id": "a25da916-5056-45ef-921d-2b1f36c86619"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "a4bb464c-531f-44c4-83c8-4e9cc7da68ff", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "a4bb464c-531f-44c4-83c8-4e9cc7da68ff"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 1.0}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "size": {"units": "screen", "value": 20}, "line_alpha": {"value": 1.0}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "2bc63d89-f3d7-46c3-be00-f7d4937f4d35"}, "id": "2bc63d89-f3d7-46c3-be00-f7d4937f4d35"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "05ec093a-3b11-4f56-8776-630d8f2595a2", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "05ec093a-3b11-4f56-8776-630d8f2595a2"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 0.1}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "size": {"units": "screen", "value": 20}, "line_alpha": {"value": 0.1}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "0128a205-4c62-42ac-a2a9-261acf913abc"}, "id": "0128a205-4c62-42ac-a2a9-261acf913abc"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "a7479a2f-5ba9-406d-bb31-82e073276288", "tags": []}, "id": "a7479a2f-5ba9-406d-bb31-82e073276288"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [2, 5, 8, 2, 7], "x": [1, 2, 3, 4, 5], "desc": ["A", "b", "C", "d", "E"]}, "doc": null, "id": "d4ced7f5-3cbc-4cb5-aea2-b514dab2b564", "column_names": ["y", "x", "desc"]}, "id": "d4ced7f5-3cbc-4cb5-aea2-b514dab2b564"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "ecc9b04d-9321-4d0e-a5f4-69393b1c8d01"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "dcf68d12-6596-4e7f-b5c6-d8b8b43e6b7f"}, "plot": {"type": "Plot", "id": "2f63b9f4-937d-4bcb-a118-f8cd57889998", "subtype": "Figure"}, "id": "1c1e25c0-d8e2-4ae9-8c28-ba24068d4d3b"}, "id": "1c1e25c0-d8e2-4ae9-8c28-ba24068d4d3b"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "ecc9b04d-9321-4d0e-a5f4-69393b1c8d01"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "2f63b9f4-937d-4bcb-a118-f8cd57889998", "subtype": "Figure"}, "dimension": 0, "id": "a0c38de8-67e9-43bb-a6c7-6bf3dba0f702"}, "id": "a0c38de8-67e9-43bb-a6c7-6bf3dba0f702"}, {"type": "HoverTool", "attributes": {"tooltips": "\n        <div>\n            <span style=\"font-size: 17px; font-weight: bold;\">@desc</span>\n            <span style=\"font-size: 15px; color: #966;\">[$index]</span>\n        </div>\n        <div>\n            <span style=\"font-size: 15px;\">Location</span>\n            <span style=\"font-size: 10px; color: #696;\">($x, $y)</span>\n        </div>\n        ", "id": "98d72a50-fc67-4682-a345-771c8dc79f78", "tags": [], "doc": null, "plot": {"type": "Plot", "id": "2f63b9f4-937d-4bcb-a118-f8cd57889998", "subtype": "Figure"}, "renderers": [], "callback": null, "names": []}, "id": "98d72a50-fc67-4682-a345-771c8dc79f78"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("5b3a59d6-aa64-468e-86cb-c8640ecc07d8", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("5b3a59d6-aa64-468e-86cb-c8640ecc07d8", all_models);
    });
  }

}(this));