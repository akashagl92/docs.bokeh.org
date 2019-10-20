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

  var elt = document.getElementById("48c64f89-ff45-42c7-acd2-b16661ed99c7");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '48c64f89-ff45-42c7-acd2-b16661ed99c7' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "09cb7eea-8546-49a7-9f20-5f92cfb0c1ec", "type": "ResetTool", "attributes": {"plot": {"id": "a349a0cf-41a8-43a3-91df-7d159ba1a9fe", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": [], "id": "09cb7eea-8546-49a7-9f20-5f92cfb0c1ec"}}, {"id": "1aa4a578-681f-4b29-bedf-84528dc59bc0", "type": "ResizeTool", "attributes": {"plot": {"id": "a349a0cf-41a8-43a3-91df-7d159ba1a9fe", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": [], "id": "1aa4a578-681f-4b29-bedf-84528dc59bc0"}}, {"id": "9d3014ce-6175-47d0-a416-b601fbc89e98", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "aa69ea00-d6b8-4f21-8841-49cb8c70788f", "type": "ColumnDataSource"}, "id": "9d3014ce-6175-47d0-a416-b601fbc89e98", "glyph": {"id": "3f11e2c5-0798-4429-b5e2-3e049dbed257", "type": "Rect"}, "tags": [], "doc": null}}, {"id": "58041b65-6ed7-4242-a9f7-b08618ee9121", "type": "CategoricalTicker", "attributes": {"id": "58041b65-6ed7-4242-a9f7-b08618ee9121", "doc": null, "tags": []}}, {"id": "bccc8687-d31e-481a-9562-00eed3fc881e", "type": "HoverTool", "attributes": {"renderers": [], "tags": [], "id": "bccc8687-d31e-481a-9562-00eed3fc881e", "plot": {"id": "a349a0cf-41a8-43a3-91df-7d159ba1a9fe", "type": "Plot", "subtype": "Chart"}, "tooltips": [["value", "@rate"]], "names": [], "doc": null}}, {"id": "402414d1-0e10-4be4-b752-441646b09294", "type": "PanTool", "attributes": {"dimensions": ["width", "height"], "id": "402414d1-0e10-4be4-b752-441646b09294", "plot": {"id": "a349a0cf-41a8-43a3-91df-7d159ba1a9fe", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "80f2f6b5-0e8a-4beb-903f-b24c23a3b831", "type": "CategoricalTickFormatter", "attributes": {"id": "80f2f6b5-0e8a-4beb-903f-b24c23a3b831", "doc": null, "tags": []}}, {"id": "aa69ea00-d6b8-4f21-8841-49cb8c70788f", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"rate": [4, 1, 6, 5, 2, 5, 8, 4, 4], "caty": ["a", "a", "a", "b", "b", "b", "c", "c", "c"], "color": ["#407ee7", "#f22c40", "#00ad9c", "#df5320", "#5ab738", "#df5320", "#c33ff3", "#407ee7", "#407ee7"], "height": [0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95], "catx": ["apples", "bananas", "pears", "apples", "bananas", "pears", "apples", "bananas", "pears"], "width": [0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95]}, "column_names": ["rate", "caty", "color", "height", "catx", "width"], "id": "aa69ea00-d6b8-4f21-8841-49cb8c70788f", "doc": null, "tags": []}}, {"id": "b75a3273-c66a-468b-8e8f-fa556e47edda", "type": "FactorRange", "attributes": {"factors": ["apples", "bananas", "pears"], "id": "b75a3273-c66a-468b-8e8f-fa556e47edda", "doc": null, "tags": []}}, {"id": "a98ff6cb-a5f2-4d54-bbb7-f5d415b07d42", "type": "CategoricalAxis", "attributes": {"id": "a98ff6cb-a5f2-4d54-bbb7-f5d415b07d42", "plot": {"id": "a349a0cf-41a8-43a3-91df-7d159ba1a9fe", "type": "Plot", "subtype": "Chart"}, "formatter": {"id": "daed68ad-41d7-449e-a1ea-fd6b60d5921e", "type": "CategoricalTickFormatter"}, "axis_label": null, "major_label_orientation": 0.7853981633974483, "ticker": {"id": "58041b65-6ed7-4242-a9f7-b08618ee9121", "type": "CategoricalTicker"}, "tags": [], "doc": null}}, {"id": "3f11e2c5-0798-4429-b5e2-3e049dbed257", "type": "Rect", "attributes": {"y": {"field": "caty", "units": "data"}, "fill_alpha": {"value": 0.7, "units": "data"}, "id": "3f11e2c5-0798-4429-b5e2-3e049dbed257", "fill_color": {"field": "color"}, "line_color": {"value": "white"}, "height": {"field": "height", "units": "data"}, "x": {"field": "catx", "units": "data"}, "doc": null, "tags": [], "width": {"field": "width", "units": "data"}}}, {"id": "3c4b05a9-5835-4e3b-82c0-f588812c252d", "type": "FactorRange", "attributes": {"factors": ["a", "b", "c"], "id": "3c4b05a9-5835-4e3b-82c0-f588812c252d", "doc": null, "tags": []}}, {"id": "daed68ad-41d7-449e-a1ea-fd6b60d5921e", "type": "CategoricalTickFormatter", "attributes": {"id": "daed68ad-41d7-449e-a1ea-fd6b60d5921e", "doc": null, "tags": []}}, {"id": "fe5a4066-f0c6-4b6c-b96c-5e568a744d68", "type": "CategoricalTicker", "attributes": {"id": "fe5a4066-f0c6-4b6c-b96c-5e568a744d68", "doc": null, "tags": []}}, {"id": "dd7f1211-919c-4f59-b35d-515dc770709c", "type": "ToolEvents", "attributes": {"geometries": [], "id": "dd7f1211-919c-4f59-b35d-515dc770709c", "doc": null, "tags": []}}, {"id": "f2393bfb-0b76-422f-96e8-00020efe11d4", "type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "f2393bfb-0b76-422f-96e8-00020efe11d4", "plot": {"id": "a349a0cf-41a8-43a3-91df-7d159ba1a9fe", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "61ea7ecb-6173-4a39-a634-d1983a4e8462", "type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "61ea7ecb-6173-4a39-a634-d1983a4e8462", "plot": {"id": "a349a0cf-41a8-43a3-91df-7d159ba1a9fe", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "ca858543-cf66-4c64-ad9f-908996680628", "type": "PreviewSaveTool", "attributes": {"plot": {"id": "a349a0cf-41a8-43a3-91df-7d159ba1a9fe", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": [], "id": "ca858543-cf66-4c64-ad9f-908996680628"}}, {"id": "03c7be90-a190-4857-b363-f6a486f95f34", "type": "CategoricalAxis", "attributes": {"id": "03c7be90-a190-4857-b363-f6a486f95f34", "plot": {"id": "a349a0cf-41a8-43a3-91df-7d159ba1a9fe", "type": "Plot", "subtype": "Chart"}, "formatter": {"id": "80f2f6b5-0e8a-4beb-903f-b24c23a3b831", "type": "CategoricalTickFormatter"}, "axis_label": null, "major_label_orientation": 0.7853981633974483, "ticker": {"id": "fe5a4066-f0c6-4b6c-b96c-5e568a744d68", "type": "CategoricalTicker"}, "tags": [], "doc": null}}, {"id": "a349a0cf-41a8-43a3-91df-7d159ba1a9fe", "type": "Plot", "subtype": "Chart", "attributes": {"tool_events": {"id": "dd7f1211-919c-4f59-b35d-515dc770709c", "type": "ToolEvents"}, "title": "Fruits", "extra_y_ranges": {}, "renderers": [{"id": "03c7be90-a190-4857-b363-f6a486f95f34", "type": "CategoricalAxis"}, {"id": "a98ff6cb-a5f2-4d54-bbb7-f5d415b07d42", "type": "CategoricalAxis"}, {"id": "9d3014ce-6175-47d0-a416-b601fbc89e98", "type": "GlyphRenderer"}], "id": "a349a0cf-41a8-43a3-91df-7d159ba1a9fe", "extra_x_ranges": {}, "doc": null, "below": [{"id": "03c7be90-a190-4857-b363-f6a486f95f34", "type": "CategoricalAxis"}], "right": [], "x_range": {"id": "b75a3273-c66a-468b-8e8f-fa556e47edda", "type": "FactorRange"}, "left": [{"id": "a98ff6cb-a5f2-4d54-bbb7-f5d415b07d42", "type": "CategoricalAxis"}], "above": [], "tools": [{"id": "402414d1-0e10-4be4-b752-441646b09294", "type": "PanTool"}, {"id": "61ea7ecb-6173-4a39-a634-d1983a4e8462", "type": "WheelZoomTool"}, {"id": "f2393bfb-0b76-422f-96e8-00020efe11d4", "type": "BoxZoomTool"}, {"id": "ca858543-cf66-4c64-ad9f-908996680628", "type": "PreviewSaveTool"}, {"id": "1aa4a578-681f-4b29-bedf-84528dc59bc0", "type": "ResizeTool"}, {"id": "09cb7eea-8546-49a7-9f20-5f92cfb0c1ec", "type": "ResetTool"}, {"id": "bccc8687-d31e-481a-9562-00eed3fc881e", "type": "HoverTool"}], "plot_width": 600, "plot_height": 400, "y_range": {"id": "3c4b05a9-5835-4e3b-82c0-f588812c252d", "type": "FactorRange"}, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("48c64f89-ff45-42c7-acd2-b16661ed99c7", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("48c64f89-ff45-42c7-acd2-b16661ed99c7", all_models);
    });
  }

}(this));