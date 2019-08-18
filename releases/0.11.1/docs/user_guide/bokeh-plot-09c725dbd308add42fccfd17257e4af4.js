
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
  };var element = document.getElementById("f3df34a6-f5e0-4fb6-8530-f35ed9d7c9cd");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'f3df34a6-f5e0-4fb6-8530-f35ed9d7c9cd' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"1cb2ef63-2da0-4c19-a5c7-cdf0ac527984":{"roots":{"references":[{"attributes":{"formatter":{"id":"5722a228-5fc2-4c00-8bfc-b13e646a3fce","type":"BasicTickFormatter"},"plot":{"id":"0c4d8cf5-7c02-4907-8bc9-08e21dbff90a","subtype":"Figure","type":"Plot"},"ticker":{"id":"619904c9-47b6-4ee1-91bd-2e565d3b4c1f","type":"BasicTicker"}},"id":"02ec39a6-6cba-4e32-8333-976342914c46","type":"LinearAxis"},{"attributes":{},"id":"6c69a378-2fa6-4d54-ab36-c1ede7606b5d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"0c4d8cf5-7c02-4907-8bc9-08e21dbff90a","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8a7ee53-ef7e-4a9c-a20f-3c674268ae93","type":"BasicTicker"}},"id":"5ef95bf1-8d9f-4f74-a85f-6e8c09613e2e","type":"Grid"},{"attributes":{"below":[{"id":"3b07e106-c247-418c-b81e-36cf6d210834","type":"LinearAxis"}],"left":[{"id":"02ec39a6-6cba-4e32-8333-976342914c46","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3b07e106-c247-418c-b81e-36cf6d210834","type":"LinearAxis"},{"id":"5ef95bf1-8d9f-4f74-a85f-6e8c09613e2e","type":"Grid"},{"id":"02ec39a6-6cba-4e32-8333-976342914c46","type":"LinearAxis"},{"id":"e86f5f34-e036-416b-9b85-4b4d3f5e523c","type":"Grid"},{"id":"242da1d7-a1c6-4028-9c11-555c6131930d","type":"BoxAnnotation"},{"id":"c874060c-fc26-4bad-9dc4-326268a8114e","type":"GlyphRenderer"}],"title":"Some Title","title_text_color":{"value":"olive"},"title_text_font":"times","title_text_font_style":"italic","tool_events":{"id":"62dd073f-6071-4834-8a4b-7d015368698d","type":"ToolEvents"},"tools":[{"id":"1fee2ca9-65de-4f83-b8d1-85bedfcc4a84","type":"PanTool"},{"id":"dfa397b6-ef66-4e84-bb6c-31d30ab94260","type":"WheelZoomTool"},{"id":"5ac875e5-c68e-4795-b935-aa98c220762c","type":"BoxZoomTool"},{"id":"d913303b-e2a2-4d79-b2e8-0dc88cbbee9f","type":"PreviewSaveTool"},{"id":"773f2481-ec67-4311-b09c-d539bcb8e149","type":"ResizeTool"},{"id":"6edb9752-af23-4f21-81fb-2818f4c43a98","type":"ResetTool"},{"id":"f67493b2-8056-4978-a84b-2330e207f9e9","type":"HelpTool"}],"x_range":{"id":"afb382cf-1057-4d3a-99a8-8a02b55a9b76","type":"DataRange1d"},"y_range":{"id":"d32c59a6-905d-4037-a1e2-50ae74bf2d98","type":"DataRange1d"}},"id":"0c4d8cf5-7c02-4907-8bc9-08e21dbff90a","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"242da1d7-a1c6-4028-9c11-555c6131930d","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"6c69a378-2fa6-4d54-ab36-c1ede7606b5d","type":"BasicTickFormatter"},"plot":{"id":"0c4d8cf5-7c02-4907-8bc9-08e21dbff90a","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8a7ee53-ef7e-4a9c-a20f-3c674268ae93","type":"BasicTicker"}},"id":"3b07e106-c247-418c-b81e-36cf6d210834","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"0c4d8cf5-7c02-4907-8bc9-08e21dbff90a","subtype":"Figure","type":"Plot"},"ticker":{"id":"619904c9-47b6-4ee1-91bd-2e565d3b4c1f","type":"BasicTicker"}},"id":"e86f5f34-e036-416b-9b85-4b4d3f5e523c","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"c6ee6015-d43b-4043-aeac-9660e4cb54d1","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"c6ee6015-d43b-4043-aeac-9660e4cb54d1","type":"ColumnDataSource"},"glyph":{"id":"3b512d31-33f4-4aea-8733-1f4685ffb50a","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"d334df1a-7c2c-4c6c-81af-c5ef20299941","type":"Circle"},"selection_glyph":null},"id":"c874060c-fc26-4bad-9dc4-326268a8114e","type":"GlyphRenderer"},{"attributes":{},"id":"5722a228-5fc2-4c00-8bfc-b13e646a3fce","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"0c4d8cf5-7c02-4907-8bc9-08e21dbff90a","subtype":"Figure","type":"Plot"}},"id":"dfa397b6-ef66-4e84-bb6c-31d30ab94260","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"0c4d8cf5-7c02-4907-8bc9-08e21dbff90a","subtype":"Figure","type":"Plot"}},"id":"f67493b2-8056-4978-a84b-2330e207f9e9","type":"HelpTool"},{"attributes":{"plot":{"id":"0c4d8cf5-7c02-4907-8bc9-08e21dbff90a","subtype":"Figure","type":"Plot"}},"id":"1fee2ca9-65de-4f83-b8d1-85bedfcc4a84","type":"PanTool"},{"attributes":{},"id":"d8a7ee53-ef7e-4a9c-a20f-3c674268ae93","type":"BasicTicker"},{"attributes":{"callback":null},"id":"afb382cf-1057-4d3a-99a8-8a02b55a9b76","type":"DataRange1d"},{"attributes":{},"id":"619904c9-47b6-4ee1-91bd-2e565d3b4c1f","type":"BasicTicker"},{"attributes":{"callback":null},"id":"d32c59a6-905d-4037-a1e2-50ae74bf2d98","type":"DataRange1d"},{"attributes":{"plot":{"id":"0c4d8cf5-7c02-4907-8bc9-08e21dbff90a","subtype":"Figure","type":"Plot"}},"id":"d913303b-e2a2-4d79-b2e8-0dc88cbbee9f","type":"PreviewSaveTool"},{"attributes":{},"id":"62dd073f-6071-4834-8a4b-7d015368698d","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d334df1a-7c2c-4c6c-81af-c5ef20299941","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3b512d31-33f4-4aea-8733-1f4685ffb50a","type":"Circle"},{"attributes":{"plot":{"id":"0c4d8cf5-7c02-4907-8bc9-08e21dbff90a","subtype":"Figure","type":"Plot"}},"id":"6edb9752-af23-4f21-81fb-2818f4c43a98","type":"ResetTool"},{"attributes":{"overlay":{"id":"242da1d7-a1c6-4028-9c11-555c6131930d","type":"BoxAnnotation"},"plot":{"id":"0c4d8cf5-7c02-4907-8bc9-08e21dbff90a","subtype":"Figure","type":"Plot"}},"id":"5ac875e5-c68e-4795-b935-aa98c220762c","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"0c4d8cf5-7c02-4907-8bc9-08e21dbff90a","subtype":"Figure","type":"Plot"}},"id":"773f2481-ec67-4311-b09c-d539bcb8e149","type":"ResizeTool"}],"root_ids":["0c4d8cf5-7c02-4907-8bc9-08e21dbff90a"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"1cb2ef63-2da0-4c19-a5c7-cdf0ac527984","elementid":"f3df34a6-f5e0-4fb6-8530-f35ed9d7c9cd","modelid":"0c4d8cf5-7c02-4907-8bc9-08e21dbff90a"}];
          
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