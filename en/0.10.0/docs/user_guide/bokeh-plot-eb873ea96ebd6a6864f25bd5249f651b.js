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

  var elt = document.getElementById("730fa0c4-5e70-4033-adfc-c8565ca60e08");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '730fa0c4-5e70-4033-adfc-c8565ca60e08' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "6d397e7e-820b-4f16-820b-dc198ba18064"}, "tags": [], "doc": null, "id": "e0994873-5eb3-4bec-b1f0-3cd7f9d23656"}, "type": "ResetTool", "id": "e0994873-5eb3-4bec-b1f0-3cd7f9d23656"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "radius": {"units": "data", "value": 0.3}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "5bfd3b3a-3ef7-44d8-9913-6bdb2ed85e96"}, "type": "Circle", "id": "5bfd3b3a-3ef7-44d8-9913-6bdb2ed85e96"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "5bfd3b3a-3ef7-44d8-9913-6bdb2ed85e96"}, "data_source": {"type": "ColumnDataSource", "id": "a82fb25b-7f22-455e-a04d-611b3b039841"}, "tags": [], "doc": null, "selection_glyph": null, "id": "302da2ad-0f37-4270-99d3-80931508ca30", "glyph": {"type": "Circle", "id": "01bed89c-a18c-467c-bc49-607615c39ebf"}}, "type": "GlyphRenderer", "id": "302da2ad-0f37-4270-99d3-80931508ca30"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "6d397e7e-820b-4f16-820b-dc198ba18064"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "a300e984-fc69-4e90-b44c-a76ae96e699c"}, "id": "d34af891-589e-4f9b-a304-752548b36585"}, "type": "Grid", "id": "d34af891-589e-4f9b-a304-752548b36585"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "a300e984-fc69-4e90-b44c-a76ae96e699c", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "a300e984-fc69-4e90-b44c-a76ae96e699c"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [2.0, 3.0, 1.0, 1.5], "x": [1.0, 2.5, 3.0, 2.0]}, "id": "a82fb25b-7f22-455e-a04d-611b3b039841"}, "type": "ColumnDataSource", "id": "a82fb25b-7f22-455e-a04d-611b3b039841"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "6d397e7e-820b-4f16-820b-dc198ba18064"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "3a72fc65-608e-41d4-8523-997a2ffd879c"}, "ticker": {"type": "BasicTicker", "id": "a300e984-fc69-4e90-b44c-a76ae96e699c"}, "id": "0f2c45c2-6c2e-49f3-b91a-a43d3ed9a614"}, "type": "LinearAxis", "id": "0f2c45c2-6c2e-49f3-b91a-a43d3ed9a614"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.5}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.5}, "radius": {"units": "data", "value": 0.3}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "01bed89c-a18c-467c-bc49-607615c39ebf"}, "type": "Circle", "id": "01bed89c-a18c-467c-bc49-607615c39ebf"}, {"attributes": {"doc": null, "id": "3a72fc65-608e-41d4-8523-997a2ffd879c", "tags": []}, "type": "BasicTickFormatter", "id": "3a72fc65-608e-41d4-8523-997a2ffd879c"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "8ef9b961-9fc8-4266-94a8-b6cbcf030406"}, "type": "ToolEvents", "id": "8ef9b961-9fc8-4266-94a8-b6cbcf030406"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "6d397e7e-820b-4f16-820b-dc198ba18064"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "acdf69cb-4c05-4877-a651-85e25228e5c1"}, "id": "4efe6857-0036-4e5d-910a-e252d8155607"}, "type": "Grid", "id": "4efe6857-0036-4e5d-910a-e252d8155607"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "519a5919-083d-47c7-8fad-8c93fe5020e7"}, "type": "DataRange1d", "id": "519a5919-083d-47c7-8fad-8c93fe5020e7"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "6d397e7e-820b-4f16-820b-dc198ba18064"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "c538f00a-efdf-42be-a618-dd158e99724a"}, "ticker": {"type": "BasicTicker", "id": "acdf69cb-4c05-4877-a651-85e25228e5c1"}, "id": "91f7975c-30d8-4f9d-998e-ffa6a70565cb"}, "type": "LinearAxis", "id": "91f7975c-30d8-4f9d-998e-ffa6a70565cb"}, {"attributes": {"doc": null, "id": "c538f00a-efdf-42be-a618-dd158e99724a", "tags": []}, "type": "BasicTickFormatter", "id": "c538f00a-efdf-42be-a618-dd158e99724a"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "e9f26197-957c-4622-91cd-e4cc3e8fc185"}, "type": "DataRange1d", "id": "e9f26197-957c-4622-91cd-e4cc3e8fc185"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "6d397e7e-820b-4f16-820b-dc198ba18064"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "f1c15b7f-15ab-4ccd-9bad-eb997d2f8153"}, "type": "PanTool", "id": "f1c15b7f-15ab-4ccd-9bad-eb997d2f8153"}, {"subtype": "Figure", "type": "Plot", "id": "6d397e7e-820b-4f16-820b-dc198ba18064", "attributes": {"x_range": {"type": "DataRange1d", "id": "519a5919-083d-47c7-8fad-8c93fe5020e7"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "f1c15b7f-15ab-4ccd-9bad-eb997d2f8153"}, {"type": "ResetTool", "id": "e0994873-5eb3-4bec-b1f0-3cd7f9d23656"}, {"type": "PreviewSaveTool", "id": "5a844c4c-665a-4f43-9c1e-8095dde3f749"}], "extra_y_ranges": {}, "plot_width": 300, "renderers": [{"type": "LinearAxis", "id": "0f2c45c2-6c2e-49f3-b91a-a43d3ed9a614"}, {"type": "Grid", "id": "d34af891-589e-4f9b-a304-752548b36585"}, {"type": "LinearAxis", "id": "91f7975c-30d8-4f9d-998e-ffa6a70565cb"}, {"type": "Grid", "id": "4efe6857-0036-4e5d-910a-e252d8155607"}, {"type": "GlyphRenderer", "id": "302da2ad-0f37-4270-99d3-80931508ca30"}], "extra_x_ranges": {}, "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "8ef9b961-9fc8-4266-94a8-b6cbcf030406"}, "above": [], "doc": null, "id": "6d397e7e-820b-4f16-820b-dc198ba18064", "y_range": {"type": "DataRange1d", "id": "e9f26197-957c-4622-91cd-e4cc3e8fc185"}, "below": [{"type": "LinearAxis", "id": "0f2c45c2-6c2e-49f3-b91a-a43d3ed9a614"}], "left": [{"type": "LinearAxis", "id": "91f7975c-30d8-4f9d-998e-ffa6a70565cb"}]}}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "6d397e7e-820b-4f16-820b-dc198ba18064"}, "tags": [], "doc": null, "id": "5a844c4c-665a-4f43-9c1e-8095dde3f749"}, "type": "PreviewSaveTool", "id": "5a844c4c-665a-4f43-9c1e-8095dde3f749"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "acdf69cb-4c05-4877-a651-85e25228e5c1", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "acdf69cb-4c05-4877-a651-85e25228e5c1"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("730fa0c4-5e70-4033-adfc-c8565ca60e08", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("730fa0c4-5e70-4033-adfc-c8565ca60e08", all_models);
    });
  }

}(this));