
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
  };var element = document.getElementById("1970a3da-5253-4475-abf4-de9af403c57d");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '1970a3da-5253-4475-abf4-de9af403c57d' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"45b93163-342a-433a-b3d3-79ba977d2248":{"roots":{"references":[{"attributes":{"formatter":{"id":"7f923af3-d3a2-4a5c-977d-cdfccbc7d731","type":"BasicTickFormatter"},"plot":{"id":"bb2f9039-c682-402b-a8bb-8a25d8de904b","type":"Plot"},"ticker":{"id":"174c8a2f-fa83-4cc8-9ffd-60ed2c90adea","type":"BasicTicker"}},"id":"7c68200f-8875-433e-ad74-377fbb136f87","type":"LinearAxis"},{"attributes":{"callback":null},"id":"515efdab-2ff7-4810-8e2d-11f76728b5a6","type":"DataRange1d"},{"attributes":{"callback":null},"id":"1f9f7f4c-a9f8-4292-ae89-4ba65699cb02","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"bb2f9039-c682-402b-a8bb-8a25d8de904b","type":"Plot"},"ticker":{"id":"174c8a2f-fa83-4cc8-9ffd-60ed2c90adea","type":"BasicTicker"}},"id":"cd3f13db-f9b9-4b48-86b8-4b70b4f58647","type":"Grid"},{"attributes":{"formatter":{"id":"e3bf1941-a3a4-4222-b999-5d50a4c282dd","type":"BasicTickFormatter"},"plot":{"id":"bb2f9039-c682-402b-a8bb-8a25d8de904b","type":"Plot"},"ticker":{"id":"5bf2d1f3-adb4-4f3c-88b0-0d2eac01e4a4","type":"BasicTicker"}},"id":"4893c9cf-ae2c-40fd-a2a4-a76bd6704112","type":"LinearAxis"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#b3de69"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"37fb4c3d-71f4-475c-9fe0-dc8011e87698","type":"Quad"},{"attributes":{},"id":"e3bf1941-a3a4-4222-b999-5d50a4c282dd","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"4893c9cf-ae2c-40fd-a2a4-a76bd6704112","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"7c68200f-8875-433e-ad74-377fbb136f87","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"56df626d-5c3e-4854-86dc-4f0940691478","type":"GlyphRenderer"},{"id":"4893c9cf-ae2c-40fd-a2a4-a76bd6704112","type":"LinearAxis"},{"id":"7c68200f-8875-433e-ad74-377fbb136f87","type":"LinearAxis"},{"id":"9c3dfa2a-bc21-42cf-a87a-5b731e8795ec","type":"Grid"},{"id":"cd3f13db-f9b9-4b48-86b8-4b70b4f58647","type":"Grid"}],"title":null,"tool_events":{"id":"ac1f169d-a5bf-4fff-9927-cdb8adf9ca6a","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"515efdab-2ff7-4810-8e2d-11f76728b5a6","type":"DataRange1d"},"y_range":{"id":"1f9f7f4c-a9f8-4292-ae89-4ba65699cb02","type":"DataRange1d"}},"id":"bb2f9039-c682-402b-a8bb-8a25d8de904b","type":"Plot"},{"attributes":{},"id":"5bf2d1f3-adb4-4f3c-88b0-0d2eac01e4a4","type":"BasicTicker"},{"attributes":{},"id":"7f923af3-d3a2-4a5c-977d-cdfccbc7d731","type":"BasicTickFormatter"},{"attributes":{},"id":"174c8a2f-fa83-4cc8-9ffd-60ed2c90adea","type":"BasicTicker"},{"attributes":{"data_source":{"id":"05f8fb49-2cdd-4f7f-9980-b51f22ca204a","type":"ColumnDataSource"},"glyph":{"id":"37fb4c3d-71f4-475c-9fe0-dc8011e87698","type":"Quad"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"56df626d-5c3e-4854-86dc-4f0940691478","type":"GlyphRenderer"},{"attributes":{},"id":"ac1f169d-a5bf-4fff-9927-cdb8adf9ca6a","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["top","bottom","left","right"],"data":{"bottom":[4.1,2.525,1.4,0.725,0.5,0.725,1.4,2.525,4.1],"left":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"right":[-0.8999999999999999,-0.8625,-0.6000000000000001,-0.1875,0.3,0.7875,1.2,1.4625000000000001,1.5],"top":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"05f8fb49-2cdd-4f7f-9980-b51f22ca204a","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"bb2f9039-c682-402b-a8bb-8a25d8de904b","type":"Plot"},"ticker":{"id":"5bf2d1f3-adb4-4f3c-88b0-0d2eac01e4a4","type":"BasicTicker"}},"id":"9c3dfa2a-bc21-42cf-a87a-5b731e8795ec","type":"Grid"}],"root_ids":["bb2f9039-c682-402b-a8bb-8a25d8de904b"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"45b93163-342a-433a-b3d3-79ba977d2248","elementid":"1970a3da-5253-4475-abf4-de9af403c57d","modelid":"bb2f9039-c682-402b-a8bb-8a25d8de904b"}];
          
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