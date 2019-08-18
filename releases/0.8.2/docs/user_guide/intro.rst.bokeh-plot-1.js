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

  var elt = document.getElementById("f8881ff1-d2d0-4b39-9641-d154ae179d5c");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'f8881ff1-d2d0-4b39-9641-d154ae179d5c' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "ba74604d-7c07-4ed5-9511-b2862af92f65", "type": "ResetTool", "attributes": {"plot": {"id": "9112c5d3-b063-4b0a-bd33-38f7491fe608", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": [], "id": "ba74604d-7c07-4ed5-9511-b2862af92f65"}}, {"id": "9112c5d3-b063-4b0a-bd33-38f7491fe608", "type": "Plot", "subtype": "Chart", "attributes": {"tool_events": {"id": "192d9340-feda-4b3b-b6f8-6a958c42cd20", "type": "ToolEvents"}, "title": "iris data", "extra_y_ranges": {}, "renderers": [{"id": "922b7b1b-8bc8-48d1-bdf5-0a87900a8cb5", "type": "LinearAxis"}, {"id": "c853caf0-5bf2-4361-939d-0b0065ddad7d", "type": "LinearAxis"}, {"id": "321b1fae-6d7d-4082-bf22-996f1c4c192a", "type": "Grid"}, {"id": "2df4f8e5-48d2-4c48-9220-0a94102a8459", "type": "Grid"}, {"id": "d686374a-9b9a-4d34-85d3-8f7001d514e4", "type": "GlyphRenderer"}, {"id": "ffec69fa-62a7-4133-8b49-709df8c6a94c", "type": "GlyphRenderer"}, {"id": "a848a99a-32c4-4ddd-9097-437424fa7b0a", "type": "GlyphRenderer"}, {"id": "c7643e73-768f-4785-bc3e-5c54f33009fa", "type": "Legend"}], "id": "9112c5d3-b063-4b0a-bd33-38f7491fe608", "extra_x_ranges": {}, "doc": null, "below": [{"id": "922b7b1b-8bc8-48d1-bdf5-0a87900a8cb5", "type": "LinearAxis"}], "right": [], "x_range": {"id": "5bdc4d58-0d59-4264-b640-629f7b912dd2", "type": "Range1d"}, "left": [{"id": "c853caf0-5bf2-4361-939d-0b0065ddad7d", "type": "LinearAxis"}], "above": [], "tools": [{"id": "e2eb48e6-8dac-47da-930e-c1e4c2d7af7a", "type": "PanTool"}, {"id": "0db8ee13-4dd4-4836-931c-5eb67b257037", "type": "WheelZoomTool"}, {"id": "69ef3ae5-7770-4318-bd61-0d00ec3aff57", "type": "BoxZoomTool"}, {"id": "fa75654a-0fd4-4d1b-8579-f0d4a51c9ef2", "type": "PreviewSaveTool"}, {"id": "2e84bf36-5cdb-4728-a85b-b6f5a2299849", "type": "ResizeTool"}, {"id": "ba74604d-7c07-4ed5-9511-b2862af92f65", "type": "ResetTool"}], "plot_width": 400, "plot_height": 400, "y_range": {"id": "0178af25-ee41-479a-b40d-918902fa7616", "type": "Range1d"}, "tags": []}}, {"id": "45b7c329-236b-4c4f-afc1-51e67ec58515", "type": "BasicTickFormatter", "attributes": {"id": "45b7c329-236b-4c4f-afc1-51e67ec58515", "doc": null, "tags": []}}, {"id": "0178af25-ee41-479a-b40d-918902fa7616", "type": "Range1d", "attributes": {"end": 2.74, "start": -0.13999999999999999, "id": "0178af25-ee41-479a-b40d-918902fa7616", "doc": null, "tags": []}}, {"id": "66a8f3b7-9bbb-4e2e-9245-a98d27e286dd", "type": "Circle", "attributes": {"y": {"field": "y_virginica", "units": "data"}, "fill_alpha": {"value": 0.2, "units": "data"}, "id": "66a8f3b7-9bbb-4e2e-9245-a98d27e286dd", "fill_color": {"value": "#f22c40"}, "line_color": {"value": "#f22c40"}, "size": {"value": 10, "units": "screen"}, "x": {"field": "x_virginica", "units": "data"}, "doc": null, "tags": [], "line_alpha": {"value": 1.0, "units": "data"}}}, {"id": "0db8ee13-4dd4-4836-931c-5eb67b257037", "type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "0db8ee13-4dd4-4836-931c-5eb67b257037", "plot": {"id": "9112c5d3-b063-4b0a-bd33-38f7491fe608", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "c7643e73-768f-4785-bc3e-5c54f33009fa", "type": "Legend", "attributes": {"legends": [["virginica", [{"id": "d686374a-9b9a-4d34-85d3-8f7001d514e4", "type": "GlyphRenderer"}]], ["versicolor", [{"id": "ffec69fa-62a7-4133-8b49-709df8c6a94c", "type": "GlyphRenderer"}]], ["setosa", [{"id": "a848a99a-32c4-4ddd-9097-437424fa7b0a", "type": "GlyphRenderer"}]]], "orientation": "top_left", "id": "c7643e73-768f-4785-bc3e-5c54f33009fa", "plot": {"id": "9112c5d3-b063-4b0a-bd33-38f7491fe608", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "922b7b1b-8bc8-48d1-bdf5-0a87900a8cb5", "type": "LinearAxis", "attributes": {"id": "922b7b1b-8bc8-48d1-bdf5-0a87900a8cb5", "plot": {"id": "9112c5d3-b063-4b0a-bd33-38f7491fe608", "type": "Plot", "subtype": "Chart"}, "formatter": {"id": "3b5214a9-8075-4172-9e46-ec225e4ca52d", "type": "BasicTickFormatter"}, "axis_label": "petal length", "ticker": {"id": "eee260c7-1676-4da6-8cc7-6e2b2a2352c3", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "2df4f8e5-48d2-4c48-9220-0a94102a8459", "type": "Grid", "attributes": {"id": "2df4f8e5-48d2-4c48-9220-0a94102a8459", "plot": {"id": "9112c5d3-b063-4b0a-bd33-38f7491fe608", "type": "Plot", "subtype": "Chart"}, "dimension": 1, "ticker": {"id": "94a4ba05-bbed-4b11-ae24-f9882e8b6008", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "5bdc4d58-0d59-4264-b640-629f7b912dd2", "type": "Range1d", "attributes": {"end": 7.49, "start": 0.4099999999999999, "id": "5bdc4d58-0d59-4264-b640-629f7b912dd2", "doc": null, "tags": []}}, {"id": "896b16e5-8e43-4b29-a649-a79ea2a3612c", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"y_virginica": [2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8], "x_virginica": [6.0, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5.0, 5.1, 5.3, 5.5, 6.7, 6.9, 5.0, 5.7, 4.9, 6.7, 4.9, 5.7, 6.0, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5.0, 5.2, 5.4, 5.1], "x_versicolor": [4.7, 4.5, 4.9, 4.0, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4.0, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4.0, 4.9, 4.7, 4.3, 4.4, 4.8, 5.0, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4.0, 4.4, 4.6, 4.0, 3.3, 4.2, 4.2, 4.2, 4.3, 3.0, 4.1], "x_setosa": [1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1.0, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4], "y_versicolor": [1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3], "y_setosa": [0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2]}, "column_names": ["y_virginica", "x_virginica", "x_versicolor", "x_setosa", "y_versicolor", "y_setosa"], "id": "896b16e5-8e43-4b29-a649-a79ea2a3612c", "doc": null, "tags": []}}, {"id": "c853caf0-5bf2-4361-939d-0b0065ddad7d", "type": "LinearAxis", "attributes": {"id": "c853caf0-5bf2-4361-939d-0b0065ddad7d", "plot": {"id": "9112c5d3-b063-4b0a-bd33-38f7491fe608", "type": "Plot", "subtype": "Chart"}, "formatter": {"id": "45b7c329-236b-4c4f-afc1-51e67ec58515", "type": "BasicTickFormatter"}, "axis_label": "petal width", "ticker": {"id": "94a4ba05-bbed-4b11-ae24-f9882e8b6008", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "d686374a-9b9a-4d34-85d3-8f7001d514e4", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "896b16e5-8e43-4b29-a649-a79ea2a3612c", "type": "ColumnDataSource"}, "id": "d686374a-9b9a-4d34-85d3-8f7001d514e4", "glyph": {"id": "66a8f3b7-9bbb-4e2e-9245-a98d27e286dd", "type": "Circle"}, "tags": [], "doc": null}}, {"id": "3b5214a9-8075-4172-9e46-ec225e4ca52d", "type": "BasicTickFormatter", "attributes": {"id": "3b5214a9-8075-4172-9e46-ec225e4ca52d", "doc": null, "tags": []}}, {"id": "a848a99a-32c4-4ddd-9097-437424fa7b0a", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "896b16e5-8e43-4b29-a649-a79ea2a3612c", "type": "ColumnDataSource"}, "id": "a848a99a-32c4-4ddd-9097-437424fa7b0a", "glyph": {"id": "2332841d-2706-47be-a137-2801550bd075", "type": "Circle"}, "tags": [], "doc": null}}, {"id": "192d9340-feda-4b3b-b6f8-6a958c42cd20", "type": "ToolEvents", "attributes": {"geometries": [], "id": "192d9340-feda-4b3b-b6f8-6a958c42cd20", "doc": null, "tags": []}}, {"id": "c48f8556-25fa-4927-9840-29d75169068f", "type": "Circle", "attributes": {"y": {"field": "y_versicolor", "units": "data"}, "fill_alpha": {"value": 0.2, "units": "data"}, "id": "c48f8556-25fa-4927-9840-29d75169068f", "fill_color": {"value": "#5ab738"}, "line_color": {"value": "#5ab738"}, "size": {"value": 10, "units": "screen"}, "x": {"field": "x_versicolor", "units": "data"}, "doc": null, "tags": [], "line_alpha": {"value": 1.0, "units": "data"}}}, {"id": "fa75654a-0fd4-4d1b-8579-f0d4a51c9ef2", "type": "PreviewSaveTool", "attributes": {"plot": {"id": "9112c5d3-b063-4b0a-bd33-38f7491fe608", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": [], "id": "fa75654a-0fd4-4d1b-8579-f0d4a51c9ef2"}}, {"id": "321b1fae-6d7d-4082-bf22-996f1c4c192a", "type": "Grid", "attributes": {"id": "321b1fae-6d7d-4082-bf22-996f1c4c192a", "plot": {"id": "9112c5d3-b063-4b0a-bd33-38f7491fe608", "type": "Plot", "subtype": "Chart"}, "dimension": 0, "ticker": {"id": "eee260c7-1676-4da6-8cc7-6e2b2a2352c3", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "ffec69fa-62a7-4133-8b49-709df8c6a94c", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "896b16e5-8e43-4b29-a649-a79ea2a3612c", "type": "ColumnDataSource"}, "id": "ffec69fa-62a7-4133-8b49-709df8c6a94c", "glyph": {"id": "c48f8556-25fa-4927-9840-29d75169068f", "type": "Circle"}, "tags": [], "doc": null}}, {"id": "69ef3ae5-7770-4318-bd61-0d00ec3aff57", "type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "69ef3ae5-7770-4318-bd61-0d00ec3aff57", "plot": {"id": "9112c5d3-b063-4b0a-bd33-38f7491fe608", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "2332841d-2706-47be-a137-2801550bd075", "type": "Circle", "attributes": {"y": {"field": "y_setosa", "units": "data"}, "fill_alpha": {"value": 0.2, "units": "data"}, "id": "2332841d-2706-47be-a137-2801550bd075", "fill_color": {"value": "#407ee7"}, "line_color": {"value": "#407ee7"}, "size": {"value": 10, "units": "screen"}, "x": {"field": "x_setosa", "units": "data"}, "doc": null, "tags": [], "line_alpha": {"value": 1.0, "units": "data"}}}, {"id": "2e84bf36-5cdb-4728-a85b-b6f5a2299849", "type": "ResizeTool", "attributes": {"plot": {"id": "9112c5d3-b063-4b0a-bd33-38f7491fe608", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": [], "id": "2e84bf36-5cdb-4728-a85b-b6f5a2299849"}}, {"id": "e2eb48e6-8dac-47da-930e-c1e4c2d7af7a", "type": "PanTool", "attributes": {"dimensions": ["width", "height"], "id": "e2eb48e6-8dac-47da-930e-c1e4c2d7af7a", "plot": {"id": "9112c5d3-b063-4b0a-bd33-38f7491fe608", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "94a4ba05-bbed-4b11-ae24-f9882e8b6008", "type": "BasicTicker", "attributes": {"id": "94a4ba05-bbed-4b11-ae24-f9882e8b6008", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "eee260c7-1676-4da6-8cc7-6e2b2a2352c3", "type": "BasicTicker", "attributes": {"id": "eee260c7-1676-4da6-8cc7-6e2b2a2352c3", "mantissas": [2, 5, 10], "tags": [], "doc": null}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("f8881ff1-d2d0-4b39-9641-d154ae179d5c", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("f8881ff1-d2d0-4b39-9641-d154ae179d5c", all_models);
    });
  }

}(this));