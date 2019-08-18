
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
  };var element = document.getElementById("c07c6ce6-9fa0-4a22-8c88-c02b8f03c1aa");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c07c6ce6-9fa0-4a22-8c88-c02b8f03c1aa' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"bb8a715c-595d-42ab-9538-d0394415cb8c":{"roots":{"references":[{"attributes":{"formatter":{"id":"1f90d71e-77f9-4e42-978e-691993c31585","type":"BasicTickFormatter"},"plot":{"id":"6ce8babe-5f80-4092-8d0d-f4cfff24fbe3","type":"Plot"},"ticker":{"id":"67725db0-c401-4f8a-9abb-bcd5c1a8b6d3","type":"BasicTicker"}},"id":"eea664c7-bb49-48de-96b4-e881ddbaf36b","type":"LinearAxis"},{"attributes":{"callback":null},"id":"945b433c-4977-4c22-89b5-1e9e577e1734","type":"DataRange1d"},{"attributes":{"data_source":{"id":"a8f9b18a-dcef-45e0-b05e-2539070b9ca3","type":"ColumnDataSource"},"glyph":{"id":"e59fc654-b51a-4fce-a9e9-19d60d8a0aaa","type":"Text"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"235e9ff9-7905-4d7d-aef3-cabdf01ea8e9","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"f3ed9bd7-c9cd-47f0-ab87-500b5d7a8389","type":"BasicTickFormatter"},"plot":{"id":"6ce8babe-5f80-4092-8d0d-f4cfff24fbe3","type":"Plot"},"ticker":{"id":"74b0a977-82e5-4e70-9659-bafe943c0508","type":"BasicTicker"}},"id":"9b9332fe-a3ce-4bd6-a0a5-41617b715eda","type":"LinearAxis"},{"attributes":{},"id":"1f90d71e-77f9-4e42-978e-691993c31585","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","text","x"],"data":{"text":["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"a8f9b18a-dcef-45e0-b05e-2539070b9ca3","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"6b3e7530-0629-4952-9615-92b4df830b9c","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"6ce8babe-5f80-4092-8d0d-f4cfff24fbe3","type":"Plot"},"ticker":{"id":"74b0a977-82e5-4e70-9659-bafe943c0508","type":"BasicTicker"}},"id":"a5c22019-eb0a-4822-a4a2-252c92801885","type":"Grid"},{"attributes":{"below":[{"id":"eea664c7-bb49-48de-96b4-e881ddbaf36b","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"9b9332fe-a3ce-4bd6-a0a5-41617b715eda","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"235e9ff9-7905-4d7d-aef3-cabdf01ea8e9","type":"GlyphRenderer"},{"id":"eea664c7-bb49-48de-96b4-e881ddbaf36b","type":"LinearAxis"},{"id":"9b9332fe-a3ce-4bd6-a0a5-41617b715eda","type":"LinearAxis"},{"id":"e54a30ce-f82a-4f86-b2f9-dde78b390507","type":"Grid"},{"id":"a5c22019-eb0a-4822-a4a2-252c92801885","type":"Grid"}],"title":null,"tool_events":{"id":"9cfe52fb-1fcc-49ba-8fd9-20b3fa9eef84","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"6b3e7530-0629-4952-9615-92b4df830b9c","type":"DataRange1d"},"y_range":{"id":"945b433c-4977-4c22-89b5-1e9e577e1734","type":"DataRange1d"}},"id":"6ce8babe-5f80-4092-8d0d-f4cfff24fbe3","type":"Plot"},{"attributes":{"angle":{"units":"rad","value":0.3},"text_color":{"value":"#96deb3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e59fc654-b51a-4fce-a9e9-19d60d8a0aaa","type":"Text"},{"attributes":{},"id":"67725db0-c401-4f8a-9abb-bcd5c1a8b6d3","type":"BasicTicker"},{"attributes":{},"id":"74b0a977-82e5-4e70-9659-bafe943c0508","type":"BasicTicker"},{"attributes":{},"id":"f3ed9bd7-c9cd-47f0-ab87-500b5d7a8389","type":"BasicTickFormatter"},{"attributes":{},"id":"9cfe52fb-1fcc-49ba-8fd9-20b3fa9eef84","type":"ToolEvents"},{"attributes":{"plot":{"id":"6ce8babe-5f80-4092-8d0d-f4cfff24fbe3","type":"Plot"},"ticker":{"id":"67725db0-c401-4f8a-9abb-bcd5c1a8b6d3","type":"BasicTicker"}},"id":"e54a30ce-f82a-4f86-b2f9-dde78b390507","type":"Grid"}],"root_ids":["6ce8babe-5f80-4092-8d0d-f4cfff24fbe3"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"bb8a715c-595d-42ab-9538-d0394415cb8c","elementid":"c07c6ce6-9fa0-4a22-8c88-c02b8f03c1aa","modelid":"6ce8babe-5f80-4092-8d0d-f4cfff24fbe3"}];
          
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