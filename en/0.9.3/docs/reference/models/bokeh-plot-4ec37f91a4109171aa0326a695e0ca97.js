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
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.9.3.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.9.3.min.js"

  var elt = document.getElementById("7e41f492-6d8d-413e-ba66-cfc4e9eb4c67");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '7e41f492-6d8d-413e-ba66-cfc4e9eb4c67' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "2cef59c7-37c8-4175-aeb5-e851dd15c87e"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "acadaa8f-d85d-43e6-8919-36f984c7980f"}, "plot": {"type": "Plot", "id": "6ffa8590-da13-426a-b1e5-7972237ea6bd"}, "id": "832ef5be-f7df-441b-924f-bcfb2d9dddc7"}, "id": "832ef5be-f7df-441b-924f-bcfb2d9dddc7"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "b4b04a7c-7ca8-4a94-b507-3e60b05c4642"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "8f27e40a-8f87-4e28-a5f5-bcce6b80da10"}, "plot": {"type": "Plot", "id": "6ffa8590-da13-426a-b1e5-7972237ea6bd"}, "id": "9518d6c1-e8f2-43e7-abe0-d0032ad106fb"}, "id": "9518d6c1-e8f2-43e7-abe0-d0032ad106fb"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "acadaa8f-d85d-43e6-8919-36f984c7980f", "tags": []}, "id": "acadaa8f-d85d-43e6-8919-36f984c7980f"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "8f27e40a-8f87-4e28-a5f5-bcce6b80da10", "tags": []}, "id": "8f27e40a-8f87-4e28-a5f5-bcce6b80da10"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "b4b04a7c-7ca8-4a94-b507-3e60b05c4642"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "6ffa8590-da13-426a-b1e5-7972237ea6bd"}, "dimension": 1, "id": "98468db5-1544-4ba2-bb39-2deabbab5c15"}, "id": "98468db5-1544-4ba2-bb39-2deabbab5c15"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "884a4bb9-541c-4e12-b1af-d36c460cd5cd", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "884a4bb9-541c-4e12-b1af-d36c460cd5cd"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "0981f46a-472e-4d84-971b-3bb24e9914ef"}, "tags": [], "glyph": {"type": "Diamond", "id": "15cc33a2-e40e-4e0c-b943-56c27fb5cc4d"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "e678301b-7f23-4402-aa8c-d233e74fe8e5"}, "id": "e678301b-7f23-4402-aa8c-d233e74fe8e5"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "b4b04a7c-7ca8-4a94-b507-3e60b05c4642", "tags": []}, "id": "b4b04a7c-7ca8-4a94-b507-3e60b05c4642"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "9518d6c1-e8f2-43e7-abe0-d0032ad106fb"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "bd3be4a4-e488-475c-ac98-283273a1a896"}, "id": "6ffa8590-da13-426a-b1e5-7972237ea6bd", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "884a4bb9-541c-4e12-b1af-d36c460cd5cd"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "68066a1f-c2fc-4c04-95bc-7b308b5fd14c"}, "renderers": [{"type": "GlyphRenderer", "id": "e678301b-7f23-4402-aa8c-d233e74fe8e5"}, {"type": "LinearAxis", "id": "832ef5be-f7df-441b-924f-bcfb2d9dddc7"}, {"type": "LinearAxis", "id": "9518d6c1-e8f2-43e7-abe0-d0032ad106fb"}, {"type": "Grid", "id": "d0bfe43d-29a3-4ab8-9904-a507cbbadbf6"}, {"type": "Grid", "id": "98468db5-1544-4ba2-bb39-2deabbab5c15"}], "below": [{"type": "LinearAxis", "id": "832ef5be-f7df-441b-924f-bcfb2d9dddc7"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "6ffa8590-da13-426a-b1e5-7972237ea6bd"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "bd3be4a4-e488-475c-ac98-283273a1a896", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "bd3be4a4-e488-475c-ac98-283273a1a896"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "doc": null, "id": "0981f46a-472e-4d84-971b-3bb24e9914ef", "column_names": ["y", "x", "sizes"]}, "id": "0981f46a-472e-4d84-971b-3bb24e9914ef"}, {"type": "Diamond", "attributes": {"y": {"field": "y"}, "fill_color": null, "size": {"units": "screen", "field": "sizes"}, "line_width": {"value": 2}, "line_color": {"value": "#1c9099"}, "doc": null, "x": {"field": "x"}, "tags": [], "id": "15cc33a2-e40e-4e0c-b943-56c27fb5cc4d"}, "id": "15cc33a2-e40e-4e0c-b943-56c27fb5cc4d"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "68066a1f-c2fc-4c04-95bc-7b308b5fd14c", "tags": [], "geometries": []}, "id": "68066a1f-c2fc-4c04-95bc-7b308b5fd14c"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "2cef59c7-37c8-4175-aeb5-e851dd15c87e"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "6ffa8590-da13-426a-b1e5-7972237ea6bd"}, "dimension": 0, "id": "d0bfe43d-29a3-4ab8-9904-a507cbbadbf6"}, "id": "d0bfe43d-29a3-4ab8-9904-a507cbbadbf6"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "2cef59c7-37c8-4175-aeb5-e851dd15c87e", "tags": []}, "id": "2cef59c7-37c8-4175-aeb5-e851dd15c87e"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("7e41f492-6d8d-413e-ba66-cfc4e9eb4c67", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("7e41f492-6d8d-413e-ba66-cfc4e9eb4c67", all_models);
    });
  }

}(this));