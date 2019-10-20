
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
  };var element = document.getElementById("078c4140-3f28-4e02-9242-3b484b769226");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '078c4140-3f28-4e02-9242-3b484b769226' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"dbf1577b-0be1-4d03-80ce-ca407f9b5690":{"roots":{"references":[{"attributes":{"formatter":{"id":"7efff9f8-ae0e-4044-83ed-50c5152a5f0f","type":"BasicTickFormatter"},"plot":{"id":"059f6584-0ed1-4898-8360-8a711c3891cf","type":"Plot"},"ticker":{"id":"d2f81d65-3080-46c2-9326-b4d837d17e63","type":"BasicTicker"}},"id":"0e38cdbc-2678-4b3e-90cc-1f08a4be0402","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["ys","xs"],"data":{"xs":[[-2.09,-2.12,-2.0,-1.88,-1.91],[-1.599,-1.6320000000000001,-1.5,-1.3679999999999999,-1.401],[-1.108,-1.144,-1.0,-0.856,-0.892],[-0.617,-0.656,-0.5,-0.344,-0.383],[-0.126,-0.16799999999999998,0.0,0.16799999999999998,0.126],[0.365,0.32,0.5,0.6799999999999999,0.635],[0.856,0.808,1.0,1.192,1.144],[1.347,1.296,1.5,1.704,1.653],[1.838,1.784,2.0,2.216,2.162]],"ys":[[3.9,4.02,4.1,4.02,3.9],[2.14,2.272,2.36,2.272,2.14],[0.88,1.024,1.12,1.024,0.88],[0.12,0.276,0.38,0.276,0.12],[-0.13999999999999999,0.027999999999999997,0.13999999999999999,0.027999999999999997,-0.13999999999999999],[0.09999999999999998,0.28,0.4,0.28,0.09999999999999998],[0.84,1.032,1.1600000000000001,1.032,0.84],[2.08,2.284,2.42,2.284,2.08],[3.82,4.036,4.18,4.036,3.82]]}},"id":"279a6aeb-ff3c-4f89-948a-ac4e1ea51f8a","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"f708ec9c-8aa2-458e-a21c-f936281001d1","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"0e38cdbc-2678-4b3e-90cc-1f08a4be0402","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"fa7cdd13-b079-4d3e-aff4-3a6102f2b4f5","type":"GlyphRenderer"},{"id":"f708ec9c-8aa2-458e-a21c-f936281001d1","type":"LinearAxis"},{"id":"0e38cdbc-2678-4b3e-90cc-1f08a4be0402","type":"LinearAxis"},{"id":"0060ec3d-318d-4b0c-8aa2-61c0d95bb399","type":"Grid"},{"id":"d26be283-7c0c-4abb-902f-d675567d3fee","type":"Grid"}],"title":null,"tool_events":{"id":"8ee911e6-0024-403c-bd72-1d83b9da3e5c","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"fa8dd52c-71ea-4192-9e7e-a0f7f14bc423","type":"DataRange1d"},"y_range":{"id":"20c2d22a-e9ef-4608-a423-e720f6fd54ef","type":"DataRange1d"}},"id":"059f6584-0ed1-4898-8360-8a711c3891cf","type":"Plot"},{"attributes":{},"id":"8492a337-e786-42a8-bb6f-aa85266a28f7","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"20c2d22a-e9ef-4608-a423-e720f6fd54ef","type":"DataRange1d"},{"attributes":{},"id":"e1430f23-0e97-47fc-b83f-ac2c3b3b7bd2","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"059f6584-0ed1-4898-8360-8a711c3891cf","type":"Plot"},"ticker":{"id":"d2f81d65-3080-46c2-9326-b4d837d17e63","type":"BasicTicker"}},"id":"d26be283-7c0c-4abb-902f-d675567d3fee","type":"Grid"},{"attributes":{"callback":null},"id":"fa8dd52c-71ea-4192-9e7e-a0f7f14bc423","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#8073ac"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"e9df7000-6926-4aaa-89ba-0c5e7fbf6d2b","type":"MultiLine"},{"attributes":{},"id":"7efff9f8-ae0e-4044-83ed-50c5152a5f0f","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"279a6aeb-ff3c-4f89-948a-ac4e1ea51f8a","type":"ColumnDataSource"},"glyph":{"id":"e9df7000-6926-4aaa-89ba-0c5e7fbf6d2b","type":"MultiLine"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fa7cdd13-b079-4d3e-aff4-3a6102f2b4f5","type":"GlyphRenderer"},{"attributes":{},"id":"d2f81d65-3080-46c2-9326-b4d837d17e63","type":"BasicTicker"},{"attributes":{"plot":{"id":"059f6584-0ed1-4898-8360-8a711c3891cf","type":"Plot"},"ticker":{"id":"e1430f23-0e97-47fc-b83f-ac2c3b3b7bd2","type":"BasicTicker"}},"id":"0060ec3d-318d-4b0c-8aa2-61c0d95bb399","type":"Grid"},{"attributes":{"formatter":{"id":"8492a337-e786-42a8-bb6f-aa85266a28f7","type":"BasicTickFormatter"},"plot":{"id":"059f6584-0ed1-4898-8360-8a711c3891cf","type":"Plot"},"ticker":{"id":"e1430f23-0e97-47fc-b83f-ac2c3b3b7bd2","type":"BasicTicker"}},"id":"f708ec9c-8aa2-458e-a21c-f936281001d1","type":"LinearAxis"},{"attributes":{},"id":"8ee911e6-0024-403c-bd72-1d83b9da3e5c","type":"ToolEvents"}],"root_ids":["059f6584-0ed1-4898-8360-8a711c3891cf"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"dbf1577b-0be1-4d03-80ce-ca407f9b5690","elementid":"078c4140-3f28-4e02-9242-3b484b769226","modelid":"059f6584-0ed1-4898-8360-8a711c3891cf"}];
          
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