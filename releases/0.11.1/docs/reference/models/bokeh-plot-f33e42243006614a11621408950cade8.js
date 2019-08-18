
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
  };var element = document.getElementById("0dd088e1-98eb-49d2-97a6-b4b1f65f8929");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '0dd088e1-98eb-49d2-97a6-b4b1f65f8929' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"3936af0e-4bde-41d9-b42b-369f9290c63c":{"roots":{"references":[{"attributes":{},"id":"e972b846-1581-45f8-a816-bc1a251d2298","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"e972b846-1581-45f8-a816-bc1a251d2298","type":"BasicTickFormatter"},"plot":{"id":"e8091a78-6a6b-420c-96db-75dd5155001a","type":"Plot"},"ticker":{"id":"2f7b79d0-d130-457c-9d29-1bf0dc9c9e52","type":"BasicTicker"}},"id":"87206c18-8d07-481c-a27e-07738d30e52c","type":"LinearAxis"},{"attributes":{"below":[{"id":"87206c18-8d07-481c-a27e-07738d30e52c","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"1b7b7c8a-e8d3-4796-a083-ad54c341f4cd","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"7ada2b7b-7bd7-494d-bf30-104f11c7749d","type":"GlyphRenderer"},{"id":"87206c18-8d07-481c-a27e-07738d30e52c","type":"LinearAxis"},{"id":"1b7b7c8a-e8d3-4796-a083-ad54c341f4cd","type":"LinearAxis"},{"id":"6e9c416b-5730-4730-b1ae-52baeeb813bb","type":"Grid"},{"id":"d8e0ce0b-722c-4b6c-8018-005d53612e5b","type":"Grid"}],"title":null,"tool_events":{"id":"50a7a383-d9c2-48d9-b754-a4e7b90c314a","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"1c3381a4-d79e-4764-a5fd-66d848d36646","type":"DataRange1d"},"y_range":{"id":"ee5e11ab-1340-45ae-b4be-d2820ae23ff9","type":"DataRange1d"}},"id":"e8091a78-6a6b-420c-96db-75dd5155001a","type":"Plot"},{"attributes":{},"id":"30487705-cb11-4c01-8940-e8209151de95","type":"BasicTicker"},{"attributes":{},"id":"2f7b79d0-d130-457c-9d29-1bf0dc9c9e52","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#e6550d"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9949aeed-2666-4b66-889c-990a888ead2f","type":"Cross"},{"attributes":{"plot":{"id":"e8091a78-6a6b-420c-96db-75dd5155001a","type":"Plot"},"ticker":{"id":"2f7b79d0-d130-457c-9d29-1bf0dc9c9e52","type":"BasicTicker"}},"id":"6e9c416b-5730-4730-b1ae-52baeeb813bb","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"e8091a78-6a6b-420c-96db-75dd5155001a","type":"Plot"},"ticker":{"id":"30487705-cb11-4c01-8940-e8209151de95","type":"BasicTicker"}},"id":"d8e0ce0b-722c-4b6c-8018-005d53612e5b","type":"Grid"},{"attributes":{"formatter":{"id":"8d24675d-35f2-409c-b1e9-759bf950afca","type":"BasicTickFormatter"},"plot":{"id":"e8091a78-6a6b-420c-96db-75dd5155001a","type":"Plot"},"ticker":{"id":"30487705-cb11-4c01-8940-e8209151de95","type":"BasicTicker"}},"id":"1b7b7c8a-e8d3-4796-a083-ad54c341f4cd","type":"LinearAxis"},{"attributes":{"callback":null},"id":"1c3381a4-d79e-4764-a5fd-66d848d36646","type":"DataRange1d"},{"attributes":{},"id":"8d24675d-35f2-409c-b1e9-759bf950afca","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"ee5e11ab-1340-45ae-b4be-d2820ae23ff9","type":"DataRange1d"},{"attributes":{"data_source":{"id":"e02a7fd7-ff30-4112-b996-3a9754f6faec","type":"ColumnDataSource"},"glyph":{"id":"9949aeed-2666-4b66-889c-990a888ead2f","type":"Cross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7ada2b7b-7bd7-494d-bf30-104f11c7749d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"e02a7fd7-ff30-4112-b996-3a9754f6faec","type":"ColumnDataSource"},{"attributes":{},"id":"50a7a383-d9c2-48d9-b754-a4e7b90c314a","type":"ToolEvents"}],"root_ids":["e8091a78-6a6b-420c-96db-75dd5155001a"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"3936af0e-4bde-41d9-b42b-369f9290c63c","elementid":"0dd088e1-98eb-49d2-97a6-b4b1f65f8929","modelid":"e8091a78-6a6b-420c-96db-75dd5155001a"}];
          
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