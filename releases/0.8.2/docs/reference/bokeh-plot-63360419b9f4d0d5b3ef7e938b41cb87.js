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

  var elt = document.getElementById("c103efa5-7806-411f-8233-f072f3530dbf");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c103efa5-7806-411f-8233-f072f3530dbf' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "56165cbe-0c64-402e-a642-93ce1fcb999f", "type": "Plot", "attributes": {"tool_events": {"id": "774243d7-ddd0-46f6-a45d-ebc931bd3053", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "5bb5d4ea-2f84-4e6d-8f7e-f74ffedefd6e", "type": "GlyphRenderer"}, {"id": "82381dbe-8012-419a-ae10-864745f86d0e", "type": "GlyphRenderer"}, {"id": "68e8632b-11f9-4c37-9829-910bbcdff74c", "type": "GlyphRenderer"}, {"id": "64bf48f3-1d14-4678-892c-0c663c2c6bca", "type": "GlyphRenderer"}, {"id": "3ebe3784-6144-459f-906b-d33a02599d9d", "type": "GlyphRenderer"}, {"id": "6bceb28c-b312-4ffb-8f09-9b5d5e8c4736", "type": "GlyphRenderer"}], "left": [], "v_symmetry": false, "x_range": {"id": "5ba84bc5-7fdb-4262-aac8-57c7e7ed94f5", "type": "Range1d"}, "extra_x_ranges": {}, "tools": [], "id": "56165cbe-0c64-402e-a642-93ce1fcb999f", "y_range": {"id": "b0709a0b-1d2a-46d9-9cf4-f08e96390e30", "type": "Range1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "e0d8a3f8-35a0-453c-8404-f15f0e5f5cd8", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {}, "column_names": [], "id": "e0d8a3f8-35a0-453c-8404-f15f0e5f5cd8", "doc": null, "tags": []}}, {"id": "46fe08dc-8349-46f3-b038-0e79a2daa00f", "type": "Gear", "attributes": {"doc": null, "teeth": {"value": 12, "units": "data"}, "y": {"value": 0.0, "units": "data"}, "id": "46fe08dc-8349-46f3-b038-0e79a2daa00f", "fill_color": {"value": "#d0d0e8"}, "angle": {"value": 0.2617993877991494, "units": "data"}, "x": {"value": -90.0, "units": "data"}, "line_color": {"value": "#606060"}, "tags": [], "module": {"value": 5, "units": "data"}}}, {"id": "2a877424-7874-4f2f-9665-55e43f4591dd", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {}, "column_names": [], "id": "2a877424-7874-4f2f-9665-55e43f4591dd", "doc": null, "tags": []}}, {"id": "4c78d9c2-da80-4927-a9f3-e6079fe170d4", "type": "Gear", "attributes": {"doc": null, "teeth": {"value": 12, "units": "data"}, "y": {"value": 0.0, "units": "data"}, "id": "4c78d9c2-da80-4927-a9f3-e6079fe170d4", "fill_color": {"value": "#d0d0e8"}, "angle": {"value": 0.2617993877991494, "units": "data"}, "x": {"value": 90.0, "units": "data"}, "line_color": {"value": "#606060"}, "tags": [], "module": {"value": 5, "units": "data"}}}, {"id": "5ba84bc5-7fdb-4262-aac8-57c7e7ed94f5", "type": "Range1d", "attributes": {"end": 150, "start": -150, "id": "5ba84bc5-7fdb-4262-aac8-57c7e7ed94f5", "doc": null, "tags": []}}, {"id": "b0709a0b-1d2a-46d9-9cf4-f08e96390e30", "type": "Range1d", "attributes": {"end": 150, "start": -150, "id": "b0709a0b-1d2a-46d9-9cf4-f08e96390e30", "doc": null, "tags": []}}, {"id": "3ebe3784-6144-459f-906b-d33a02599d9d", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "7baf14a3-1d30-44e0-8705-b34949503a0e", "type": "ColumnDataSource"}, "id": "3ebe3784-6144-459f-906b-d33a02599d9d", "glyph": {"id": "46fe08dc-8349-46f3-b038-0e79a2daa00f", "type": "Gear"}, "tags": [], "doc": null}}, {"id": "05837070-224b-4b2c-9f86-8d77d78e2693", "type": "Gear", "attributes": {"doc": null, "teeth": {"value": 12, "units": "data"}, "y": {"value": -90.0, "units": "data"}, "id": "05837070-224b-4b2c-9f86-8d77d78e2693", "fill_color": {"value": "#d0d0e8"}, "angle": {"value": 0.2617993877991494, "units": "data"}, "x": {"value": 0.0, "units": "data"}, "line_color": {"value": "#606060"}, "tags": [], "module": {"value": 5, "units": "data"}}}, {"id": "625ee1af-57f0-4d8f-842f-981863999cfb", "type": "Gear", "attributes": {"tags": [], "module": {"value": 5, "units": "data"}, "y": {"value": 0, "units": "data"}, "angle": {"value": 0, "units": "data"}, "doc": null, "x": {"value": 0, "units": "data"}, "fill_color": {"value": "#ddd0dd"}, "id": "625ee1af-57f0-4d8f-842f-981863999cfb", "line_color": {"value": "#606060"}, "internal": {"value": true, "units": "data"}, "teeth": {"value": 48, "units": "data"}}}, {"id": "6bceb28c-b312-4ffb-8f09-9b5d5e8c4736", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "8d18a9d6-3ce3-4608-a98b-bc13bbe4d001", "type": "ColumnDataSource"}, "id": "6bceb28c-b312-4ffb-8f09-9b5d5e8c4736", "glyph": {"id": "05837070-224b-4b2c-9f86-8d77d78e2693", "type": "Gear"}, "tags": [], "doc": null}}, {"id": "237a6f12-d091-40c7-b09f-02a9d0f447ea", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {}, "column_names": [], "id": "237a6f12-d091-40c7-b09f-02a9d0f447ea", "doc": null, "tags": []}}, {"id": "d95c30ce-7ff5-4dc8-bfff-3fb2361a1675", "type": "Gear", "attributes": {"doc": null, "teeth": {"value": 24, "units": "data"}, "y": {"value": 0, "units": "data"}, "id": "d95c30ce-7ff5-4dc8-bfff-3fb2361a1675", "fill_color": {"value": "#ddddd0"}, "angle": {"value": 0, "units": "data"}, "x": {"value": 0, "units": "data"}, "line_color": {"value": "#606060"}, "tags": [], "module": {"value": 5, "units": "data"}}}, {"id": "64bf48f3-1d14-4678-892c-0c663c2c6bca", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "e0d8a3f8-35a0-453c-8404-f15f0e5f5cd8", "type": "ColumnDataSource"}, "id": "64bf48f3-1d14-4678-892c-0c663c2c6bca", "glyph": {"id": "21ea6069-e2aa-4b71-84d9-c3a326905f3a", "type": "Gear"}, "tags": [], "doc": null}}, {"id": "8d18a9d6-3ce3-4608-a98b-bc13bbe4d001", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {}, "column_names": [], "id": "8d18a9d6-3ce3-4608-a98b-bc13bbe4d001", "doc": null, "tags": []}}, {"id": "774243d7-ddd0-46f6-a45d-ebc931bd3053", "type": "ToolEvents", "attributes": {"geometries": [], "id": "774243d7-ddd0-46f6-a45d-ebc931bd3053", "doc": null, "tags": []}}, {"id": "5bb5d4ea-2f84-4e6d-8f7e-f74ffedefd6e", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "9a75b868-98df-40db-bd39-da228fd85404", "type": "ColumnDataSource"}, "id": "5bb5d4ea-2f84-4e6d-8f7e-f74ffedefd6e", "glyph": {"id": "625ee1af-57f0-4d8f-842f-981863999cfb", "type": "Gear"}, "tags": [], "doc": null}}, {"id": "9a75b868-98df-40db-bd39-da228fd85404", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {}, "column_names": [], "id": "9a75b868-98df-40db-bd39-da228fd85404", "doc": null, "tags": []}}, {"id": "68e8632b-11f9-4c37-9829-910bbcdff74c", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "237a6f12-d091-40c7-b09f-02a9d0f447ea", "type": "ColumnDataSource"}, "id": "68e8632b-11f9-4c37-9829-910bbcdff74c", "glyph": {"id": "4c78d9c2-da80-4927-a9f3-e6079fe170d4", "type": "Gear"}, "tags": [], "doc": null}}, {"id": "82381dbe-8012-419a-ae10-864745f86d0e", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "2a877424-7874-4f2f-9665-55e43f4591dd", "type": "ColumnDataSource"}, "id": "82381dbe-8012-419a-ae10-864745f86d0e", "glyph": {"id": "d95c30ce-7ff5-4dc8-bfff-3fb2361a1675", "type": "Gear"}, "tags": [], "doc": null}}, {"id": "21ea6069-e2aa-4b71-84d9-c3a326905f3a", "type": "Gear", "attributes": {"doc": null, "teeth": {"value": 12, "units": "data"}, "y": {"value": 90.0, "units": "data"}, "id": "21ea6069-e2aa-4b71-84d9-c3a326905f3a", "fill_color": {"value": "#d0d0e8"}, "angle": {"value": 0.2617993877991494, "units": "data"}, "x": {"value": 0.0, "units": "data"}, "line_color": {"value": "#606060"}, "tags": [], "module": {"value": 5, "units": "data"}}}, {"id": "7baf14a3-1d30-44e0-8705-b34949503a0e", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {}, "column_names": [], "id": "7baf14a3-1d30-44e0-8705-b34949503a0e", "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("c103efa5-7806-411f-8233-f072f3530dbf", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("c103efa5-7806-411f-8233-f072f3530dbf", all_models);
    });
  }

}(this));