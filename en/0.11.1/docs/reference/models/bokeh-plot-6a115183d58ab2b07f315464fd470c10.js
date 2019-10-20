
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
  };var element = document.getElementById("e86d9a99-7ce2-4a23-aa39-f349eb74f28c");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'e86d9a99-7ce2-4a23-aa39-f349eb74f28c' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"3474beae-3a00-48b8-bc7e-c222b8074a98":{"roots":{"references":[{"attributes":{"formatter":{"id":"d43a2082-f8ac-4f95-8fe3-0f3a860e5261","type":"BasicTickFormatter"},"plot":{"id":"97e8e9c4-8e80-4e07-8131-78fc72c2883e","type":"Plot"},"ticker":{"id":"9ffdd091-38c8-43d2-b83b-98206c9e0f40","type":"BasicTicker"}},"id":"96760766-25b1-4d54-9a61-805a36b6e14d","type":"LinearAxis"},{"attributes":{"line_color":{"value":"#f4a582"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xm01"},"y0":{"field":"y"},"y1":{"field":"ym01"}},"id":"cee9cdd6-ffd3-4a18-8e61-5113d684567f","type":"Segment"},{"attributes":{"callback":null,"column_names":["ym01","y","x","xm01"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"xm01":[-0.8999999999999999,-0.8625,-0.6000000000000001,-0.1875,0.3,0.7875,1.2,1.4625000000000001,1.5],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0],"ym01":[4.1,2.525,1.4,0.725,0.5,0.725,1.4,2.525,4.1]}},"id":"cb70499a-b3cb-47c1-933a-2d6b24d9a31b","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"97e8e9c4-8e80-4e07-8131-78fc72c2883e","type":"Plot"},"ticker":{"id":"93a3ae2d-82e7-407f-9098-7b3d01ee4e4a","type":"BasicTicker"}},"id":"c4f98263-506d-4fd4-8e11-58eb5f1d2f48","type":"Grid"},{"attributes":{"data_source":{"id":"cb70499a-b3cb-47c1-933a-2d6b24d9a31b","type":"ColumnDataSource"},"glyph":{"id":"cee9cdd6-ffd3-4a18-8e61-5113d684567f","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7dcc1827-638d-4613-9a50-fa2713049089","type":"GlyphRenderer"},{"attributes":{},"id":"9ffdd091-38c8-43d2-b83b-98206c9e0f40","type":"BasicTicker"},{"attributes":{"callback":null},"id":"333d5e15-3b5e-4122-b050-4fde1c2a7858","type":"DataRange1d"},{"attributes":{"formatter":{"id":"f5bc2c1c-1952-469e-a362-39d349cd7d45","type":"BasicTickFormatter"},"plot":{"id":"97e8e9c4-8e80-4e07-8131-78fc72c2883e","type":"Plot"},"ticker":{"id":"93a3ae2d-82e7-407f-9098-7b3d01ee4e4a","type":"BasicTicker"}},"id":"c570b6ce-4701-4cc7-b81a-8c868d44b4c9","type":"LinearAxis"},{"attributes":{},"id":"f5bc2c1c-1952-469e-a362-39d349cd7d45","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"e5a7fcea-2c02-46df-bb6e-5536fd7998cb","type":"DataRange1d"},{"attributes":{},"id":"93a3ae2d-82e7-407f-9098-7b3d01ee4e4a","type":"BasicTicker"},{"attributes":{"below":[{"id":"c570b6ce-4701-4cc7-b81a-8c868d44b4c9","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"96760766-25b1-4d54-9a61-805a36b6e14d","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"7dcc1827-638d-4613-9a50-fa2713049089","type":"GlyphRenderer"},{"id":"c570b6ce-4701-4cc7-b81a-8c868d44b4c9","type":"LinearAxis"},{"id":"96760766-25b1-4d54-9a61-805a36b6e14d","type":"LinearAxis"},{"id":"c4f98263-506d-4fd4-8e11-58eb5f1d2f48","type":"Grid"},{"id":"680ea0b0-64cf-4407-bbcb-ba5c9a831fe4","type":"Grid"}],"title":null,"tool_events":{"id":"9f0e51fb-a388-4a2c-bdf6-464311b636b4","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"e5a7fcea-2c02-46df-bb6e-5536fd7998cb","type":"DataRange1d"},"y_range":{"id":"333d5e15-3b5e-4122-b050-4fde1c2a7858","type":"DataRange1d"}},"id":"97e8e9c4-8e80-4e07-8131-78fc72c2883e","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"97e8e9c4-8e80-4e07-8131-78fc72c2883e","type":"Plot"},"ticker":{"id":"9ffdd091-38c8-43d2-b83b-98206c9e0f40","type":"BasicTicker"}},"id":"680ea0b0-64cf-4407-bbcb-ba5c9a831fe4","type":"Grid"},{"attributes":{},"id":"d43a2082-f8ac-4f95-8fe3-0f3a860e5261","type":"BasicTickFormatter"},{"attributes":{},"id":"9f0e51fb-a388-4a2c-bdf6-464311b636b4","type":"ToolEvents"}],"root_ids":["97e8e9c4-8e80-4e07-8131-78fc72c2883e"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"3474beae-3a00-48b8-bc7e-c222b8074a98","elementid":"e86d9a99-7ce2-4a23-aa39-f349eb74f28c","modelid":"97e8e9c4-8e80-4e07-8131-78fc72c2883e"}];
          
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