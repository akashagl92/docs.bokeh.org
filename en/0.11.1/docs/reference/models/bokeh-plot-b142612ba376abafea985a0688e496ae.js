
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
  };var element = document.getElementById("47cd6782-ef30-4f17-be14-b5e85a5d16aa");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '47cd6782-ef30-4f17-be14-b5e85a5d16aa' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"3ea04cfc-0d4e-4a4a-aa30-04c6afa540b5":{"roots":{"references":[{"attributes":{"data_source":{"id":"ef5e70a7-5814-41cd-9cb0-37daffcac790","type":"ColumnDataSource"},"glyph":{"id":"0cead9a5-f6aa-44ed-ae24-ec87378a79c2","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1dfe49c3-e4d3-4929-a6ff-fef0b1e87c75","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"75943242-391d-418c-b98d-daa2c1800c52","type":"DataRange1d"},{"attributes":{},"id":"a0feed4c-ec68-4566-a5ba-2223bbb390ea","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["ys","xs"],"data":{"xs":[[-2.09,-2.12,-2.0,-1.88,-1.91],[-1.599,-1.6320000000000001,-1.5,-1.3679999999999999,-1.401],[-1.108,-1.144,-1.0,-0.856,-0.892],[-0.617,-0.656,-0.5,-0.344,-0.383],[-0.126,-0.16799999999999998,0.0,0.16799999999999998,0.126],[0.365,0.32,0.5,0.6799999999999999,0.635],[0.856,0.808,1.0,1.192,1.144],[1.347,1.296,1.5,1.704,1.653],[1.838,1.784,2.0,2.216,2.162]],"ys":[[3.9,4.02,4.1,4.02,3.9],[2.14,2.272,2.36,2.272,2.14],[0.88,1.024,1.12,1.024,0.88],[0.12,0.276,0.38,0.276,0.12],[-0.13999999999999999,0.027999999999999997,0.13999999999999999,0.027999999999999997,-0.13999999999999999],[0.09999999999999998,0.28,0.4,0.28,0.09999999999999998],[0.84,1.032,1.1600000000000001,1.032,0.84],[2.08,2.284,2.42,2.284,2.08],[3.82,4.036,4.18,4.036,3.82]]}},"id":"ef5e70a7-5814-41cd-9cb0-37daffcac790","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"c673bff5-80f5-4e16-be4d-738bec941d76","type":"Plot"},"ticker":{"id":"a0feed4c-ec68-4566-a5ba-2223bbb390ea","type":"BasicTicker"}},"id":"af3763e2-4a2a-4600-b700-e63224a579c1","type":"Grid"},{"attributes":{},"id":"3f2a0ea2-dbde-425f-abc9-24221636807c","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#fb9a99"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"0cead9a5-f6aa-44ed-ae24-ec87378a79c2","type":"Patches"},{"attributes":{},"id":"ba4951fd-73b6-40ac-9c2c-0877741c758b","type":"ToolEvents"},{"attributes":{"callback":null},"id":"546d47c4-42d2-4631-9b8e-638bcde9cea6","type":"DataRange1d"},{"attributes":{"below":[{"id":"1f1eb5e5-4447-47f1-bf40-140639901a6b","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"620f9bae-a08a-4565-87a7-6b27a24c121f","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"1dfe49c3-e4d3-4929-a6ff-fef0b1e87c75","type":"GlyphRenderer"},{"id":"1f1eb5e5-4447-47f1-bf40-140639901a6b","type":"LinearAxis"},{"id":"620f9bae-a08a-4565-87a7-6b27a24c121f","type":"LinearAxis"},{"id":"9e5326cd-32cb-40f9-8c2c-8cbba9aa113a","type":"Grid"},{"id":"af3763e2-4a2a-4600-b700-e63224a579c1","type":"Grid"}],"title":null,"tool_events":{"id":"ba4951fd-73b6-40ac-9c2c-0877741c758b","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"546d47c4-42d2-4631-9b8e-638bcde9cea6","type":"DataRange1d"},"y_range":{"id":"75943242-391d-418c-b98d-daa2c1800c52","type":"DataRange1d"}},"id":"c673bff5-80f5-4e16-be4d-738bec941d76","type":"Plot"},{"attributes":{"formatter":{"id":"c24d2bf4-d688-4f96-8e54-7d0ca0080256","type":"BasicTickFormatter"},"plot":{"id":"c673bff5-80f5-4e16-be4d-738bec941d76","type":"Plot"},"ticker":{"id":"cc71f611-e16b-4b37-9bac-8349d76353a7","type":"BasicTicker"}},"id":"1f1eb5e5-4447-47f1-bf40-140639901a6b","type":"LinearAxis"},{"attributes":{"plot":{"id":"c673bff5-80f5-4e16-be4d-738bec941d76","type":"Plot"},"ticker":{"id":"cc71f611-e16b-4b37-9bac-8349d76353a7","type":"BasicTicker"}},"id":"9e5326cd-32cb-40f9-8c2c-8cbba9aa113a","type":"Grid"},{"attributes":{},"id":"c24d2bf4-d688-4f96-8e54-7d0ca0080256","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"3f2a0ea2-dbde-425f-abc9-24221636807c","type":"BasicTickFormatter"},"plot":{"id":"c673bff5-80f5-4e16-be4d-738bec941d76","type":"Plot"},"ticker":{"id":"a0feed4c-ec68-4566-a5ba-2223bbb390ea","type":"BasicTicker"}},"id":"620f9bae-a08a-4565-87a7-6b27a24c121f","type":"LinearAxis"},{"attributes":{},"id":"cc71f611-e16b-4b37-9bac-8349d76353a7","type":"BasicTicker"}],"root_ids":["c673bff5-80f5-4e16-be4d-738bec941d76"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"3ea04cfc-0d4e-4a4a-aa30-04c6afa540b5","elementid":"47cd6782-ef30-4f17-be14-b5e85a5d16aa","modelid":"c673bff5-80f5-4e16-be4d-738bec941d76"}];
          
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