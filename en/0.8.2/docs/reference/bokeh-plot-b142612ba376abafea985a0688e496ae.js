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

  var elt = document.getElementById("0ff51d67-3ffa-4017-a287-5f806ffa6218");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '0ff51d67-3ffa-4017-a287-5f806ffa6218' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "5b14d1ab-bcc1-4d94-b00e-90162d4180ca", "type": "ToolEvents", "attributes": {"geometries": [], "id": "5b14d1ab-bcc1-4d94-b00e-90162d4180ca", "doc": null, "tags": []}}, {"id": "348b03f7-4403-4cea-b6c3-5b821c7b748d", "type": "Patches", "attributes": {"tags": [], "ys": {"field": "ys", "units": "data"}, "xs": {"field": "xs", "units": "data"}, "id": "348b03f7-4403-4cea-b6c3-5b821c7b748d", "doc": null, "fill_color": {"value": "#fb9a99"}}}, {"id": "aad908a1-13c7-4e6a-905f-be8f2be17954", "type": "Plot", "attributes": {"tool_events": {"id": "5b14d1ab-bcc1-4d94-b00e-90162d4180ca", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "c291e75f-35e3-4d47-9938-6370b2fbab27", "type": "GlyphRenderer"}, {"id": "e3327cf7-f989-440f-8a73-88773e335276", "type": "LinearAxis"}, {"id": "b2c16acf-79a1-4d92-8623-9ac3d218767f", "type": "LinearAxis"}, {"id": "82e77990-7c38-46a3-b520-c78852c9b8f5", "type": "Grid"}, {"id": "c1b40e74-0b17-49f1-87a5-04f9912ee1c4", "type": "Grid"}], "left": [{"id": "b2c16acf-79a1-4d92-8623-9ac3d218767f", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "35b2dd49-865b-43d5-9d6b-6acd1ccc3e23", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "aad908a1-13c7-4e6a-905f-be8f2be17954", "y_range": {"id": "4a594a79-c44c-4ee3-9995-fc2032f98e5e", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "e3327cf7-f989-440f-8a73-88773e335276", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "f6aca7a0-e14f-4207-a936-310889402df4", "type": "BasicTickFormatter", "attributes": {"id": "f6aca7a0-e14f-4207-a936-310889402df4", "doc": null, "tags": []}}, {"id": "c291e75f-35e3-4d47-9938-6370b2fbab27", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "eaee48e8-1c35-4a11-b646-95d6de9c3eb5", "type": "ColumnDataSource"}, "id": "c291e75f-35e3-4d47-9938-6370b2fbab27", "glyph": {"id": "348b03f7-4403-4cea-b6c3-5b821c7b748d", "type": "Patches"}, "tags": [], "doc": null}}, {"id": "b2c16acf-79a1-4d92-8623-9ac3d218767f", "type": "LinearAxis", "attributes": {"id": "b2c16acf-79a1-4d92-8623-9ac3d218767f", "formatter": {"id": "f6aca7a0-e14f-4207-a936-310889402df4", "type": "BasicTickFormatter"}, "plot": {"id": "aad908a1-13c7-4e6a-905f-be8f2be17954", "type": "Plot"}, "ticker": {"id": "b97070aa-a375-4fa9-a72e-60d3fd5a1dbd", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "eaee48e8-1c35-4a11-b646-95d6de9c3eb5", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"ys": [[3.9, 4.02, 4.1, 4.02, 3.9], [2.14, 2.272, 2.36, 2.272, 2.14], [0.88, 1.024, 1.12, 1.024, 0.88], [0.12, 0.276, 0.38, 0.276, 0.12], [-0.13999999999999999, 0.027999999999999997, 0.13999999999999999, 0.027999999999999997, -0.13999999999999999], [0.09999999999999998, 0.28, 0.4, 0.28, 0.09999999999999998], [0.84, 1.032, 1.1600000000000001, 1.032, 0.84], [2.08, 2.284, 2.42, 2.284, 2.08], [3.82, 4.036, 4.18, 4.036, 3.82]], "xs": [[-2.09, -2.12, -2.0, -1.88, -1.91], [-1.599, -1.6320000000000001, -1.5, -1.3679999999999999, -1.401], [-1.108, -1.144, -1.0, -0.856, -0.892], [-0.617, -0.656, -0.5, -0.344, -0.383], [-0.126, -0.16799999999999998, 0.0, 0.16799999999999998, 0.126], [0.365, 0.32, 0.5, 0.6799999999999999, 0.635], [0.856, 0.808, 1.0, 1.192, 1.144], [1.347, 1.296, 1.5, 1.704, 1.653], [1.838, 1.784, 2.0, 2.216, 2.162]]}, "column_names": ["ys", "xs"], "id": "eaee48e8-1c35-4a11-b646-95d6de9c3eb5", "doc": null, "tags": []}}, {"id": "82e77990-7c38-46a3-b520-c78852c9b8f5", "type": "Grid", "attributes": {"id": "82e77990-7c38-46a3-b520-c78852c9b8f5", "plot": {"id": "aad908a1-13c7-4e6a-905f-be8f2be17954", "type": "Plot"}, "dimension": 0, "ticker": {"id": "9135519e-09dc-4b2e-a631-371535ea9e5c", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "35b2dd49-865b-43d5-9d6b-6acd1ccc3e23", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "eaee48e8-1c35-4a11-b646-95d6de9c3eb5", "type": "ColumnDataSource"}, "columns": ["xs"]}], "id": "35b2dd49-865b-43d5-9d6b-6acd1ccc3e23", "doc": null, "tags": []}}, {"id": "b97070aa-a375-4fa9-a72e-60d3fd5a1dbd", "type": "BasicTicker", "attributes": {"id": "b97070aa-a375-4fa9-a72e-60d3fd5a1dbd", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "e3327cf7-f989-440f-8a73-88773e335276", "type": "LinearAxis", "attributes": {"id": "e3327cf7-f989-440f-8a73-88773e335276", "formatter": {"id": "61e0e883-d627-4e16-9324-01200f42d93a", "type": "BasicTickFormatter"}, "plot": {"id": "aad908a1-13c7-4e6a-905f-be8f2be17954", "type": "Plot"}, "ticker": {"id": "9135519e-09dc-4b2e-a631-371535ea9e5c", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "c1b40e74-0b17-49f1-87a5-04f9912ee1c4", "type": "Grid", "attributes": {"id": "c1b40e74-0b17-49f1-87a5-04f9912ee1c4", "plot": {"id": "aad908a1-13c7-4e6a-905f-be8f2be17954", "type": "Plot"}, "dimension": 1, "ticker": {"id": "b97070aa-a375-4fa9-a72e-60d3fd5a1dbd", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "9135519e-09dc-4b2e-a631-371535ea9e5c", "type": "BasicTicker", "attributes": {"id": "9135519e-09dc-4b2e-a631-371535ea9e5c", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "61e0e883-d627-4e16-9324-01200f42d93a", "type": "BasicTickFormatter", "attributes": {"id": "61e0e883-d627-4e16-9324-01200f42d93a", "doc": null, "tags": []}}, {"id": "4a594a79-c44c-4ee3-9995-fc2032f98e5e", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "eaee48e8-1c35-4a11-b646-95d6de9c3eb5", "type": "ColumnDataSource"}, "columns": ["ys"]}], "id": "4a594a79-c44c-4ee3-9995-fc2032f98e5e", "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("0ff51d67-3ffa-4017-a287-5f806ffa6218", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("0ff51d67-3ffa-4017-a287-5f806ffa6218", all_models);
    });
  }

}(this));