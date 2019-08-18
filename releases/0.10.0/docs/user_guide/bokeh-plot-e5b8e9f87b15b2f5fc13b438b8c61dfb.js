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

  var elt = document.getElementById("055ae318-6230-47e8-a935-3ba8212f903e");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '055ae318-6230-47e8-a935-3ba8212f903e' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "cd85f428-f3c1-4410-b7bc-21b03141601d"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "98c2f208-8ac0-4aea-b2dc-bfa13fa5a460"}, "ticker": {"type": "BasicTicker", "id": "ff72124d-7090-4104-b817-9d295dbc4ca9"}, "id": "a4519b7c-5580-4ff0-a969-f3cce80da3c5"}, "type": "LinearAxis", "id": "a4519b7c-5580-4ff0-a969-f3cce80da3c5"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "90fb99db-60bd-43bd-a5eb-f2cda5df49be", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "90fb99db-60bd-43bd-a5eb-f2cda5df49be"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [2, 5, 8, 2, 7], "x": [1, 2, 3, 4, 5]}, "id": "654183c1-e1e5-40b1-bd10-3ddb38653417"}, "type": "ColumnDataSource", "id": "654183c1-e1e5-40b1-bd10-3ddb38653417"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "ff72124d-7090-4104-b817-9d295dbc4ca9", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "ff72124d-7090-4104-b817-9d295dbc4ca9"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "15f348b4-4cd1-47c4-aa98-b3519bbaa886", "size": {"units": "screen", "value": 10}}, "type": "Circle", "id": "15f348b4-4cd1-47c4-aa98-b3519bbaa886"}, {"attributes": {"doc": null, "id": "98c2f208-8ac0-4aea-b2dc-bfa13fa5a460", "tags": []}, "type": "BasicTickFormatter", "id": "98c2f208-8ac0-4aea-b2dc-bfa13fa5a460"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "c22959d5-22a9-41e5-90f3-c7a3bac13b94"}, "type": "ToolEvents", "id": "c22959d5-22a9-41e5-90f3-c7a3bac13b94"}, {"attributes": {"doc": null, "id": "59f2311a-cc95-4a16-9883-3a52358ae47b", "tags": []}, "type": "BasicTickFormatter", "id": "59f2311a-cc95-4a16-9883-3a52358ae47b"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "cd85f428-f3c1-4410-b7bc-21b03141601d"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "renderers": [{"type": "GlyphRenderer", "id": "acd841f3-4eff-42d2-910d-a65a107c26f1"}], "callback": null, "names": [], "id": "3bc64f82-00d3-4427-a01e-b39459b27f13"}, "type": "BoxSelectTool", "id": "3bc64f82-00d3-4427-a01e-b39459b27f13"}, {"subtype": "Figure", "type": "Plot", "id": "cd85f428-f3c1-4410-b7bc-21b03141601d", "attributes": {"x_range": {"type": "DataRange1d", "id": "dadda74a-707b-4e73-a4c3-d13c25597abc"}, "right": [], "tags": [], "tools": [{"type": "BoxSelectTool", "id": "3bc64f82-00d3-4427-a01e-b39459b27f13"}, {"type": "HoverTool", "id": "b7f708ef-4f29-48b7-a23a-911fa7fd2a55"}], "title": null, "extra_y_ranges": {}, "plot_width": 400, "renderers": [{"type": "LinearAxis", "id": "a4519b7c-5580-4ff0-a969-f3cce80da3c5"}, {"type": "Grid", "id": "c0c0758d-0033-4fb4-933e-06e92c6e4fe6"}, {"type": "LinearAxis", "id": "c7e9a58d-71ab-4470-9efa-8f99330a1044"}, {"type": "Grid", "id": "d5fbd80e-8d88-4c58-a90d-d2a71fbfe792"}, {"type": "GlyphRenderer", "id": "acd841f3-4eff-42d2-910d-a65a107c26f1"}], "extra_x_ranges": {}, "plot_height": 400, "tool_events": {"type": "ToolEvents", "id": "c22959d5-22a9-41e5-90f3-c7a3bac13b94"}, "above": [], "doc": null, "id": "cd85f428-f3c1-4410-b7bc-21b03141601d", "y_range": {"type": "DataRange1d", "id": "ae5a015a-fd49-4cae-b5d2-d046e02083b2"}, "below": [{"type": "LinearAxis", "id": "a4519b7c-5580-4ff0-a969-f3cce80da3c5"}], "left": [{"type": "LinearAxis", "id": "c7e9a58d-71ab-4470-9efa-8f99330a1044"}]}}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "f2f4b6a9-bc21-49d4-8ff9-1557de719172", "size": {"units": "screen", "value": 10}}, "type": "Circle", "id": "f2f4b6a9-bc21-49d4-8ff9-1557de719172"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "dadda74a-707b-4e73-a4c3-d13c25597abc"}, "type": "DataRange1d", "id": "dadda74a-707b-4e73-a4c3-d13c25597abc"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "cd85f428-f3c1-4410-b7bc-21b03141601d"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "59f2311a-cc95-4a16-9883-3a52358ae47b"}, "ticker": {"type": "BasicTicker", "id": "90fb99db-60bd-43bd-a5eb-f2cda5df49be"}, "id": "c7e9a58d-71ab-4470-9efa-8f99330a1044"}, "type": "LinearAxis", "id": "c7e9a58d-71ab-4470-9efa-8f99330a1044"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "cd85f428-f3c1-4410-b7bc-21b03141601d"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "ff72124d-7090-4104-b817-9d295dbc4ca9"}, "id": "c0c0758d-0033-4fb4-933e-06e92c6e4fe6"}, "type": "Grid", "id": "c0c0758d-0033-4fb4-933e-06e92c6e4fe6"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "cd85f428-f3c1-4410-b7bc-21b03141601d"}, "tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "b7f708ef-4f29-48b7-a23a-911fa7fd2a55"}, "type": "HoverTool", "id": "b7f708ef-4f29-48b7-a23a-911fa7fd2a55"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "cd85f428-f3c1-4410-b7bc-21b03141601d"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "90fb99db-60bd-43bd-a5eb-f2cda5df49be"}, "id": "d5fbd80e-8d88-4c58-a90d-d2a71fbfe792"}, "type": "Grid", "id": "d5fbd80e-8d88-4c58-a90d-d2a71fbfe792"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "f2f4b6a9-bc21-49d4-8ff9-1557de719172"}, "data_source": {"type": "ColumnDataSource", "id": "654183c1-e1e5-40b1-bd10-3ddb38653417"}, "tags": [], "doc": null, "selection_glyph": null, "id": "acd841f3-4eff-42d2-910d-a65a107c26f1", "glyph": {"type": "Circle", "id": "15f348b4-4cd1-47c4-aa98-b3519bbaa886"}}, "type": "GlyphRenderer", "id": "acd841f3-4eff-42d2-910d-a65a107c26f1"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "ae5a015a-fd49-4cae-b5d2-d046e02083b2"}, "type": "DataRange1d", "id": "ae5a015a-fd49-4cae-b5d2-d046e02083b2"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("055ae318-6230-47e8-a935-3ba8212f903e", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("055ae318-6230-47e8-a935-3ba8212f903e", all_models);
    });
  }

}(this));