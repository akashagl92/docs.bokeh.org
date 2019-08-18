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
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.10.0.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.10.0.min.js"

  var elt = document.getElementById("98130a9e-f771-4959-b189-c4183bbee500");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '98130a9e-f771-4959-b189-c4183bbee500' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "c91ce1f6-a30e-46b5-815f-b56993b72b27"}, "type": "DataRange1d", "id": "c91ce1f6-a30e-46b5-815f-b56993b72b27"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "c91ce1f6-a30e-46b5-815f-b56993b72b27"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "512f2ab7-7bf2-4b75-81ab-690d6e3659d7"}, {"type": "LinearAxis", "id": "0ad59af5-f7f0-4221-94be-504e37fecb92"}, {"type": "LinearAxis", "id": "f7562eab-6766-4cc7-8e94-f0b824d7d23d"}, {"type": "Grid", "id": "a6de456d-1933-465d-9c83-7119c2c63116"}, {"type": "Grid", "id": "e866282b-2e30-4c2a-b8c3-269277484c74"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "8892c0c5-991d-442d-8d93-ee14335fabf5"}, "h_symmetry": false, "tools": [], "id": "a626cd5e-070b-4157-a48f-ecb1a52f1273", "title": null, "y_range": {"type": "DataRange1d", "id": "ea3b0cb8-4eec-4d9f-b708-c2f9ef310515"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "0ad59af5-f7f0-4221-94be-504e37fecb92"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "f7562eab-6766-4cc7-8e94-f0b824d7d23d"}]}, "type": "Plot", "id": "a626cd5e-070b-4157-a48f-ecb1a52f1273"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "ea3b0cb8-4eec-4d9f-b708-c2f9ef310515"}, "type": "DataRange1d", "id": "ea3b0cb8-4eec-4d9f-b708-c2f9ef310515"}, {"attributes": {"right": {"field": "right"}, "fill_color": {"value": "#b3de69"}, "tags": [], "doc": null, "top": {"field": "top"}, "bottom": {"field": "bottom"}, "id": "5f7208c5-3e44-40c8-9144-b25bf0356836", "left": {"field": "left"}}, "type": "Quad", "id": "5f7208c5-3e44-40c8-9144-b25bf0356836"}, {"attributes": {"plot": {"type": "Plot", "id": "a626cd5e-070b-4157-a48f-ecb1a52f1273"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "204d0d84-88d9-443f-b127-03563c2ca164"}, "id": "e866282b-2e30-4c2a-b8c3-269277484c74"}, "type": "Grid", "id": "e866282b-2e30-4c2a-b8c3-269277484c74"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "4b7cb441-ce74-431f-b546-1ce249d882d5"}, "tags": [], "doc": null, "selection_glyph": null, "id": "512f2ab7-7bf2-4b75-81ab-690d6e3659d7", "glyph": {"type": "Quad", "id": "5f7208c5-3e44-40c8-9144-b25bf0356836"}}, "type": "GlyphRenderer", "id": "512f2ab7-7bf2-4b75-81ab-690d6e3659d7"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "204d0d84-88d9-443f-b127-03563c2ca164"}, "type": "BasicTicker", "id": "204d0d84-88d9-443f-b127-03563c2ca164"}, {"attributes": {"doc": null, "id": "e2cac228-d053-41e9-8ddf-5156f060bf96", "tags": []}, "type": "BasicTickFormatter", "id": "e2cac228-d053-41e9-8ddf-5156f060bf96"}, {"attributes": {"plot": {"type": "Plot", "id": "a626cd5e-070b-4157-a48f-ecb1a52f1273"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "00e7c0f7-2c35-4bad-83a8-b8fdb7e21160"}, "ticker": {"type": "BasicTicker", "id": "204d0d84-88d9-443f-b127-03563c2ca164"}, "id": "f7562eab-6766-4cc7-8e94-f0b824d7d23d"}, "type": "LinearAxis", "id": "f7562eab-6766-4cc7-8e94-f0b824d7d23d"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "67ef4294-c788-4744-9ab2-f4317d541ed9"}, "type": "BasicTicker", "id": "67ef4294-c788-4744-9ab2-f4317d541ed9"}, {"attributes": {"doc": null, "id": "00e7c0f7-2c35-4bad-83a8-b8fdb7e21160", "tags": []}, "type": "BasicTickFormatter", "id": "00e7c0f7-2c35-4bad-83a8-b8fdb7e21160"}, {"attributes": {"column_names": ["top", "right", "bottom", "left"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"top": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "right": [-0.8999999999999999, -0.8625, -0.6000000000000001, -0.1875, 0.3, 0.7875, 1.2, 1.4625000000000001, 1.5], "bottom": [4.1, 2.525, 1.4, 0.725, 0.5, 0.725, 1.4, 2.525, 4.1], "left": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0]}, "id": "4b7cb441-ce74-431f-b546-1ce249d882d5"}, "type": "ColumnDataSource", "id": "4b7cb441-ce74-431f-b546-1ce249d882d5"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "8892c0c5-991d-442d-8d93-ee14335fabf5"}, "type": "ToolEvents", "id": "8892c0c5-991d-442d-8d93-ee14335fabf5"}, {"attributes": {"plot": {"type": "Plot", "id": "a626cd5e-070b-4157-a48f-ecb1a52f1273"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "e2cac228-d053-41e9-8ddf-5156f060bf96"}, "ticker": {"type": "BasicTicker", "id": "67ef4294-c788-4744-9ab2-f4317d541ed9"}, "id": "0ad59af5-f7f0-4221-94be-504e37fecb92"}, "type": "LinearAxis", "id": "0ad59af5-f7f0-4221-94be-504e37fecb92"}, {"attributes": {"plot": {"type": "Plot", "id": "a626cd5e-070b-4157-a48f-ecb1a52f1273"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "67ef4294-c788-4744-9ab2-f4317d541ed9"}, "id": "a6de456d-1933-465d-9c83-7119c2c63116"}, "type": "Grid", "id": "a6de456d-1933-465d-9c83-7119c2c63116"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("98130a9e-f771-4959-b189-c4183bbee500", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("98130a9e-f771-4959-b189-c4183bbee500", all_models);
    });
  }

}(this));