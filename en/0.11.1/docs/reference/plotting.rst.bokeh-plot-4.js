
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
  };var element = document.getElementById("31aef5d3-002b-4537-a8a4-719c1a99778f");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '31aef5d3-002b-4537-a8a4-719c1a99778f' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"311e2229-a401-4c82-9232-c3b840131aba":{"roots":{"references":[{"attributes":{"formatter":{"id":"cb729334-056a-46ef-8532-7af556393a1f","type":"BasicTickFormatter"},"plot":{"id":"7602b6d5-422a-42db-a703-94d2e6d56e52","subtype":"Figure","type":"Plot"},"ticker":{"id":"40a558ac-41d8-45ff-a1fb-94ce23b83791","type":"BasicTicker"}},"id":"3dece7ad-4485-4cc7-9518-7da089d9fc0c","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"7602b6d5-422a-42db-a703-94d2e6d56e52","subtype":"Figure","type":"Plot"},"ticker":{"id":"ad9975ce-3b64-4552-b9ef-3bc4a2dfeae0","type":"BasicTicker"}},"id":"6b9e88b5-6e27-4c92-b0a6-f4f1cb1a466a","type":"Grid"},{"attributes":{"formatter":{"id":"3b876e49-cfb7-4fc5-82ad-986007816d73","type":"BasicTickFormatter"},"plot":{"id":"7602b6d5-422a-42db-a703-94d2e6d56e52","subtype":"Figure","type":"Plot"},"ticker":{"id":"ad9975ce-3b64-4552-b9ef-3bc4a2dfeae0","type":"BasicTicker"}},"id":"f151a93a-065e-433a-8473-58ccfaa28ed6","type":"LinearAxis"},{"attributes":{},"id":"cb729334-056a-46ef-8532-7af556393a1f","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"688f5d05-6df0-4b01-bd27-17f96aed6790","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"7602b6d5-422a-42db-a703-94d2e6d56e52","subtype":"Figure","type":"Plot"}},"id":"ec0919e2-553f-4495-9a9f-3dc210e372d2","type":"ResizeTool"},{"attributes":{},"id":"ad9975ce-3b64-4552-b9ef-3bc4a2dfeae0","type":"BasicTicker"},{"attributes":{"plot":{"id":"7602b6d5-422a-42db-a703-94d2e6d56e52","subtype":"Figure","type":"Plot"}},"id":"85c4c833-463e-44d4-9d9e-049f5af967a7","type":"ResetTool"},{"attributes":{"overlay":{"id":"688f5d05-6df0-4b01-bd27-17f96aed6790","type":"BoxAnnotation"},"plot":{"id":"7602b6d5-422a-42db-a703-94d2e6d56e52","subtype":"Figure","type":"Plot"}},"id":"4a8593e9-6c01-4e2d-8c4e-001278e66aec","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"7602b6d5-422a-42db-a703-94d2e6d56e52","subtype":"Figure","type":"Plot"}},"id":"9c0da02b-edf3-482a-84a7-d586f56acebe","type":"PanTool"},{"attributes":{"callback":null},"id":"982b9cd4-a483-4a5d-9601-aed567c72a2d","type":"DataRange1d"},{"attributes":{"plot":{"id":"7602b6d5-422a-42db-a703-94d2e6d56e52","subtype":"Figure","type":"Plot"}},"id":"995ecf98-b76b-47b9-bd7a-cb33a752b561","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"b19ffa4c-20ae-4c92-a862-30ef0e87d5fb","type":"CircleX"},{"attributes":{"data_source":{"id":"d1b17c8f-d114-4205-83ce-f9ffac247082","type":"ColumnDataSource"},"glyph":{"id":"ccc5b1f5-29f6-482d-8b12-ccf5c17d4693","type":"CircleX"},"hover_glyph":null,"nonselection_glyph":{"id":"b19ffa4c-20ae-4c92-a862-30ef0e87d5fb","type":"CircleX"},"selection_glyph":null},"id":"02bf9c1f-efcf-465b-afb1-a603ef3fa425","type":"GlyphRenderer"},{"attributes":{},"id":"40a558ac-41d8-45ff-a1fb-94ce23b83791","type":"BasicTicker"},{"attributes":{"plot":{"id":"7602b6d5-422a-42db-a703-94d2e6d56e52","subtype":"Figure","type":"Plot"},"ticker":{"id":"40a558ac-41d8-45ff-a1fb-94ce23b83791","type":"BasicTicker"}},"id":"0a6f2650-392b-4b64-abda-4c1b386eed79","type":"Grid"},{"attributes":{"plot":{"id":"7602b6d5-422a-42db-a703-94d2e6d56e52","subtype":"Figure","type":"Plot"}},"id":"4f97d13a-5861-42c7-8f44-7f007569047f","type":"PreviewSaveTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"d1b17c8f-d114-4205-83ce-f9ffac247082","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"3dece7ad-4485-4cc7-9518-7da089d9fc0c","type":"LinearAxis"}],"left":[{"id":"f151a93a-065e-433a-8473-58ccfaa28ed6","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"3dece7ad-4485-4cc7-9518-7da089d9fc0c","type":"LinearAxis"},{"id":"0a6f2650-392b-4b64-abda-4c1b386eed79","type":"Grid"},{"id":"f151a93a-065e-433a-8473-58ccfaa28ed6","type":"LinearAxis"},{"id":"6b9e88b5-6e27-4c92-b0a6-f4f1cb1a466a","type":"Grid"},{"id":"688f5d05-6df0-4b01-bd27-17f96aed6790","type":"BoxAnnotation"},{"id":"02bf9c1f-efcf-465b-afb1-a603ef3fa425","type":"GlyphRenderer"}],"tool_events":{"id":"b9ca11d4-b975-4e3b-add2-9d5bf7c38291","type":"ToolEvents"},"tools":[{"id":"9c0da02b-edf3-482a-84a7-d586f56acebe","type":"PanTool"},{"id":"995ecf98-b76b-47b9-bd7a-cb33a752b561","type":"WheelZoomTool"},{"id":"4a8593e9-6c01-4e2d-8c4e-001278e66aec","type":"BoxZoomTool"},{"id":"4f97d13a-5861-42c7-8f44-7f007569047f","type":"PreviewSaveTool"},{"id":"ec0919e2-553f-4495-9a9f-3dc210e372d2","type":"ResizeTool"},{"id":"85c4c833-463e-44d4-9d9e-049f5af967a7","type":"ResetTool"},{"id":"18116a9c-2905-4167-9ca9-b5df51fbfa11","type":"HelpTool"}],"x_range":{"id":"6f59ef49-409b-4d31-bc05-1ed8453b166d","type":"DataRange1d"},"y_range":{"id":"982b9cd4-a483-4a5d-9601-aed567c72a2d","type":"DataRange1d"}},"id":"7602b6d5-422a-42db-a703-94d2e6d56e52","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3b876e49-cfb7-4fc5-82ad-986007816d73","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"7602b6d5-422a-42db-a703-94d2e6d56e52","subtype":"Figure","type":"Plot"}},"id":"18116a9c-2905-4167-9ca9-b5df51fbfa11","type":"HelpTool"},{"attributes":{"callback":null},"id":"6f59ef49-409b-4d31-bc05-1ed8453b166d","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#DD1C77"},"line_color":{"value":"#DD1C77"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"ccc5b1f5-29f6-482d-8b12-ccf5c17d4693","type":"CircleX"},{"attributes":{},"id":"b9ca11d4-b975-4e3b-add2-9d5bf7c38291","type":"ToolEvents"}],"root_ids":["7602b6d5-422a-42db-a703-94d2e6d56e52"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"311e2229-a401-4c82-9232-c3b840131aba","elementid":"31aef5d3-002b-4537-a8a4-719c1a99778f","modelid":"7602b6d5-422a-42db-a703-94d2e6d56e52"}];
          
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