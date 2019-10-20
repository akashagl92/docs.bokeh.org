
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
  };var element = document.getElementById("28174fba-843b-4ee9-bb88-b17fd1fafdac");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '28174fba-843b-4ee9-bb88-b17fd1fafdac' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"0fccfdb3-7a87-4b13-9ee3-74ca6f43fd76":{"roots":{"references":[{"attributes":{},"id":"948a8f30-6409-41c9-945e-6a7dab81fc00","type":"BasicTicker"},{"attributes":{"formatter":{"id":"f97d5d45-e5ac-4a84-ab9f-a4e44e2f35c5","type":"BasicTickFormatter"},"plot":{"id":"7acace5d-e0ff-4c5a-957a-006f1a5a6dd1","type":"Plot"},"ticker":{"id":"8c6c2f8b-d67f-42fd-84b4-628f3e17fc94","type":"BasicTicker"}},"id":"d46ef700-de61-478f-896b-d3ce1ef76251","type":"LinearAxis"},{"attributes":{"callback":null},"id":"fc82bd53-67f9-4c11-a393-696c5cce564c","type":"DataRange1d"},{"attributes":{"below":[{"id":"2d123aeb-35de-4fde-987a-ffa1cef7425b","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"d46ef700-de61-478f-896b-d3ce1ef76251","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"53fc2d3f-d4ee-4172-9d03-704e9a08bce8","type":"GlyphRenderer"},{"id":"2d123aeb-35de-4fde-987a-ffa1cef7425b","type":"LinearAxis"},{"id":"d46ef700-de61-478f-896b-d3ce1ef76251","type":"LinearAxis"},{"id":"d49fd687-58a9-4fd7-ba07-ec3cbde026fd","type":"Grid"},{"id":"9605a94e-6ecd-470c-ba9b-f3a39c1f399c","type":"Grid"}],"title":null,"tool_events":{"id":"59398be8-1fba-40d4-8b83-a5266311ac6a","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"fc82bd53-67f9-4c11-a393-696c5cce564c","type":"DataRange1d"},"y_range":{"id":"b20e9db6-1473-487b-b105-f41de66e841a","type":"DataRange1d"}},"id":"7acace5d-e0ff-4c5a-957a-006f1a5a6dd1","type":"Plot"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#B3DE69"},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"e41f778a-5870-4e22-924a-02535f95cc78","type":"Wedge"},{"attributes":{"callback":null,"column_names":["y","r","x"],"data":{"r":[0.16666666666666666,0.19999999999999998,0.23333333333333334,0.26666666666666666,0.3,0.3333333333333333,0.36666666666666664,0.4,0.43333333333333335],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"4be81839-787c-481c-9dfe-fe5525d4a6dd","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"7acace5d-e0ff-4c5a-957a-006f1a5a6dd1","type":"Plot"},"ticker":{"id":"948a8f30-6409-41c9-945e-6a7dab81fc00","type":"BasicTicker"}},"id":"d49fd687-58a9-4fd7-ba07-ec3cbde026fd","type":"Grid"},{"attributes":{},"id":"f97d5d45-e5ac-4a84-ab9f-a4e44e2f35c5","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"283492ce-538f-4484-a6d8-25fabbb6c122","type":"BasicTickFormatter"},"plot":{"id":"7acace5d-e0ff-4c5a-957a-006f1a5a6dd1","type":"Plot"},"ticker":{"id":"948a8f30-6409-41c9-945e-6a7dab81fc00","type":"BasicTicker"}},"id":"2d123aeb-35de-4fde-987a-ffa1cef7425b","type":"LinearAxis"},{"attributes":{"data_source":{"id":"4be81839-787c-481c-9dfe-fe5525d4a6dd","type":"ColumnDataSource"},"glyph":{"id":"e41f778a-5870-4e22-924a-02535f95cc78","type":"Wedge"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"53fc2d3f-d4ee-4172-9d03-704e9a08bce8","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"7acace5d-e0ff-4c5a-957a-006f1a5a6dd1","type":"Plot"},"ticker":{"id":"8c6c2f8b-d67f-42fd-84b4-628f3e17fc94","type":"BasicTicker"}},"id":"9605a94e-6ecd-470c-ba9b-f3a39c1f399c","type":"Grid"},{"attributes":{},"id":"59398be8-1fba-40d4-8b83-a5266311ac6a","type":"ToolEvents"},{"attributes":{},"id":"283492ce-538f-4484-a6d8-25fabbb6c122","type":"BasicTickFormatter"},{"attributes":{},"id":"8c6c2f8b-d67f-42fd-84b4-628f3e17fc94","type":"BasicTicker"},{"attributes":{"callback":null},"id":"b20e9db6-1473-487b-b105-f41de66e841a","type":"DataRange1d"}],"root_ids":["7acace5d-e0ff-4c5a-957a-006f1a5a6dd1"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"0fccfdb3-7a87-4b13-9ee3-74ca6f43fd76","elementid":"28174fba-843b-4ee9-bb88-b17fd1fafdac","modelid":"7acace5d-e0ff-4c5a-957a-006f1a5a6dd1"}];
          
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