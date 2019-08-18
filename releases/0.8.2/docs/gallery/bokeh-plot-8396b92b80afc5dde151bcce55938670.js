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
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.js"

  var elt = document.getElementById("9c341bcf-ff05-466b-9705-adad52e75675");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '9c341bcf-ff05-466b-9705-adad52e75675' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "54044a31-d813-4db3-9415-9c7fa376d01c", "type": "PanTool", "attributes": {"dimensions": ["width", "height"], "id": "54044a31-d813-4db3-9415-9c7fa376d01c", "plot": {"id": "53b46b54-a0ae-460b-8930-a1768ea527f4", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "1fe17f92-6fad-4c20-9c3c-7220a20bda12", "type": "CategoricalTickFormatter", "attributes": {"id": "1fe17f92-6fad-4c20-9c3c-7220a20bda12", "doc": null, "tags": []}}, {"id": "ede01865-e83d-4dbb-ba0c-c61804aa0e1b", "type": "LinearAxis", "attributes": {"id": "ede01865-e83d-4dbb-ba0c-c61804aa0e1b", "plot": {"id": "53b46b54-a0ae-460b-8930-a1768ea527f4", "type": "Plot", "subtype": "Chart"}, "formatter": {"id": "f2be9ef1-60d1-4d59-a603-8c6fc72b517c", "type": "BasicTickFormatter"}, "axis_label": "Performance", "ticker": {"id": "13840852-0b32-43d0-8fa3-596d78b7247e", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "fb19dedd-4476-4d57-a75f-1b6af1b2256c", "type": "Segment", "attributes": {"y1": {"field": "seg_top_python", "units": "data"}, "line_width": {"value": 2, "units": "data"}, "x1": {"field": "catpython", "units": "data"}, "id": "fb19dedd-4476-4d57-a75f-1b6af1b2256c", "x0": {"field": "catpython", "units": "data"}, "line_color": {"value": "black"}, "y0": {"field": "z_python", "units": "data"}, "tags": [], "doc": null}}, {"id": "c75739e3-1f67-4096-a646-781ba43108c2", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"catpython": ["lists:0.25", "loops:0.25", "dicts:0.25", "gen exp:0.25", "exceptions:0.25"], "cat": ["lists", "loops", "dicts", "gen exp", "exceptions"], "zero": [0.0, 0.0, 0.0, 0.0, 0.0], "z_python": [0.0, 0.0, 0.0, 0.0, 0.0], "seg_top_jython": [22, 43, 10, 25, 26], "catjython": ["lists:0.5", "loops:0.5", "dicts:0.5", "gen exp:0.5", "exceptions:0.5"], "z_jython": [0.0, 0.0, 0.0, 0.0, 0.0], "seg_top_python": [2, 3, 7, 5, 26], "seg_top_pypy": [12, 33, 47, 15, 126], "catpypy": ["lists:0.75", "loops:0.75", "dicts:0.75", "gen exp:0.75", "exceptions:0.75"], "jython": [22, 43, 10, 25, 26], "python": [2, 3, 7, 5, 26], "z_pypy": [0.0, 0.0, 0.0, 0.0, 0.0], "pypy": [12, 33, 47, 15, 126]}, "column_names": ["catpython", "cat", "zero", "z_python", "seg_top_jython", "catjython", "z_jython", "seg_top_python", "seg_top_pypy", "catpypy", "jython", "python", "z_pypy", "pypy"], "id": "c75739e3-1f67-4096-a646-781ba43108c2", "doc": null, "tags": []}}, {"id": "8342bd48-b7eb-4f47-9b69-7fbda4c450ae", "type": "CategoricalTicker", "attributes": {"id": "8342bd48-b7eb-4f47-9b69-7fbda4c450ae", "doc": null, "tags": []}}, {"id": "e9cf81a4-7ce7-47cc-bf4e-6d1ff3fc46f5", "type": "Range1d", "attributes": {"end": 138.60000000000002, "start": 0, "id": "e9cf81a4-7ce7-47cc-bf4e-6d1ff3fc46f5", "doc": null, "tags": []}}, {"id": "76107c22-cab1-4cce-8603-6733e7f70172", "type": "CategoricalAxis", "attributes": {"id": "76107c22-cab1-4cce-8603-6733e7f70172", "plot": {"id": "53b46b54-a0ae-460b-8930-a1768ea527f4", "type": "Plot", "subtype": "Chart"}, "formatter": {"id": "1fe17f92-6fad-4c20-9c3c-7220a20bda12", "type": "CategoricalTickFormatter"}, "axis_label": null, "major_label_orientation": 0.7853981633974483, "ticker": {"id": "8342bd48-b7eb-4f47-9b69-7fbda4c450ae", "type": "CategoricalTicker"}, "tags": [], "doc": null}}, {"id": "bbe4deff-4bc5-4004-9bca-850f76d5b4dc", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "c75739e3-1f67-4096-a646-781ba43108c2", "type": "ColumnDataSource"}, "id": "bbe4deff-4bc5-4004-9bca-850f76d5b4dc", "glyph": {"id": "6037735e-9000-4f03-8528-9ddf11318b7b", "type": "Circle"}, "tags": [], "doc": null}}, {"id": "20d32868-f58c-4717-a2f2-1e911d856977", "type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "20d32868-f58c-4717-a2f2-1e911d856977", "plot": {"id": "53b46b54-a0ae-460b-8930-a1768ea527f4", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "9758e4ba-9b57-4527-aea5-309269f470de", "type": "Circle", "attributes": {"y": {"field": "python", "units": "data"}, "fill_alpha": {"value": 1.0, "units": "data"}, "id": "9758e4ba-9b57-4527-aea5-309269f470de", "fill_color": {"value": "#407ee7"}, "line_color": {"value": "black"}, "size": {"value": 15, "units": "screen"}, "x": {"field": "catpython", "units": "data"}, "doc": null, "tags": [], "line_alpha": {"value": 1.0, "units": "data"}}}, {"id": "13840852-0b32-43d0-8fa3-596d78b7247e", "type": "BasicTicker", "attributes": {"id": "13840852-0b32-43d0-8fa3-596d78b7247e", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "9e83f1e6-bda5-4878-b0a6-db2cc278c095", "type": "Segment", "attributes": {"y1": {"field": "seg_top_pypy", "units": "data"}, "line_width": {"value": 2, "units": "data"}, "x1": {"field": "catpypy", "units": "data"}, "id": "9e83f1e6-bda5-4878-b0a6-db2cc278c095", "x0": {"field": "catpypy", "units": "data"}, "line_color": {"value": "black"}, "y0": {"field": "z_pypy", "units": "data"}, "tags": [], "doc": null}}, {"id": "2e6d697c-6eff-488e-8d92-d173db703e55", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "c75739e3-1f67-4096-a646-781ba43108c2", "type": "ColumnDataSource"}, "id": "2e6d697c-6eff-488e-8d92-d173db703e55", "glyph": {"id": "61984737-3558-46a5-a434-86ce79c80709", "type": "Circle"}, "tags": [], "doc": null}}, {"id": "96ef37c5-0e36-473c-90e3-c349ef87dd2b", "type": "Segment", "attributes": {"y1": {"field": "seg_top_jython", "units": "data"}, "line_width": {"value": 2, "units": "data"}, "x1": {"field": "catjython", "units": "data"}, "id": "96ef37c5-0e36-473c-90e3-c349ef87dd2b", "x0": {"field": "catjython", "units": "data"}, "line_color": {"value": "black"}, "y0": {"field": "z_jython", "units": "data"}, "tags": [], "doc": null}}, {"id": "cbab21f7-bd16-43fc-95b0-abdcd96109c9", "type": "PreviewSaveTool", "attributes": {"plot": {"id": "53b46b54-a0ae-460b-8930-a1768ea527f4", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": [], "id": "cbab21f7-bd16-43fc-95b0-abdcd96109c9"}}, {"id": "0d94fd69-d78a-4563-b161-bff9940f2d08", "type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "0d94fd69-d78a-4563-b161-bff9940f2d08", "plot": {"id": "53b46b54-a0ae-460b-8930-a1768ea527f4", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "47f53bd8-787e-44c3-a24f-e88040445a46", "type": "FactorRange", "attributes": {"factors": ["lists", "loops", "dicts", "gen exp", "exceptions"], "id": "47f53bd8-787e-44c3-a24f-e88040445a46", "doc": null, "tags": []}}, {"id": "9c4fcaf1-fab5-4c08-a3fe-738faded77e5", "type": "ResizeTool", "attributes": {"plot": {"id": "53b46b54-a0ae-460b-8930-a1768ea527f4", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": [], "id": "9c4fcaf1-fab5-4c08-a3fe-738faded77e5"}}, {"id": "625c4e0a-b1d4-49ac-9779-c08f0affd0b0", "type": "Grid", "attributes": {"id": "625c4e0a-b1d4-49ac-9779-c08f0affd0b0", "plot": {"id": "53b46b54-a0ae-460b-8930-a1768ea527f4", "type": "Plot", "subtype": "Chart"}, "dimension": 1, "ticker": {"id": "13840852-0b32-43d0-8fa3-596d78b7247e", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "f2be9ef1-60d1-4d59-a603-8c6fc72b517c", "type": "BasicTickFormatter", "attributes": {"id": "f2be9ef1-60d1-4d59-a603-8c6fc72b517c", "doc": null, "tags": []}}, {"id": "6343539e-f9bc-41fc-b649-96b6191a1b52", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "c75739e3-1f67-4096-a646-781ba43108c2", "type": "ColumnDataSource"}, "id": "6343539e-f9bc-41fc-b649-96b6191a1b52", "glyph": {"id": "96ef37c5-0e36-473c-90e3-c349ef87dd2b", "type": "Segment"}, "tags": [], "doc": null}}, {"id": "6037735e-9000-4f03-8528-9ddf11318b7b", "type": "Circle", "attributes": {"y": {"field": "jython", "units": "data"}, "fill_alpha": {"value": 1.0, "units": "data"}, "id": "6037735e-9000-4f03-8528-9ddf11318b7b", "fill_color": {"value": "#f22c40"}, "line_color": {"value": "black"}, "size": {"value": 15, "units": "screen"}, "x": {"field": "catjython", "units": "data"}, "doc": null, "tags": [], "line_alpha": {"value": 1.0, "units": "data"}}}, {"id": "21bdb042-fed8-4c19-a959-0bc75cdf1703", "type": "Legend", "attributes": {"legends": [["python", [{"id": "08bc1fb7-4c7a-47ec-b359-c1a129768385", "type": "GlyphRenderer"}]], ["jython", [{"id": "bbe4deff-4bc5-4004-9bca-850f76d5b4dc", "type": "GlyphRenderer"}]], ["pypy", [{"id": "2e6d697c-6eff-488e-8d92-d173db703e55", "type": "GlyphRenderer"}]]], "orientation": "top_left", "id": "21bdb042-fed8-4c19-a959-0bc75cdf1703", "plot": {"id": "53b46b54-a0ae-460b-8930-a1768ea527f4", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "61984737-3558-46a5-a434-86ce79c80709", "type": "Circle", "attributes": {"y": {"field": "pypy", "units": "data"}, "fill_alpha": {"value": 1.0, "units": "data"}, "id": "61984737-3558-46a5-a434-86ce79c80709", "fill_color": {"value": "#5ab738"}, "line_color": {"value": "black"}, "size": {"value": 15, "units": "screen"}, "x": {"field": "catpypy", "units": "data"}, "doc": null, "tags": [], "line_alpha": {"value": 1.0, "units": "data"}}}, {"id": "11c06451-4f2f-4e65-829e-23b4367cb439", "type": "ResetTool", "attributes": {"plot": {"id": "53b46b54-a0ae-460b-8930-a1768ea527f4", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": [], "id": "11c06451-4f2f-4e65-829e-23b4367cb439"}}, {"id": "879e3400-979a-4e27-8f4d-afb32ac2bf88", "type": "ToolEvents", "attributes": {"geometries": [], "id": "879e3400-979a-4e27-8f4d-afb32ac2bf88", "doc": null, "tags": []}}, {"id": "08bc1fb7-4c7a-47ec-b359-c1a129768385", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "c75739e3-1f67-4096-a646-781ba43108c2", "type": "ColumnDataSource"}, "id": "08bc1fb7-4c7a-47ec-b359-c1a129768385", "glyph": {"id": "9758e4ba-9b57-4527-aea5-309269f470de", "type": "Circle"}, "tags": [], "doc": null}}, {"id": "8a37b226-765d-41f2-b562-52983c352b38", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "c75739e3-1f67-4096-a646-781ba43108c2", "type": "ColumnDataSource"}, "id": "8a37b226-765d-41f2-b562-52983c352b38", "glyph": {"id": "fb19dedd-4476-4d57-a75f-1b6af1b2256c", "type": "Segment"}, "tags": [], "doc": null}}, {"id": "715a99ed-8b2a-42a4-9ea4-019122cbadf2", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "c75739e3-1f67-4096-a646-781ba43108c2", "type": "ColumnDataSource"}, "id": "715a99ed-8b2a-42a4-9ea4-019122cbadf2", "glyph": {"id": "9e83f1e6-bda5-4878-b0a6-db2cc278c095", "type": "Segment"}, "tags": [], "doc": null}}, {"id": "53b46b54-a0ae-460b-8930-a1768ea527f4", "type": "Plot", "subtype": "Chart", "attributes": {"tool_events": {"id": "879e3400-979a-4e27-8f4d-afb32ac2bf88", "type": "ToolEvents"}, "title": "Dots Example", "extra_y_ranges": {}, "renderers": [{"id": "76107c22-cab1-4cce-8603-6733e7f70172", "type": "CategoricalAxis"}, {"id": "ede01865-e83d-4dbb-ba0c-c61804aa0e1b", "type": "LinearAxis"}, {"id": "625c4e0a-b1d4-49ac-9779-c08f0affd0b0", "type": "Grid"}, {"id": "8a37b226-765d-41f2-b562-52983c352b38", "type": "GlyphRenderer"}, {"id": "08bc1fb7-4c7a-47ec-b359-c1a129768385", "type": "GlyphRenderer"}, {"id": "6343539e-f9bc-41fc-b649-96b6191a1b52", "type": "GlyphRenderer"}, {"id": "bbe4deff-4bc5-4004-9bca-850f76d5b4dc", "type": "GlyphRenderer"}, {"id": "715a99ed-8b2a-42a4-9ea4-019122cbadf2", "type": "GlyphRenderer"}, {"id": "2e6d697c-6eff-488e-8d92-d173db703e55", "type": "GlyphRenderer"}, {"id": "21bdb042-fed8-4c19-a959-0bc75cdf1703", "type": "Legend"}], "id": "53b46b54-a0ae-460b-8930-a1768ea527f4", "extra_x_ranges": {}, "doc": null, "below": [{"id": "76107c22-cab1-4cce-8603-6733e7f70172", "type": "CategoricalAxis"}], "right": [], "x_range": {"id": "47f53bd8-787e-44c3-a24f-e88040445a46", "type": "FactorRange"}, "left": [{"id": "ede01865-e83d-4dbb-ba0c-c61804aa0e1b", "type": "LinearAxis"}], "above": [], "tools": [{"id": "54044a31-d813-4db3-9415-9c7fa376d01c", "type": "PanTool"}, {"id": "20d32868-f58c-4717-a2f2-1e911d856977", "type": "WheelZoomTool"}, {"id": "0d94fd69-d78a-4563-b161-bff9940f2d08", "type": "BoxZoomTool"}, {"id": "cbab21f7-bd16-43fc-95b0-abdcd96109c9", "type": "PreviewSaveTool"}, {"id": "9c4fcaf1-fab5-4c08-a3fe-738faded77e5", "type": "ResizeTool"}, {"id": "11c06451-4f2f-4e65-829e-23b4367cb439", "type": "ResetTool"}], "plot_width": 600, "plot_height": 400, "y_range": {"id": "e9cf81a4-7ce7-47cc-bf4e-6d1ff3fc46f5", "type": "Range1d"}, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("9c341bcf-ff05-466b-9705-adad52e75675", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("9c341bcf-ff05-466b-9705-adad52e75675", all_models);
    });
  }

}(this));