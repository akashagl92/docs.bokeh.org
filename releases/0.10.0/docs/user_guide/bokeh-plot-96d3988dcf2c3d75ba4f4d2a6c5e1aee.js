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

  var elt = document.getElementById("07505f81-cef5-43a7-86d4-5dee7965745a");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '07505f81-cef5-43a7-86d4-5dee7965745a' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "eb8495ff-0cd9-4133-a762-d254fb38b7af"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "fa3bf7eb-8fdf-4689-84eb-71dbdcdfabc6"}, "id": "400edc0a-b53a-492e-89d7-c31f763a6dbc"}, "type": "Grid", "id": "400edc0a-b53a-492e-89d7-c31f763a6dbc"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "eb8495ff-0cd9-4133-a762-d254fb38b7af"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "1de9e673-f04d-422e-a6b7-eb507454909f"}, "type": "BoxZoomTool", "id": "1de9e673-f04d-422e-a6b7-eb507454909f"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "eb8495ff-0cd9-4133-a762-d254fb38b7af"}, "tags": [], "doc": null, "id": "826fe02a-6436-419c-824d-b4deea320a3b"}, "type": "PreviewSaveTool", "id": "826fe02a-6436-419c-824d-b4deea320a3b"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "eb8495ff-0cd9-4133-a762-d254fb38b7af"}, "tags": [], "doc": null, "id": "5edc7a68-8bb2-44e2-9bc4-32d55171df3e"}, "type": "HelpTool", "id": "5edc7a68-8bb2-44e2-9bc4-32d55171df3e"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "eb8495ff-0cd9-4133-a762-d254fb38b7af"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "2772b975-1c81-46ab-98c9-c5b138f38f00"}, "type": "PanTool", "id": "2772b975-1c81-46ab-98c9-c5b138f38f00"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "eb8495ff-0cd9-4133-a762-d254fb38b7af"}, "tags": [], "doc": null, "id": "937314a3-e325-42f5-890f-4daf81ca9851"}, "type": "ResizeTool", "id": "937314a3-e325-42f5-890f-4daf81ca9851"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "5964e703-5214-4119-8079-d2f335901b38", "size": {"units": "screen", "value": 10}}, "type": "Circle", "id": "5964e703-5214-4119-8079-d2f335901b38"}, {"subtype": "Figure", "type": "Plot", "id": "eb8495ff-0cd9-4133-a762-d254fb38b7af", "attributes": {"x_range": {"type": "DataRange1d", "id": "42d8af16-62ca-4aa9-a64b-d545d8c67d6e"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "2772b975-1c81-46ab-98c9-c5b138f38f00"}, {"type": "WheelZoomTool", "id": "1c4bf56c-8f9e-4145-af65-c863e9720d11"}, {"type": "BoxZoomTool", "id": "1de9e673-f04d-422e-a6b7-eb507454909f"}, {"type": "PreviewSaveTool", "id": "826fe02a-6436-419c-824d-b4deea320a3b"}, {"type": "ResizeTool", "id": "937314a3-e325-42f5-890f-4daf81ca9851"}, {"type": "ResetTool", "id": "c5b558e5-daeb-4a5d-bc33-9a2b0bc73091"}, {"type": "HelpTool", "id": "5edc7a68-8bb2-44e2-9bc4-32d55171df3e"}], "extra_y_ranges": {}, "plot_width": 400, "renderers": [{"type": "LinearAxis", "id": "9dea7eec-4654-4752-b22e-71fd2ac45405"}, {"type": "Grid", "id": "400edc0a-b53a-492e-89d7-c31f763a6dbc"}, {"type": "LinearAxis", "id": "82a579d9-c176-49b3-a566-78c4788916e5"}, {"type": "Grid", "id": "322250cc-7196-422a-b7ea-8fa931c1847b"}, {"type": "GlyphRenderer", "id": "68191d36-630f-4047-8038-f3852d512af5"}], "extra_x_ranges": {}, "plot_height": 400, "tool_events": {"type": "ToolEvents", "id": "602e4760-66c0-490d-b5d9-488c2e65400b"}, "above": [], "doc": null, "id": "eb8495ff-0cd9-4133-a762-d254fb38b7af", "y_range": {"type": "DataRange1d", "id": "d9f914a6-4adb-41be-9377-ab04e50d4f41"}, "below": [{"type": "LinearAxis", "id": "9dea7eec-4654-4752-b22e-71fd2ac45405"}], "left": [{"type": "LinearAxis", "id": "82a579d9-c176-49b3-a566-78c4788916e5"}]}}, {"attributes": {"doc": null, "id": "035fbaf6-e8ad-47c4-b03b-77455a545813", "tags": []}, "type": "BasicTickFormatter", "id": "035fbaf6-e8ad-47c4-b03b-77455a545813"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "eb8495ff-0cd9-4133-a762-d254fb38b7af"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "1c4bf56c-8f9e-4145-af65-c863e9720d11"}, "type": "WheelZoomTool", "id": "1c4bf56c-8f9e-4145-af65-c863e9720d11"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "eb8495ff-0cd9-4133-a762-d254fb38b7af"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "2775985b-48eb-40d9-871d-1fe7b8f762c8"}, "ticker": {"type": "BasicTicker", "id": "ac193746-12e0-4ff4-8ff2-00000a918595"}, "id": "82a579d9-c176-49b3-a566-78c4788916e5"}, "type": "LinearAxis", "id": "82a579d9-c176-49b3-a566-78c4788916e5"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "eb8495ff-0cd9-4133-a762-d254fb38b7af"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "ac193746-12e0-4ff4-8ff2-00000a918595"}, "id": "322250cc-7196-422a-b7ea-8fa931c1847b"}, "type": "Grid", "id": "322250cc-7196-422a-b7ea-8fa931c1847b"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "16766405-6942-40a7-91a5-ea52d8ca0218"}, "data_source": {"type": "ColumnDataSource", "id": "1ece0f78-e4e6-433e-9185-edeb1ee35fff"}, "tags": [], "doc": null, "selection_glyph": null, "id": "68191d36-630f-4047-8038-f3852d512af5", "glyph": {"type": "Circle", "id": "5964e703-5214-4119-8079-d2f335901b38"}}, "type": "GlyphRenderer", "id": "68191d36-630f-4047-8038-f3852d512af5"}, {"attributes": {"doc": null, "id": "2775985b-48eb-40d9-871d-1fe7b8f762c8", "tags": []}, "type": "BasicTickFormatter", "id": "2775985b-48eb-40d9-871d-1fe7b8f762c8"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "eb8495ff-0cd9-4133-a762-d254fb38b7af"}, "tags": [], "doc": null, "bounds": [2, 4], "formatter": {"type": "BasicTickFormatter", "id": "035fbaf6-e8ad-47c4-b03b-77455a545813"}, "ticker": {"type": "BasicTicker", "id": "fa3bf7eb-8fdf-4689-84eb-71dbdcdfabc6"}, "id": "9dea7eec-4654-4752-b22e-71fd2ac45405"}, "type": "LinearAxis", "id": "9dea7eec-4654-4752-b22e-71fd2ac45405"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "fa3bf7eb-8fdf-4689-84eb-71dbdcdfabc6", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "fa3bf7eb-8fdf-4689-84eb-71dbdcdfabc6"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "42d8af16-62ca-4aa9-a64b-d545d8c67d6e"}, "type": "DataRange1d", "id": "42d8af16-62ca-4aa9-a64b-d545d8c67d6e"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [2, 5, 8, 2, 7], "x": [1, 2, 3, 4, 5]}, "id": "1ece0f78-e4e6-433e-9185-edeb1ee35fff"}, "type": "ColumnDataSource", "id": "1ece0f78-e4e6-433e-9185-edeb1ee35fff"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "eb8495ff-0cd9-4133-a762-d254fb38b7af"}, "tags": [], "doc": null, "id": "c5b558e5-daeb-4a5d-bc33-9a2b0bc73091"}, "type": "ResetTool", "id": "c5b558e5-daeb-4a5d-bc33-9a2b0bc73091"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "ac193746-12e0-4ff4-8ff2-00000a918595", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "ac193746-12e0-4ff4-8ff2-00000a918595"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "602e4760-66c0-490d-b5d9-488c2e65400b"}, "type": "ToolEvents", "id": "602e4760-66c0-490d-b5d9-488c2e65400b"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "16766405-6942-40a7-91a5-ea52d8ca0218", "size": {"units": "screen", "value": 10}}, "type": "Circle", "id": "16766405-6942-40a7-91a5-ea52d8ca0218"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "d9f914a6-4adb-41be-9377-ab04e50d4f41"}, "type": "DataRange1d", "id": "d9f914a6-4adb-41be-9377-ab04e50d4f41"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("07505f81-cef5-43a7-86d4-5dee7965745a", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("07505f81-cef5-43a7-86d4-5dee7965745a", all_models);
    });
  }

}(this));