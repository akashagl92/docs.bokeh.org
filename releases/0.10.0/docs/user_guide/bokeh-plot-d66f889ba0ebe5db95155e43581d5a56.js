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

  var elt = document.getElementById("3c5fc91c-6ca6-4ce8-9e2c-6166d3f5ce49");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '3c5fc91c-6ca6-4ce8-9e2c-6166d3f5ce49' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"geometries": [], "tags": [], "doc": null, "id": "f724a537-2264-4dea-82ee-2f0b17cebb6f"}, "type": "ToolEvents", "id": "f724a537-2264-4dea-82ee-2f0b17cebb6f"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "c89afae4-7360-4f89-b317-492d24325172", "size": {"units": "screen", "value": 20}}, "type": "Circle", "id": "c89afae4-7360-4f89-b317-492d24325172"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "7660db30-5dbe-4daf-9ca2-4943967989cb", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "7660db30-5dbe-4daf-9ca2-4943967989cb"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "fa9e72a3-2987-48af-95c9-c4a9872eaebe", "size": {"units": "screen", "value": 20}}, "type": "Circle", "id": "fa9e72a3-2987-48af-95c9-c4a9872eaebe"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "11086c56-aaee-4285-861f-acb2c6f03d09", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "11086c56-aaee-4285-861f-acb2c6f03d09"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "94788814-d156-43fa-93f1-c05cc4c932ce"}, "type": "DataRange1d", "id": "94788814-d156-43fa-93f1-c05cc4c932ce"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9282df41-8684-4660-b24f-b282dbf7a6d3"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "11086c56-aaee-4285-861f-acb2c6f03d09"}, "id": "86b8c252-e167-4fe4-8304-cfee2ad2d2b3"}, "type": "Grid", "id": "86b8c252-e167-4fe4-8304-cfee2ad2d2b3"}, {"attributes": {"doc": null, "id": "8d4f8509-f81c-4891-ab07-95a9ed2b5402", "tags": []}, "type": "BasicTickFormatter", "id": "8d4f8509-f81c-4891-ab07-95a9ed2b5402"}, {"attributes": {"doc": null, "id": "3f9f2bd6-4079-4864-82d3-dd825f249eee", "tags": []}, "type": "BasicTickFormatter", "id": "3f9f2bd6-4079-4864-82d3-dd825f249eee"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "fa9e72a3-2987-48af-95c9-c4a9872eaebe"}, "data_source": {"type": "ColumnDataSource", "id": "fba8a34a-980f-4264-b81b-36a6f06fdf10"}, "tags": [], "doc": null, "selection_glyph": null, "id": "35682ba3-0ab1-43e2-935a-8245c0f918c4", "glyph": {"type": "Circle", "id": "c89afae4-7360-4f89-b317-492d24325172"}}, "type": "GlyphRenderer", "id": "35682ba3-0ab1-43e2-935a-8245c0f918c4"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "f60e6089-dfa5-4f1b-a308-16b4074a0c97"}, "type": "DataRange1d", "id": "f60e6089-dfa5-4f1b-a308-16b4074a0c97"}, {"attributes": {"column_names": ["imgs", "y", "desc", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"imgs": ["http://bokeh.pydata.org/static/snake.jpg", "http://bokeh.pydata.org/static/snake2.png", "http://bokeh.pydata.org/static/snake3D.png", "http://bokeh.pydata.org/static/snake4_TheRevenge.png", "http://bokeh.pydata.org/static/snakebite.jpg"], "y": [2, 5, 8, 2, 7], "desc": ["A", "b", "C", "d", "E"], "x": [1, 2, 3, 4, 5]}, "id": "fba8a34a-980f-4264-b81b-36a6f06fdf10"}, "type": "ColumnDataSource", "id": "fba8a34a-980f-4264-b81b-36a6f06fdf10"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9282df41-8684-4660-b24f-b282dbf7a6d3"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "8d4f8509-f81c-4891-ab07-95a9ed2b5402"}, "ticker": {"type": "BasicTicker", "id": "11086c56-aaee-4285-861f-acb2c6f03d09"}, "id": "6c239af2-5980-46ea-a008-d5a34801c6d8"}, "type": "LinearAxis", "id": "6c239af2-5980-46ea-a008-d5a34801c6d8"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9282df41-8684-4660-b24f-b282dbf7a6d3"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "3f9f2bd6-4079-4864-82d3-dd825f249eee"}, "ticker": {"type": "BasicTicker", "id": "7660db30-5dbe-4daf-9ca2-4943967989cb"}, "id": "757715a2-58f8-4178-9c79-82bacbbc0d26"}, "type": "LinearAxis", "id": "757715a2-58f8-4178-9c79-82bacbbc0d26"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9282df41-8684-4660-b24f-b282dbf7a6d3"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "7660db30-5dbe-4daf-9ca2-4943967989cb"}, "id": "1ebbf062-91c1-4cb4-818c-abd2505a3a0d"}, "type": "Grid", "id": "1ebbf062-91c1-4cb4-818c-abd2505a3a0d"}, {"subtype": "Figure", "type": "Plot", "id": "9282df41-8684-4660-b24f-b282dbf7a6d3", "attributes": {"x_range": {"type": "DataRange1d", "id": "f60e6089-dfa5-4f1b-a308-16b4074a0c97"}, "right": [], "tags": [], "tools": [{"type": "HoverTool", "id": "0d54cde1-ba58-4ff0-a877-1096860eb95c"}], "title": "Mouse over the dots", "extra_y_ranges": {}, "plot_width": 400, "renderers": [{"type": "LinearAxis", "id": "757715a2-58f8-4178-9c79-82bacbbc0d26"}, {"type": "Grid", "id": "1ebbf062-91c1-4cb4-818c-abd2505a3a0d"}, {"type": "LinearAxis", "id": "6c239af2-5980-46ea-a008-d5a34801c6d8"}, {"type": "Grid", "id": "86b8c252-e167-4fe4-8304-cfee2ad2d2b3"}, {"type": "GlyphRenderer", "id": "35682ba3-0ab1-43e2-935a-8245c0f918c4"}], "extra_x_ranges": {}, "plot_height": 400, "tool_events": {"type": "ToolEvents", "id": "f724a537-2264-4dea-82ee-2f0b17cebb6f"}, "above": [], "doc": null, "id": "9282df41-8684-4660-b24f-b282dbf7a6d3", "y_range": {"type": "DataRange1d", "id": "94788814-d156-43fa-93f1-c05cc4c932ce"}, "below": [{"type": "LinearAxis", "id": "757715a2-58f8-4178-9c79-82bacbbc0d26"}], "left": [{"type": "LinearAxis", "id": "6c239af2-5980-46ea-a008-d5a34801c6d8"}]}}, {"attributes": {"tooltips": "\n        <div>\n            <div>\n                <img\n                    src=\"@imgs\" height=\"42\" alt=\"@imgs\" width=\"42\"\n                    style=\"float: left; margin: 0px 15px 15px 0px;\"\n                    border=\"2\"\n                ></img>\n            </div>\n            <div>\n                <span style=\"font-size: 17px; font-weight: bold;\">@desc</span>\n                <span style=\"font-size: 15px; color: #966;\">[$index]</span>\n            </div>\n            <div>\n                <span style=\"font-size: 15px;\">Location</span>\n                <span style=\"font-size: 10px; color: #696;\">($x, $y)</span>\n            </div>\n        </div>\n        ", "plot": {"subtype": "Figure", "type": "Plot", "id": "9282df41-8684-4660-b24f-b282dbf7a6d3"}, "tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "0d54cde1-ba58-4ff0-a877-1096860eb95c"}, "type": "HoverTool", "id": "0d54cde1-ba58-4ff0-a877-1096860eb95c"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("3c5fc91c-6ca6-4ce8-9e2c-6166d3f5ce49", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("3c5fc91c-6ca6-4ce8-9e2c-6166d3f5ce49", all_models);
    });
  }

}(this));