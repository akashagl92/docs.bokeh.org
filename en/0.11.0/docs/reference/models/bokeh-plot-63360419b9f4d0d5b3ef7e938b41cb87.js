
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
  };var element = document.getElementById("4e3be302-816c-492b-a76d-77840b742248");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '4e3be302-816c-492b-a76d-77840b742248' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"5ed9c7e7-dd8c-4a4c-becd-8bcd39585e31": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ColumnDataSource", "id": "9d9b992a-8b2b-49b9-97e4-8c05c855659d", "attributes": {"callback": null}}, {"type": "GlyphRenderer", "id": "b04b02a1-34fc-409b-bf7a-970bfb8b62e3", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "b4d82b5c-007e-4e9d-92e1-35a8e7e3d748"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Gear", "id": "897ce35c-57fe-4d56-95ee-c22b76937642"}}}, {"type": "Gear", "id": "ccb1e008-07c9-43cd-8e22-0b2a847f7000", "attributes": {"line_color": {"value": "#606060"}, "y": {"value": 90.0}, "angle": {"value": 0.2617993877991494, "units": "rad"}, "module": {"value": 5}, "teeth": {"value": 12}, "x": {"value": 0.0}, "fill_color": {"value": "#d0d0e8"}}}, {"type": "GlyphRenderer", "id": "55fe982c-970d-497e-8cd3-a50a64837795", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "6437c253-4988-4149-bc33-aacbb41b9906"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Gear", "id": "af736d33-858e-4d8e-8a17-33e3461a0c4b"}}}, {"type": "Gear", "id": "af736d33-858e-4d8e-8a17-33e3461a0c4b", "attributes": {"line_color": {"value": "#606060"}, "y": {"value": 0}, "module": {"value": 5}, "teeth": {"value": 24}, "x": {"value": 0}, "fill_color": {"value": "#ddddd0"}}}, {"type": "ColumnDataSource", "id": "b6949ae8-d1ca-41ce-ad1d-d8338a6607c0", "attributes": {"callback": null}}, {"type": "Gear", "id": "a1b61fda-4e9f-4166-accb-4dcf43735449", "attributes": {"line_color": {"value": "#606060"}, "internal": {"value": true}, "y": {"value": 0}, "module": {"value": 5}, "teeth": {"value": 48}, "x": {"value": 0}, "fill_color": {"value": "#ddd0dd"}}}, {"type": "ColumnDataSource", "id": "6437c253-4988-4149-bc33-aacbb41b9906", "attributes": {"callback": null}}, {"type": "GlyphRenderer", "id": "f3ad8254-fbf1-4d58-b0d8-ed4385d3426c", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "da9e37a1-fd1b-4750-8b9d-f84c443dfc10"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Gear", "id": "ccb1e008-07c9-43cd-8e22-0b2a847f7000"}}}, {"type": "GlyphRenderer", "id": "575ee594-8cd5-461d-ab6b-298c3df9460f", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "b6949ae8-d1ca-41ce-ad1d-d8338a6607c0"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Gear", "id": "3312b5b4-0a1c-401a-857e-d02309b8beb1"}}}, {"type": "GlyphRenderer", "id": "d21af06e-4b28-4733-97ec-c6de29ed5bcd", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "9d9b992a-8b2b-49b9-97e4-8c05c855659d"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Gear", "id": "501370d4-5eb6-4290-ad40-eefde3681645"}}}, {"type": "GlyphRenderer", "id": "cddd009e-8cb4-4827-bbb8-290c002f7a96", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "ac10ae63-fe61-446e-826f-4feb5dd38d10"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Gear", "id": "a1b61fda-4e9f-4166-accb-4dcf43735449"}}}, {"type": "Range1d", "id": "e63d2b5d-af9e-4728-8c3f-7d4365843ed1", "attributes": {"start": -150, "end": 150, "callback": null}}, {"type": "Gear", "id": "501370d4-5eb6-4290-ad40-eefde3681645", "attributes": {"line_color": {"value": "#606060"}, "y": {"value": 0.0}, "angle": {"value": 0.2617993877991494, "units": "rad"}, "module": {"value": 5}, "teeth": {"value": 12}, "x": {"value": 90.0}, "fill_color": {"value": "#d0d0e8"}}}, {"type": "Range1d", "id": "894f5525-2f47-4862-b5cc-b8f3eb813291", "attributes": {"start": -150, "end": 150, "callback": null}}, {"type": "Plot", "id": "ece0940d-c5c4-420c-9d8a-2ea767eeb0fc", "attributes": {"min_border": 0, "x_range": {"type": "Range1d", "id": "894f5525-2f47-4862-b5cc-b8f3eb813291"}, "plot_height": 300, "renderers": [{"type": "GlyphRenderer", "id": "cddd009e-8cb4-4827-bbb8-290c002f7a96"}, {"type": "GlyphRenderer", "id": "55fe982c-970d-497e-8cd3-a50a64837795"}, {"type": "GlyphRenderer", "id": "d21af06e-4b28-4733-97ec-c6de29ed5bcd"}, {"type": "GlyphRenderer", "id": "f3ad8254-fbf1-4d58-b0d8-ed4385d3426c"}, {"type": "GlyphRenderer", "id": "575ee594-8cd5-461d-ab6b-298c3df9460f"}, {"type": "GlyphRenderer", "id": "b04b02a1-34fc-409b-bf7a-970bfb8b62e3"}], "y_range": {"type": "Range1d", "id": "e63d2b5d-af9e-4728-8c3f-7d4365843ed1"}, "plot_width": 300, "h_symmetry": false, "tool_events": {"type": "ToolEvents", "id": "745a98c6-e472-415c-b091-51c208bed48e"}, "toolbar_location": null, "title": null}}, {"type": "ToolEvents", "id": "745a98c6-e472-415c-b091-51c208bed48e", "attributes": {}}, {"type": "Gear", "id": "897ce35c-57fe-4d56-95ee-c22b76937642", "attributes": {"line_color": {"value": "#606060"}, "y": {"value": -90.0}, "angle": {"value": 0.2617993877991494, "units": "rad"}, "module": {"value": 5}, "teeth": {"value": 12}, "x": {"value": 0.0}, "fill_color": {"value": "#d0d0e8"}}}, {"type": "ColumnDataSource", "id": "da9e37a1-fd1b-4750-8b9d-f84c443dfc10", "attributes": {"callback": null}}, {"type": "Gear", "id": "3312b5b4-0a1c-401a-857e-d02309b8beb1", "attributes": {"line_color": {"value": "#606060"}, "y": {"value": 0.0}, "angle": {"value": 0.2617993877991494, "units": "rad"}, "module": {"value": 5}, "teeth": {"value": 12}, "x": {"value": -90.0}, "fill_color": {"value": "#d0d0e8"}}}, {"type": "ColumnDataSource", "id": "b4d82b5c-007e-4e9d-92e1-35a8e7e3d748", "attributes": {"callback": null}}, {"type": "ColumnDataSource", "id": "ac10ae63-fe61-446e-826f-4feb5dd38d10", "attributes": {"callback": null}}], "root_ids": ["ece0940d-c5c4-420c-9d8a-2ea767eeb0fc"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "5ed9c7e7-dd8c-4a4c-becd-8bcd39585e31", "modelid": "ece0940d-c5c4-420c-9d8a-2ea767eeb0fc", "elementid": "4e3be302-816c-492b-a76d-77840b742248"}];
          
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