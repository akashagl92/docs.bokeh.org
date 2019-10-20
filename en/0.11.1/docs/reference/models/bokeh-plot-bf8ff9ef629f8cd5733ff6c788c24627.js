
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
  };var element = document.getElementById("31d1da08-7773-452f-a43b-d0fdc42f0b7e");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '31d1da08-7773-452f-a43b-d0fdc42f0b7e' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"123dcfa2-ff96-4786-8ae9-656244b9678d":{"roots":{"references":[{"attributes":{"h":{"units":"data","value":20},"url":{"field":"url"},"w":{"units":"data","value":20},"x":{"field":"x2"},"y":{"field":"y2"}},"id":"9d1f0ec3-962d-4f49-9b28-ac2b0fe1ab7e","type":"ImageURL"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"26fa6719-e0c5-4611-8d70-4ac114bc770e","type":"Range1d"},{"attributes":{},"id":"43c415b8-b351-42b4-915f-21aab698c1d3","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"82558508-bf96-429e-b0ef-5f5630706ce5","type":"Plot"},"ticker":{"id":"02a241b0-82d6-44fe-bacb-f725509edb0a","type":"BasicTicker"}},"id":"21d13b6a-f682-4647-9680-68664bf64c4d","type":"Grid"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"64cd8034-5f4a-4d30-bfdf-f591f3e4ee00","type":"Range1d"},{"attributes":{},"id":"861607b9-f8a6-4253-97e8-3fafcc189312","type":"BasicTickFormatter"},{"attributes":{},"id":"3a3d11ee-cde2-43b6-83b1-3d68632e67cf","type":"BasicTicker"},{"attributes":{},"id":"02a241b0-82d6-44fe-bacb-f725509edb0a","type":"BasicTicker"},{"attributes":{"anchor":"bottom_right","url":{"value":"http://bokeh.pydata.org/en/latest/_static/images/logo.png"},"x":{"value":200},"y":{"value":-100}},"id":"edf3c7d1-4828-4ef2-9352-47486e66facb","type":"ImageURL"},{"attributes":{"formatter":{"id":"43c415b8-b351-42b4-915f-21aab698c1d3","type":"BasicTickFormatter"},"plot":{"id":"82558508-bf96-429e-b0ef-5f5630706ce5","type":"Plot"},"ticker":{"id":"02a241b0-82d6-44fe-bacb-f725509edb0a","type":"BasicTicker"}},"id":"f39e0da5-cd22-43c1-a18e-9c9bd5894d8b","type":"LinearAxis"},{"attributes":{"plot":{"id":"82558508-bf96-429e-b0ef-5f5630706ce5","type":"Plot"},"ticker":{"id":"3a3d11ee-cde2-43b6-83b1-3d68632e67cf","type":"BasicTicker"}},"id":"c5852eb3-60b5-45b0-b9d6-de4f3c28ca49","type":"Grid"},{"attributes":{"formatter":{"id":"861607b9-f8a6-4253-97e8-3fafcc189312","type":"BasicTickFormatter"},"plot":{"id":"82558508-bf96-429e-b0ef-5f5630706ce5","type":"Plot"},"ticker":{"id":"3a3d11ee-cde2-43b6-83b1-3d68632e67cf","type":"BasicTicker"}},"id":"4b155118-a837-4b97-859c-54fd552a7b03","type":"LinearAxis"},{"attributes":{"anchor":"center","h":{"field":"h1","units":"data"},"url":{"field":"url"},"w":{"field":"w1","units":"data"},"x":{"field":"x1"},"y":{"field":"y1"}},"id":"d82e432a-e4d3-4c5f-9f8c-2dc11259a741","type":"ImageURL"},{"attributes":{"data_source":{"id":"1fde9923-c01d-4f94-a646-117268082c61","type":"ColumnDataSource"},"glyph":{"id":"d82e432a-e4d3-4c5f-9f8c-2dc11259a741","type":"ImageURL"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3cdda7bb-b075-41c3-9625-4ea701f4a55f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1fde9923-c01d-4f94-a646-117268082c61","type":"ColumnDataSource"},"glyph":{"id":"edf3c7d1-4828-4ef2-9352-47486e66facb","type":"ImageURL"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e887db8e-8365-4964-ba91-6e2d163a195f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1fde9923-c01d-4f94-a646-117268082c61","type":"ColumnDataSource"},"glyph":{"id":"9d1f0ec3-962d-4f49-9b28-ac2b0fe1ab7e","type":"ImageURL"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"af885db8-487f-4775-ae6a-5e683e36e14e","type":"GlyphRenderer"},{"attributes":{},"id":"f764a20f-7f98-476a-9bfd-578ae51e9b71","type":"ToolEvents"},{"attributes":{"below":[{"id":"4b155118-a837-4b97-859c-54fd552a7b03","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"f39e0da5-cd22-43c1-a18e-9c9bd5894d8b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"3cdda7bb-b075-41c3-9625-4ea701f4a55f","type":"GlyphRenderer"},{"id":"af885db8-487f-4775-ae6a-5e683e36e14e","type":"GlyphRenderer"},{"id":"e887db8e-8365-4964-ba91-6e2d163a195f","type":"GlyphRenderer"},{"id":"4b155118-a837-4b97-859c-54fd552a7b03","type":"LinearAxis"},{"id":"f39e0da5-cd22-43c1-a18e-9c9bd5894d8b","type":"LinearAxis"},{"id":"c5852eb3-60b5-45b0-b9d6-de4f3c28ca49","type":"Grid"},{"id":"21d13b6a-f682-4647-9680-68664bf64c4d","type":"Grid"}],"title":null,"tool_events":{"id":"f764a20f-7f98-476a-9bfd-578ae51e9b71","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"26fa6719-e0c5-4611-8d70-4ac114bc770e","type":"Range1d"},"y_range":{"id":"64cd8034-5f4a-4d30-bfdf-f591f3e4ee00","type":"Range1d"}},"id":"82558508-bf96-429e-b0ef-5f5630706ce5","type":"Plot"},{"attributes":{"callback":null,"column_names":["h1","y2","w1","x1","x2","url","y1"],"data":{"h1":[10.0,20.0,30.0,40.0,50.0],"url":["http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png"],"w1":[10.0,20.0,30.0,40.0,50.0],"x1":[0.0,37.5,75.0,112.5,150.0],"x2":[-50.0,0.0,50.0,100.0,150.0],"y1":[0.0,37.5,75.0,112.5,150.0],"y2":[0.0,50.0,100.0,150.0,200.0]}},"id":"1fde9923-c01d-4f94-a646-117268082c61","type":"ColumnDataSource"}],"root_ids":["82558508-bf96-429e-b0ef-5f5630706ce5"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"123dcfa2-ff96-4786-8ae9-656244b9678d","elementid":"31d1da08-7773-452f-a43b-d0fdc42f0b7e","modelid":"82558508-bf96-429e-b0ef-5f5630706ce5"}];
          
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