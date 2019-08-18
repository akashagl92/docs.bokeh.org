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

  var elt = document.getElementById("9f9b7ae4-68cb-482a-8558-e653a162cbdc");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '9f9b7ae4-68cb-482a-8558-e653a162cbdc' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "33e20ddd-7a16-4151-93e8-f2149a364ba4", "tags": []}, "id": "33e20ddd-7a16-4151-93e8-f2149a364ba4"}, {"type": "ImageURL", "attributes": {"y": {"field": "y2"}, "doc": null, "id": "069e5fa6-527a-4c7e-8316-bfee7931fd2a", "tags": [], "w": {"units": "data", "value": 20}, "x": {"field": "x2"}, "url": {"field": "url"}, "h": {"units": "data", "value": 20}, "anchor": "top_left"}, "id": "069e5fa6-527a-4c7e-8316-bfee7931fd2a"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "15e7d80d-a54b-4eaa-b450-78b9f4b07b07", "tags": []}, "id": "15e7d80d-a54b-4eaa-b450-78b9f4b07b07"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "2ef4b15e-e9ae-4602-9981-28f38a4ed992", "tags": []}, "id": "2ef4b15e-e9ae-4602-9981-28f38a4ed992"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "d52ffb99-7ad1-4bdd-9f3d-cf4ca070d205", "tags": []}, "id": "d52ffb99-7ad1-4bdd-9f3d-cf4ca070d205"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "d52ffb99-7ad1-4bdd-9f3d-cf4ca070d205"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "de9d7fc6-99e3-45e2-b4fc-b433251725ae"}, "dimension": 0, "id": "d9f3b944-14b7-4a9d-b8aa-02ea830b40ad"}, "id": "d9f3b944-14b7-4a9d-b8aa-02ea830b40ad"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "2ef4b15e-e9ae-4602-9981-28f38a4ed992"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "de9d7fc6-99e3-45e2-b4fc-b433251725ae"}, "dimension": 1, "id": "bcef9f3e-c158-4b05-b3ee-576e7083b6ca"}, "id": "bcef9f3e-c158-4b05-b3ee-576e7083b6ca"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "54905b38-d980-47c4-a872-8d39179e885b"}, "tags": [], "glyph": {"type": "ImageURL", "id": "069e5fa6-527a-4c7e-8316-bfee7931fd2a"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "a6c49235-d038-46ad-954d-fafac97f0561"}, "id": "a6c49235-d038-46ad-954d-fafac97f0561"}, {"type": "Range1d", "attributes": {"callback": null, "id": "263ee0d5-4698-433e-bfa0-96be0c2cd5dc", "tags": [], "doc": null, "end": 200, "start": -100}, "id": "263ee0d5-4698-433e-bfa0-96be0c2cd5dc"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "b3bce649-455b-4e97-ac3c-a98a2f095eb8", "tags": [], "geometries": []}, "id": "b3bce649-455b-4e97-ac3c-a98a2f095eb8"}, {"type": "ImageURL", "attributes": {"y": {"field": "y1"}, "doc": null, "id": "25d976fc-1224-450c-95a0-9eb044b9c8e8", "tags": [], "w": {"units": "data", "field": "w1"}, "x": {"field": "x1"}, "url": {"field": "url"}, "h": {"units": "data", "field": "h1"}, "anchor": "center"}, "id": "25d976fc-1224-450c-95a0-9eb044b9c8e8"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "54905b38-d980-47c4-a872-8d39179e885b"}, "tags": [], "glyph": {"type": "ImageURL", "id": "25d976fc-1224-450c-95a0-9eb044b9c8e8"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "522abf10-8749-4e86-aef6-4c679d4fde69"}, "id": "522abf10-8749-4e86-aef6-4c679d4fde69"}, {"type": "ImageURL", "attributes": {"y": {"value": -100}, "doc": null, "id": "0f7af7e7-fa2d-40c7-9375-7a758b6e408f", "tags": [], "url": {"value": "http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png"}, "x": {"value": 200}, "anchor": "bottom_right"}, "id": "0f7af7e7-fa2d-40c7-9375-7a758b6e408f"}, {"type": "Range1d", "attributes": {"callback": null, "id": "a9a67142-09ab-4fb8-a1d2-dce6979786c9", "tags": [], "doc": null, "end": 200, "start": -100}, "id": "a9a67142-09ab-4fb8-a1d2-dce6979786c9"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"h1": [10.0, 20.0, 30.0, 40.0, 50.0], "x1": [0.0, 37.5, 75.0, 112.5, 150.0], "y2": [0.0, 50.0, 100.0, 150.0, 200.0], "w1": [10.0, 20.0, 30.0, 40.0, 50.0], "url": ["http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png", "http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png", "http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png", "http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png", "http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png"], "x2": [-50.0, 0.0, 50.0, 100.0, 150.0], "y1": [0.0, 37.5, 75.0, 112.5, 150.0]}, "doc": null, "id": "54905b38-d980-47c4-a872-8d39179e885b", "column_names": ["h1", "x1", "y2", "w1", "url", "x2", "y1"]}, "id": "54905b38-d980-47c4-a872-8d39179e885b"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "d52ffb99-7ad1-4bdd-9f3d-cf4ca070d205"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "15e7d80d-a54b-4eaa-b450-78b9f4b07b07"}, "plot": {"type": "Plot", "id": "de9d7fc6-99e3-45e2-b4fc-b433251725ae"}, "id": "5bf2f39b-d086-441b-aadf-1f7759f09da8"}, "id": "5bf2f39b-d086-441b-aadf-1f7759f09da8"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "54905b38-d980-47c4-a872-8d39179e885b"}, "tags": [], "glyph": {"type": "ImageURL", "id": "0f7af7e7-fa2d-40c7-9375-7a758b6e408f"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "1618e0b2-363c-4149-a789-a58b3ae965e3"}, "id": "1618e0b2-363c-4149-a789-a58b3ae965e3"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "2ef4b15e-e9ae-4602-9981-28f38a4ed992"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "33e20ddd-7a16-4151-93e8-f2149a364ba4"}, "plot": {"type": "Plot", "id": "de9d7fc6-99e3-45e2-b4fc-b433251725ae"}, "id": "3917c344-723c-483d-ade9-b477978b9c66"}, "id": "3917c344-723c-483d-ade9-b477978b9c66"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "3917c344-723c-483d-ade9-b477978b9c66"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "Range1d", "id": "263ee0d5-4698-433e-bfa0-96be0c2cd5dc"}, "id": "de9d7fc6-99e3-45e2-b4fc-b433251725ae", "extra_x_ranges": {}, "y_range": {"type": "Range1d", "id": "a9a67142-09ab-4fb8-a1d2-dce6979786c9"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "b3bce649-455b-4e97-ac3c-a98a2f095eb8"}, "renderers": [{"type": "GlyphRenderer", "id": "522abf10-8749-4e86-aef6-4c679d4fde69"}, {"type": "GlyphRenderer", "id": "a6c49235-d038-46ad-954d-fafac97f0561"}, {"type": "GlyphRenderer", "id": "1618e0b2-363c-4149-a789-a58b3ae965e3"}, {"type": "LinearAxis", "id": "5bf2f39b-d086-441b-aadf-1f7759f09da8"}, {"type": "LinearAxis", "id": "3917c344-723c-483d-ade9-b477978b9c66"}, {"type": "Grid", "id": "d9f3b944-14b7-4a9d-b8aa-02ea830b40ad"}, {"type": "Grid", "id": "bcef9f3e-c158-4b05-b3ee-576e7083b6ca"}], "below": [{"type": "LinearAxis", "id": "5bf2f39b-d086-441b-aadf-1f7759f09da8"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "de9d7fc6-99e3-45e2-b4fc-b433251725ae"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("9f9b7ae4-68cb-482a-8558-e653a162cbdc", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("9f9b7ae4-68cb-482a-8558-e653a162cbdc", all_models);
    });
  }

}(this));