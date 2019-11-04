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

  var elt = document.getElementById("cd1bf0e6-4caa-4003-bfe2-8f4465607fdc");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'cd1bf0e6-4caa-4003-bfe2-8f4465607fdc' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "6dada37d-e6ac-4118-bbae-ab1953ceedb8"}, "tags": [], "doc": null, "selection_glyph": null, "id": "6271ea9f-57ca-45e5-8725-db09e1fb0225", "glyph": {"type": "Segment", "id": "f11de5b4-77e0-42b2-b98e-412d21a56398"}}, "type": "GlyphRenderer", "id": "6271ea9f-57ca-45e5-8725-db09e1fb0225"}, {"attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "tags": [], "doc": null, "y1": {"field": "seg_top_pypy"}, "y0": {"field": "z_pypy"}, "x0": {"field": "catpypy"}, "x1": {"field": "catpypy"}, "id": "4e02ade9-f5ed-48b2-90e2-abdf7580d4a7"}, "type": "Segment", "id": "4e02ade9-f5ed-48b2-90e2-abdf7580d4a7"}, {"attributes": {"line_color": {"value": "black"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "#f22c40"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "y": {"field": "jython"}, "x": {"field": "catjython"}, "id": "876e7f34-615b-4d9a-a25c-ce5826d2bb0d", "size": {"units": "screen", "value": 15}}, "type": "Circle", "id": "876e7f34-615b-4d9a-a25c-ce5826d2bb0d"}, {"attributes": {"doc": null, "id": "826cccff-4052-4792-91e1-b0ba51d95655", "tags": []}, "type": "CategoricalTicker", "id": "826cccff-4052-4792-91e1-b0ba51d95655"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "6dada37d-e6ac-4118-bbae-ab1953ceedb8"}, "tags": [], "doc": null, "selection_glyph": null, "id": "b0081169-abad-4ff5-a1e8-ca7e1b894906", "glyph": {"type": "Segment", "id": "4e02ade9-f5ed-48b2-90e2-abdf7580d4a7"}}, "type": "GlyphRenderer", "id": "b0081169-abad-4ff5-a1e8-ca7e1b894906"}, {"attributes": {"line_color": {"value": "black"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "#5ab738"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "y": {"field": "pypy"}, "x": {"field": "catpypy"}, "id": "6e8b165a-276d-491c-a4df-5bebce75479f", "size": {"units": "screen", "value": 15}}, "type": "Circle", "id": "6e8b165a-276d-491c-a4df-5bebce75479f"}, {"attributes": {"plot": {"subtype": "LegacyChart", "type": "Plot", "id": "4cc91af6-1181-4817-93b2-94c809437d5e"}, "tags": [], "doc": null, "major_label_orientation": 0.7853981633974483, "axis_label": null, "formatter": {"type": "CategoricalTickFormatter", "id": "3c3dabe0-214a-4f85-b3cc-c40bde9394c2"}, "ticker": {"type": "CategoricalTicker", "id": "826cccff-4052-4792-91e1-b0ba51d95655"}, "id": "3bc7ea32-3271-404f-9913-5c3002ff19c1"}, "type": "CategoricalAxis", "id": "3bc7ea32-3271-404f-9913-5c3002ff19c1"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "6dada37d-e6ac-4118-bbae-ab1953ceedb8"}, "tags": [], "doc": null, "selection_glyph": null, "id": "10cac245-f634-4329-8acc-c71b3d7bca07", "glyph": {"type": "Circle", "id": "6e8b165a-276d-491c-a4df-5bebce75479f"}}, "type": "GlyphRenderer", "id": "10cac245-f634-4329-8acc-c71b3d7bca07"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "14a4b9a5-33b3-46f1-b839-32ece1581b21"}, "type": "ToolEvents", "id": "14a4b9a5-33b3-46f1-b839-32ece1581b21"}, {"attributes": {"doc": null, "id": "3c3dabe0-214a-4f85-b3cc-c40bde9394c2", "tags": []}, "type": "CategoricalTickFormatter", "id": "3c3dabe0-214a-4f85-b3cc-c40bde9394c2"}, {"attributes": {"plot": {"subtype": "LegacyChart", "type": "Plot", "id": "4cc91af6-1181-4817-93b2-94c809437d5e"}, "tags": [], "doc": null, "axis_label": "Performance", "formatter": {"type": "BasicTickFormatter", "id": "91a72fab-47e8-4020-baba-3d6e1eb9d145"}, "ticker": {"type": "BasicTicker", "id": "c0c5170c-6627-4cb5-b9b5-7e14227f3cbc"}, "id": "62e5a072-686c-4aaa-8762-9ca019fd25e6"}, "type": "LinearAxis", "id": "62e5a072-686c-4aaa-8762-9ca019fd25e6"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "c0c5170c-6627-4cb5-b9b5-7e14227f3cbc"}, "type": "BasicTicker", "id": "c0c5170c-6627-4cb5-b9b5-7e14227f3cbc"}, {"attributes": {"plot": {"subtype": "LegacyChart", "type": "Plot", "id": "4cc91af6-1181-4817-93b2-94c809437d5e"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "4351752c-efb0-4e2b-9745-f73c3f20766b"}, "type": "BoxZoomTool", "id": "4351752c-efb0-4e2b-9745-f73c3f20766b"}, {"attributes": {"plot": {"subtype": "LegacyChart", "type": "Plot", "id": "4cc91af6-1181-4817-93b2-94c809437d5e"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "c0c5170c-6627-4cb5-b9b5-7e14227f3cbc"}, "id": "fc5bf6e1-339c-46e6-a741-9ee424701976"}, "type": "Grid", "id": "fc5bf6e1-339c-46e6-a741-9ee424701976"}, {"attributes": {"doc": null, "id": "91a72fab-47e8-4020-baba-3d6e1eb9d145", "tags": []}, "type": "BasicTickFormatter", "id": "91a72fab-47e8-4020-baba-3d6e1eb9d145"}, {"attributes": {"column_names": ["catjython", "jython", "catpypy", "seg_top_python", "python", "z_jython", "catpython", "seg_top_jython", "seg_top_pypy", "z_python", "zero", "cat", "pypy", "z_pypy"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"catjython": ["lists:0.5", "loops:0.5", "dicts:0.5", "gen exp:0.5", "exceptions:0.5"], "jython": [22, 43, 10, 25, 26], "catpypy": ["lists:0.75", "loops:0.75", "dicts:0.75", "gen exp:0.75", "exceptions:0.75"], "seg_top_python": [2, 3, 7, 5, 26], "python": [2, 3, 7, 5, 26], "z_jython": [0.0, 0.0, 0.0, 0.0, 0.0], "catpython": ["lists:0.25", "loops:0.25", "dicts:0.25", "gen exp:0.25", "exceptions:0.25"], "seg_top_jython": [22, 43, 10, 25, 26], "seg_top_pypy": [12, 33, 47, 15, 126], "z_python": [0.0, 0.0, 0.0, 0.0, 0.0], "zero": [0.0, 0.0, 0.0, 0.0, 0.0], "cat": ["lists", "loops", "dicts", "gen exp", "exceptions"], "pypy": [12, 33, 47, 15, 126], "z_pypy": [0.0, 0.0, 0.0, 0.0, 0.0]}, "id": "6dada37d-e6ac-4118-bbae-ab1953ceedb8"}, "type": "ColumnDataSource", "id": "6dada37d-e6ac-4118-bbae-ab1953ceedb8"}, {"attributes": {"plot": {"subtype": "LegacyChart", "type": "Plot", "id": "4cc91af6-1181-4817-93b2-94c809437d5e"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "47925ffc-a9ef-46d1-8bf2-f62e224fb076"}, "type": "PanTool", "id": "47925ffc-a9ef-46d1-8bf2-f62e224fb076"}, {"attributes": {"plot": {"subtype": "LegacyChart", "type": "Plot", "id": "4cc91af6-1181-4817-93b2-94c809437d5e"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "a166a04a-5444-46ca-bb88-5befb599289d"}, "type": "WheelZoomTool", "id": "a166a04a-5444-46ca-bb88-5befb599289d"}, {"attributes": {"plot": {"subtype": "LegacyChart", "type": "Plot", "id": "4cc91af6-1181-4817-93b2-94c809437d5e"}, "tags": [], "doc": null, "id": "787f4cf2-2ffa-4a11-a0e2-3fed43875211"}, "type": "PreviewSaveTool", "id": "787f4cf2-2ffa-4a11-a0e2-3fed43875211"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "6dada37d-e6ac-4118-bbae-ab1953ceedb8"}, "tags": [], "doc": null, "selection_glyph": null, "id": "328a99eb-866e-4a9c-b114-4ecac2d7c953", "glyph": {"type": "Circle", "id": "876e7f34-615b-4d9a-a25c-ce5826d2bb0d"}}, "type": "GlyphRenderer", "id": "328a99eb-866e-4a9c-b114-4ecac2d7c953"}, {"attributes": {"plot": {"subtype": "LegacyChart", "type": "Plot", "id": "4cc91af6-1181-4817-93b2-94c809437d5e"}, "tags": [], "doc": null, "id": "16ae8a44-bc71-48a9-a7dd-4d8b9772038d"}, "type": "ResizeTool", "id": "16ae8a44-bc71-48a9-a7dd-4d8b9772038d"}, {"attributes": {"plot": {"subtype": "LegacyChart", "type": "Plot", "id": "4cc91af6-1181-4817-93b2-94c809437d5e"}, "tags": [], "doc": null, "id": "8663e7e1-5956-4b35-9445-7e60744eba09"}, "type": "ResetTool", "id": "8663e7e1-5956-4b35-9445-7e60744eba09"}, {"attributes": {"plot": {"subtype": "LegacyChart", "type": "Plot", "id": "4cc91af6-1181-4817-93b2-94c809437d5e"}, "tags": [], "doc": null, "id": "8b41eb7e-52f7-4f60-a3db-4e85c43e72b7"}, "type": "HelpTool", "id": "8b41eb7e-52f7-4f60-a3db-4e85c43e72b7"}, {"attributes": {"callback": null, "factors": ["lists", "loops", "dicts", "gen exp", "exceptions"], "doc": null, "tags": [], "id": "21f36f78-4a54-44ae-90cf-d1c33aa012f0"}, "type": "FactorRange", "id": "21f36f78-4a54-44ae-90cf-d1c33aa012f0"}, {"attributes": {"end": 138.60000000000002, "callback": null, "doc": null, "tags": [], "start": 0, "id": "90d7b249-433b-4ced-9d66-c84550bd2289"}, "type": "Range1d", "id": "90d7b249-433b-4ced-9d66-c84550bd2289"}, {"subtype": "LegacyChart", "type": "Plot", "id": "4cc91af6-1181-4817-93b2-94c809437d5e", "attributes": {"x_range": {"type": "FactorRange", "id": "21f36f78-4a54-44ae-90cf-d1c33aa012f0"}, "right": [], "above": [], "tags": [], "tools": [{"type": "PanTool", "id": "47925ffc-a9ef-46d1-8bf2-f62e224fb076"}, {"type": "WheelZoomTool", "id": "a166a04a-5444-46ca-bb88-5befb599289d"}, {"type": "BoxZoomTool", "id": "4351752c-efb0-4e2b-9745-f73c3f20766b"}, {"type": "PreviewSaveTool", "id": "787f4cf2-2ffa-4a11-a0e2-3fed43875211"}, {"type": "ResizeTool", "id": "16ae8a44-bc71-48a9-a7dd-4d8b9772038d"}, {"type": "ResetTool", "id": "8663e7e1-5956-4b35-9445-7e60744eba09"}, {"type": "HelpTool", "id": "8b41eb7e-52f7-4f60-a3db-4e85c43e72b7"}], "id": "4cc91af6-1181-4817-93b2-94c809437d5e", "title": "Dots Example", "renderers": [{"type": "CategoricalAxis", "id": "3bc7ea32-3271-404f-9913-5c3002ff19c1"}, {"type": "LinearAxis", "id": "62e5a072-686c-4aaa-8762-9ca019fd25e6"}, {"type": "Grid", "id": "fc5bf6e1-339c-46e6-a741-9ee424701976"}, {"type": "GlyphRenderer", "id": "432a2ddc-0baa-42dd-bc3e-82fc77d7a32b"}, {"type": "GlyphRenderer", "id": "de018300-dc68-48be-8d72-531a1561d55e"}, {"type": "GlyphRenderer", "id": "6271ea9f-57ca-45e5-8725-db09e1fb0225"}, {"type": "GlyphRenderer", "id": "328a99eb-866e-4a9c-b114-4ecac2d7c953"}, {"type": "GlyphRenderer", "id": "b0081169-abad-4ff5-a1e8-ca7e1b894906"}, {"type": "GlyphRenderer", "id": "10cac245-f634-4329-8acc-c71b3d7bca07"}, {"type": "Legend", "id": "53012ab8-6738-4176-a175-de3de7879763"}], "plot_width": 600, "extra_y_ranges": {}, "extra_x_ranges": {}, "tool_events": {"type": "ToolEvents", "id": "14a4b9a5-33b3-46f1-b839-32ece1581b21"}, "plot_height": 400, "doc": null, "responsive": false, "y_range": {"type": "Range1d", "id": "90d7b249-433b-4ced-9d66-c84550bd2289"}, "below": [{"type": "CategoricalAxis", "id": "3bc7ea32-3271-404f-9913-5c3002ff19c1"}], "left": [{"type": "LinearAxis", "id": "62e5a072-686c-4aaa-8762-9ca019fd25e6"}]}}, {"attributes": {"plot": {"subtype": "LegacyChart", "type": "Plot", "id": "4cc91af6-1181-4817-93b2-94c809437d5e"}, "orientation": "top_left", "tags": [], "doc": null, "id": "53012ab8-6738-4176-a175-de3de7879763", "legends": [["python", [{"type": "GlyphRenderer", "id": "de018300-dc68-48be-8d72-531a1561d55e"}]], ["jython", [{"type": "GlyphRenderer", "id": "328a99eb-866e-4a9c-b114-4ecac2d7c953"}]], ["pypy", [{"type": "GlyphRenderer", "id": "10cac245-f634-4329-8acc-c71b3d7bca07"}]]]}, "type": "Legend", "id": "53012ab8-6738-4176-a175-de3de7879763"}, {"attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "tags": [], "doc": null, "y1": {"field": "seg_top_python"}, "y0": {"field": "z_python"}, "x0": {"field": "catpython"}, "x1": {"field": "catpython"}, "id": "f8691cdc-8a90-491d-a7ef-867d0f5bd418"}, "type": "Segment", "id": "f8691cdc-8a90-491d-a7ef-867d0f5bd418"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "6dada37d-e6ac-4118-bbae-ab1953ceedb8"}, "tags": [], "doc": null, "selection_glyph": null, "id": "432a2ddc-0baa-42dd-bc3e-82fc77d7a32b", "glyph": {"type": "Segment", "id": "f8691cdc-8a90-491d-a7ef-867d0f5bd418"}}, "type": "GlyphRenderer", "id": "432a2ddc-0baa-42dd-bc3e-82fc77d7a32b"}, {"attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "tags": [], "doc": null, "y1": {"field": "seg_top_jython"}, "y0": {"field": "z_jython"}, "x0": {"field": "catjython"}, "x1": {"field": "catjython"}, "id": "f11de5b4-77e0-42b2-b98e-412d21a56398"}, "type": "Segment", "id": "f11de5b4-77e0-42b2-b98e-412d21a56398"}, {"attributes": {"line_color": {"value": "black"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "#407ee7"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "y": {"field": "python"}, "x": {"field": "catpython"}, "id": "7a2bbbd9-9ce5-4961-aa08-fe395a86a4a4", "size": {"units": "screen", "value": 15}}, "type": "Circle", "id": "7a2bbbd9-9ce5-4961-aa08-fe395a86a4a4"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "6dada37d-e6ac-4118-bbae-ab1953ceedb8"}, "tags": [], "doc": null, "selection_glyph": null, "id": "de018300-dc68-48be-8d72-531a1561d55e", "glyph": {"type": "Circle", "id": "7a2bbbd9-9ce5-4961-aa08-fe395a86a4a4"}}, "type": "GlyphRenderer", "id": "de018300-dc68-48be-8d72-531a1561d55e"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("cd1bf0e6-4caa-4003-bfe2-8f4465607fdc", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("cd1bf0e6-4caa-4003-bfe2-8f4465607fdc", all_models);
    });
  }

}(this));