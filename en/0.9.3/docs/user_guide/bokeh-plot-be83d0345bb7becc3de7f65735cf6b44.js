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

  var elt = document.getElementById("c4b3541a-ece5-4108-b7c2-4b2f4eebfc69");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c4b3541a-ece5-4108-b7c2-4b2f4eebfc69' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "3196d967-25fe-426a-9042-7cee029ea001", "subtype": "Figure"}, "id": "14997c08-d762-44cf-96da-14e12f43e501"}, "id": "14997c08-d762-44cf-96da-14e12f43e501"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [1.2589254117941673, 3.1622776601683795, 10.0, 31.622776601683793, 100.0, 316.22776601683796, 1000.0], "x": [0.1, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0]}, "doc": null, "id": "5ba02d5a-b09d-4bdb-a890-f480c337a0fc", "column_names": ["y", "x"]}, "id": "5ba02d5a-b09d-4bdb-a890-f480c337a0fc"}, {"type": "Plot", "attributes": {"plot_height": 400, "extra_x_ranges": {}, "y_range": {"type": "Range1d", "id": "bba1556e-ef1b-4c1b-8c2c-26b53b03bb6e"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "7c40f574-df6e-40f1-a969-6b63a077ffc8"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "5b4dc79e-c866-46fc-b1a3-8480bead8329"}, {"type": "Grid", "id": "e05c4534-53af-401a-a822-71f8d53c0ef1"}, {"type": "LogAxis", "id": "952c9b36-6db3-40ad-b0f0-8ee6107825d3"}, {"type": "Grid", "id": "c1c9e07f-5bea-48bb-b99a-b2fd6476701f"}, {"type": "GlyphRenderer", "id": "5e849d09-4184-4799-bec6-86d87c1ed2fc"}, {"type": "GlyphRenderer", "id": "58c1798f-58ab-4e4b-a707-1963fb84901b"}], "below": [{"type": "LinearAxis", "id": "5b4dc79e-c866-46fc-b1a3-8480bead8329"}], "left": [{"type": "LogAxis", "id": "952c9b36-6db3-40ad-b0f0-8ee6107825d3"}], "above": [], "id": "3196d967-25fe-426a-9042-7cee029ea001", "tags": [], "plot_width": 400, "extra_y_ranges": {}, "tools": [{"type": "PanTool", "id": "61b02625-a8e5-48c0-85a8-c070b5cd915a"}, {"type": "WheelZoomTool", "id": "14997c08-d762-44cf-96da-14e12f43e501"}, {"type": "BoxZoomTool", "id": "c3d89d76-89ca-4304-8d6e-ee5ebf99eba3"}, {"type": "PreviewSaveTool", "id": "a077fe18-99f7-4e9d-b6a4-2135f5b4b56a"}, {"type": "ResizeTool", "id": "8208eb4a-c654-4a8e-891d-29f938a647ff"}, {"type": "ResetTool", "id": "a20b7000-d5d3-412d-8d79-bb3fd3686f99"}, {"type": "HelpTool", "id": "42bc4637-2f5e-4de2-ad7c-cde9cdaa5b84"}], "x_range": {"type": "DataRange1d", "id": "91c24855-3cb8-46e7-938f-3396cd054c84"}, "y_mapper_type": "log"}, "id": "3196d967-25fe-426a-9042-7cee029ea001", "subtype": "Figure"}, {"type": "Range1d", "attributes": {"callback": null, "id": "bba1556e-ef1b-4c1b-8c2c-26b53b03bb6e", "tags": [], "doc": null, "end": 10000, "start": 0.1}, "id": "bba1556e-ef1b-4c1b-8c2c-26b53b03bb6e"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "e6f87621-9e8a-41e4-b0c2-d107c10b18b5", "tags": []}, "id": "e6f87621-9e8a-41e4-b0c2-d107c10b18b5"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "3196d967-25fe-426a-9042-7cee029ea001", "subtype": "Figure"}, "id": "c3d89d76-89ca-4304-8d6e-ee5ebf99eba3"}, "id": "c3d89d76-89ca-4304-8d6e-ee5ebf99eba3"}, {"type": "Line", "attributes": {"y": {"field": "y"}, "doc": null, "line_width": {"value": 2}, "tags": [], "x": {"field": "x"}, "line_color": {"value": "#1f77b4"}, "id": "d69f9779-2d34-4156-8a30-e6bfe494aa5a", "line_alpha": {"value": 1.0}}, "id": "d69f9779-2d34-4156-8a30-e6bfe494aa5a"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "7c40f574-df6e-40f1-a969-6b63a077ffc8", "tags": [], "geometries": []}, "id": "7c40f574-df6e-40f1-a969-6b63a077ffc8"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "3196d967-25fe-426a-9042-7cee029ea001", "subtype": "Figure"}, "id": "a20b7000-d5d3-412d-8d79-bb3fd3686f99", "tags": [], "doc": null}, "id": "a20b7000-d5d3-412d-8d79-bb3fd3686f99"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 1.0}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "white"}, "size": {"units": "screen", "value": 8}, "line_alpha": {"value": 1.0}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "3121cdd7-840b-4712-aebd-8ed922b80214"}, "id": "3121cdd7-840b-4712-aebd-8ed922b80214"}, {"type": "LogAxis", "attributes": {"doc": null, "ticker": {"type": "LogTicker", "id": "bd7c98b9-180b-457d-b37f-6e451cfebdf4"}, "tags": [], "formatter": {"type": "LogTickFormatter", "id": "0e53a5c3-912d-4ef4-bee8-ec24dd707dd5"}, "plot": {"type": "Plot", "id": "3196d967-25fe-426a-9042-7cee029ea001", "subtype": "Figure"}, "id": "952c9b36-6db3-40ad-b0f0-8ee6107825d3"}, "id": "952c9b36-6db3-40ad-b0f0-8ee6107825d3"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "fefb2070-8138-40f5-8eeb-b9d8b716e381"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "3196d967-25fe-426a-9042-7cee029ea001", "subtype": "Figure"}, "dimension": 0, "id": "e05c4534-53af-401a-a822-71f8d53c0ef1"}, "id": "e05c4534-53af-401a-a822-71f8d53c0ef1"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "93be7704-02b6-43c1-b8f0-41ee74c0ec18"}, "tags": [], "glyph": {"type": "Circle", "id": "3121cdd7-840b-4712-aebd-8ed922b80214"}, "doc": null, "nonselection_glyph": {"type": "Circle", "id": "bac5e8df-bac1-4ba0-9bfd-f7d2c36a9a04"}, "selection_glyph": null, "id": "58c1798f-58ab-4e4b-a707-1963fb84901b"}, "id": "58c1798f-58ab-4e4b-a707-1963fb84901b"}, {"type": "Line", "attributes": {"y": {"field": "y"}, "doc": null, "line_width": {"value": 2}, "tags": [], "x": {"field": "x"}, "line_color": {"value": "#1f77b4"}, "id": "d43395cc-a446-4101-a373-e4bb4df81680", "line_alpha": {"value": 0.1}}, "id": "d43395cc-a446-4101-a373-e4bb4df81680"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "fefb2070-8138-40f5-8eeb-b9d8b716e381"}, "id": "fefb2070-8138-40f5-8eeb-b9d8b716e381"}, {"type": "LogTickFormatter", "attributes": {"tags": [], "doc": null, "id": "0e53a5c3-912d-4ef4-bee8-ec24dd707dd5", "ticker": {"type": "LogTicker", "id": "bd7c98b9-180b-457d-b37f-6e451cfebdf4"}}, "id": "0e53a5c3-912d-4ef4-bee8-ec24dd707dd5"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "3196d967-25fe-426a-9042-7cee029ea001", "subtype": "Figure"}, "id": "8208eb4a-c654-4a8e-891d-29f938a647ff", "tags": [], "doc": null}, "id": "8208eb4a-c654-4a8e-891d-29f938a647ff"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "91c24855-3cb8-46e7-938f-3396cd054c84", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "91c24855-3cb8-46e7-938f-3396cd054c84"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "3196d967-25fe-426a-9042-7cee029ea001", "subtype": "Figure"}, "id": "a077fe18-99f7-4e9d-b6a4-2135f5b4b56a", "tags": [], "doc": null}, "id": "a077fe18-99f7-4e9d-b6a4-2135f5b4b56a"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "5ba02d5a-b09d-4bdb-a890-f480c337a0fc"}, "tags": [], "glyph": {"type": "Line", "id": "d69f9779-2d34-4156-8a30-e6bfe494aa5a"}, "doc": null, "nonselection_glyph": {"type": "Line", "id": "d43395cc-a446-4101-a373-e4bb4df81680"}, "selection_glyph": null, "id": "5e849d09-4184-4799-bec6-86d87c1ed2fc"}, "id": "5e849d09-4184-4799-bec6-86d87c1ed2fc"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 0.1}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "size": {"units": "screen", "value": 8}, "line_alpha": {"value": 0.1}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "bac5e8df-bac1-4ba0-9bfd-f7d2c36a9a04"}, "id": "bac5e8df-bac1-4ba0-9bfd-f7d2c36a9a04"}, {"type": "Grid", "attributes": {"ticker": {"type": "LogTicker", "id": "bd7c98b9-180b-457d-b37f-6e451cfebdf4"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "3196d967-25fe-426a-9042-7cee029ea001", "subtype": "Figure"}, "dimension": 1, "id": "c1c9e07f-5bea-48bb-b99a-b2fd6476701f"}, "id": "c1c9e07f-5bea-48bb-b99a-b2fd6476701f"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [1.2589254117941673, 3.1622776601683795, 10.0, 31.622776601683793, 100.0, 316.22776601683796, 1000.0], "x": [0.1, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0]}, "doc": null, "id": "93be7704-02b6-43c1-b8f0-41ee74c0ec18", "column_names": ["y", "x"]}, "id": "93be7704-02b6-43c1-b8f0-41ee74c0ec18"}, {"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "3196d967-25fe-426a-9042-7cee029ea001", "subtype": "Figure"}, "id": "61b02625-a8e5-48c0-85a8-c070b5cd915a"}, "id": "61b02625-a8e5-48c0-85a8-c070b5cd915a"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "fefb2070-8138-40f5-8eeb-b9d8b716e381"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "e6f87621-9e8a-41e4-b0c2-d107c10b18b5"}, "plot": {"type": "Plot", "id": "3196d967-25fe-426a-9042-7cee029ea001", "subtype": "Figure"}, "id": "5b4dc79e-c866-46fc-b1a3-8480bead8329"}, "id": "5b4dc79e-c866-46fc-b1a3-8480bead8329"}, {"type": "HelpTool", "attributes": {"plot": {"type": "Plot", "id": "3196d967-25fe-426a-9042-7cee029ea001", "subtype": "Figure"}, "id": "42bc4637-2f5e-4de2-ad7c-cde9cdaa5b84", "tags": [], "doc": null}, "id": "42bc4637-2f5e-4de2-ad7c-cde9cdaa5b84"}, {"type": "LogTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 10, "mantissas": [2, 5, 10], "id": "bd7c98b9-180b-457d-b37f-6e451cfebdf4"}, "id": "bd7c98b9-180b-457d-b37f-6e451cfebdf4"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("c4b3541a-ece5-4108-b7c2-4b2f4eebfc69", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("c4b3541a-ece5-4108-b7c2-4b2f4eebfc69", all_models);
    });
  }

}(this));