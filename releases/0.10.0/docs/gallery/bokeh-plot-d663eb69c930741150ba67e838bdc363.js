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

  var elt = document.getElementById("5efad9da-8d5a-4007-bc95-5848a1a27098");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '5efad9da-8d5a-4007-bc95-5848a1a27098' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"geometries": [], "tags": [], "doc": null, "id": "c7e9ef78-e8e5-46a3-9f12-8bb4db480c86"}, "type": "ToolEvents", "id": "c7e9ef78-e8e5-46a3-9f12-8bb4db480c86"}, {"attributes": {"nonselection_glyph": {"type": "Rect", "id": "c445c6c4-90af-45d4-8a3f-c2a008193aed"}, "data_source": {"type": "ColumnDataSource", "id": "7efedcbb-a277-4548-9f78-a6a871bd1d20"}, "tags": [], "doc": null, "selection_glyph": null, "id": "599a3372-247b-48c2-afc2-ba7af4cec487", "glyph": {"type": "Rect", "id": "112f2358-945a-4f91-b518-3fa905912aa5"}}, "type": "GlyphRenderer", "id": "599a3372-247b-48c2-afc2-ba7af4cec487"}, {"attributes": {"callback": null, "factors": ["foo", "bar", "baz"], "doc": null, "tags": [], "id": "684bf673-2318-464d-86c1-738c8db9d92a"}, "type": "FactorRange", "id": "684bf673-2318-464d-86c1-738c8db9d92a"}, {"attributes": {"doc": null, "id": "6cca16f9-f1b5-4312-a63f-ed4cc68fc7bc", "tags": []}, "type": "CategoricalTickFormatter", "id": "6cca16f9-f1b5-4312-a63f-ed4cc68fc7bc"}, {"attributes": {"callback": null, "factors": ["foo", "bar", "baz"], "doc": null, "tags": [], "id": "34f1232d-2f19-4d70-ae8b-ce55c4acc0bf"}, "type": "FactorRange", "id": "34f1232d-2f19-4d70-ae8b-ce55c4acc0bf"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "f65efb81-ab4e-49c9-89b6-49efee4eec78"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "CategoricalTicker", "id": "4d4c094a-0557-42f4-bd7b-ed028f517432"}, "id": "013d02ed-063e-40cd-b276-d7de2c43d6eb"}, "type": "Grid", "id": "013d02ed-063e-40cd-b276-d7de2c43d6eb"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "f65efb81-ab4e-49c9-89b6-49efee4eec78"}, "tags": [], "doc": null, "formatter": {"type": "CategoricalTickFormatter", "id": "58f73b65-e87d-4d8f-90cc-3fda51b222f2"}, "ticker": {"type": "CategoricalTicker", "id": "7011cfb9-41a0-400b-8326-b2d3cc50d33e"}, "id": "0c4c27be-8de3-4f38-bc1b-5198d71b401e"}, "type": "CategoricalAxis", "id": "0c4c27be-8de3-4f38-bc1b-5198d71b401e"}, {"attributes": {"tags": [], "doc": null, "id": "7011cfb9-41a0-400b-8326-b2d3cc50d33e", "num_minor_ticks": 5}, "type": "CategoricalTicker", "id": "7011cfb9-41a0-400b-8326-b2d3cc50d33e"}, {"attributes": {"doc": null, "id": "58f73b65-e87d-4d8f-90cc-3fda51b222f2", "tags": []}, "type": "CategoricalTickFormatter", "id": "58f73b65-e87d-4d8f-90cc-3fda51b222f2"}, {"attributes": {"doc": null, "id": "86c8a088-3628-4989-9bfe-39952917178f", "tags": []}, "type": "BasicTickFormatter", "id": "86c8a088-3628-4989-9bfe-39952917178f"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "f65efb81-ab4e-49c9-89b6-49efee4eec78"}, "tags": [], "doc": null, "formatter": {"type": "CategoricalTickFormatter", "id": "527e2996-e070-49a4-8934-35385bb92831"}, "ticker": {"type": "CategoricalTicker", "id": "4d4c094a-0557-42f4-bd7b-ed028f517432"}, "id": "e188bbd1-60f4-479c-bfff-a5c237d19e60"}, "type": "CategoricalAxis", "id": "e188bbd1-60f4-479c-bfff-a5c237d19e60"}, {"attributes": {"callback": null, "factors": ["a", "b", "c", "d", "e", "f", "g", "h"], "doc": null, "tags": [], "id": "a44382a4-1ddf-4495-afd1-04bca73ff122"}, "type": "FactorRange", "id": "a44382a4-1ddf-4495-afd1-04bca73ff122"}, {"attributes": {"doc": null, "id": "527e2996-e070-49a4-8934-35385bb92831", "tags": []}, "type": "CategoricalTickFormatter", "id": "527e2996-e070-49a4-8934-35385bb92831"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "8d6eb69f-60fb-400b-aef1-294e187555c6", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "8d6eb69f-60fb-400b-aef1-294e187555c6"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "119f66dc-c91b-4e4f-85e9-b9db82aac807"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "86c8a088-3628-4989-9bfe-39952917178f"}, "ticker": {"type": "BasicTicker", "id": "8d6eb69f-60fb-400b-aef1-294e187555c6"}, "id": "21952d87-af4a-4edf-b6e1-47284883a2c2"}, "type": "LinearAxis", "id": "21952d87-af4a-4edf-b6e1-47284883a2c2"}, {"attributes": {"line_color": {"field": "line_color"}, "line_alpha": {"value": 1.0}, "fill_color": {"field": "fill_color"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "height": {"units": "data", "value": 1}, "width": {"units": "data", "value": 1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "112f2358-945a-4f91-b518-3fa905912aa5"}, "type": "Rect", "id": "112f2358-945a-4f91-b518-3fa905912aa5"}, {"attributes": {"end": 100, "callback": null, "doc": null, "tags": [], "start": 0, "id": "0b59a519-95b9-41b9-b510-d208310d4298"}, "type": "Range1d", "id": "0b59a519-95b9-41b9-b510-d208310d4298"}, {"attributes": {"tags": [], "doc": null, "id": "52d714ab-4ce5-43c3-8504-dfb18de22697", "children": [{"subtype": "Figure", "type": "Plot", "id": "119f66dc-c91b-4e4f-85e9-b9db82aac807"}, {"subtype": "Figure", "type": "Plot", "id": "f65efb81-ab4e-49c9-89b6-49efee4eec78"}]}, "type": "VBox", "id": "52d714ab-4ce5-43c3-8504-dfb18de22697"}, {"attributes": {"tooltips": [["index", "$index"], ["data (x, y)", "($x, $y)"], ["canvas (x, y)", "($sx, $sy)"]], "plot": {"subtype": "Figure", "type": "Plot", "id": "f65efb81-ab4e-49c9-89b6-49efee4eec78"}, "tags": [], "doc": null, "renderers": [], "id": "91f18909-6157-44dc-b428-a472ce8e2af5", "callback": null, "names": [], "always_active": true}, "type": "HoverTool", "id": "91f18909-6157-44dc-b428-a472ce8e2af5"}, {"attributes": {"tags": [], "doc": null, "id": "4d4c094a-0557-42f4-bd7b-ed028f517432", "num_minor_ticks": 5}, "type": "CategoricalTicker", "id": "4d4c094a-0557-42f4-bd7b-ed028f517432"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "f65efb81-ab4e-49c9-89b6-49efee4eec78"}, "tags": [], "doc": null, "id": "d6bf2102-301d-43c6-b310-77f0b049ee6c"}, "type": "PreviewSaveTool", "id": "d6bf2102-301d-43c6-b310-77f0b049ee6c"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "f65efb81-ab4e-49c9-89b6-49efee4eec78"}, "tags": [], "doc": null, "id": "3946c39e-8f50-4a70-ac9d-7f82c850219c"}, "type": "ResizeTool", "id": "3946c39e-8f50-4a70-ac9d-7f82c850219c"}, {"attributes": {"column_names": ["y", "x", "line_color", "fill_color"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": ["foo", "bar", "baz", "foo", "bar", "baz", "foo", "bar", "baz"], "x": ["foo", "foo", "foo", "bar", "bar", "bar", "baz", "baz", "baz"], "fill_color": ["#0B486B", "#79BD9A", "#CFF09E", "#79BD9A", "#0B486B", "#79BD9A", "#CFF09E", "#79BD9A", "#0B486B"], "line_color": ["#0B486B", "#79BD9A", "#CFF09E", "#79BD9A", "#0B486B", "#79BD9A", "#CFF09E", "#79BD9A", "#0B486B"]}, "id": "7efedcbb-a277-4548-9f78-a6a871bd1d20"}, "type": "ColumnDataSource", "id": "7efedcbb-a277-4548-9f78-a6a871bd1d20"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "height": {"units": "data", "value": 1}, "width": {"units": "data", "value": 1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "c445c6c4-90af-45d4-8a3f-c2a008193aed"}, "type": "Rect", "id": "c445c6c4-90af-45d4-8a3f-c2a008193aed"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "fd5505c0-9fbd-4942-b750-1fa881ed74e7"}, "type": "ToolEvents", "id": "fd5505c0-9fbd-4942-b750-1fa881ed74e7"}, {"subtype": "Figure", "type": "Plot", "id": "119f66dc-c91b-4e4f-85e9-b9db82aac807", "attributes": {"x_range": {"type": "Range1d", "id": "0b59a519-95b9-41b9-b510-d208310d4298"}, "right": [], "tags": [], "tools": [{"type": "ResizeTool", "id": "117c559b-af74-44ce-aa88-c5c683b5bde7"}, {"type": "PreviewSaveTool", "id": "b6bba131-5974-4ddb-b849-8430530c3c69"}], "title": "Dot Plot", "extra_y_ranges": {}, "renderers": [{"type": "LinearAxis", "id": "21952d87-af4a-4edf-b6e1-47284883a2c2"}, {"type": "Grid", "id": "5139e249-3891-4e4d-a50f-e254cba1e22f"}, {"type": "CategoricalAxis", "id": "ee90543f-3506-4832-91d3-b2a26e181fe1"}, {"type": "Grid", "id": "7d1ecece-ee7e-49b1-a9cf-95ef3230f210"}, {"type": "GlyphRenderer", "id": "a8670244-b5ca-47dc-99a8-be902fdf45d6"}, {"type": "GlyphRenderer", "id": "171829d6-4170-4cec-8428-404dfe0c2b7a"}], "extra_x_ranges": {}, "below": [{"type": "LinearAxis", "id": "21952d87-af4a-4edf-b6e1-47284883a2c2"}], "tool_events": {"type": "ToolEvents", "id": "fd5505c0-9fbd-4942-b750-1fa881ed74e7"}, "above": [], "doc": null, "y_range": {"type": "FactorRange", "id": "a44382a4-1ddf-4495-afd1-04bca73ff122"}, "id": "119f66dc-c91b-4e4f-85e9-b9db82aac807", "left": [{"type": "CategoricalAxis", "id": "ee90543f-3506-4832-91d3-b2a26e181fe1"}]}}, {"attributes": {"tags": [], "doc": null, "id": "e656a423-6662-4450-af1d-b52b1fc7a571", "num_minor_ticks": 5}, "type": "CategoricalTicker", "id": "e656a423-6662-4450-af1d-b52b1fc7a571"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "119f66dc-c91b-4e4f-85e9-b9db82aac807"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "CategoricalTicker", "id": "e656a423-6662-4450-af1d-b52b1fc7a571"}, "id": "7d1ecece-ee7e-49b1-a9cf-95ef3230f210"}, "type": "Grid", "id": "7d1ecece-ee7e-49b1-a9cf-95ef3230f210"}, {"attributes": {"line_color": {"value": "green"}, "line_width": {"value": 2}, "line_alpha": {"value": 1.0}, "doc": null, "tags": [], "y1": {"field": "y1"}, "y0": {"field": "y0"}, "x0": {"field": "x0"}, "x1": {"field": "x1"}, "id": "d45ac954-282e-47f0-b183-73b5016ddfaf"}, "type": "Segment", "id": "d45ac954-282e-47f0-b183-73b5016ddfaf"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "119f66dc-c91b-4e4f-85e9-b9db82aac807"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "8d6eb69f-60fb-400b-aef1-294e187555c6"}, "id": "5139e249-3891-4e4d-a50f-e254cba1e22f"}, "type": "Grid", "id": "5139e249-3891-4e4d-a50f-e254cba1e22f"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "119f66dc-c91b-4e4f-85e9-b9db82aac807"}, "tags": [], "doc": null, "id": "117c559b-af74-44ce-aa88-c5c683b5bde7"}, "type": "ResizeTool", "id": "117c559b-af74-44ce-aa88-c5c683b5bde7"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "119f66dc-c91b-4e4f-85e9-b9db82aac807"}, "tags": [], "doc": null, "id": "b6bba131-5974-4ddb-b849-8430530c3c69"}, "type": "PreviewSaveTool", "id": "b6bba131-5974-4ddb-b849-8430530c3c69"}, {"attributes": {"column_names": ["y1", "y0", "x0", "x1"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y1": ["a", "b", "c", "d", "e", "f", "g", "h"], "y0": ["a", "b", "c", "d", "e", "f", "g", "h"], "x0": [0, 0, 0, 0, 0, 0, 0, 0], "x1": [50, 40, 65, 10, 25, 37, 80, 60]}, "id": "0fe061d1-0efb-4b5e-9101-e1679d63732a"}, "type": "ColumnDataSource", "id": "0fe061d1-0efb-4b5e-9101-e1679d63732a"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "line_alpha": {"value": 0.1}, "doc": null, "tags": [], "y1": {"field": "y1"}, "y0": {"field": "y0"}, "x0": {"field": "x0"}, "x1": {"field": "x1"}, "id": "157a912b-e7b7-41a7-b5cd-a60407e2b056"}, "type": "Segment", "id": "157a912b-e7b7-41a7-b5cd-a60407e2b056"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "f65efb81-ab4e-49c9-89b6-49efee4eec78"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "CategoricalTicker", "id": "7011cfb9-41a0-400b-8326-b2d3cc50d33e"}, "id": "b062658e-897d-47ea-a4fd-12de07de0ae8"}, "type": "Grid", "id": "b062658e-897d-47ea-a4fd-12de07de0ae8"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "119f66dc-c91b-4e4f-85e9-b9db82aac807"}, "tags": [], "doc": null, "formatter": {"type": "CategoricalTickFormatter", "id": "6cca16f9-f1b5-4312-a63f-ed4cc68fc7bc"}, "ticker": {"type": "CategoricalTicker", "id": "e656a423-6662-4450-af1d-b52b1fc7a571"}, "id": "ee90543f-3506-4832-91d3-b2a26e181fe1"}, "type": "CategoricalAxis", "id": "ee90543f-3506-4832-91d3-b2a26e181fe1"}, {"attributes": {"nonselection_glyph": {"type": "Segment", "id": "157a912b-e7b7-41a7-b5cd-a60407e2b056"}, "data_source": {"type": "ColumnDataSource", "id": "0fe061d1-0efb-4b5e-9101-e1679d63732a"}, "tags": [], "doc": null, "selection_glyph": null, "id": "a8670244-b5ca-47dc-99a8-be902fdf45d6", "glyph": {"type": "Segment", "id": "d45ac954-282e-47f0-b183-73b5016ddfaf"}}, "type": "GlyphRenderer", "id": "a8670244-b5ca-47dc-99a8-be902fdf45d6"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": ["a", "b", "c", "d", "e", "f", "g", "h"], "x": [50, 40, 65, 10, 25, 37, 80, 60]}, "id": "dcdb9db6-c8b2-43b2-89ab-9b6de9b3577d"}, "type": "ColumnDataSource", "id": "dcdb9db6-c8b2-43b2-89ab-9b6de9b3577d"}, {"attributes": {"line_color": {"value": "green"}, "line_width": {"value": 3}, "fill_color": {"value": "orange"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "line_alpha": {"value": 1.0}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "617c42ae-d628-46b3-9452-20a7008e1cc2", "size": {"units": "screen", "value": 15}}, "type": "Circle", "id": "617c42ae-d628-46b3-9452-20a7008e1cc2"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 3}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "line_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "d031c751-8d88-4d85-ae72-ab8530ff3aff", "size": {"units": "screen", "value": 15}}, "type": "Circle", "id": "d031c751-8d88-4d85-ae72-ab8530ff3aff"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "d031c751-8d88-4d85-ae72-ab8530ff3aff"}, "data_source": {"type": "ColumnDataSource", "id": "dcdb9db6-c8b2-43b2-89ab-9b6de9b3577d"}, "tags": [], "doc": null, "selection_glyph": null, "id": "171829d6-4170-4cec-8428-404dfe0c2b7a", "glyph": {"type": "Circle", "id": "617c42ae-d628-46b3-9452-20a7008e1cc2"}}, "type": "GlyphRenderer", "id": "171829d6-4170-4cec-8428-404dfe0c2b7a"}, {"subtype": "Figure", "type": "Plot", "id": "f65efb81-ab4e-49c9-89b6-49efee4eec78", "attributes": {"x_range": {"type": "FactorRange", "id": "684bf673-2318-464d-86c1-738c8db9d92a"}, "right": [], "tags": [], "tools": [{"type": "ResizeTool", "id": "3946c39e-8f50-4a70-ac9d-7f82c850219c"}, {"type": "HoverTool", "id": "91f18909-6157-44dc-b428-a472ce8e2af5"}, {"type": "PreviewSaveTool", "id": "d6bf2102-301d-43c6-b310-77f0b049ee6c"}], "title": "Categorical Heatmap", "extra_y_ranges": {}, "renderers": [{"type": "CategoricalAxis", "id": "0c4c27be-8de3-4f38-bc1b-5198d71b401e"}, {"type": "Grid", "id": "b062658e-897d-47ea-a4fd-12de07de0ae8"}, {"type": "CategoricalAxis", "id": "e188bbd1-60f4-479c-bfff-a5c237d19e60"}, {"type": "Grid", "id": "013d02ed-063e-40cd-b276-d7de2c43d6eb"}, {"type": "GlyphRenderer", "id": "599a3372-247b-48c2-afc2-ba7af4cec487"}], "extra_x_ranges": {}, "below": [{"type": "CategoricalAxis", "id": "0c4c27be-8de3-4f38-bc1b-5198d71b401e"}], "tool_events": {"type": "ToolEvents", "id": "c7e9ef78-e8e5-46a3-9f12-8bb4db480c86"}, "above": [], "doc": null, "y_range": {"type": "FactorRange", "id": "34f1232d-2f19-4d70-ae8b-ce55c4acc0bf"}, "id": "f65efb81-ab4e-49c9-89b6-49efee4eec78", "left": [{"type": "CategoricalAxis", "id": "e188bbd1-60f4-479c-bfff-a5c237d19e60"}]}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("5efad9da-8d5a-4007-bc95-5848a1a27098", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("5efad9da-8d5a-4007-bc95-5848a1a27098", all_models);
    });
  }

}(this));