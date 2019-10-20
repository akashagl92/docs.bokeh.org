
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
  };var element = document.getElementById("27066c8c-9748-4503-ba12-d3b0d3abe91e");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '27066c8c-9748-4503-ba12-d3b0d3abe91e' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"5270dd7a-e146-4362-a306-1c207c6e27f8":{"roots":{"references":[{"attributes":{"plot":{"id":"acf78d8d-a181-480b-8046-506e370c937a","subtype":"Figure","type":"Plot"},"ticker":{"id":"afc2a0f2-7633-437c-8b86-632b85f71108","type":"BasicTicker"}},"id":"d87f77b5-122c-42f9-aa81-39a4b0b73aaf","type":"Grid"},{"attributes":{"plot":{"id":"acf78d8d-a181-480b-8046-506e370c937a","subtype":"Figure","type":"Plot"}},"id":"9ad61e99-ca81-4d19-ba58-82aed942da3f","type":"ResetTool"},{"attributes":{"formatter":{"id":"10a78d2d-7e46-40e5-87fb-c97fdce012fd","type":"BasicTickFormatter"},"plot":{"id":"acf78d8d-a181-480b-8046-506e370c937a","subtype":"Figure","type":"Plot"},"ticker":{"id":"afc2a0f2-7633-437c-8b86-632b85f71108","type":"BasicTicker"}},"id":"8fba955e-2055-4fef-9119-6ac3b0ae50bb","type":"LinearAxis"},{"attributes":{"below":[{"id":"8fba955e-2055-4fef-9119-6ac3b0ae50bb","type":"LinearAxis"}],"left":[{"id":"14d5aee8-ea8f-424d-b13b-aa3d56b6246b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8fba955e-2055-4fef-9119-6ac3b0ae50bb","type":"LinearAxis"},{"id":"d87f77b5-122c-42f9-aa81-39a4b0b73aaf","type":"Grid"},{"id":"14d5aee8-ea8f-424d-b13b-aa3d56b6246b","type":"LinearAxis"},{"id":"075f0d1b-0b02-48b1-a3f5-d34c54409501","type":"Grid"},{"id":"4be4b437-71a8-4890-aaa9-dffae352efc5","type":"BoxAnnotation"},{"id":"dd105676-12bb-4c2a-8c22-88ae4ca9a4ef","type":"GlyphRenderer"}],"tool_events":{"id":"3ac1613f-333d-4bae-9041-4aac09b904e5","type":"ToolEvents"},"tools":[{"id":"9b84effa-14a4-4ba1-8f5a-616f4060c125","type":"PanTool"},{"id":"8acf002e-84fa-4064-8865-51b6412e5f60","type":"WheelZoomTool"},{"id":"afa25f08-cc26-4b62-9d0c-3810bb8d4d92","type":"BoxZoomTool"},{"id":"cd3a28e9-e1b5-4e6f-9fcb-05fab0270e2b","type":"PreviewSaveTool"},{"id":"eadf8b0f-4d9c-4309-8a42-cb0a9108fdee","type":"ResizeTool"},{"id":"9ad61e99-ca81-4d19-ba58-82aed942da3f","type":"ResetTool"},{"id":"cebc4a1d-27a6-46b8-8710-d4f150653094","type":"HelpTool"}],"x_range":{"id":"87d10853-09ff-4574-8b4e-2d107024ac7b","type":"DataRange1d"},"y_range":{"id":"0e88d9a2-3bfe-4fff-a8a2-507a43a26d4b","type":"DataRange1d"}},"id":"acf78d8d-a181-480b-8046-506e370c937a","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25a397c6-12c5-4d94-9044-3b6fe2c7f35d","type":"Circle"},{"attributes":{"dimension":1,"minor_grid_line_alpha":{"value":0.1},"minor_grid_line_color":{"value":"navy"},"plot":{"id":"acf78d8d-a181-480b-8046-506e370c937a","subtype":"Figure","type":"Plot"},"ticker":{"id":"2cc0cd0e-92fa-47dc-9b1d-93a916defaa5","type":"BasicTicker"}},"id":"075f0d1b-0b02-48b1-a3f5-d34c54409501","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"23bcb8b4-07d9-46c2-8aab-266976e78c94","type":"ColumnDataSource"},{"attributes":{},"id":"2cc0cd0e-92fa-47dc-9b1d-93a916defaa5","type":"BasicTicker"},{"attributes":{},"id":"3ac1613f-333d-4bae-9041-4aac09b904e5","type":"ToolEvents"},{"attributes":{"data_source":{"id":"23bcb8b4-07d9-46c2-8aab-266976e78c94","type":"ColumnDataSource"},"glyph":{"id":"25a397c6-12c5-4d94-9044-3b6fe2c7f35d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"57b27602-847f-4d2f-ba6d-e332c72350b0","type":"Circle"},"selection_glyph":null},"id":"dd105676-12bb-4c2a-8c22-88ae4ca9a4ef","type":"GlyphRenderer"},{"attributes":{},"id":"f1f57817-c27a-46e1-9f2f-f06bcd56c819","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4be4b437-71a8-4890-aaa9-dffae352efc5","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"acf78d8d-a181-480b-8046-506e370c937a","subtype":"Figure","type":"Plot"}},"id":"cebc4a1d-27a6-46b8-8710-d4f150653094","type":"HelpTool"},{"attributes":{"callback":null},"id":"87d10853-09ff-4574-8b4e-2d107024ac7b","type":"DataRange1d"},{"attributes":{"formatter":{"id":"f1f57817-c27a-46e1-9f2f-f06bcd56c819","type":"BasicTickFormatter"},"plot":{"id":"acf78d8d-a181-480b-8046-506e370c937a","subtype":"Figure","type":"Plot"},"ticker":{"id":"2cc0cd0e-92fa-47dc-9b1d-93a916defaa5","type":"BasicTicker"}},"id":"14d5aee8-ea8f-424d-b13b-aa3d56b6246b","type":"LinearAxis"},{"attributes":{},"id":"afc2a0f2-7633-437c-8b86-632b85f71108","type":"BasicTicker"},{"attributes":{"plot":{"id":"acf78d8d-a181-480b-8046-506e370c937a","subtype":"Figure","type":"Plot"}},"id":"eadf8b0f-4d9c-4309-8a42-cb0a9108fdee","type":"ResizeTool"},{"attributes":{"overlay":{"id":"4be4b437-71a8-4890-aaa9-dffae352efc5","type":"BoxAnnotation"},"plot":{"id":"acf78d8d-a181-480b-8046-506e370c937a","subtype":"Figure","type":"Plot"}},"id":"afa25f08-cc26-4b62-9d0c-3810bb8d4d92","type":"BoxZoomTool"},{"attributes":{},"id":"10a78d2d-7e46-40e5-87fb-c97fdce012fd","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"57b27602-847f-4d2f-ba6d-e332c72350b0","type":"Circle"},{"attributes":{"plot":{"id":"acf78d8d-a181-480b-8046-506e370c937a","subtype":"Figure","type":"Plot"}},"id":"8acf002e-84fa-4064-8865-51b6412e5f60","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"acf78d8d-a181-480b-8046-506e370c937a","subtype":"Figure","type":"Plot"}},"id":"9b84effa-14a4-4ba1-8f5a-616f4060c125","type":"PanTool"},{"attributes":{"plot":{"id":"acf78d8d-a181-480b-8046-506e370c937a","subtype":"Figure","type":"Plot"}},"id":"cd3a28e9-e1b5-4e6f-9fcb-05fab0270e2b","type":"PreviewSaveTool"},{"attributes":{"callback":null},"id":"0e88d9a2-3bfe-4fff-a8a2-507a43a26d4b","type":"DataRange1d"}],"root_ids":["acf78d8d-a181-480b-8046-506e370c937a"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"5270dd7a-e146-4362-a306-1c207c6e27f8","elementid":"27066c8c-9748-4503-ba12-d3b0d3abe91e","modelid":"acf78d8d-a181-480b-8046-506e370c937a"}];
          
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