
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
  };var element = document.getElementById("10897d96-61e6-46c5-b39c-446e42f4cf94");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '10897d96-61e6-46c5-b39c-446e42f4cf94' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"27596e37-90cc-4061-a0d2-86d53ed77142":{"roots":{"references":[{"attributes":{"plot":{"id":"ede3293b-ad2a-4563-84c3-9b64c7de06c3","subtype":"Figure","type":"Plot"}},"id":"a8eb6df8-348e-4dcc-b591-741805f3eaa4","type":"PreviewSaveTool"},{"attributes":{"below":[{"id":"3f061565-a386-4f32-b03f-1b619c8e77a1","type":"LinearAxis"}],"left":[{"id":"d7d4f5a1-b467-405b-bbcb-35fe4e0e7fd9","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3f061565-a386-4f32-b03f-1b619c8e77a1","type":"LinearAxis"},{"id":"14904f9c-4b3e-469b-b705-7294ba414e0a","type":"Grid"},{"id":"d7d4f5a1-b467-405b-bbcb-35fe4e0e7fd9","type":"LinearAxis"},{"id":"40c69623-b9fe-4aad-b13b-bbad0169436a","type":"Grid"},{"id":"8009aeed-3b91-4f5c-bf5e-9d44b9b07713","type":"BoxAnnotation"},{"id":"3d262b7b-8dd4-4b02-85a9-127eb8f0adb3","type":"GlyphRenderer"}],"tool_events":{"id":"642fb329-04da-414b-a151-adff2945c092","type":"ToolEvents"},"tools":[{"id":"7224d07e-0a92-403d-b67c-b9bc31e7a0f5","type":"PanTool"},{"id":"872dfc19-f4ad-4ed8-8fd2-3d1f2a7abe37","type":"WheelZoomTool"},{"id":"38bab94c-de07-4ab5-8c49-a99b2cc62b8c","type":"BoxZoomTool"},{"id":"a8eb6df8-348e-4dcc-b591-741805f3eaa4","type":"PreviewSaveTool"},{"id":"4a4f3154-a76a-4f71-85ee-62fefff739c8","type":"ResizeTool"},{"id":"1a867531-63b8-4051-b092-18f575041913","type":"ResetTool"},{"id":"be49c82d-dd4a-4efa-ae1f-1bef8c7d6e6f","type":"HelpTool"}],"x_range":{"id":"5e8424aa-e76b-4454-956a-3c7196d38c8f","type":"DataRange1d"},"y_range":{"id":"52358101-2141-488f-80bf-1c59f0226662","type":"DataRange1d"}},"id":"ede3293b-ad2a-4563-84c3-9b64c7de06c3","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6f1ab35d-9736-43a0-bc4e-e3f6a2c55705","type":"BasicTicker"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"c1719a68-5d2f-4a6e-9628-1a7f95819e8e","type":"Ray"},{"attributes":{"callback":null},"id":"5e8424aa-e76b-4454-956a-3c7196d38c8f","type":"DataRange1d"},{"attributes":{},"id":"ddcd00e1-58d7-47ad-acae-45b06a595f5f","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"ede3293b-ad2a-4563-84c3-9b64c7de06c3","subtype":"Figure","type":"Plot"}},"id":"872dfc19-f4ad-4ed8-8fd2-3d1f2a7abe37","type":"WheelZoomTool"},{"attributes":{},"id":"642fb329-04da-414b-a151-adff2945c092","type":"ToolEvents"},{"attributes":{"formatter":{"id":"3650cd53-b8ee-4416-93f8-a79c538e6aa6","type":"BasicTickFormatter"},"plot":{"id":"ede3293b-ad2a-4563-84c3-9b64c7de06c3","subtype":"Figure","type":"Plot"},"ticker":{"id":"ceff5be1-5d34-4520-b301-64df25dbe30b","type":"BasicTicker"}},"id":"3f061565-a386-4f32-b03f-1b619c8e77a1","type":"LinearAxis"},{"attributes":{"plot":{"id":"ede3293b-ad2a-4563-84c3-9b64c7de06c3","subtype":"Figure","type":"Plot"}},"id":"7224d07e-0a92-403d-b67c-b9bc31e7a0f5","type":"PanTool"},{"attributes":{},"id":"3650cd53-b8ee-4416-93f8-a79c538e6aa6","type":"BasicTickFormatter"},{"attributes":{},"id":"ceff5be1-5d34-4520-b301-64df25dbe30b","type":"BasicTicker"},{"attributes":{"overlay":{"id":"8009aeed-3b91-4f5c-bf5e-9d44b9b07713","type":"BoxAnnotation"},"plot":{"id":"ede3293b-ad2a-4563-84c3-9b64c7de06c3","subtype":"Figure","type":"Plot"}},"id":"38bab94c-de07-4ab5-8c49-a99b2cc62b8c","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"147faac1-7e57-4c12-aa41-24480bd6ef28","type":"ColumnDataSource"},"glyph":{"id":"f51ed9c8-b54e-4cb7-ade1-3ebfc96bfabc","type":"Ray"},"hover_glyph":null,"nonselection_glyph":{"id":"c1719a68-5d2f-4a6e-9628-1a7f95819e8e","type":"Ray"},"selection_glyph":null},"id":"3d262b7b-8dd4-4b02-85a9-127eb8f0adb3","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["angle","y","x"],"data":{"angle":[30,45,60],"x":[1,2,3],"y":[1,2,3]}},"id":"147faac1-7e57-4c12-aa41-24480bd6ef28","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"ede3293b-ad2a-4563-84c3-9b64c7de06c3","subtype":"Figure","type":"Plot"}},"id":"be49c82d-dd4a-4efa-ae1f-1bef8c7d6e6f","type":"HelpTool"},{"attributes":{"callback":null},"id":"52358101-2141-488f-80bf-1c59f0226662","type":"DataRange1d"},{"attributes":{"plot":{"id":"ede3293b-ad2a-4563-84c3-9b64c7de06c3","subtype":"Figure","type":"Plot"}},"id":"4a4f3154-a76a-4f71-85ee-62fefff739c8","type":"ResizeTool"},{"attributes":{"plot":{"id":"ede3293b-ad2a-4563-84c3-9b64c7de06c3","subtype":"Figure","type":"Plot"},"ticker":{"id":"ceff5be1-5d34-4520-b301-64df25dbe30b","type":"BasicTicker"}},"id":"14904f9c-4b3e-469b-b705-7294ba414e0a","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"ede3293b-ad2a-4563-84c3-9b64c7de06c3","subtype":"Figure","type":"Plot"},"ticker":{"id":"6f1ab35d-9736-43a0-bc4e-e3f6a2c55705","type":"BasicTicker"}},"id":"40c69623-b9fe-4aad-b13b-bbad0169436a","type":"Grid"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f51ed9c8-b54e-4cb7-ade1-3ebfc96bfabc","type":"Ray"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8009aeed-3b91-4f5c-bf5e-9d44b9b07713","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"ede3293b-ad2a-4563-84c3-9b64c7de06c3","subtype":"Figure","type":"Plot"}},"id":"1a867531-63b8-4051-b092-18f575041913","type":"ResetTool"},{"attributes":{"formatter":{"id":"ddcd00e1-58d7-47ad-acae-45b06a595f5f","type":"BasicTickFormatter"},"plot":{"id":"ede3293b-ad2a-4563-84c3-9b64c7de06c3","subtype":"Figure","type":"Plot"},"ticker":{"id":"6f1ab35d-9736-43a0-bc4e-e3f6a2c55705","type":"BasicTicker"}},"id":"d7d4f5a1-b467-405b-bbcb-35fe4e0e7fd9","type":"LinearAxis"}],"root_ids":["ede3293b-ad2a-4563-84c3-9b64c7de06c3"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"27596e37-90cc-4061-a0d2-86d53ed77142","elementid":"10897d96-61e6-46c5-b39c-446e42f4cf94","modelid":"ede3293b-ad2a-4563-84c3-9b64c7de06c3"}];
          
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