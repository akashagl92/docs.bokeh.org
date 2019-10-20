
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
  };var element = document.getElementById("bb6cc19e-9537-4541-bdfd-4531a860366d");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'bb6cc19e-9537-4541-bdfd-4531a860366d' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"45511982-1738-436e-a2d6-7a80fa34c1af":{"roots":{"references":[{"attributes":{},"id":"4f79b979-591d-4381-bace-387369a6e78a","type":"ToolEvents"},{"attributes":{"data_source":{"id":"390d2002-bec4-422f-a69c-97a417fe88f5","type":"ColumnDataSource"},"glyph":{"id":"c7160682-1208-4d87-8704-518839ed8065","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"0db9da61-13f8-4ec2-bb58-9a63bcb1b822","type":"Circle"},"selection_glyph":{"id":"c5546f84-71af-4a4f-84d8-c31df9d6229c","type":"Circle"}},"id":"1dcd0a00-401c-4a37-b440-3a6a5ce0ad00","type":"GlyphRenderer"},{"attributes":{},"id":"ff5a62d0-ba48-49d5-b48b-a30b0f81d75f","type":"BasicTicker"},{"attributes":{},"id":"d24eedb8-d6c9-4d08-891a-ec834a616e01","type":"BasicTicker"},{"attributes":{"below":[{"id":"be1653e2-dc40-4867-866a-b006576ea775","type":"LinearAxis"}],"left":[{"id":"3afe9748-22f3-44d2-b4b6-6e3a699f3734","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"be1653e2-dc40-4867-866a-b006576ea775","type":"LinearAxis"},{"id":"9186a6a2-c848-4fb2-8f62-7258a30d60a2","type":"Grid"},{"id":"3afe9748-22f3-44d2-b4b6-6e3a699f3734","type":"LinearAxis"},{"id":"f05d2384-759a-4504-9a55-e2272aae645e","type":"Grid"},{"id":"1dcd0a00-401c-4a37-b440-3a6a5ce0ad00","type":"GlyphRenderer"}],"title":"Select a circle","tool_events":{"id":"4f79b979-591d-4381-bace-387369a6e78a","type":"ToolEvents"},"tools":[{"id":"137024e2-6e6a-4409-afd1-734046a8d175","type":"TapTool"}],"x_range":{"id":"ee6eb91a-9361-4d13-923a-d0a55803f58d","type":"DataRange1d"},"y_range":{"id":"06ae31db-7343-4c15-be7d-05c44d966f46","type":"DataRange1d"}},"id":"82ae572f-1daa-453d-a4c7-b34af3695605","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"b9e2fde2-a087-4586-a772-4f8ddbe727c1","type":"BasicTickFormatter"},"plot":{"id":"82ae572f-1daa-453d-a4c7-b34af3695605","subtype":"Figure","type":"Plot"},"ticker":{"id":"ff5a62d0-ba48-49d5-b48b-a30b0f81d75f","type":"BasicTicker"}},"id":"be1653e2-dc40-4867-866a-b006576ea775","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"}},"id":"0db9da61-13f8-4ec2-bb58-9a63bcb1b822","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"82ae572f-1daa-453d-a4c7-b34af3695605","subtype":"Figure","type":"Plot"},"ticker":{"id":"d24eedb8-d6c9-4d08-891a-ec834a616e01","type":"BasicTicker"}},"id":"f05d2384-759a-4504-9a55-e2272aae645e","type":"Grid"},{"attributes":{},"id":"b9e2fde2-a087-4586-a772-4f8ddbe727c1","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"ee6eb91a-9361-4d13-923a-d0a55803f58d","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":null}},"id":"c5546f84-71af-4a4f-84d8-c31df9d6229c","type":"Circle"},{"attributes":{"formatter":{"id":"6b3fc0a1-96ea-4396-b6c5-2b582a7a3291","type":"BasicTickFormatter"},"plot":{"id":"82ae572f-1daa-453d-a4c7-b34af3695605","subtype":"Figure","type":"Plot"},"ticker":{"id":"d24eedb8-d6c9-4d08-891a-ec834a616e01","type":"BasicTicker"}},"id":"3afe9748-22f3-44d2-b4b6-6e3a699f3734","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"390d2002-bec4-422f-a69c-97a417fe88f5","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"82ae572f-1daa-453d-a4c7-b34af3695605","subtype":"Figure","type":"Plot"},"ticker":{"id":"ff5a62d0-ba48-49d5-b48b-a30b0f81d75f","type":"BasicTicker"}},"id":"9186a6a2-c848-4fb2-8f62-7258a30d60a2","type":"Grid"},{"attributes":{"callback":null},"id":"06ae31db-7343-4c15-be7d-05c44d966f46","type":"DataRange1d"},{"attributes":{"callback":null,"plot":{"id":"82ae572f-1daa-453d-a4c7-b34af3695605","subtype":"Figure","type":"Plot"}},"id":"137024e2-6e6a-4409-afd1-734046a8d175","type":"TapTool"},{"attributes":{},"id":"6b3fc0a1-96ea-4396-b6c5-2b582a7a3291","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"c7160682-1208-4d87-8704-518839ed8065","type":"Circle"}],"root_ids":["82ae572f-1daa-453d-a4c7-b34af3695605"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"45511982-1738-436e-a2d6-7a80fa34c1af","elementid":"bb6cc19e-9537-4541-bdfd-4531a860366d","modelid":"82ae572f-1daa-453d-a4c7-b34af3695605"}];
          
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