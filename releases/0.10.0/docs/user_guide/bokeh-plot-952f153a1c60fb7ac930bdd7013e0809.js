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

  var elt = document.getElementById("c92cdc6f-c26d-4e55-82c8-34ae19c314a5");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c92cdc6f-c26d-4e55-82c8-34ae19c314a5' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"doc": null, "id": "4cfed79e-b5e5-4dc2-932a-cdf9ecb73f43", "tags": []}, "type": "BasicTickFormatter", "id": "4cfed79e-b5e5-4dc2-932a-cdf9ecb73f43"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "bccd2642-07ca-4c17-ac79-ab28bfa17b0a"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "950efd9a-6847-4548-8f65-b01e2c726128"}, "type": "BoxZoomTool", "id": "950efd9a-6847-4548-8f65-b01e2c726128"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "bccd2642-07ca-4c17-ac79-ab28bfa17b0a"}, "tags": [], "doc": null, "id": "0d09c1e5-4cbd-48a1-b549-9321289d92ee"}, "type": "PreviewSaveTool", "id": "0d09c1e5-4cbd-48a1-b549-9321289d92ee"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [6, 7, 8, 7, 3], "x": [1, 2, 3, 4, 5]}, "id": "b5b1f4a6-0e07-4f6a-8102-20d4f7924973"}, "type": "ColumnDataSource", "id": "b5b1f4a6-0e07-4f6a-8102-20d4f7924973"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "line_alpha": {"value": 1.0}, "doc": null, "tags": [], "y": {"field": "y"}, "x": {"field": "x"}, "id": "6c05fe30-d78f-4f08-a22c-3e14a12a437b"}, "type": "Line", "id": "6c05fe30-d78f-4f08-a22c-3e14a12a437b"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "4963eeb5-08c2-4b5d-9c61-d334c76965eb", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "4963eeb5-08c2-4b5d-9c61-d334c76965eb"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "white"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "ae87309c-e714-4f05-a6ce-9bab6e0e4b28", "size": {"units": "screen", "value": 8}}, "type": "Circle", "id": "ae87309c-e714-4f05-a6ce-9bab6e0e4b28"}, {"attributes": {"doc": null, "id": "f0063604-263d-48ab-a99b-a45203a13bea", "tags": []}, "type": "BasicTickFormatter", "id": "f0063604-263d-48ab-a99b-a45203a13bea"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "8047ff15-aa1b-4ddc-a483-b1c55646ed4e"}, "data_source": {"type": "ColumnDataSource", "id": "b5b1f4a6-0e07-4f6a-8102-20d4f7924973"}, "tags": [], "doc": null, "selection_glyph": null, "id": "960ec20f-f47a-49b3-90b9-cddf72d93443", "glyph": {"type": "Circle", "id": "ae87309c-e714-4f05-a6ce-9bab6e0e4b28"}}, "type": "GlyphRenderer", "id": "960ec20f-f47a-49b3-90b9-cddf72d93443"}, {"attributes": {"nonselection_glyph": {"type": "Line", "id": "2993f443-7e29-454a-b305-ef9dd2a70e66"}, "data_source": {"type": "ColumnDataSource", "id": "b93d8af0-766e-4461-9087-4156781bc76d"}, "tags": [], "doc": null, "selection_glyph": null, "id": "d9fa21fa-3d6a-4bde-bdb7-4f4082d9d829", "glyph": {"type": "Line", "id": "6c05fe30-d78f-4f08-a22c-3e14a12a437b"}}, "type": "GlyphRenderer", "id": "d9fa21fa-3d6a-4bde-bdb7-4f4082d9d829"}, {"subtype": "Figure", "type": "Plot", "id": "bccd2642-07ca-4c17-ac79-ab28bfa17b0a", "attributes": {"x_range": {"type": "DataRange1d", "id": "ec74f20c-c0e0-4001-b627-26ecbfd37c66"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "f253c7be-fe72-47ed-8fd0-5722be0275a4"}, {"type": "WheelZoomTool", "id": "0940a3ab-ba44-40ae-9ddf-24df41410f37"}, {"type": "BoxZoomTool", "id": "950efd9a-6847-4548-8f65-b01e2c726128"}, {"type": "PreviewSaveTool", "id": "0d09c1e5-4cbd-48a1-b549-9321289d92ee"}, {"type": "ResizeTool", "id": "27f05f6e-78e6-40c4-9a87-6c11c68ad5fa"}, {"type": "ResetTool", "id": "bdcb1ef7-19f2-4eb4-8198-fa0bf2589b49"}, {"type": "HelpTool", "id": "b8356a07-dc48-4f40-afe8-50f5591aa42b"}], "extra_y_ranges": {}, "plot_width": 400, "renderers": [{"type": "LinearAxis", "id": "6838019c-303c-49c1-a360-5fddfa569546"}, {"type": "Grid", "id": "844aab4e-e055-41be-86d0-2f2737529d90"}, {"type": "LinearAxis", "id": "938f3c1a-507d-4852-b95d-36c57852216a"}, {"type": "Grid", "id": "d46a7c37-9cc3-40ed-9de3-a8e19501a189"}, {"type": "GlyphRenderer", "id": "d9fa21fa-3d6a-4bde-bdb7-4f4082d9d829"}, {"type": "GlyphRenderer", "id": "960ec20f-f47a-49b3-90b9-cddf72d93443"}], "extra_x_ranges": {}, "plot_height": 400, "tool_events": {"type": "ToolEvents", "id": "e5ba254a-622a-4112-82fc-86df8c6d40f8"}, "above": [], "doc": null, "id": "bccd2642-07ca-4c17-ac79-ab28bfa17b0a", "y_range": {"type": "DataRange1d", "id": "90d9d857-72b7-4645-8fe9-81a6835b8fb9"}, "below": [{"type": "LinearAxis", "id": "6838019c-303c-49c1-a360-5fddfa569546"}], "left": [{"type": "LinearAxis", "id": "938f3c1a-507d-4852-b95d-36c57852216a"}]}}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "bccd2642-07ca-4c17-ac79-ab28bfa17b0a"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "f0063604-263d-48ab-a99b-a45203a13bea"}, "ticker": {"type": "BasicTicker", "id": "4963eeb5-08c2-4b5d-9c61-d334c76965eb"}, "id": "938f3c1a-507d-4852-b95d-36c57852216a"}, "type": "LinearAxis", "id": "938f3c1a-507d-4852-b95d-36c57852216a"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "bccd2642-07ca-4c17-ac79-ab28bfa17b0a"}, "tags": [], "doc": null, "id": "bdcb1ef7-19f2-4eb4-8198-fa0bf2589b49"}, "type": "ResetTool", "id": "bdcb1ef7-19f2-4eb4-8198-fa0bf2589b49"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [6, 7, 8, 7, 3], "x": [1, 2, 3, 4, 5]}, "id": "b93d8af0-766e-4461-9087-4156781bc76d"}, "type": "ColumnDataSource", "id": "b93d8af0-766e-4461-9087-4156781bc76d"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "bccd2642-07ca-4c17-ac79-ab28bfa17b0a"}, "tags": [], "doc": null, "id": "b8356a07-dc48-4f40-afe8-50f5591aa42b"}, "type": "HelpTool", "id": "b8356a07-dc48-4f40-afe8-50f5591aa42b"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "bccd2642-07ca-4c17-ac79-ab28bfa17b0a"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "f253c7be-fe72-47ed-8fd0-5722be0275a4"}, "type": "PanTool", "id": "f253c7be-fe72-47ed-8fd0-5722be0275a4"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "bccd2642-07ca-4c17-ac79-ab28bfa17b0a"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "4963eeb5-08c2-4b5d-9c61-d334c76965eb"}, "id": "d46a7c37-9cc3-40ed-9de3-a8e19501a189"}, "type": "Grid", "id": "d46a7c37-9cc3-40ed-9de3-a8e19501a189"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "bccd2642-07ca-4c17-ac79-ab28bfa17b0a"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "4cfed79e-b5e5-4dc2-932a-cdf9ecb73f43"}, "ticker": {"type": "BasicTicker", "id": "b4b77dba-1124-4366-9118-89934de704ae"}, "id": "6838019c-303c-49c1-a360-5fddfa569546"}, "type": "LinearAxis", "id": "6838019c-303c-49c1-a360-5fddfa569546"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "line_alpha": {"value": 0.1}, "doc": null, "tags": [], "y": {"field": "y"}, "x": {"field": "x"}, "id": "2993f443-7e29-454a-b305-ef9dd2a70e66"}, "type": "Line", "id": "2993f443-7e29-454a-b305-ef9dd2a70e66"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "b4b77dba-1124-4366-9118-89934de704ae", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "b4b77dba-1124-4366-9118-89934de704ae"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "bccd2642-07ca-4c17-ac79-ab28bfa17b0a"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "0940a3ab-ba44-40ae-9ddf-24df41410f37"}, "type": "WheelZoomTool", "id": "0940a3ab-ba44-40ae-9ddf-24df41410f37"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "bccd2642-07ca-4c17-ac79-ab28bfa17b0a"}, "tags": [], "doc": null, "id": "27f05f6e-78e6-40c4-9a87-6c11c68ad5fa"}, "type": "ResizeTool", "id": "27f05f6e-78e6-40c4-9a87-6c11c68ad5fa"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "bccd2642-07ca-4c17-ac79-ab28bfa17b0a"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "b4b77dba-1124-4366-9118-89934de704ae"}, "id": "844aab4e-e055-41be-86d0-2f2737529d90"}, "type": "Grid", "id": "844aab4e-e055-41be-86d0-2f2737529d90"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "ec74f20c-c0e0-4001-b627-26ecbfd37c66"}, "type": "DataRange1d", "id": "ec74f20c-c0e0-4001-b627-26ecbfd37c66"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "90d9d857-72b7-4645-8fe9-81a6835b8fb9"}, "type": "DataRange1d", "id": "90d9d857-72b7-4645-8fe9-81a6835b8fb9"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "8047ff15-aa1b-4ddc-a483-b1c55646ed4e", "size": {"units": "screen", "value": 8}}, "type": "Circle", "id": "8047ff15-aa1b-4ddc-a483-b1c55646ed4e"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "e5ba254a-622a-4112-82fc-86df8c6d40f8"}, "type": "ToolEvents", "id": "e5ba254a-622a-4112-82fc-86df8c6d40f8"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("c92cdc6f-c26d-4e55-82c8-34ae19c314a5", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("c92cdc6f-c26d-4e55-82c8-34ae19c314a5", all_models);
    });
  }

}(this));