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

  var elt = document.getElementById("fb085b3e-34df-43ae-ad0c-487230789fd9");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'fb085b3e-34df-43ae-ad0c-487230789fd9' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "69ef808f-99b1-4663-b54a-eb8c1c0c63cb", "type": "ToolEvents", "attributes": {"geometries": [], "id": "69ef808f-99b1-4663-b54a-eb8c1c0c63cb", "doc": null, "tags": []}}, {"id": "9ce8bb2d-18d1-410a-8b37-b042a4dd3640", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "384e1505-4fe3-45ae-8545-3a7516dd46db", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "9ce8bb2d-18d1-410a-8b37-b042a4dd3640", "doc": null, "tags": []}}, {"id": "384e1505-4fe3-45ae-8545-3a7516dd46db", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"x": [-2.0, -1.8620689655172413, -1.7241379310344827, -1.5862068965517242, -1.4482758620689655, -1.3103448275862069, -1.1724137931034484, -1.0344827586206897, -0.896551724137931, -0.7586206896551724, -0.6206896551724137, -0.48275862068965525, -0.3448275862068966, -0.2068965517241379, -0.06896551724137945, 0.06896551724137945, 0.2068965517241379, 0.34482758620689635, 0.48275862068965525, 0.6206896551724137, 0.7586206896551726, 0.896551724137931, 1.0344827586206895, 1.1724137931034484, 1.3103448275862069, 1.4482758620689653, 1.5862068965517242, 1.7241379310344827, 1.862068965517241, 2.0, 2.0, 1.862068965517241, 1.7241379310344827, 1.5862068965517242, 1.4482758620689653, 1.3103448275862069, 1.1724137931034484, 1.0344827586206895, 0.896551724137931, 0.7586206896551726, 0.6206896551724137, 0.48275862068965525, 0.34482758620689635, 0.2068965517241379, 0.06896551724137945, -0.06896551724137945, -0.2068965517241379, -0.3448275862068966, -0.48275862068965525, -0.6206896551724137, -0.7586206896551724, -0.896551724137931, -1.0344827586206897, -1.1724137931034484, -1.3103448275862069, -1.4482758620689655, -1.5862068965517242, -1.7241379310344827, -1.8620689655172413, -2.0], "y": [4.0, 3.4673008323424495, 2.9726516052318663, 2.5160523186682524, 2.0975029726516055, 1.7170035671819261, 1.3745541022592156, 1.0701545778834722, 0.8038049940546969, 0.5755053507728893, 0.38525564803804985, 0.23305588585017845, 0.11890606420927469, 0.04280618311533887, 0.004756242568371006, 0.004756242568371006, 0.04280618311533887, 0.11890606420927453, 0.23305588585017845, 0.38525564803804985, 0.5755053507728897, 0.8038049940546969, 1.0701545778834718, 1.3745541022592156, 1.7170035671819261, 2.0975029726516046, 2.5160523186682524, 2.9726516052318663, 3.4673008323424486, 4.0, 8.2, 7.52936979785969, 6.896789536266349, 6.302259215219976, 5.74577883472057, 5.227348394768133, 4.746967895362664, 4.304637336504161, 3.900356718192628, 3.5341260404280623, 3.2059453032104637, 2.9158145065398338, 2.6637336504161713, 2.449702734839477, 2.2737217598097508, 2.135790725326992, 2.0359096313912013, 1.9740784780023783, 1.9502972651605233, 1.9645659928656363, 2.016884661117717, 2.107253269916766, 2.235671819262783, 2.4021403091557674, 2.6066587395957193, 2.84922711058264, 3.1298454221165284, 3.448513674197384, 3.805231866825208, 4.2]}, "column_names": ["y", "x"], "id": "384e1505-4fe3-45ae-8545-3a7516dd46db", "doc": null, "tags": []}}, {"id": "142fcfc3-416a-4c48-a565-8351fe88ff2a", "type": "LinearAxis", "attributes": {"id": "142fcfc3-416a-4c48-a565-8351fe88ff2a", "formatter": {"id": "d5e2863b-8ac6-40ee-ad0b-3ae5b32e6285", "type": "BasicTickFormatter"}, "plot": {"id": "f59ba809-426b-41b4-9fba-f049aa41a103", "type": "Plot"}, "ticker": {"id": "0a363f4a-cd46-46ce-9e8a-45e233ac4003", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "44c335bc-161f-4fb9-8845-201c5b7e414f", "type": "BasicTicker", "attributes": {"id": "44c335bc-161f-4fb9-8845-201c5b7e414f", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "325e4122-18be-4af2-80bd-fd0b104265ea", "type": "Patch", "attributes": {"tags": [], "x": {"field": "x", "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "325e4122-18be-4af2-80bd-fd0b104265ea", "doc": null, "fill_color": {"value": "#a6cee3"}}}, {"id": "0a363f4a-cd46-46ce-9e8a-45e233ac4003", "type": "BasicTicker", "attributes": {"id": "0a363f4a-cd46-46ce-9e8a-45e233ac4003", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "01631f2f-215d-4606-9d7f-12ad0aa27a85", "type": "Grid", "attributes": {"id": "01631f2f-215d-4606-9d7f-12ad0aa27a85", "plot": {"id": "f59ba809-426b-41b4-9fba-f049aa41a103", "type": "Plot"}, "dimension": 1, "ticker": {"id": "44c335bc-161f-4fb9-8845-201c5b7e414f", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "d5e2863b-8ac6-40ee-ad0b-3ae5b32e6285", "type": "BasicTickFormatter", "attributes": {"id": "d5e2863b-8ac6-40ee-ad0b-3ae5b32e6285", "doc": null, "tags": []}}, {"id": "f59ba809-426b-41b4-9fba-f049aa41a103", "type": "Plot", "attributes": {"tool_events": {"id": "69ef808f-99b1-4663-b54a-eb8c1c0c63cb", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "9439bc49-2893-49b1-aeff-d73f40637cd6", "type": "GlyphRenderer"}, {"id": "142fcfc3-416a-4c48-a565-8351fe88ff2a", "type": "LinearAxis"}, {"id": "743d7994-a46b-4483-b7ca-2988814166d9", "type": "LinearAxis"}, {"id": "1cf6fbe4-4ec9-4aa6-9154-d6833b4d69c1", "type": "Grid"}, {"id": "01631f2f-215d-4606-9d7f-12ad0aa27a85", "type": "Grid"}], "left": [{"id": "743d7994-a46b-4483-b7ca-2988814166d9", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "4b683d84-7b6e-4474-9815-08750009d396", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "f59ba809-426b-41b4-9fba-f049aa41a103", "y_range": {"id": "9ce8bb2d-18d1-410a-8b37-b042a4dd3640", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "142fcfc3-416a-4c48-a565-8351fe88ff2a", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "743d7994-a46b-4483-b7ca-2988814166d9", "type": "LinearAxis", "attributes": {"id": "743d7994-a46b-4483-b7ca-2988814166d9", "formatter": {"id": "6d3a1ade-de0f-4b44-a1d8-d16da138b353", "type": "BasicTickFormatter"}, "plot": {"id": "f59ba809-426b-41b4-9fba-f049aa41a103", "type": "Plot"}, "ticker": {"id": "44c335bc-161f-4fb9-8845-201c5b7e414f", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "1cf6fbe4-4ec9-4aa6-9154-d6833b4d69c1", "type": "Grid", "attributes": {"id": "1cf6fbe4-4ec9-4aa6-9154-d6833b4d69c1", "plot": {"id": "f59ba809-426b-41b4-9fba-f049aa41a103", "type": "Plot"}, "dimension": 0, "ticker": {"id": "0a363f4a-cd46-46ce-9e8a-45e233ac4003", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "6d3a1ade-de0f-4b44-a1d8-d16da138b353", "type": "BasicTickFormatter", "attributes": {"id": "6d3a1ade-de0f-4b44-a1d8-d16da138b353", "doc": null, "tags": []}}, {"id": "9439bc49-2893-49b1-aeff-d73f40637cd6", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "384e1505-4fe3-45ae-8545-3a7516dd46db", "type": "ColumnDataSource"}, "id": "9439bc49-2893-49b1-aeff-d73f40637cd6", "glyph": {"id": "325e4122-18be-4af2-80bd-fd0b104265ea", "type": "Patch"}, "tags": [], "doc": null}}, {"id": "4b683d84-7b6e-4474-9815-08750009d396", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "384e1505-4fe3-45ae-8545-3a7516dd46db", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "4b683d84-7b6e-4474-9815-08750009d396", "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("fb085b3e-34df-43ae-ad0c-487230789fd9", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("fb085b3e-34df-43ae-ad0c-487230789fd9", all_models);
    });
  }

}(this));