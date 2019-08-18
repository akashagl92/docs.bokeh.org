
(function(global) {
  function now() {
    return new Date();
  }

  if (typeof (window._bokeh_onload_callbacks) === "undefined") {
    window._bokeh_onload_callbacks = [];
  }

  function run_callbacks() {
    window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
    delete window._bokeh_onload_callbacks
    console.info("Bokeh: all callbacks have finished");
  }

  function load_libs(js_urls, callback) {
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading > 0) {
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
      return null;
    }
    if (js_urls == null || js_urls.length === 0) {
      run_callbacks();
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
    window._bokeh_is_loading = js_urls.length;
    for (var i = 0; i < js_urls.length; i++) {
      var url = js_urls[i];
      var s = document.createElement('script');
      s.src = url;
      s.async = false;
      s.onreadystatechange = s.onload = function() {
        window._bokeh_is_loading--;
        if (window._bokeh_is_loading === 0) {
          console.log("Bokeh: all BokehJS libraries loaded");
          run_callbacks()
        }
      };
      s.onerror = function() {
        console.warn("failed to load library " + url);
      };
      console.log("Bokeh: injecting script tag for BokehJS library: ", url);
      document.getElementsByTagName("head")[0].appendChild(s);
    }
  };var element = document.getElementById("5cc75df7-806a-4159-9b95-b1cb22f4ae5d");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '5cc75df7-806a-4159-9b95-b1cb22f4ae5d' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"2807c32f-2f63-4e8c-91df-525800093de0": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTickFormatter", "id": "f6a404ee-ee1c-421b-b2b1-7afe6209cad7", "attributes": {}}, {"type": "GlyphRenderer", "id": "bbcb0f87-dd0e-40bd-a653-902121216a9b", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "7024a810-e311-463f-95c8-d242a4fc4f68"}, "nonselection_glyph": {"type": "Circle", "id": "bef2f635-5012-4e6c-b8de-727031c42d5f"}, "selection_glyph": {"type": "Circle", "id": "41f2e81b-407f-4a59-a353-8473d1174353"}, "hover_glyph": null, "glyph": {"type": "Circle", "id": "b9fb8540-d5da-49dd-a762-e6d4d7dcf52d"}}}, {"type": "ToolEvents", "id": "dde35761-535b-4358-988a-28116bf294bf", "attributes": {}}, {"type": "Circle", "id": "41f2e81b-407f-4a59-a353-8473d1174353", "attributes": {"line_color": {"value": "firebrick"}, "x": {"field": "x"}, "size": {"value": 50, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "firebrick"}}}, {"type": "BasicTickFormatter", "id": "1cafa6a1-61d5-4b6f-829e-b03ed93dbba8", "attributes": {}}, {"type": "BasicTicker", "id": "0cf8bfd3-9822-4aed-b1e8-ed3dc17195dd", "attributes": {}}, {"type": "LinearAxis", "id": "369b5879-0515-4379-822f-00b6cdb1e300", "attributes": {"ticker": {"type": "BasicTicker", "id": "0cf8bfd3-9822-4aed-b1e8-ed3dc17195dd"}, "formatter": {"type": "BasicTickFormatter", "id": "f6a404ee-ee1c-421b-b2b1-7afe6209cad7"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "b75f2fa6-e4ee-458a-89fd-a1f08a70eaeb"}}}, {"type": "Grid", "id": "2821de3c-2d19-44a6-9fe8-b6254d191270", "attributes": {"ticker": {"type": "BasicTicker", "id": "0cf8bfd3-9822-4aed-b1e8-ed3dc17195dd"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "b75f2fa6-e4ee-458a-89fd-a1f08a70eaeb"}}}, {"type": "Circle", "id": "b9fb8540-d5da-49dd-a762-e6d4d7dcf52d", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 50, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "Grid", "id": "e6264a7b-3798-473c-98dc-6196b8baed9a", "attributes": {"ticker": {"type": "BasicTicker", "id": "9ea415bf-04d9-4d33-8b5f-2d2118a27a7a"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "b75f2fa6-e4ee-458a-89fd-a1f08a70eaeb"}}}, {"type": "LinearAxis", "id": "b7a48c09-a499-4775-a5c3-9d6222fe4db9", "attributes": {"ticker": {"type": "BasicTicker", "id": "9ea415bf-04d9-4d33-8b5f-2d2118a27a7a"}, "formatter": {"type": "BasicTickFormatter", "id": "1cafa6a1-61d5-4b6f-829e-b03ed93dbba8"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "b75f2fa6-e4ee-458a-89fd-a1f08a70eaeb"}}}, {"type": "ColumnDataSource", "id": "7024a810-e311-463f-95c8-d242a4fc4f68", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["y", "x"], "callback": null}}, {"type": "DataRange1d", "id": "64259bcc-44fa-47af-bc54-93784128495a", "attributes": {"callback": null}}, {"type": "TapTool", "id": "3b2b8ac7-5961-43dd-b778-7a2045d203f0", "attributes": {"callback": null, "plot": {"type": "Plot", "subtype": "Figure", "id": "b75f2fa6-e4ee-458a-89fd-a1f08a70eaeb"}}}, {"type": "Plot", "id": "b75f2fa6-e4ee-458a-89fd-a1f08a70eaeb", "attributes": {"tools": [{"type": "TapTool", "id": "3b2b8ac7-5961-43dd-b778-7a2045d203f0"}], "plot_width": 400, "x_range": {"type": "DataRange1d", "id": "64259bcc-44fa-47af-bc54-93784128495a"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "b7a48c09-a499-4775-a5c3-9d6222fe4db9"}, {"type": "Grid", "id": "e6264a7b-3798-473c-98dc-6196b8baed9a"}, {"type": "LinearAxis", "id": "369b5879-0515-4379-822f-00b6cdb1e300"}, {"type": "Grid", "id": "2821de3c-2d19-44a6-9fe8-b6254d191270"}, {"type": "GlyphRenderer", "id": "bbcb0f87-dd0e-40bd-a653-902121216a9b"}], "y_range": {"type": "DataRange1d", "id": "70001bdd-b41a-4db5-8ffc-dc404084f8c3"}, "left": [{"type": "LinearAxis", "id": "369b5879-0515-4379-822f-00b6cdb1e300"}], "below": [{"type": "LinearAxis", "id": "b7a48c09-a499-4775-a5c3-9d6222fe4db9"}], "tool_events": {"type": "ToolEvents", "id": "dde35761-535b-4358-988a-28116bf294bf"}, "title": "Select a circle"}, "subtype": "Figure"}, {"type": "BasicTicker", "id": "9ea415bf-04d9-4d33-8b5f-2d2118a27a7a", "attributes": {}}, {"type": "Circle", "id": "bef2f635-5012-4e6c-b8de-727031c42d5f", "attributes": {"line_color": {"value": "firebrick"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 50, "units": "screen"}, "fill_color": {"value": "blue"}, "fill_alpha": {"value": 0.2}}}, {"type": "DataRange1d", "id": "70001bdd-b41a-4db5-8ffc-dc404084f8c3", "attributes": {"callback": null}}], "root_ids": ["b75f2fa6-e4ee-458a-89fd-a1f08a70eaeb"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "2807c32f-2f63-4e8c-91df-525800093de0", "modelid": "b75f2fa6-e4ee-458a-89fd-a1f08a70eaeb", "elementid": "5cc75df7-806a-4159-9b95-b1cb22f4ae5d"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.css");
    }
  ];

  function run_inline_js() {
    for (var i = 0; i < inline_js.length; i++) {
      inline_js[i](window.Bokeh);
    }
  }

  if (window._bokeh_is_loading === 0) {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    run_inline_js();
  } else {
    load_libs(js_urls, function() {
      console.log("Bokeh: BokehJS plotting callback run at", now());
      run_inline_js();
    });
  }
}(this));