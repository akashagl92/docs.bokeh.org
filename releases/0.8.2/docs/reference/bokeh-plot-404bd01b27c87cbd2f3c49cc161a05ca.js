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

  var elt = document.getElementById("4269e6de-307b-4cd0-a340-e815d085c5bc");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '4269e6de-307b-4cd0-a340-e815d085c5bc' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "d01bfbca-ba9a-4f88-ac22-d9e272a2f6a5", "type": "ToolEvents", "attributes": {"geometries": [], "id": "d01bfbca-ba9a-4f88-ac22-d9e272a2f6a5", "doc": null, "tags": []}}, {"id": "2d5e9738-709c-4b2a-9821-28692e064325", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "6e3bc59b-d49a-4eca-8a67-70289df23b14", "type": "ColumnDataSource"}, "id": "2d5e9738-709c-4b2a-9821-28692e064325", "glyph": {"id": "8dc3cd9d-2873-43a5-90e0-7c1cfb548098", "type": "MultiLine"}, "tags": [], "doc": null}}, {"id": "8dc3cd9d-2873-43a5-90e0-7c1cfb548098", "type": "MultiLine", "attributes": {"ys": {"field": "ys", "units": "data"}, "id": "8dc3cd9d-2873-43a5-90e0-7c1cfb548098", "line_color": {"value": "#8073ac"}, "xs": {"field": "xs", "units": "data"}, "doc": null, "tags": [], "line_width": {"value": 2, "units": "data"}}}, {"id": "79e88b2a-8e68-4375-b936-4107ad5a365a", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "6e3bc59b-d49a-4eca-8a67-70289df23b14", "type": "ColumnDataSource"}, "columns": ["xs"]}], "id": "79e88b2a-8e68-4375-b936-4107ad5a365a", "doc": null, "tags": []}}, {"id": "1c6f6399-a8a2-4ca3-a03b-1121313d5024", "type": "Grid", "attributes": {"id": "1c6f6399-a8a2-4ca3-a03b-1121313d5024", "plot": {"id": "172d3df0-9ec4-4d7c-9ac9-3542c2e71e3c", "type": "Plot"}, "dimension": 0, "ticker": {"id": "ba10bf05-1c35-4666-b2a0-8009b2bbb2bb", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "ec2e8079-4add-441a-8468-e00ffea6facb", "type": "LinearAxis", "attributes": {"id": "ec2e8079-4add-441a-8468-e00ffea6facb", "formatter": {"id": "53ee53e4-cde3-4935-9958-d1bf1c9340e9", "type": "BasicTickFormatter"}, "plot": {"id": "172d3df0-9ec4-4d7c-9ac9-3542c2e71e3c", "type": "Plot"}, "ticker": {"id": "4b4755bd-e5ad-4040-9ac6-7291db1952e9", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "53ee53e4-cde3-4935-9958-d1bf1c9340e9", "type": "BasicTickFormatter", "attributes": {"id": "53ee53e4-cde3-4935-9958-d1bf1c9340e9", "doc": null, "tags": []}}, {"id": "5f6ee017-b512-4745-9428-5639d3af67d8", "type": "BasicTickFormatter", "attributes": {"id": "5f6ee017-b512-4745-9428-5639d3af67d8", "doc": null, "tags": []}}, {"id": "4b4755bd-e5ad-4040-9ac6-7291db1952e9", "type": "BasicTicker", "attributes": {"id": "4b4755bd-e5ad-4040-9ac6-7291db1952e9", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "172d3df0-9ec4-4d7c-9ac9-3542c2e71e3c", "type": "Plot", "attributes": {"tool_events": {"id": "d01bfbca-ba9a-4f88-ac22-d9e272a2f6a5", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "2d5e9738-709c-4b2a-9821-28692e064325", "type": "GlyphRenderer"}, {"id": "705ee4c1-a763-4646-8c6e-0d3438eea01e", "type": "LinearAxis"}, {"id": "ec2e8079-4add-441a-8468-e00ffea6facb", "type": "LinearAxis"}, {"id": "1c6f6399-a8a2-4ca3-a03b-1121313d5024", "type": "Grid"}, {"id": "3ec102cf-84fd-43e7-9ddb-80aedd10b1c9", "type": "Grid"}], "left": [{"id": "ec2e8079-4add-441a-8468-e00ffea6facb", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "79e88b2a-8e68-4375-b936-4107ad5a365a", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "172d3df0-9ec4-4d7c-9ac9-3542c2e71e3c", "y_range": {"id": "31173ffb-1763-4f80-b329-478465350588", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "705ee4c1-a763-4646-8c6e-0d3438eea01e", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "705ee4c1-a763-4646-8c6e-0d3438eea01e", "type": "LinearAxis", "attributes": {"id": "705ee4c1-a763-4646-8c6e-0d3438eea01e", "formatter": {"id": "5f6ee017-b512-4745-9428-5639d3af67d8", "type": "BasicTickFormatter"}, "plot": {"id": "172d3df0-9ec4-4d7c-9ac9-3542c2e71e3c", "type": "Plot"}, "ticker": {"id": "ba10bf05-1c35-4666-b2a0-8009b2bbb2bb", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "ba10bf05-1c35-4666-b2a0-8009b2bbb2bb", "type": "BasicTicker", "attributes": {"id": "ba10bf05-1c35-4666-b2a0-8009b2bbb2bb", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "3ec102cf-84fd-43e7-9ddb-80aedd10b1c9", "type": "Grid", "attributes": {"id": "3ec102cf-84fd-43e7-9ddb-80aedd10b1c9", "plot": {"id": "172d3df0-9ec4-4d7c-9ac9-3542c2e71e3c", "type": "Plot"}, "dimension": 1, "ticker": {"id": "4b4755bd-e5ad-4040-9ac6-7291db1952e9", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "31173ffb-1763-4f80-b329-478465350588", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "6e3bc59b-d49a-4eca-8a67-70289df23b14", "type": "ColumnDataSource"}, "columns": ["ys"]}], "id": "31173ffb-1763-4f80-b329-478465350588", "doc": null, "tags": []}}, {"id": "6e3bc59b-d49a-4eca-8a67-70289df23b14", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"ys": [[3.9, 4.02, 4.1, 4.02, 3.9], [2.14, 2.272, 2.36, 2.272, 2.14], [0.88, 1.024, 1.12, 1.024, 0.88], [0.12, 0.276, 0.38, 0.276, 0.12], [-0.13999999999999999, 0.027999999999999997, 0.13999999999999999, 0.027999999999999997, -0.13999999999999999], [0.09999999999999998, 0.28, 0.4, 0.28, 0.09999999999999998], [0.84, 1.032, 1.1600000000000001, 1.032, 0.84], [2.08, 2.284, 2.42, 2.284, 2.08], [3.82, 4.036, 4.18, 4.036, 3.82]], "xs": [[-2.09, -2.12, -2.0, -1.88, -1.91], [-1.599, -1.6320000000000001, -1.5, -1.3679999999999999, -1.401], [-1.108, -1.144, -1.0, -0.856, -0.892], [-0.617, -0.656, -0.5, -0.344, -0.383], [-0.126, -0.16799999999999998, 0.0, 0.16799999999999998, 0.126], [0.365, 0.32, 0.5, 0.6799999999999999, 0.635], [0.856, 0.808, 1.0, 1.192, 1.144], [1.347, 1.296, 1.5, 1.704, 1.653], [1.838, 1.784, 2.0, 2.216, 2.162]]}, "column_names": ["ys", "xs"], "id": "6e3bc59b-d49a-4eca-8a67-70289df23b14", "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("4269e6de-307b-4cd0-a340-e815d085c5bc", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("4269e6de-307b-4cd0-a340-e815d085c5bc", all_models);
    });
  }

}(this));