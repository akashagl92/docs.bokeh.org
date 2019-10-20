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

  var elt = document.getElementById("7b816337-fa74-490d-bf41-14f98d7a1755");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '7b816337-fa74-490d-bf41-14f98d7a1755' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "5b8549f4-e961-4748-ae96-397585c0655e", "type": "Grid", "attributes": {"id": "5b8549f4-e961-4748-ae96-397585c0655e", "plot": {"id": "b9985e23-2841-43e3-ac2d-1ae8fae03a8f", "type": "Plot"}, "dimension": 0, "ticker": {"id": "71be0bae-26c3-4dd7-b53c-9ed6399275dd", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "71238d40-242b-4e67-9e9b-c4ec757631e3", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "fca2deb0-fb5f-4137-a331-c8b432df42a2", "type": "ColumnDataSource"}, "id": "71238d40-242b-4e67-9e9b-c4ec757631e3", "glyph": {"id": "69969be0-7ee1-4f55-b615-2190e043250b", "type": "Line"}, "tags": [], "doc": null}}, {"id": "934822d2-c14f-4c5f-a34a-1d4059a4a93f", "type": "BasicTicker", "attributes": {"id": "934822d2-c14f-4c5f-a34a-1d4059a4a93f", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "65e7510c-4bdf-48c3-93a8-1426fb89944c", "type": "Grid", "attributes": {"id": "65e7510c-4bdf-48c3-93a8-1426fb89944c", "plot": {"id": "b9985e23-2841-43e3-ac2d-1ae8fae03a8f", "type": "Plot"}, "dimension": 1, "ticker": {"id": "934822d2-c14f-4c5f-a34a-1d4059a4a93f", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "b9985e23-2841-43e3-ac2d-1ae8fae03a8f", "type": "Plot", "attributes": {"tool_events": {"id": "6f1463e5-ab47-4bff-b0d5-56baa012a0fa", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "71238d40-242b-4e67-9e9b-c4ec757631e3", "type": "GlyphRenderer"}, {"id": "31548263-d189-4886-ba57-f8ae0125f8da", "type": "LinearAxis"}, {"id": "c3ec4b5e-0940-42e3-aa95-faa3f83a92ec", "type": "LinearAxis"}, {"id": "5b8549f4-e961-4748-ae96-397585c0655e", "type": "Grid"}, {"id": "65e7510c-4bdf-48c3-93a8-1426fb89944c", "type": "Grid"}], "left": [{"id": "c3ec4b5e-0940-42e3-aa95-faa3f83a92ec", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "fe7f71d1-bf26-4d61-a51f-40abde295501", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "b9985e23-2841-43e3-ac2d-1ae8fae03a8f", "y_range": {"id": "c863d671-d276-45ad-af01-43e8b0f37b4b", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "31548263-d189-4886-ba57-f8ae0125f8da", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "c863d671-d276-45ad-af01-43e8b0f37b4b", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "fca2deb0-fb5f-4137-a331-c8b432df42a2", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "c863d671-d276-45ad-af01-43e8b0f37b4b", "doc": null, "tags": []}}, {"id": "bd39c188-2a55-4290-b2a3-4291d0303a9d", "type": "BasicTickFormatter", "attributes": {"id": "bd39c188-2a55-4290-b2a3-4291d0303a9d", "doc": null, "tags": []}}, {"id": "fca2deb0-fb5f-4137-a331-c8b432df42a2", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"x": [-2.0, -1.8620689655172413, -1.7241379310344827, -1.5862068965517242, -1.4482758620689655, -1.3103448275862069, -1.1724137931034484, -1.0344827586206897, -0.896551724137931, -0.7586206896551724, -0.6206896551724137, -0.48275862068965525, -0.3448275862068966, -0.2068965517241379, -0.06896551724137945, 0.06896551724137945, 0.2068965517241379, 0.34482758620689635, 0.48275862068965525, 0.6206896551724137, 0.7586206896551726, 0.896551724137931, 1.0344827586206895, 1.1724137931034484, 1.3103448275862069, 1.4482758620689653, 1.5862068965517242, 1.7241379310344827, 1.862068965517241, 2.0], "y": [4.0, 3.4673008323424495, 2.9726516052318663, 2.5160523186682524, 2.0975029726516055, 1.7170035671819261, 1.3745541022592156, 1.0701545778834722, 0.8038049940546969, 0.5755053507728893, 0.38525564803804985, 0.23305588585017845, 0.11890606420927469, 0.04280618311533887, 0.004756242568371006, 0.004756242568371006, 0.04280618311533887, 0.11890606420927453, 0.23305588585017845, 0.38525564803804985, 0.5755053507728897, 0.8038049940546969, 1.0701545778834718, 1.3745541022592156, 1.7170035671819261, 2.0975029726516046, 2.5160523186682524, 2.9726516052318663, 3.4673008323424486, 4.0]}, "column_names": ["y", "x"], "id": "fca2deb0-fb5f-4137-a331-c8b432df42a2", "doc": null, "tags": []}}, {"id": "31548263-d189-4886-ba57-f8ae0125f8da", "type": "LinearAxis", "attributes": {"id": "31548263-d189-4886-ba57-f8ae0125f8da", "formatter": {"id": "bd39c188-2a55-4290-b2a3-4291d0303a9d", "type": "BasicTickFormatter"}, "plot": {"id": "b9985e23-2841-43e3-ac2d-1ae8fae03a8f", "type": "Plot"}, "ticker": {"id": "71be0bae-26c3-4dd7-b53c-9ed6399275dd", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "1941b1b3-1587-48d1-8006-efba15b2ead3", "type": "BasicTickFormatter", "attributes": {"id": "1941b1b3-1587-48d1-8006-efba15b2ead3", "doc": null, "tags": []}}, {"id": "69969be0-7ee1-4f55-b615-2190e043250b", "type": "Line", "attributes": {"tags": [], "line_width": {"value": 6, "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "69969be0-7ee1-4f55-b615-2190e043250b", "line_color": {"value": "#F46D43"}, "doc": null, "x": {"field": "x", "units": "data"}, "line_alpha": {"value": 0.6, "units": "data"}}}, {"id": "71be0bae-26c3-4dd7-b53c-9ed6399275dd", "type": "BasicTicker", "attributes": {"id": "71be0bae-26c3-4dd7-b53c-9ed6399275dd", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "6f1463e5-ab47-4bff-b0d5-56baa012a0fa", "type": "ToolEvents", "attributes": {"geometries": [], "id": "6f1463e5-ab47-4bff-b0d5-56baa012a0fa", "doc": null, "tags": []}}, {"id": "c3ec4b5e-0940-42e3-aa95-faa3f83a92ec", "type": "LinearAxis", "attributes": {"id": "c3ec4b5e-0940-42e3-aa95-faa3f83a92ec", "formatter": {"id": "1941b1b3-1587-48d1-8006-efba15b2ead3", "type": "BasicTickFormatter"}, "plot": {"id": "b9985e23-2841-43e3-ac2d-1ae8fae03a8f", "type": "Plot"}, "ticker": {"id": "934822d2-c14f-4c5f-a34a-1d4059a4a93f", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "fe7f71d1-bf26-4d61-a51f-40abde295501", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "fca2deb0-fb5f-4137-a331-c8b432df42a2", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "fe7f71d1-bf26-4d61-a51f-40abde295501", "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("7b816337-fa74-490d-bf41-14f98d7a1755", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("7b816337-fa74-490d-bf41-14f98d7a1755", all_models);
    });
  }

}(this));