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

  var elt = document.getElementById("0e5749a8-9455-481a-bc44-be3fc944f1a0");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '0e5749a8-9455-481a-bc44-be3fc944f1a0' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "07bed500-9098-4edb-ab2a-8decf9bfe206"}, "id": "07bed500-9098-4edb-ab2a-8decf9bfe206"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "039c552c-2ac4-4c96-a507-6a38a3c935b8"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "31c8e61e-a3db-4ca8-9c65-fedd82928fde"}, "plot": {"type": "Plot", "id": "2a786f20-2247-4908-9a59-1bbe22067e26", "subtype": "Figure"}, "id": "cc587640-c343-41ba-839b-c84cf162b515"}, "id": "cc587640-c343-41ba-839b-c84cf162b515"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "e72b4e9c-5285-4571-9133-a5bbff831fd3", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "e72b4e9c-5285-4571-9133-a5bbff831fd3"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "2a786f20-2247-4908-9a59-1bbe22067e26", "subtype": "Figure"}, "id": "a602d7d1-e9eb-484e-9a2b-a05b5a825f10", "tags": [], "doc": null}, "id": "a602d7d1-e9eb-484e-9a2b-a05b5a825f10"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "2a786f20-2247-4908-9a59-1bbe22067e26", "subtype": "Figure"}, "id": "270a81e6-d7ab-41b2-a0e6-6038cafcd3e7", "tags": [], "doc": null}, "id": "270a81e6-d7ab-41b2-a0e6-6038cafcd3e7"}, {"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "2a786f20-2247-4908-9a59-1bbe22067e26", "subtype": "Figure"}, "id": "8ed6dd8d-7b13-40bc-bf7a-668d498e154a"}, "id": "8ed6dd8d-7b13-40bc-bf7a-668d498e154a"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "2a786f20-2247-4908-9a59-1bbe22067e26", "subtype": "Figure"}, "id": "c0d4841b-fbbe-401e-a479-6743fe409c66", "tags": [], "doc": null}, "id": "c0d4841b-fbbe-401e-a479-6743fe409c66"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [1, 2, 3], "x": [1, 2, 3]}, "doc": null, "id": "27a5c1e6-9a88-4fed-a6ab-14f2e58c8d8a", "column_names": ["y", "x"]}, "id": "27a5c1e6-9a88-4fed-a6ab-14f2e58c8d8a"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "31c8e61e-a3db-4ca8-9c65-fedd82928fde", "tags": []}, "id": "31c8e61e-a3db-4ca8-9c65-fedd82928fde"}, {"type": "HelpTool", "attributes": {"plot": {"type": "Plot", "id": "2a786f20-2247-4908-9a59-1bbe22067e26", "subtype": "Figure"}, "id": "0d070219-847f-4ba5-ad4f-a7311b947157", "tags": [], "doc": null}, "id": "0d070219-847f-4ba5-ad4f-a7311b947157"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "12a813a0-66fd-4eda-ab61-5a2ff703493f", "tags": [], "geometries": []}, "id": "12a813a0-66fd-4eda-ab61-5a2ff703493f"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "69a2779c-90c0-4776-a76f-33cd638bfdce", "tags": []}, "id": "69a2779c-90c0-4776-a76f-33cd638bfdce"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "07bed500-9098-4edb-ab2a-8decf9bfe206"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "2a786f20-2247-4908-9a59-1bbe22067e26", "subtype": "Figure"}, "dimension": 0, "id": "69e2a3ea-2310-4834-a48f-6eebba7b5129"}, "id": "69e2a3ea-2310-4834-a48f-6eebba7b5129"}, {"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "2a786f20-2247-4908-9a59-1bbe22067e26", "subtype": "Figure"}, "id": "1d28656e-95cb-43d6-89ba-1ef56d7e6f34"}, "id": "1d28656e-95cb-43d6-89ba-1ef56d7e6f34"}, {"type": "Rect", "attributes": {"angle": {"units": "rad", "value": 1.0471975511965976}, "fill_alpha": {"value": 1.0}, "fill_color": {"value": "#CAB2D6"}, "x": {"field": "x"}, "tags": [], "y": {"field": "y"}, "height": {"units": "screen", "value": 40}, "width": {"units": "data", "value": 0.2}, "line_alpha": {"value": 1.0}, "line_color": {"value": "#CAB2D6"}, "height_units": "screen", "doc": null, "id": "0dbeb1c1-2ded-40e2-8ece-c22ef60960e3"}, "id": "0dbeb1c1-2ded-40e2-8ece-c22ef60960e3"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "606e7444-7749-4d1d-b6f5-0ff7f3895cb1", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "606e7444-7749-4d1d-b6f5-0ff7f3895cb1"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "07bed500-9098-4edb-ab2a-8decf9bfe206"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "69a2779c-90c0-4776-a76f-33cd638bfdce"}, "plot": {"type": "Plot", "id": "2a786f20-2247-4908-9a59-1bbe22067e26", "subtype": "Figure"}, "id": "cb5fdb36-6bb9-4ce3-83e3-b481c5bf2701"}, "id": "cb5fdb36-6bb9-4ce3-83e3-b481c5bf2701"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "27a5c1e6-9a88-4fed-a6ab-14f2e58c8d8a"}, "tags": [], "glyph": {"type": "Rect", "id": "0dbeb1c1-2ded-40e2-8ece-c22ef60960e3"}, "doc": null, "nonselection_glyph": {"type": "Rect", "id": "b2ad3a9c-ae3b-4c20-9130-00a5e3bcdec5"}, "selection_glyph": null, "id": "f927b7b2-d200-42a4-99e7-bfc17abb5d5e"}, "id": "f927b7b2-d200-42a4-99e7-bfc17abb5d5e"}, {"type": "Plot", "attributes": {"plot_height": 400, "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "e72b4e9c-5285-4571-9133-a5bbff831fd3"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "12a813a0-66fd-4eda-ab61-5a2ff703493f"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "cb5fdb36-6bb9-4ce3-83e3-b481c5bf2701"}, {"type": "Grid", "id": "69e2a3ea-2310-4834-a48f-6eebba7b5129"}, {"type": "LinearAxis", "id": "cc587640-c343-41ba-839b-c84cf162b515"}, {"type": "Grid", "id": "c955e402-7988-48dd-8ed7-b01cf076ee2b"}, {"type": "GlyphRenderer", "id": "f927b7b2-d200-42a4-99e7-bfc17abb5d5e"}], "below": [{"type": "LinearAxis", "id": "cb5fdb36-6bb9-4ce3-83e3-b481c5bf2701"}], "left": [{"type": "LinearAxis", "id": "cc587640-c343-41ba-839b-c84cf162b515"}], "above": [], "tags": [], "plot_width": 400, "extra_y_ranges": {}, "tools": [{"type": "PanTool", "id": "8ed6dd8d-7b13-40bc-bf7a-668d498e154a"}, {"type": "WheelZoomTool", "id": "1d28656e-95cb-43d6-89ba-1ef56d7e6f34"}, {"type": "BoxZoomTool", "id": "8708b685-1428-4ee6-ac2d-1f91a41f10e8"}, {"type": "PreviewSaveTool", "id": "270a81e6-d7ab-41b2-a0e6-6038cafcd3e7"}, {"type": "ResizeTool", "id": "c0d4841b-fbbe-401e-a479-6743fe409c66"}, {"type": "ResetTool", "id": "a602d7d1-e9eb-484e-9a2b-a05b5a825f10"}, {"type": "HelpTool", "id": "0d070219-847f-4ba5-ad4f-a7311b947157"}], "x_range": {"type": "DataRange1d", "id": "606e7444-7749-4d1d-b6f5-0ff7f3895cb1"}, "id": "2a786f20-2247-4908-9a59-1bbe22067e26"}, "id": "2a786f20-2247-4908-9a59-1bbe22067e26", "subtype": "Figure"}, {"type": "Rect", "attributes": {"angle": {"units": "rad", "value": 1.0471975511965976}, "fill_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "tags": [], "y": {"field": "y"}, "height": {"units": "screen", "value": 40}, "width": {"units": "data", "value": 0.2}, "line_alpha": {"value": 0.1}, "line_color": {"value": "#1f77b4"}, "height_units": "screen", "doc": null, "id": "b2ad3a9c-ae3b-4c20-9130-00a5e3bcdec5"}, "id": "b2ad3a9c-ae3b-4c20-9130-00a5e3bcdec5"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "039c552c-2ac4-4c96-a507-6a38a3c935b8"}, "id": "039c552c-2ac4-4c96-a507-6a38a3c935b8"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "039c552c-2ac4-4c96-a507-6a38a3c935b8"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "2a786f20-2247-4908-9a59-1bbe22067e26", "subtype": "Figure"}, "dimension": 1, "id": "c955e402-7988-48dd-8ed7-b01cf076ee2b"}, "id": "c955e402-7988-48dd-8ed7-b01cf076ee2b"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "2a786f20-2247-4908-9a59-1bbe22067e26", "subtype": "Figure"}, "id": "8708b685-1428-4ee6-ac2d-1f91a41f10e8"}, "id": "8708b685-1428-4ee6-ac2d-1f91a41f10e8"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("0e5749a8-9455-481a-bc44-be3fc944f1a0", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("0e5749a8-9455-481a-bc44-be3fc944f1a0", all_models);
    });
  }

}(this));