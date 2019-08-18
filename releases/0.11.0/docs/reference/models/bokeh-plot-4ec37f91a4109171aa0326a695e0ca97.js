
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
  };var element = document.getElementById("f15517da-1e91-4f9d-b1e9-c34bc2b3f7c1");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'f15517da-1e91-4f9d-b1e9-c34bc2b3f7c1' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"7c5f44ee-c265-4c34-951d-a495ef7667c6": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTickFormatter", "id": "6d9144be-aa34-4f9e-bc8b-3e30df3718fa", "attributes": {}}, {"type": "ToolEvents", "id": "179952fb-c783-4e06-9bff-de30068bf707", "attributes": {}}, {"type": "BasicTicker", "id": "86e45397-450e-4c96-b657-3e099a8d46a1", "attributes": {}}, {"type": "DataRange1d", "id": "6480eb00-3acf-49cc-969d-2aced41716fd", "attributes": {"callback": null}}, {"type": "LinearAxis", "id": "d5e47859-c1fe-4778-aa14-d61a294e570b", "attributes": {"ticker": {"type": "BasicTicker", "id": "4e982cb3-0c92-4c20-ba70-97577742c667"}, "formatter": {"type": "BasicTickFormatter", "id": "1bd223cb-57de-4345-8911-0b319dc34cf1"}, "plot": {"type": "Plot", "id": "3cee0dab-f6d3-433d-9c54-5f3bf0181499"}}}, {"type": "Grid", "id": "acbe0587-95ca-44dd-b247-57b7c30d76a2", "attributes": {"ticker": {"type": "BasicTicker", "id": "86e45397-450e-4c96-b657-3e099a8d46a1"}, "plot": {"type": "Plot", "id": "3cee0dab-f6d3-433d-9c54-5f3bf0181499"}}}, {"type": "GlyphRenderer", "id": "39b1df51-f759-4339-9a89-845b3157a36d", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "fdbc1173-f999-46be-b489-2aeb1b8ab974"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Diamond", "id": "ceaaf961-59c4-4dcd-b720-9ce94c79f20a"}}}, {"type": "BasicTickFormatter", "id": "1bd223cb-57de-4345-8911-0b319dc34cf1", "attributes": {}}, {"type": "DataRange1d", "id": "ff028541-f064-4ab6-b0c1-60ad90f63ced", "attributes": {"callback": null}}, {"type": "ColumnDataSource", "id": "fdbc1173-f999-46be-b489-2aeb1b8ab974", "attributes": {"data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["x", "sizes", "y"], "callback": null}}, {"type": "LinearAxis", "id": "b3b86a2f-2cfc-4f32-b326-ffccf0413e06", "attributes": {"ticker": {"type": "BasicTicker", "id": "86e45397-450e-4c96-b657-3e099a8d46a1"}, "formatter": {"type": "BasicTickFormatter", "id": "6d9144be-aa34-4f9e-bc8b-3e30df3718fa"}, "plot": {"type": "Plot", "id": "3cee0dab-f6d3-433d-9c54-5f3bf0181499"}}}, {"type": "Plot", "id": "3cee0dab-f6d3-433d-9c54-5f3bf0181499", "attributes": {"y_range": {"type": "DataRange1d", "id": "6480eb00-3acf-49cc-969d-2aced41716fd"}, "renderers": [{"type": "GlyphRenderer", "id": "39b1df51-f759-4339-9a89-845b3157a36d"}, {"type": "LinearAxis", "id": "b3b86a2f-2cfc-4f32-b326-ffccf0413e06"}, {"type": "LinearAxis", "id": "d5e47859-c1fe-4778-aa14-d61a294e570b"}, {"type": "Grid", "id": "acbe0587-95ca-44dd-b247-57b7c30d76a2"}, {"type": "Grid", "id": "737296e9-4abe-421a-9dfd-16a190c5fafe"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "d5e47859-c1fe-4778-aa14-d61a294e570b"}], "x_range": {"type": "DataRange1d", "id": "ff028541-f064-4ab6-b0c1-60ad90f63ced"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "b3b86a2f-2cfc-4f32-b326-ffccf0413e06"}], "tool_events": {"type": "ToolEvents", "id": "179952fb-c783-4e06-9bff-de30068bf707"}, "toolbar_location": null}}, {"type": "Diamond", "id": "ceaaf961-59c4-4dcd-b720-9ce94c79f20a", "attributes": {"line_color": {"value": "#1c9099"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "sizes"}, "fill_color": {"value": null}}}, {"type": "Grid", "id": "737296e9-4abe-421a-9dfd-16a190c5fafe", "attributes": {"ticker": {"type": "BasicTicker", "id": "4e982cb3-0c92-4c20-ba70-97577742c667"}, "dimension": 1, "plot": {"type": "Plot", "id": "3cee0dab-f6d3-433d-9c54-5f3bf0181499"}}}, {"type": "BasicTicker", "id": "4e982cb3-0c92-4c20-ba70-97577742c667", "attributes": {}}], "root_ids": ["3cee0dab-f6d3-433d-9c54-5f3bf0181499"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "7c5f44ee-c265-4c34-951d-a495ef7667c6", "modelid": "3cee0dab-f6d3-433d-9c54-5f3bf0181499", "elementid": "f15517da-1e91-4f9d-b1e9-c34bc2b3f7c1"}];
          
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