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

  var elt = document.getElementById("ee0180cb-e1b9-4ad1-8485-f0e92f586a3a");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'ee0180cb-e1b9-4ad1-8485-f0e92f586a3a' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "861435f9-e349-4f28-a1c4-522bf537f92e", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "f65fe050-1e69-4a44-925b-e9216f5c217b", "type": "Ray"}, "name": null, "data_source": {"id": "118af5bd-c8df-41e7-bbd8-6e2ccf0b85f4", "type": "ColumnDataSource"}, "id": "861435f9-e349-4f28-a1c4-522bf537f92e", "glyph": {"id": "39f27fea-f6d9-4a45-aa1e-a6cd3b44c450", "type": "Ray"}, "tags": [], "doc": null}}, {"id": "118af5bd-c8df-41e7-bbd8-6e2ccf0b85f4", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"y": [1, 2, 3], "x": [1, 2, 3]}, "column_names": ["x", "y"], "id": "118af5bd-c8df-41e7-bbd8-6e2ccf0b85f4", "doc": null, "tags": []}}, {"id": "274605cd-632a-419d-9495-7a0d4bdb77a7", "type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "274605cd-632a-419d-9495-7a0d4bdb77a7", "plot": {"id": "f5b4fac2-bacd-433b-93e5-d92e49029027", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "fa38c81a-c9be-4094-abc3-9d79c01a9f0b", "type": "ToolEvents", "attributes": {"geometries": [], "id": "fa38c81a-c9be-4094-abc3-9d79c01a9f0b", "doc": null, "tags": []}}, {"id": "f5b4fac2-bacd-433b-93e5-d92e49029027", "type": "Plot", "subtype": "Figure", "attributes": {"tool_events": {"id": "fa38c81a-c9be-4094-abc3-9d79c01a9f0b", "type": "ToolEvents"}, "above": [], "extra_y_ranges": {}, "renderers": [{"id": "b56e5d7c-7b00-4061-b4bb-2094b3a3a9af", "type": "LinearAxis"}, {"id": "9b2b6826-4a56-433c-aa43-9c4ee8a00756", "type": "Grid"}, {"id": "01abb8fa-307f-4958-93d3-60ddcd3ecb4a", "type": "LinearAxis"}, {"id": "bb235d00-0049-433a-a645-8c2381ffa585", "type": "Grid"}, {"id": "861435f9-e349-4f28-a1c4-522bf537f92e", "type": "GlyphRenderer"}], "id": "f5b4fac2-bacd-433b-93e5-d92e49029027", "extra_x_ranges": {}, "doc": null, "below": [{"id": "b56e5d7c-7b00-4061-b4bb-2094b3a3a9af", "type": "LinearAxis"}], "right": [], "x_range": {"id": "1b2220c7-6e16-42a7-8e1d-ba4f8e447304", "type": "DataRange1d"}, "left": [{"id": "01abb8fa-307f-4958-93d3-60ddcd3ecb4a", "type": "LinearAxis"}], "tools": [{"id": "baa0e8b6-6661-4356-b153-fc7a1ed1a6c3", "type": "PanTool"}, {"id": "274605cd-632a-419d-9495-7a0d4bdb77a7", "type": "WheelZoomTool"}, {"id": "3d084bc7-a372-49f9-b6dc-4c54dbd7bbe1", "type": "BoxZoomTool"}, {"id": "20200445-0e1a-4539-9055-ef28c111bb83", "type": "PreviewSaveTool"}, {"id": "892b4d5e-3368-4e43-8612-843b5796e765", "type": "ResizeTool"}, {"id": "ff257e29-1528-48b2-896a-0ae497952244", "type": "ResetTool"}], "plot_width": 300, "plot_height": 300, "y_range": {"id": "960e4a79-e579-44af-bc48-086de67f7e9e", "type": "DataRange1d"}, "tags": []}}, {"id": "9b2b6826-4a56-433c-aa43-9c4ee8a00756", "type": "Grid", "attributes": {"id": "9b2b6826-4a56-433c-aa43-9c4ee8a00756", "plot": {"id": "f5b4fac2-bacd-433b-93e5-d92e49029027", "type": "Plot", "subtype": "Figure"}, "dimension": 0, "ticker": {"id": "d29def77-d11f-4e22-bdbd-fa518bc20d28", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "1b2220c7-6e16-42a7-8e1d-ba4f8e447304", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "118af5bd-c8df-41e7-bbd8-6e2ccf0b85f4", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "1b2220c7-6e16-42a7-8e1d-ba4f8e447304", "doc": null, "tags": []}}, {"id": "02073674-0e6a-45e6-acda-20f09b37c157", "type": "BasicTickFormatter", "attributes": {"id": "02073674-0e6a-45e6-acda-20f09b37c157", "doc": null, "tags": []}}, {"id": "960e4a79-e579-44af-bc48-086de67f7e9e", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "118af5bd-c8df-41e7-bbd8-6e2ccf0b85f4", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "960e4a79-e579-44af-bc48-086de67f7e9e", "doc": null, "tags": []}}, {"id": "d29def77-d11f-4e22-bdbd-fa518bc20d28", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "d29def77-d11f-4e22-bdbd-fa518bc20d28", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "baa0e8b6-6661-4356-b153-fc7a1ed1a6c3", "type": "PanTool", "attributes": {"dimensions": ["width", "height"], "id": "baa0e8b6-6661-4356-b153-fc7a1ed1a6c3", "plot": {"id": "f5b4fac2-bacd-433b-93e5-d92e49029027", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "f65fe050-1e69-4a44-925b-e9216f5c217b", "type": "Ray", "attributes": {"y": {"field": "y", "units": "data"}, "angle": {"value": -0.7, "units": "data"}, "length": {"value": 45, "units": "screen"}, "x": {"field": "x", "units": "data"}, "doc": null, "line_width": {"value": 2, "units": "data"}, "id": "f65fe050-1e69-4a44-925b-e9216f5c217b", "line_color": {"value": "#1f77b4"}, "tags": [], "line_alpha": {"value": 0.1, "units": "data"}}}, {"id": "b56e5d7c-7b00-4061-b4bb-2094b3a3a9af", "type": "LinearAxis", "attributes": {"id": "b56e5d7c-7b00-4061-b4bb-2094b3a3a9af", "formatter": {"id": "02073674-0e6a-45e6-acda-20f09b37c157", "type": "BasicTickFormatter"}, "plot": {"id": "f5b4fac2-bacd-433b-93e5-d92e49029027", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "d29def77-d11f-4e22-bdbd-fa518bc20d28", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "3d084bc7-a372-49f9-b6dc-4c54dbd7bbe1", "type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "3d084bc7-a372-49f9-b6dc-4c54dbd7bbe1", "plot": {"id": "f5b4fac2-bacd-433b-93e5-d92e49029027", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "83a40a2c-8463-4ae3-975c-84590bead4c2", "type": "BasicTickFormatter", "attributes": {"id": "83a40a2c-8463-4ae3-975c-84590bead4c2", "doc": null, "tags": []}}, {"id": "01abb8fa-307f-4958-93d3-60ddcd3ecb4a", "type": "LinearAxis", "attributes": {"id": "01abb8fa-307f-4958-93d3-60ddcd3ecb4a", "formatter": {"id": "83a40a2c-8463-4ae3-975c-84590bead4c2", "type": "BasicTickFormatter"}, "plot": {"id": "f5b4fac2-bacd-433b-93e5-d92e49029027", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "b87e280e-0c08-4ecd-a3a7-5f6d4333778a", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "892b4d5e-3368-4e43-8612-843b5796e765", "type": "ResizeTool", "attributes": {"plot": {"id": "f5b4fac2-bacd-433b-93e5-d92e49029027", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "892b4d5e-3368-4e43-8612-843b5796e765"}}, {"id": "bb235d00-0049-433a-a645-8c2381ffa585", "type": "Grid", "attributes": {"id": "bb235d00-0049-433a-a645-8c2381ffa585", "plot": {"id": "f5b4fac2-bacd-433b-93e5-d92e49029027", "type": "Plot", "subtype": "Figure"}, "dimension": 1, "ticker": {"id": "b87e280e-0c08-4ecd-a3a7-5f6d4333778a", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "ff257e29-1528-48b2-896a-0ae497952244", "type": "ResetTool", "attributes": {"plot": {"id": "f5b4fac2-bacd-433b-93e5-d92e49029027", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "ff257e29-1528-48b2-896a-0ae497952244"}}, {"id": "39f27fea-f6d9-4a45-aa1e-a6cd3b44c450", "type": "Ray", "attributes": {"y": {"field": "y", "units": "data"}, "angle": {"value": -0.7, "units": "data"}, "length": {"value": 45, "units": "screen"}, "x": {"field": "x", "units": "data"}, "doc": null, "line_alpha": {"value": 1.0, "units": "data"}, "id": "39f27fea-f6d9-4a45-aa1e-a6cd3b44c450", "line_color": {"value": "#FB8072"}, "tags": [], "line_width": {"value": 2, "units": "data"}}}, {"id": "20200445-0e1a-4539-9055-ef28c111bb83", "type": "PreviewSaveTool", "attributes": {"plot": {"id": "f5b4fac2-bacd-433b-93e5-d92e49029027", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "20200445-0e1a-4539-9055-ef28c111bb83"}}, {"id": "b87e280e-0c08-4ecd-a3a7-5f6d4333778a", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "b87e280e-0c08-4ecd-a3a7-5f6d4333778a", "mantissas": [2, 5, 10], "tags": [], "doc": null}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("ee0180cb-e1b9-4ad1-8485-f0e92f586a3a", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("ee0180cb-e1b9-4ad1-8485-f0e92f586a3a", all_models);
    });
  }

}(this));