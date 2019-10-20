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

  var elt = document.getElementById("8382e1ca-8b29-4d2a-b425-0bbb9f53dc53");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '8382e1ca-8b29-4d2a-b425-0bbb9f53dc53' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "54fa6cf2-7d51-4af3-b9b3-9f6191b182f6", "type": "BasicTicker", "attributes": {"id": "54fa6cf2-7d51-4af3-b9b3-9f6191b182f6", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "06afb3d4-8fea-43d1-b373-f0ad3830fa5e", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "fa2acddb-b52c-48f4-87ca-b505b417be63", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "06afb3d4-8fea-43d1-b373-f0ad3830fa5e", "doc": null, "tags": []}}, {"id": "94bc7807-7acc-4816-aa66-55ba78f85b01", "type": "LinearAxis", "attributes": {"id": "94bc7807-7acc-4816-aa66-55ba78f85b01", "formatter": {"id": "1017f7c8-a73d-4426-8e22-b90f705954ab", "type": "BasicTickFormatter"}, "plot": {"id": "fc687242-2814-4509-986b-53dd8e7fd986", "type": "Plot"}, "ticker": {"id": "827fae81-6845-4f93-98f2-a62ea0c6e0f1", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "3f7f71ab-bbcb-432a-b0dd-0561a227accf", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "fa2acddb-b52c-48f4-87ca-b505b417be63", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "3f7f71ab-bbcb-432a-b0dd-0561a227accf", "doc": null, "tags": []}}, {"id": "190e5e90-e19e-42c8-bd55-0e1d38b88cb3", "type": "Square", "attributes": {"tags": [], "y": {"field": "y", "units": "data"}, "id": "190e5e90-e19e-42c8-bd55-0e1d38b88cb3", "fill_color": {"value": "#74add1"}, "doc": null, "x": {"field": "x", "units": "data"}, "size": {"field": "sizes", "units": "screen"}}}, {"id": "10475ce4-87a8-4ccd-bf8b-f5cd7cc483ad", "type": "BasicTickFormatter", "attributes": {"id": "10475ce4-87a8-4ccd-bf8b-f5cd7cc483ad", "doc": null, "tags": []}}, {"id": "d3d091ef-cf7d-45cb-984d-2d337056876a", "type": "ToolEvents", "attributes": {"geometries": [], "id": "d3d091ef-cf7d-45cb-984d-2d337056876a", "doc": null, "tags": []}}, {"id": "050f926e-933f-49f5-b1b2-2ca53ab55884", "type": "LinearAxis", "attributes": {"id": "050f926e-933f-49f5-b1b2-2ca53ab55884", "formatter": {"id": "10475ce4-87a8-4ccd-bf8b-f5cd7cc483ad", "type": "BasicTickFormatter"}, "plot": {"id": "fc687242-2814-4509-986b-53dd8e7fd986", "type": "Plot"}, "ticker": {"id": "54fa6cf2-7d51-4af3-b9b3-9f6191b182f6", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "fa2acddb-b52c-48f4-87ca-b505b417be63", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["sizes", "y", "x"], "id": "fa2acddb-b52c-48f4-87ca-b505b417be63", "doc": null, "tags": []}}, {"id": "1017f7c8-a73d-4426-8e22-b90f705954ab", "type": "BasicTickFormatter", "attributes": {"id": "1017f7c8-a73d-4426-8e22-b90f705954ab", "doc": null, "tags": []}}, {"id": "31e1eac7-5f92-4494-a164-892735feb2c2", "type": "Grid", "attributes": {"id": "31e1eac7-5f92-4494-a164-892735feb2c2", "plot": {"id": "fc687242-2814-4509-986b-53dd8e7fd986", "type": "Plot"}, "dimension": 0, "ticker": {"id": "54fa6cf2-7d51-4af3-b9b3-9f6191b182f6", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "05428633-ac08-4a0e-9e63-796a422339d7", "type": "Grid", "attributes": {"id": "05428633-ac08-4a0e-9e63-796a422339d7", "plot": {"id": "fc687242-2814-4509-986b-53dd8e7fd986", "type": "Plot"}, "dimension": 1, "ticker": {"id": "827fae81-6845-4f93-98f2-a62ea0c6e0f1", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "fc687242-2814-4509-986b-53dd8e7fd986", "type": "Plot", "attributes": {"tool_events": {"id": "d3d091ef-cf7d-45cb-984d-2d337056876a", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "3e0de527-6858-4dd6-9525-ed5ed67602ed", "type": "GlyphRenderer"}, {"id": "050f926e-933f-49f5-b1b2-2ca53ab55884", "type": "LinearAxis"}, {"id": "94bc7807-7acc-4816-aa66-55ba78f85b01", "type": "LinearAxis"}, {"id": "31e1eac7-5f92-4494-a164-892735feb2c2", "type": "Grid"}, {"id": "05428633-ac08-4a0e-9e63-796a422339d7", "type": "Grid"}], "left": [{"id": "94bc7807-7acc-4816-aa66-55ba78f85b01", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "06afb3d4-8fea-43d1-b373-f0ad3830fa5e", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "fc687242-2814-4509-986b-53dd8e7fd986", "y_range": {"id": "3f7f71ab-bbcb-432a-b0dd-0561a227accf", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "050f926e-933f-49f5-b1b2-2ca53ab55884", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "3e0de527-6858-4dd6-9525-ed5ed67602ed", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "fa2acddb-b52c-48f4-87ca-b505b417be63", "type": "ColumnDataSource"}, "id": "3e0de527-6858-4dd6-9525-ed5ed67602ed", "glyph": {"id": "190e5e90-e19e-42c8-bd55-0e1d38b88cb3", "type": "Square"}, "tags": [], "doc": null}}, {"id": "827fae81-6845-4f93-98f2-a62ea0c6e0f1", "type": "BasicTicker", "attributes": {"id": "827fae81-6845-4f93-98f2-a62ea0c6e0f1", "mantissas": [2, 5, 10], "tags": [], "doc": null}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("8382e1ca-8b29-4d2a-b425-0bbb9f53dc53", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("8382e1ca-8b29-4d2a-b425-0bbb9f53dc53", all_models);
    });
  }

}(this));