
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
  };var element = document.getElementById("45500116-a3d0-43dc-9d2d-b7fb646f387d");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '45500116-a3d0-43dc-9d2d-b7fb646f387d' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"a544d5fc-9567-432c-9da1-602768f3763f":{"roots":{"references":[{"attributes":{},"id":"c1abb9d8-012a-424b-8a02-5f93fa92e856","type":"BasicTickFormatter"},{"attributes":{},"id":"7319a022-ab7c-4d2e-bad3-5d599a63a72b","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"a8a4b629-7de6-41b2-9925-0e3e79154652","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"0a6cfe3f-1893-4cdf-b599-e75e7ae5baf6","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"e493ea2b-9141-427d-b181-6a077102ed6c","type":"GlyphRenderer"},{"id":"a8a4b629-7de6-41b2-9925-0e3e79154652","type":"LinearAxis"},{"id":"0a6cfe3f-1893-4cdf-b599-e75e7ae5baf6","type":"LinearAxis"},{"id":"12c08a51-b95b-4a6d-9edf-96de09c1ec35","type":"Grid"},{"id":"b4f9360d-b425-426e-a434-212e6be63bb6","type":"Grid"}],"title":null,"tool_events":{"id":"3c64a0b7-3640-419a-9b16-b75d194a35e9","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"7d40c3df-82a3-4f89-82dd-5b22b52ce94f","type":"DataRange1d"},"y_range":{"id":"3f89d5cf-8df5-4e9e-aa0d-4577cb48460d","type":"DataRange1d"}},"id":"13628ec0-3ecf-4180-8d5c-fe879e0ca4c8","type":"Plot"},{"attributes":{"callback":null},"id":"3f89d5cf-8df5-4e9e-aa0d-4577cb48460d","type":"DataRange1d"},{"attributes":{"plot":{"id":"13628ec0-3ecf-4180-8d5c-fe879e0ca4c8","type":"Plot"},"ticker":{"id":"4b44e046-1d78-4d1c-ad25-92bb9952a88d","type":"BasicTicker"}},"id":"12c08a51-b95b-4a6d-9edf-96de09c1ec35","type":"Grid"},{"attributes":{"formatter":{"id":"c1abb9d8-012a-424b-8a02-5f93fa92e856","type":"BasicTickFormatter"},"plot":{"id":"13628ec0-3ecf-4180-8d5c-fe879e0ca4c8","type":"Plot"},"ticker":{"id":"f4f3ffdc-577f-4803-875b-d5f08ac16e59","type":"BasicTicker"}},"id":"0a6cfe3f-1893-4cdf-b599-e75e7ae5baf6","type":"LinearAxis"},{"attributes":{"callback":null},"id":"7d40c3df-82a3-4f89-82dd-5b22b52ce94f","type":"DataRange1d"},{"attributes":{},"id":"3c64a0b7-3640-419a-9b16-b75d194a35e9","type":"ToolEvents"},{"attributes":{"cx":{"field":"xp01"},"cy":{"field":"yp01"},"line_color":{"value":"#4DAF4A"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"e8a8f488-ec72-4b9d-a2c7-89c65f9a817c","type":"Quadratic"},{"attributes":{"dimension":1,"plot":{"id":"13628ec0-3ecf-4180-8d5c-fe879e0ca4c8","type":"Plot"},"ticker":{"id":"f4f3ffdc-577f-4803-875b-d5f08ac16e59","type":"BasicTicker"}},"id":"b4f9360d-b425-426e-a434-212e6be63bb6","type":"Grid"},{"attributes":{"data_source":{"id":"7d8feb8f-1cb0-4017-9ff6-c92e20d2d2b2","type":"ColumnDataSource"},"glyph":{"id":"e8a8f488-ec72-4b9d-a2c7-89c65f9a817c","type":"Quadratic"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e493ea2b-9141-427d-b181-6a077102ed6c","type":"GlyphRenderer"},{"attributes":{},"id":"4b44e046-1d78-4d1c-ad25-92bb9952a88d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"7319a022-ab7c-4d2e-bad3-5d599a63a72b","type":"BasicTickFormatter"},"plot":{"id":"13628ec0-3ecf-4180-8d5c-fe879e0ca4c8","type":"Plot"},"ticker":{"id":"4b44e046-1d78-4d1c-ad25-92bb9952a88d","type":"BasicTicker"}},"id":"a8a4b629-7de6-41b2-9925-0e3e79154652","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["xp01","y","x","xp02","yp01"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"xp01":[-1.9,-1.4,-0.9,-0.4,0.1,0.6,1.1,1.6,2.1],"xp02":[-1.6,-1.1,-0.6,-0.09999999999999998,0.4,0.9,1.4,1.9,2.4],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0],"yp01":[4.2,2.45,1.2,0.45,0.2,0.45,1.2,2.45,4.2]}},"id":"7d8feb8f-1cb0-4017-9ff6-c92e20d2d2b2","type":"ColumnDataSource"},{"attributes":{},"id":"f4f3ffdc-577f-4803-875b-d5f08ac16e59","type":"BasicTicker"}],"root_ids":["13628ec0-3ecf-4180-8d5c-fe879e0ca4c8"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"a544d5fc-9567-432c-9da1-602768f3763f","elementid":"45500116-a3d0-43dc-9d2d-b7fb646f387d","modelid":"13628ec0-3ecf-4180-8d5c-fe879e0ca4c8"}];
          
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