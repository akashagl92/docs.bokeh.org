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

  var elt = document.getElementById("042865d4-cf91-4253-ac51-7f45f8ffdb6b");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '042865d4-cf91-4253-ac51-7f45f8ffdb6b' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "7a67bae3-44fd-4aec-8339-4d4bf0926626", "type": "BasicTicker", "attributes": {"id": "7a67bae3-44fd-4aec-8339-4d4bf0926626", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "1dbd230c-bb9a-43fb-8106-0e954f365bc0", "type": "Grid", "attributes": {"id": "1dbd230c-bb9a-43fb-8106-0e954f365bc0", "plot": {"id": "80be5289-77f0-43cd-a5f2-e554bbab8c9f", "type": "Plot"}, "dimension": 0, "ticker": {"id": "aabc8b9c-c5df-42d8-bffa-2b8c390c99c3", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "02230f06-1698-4711-8864-8f58f0fac718", "type": "LinearAxis", "attributes": {"id": "02230f06-1698-4711-8864-8f58f0fac718", "formatter": {"id": "d973a16d-dc8d-43ac-8466-58887dd6afbb", "type": "BasicTickFormatter"}, "plot": {"id": "80be5289-77f0-43cd-a5f2-e554bbab8c9f", "type": "Plot"}, "ticker": {"id": "aabc8b9c-c5df-42d8-bffa-2b8c390c99c3", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "0477d235-3e8d-4705-ae7a-7b53b4d40940", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "4dac723c-5700-405a-89be-43065b5c094d", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "0477d235-3e8d-4705-ae7a-7b53b4d40940", "doc": null, "tags": []}}, {"id": "d703f6eb-0c95-4a31-b99a-f3a71e1636c9", "type": "LinearAxis", "attributes": {"id": "d703f6eb-0c95-4a31-b99a-f3a71e1636c9", "formatter": {"id": "5a4f46a9-1bdf-4ef8-a530-a039f63f06e0", "type": "BasicTickFormatter"}, "plot": {"id": "80be5289-77f0-43cd-a5f2-e554bbab8c9f", "type": "Plot"}, "ticker": {"id": "7a67bae3-44fd-4aec-8339-4d4bf0926626", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "5a4f46a9-1bdf-4ef8-a530-a039f63f06e0", "type": "BasicTickFormatter", "attributes": {"id": "5a4f46a9-1bdf-4ef8-a530-a039f63f06e0", "doc": null, "tags": []}}, {"id": "c5a59592-4605-44de-a50e-ebf68aead778", "type": "Cross", "attributes": {"line_width": {"value": 2, "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "c5a59592-4605-44de-a50e-ebf68aead778", "fill_color": null, "line_color": {"value": "#e6550d"}, "x": {"field": "x", "units": "data"}, "doc": null, "tags": [], "size": {"field": "sizes", "units": "screen"}}}, {"id": "d973a16d-dc8d-43ac-8466-58887dd6afbb", "type": "BasicTickFormatter", "attributes": {"id": "d973a16d-dc8d-43ac-8466-58887dd6afbb", "doc": null, "tags": []}}, {"id": "4dac723c-5700-405a-89be-43065b5c094d", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["sizes", "y", "x"], "id": "4dac723c-5700-405a-89be-43065b5c094d", "doc": null, "tags": []}}, {"id": "80be5289-77f0-43cd-a5f2-e554bbab8c9f", "type": "Plot", "attributes": {"tool_events": {"id": "fa915c14-a7fa-4af7-ba40-1064132b14eb", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "a4470e20-31aa-4fa5-a935-1f29973c2e7d", "type": "GlyphRenderer"}, {"id": "02230f06-1698-4711-8864-8f58f0fac718", "type": "LinearAxis"}, {"id": "d703f6eb-0c95-4a31-b99a-f3a71e1636c9", "type": "LinearAxis"}, {"id": "1dbd230c-bb9a-43fb-8106-0e954f365bc0", "type": "Grid"}, {"id": "0ead14b1-c311-4bc0-ab24-049ce5b6a061", "type": "Grid"}], "left": [{"id": "d703f6eb-0c95-4a31-b99a-f3a71e1636c9", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "0477d235-3e8d-4705-ae7a-7b53b4d40940", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "80be5289-77f0-43cd-a5f2-e554bbab8c9f", "y_range": {"id": "3763dec4-1127-4d99-8c5a-85c6b4039936", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "02230f06-1698-4711-8864-8f58f0fac718", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "0ead14b1-c311-4bc0-ab24-049ce5b6a061", "type": "Grid", "attributes": {"id": "0ead14b1-c311-4bc0-ab24-049ce5b6a061", "plot": {"id": "80be5289-77f0-43cd-a5f2-e554bbab8c9f", "type": "Plot"}, "dimension": 1, "ticker": {"id": "7a67bae3-44fd-4aec-8339-4d4bf0926626", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "a4470e20-31aa-4fa5-a935-1f29973c2e7d", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "4dac723c-5700-405a-89be-43065b5c094d", "type": "ColumnDataSource"}, "id": "a4470e20-31aa-4fa5-a935-1f29973c2e7d", "glyph": {"id": "c5a59592-4605-44de-a50e-ebf68aead778", "type": "Cross"}, "tags": [], "doc": null}}, {"id": "fa915c14-a7fa-4af7-ba40-1064132b14eb", "type": "ToolEvents", "attributes": {"geometries": [], "id": "fa915c14-a7fa-4af7-ba40-1064132b14eb", "doc": null, "tags": []}}, {"id": "aabc8b9c-c5df-42d8-bffa-2b8c390c99c3", "type": "BasicTicker", "attributes": {"id": "aabc8b9c-c5df-42d8-bffa-2b8c390c99c3", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "3763dec4-1127-4d99-8c5a-85c6b4039936", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "4dac723c-5700-405a-89be-43065b5c094d", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "3763dec4-1127-4d99-8c5a-85c6b4039936", "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("042865d4-cf91-4253-ac51-7f45f8ffdb6b", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("042865d4-cf91-4253-ac51-7f45f8ffdb6b", all_models);
    });
  }

}(this));