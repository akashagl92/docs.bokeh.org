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

  var elt = document.getElementById("f6ea19bb-aa40-4e5c-8bdc-11e0e8420427");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'f6ea19bb-aa40-4e5c-8bdc-11e0e8420427' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "1a937ad7-565c-42a0-8dc0-80d311e9aa45", "type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "1a937ad7-565c-42a0-8dc0-80d311e9aa45", "plot": {"id": "200f6d5e-56f5-4dd7-ac4a-d4ddd18eaa9b", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "200f6d5e-56f5-4dd7-ac4a-d4ddd18eaa9b", "type": "Plot", "subtype": "Figure", "attributes": {"tool_events": {"id": "08869a5d-7dc7-498f-8e76-718ca9cb1edc", "type": "ToolEvents"}, "above": [], "extra_y_ranges": {}, "renderers": [{"id": "5458295e-2b12-44df-ab39-edc587e67352", "type": "LinearAxis"}, {"id": "09055cbe-0ea3-454d-b3e9-362f69c2b848", "type": "Grid"}, {"id": "bce594be-8f5d-4cad-aee8-2526b098b346", "type": "LinearAxis"}, {"id": "62da3965-ba6c-4ed1-8722-dfd79eea8805", "type": "Grid"}, {"id": "3bd343a0-f46a-488f-85cf-614e6014f21b", "type": "GlyphRenderer"}], "id": "200f6d5e-56f5-4dd7-ac4a-d4ddd18eaa9b", "extra_x_ranges": {}, "doc": null, "below": [{"id": "5458295e-2b12-44df-ab39-edc587e67352", "type": "LinearAxis"}], "right": [], "x_range": {"id": "dd47b5db-d2a4-495f-97bf-886a57ec9f20", "type": "DataRange1d"}, "left": [{"id": "bce594be-8f5d-4cad-aee8-2526b098b346", "type": "LinearAxis"}], "tools": [{"id": "463bd24b-eac2-4314-b31b-a9fffd968367", "type": "PanTool"}, {"id": "1a937ad7-565c-42a0-8dc0-80d311e9aa45", "type": "WheelZoomTool"}, {"id": "23a27d0d-1cc0-4129-9b2e-5fe2ba96a797", "type": "BoxZoomTool"}, {"id": "902c8c6f-0dc5-495f-9bba-cd0cfd980864", "type": "PreviewSaveTool"}, {"id": "42492e2c-1f2f-4d5f-a420-913f16ecbdb0", "type": "ResizeTool"}, {"id": "f045df89-e66b-4cff-8673-6b745d263eac", "type": "ResetTool"}], "plot_width": 300, "plot_height": 300, "y_range": {"id": "ef67ba1f-745a-41cb-a2b4-e5aca012b934", "type": "DataRange1d"}, "tags": []}}, {"id": "f045df89-e66b-4cff-8673-6b745d263eac", "type": "ResetTool", "attributes": {"plot": {"id": "200f6d5e-56f5-4dd7-ac4a-d4ddd18eaa9b", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "f045df89-e66b-4cff-8673-6b745d263eac"}}, {"id": "463bd24b-eac2-4314-b31b-a9fffd968367", "type": "PanTool", "attributes": {"dimensions": ["width", "height"], "id": "463bd24b-eac2-4314-b31b-a9fffd968367", "plot": {"id": "200f6d5e-56f5-4dd7-ac4a-d4ddd18eaa9b", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "30a6d2db-c660-4b62-af1c-82ed7e2be2f0", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "30a6d2db-c660-4b62-af1c-82ed7e2be2f0", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "dd47b5db-d2a4-495f-97bf-886a57ec9f20", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "a0424dd5-899e-4aee-aa05-5ca4848e4358", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "dd47b5db-d2a4-495f-97bf-886a57ec9f20", "doc": null, "tags": []}}, {"id": "902c8c6f-0dc5-495f-9bba-cd0cfd980864", "type": "PreviewSaveTool", "attributes": {"plot": {"id": "200f6d5e-56f5-4dd7-ac4a-d4ddd18eaa9b", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "902c8c6f-0dc5-495f-9bba-cd0cfd980864"}}, {"id": "bce594be-8f5d-4cad-aee8-2526b098b346", "type": "LinearAxis", "attributes": {"id": "bce594be-8f5d-4cad-aee8-2526b098b346", "formatter": {"id": "b2cd6d9a-c7d3-401c-aea0-b62ef85f771a", "type": "BasicTickFormatter"}, "plot": {"id": "200f6d5e-56f5-4dd7-ac4a-d4ddd18eaa9b", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "30a6d2db-c660-4b62-af1c-82ed7e2be2f0", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "c2c6cbbe-2f0c-49ab-8852-ab1e869e06fa", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "c2c6cbbe-2f0c-49ab-8852-ab1e869e06fa", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "3b85c929-e335-4271-aa73-3b1a4fdb9f0e", "type": "BasicTickFormatter", "attributes": {"id": "3b85c929-e335-4271-aa73-3b1a4fdb9f0e", "doc": null, "tags": []}}, {"id": "b2cd6d9a-c7d3-401c-aea0-b62ef85f771a", "type": "BasicTickFormatter", "attributes": {"id": "b2cd6d9a-c7d3-401c-aea0-b62ef85f771a", "doc": null, "tags": []}}, {"id": "08869a5d-7dc7-498f-8e76-718ca9cb1edc", "type": "ToolEvents", "attributes": {"geometries": [], "id": "08869a5d-7dc7-498f-8e76-718ca9cb1edc", "doc": null, "tags": []}}, {"id": "a031489a-25dc-493f-b927-ff231b07c4a5", "type": "Annulus", "attributes": {"y": {"field": "y", "units": "data"}, "fill_alpha": {"value": 0.1, "units": "data"}, "inner_radius": {"value": 0.2, "units": "data"}, "doc": null, "x": {"field": "x", "units": "data"}, "tags": [], "outer_radius": {"value": 0.5, "units": "data"}, "id": "a031489a-25dc-493f-b927-ff231b07c4a5", "line_color": {"value": "#1f77b4"}, "fill_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1, "units": "data"}}}, {"id": "42492e2c-1f2f-4d5f-a420-913f16ecbdb0", "type": "ResizeTool", "attributes": {"plot": {"id": "200f6d5e-56f5-4dd7-ac4a-d4ddd18eaa9b", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "42492e2c-1f2f-4d5f-a420-913f16ecbdb0"}}, {"id": "62da3965-ba6c-4ed1-8722-dfd79eea8805", "type": "Grid", "attributes": {"id": "62da3965-ba6c-4ed1-8722-dfd79eea8805", "plot": {"id": "200f6d5e-56f5-4dd7-ac4a-d4ddd18eaa9b", "type": "Plot", "subtype": "Figure"}, "dimension": 1, "ticker": {"id": "30a6d2db-c660-4b62-af1c-82ed7e2be2f0", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "ef67ba1f-745a-41cb-a2b4-e5aca012b934", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "a0424dd5-899e-4aee-aa05-5ca4848e4358", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "ef67ba1f-745a-41cb-a2b4-e5aca012b934", "doc": null, "tags": []}}, {"id": "3bd343a0-f46a-488f-85cf-614e6014f21b", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "a031489a-25dc-493f-b927-ff231b07c4a5", "type": "Annulus"}, "name": null, "data_source": {"id": "a0424dd5-899e-4aee-aa05-5ca4848e4358", "type": "ColumnDataSource"}, "id": "3bd343a0-f46a-488f-85cf-614e6014f21b", "glyph": {"id": "894c5f8a-eccb-4fb4-aa08-3e064f221fa7", "type": "Annulus"}, "tags": [], "doc": null}}, {"id": "5458295e-2b12-44df-ab39-edc587e67352", "type": "LinearAxis", "attributes": {"id": "5458295e-2b12-44df-ab39-edc587e67352", "formatter": {"id": "3b85c929-e335-4271-aa73-3b1a4fdb9f0e", "type": "BasicTickFormatter"}, "plot": {"id": "200f6d5e-56f5-4dd7-ac4a-d4ddd18eaa9b", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "c2c6cbbe-2f0c-49ab-8852-ab1e869e06fa", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "09055cbe-0ea3-454d-b3e9-362f69c2b848", "type": "Grid", "attributes": {"id": "09055cbe-0ea3-454d-b3e9-362f69c2b848", "plot": {"id": "200f6d5e-56f5-4dd7-ac4a-d4ddd18eaa9b", "type": "Plot", "subtype": "Figure"}, "dimension": 0, "ticker": {"id": "c2c6cbbe-2f0c-49ab-8852-ab1e869e06fa", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "a0424dd5-899e-4aee-aa05-5ca4848e4358", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"y": [1, 2, 3], "x": [1, 2, 3]}, "column_names": ["x", "y"], "id": "a0424dd5-899e-4aee-aa05-5ca4848e4358", "doc": null, "tags": []}}, {"id": "894c5f8a-eccb-4fb4-aa08-3e064f221fa7", "type": "Annulus", "attributes": {"fill_alpha": {"value": 1.0, "units": "data"}, "y": {"field": "y", "units": "data"}, "inner_radius": {"value": 0.2, "units": "data"}, "doc": null, "x": {"field": "x", "units": "data"}, "tags": [], "outer_radius": {"value": 0.5, "units": "data"}, "id": "894c5f8a-eccb-4fb4-aa08-3e064f221fa7", "line_color": {"value": "#7FC97F"}, "fill_color": {"value": "#7FC97F"}, "line_alpha": {"value": 1.0, "units": "data"}}}, {"id": "23a27d0d-1cc0-4129-9b2e-5fe2ba96a797", "type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "23a27d0d-1cc0-4129-9b2e-5fe2ba96a797", "plot": {"id": "200f6d5e-56f5-4dd7-ac4a-d4ddd18eaa9b", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("f6ea19bb-aa40-4e5c-8bdc-11e0e8420427", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("f6ea19bb-aa40-4e5c-8bdc-11e0e8420427", all_models);
    });
  }

}(this));