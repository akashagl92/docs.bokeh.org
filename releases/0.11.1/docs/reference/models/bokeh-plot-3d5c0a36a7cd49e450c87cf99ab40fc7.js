
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
  };var element = document.getElementById("20b914ec-9f29-44a0-89a6-b598b8d1a71f");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '20b914ec-9f29-44a0-89a6-b598b8d1a71f' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"f990efa9-2ceb-4d7c-bba2-fc04021aa47b":{"roots":{"references":[{"attributes":{},"id":"070548ba-c2c5-4dcd-a30a-86e74fbf792b","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"61e50d08-9a9e-4223-a915-50ee49a0f849","type":"DataRange1d"},{"attributes":{"below":[{"id":"2bab1aca-bbbe-4fd6-b35a-62f9179aa68c","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"9d72f7b1-ad47-41e1-8d40-c4b6383adb10","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"74e0f5bf-bb47-4ee6-8331-5acdba80608f","type":"GlyphRenderer"},{"id":"2bab1aca-bbbe-4fd6-b35a-62f9179aa68c","type":"LinearAxis"},{"id":"9d72f7b1-ad47-41e1-8d40-c4b6383adb10","type":"LinearAxis"},{"id":"30e76b72-d615-4a4a-b07e-c0bdc7d1ef42","type":"Grid"},{"id":"e86dd802-6e0b-467c-96b2-854ee51366c9","type":"Grid"}],"title":null,"tool_events":{"id":"89544a22-fd39-44bd-8d17-9446b0a935f3","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"61e50d08-9a9e-4223-a915-50ee49a0f849","type":"DataRange1d"},"y_range":{"id":"9c336e92-12ab-45ad-8efb-3333beddea59","type":"DataRange1d"}},"id":"be108d39-36ea-43f7-90b9-3e12899381db","type":"Plot"},{"attributes":{"plot":{"id":"be108d39-36ea-43f7-90b9-3e12899381db","type":"Plot"},"ticker":{"id":"c20e8ca1-ced1-446a-aae7-983cbbc9d396","type":"BasicTicker"}},"id":"30e76b72-d615-4a4a-b07e-c0bdc7d1ef42","type":"Grid"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"line_color":{"value":"#beaed4"},"line_width":{"value":3},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"b85b17f7-6348-4482-b38f-00ba60c116bc","type":"Arc"},{"attributes":{"callback":null},"id":"9c336e92-12ab-45ad-8efb-3333beddea59","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"be108d39-36ea-43f7-90b9-3e12899381db","type":"Plot"},"ticker":{"id":"06ec8a70-f10e-4cd0-9aff-0862a0093ed8","type":"BasicTicker"}},"id":"e86dd802-6e0b-467c-96b2-854ee51366c9","type":"Grid"},{"attributes":{},"id":"89544a22-fd39-44bd-8d17-9446b0a935f3","type":"ToolEvents"},{"attributes":{"formatter":{"id":"070548ba-c2c5-4dcd-a30a-86e74fbf792b","type":"BasicTickFormatter"},"plot":{"id":"be108d39-36ea-43f7-90b9-3e12899381db","type":"Plot"},"ticker":{"id":"c20e8ca1-ced1-446a-aae7-983cbbc9d396","type":"BasicTicker"}},"id":"2bab1aca-bbbe-4fd6-b35a-62f9179aa68c","type":"LinearAxis"},{"attributes":{},"id":"06ec8a70-f10e-4cd0-9aff-0862a0093ed8","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","r","x"],"data":{"r":[0.16666666666666666,0.19999999999999998,0.23333333333333334,0.26666666666666666,0.3,0.3333333333333333,0.36666666666666664,0.4,0.43333333333333335],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"39bee132-d006-4a99-a7cc-97df70f9b096","type":"ColumnDataSource"},{"attributes":{},"id":"c20e8ca1-ced1-446a-aae7-983cbbc9d396","type":"BasicTicker"},{"attributes":{"formatter":{"id":"9ce8a8d8-fab9-4a3e-840c-1d26e0a73d9b","type":"BasicTickFormatter"},"plot":{"id":"be108d39-36ea-43f7-90b9-3e12899381db","type":"Plot"},"ticker":{"id":"06ec8a70-f10e-4cd0-9aff-0862a0093ed8","type":"BasicTicker"}},"id":"9d72f7b1-ad47-41e1-8d40-c4b6383adb10","type":"LinearAxis"},{"attributes":{},"id":"9ce8a8d8-fab9-4a3e-840c-1d26e0a73d9b","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"39bee132-d006-4a99-a7cc-97df70f9b096","type":"ColumnDataSource"},"glyph":{"id":"b85b17f7-6348-4482-b38f-00ba60c116bc","type":"Arc"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"74e0f5bf-bb47-4ee6-8331-5acdba80608f","type":"GlyphRenderer"}],"root_ids":["be108d39-36ea-43f7-90b9-3e12899381db"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"f990efa9-2ceb-4d7c-bba2-fc04021aa47b","elementid":"20b914ec-9f29-44a0-89a6-b598b8d1a71f","modelid":"be108d39-36ea-43f7-90b9-3e12899381db"}];
          
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