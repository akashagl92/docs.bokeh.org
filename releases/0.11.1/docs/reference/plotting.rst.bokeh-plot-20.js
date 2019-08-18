
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
  };var element = document.getElementById("46e820c9-95ef-45c6-b04c-eab812f577ce");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '46e820c9-95ef-45c6-b04c-eab812f577ce' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"65d0b06f-5d5d-4ee4-a72b-b0ea1b943729":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"f0fdc659-d31b-4045-b066-eee44bc068c8","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"8b74d9fe-178b-4d1d-9187-245af47fe36a","subtype":"Figure","type":"Plot"}},"id":"5d15ecf8-da2e-4f64-8d37-0f4338881fe0","type":"ResetTool"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#FDAE6B"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6ab9e892-7c3b-4166-a8c1-9939787fdc1a","type":"SquareX"},{"attributes":{"plot":{"id":"8b74d9fe-178b-4d1d-9187-245af47fe36a","subtype":"Figure","type":"Plot"}},"id":"a2b9d063-d286-4cae-b5fe-5c5d3fae9bb0","type":"ResizeTool"},{"attributes":{},"id":"157847a1-59e8-45a1-ac8e-cbd4910566ee","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"8b74d9fe-178b-4d1d-9187-245af47fe36a","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c47e38a-0b44-40fa-a313-31f2fb449c40","type":"BasicTicker"}},"id":"b1092182-3953-4ed7-bdd5-776d710877ff","type":"Grid"},{"attributes":{"plot":{"id":"8b74d9fe-178b-4d1d-9187-245af47fe36a","subtype":"Figure","type":"Plot"}},"id":"2e9eca8f-3773-4ab6-8c92-f991248212ab","type":"HelpTool"},{"attributes":{},"id":"2c47e38a-0b44-40fa-a313-31f2fb449c40","type":"BasicTicker"},{"attributes":{},"id":"bd46328a-9d3a-470e-b3f8-e2f9a42ccb80","type":"BasicTicker"},{"attributes":{"data_source":{"id":"f0fdc659-d31b-4045-b066-eee44bc068c8","type":"ColumnDataSource"},"glyph":{"id":"6ab9e892-7c3b-4166-a8c1-9939787fdc1a","type":"SquareX"},"hover_glyph":null,"nonselection_glyph":{"id":"f1ec11e3-395c-48dd-b7e7-75aeb5737ee3","type":"SquareX"},"selection_glyph":null},"id":"beeec758-8d38-413d-88f0-6a136b71f1bd","type":"GlyphRenderer"},{"attributes":{},"id":"1d006daa-1e6f-431f-b764-6c9bc095324c","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f1ec11e3-395c-48dd-b7e7-75aeb5737ee3","type":"SquareX"},{"attributes":{"formatter":{"id":"157847a1-59e8-45a1-ac8e-cbd4910566ee","type":"BasicTickFormatter"},"plot":{"id":"8b74d9fe-178b-4d1d-9187-245af47fe36a","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c47e38a-0b44-40fa-a313-31f2fb449c40","type":"BasicTicker"}},"id":"873d82ca-d070-4094-bd96-b508af2fbd4d","type":"LinearAxis"},{"attributes":{"plot":{"id":"8b74d9fe-178b-4d1d-9187-245af47fe36a","subtype":"Figure","type":"Plot"}},"id":"feed16f5-06ff-41dd-b7dd-11e324073f83","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"8b74d9fe-178b-4d1d-9187-245af47fe36a","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd46328a-9d3a-470e-b3f8-e2f9a42ccb80","type":"BasicTicker"}},"id":"1aa8c680-6769-4edb-8ca2-7376bcd1a09a","type":"Grid"},{"attributes":{"callback":null},"id":"b9bb988f-0bcc-451d-aad2-4c3c1bd00e92","type":"DataRange1d"},{"attributes":{"overlay":{"id":"2bb0157f-54c9-402b-a930-624e6afc5693","type":"BoxAnnotation"},"plot":{"id":"8b74d9fe-178b-4d1d-9187-245af47fe36a","subtype":"Figure","type":"Plot"}},"id":"163196f6-86bb-4ed8-85da-1d67a348a0c3","type":"BoxZoomTool"},{"attributes":{},"id":"e57f30e3-7705-477d-a852-1ac461e95eab","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"8b74d9fe-178b-4d1d-9187-245af47fe36a","subtype":"Figure","type":"Plot"}},"id":"e137d525-e653-47d7-909a-ad9ce81a70ee","type":"PanTool"},{"attributes":{"plot":{"id":"8b74d9fe-178b-4d1d-9187-245af47fe36a","subtype":"Figure","type":"Plot"}},"id":"714405b2-cc37-4e62-8c9d-0a6f44bc8715","type":"PreviewSaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2bb0157f-54c9-402b-a930-624e6afc5693","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"f526fdb3-4cdd-4fa9-ae3a-e1964e4168f6","type":"LinearAxis"}],"left":[{"id":"873d82ca-d070-4094-bd96-b508af2fbd4d","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f526fdb3-4cdd-4fa9-ae3a-e1964e4168f6","type":"LinearAxis"},{"id":"1aa8c680-6769-4edb-8ca2-7376bcd1a09a","type":"Grid"},{"id":"873d82ca-d070-4094-bd96-b508af2fbd4d","type":"LinearAxis"},{"id":"b1092182-3953-4ed7-bdd5-776d710877ff","type":"Grid"},{"id":"2bb0157f-54c9-402b-a930-624e6afc5693","type":"BoxAnnotation"},{"id":"beeec758-8d38-413d-88f0-6a136b71f1bd","type":"GlyphRenderer"}],"tool_events":{"id":"1d006daa-1e6f-431f-b764-6c9bc095324c","type":"ToolEvents"},"tools":[{"id":"e137d525-e653-47d7-909a-ad9ce81a70ee","type":"PanTool"},{"id":"feed16f5-06ff-41dd-b7dd-11e324073f83","type":"WheelZoomTool"},{"id":"163196f6-86bb-4ed8-85da-1d67a348a0c3","type":"BoxZoomTool"},{"id":"714405b2-cc37-4e62-8c9d-0a6f44bc8715","type":"PreviewSaveTool"},{"id":"a2b9d063-d286-4cae-b5fe-5c5d3fae9bb0","type":"ResizeTool"},{"id":"5d15ecf8-da2e-4f64-8d37-0f4338881fe0","type":"ResetTool"},{"id":"2e9eca8f-3773-4ab6-8c92-f991248212ab","type":"HelpTool"}],"x_range":{"id":"4211757b-75b6-403d-8c01-ce289ad71a0e","type":"DataRange1d"},"y_range":{"id":"b9bb988f-0bcc-451d-aad2-4c3c1bd00e92","type":"DataRange1d"}},"id":"8b74d9fe-178b-4d1d-9187-245af47fe36a","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"4211757b-75b6-403d-8c01-ce289ad71a0e","type":"DataRange1d"},{"attributes":{"formatter":{"id":"e57f30e3-7705-477d-a852-1ac461e95eab","type":"BasicTickFormatter"},"plot":{"id":"8b74d9fe-178b-4d1d-9187-245af47fe36a","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd46328a-9d3a-470e-b3f8-e2f9a42ccb80","type":"BasicTicker"}},"id":"f526fdb3-4cdd-4fa9-ae3a-e1964e4168f6","type":"LinearAxis"}],"root_ids":["8b74d9fe-178b-4d1d-9187-245af47fe36a"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"65d0b06f-5d5d-4ee4-a72b-b0ea1b943729","elementid":"46e820c9-95ef-45c6-b04c-eab812f577ce","modelid":"8b74d9fe-178b-4d1d-9187-245af47fe36a"}];
          
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