
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
  };var element = document.getElementById("7a5d37a8-04a5-4a44-ae76-bcdc2a9f5dfb");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '7a5d37a8-04a5-4a44-ae76-bcdc2a9f5dfb' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"41af55bd-3138-44bc-a7a9-2ccb7e152004":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"79f90cbd-42a8-4141-b932-b94cc630d962","type":"Plot"},"ticker":{"id":"74f79bd0-380e-4601-ad30-34d3980aa73b","type":"BasicTicker"}},"id":"5ea9887d-fbe5-4abc-b161-37e0e02ed7b8","type":"Grid"},{"attributes":{"plot":{"id":"79f90cbd-42a8-4141-b932-b94cc630d962","type":"Plot"},"ticker":{"id":"885ec17d-fe22-4b57-b365-a3c2f48cd233","type":"BasicTicker"}},"id":"a8b6fdfd-d65a-4b81-86fc-92894fe6b95c","type":"Grid"},{"attributes":{"callback":null},"id":"d78f3936-ff65-44d9-8eed-acebe9ec116e","type":"DataRange1d"},{"attributes":{},"id":"00806328-16e9-4950-95c8-3c78dc44aab2","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"00806328-16e9-4950-95c8-3c78dc44aab2","type":"BasicTickFormatter"},"plot":{"id":"79f90cbd-42a8-4141-b932-b94cc630d962","type":"Plot"},"ticker":{"id":"885ec17d-fe22-4b57-b365-a3c2f48cd233","type":"BasicTicker"}},"id":"ec5c0fa8-c666-4ee2-9cbb-b74ae205a450","type":"LinearAxis"},{"attributes":{},"id":"c2cb826f-f044-406f-b41a-4f2509665e92","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","r","x"],"data":{"r":[0.23333333333333336,0.275,0.3166666666666667,0.35833333333333334,0.4,0.4416666666666667,0.48333333333333334,0.525,0.5666666666666667],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"b1181b1b-f78e-432e-9612-872beb3ddebc","type":"ColumnDataSource"},{"attributes":{},"id":"305f462e-bb03-4c76-b861-24f90c1a2c0d","type":"ToolEvents"},{"attributes":{},"id":"885ec17d-fe22-4b57-b365-a3c2f48cd233","type":"BasicTicker"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#8888ee"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"f8a4e4f6-cc12-42dd-8c81-9d6ce91e7ee4","type":"AnnularWedge"},{"attributes":{"formatter":{"id":"c2cb826f-f044-406f-b41a-4f2509665e92","type":"BasicTickFormatter"},"plot":{"id":"79f90cbd-42a8-4141-b932-b94cc630d962","type":"Plot"},"ticker":{"id":"74f79bd0-380e-4601-ad30-34d3980aa73b","type":"BasicTicker"}},"id":"4e26b1aa-fa01-4507-ac00-1cf9508dd2a5","type":"LinearAxis"},{"attributes":{"callback":null},"id":"3cd4245a-b700-4ae7-942c-95ec6068ac61","type":"DataRange1d"},{"attributes":{"below":[{"id":"ec5c0fa8-c666-4ee2-9cbb-b74ae205a450","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"4e26b1aa-fa01-4507-ac00-1cf9508dd2a5","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"3eb23927-bf65-4672-aa25-fb6d6ad36644","type":"GlyphRenderer"},{"id":"ec5c0fa8-c666-4ee2-9cbb-b74ae205a450","type":"LinearAxis"},{"id":"4e26b1aa-fa01-4507-ac00-1cf9508dd2a5","type":"LinearAxis"},{"id":"a8b6fdfd-d65a-4b81-86fc-92894fe6b95c","type":"Grid"},{"id":"5ea9887d-fbe5-4abc-b161-37e0e02ed7b8","type":"Grid"}],"title":null,"tool_events":{"id":"305f462e-bb03-4c76-b861-24f90c1a2c0d","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"d78f3936-ff65-44d9-8eed-acebe9ec116e","type":"DataRange1d"},"y_range":{"id":"3cd4245a-b700-4ae7-942c-95ec6068ac61","type":"DataRange1d"}},"id":"79f90cbd-42a8-4141-b932-b94cc630d962","type":"Plot"},{"attributes":{},"id":"74f79bd0-380e-4601-ad30-34d3980aa73b","type":"BasicTicker"},{"attributes":{"data_source":{"id":"b1181b1b-f78e-432e-9612-872beb3ddebc","type":"ColumnDataSource"},"glyph":{"id":"f8a4e4f6-cc12-42dd-8c81-9d6ce91e7ee4","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3eb23927-bf65-4672-aa25-fb6d6ad36644","type":"GlyphRenderer"}],"root_ids":["79f90cbd-42a8-4141-b932-b94cc630d962"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"41af55bd-3138-44bc-a7a9-2ccb7e152004","elementid":"7a5d37a8-04a5-4a44-ae76-bcdc2a9f5dfb","modelid":"79f90cbd-42a8-4141-b932-b94cc630d962"}];
          
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