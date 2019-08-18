
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
  };var element = document.getElementById("f98329ee-d610-45ab-a83c-eee47a3f9a41");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'f98329ee-d610-45ab-a83c-eee47a3f9a41' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"57a08a40-0e1d-4a3b-8ede-225d0051682d":{"roots":{"references":[{"attributes":{"plot":{"id":"2ffca0fd-3516-4de0-8f85-e435d9aed4f0","subtype":"Figure","type":"Plot"}},"id":"9a27c4a5-bc0a-4dc7-8a44-8ccb93bacc8d","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"2ffca0fd-3516-4de0-8f85-e435d9aed4f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"4454bd62-0c1b-4576-aeb7-6a03b4e998d4","type":"BasicTicker"}},"id":"fde4408c-763e-4c5d-9e0c-6a193c0b1c9c","type":"Grid"},{"attributes":{"plot":{"id":"2ffca0fd-3516-4de0-8f85-e435d9aed4f0","subtype":"Figure","type":"Plot"}},"id":"360112ba-5aba-4e81-8444-c47dfaf6ebb6","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"2ffca0fd-3516-4de0-8f85-e435d9aed4f0","subtype":"Figure","type":"Plot"}},"id":"b8421956-bf3b-4dec-9e17-b376710c02be","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ef20704a-48d9-49ce-bb10-8b2a55706aa6","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"2ffca0fd-3516-4de0-8f85-e435d9aed4f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"42596db9-3198-4b54-b121-9d6d890bf2f6","type":"BasicTicker"}},"id":"effb3ae8-2971-4a9c-aedd-53e33539408a","type":"Grid"},{"attributes":{"callback":null},"id":"f62d2a61-050e-4fe4-a70b-6f580be6d546","type":"DataRange1d"},{"attributes":{"callback":null},"id":"36d52804-ce57-483f-810a-3fbb000b84f7","type":"DataRange1d"},{"attributes":{},"id":"f16775fb-0c2d-4e8f-bf0f-f40c17192967","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"2ffca0fd-3516-4de0-8f85-e435d9aed4f0","subtype":"Figure","type":"Plot"}},"id":"c3d59797-bd32-41c4-a542-718e29a17488","type":"ResizeTool"},{"attributes":{"overlay":{"id":"ef20704a-48d9-49ce-bb10-8b2a55706aa6","type":"BoxAnnotation"},"plot":{"id":"2ffca0fd-3516-4de0-8f85-e435d9aed4f0","subtype":"Figure","type":"Plot"}},"id":"9548065f-16f1-4afd-9160-22fc0d9cd9b4","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"2ffca0fd-3516-4de0-8f85-e435d9aed4f0","subtype":"Figure","type":"Plot"}},"id":"995c5bd0-9dc6-4704-aa11-80b5d89b2625","type":"WheelZoomTool"},{"attributes":{},"id":"42596db9-3198-4b54-b121-9d6d890bf2f6","type":"BasicTicker"},{"attributes":{},"id":"4454bd62-0c1b-4576-aeb7-6a03b4e998d4","type":"BasicTicker"},{"attributes":{"plot":{"id":"2ffca0fd-3516-4de0-8f85-e435d9aed4f0","subtype":"Figure","type":"Plot"}},"id":"9aa11eac-f0d3-4b14-a47d-3c51849bcece","type":"ResetTool"},{"attributes":{},"id":"9ad55828-56d5-4b3f-a241-745b94e16e11","type":"BasicTickFormatter"},{"attributes":{},"id":"a57ae3ea-41eb-4c40-addd-75717b9126d9","type":"ToolEvents"},{"attributes":{"data_source":{"id":"af5007e8-769b-4044-9027-a7267bace20b","type":"ColumnDataSource"},"glyph":{"id":"5faed4ab-9e0e-4e40-bf16-bee2db66779a","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"32fc0722-ffec-4b0d-bcef-39a4d888b2ec","type":"Circle"},"selection_glyph":null},"id":"c0d4c95a-14a1-446f-943d-97e1ce3fcd48","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"11e56ce9-491d-4e6a-8f9b-e6a190ef71b5","type":"LinearAxis"}],"left":[{"id":"45cdaa96-b441-4657-a28b-2a38a717f294","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11e56ce9-491d-4e6a-8f9b-e6a190ef71b5","type":"LinearAxis"},{"id":"effb3ae8-2971-4a9c-aedd-53e33539408a","type":"Grid"},{"id":"45cdaa96-b441-4657-a28b-2a38a717f294","type":"LinearAxis"},{"id":"fde4408c-763e-4c5d-9e0c-6a193c0b1c9c","type":"Grid"},{"id":"ef20704a-48d9-49ce-bb10-8b2a55706aa6","type":"BoxAnnotation"},{"id":"c0d4c95a-14a1-446f-943d-97e1ce3fcd48","type":"GlyphRenderer"}],"tool_events":{"id":"a57ae3ea-41eb-4c40-addd-75717b9126d9","type":"ToolEvents"},"tools":[{"id":"9a27c4a5-bc0a-4dc7-8a44-8ccb93bacc8d","type":"PanTool"},{"id":"995c5bd0-9dc6-4704-aa11-80b5d89b2625","type":"WheelZoomTool"},{"id":"9548065f-16f1-4afd-9160-22fc0d9cd9b4","type":"BoxZoomTool"},{"id":"360112ba-5aba-4e81-8444-c47dfaf6ebb6","type":"PreviewSaveTool"},{"id":"c3d59797-bd32-41c4-a542-718e29a17488","type":"ResizeTool"},{"id":"9aa11eac-f0d3-4b14-a47d-3c51849bcece","type":"ResetTool"},{"id":"b8421956-bf3b-4dec-9e17-b376710c02be","type":"HelpTool"}],"x_range":{"id":"f62d2a61-050e-4fe4-a70b-6f580be6d546","type":"DataRange1d"},"y_range":{"id":"36d52804-ce57-483f-810a-3fbb000b84f7","type":"DataRange1d"}},"id":"2ffca0fd-3516-4de0-8f85-e435d9aed4f0","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"32fc0722-ffec-4b0d-bcef-39a4d888b2ec","type":"Circle"},{"attributes":{"formatter":{"id":"9ad55828-56d5-4b3f-a241-745b94e16e11","type":"BasicTickFormatter"},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":null},"minor_tick_out":8,"plot":{"id":"2ffca0fd-3516-4de0-8f85-e435d9aed4f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"4454bd62-0c1b-4576-aeb7-6a03b4e998d4","type":"BasicTicker"}},"id":"45cdaa96-b441-4657-a28b-2a38a717f294","type":"LinearAxis"},{"attributes":{"formatter":{"id":"f16775fb-0c2d-4e8f-bf0f-f40c17192967","type":"BasicTickFormatter"},"major_tick_line_color":{"value":"firebrick"},"major_tick_line_width":{"value":3},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":"orange"},"minor_tick_out":8,"plot":{"id":"2ffca0fd-3516-4de0-8f85-e435d9aed4f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"42596db9-3198-4b54-b121-9d6d890bf2f6","type":"BasicTicker"}},"id":"11e56ce9-491d-4e6a-8f9b-e6a190ef71b5","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5faed4ab-9e0e-4e40-bf16-bee2db66779a","type":"Circle"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"af5007e8-769b-4044-9027-a7267bace20b","type":"ColumnDataSource"}],"root_ids":["2ffca0fd-3516-4de0-8f85-e435d9aed4f0"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"57a08a40-0e1d-4a3b-8ede-225d0051682d","elementid":"f98329ee-d610-45ab-a83c-eee47a3f9a41","modelid":"2ffca0fd-3516-4de0-8f85-e435d9aed4f0"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
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