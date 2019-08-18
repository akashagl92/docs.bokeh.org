
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
  };var element = document.getElementById("0da26895-3de7-4d10-b872-1dbedf4bef90");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '0da26895-3de7-4d10-b872-1dbedf4bef90' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"da54af35-cb5d-4585-b81b-4511b0a21c62":{"roots":{"references":[{"attributes":{"num_minor_ticks":10},"id":"07852a9b-8d50-4dfc-ac08-5c52a8e90268","type":"LogTicker"},{"attributes":{"plot":{"id":"18a1d157-d348-4175-b882-8d885a68cfb7","subtype":"Figure","type":"Plot"}},"id":"7e0dcb23-2e76-4b2d-82c9-f7637e8ba65a","type":"ResizeTool"},{"attributes":{"dimension":1,"plot":{"id":"18a1d157-d348-4175-b882-8d885a68cfb7","subtype":"Figure","type":"Plot"},"ticker":{"id":"07852a9b-8d50-4dfc-ac08-5c52a8e90268","type":"LogTicker"}},"id":"ec6b0c01-e3ce-4120-aab3-df71b204dc0c","type":"Grid"},{"attributes":{},"id":"dc6ed4ff-dd78-4dde-b4aa-872f4b48ea33","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"18a1d157-d348-4175-b882-8d885a68cfb7","subtype":"Figure","type":"Plot"},"ticker":{"id":"490c0428-eddc-4fa0-aee1-a44bf3398f0a","type":"BasicTicker"}},"id":"10de2840-3271-400a-8dba-0c8830812e01","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"524ce532-0fc7-4740-b1b8-094ef374ed4f","type":"Circle"},{"attributes":{},"id":"490c0428-eddc-4fa0-aee1-a44bf3398f0a","type":"BasicTicker"},{"attributes":{"ticker":null},"id":"6c110340-a415-4e3a-bfeb-d01e05c214b6","type":"LogTickFormatter"},{"attributes":{"plot":{"id":"18a1d157-d348-4175-b882-8d885a68cfb7","subtype":"Figure","type":"Plot"}},"id":"096a9599-2067-492f-a3d1-af6a2b730f8f","type":"ResetTool"},{"attributes":{"plot":{"id":"18a1d157-d348-4175-b882-8d885a68cfb7","subtype":"Figure","type":"Plot"}},"id":"9005b514-4a86-4f1d-8bc5-a789fbd5082b","type":"PanTool"},{"attributes":{"plot":{"id":"18a1d157-d348-4175-b882-8d885a68cfb7","subtype":"Figure","type":"Plot"}},"id":"d1a39394-976b-4da6-a5e7-f0ce770cf02a","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"3a590994-2c62-411f-ae4a-9bbaaff7d01b","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f8508f94-e18e-4f06-a157-6c5c5294ef5e","type":"Line"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"8f01db0e-0cb2-4aee-a0a7-5af61ebaacf9","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":10000,"start":0.1},"id":"3801cf48-db59-44f4-90d3-d066cdb751a2","type":"Range1d"},{"attributes":{"formatter":{"id":"6c110340-a415-4e3a-bfeb-d01e05c214b6","type":"LogTickFormatter"},"plot":{"id":"18a1d157-d348-4175-b882-8d885a68cfb7","subtype":"Figure","type":"Plot"},"ticker":{"id":"07852a9b-8d50-4dfc-ac08-5c52a8e90268","type":"LogTicker"}},"id":"3f908134-0e80-4ae6-ba9c-78886a2c4bf0","type":"LogAxis"},{"attributes":{"plot":{"id":"18a1d157-d348-4175-b882-8d885a68cfb7","subtype":"Figure","type":"Plot"}},"id":"91152274-c98d-4ca9-93c0-33b376214fe6","type":"HelpTool"},{"attributes":{},"id":"1103e08f-cf81-41d0-b6f6-8edbdb837f75","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"4ae84780-f858-4d31-9ddb-2266d4d9b380","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"fbf6ee6a-c95f-4ea2-84e4-a2098046c156","type":"BoxAnnotation"},"plot":{"id":"18a1d157-d348-4175-b882-8d885a68cfb7","subtype":"Figure","type":"Plot"}},"id":"b0c326bc-2ab1-4638-8a45-66c842d7ce02","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"8f01db0e-0cb2-4aee-a0a7-5af61ebaacf9","type":"ColumnDataSource"},"glyph":{"id":"f8508f94-e18e-4f06-a157-6c5c5294ef5e","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"e14d021d-0653-4ea5-b86f-de4481bc3aa4","type":"Line"},"selection_glyph":null},"id":"31b6dd30-7242-449f-ac8d-15ef5b5ac229","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"dc6ed4ff-dd78-4dde-b4aa-872f4b48ea33","type":"BasicTickFormatter"},"plot":{"id":"18a1d157-d348-4175-b882-8d885a68cfb7","subtype":"Figure","type":"Plot"},"ticker":{"id":"490c0428-eddc-4fa0-aee1-a44bf3398f0a","type":"BasicTicker"}},"id":"9fab9e8f-a220-4e74-a648-a780a98cb31f","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"9e0648ce-85d0-420c-a292-e7409e798f9e","type":"Circle"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"e14d021d-0653-4ea5-b86f-de4481bc3aa4","type":"Line"},{"attributes":{"data_source":{"id":"4ae84780-f858-4d31-9ddb-2266d4d9b380","type":"ColumnDataSource"},"glyph":{"id":"9e0648ce-85d0-420c-a292-e7409e798f9e","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"524ce532-0fc7-4740-b1b8-094ef374ed4f","type":"Circle"},"selection_glyph":null},"id":"3b67dd0b-aedc-46c8-b9cc-bb9337e0b322","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"9fab9e8f-a220-4e74-a648-a780a98cb31f","type":"LinearAxis"}],"left":[{"id":"3f908134-0e80-4ae6-ba9c-78886a2c4bf0","type":"LogAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9fab9e8f-a220-4e74-a648-a780a98cb31f","type":"LinearAxis"},{"id":"10de2840-3271-400a-8dba-0c8830812e01","type":"Grid"},{"id":"3f908134-0e80-4ae6-ba9c-78886a2c4bf0","type":"LogAxis"},{"id":"ec6b0c01-e3ce-4120-aab3-df71b204dc0c","type":"Grid"},{"id":"fbf6ee6a-c95f-4ea2-84e4-a2098046c156","type":"BoxAnnotation"},{"id":"31b6dd30-7242-449f-ac8d-15ef5b5ac229","type":"GlyphRenderer"},{"id":"3b67dd0b-aedc-46c8-b9cc-bb9337e0b322","type":"GlyphRenderer"}],"tool_events":{"id":"1103e08f-cf81-41d0-b6f6-8edbdb837f75","type":"ToolEvents"},"tools":[{"id":"9005b514-4a86-4f1d-8bc5-a789fbd5082b","type":"PanTool"},{"id":"d1a39394-976b-4da6-a5e7-f0ce770cf02a","type":"WheelZoomTool"},{"id":"b0c326bc-2ab1-4638-8a45-66c842d7ce02","type":"BoxZoomTool"},{"id":"ac20fb6b-eced-4081-80c0-ab2a6bc4ba6c","type":"PreviewSaveTool"},{"id":"7e0dcb23-2e76-4b2d-82c9-f7637e8ba65a","type":"ResizeTool"},{"id":"096a9599-2067-492f-a3d1-af6a2b730f8f","type":"ResetTool"},{"id":"91152274-c98d-4ca9-93c0-33b376214fe6","type":"HelpTool"}],"x_range":{"id":"3a590994-2c62-411f-ae4a-9bbaaff7d01b","type":"DataRange1d"},"y_mapper_type":"log","y_range":{"id":"3801cf48-db59-44f4-90d3-d066cdb751a2","type":"Range1d"}},"id":"18a1d157-d348-4175-b882-8d885a68cfb7","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fbf6ee6a-c95f-4ea2-84e4-a2098046c156","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"18a1d157-d348-4175-b882-8d885a68cfb7","subtype":"Figure","type":"Plot"}},"id":"ac20fb6b-eced-4081-80c0-ab2a6bc4ba6c","type":"PreviewSaveTool"}],"root_ids":["18a1d157-d348-4175-b882-8d885a68cfb7"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"da54af35-cb5d-4585-b81b-4511b0a21c62","elementid":"0da26895-3de7-4d10-b872-1dbedf4bef90","modelid":"18a1d157-d348-4175-b882-8d885a68cfb7"}];
          
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