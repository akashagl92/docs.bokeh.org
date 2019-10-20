
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
  };var element = document.getElementById("9858c41e-81a6-422a-aaf1-a57fcf92a0b9");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '9858c41e-81a6-422a-aaf1-a57fcf92a0b9' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"8816361f-e3e6-4177-a70a-0ba3c200993c":{"roots":{"references":[{"attributes":{},"id":"8502ed1c-b28e-49e0-bddf-168ca76e5fac","type":"BasicTicker"},{"attributes":{"callback":null},"id":"bb47e6d1-1d08-4e25-a833-81dbc4852b61","type":"DataRange1d"},{"attributes":{"formatter":{"id":"9f447c7e-ddc9-45f4-8778-ece8d35ba96e","type":"BasicTickFormatter"},"plot":{"id":"00b726fa-b0aa-49ab-b930-be8b55a26519","type":"Plot"},"ticker":{"id":"8502ed1c-b28e-49e0-bddf-168ca76e5fac","type":"BasicTicker"}},"id":"9d732806-295c-42f1-b7ed-169c40c364e2","type":"LinearAxis"},{"attributes":{"callback":null},"id":"cb8b3187-a15a-4548-a772-5361bbeb3732","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"22c5b683-7831-42a5-ae0f-cc961096d81d","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"11580d71-ffdd-4f92-ab63-9a59d7d038b7","type":"BasicTickFormatter"},"plot":{"id":"00b726fa-b0aa-49ab-b930-be8b55a26519","type":"Plot"},"ticker":{"id":"8418ab45-f15a-4cee-ae5c-0e3ba1dbda60","type":"BasicTicker"}},"id":"b26801e2-6265-4591-931c-6e7fb4e66994","type":"LinearAxis"},{"attributes":{},"id":"11580d71-ffdd-4f92-ab63-9a59d7d038b7","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"00b726fa-b0aa-49ab-b930-be8b55a26519","type":"Plot"},"ticker":{"id":"8502ed1c-b28e-49e0-bddf-168ca76e5fac","type":"BasicTicker"}},"id":"33640447-7930-42ff-9d34-712cb2c3995f","type":"Grid"},{"attributes":{},"id":"9f447c7e-ddc9-45f4-8778-ece8d35ba96e","type":"BasicTickFormatter"},{"attributes":{},"id":"94389fee-b827-471a-b115-c315e38cce14","type":"ToolEvents"},{"attributes":{"plot":{"id":"00b726fa-b0aa-49ab-b930-be8b55a26519","type":"Plot"},"ticker":{"id":"8418ab45-f15a-4cee-ae5c-0e3ba1dbda60","type":"BasicTicker"}},"id":"395edb4d-833f-44b6-8118-db3eaf9c0042","type":"Grid"},{"attributes":{},"id":"8418ab45-f15a-4cee-ae5c-0e3ba1dbda60","type":"BasicTicker"},{"attributes":{"below":[{"id":"b26801e2-6265-4591-931c-6e7fb4e66994","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"9d732806-295c-42f1-b7ed-169c40c364e2","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"add3c7fb-4ca0-4b62-8773-10e29349f1ad","type":"GlyphRenderer"},{"id":"b26801e2-6265-4591-931c-6e7fb4e66994","type":"LinearAxis"},{"id":"9d732806-295c-42f1-b7ed-169c40c364e2","type":"LinearAxis"},{"id":"395edb4d-833f-44b6-8118-db3eaf9c0042","type":"Grid"},{"id":"33640447-7930-42ff-9d34-712cb2c3995f","type":"Grid"}],"title":null,"tool_events":{"id":"94389fee-b827-471a-b115-c315e38cce14","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"cb8b3187-a15a-4548-a772-5361bbeb3732","type":"DataRange1d"},"y_range":{"id":"bb47e6d1-1d08-4e25-a833-81dbc4852b61","type":"DataRange1d"}},"id":"00b726fa-b0aa-49ab-b930-be8b55a26519","type":"Plot"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#de2d26"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2fa2d350-1300-45ba-b0a2-86dfc0050920","type":"InvertedTriangle"},{"attributes":{"data_source":{"id":"22c5b683-7831-42a5-ae0f-cc961096d81d","type":"ColumnDataSource"},"glyph":{"id":"2fa2d350-1300-45ba-b0a2-86dfc0050920","type":"InvertedTriangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"add3c7fb-4ca0-4b62-8773-10e29349f1ad","type":"GlyphRenderer"}],"root_ids":["00b726fa-b0aa-49ab-b930-be8b55a26519"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"8816361f-e3e6-4177-a70a-0ba3c200993c","elementid":"9858c41e-81a6-422a-aaf1-a57fcf92a0b9","modelid":"00b726fa-b0aa-49ab-b930-be8b55a26519"}];
          
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