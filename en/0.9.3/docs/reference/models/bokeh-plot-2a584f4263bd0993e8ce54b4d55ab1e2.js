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

  var elt = document.getElementById("2228c1f7-4937-493d-95be-067f4d80318c");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '2228c1f7-4937-493d-95be-067f4d80318c' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "8da373a3-c07a-4c5a-80ec-f471851b719c", "tags": []}, "id": "8da373a3-c07a-4c5a-80ec-f471851b719c"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "4aea364b-066e-4c2f-8c1b-7a53fea63ad4", "tags": []}, "id": "4aea364b-066e-4c2f-8c1b-7a53fea63ad4"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "1d64d252-882d-422b-8938-f0ed33cdddec"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "ab99fdca-a2f5-4b4a-a664-c8394095e5aa"}, "plot": {"type": "Plot", "id": "d25ce744-f297-41da-b7fd-9b772480a387"}, "id": "d3ab72ae-fba0-44cc-940a-1cc18724a58f"}, "id": "d3ab72ae-fba0-44cc-940a-1cc18724a58f"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "ab99fdca-a2f5-4b4a-a664-c8394095e5aa", "tags": []}, "id": "ab99fdca-a2f5-4b4a-a664-c8394095e5aa"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "d3ab72ae-fba0-44cc-940a-1cc18724a58f"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "0f4dfc96-4745-4cc6-9942-595f2e72925e"}, "id": "d25ce744-f297-41da-b7fd-9b772480a387", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "3e19c9c9-1862-48ac-bb25-258c943093b5"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "b8cc5163-937c-49d6-a70a-50837f1a00f5"}, "renderers": [{"type": "GlyphRenderer", "id": "6cc16036-c37a-40b2-9477-22aba49c8f45"}, {"type": "LinearAxis", "id": "799e51ab-aa2a-4746-9ed7-fd60025f55ce"}, {"type": "LinearAxis", "id": "d3ab72ae-fba0-44cc-940a-1cc18724a58f"}, {"type": "Grid", "id": "1ebceda2-4ce8-46af-81d1-ca4d228dda12"}, {"type": "Grid", "id": "07348511-dfce-4fb5-a936-afe7c99395fc"}], "below": [{"type": "LinearAxis", "id": "799e51ab-aa2a-4746-9ed7-fd60025f55ce"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "d25ce744-f297-41da-b7fd-9b772480a387"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "8da373a3-c07a-4c5a-80ec-f471851b719c"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "4aea364b-066e-4c2f-8c1b-7a53fea63ad4"}, "plot": {"type": "Plot", "id": "d25ce744-f297-41da-b7fd-9b772480a387"}, "id": "799e51ab-aa2a-4746-9ed7-fd60025f55ce"}, "id": "799e51ab-aa2a-4746-9ed7-fd60025f55ce"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "1d64d252-882d-422b-8938-f0ed33cdddec", "tags": []}, "id": "1d64d252-882d-422b-8938-f0ed33cdddec"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "1d64d252-882d-422b-8938-f0ed33cdddec"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "d25ce744-f297-41da-b7fd-9b772480a387"}, "dimension": 1, "id": "07348511-dfce-4fb5-a936-afe7c99395fc"}, "id": "07348511-dfce-4fb5-a936-afe7c99395fc"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "8da373a3-c07a-4c5a-80ec-f471851b719c"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "d25ce744-f297-41da-b7fd-9b772480a387"}, "dimension": 0, "id": "1ebceda2-4ce8-46af-81d1-ca4d228dda12"}, "id": "1ebceda2-4ce8-46af-81d1-ca4d228dda12"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "3e19c9c9-1862-48ac-bb25-258c943093b5", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "3e19c9c9-1862-48ac-bb25-258c943093b5"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"right": [-0.8999999999999999, -0.8625, -0.6000000000000001, -0.1875, 0.3, 0.7875, 1.2, 1.4625000000000001, 1.5], "left": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "bottom": [4.1, 2.525, 1.4, 0.725, 0.5, 0.725, 1.4, 2.525, 4.1], "top": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "doc": null, "id": "09a7bf35-1267-4a16-ab83-453c8653a660", "column_names": ["right", "left", "bottom", "top"]}, "id": "09a7bf35-1267-4a16-ab83-453c8653a660"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "09a7bf35-1267-4a16-ab83-453c8653a660"}, "tags": [], "glyph": {"type": "Quad", "id": "1706d827-59e6-471a-9d6e-41f6eb07f8a2"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "6cc16036-c37a-40b2-9477-22aba49c8f45"}, "id": "6cc16036-c37a-40b2-9477-22aba49c8f45"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "0f4dfc96-4745-4cc6-9942-595f2e72925e", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "0f4dfc96-4745-4cc6-9942-595f2e72925e"}, {"type": "Quad", "attributes": {"right": {"field": "right"}, "left": {"field": "left"}, "fill_color": {"value": "#b3de69"}, "tags": [], "bottom": {"field": "bottom"}, "doc": null, "id": "1706d827-59e6-471a-9d6e-41f6eb07f8a2", "top": {"field": "top"}}, "id": "1706d827-59e6-471a-9d6e-41f6eb07f8a2"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "b8cc5163-937c-49d6-a70a-50837f1a00f5", "tags": [], "geometries": []}, "id": "b8cc5163-937c-49d6-a70a-50837f1a00f5"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("2228c1f7-4937-493d-95be-067f4d80318c", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("2228c1f7-4937-493d-95be-067f4d80318c", all_models);
    });
  }

}(this));