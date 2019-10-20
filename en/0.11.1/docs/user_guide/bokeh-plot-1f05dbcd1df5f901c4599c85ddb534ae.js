
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
  };var element = document.getElementById("dc0a18a7-92f9-46ab-b3c6-c2e50097c9b5");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'dc0a18a7-92f9-46ab-b3c6-c2e50097c9b5' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"8f320f3b-1dc5-416c-b964-b888976109fa":{"roots":{"references":[{"attributes":{"formatter":{"id":"bc3d4f16-8de4-4359-bfdf-8ad047d3c6ba","type":"BasicTickFormatter"},"plot":{"id":"835c1f36-a2b6-409a-a299-8924e8fac44a","subtype":"Figure","type":"Plot"},"ticker":{"id":"16d52e57-f29e-40f2-9062-fa78d2e31d3d","type":"BasicTicker"}},"id":"9db99186-a7ca-4070-bcae-da42b1b15226","type":"LinearAxis"},{"attributes":{},"id":"16d52e57-f29e-40f2-9062-fa78d2e31d3d","type":"BasicTicker"},{"attributes":{"plot":{"id":"835c1f36-a2b6-409a-a299-8924e8fac44a","subtype":"Figure","type":"Plot"}},"id":"b4d2622a-5d25-483f-9e5f-60a34852d0d6","type":"ResizeTool"},{"attributes":{"dimension":1,"plot":{"id":"835c1f36-a2b6-409a-a299-8924e8fac44a","subtype":"Figure","type":"Plot"},"ticker":{"id":"16d52e57-f29e-40f2-9062-fa78d2e31d3d","type":"BasicTicker"}},"id":"5876723c-3fa6-45e9-bf01-b468278cd978","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d14065f8-0095-45fb-8daf-48ac21b50f74","type":"Circle"},{"attributes":{"below":[{"id":"73689fb0-1596-40c0-8c66-e66d46f2af2a","type":"LinearAxis"}],"left":[{"id":"9db99186-a7ca-4070-bcae-da42b1b15226","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"73689fb0-1596-40c0-8c66-e66d46f2af2a","type":"LinearAxis"},{"id":"e5cb0a48-6906-427e-a6d6-bfb1ff302407","type":"Grid"},{"id":"9db99186-a7ca-4070-bcae-da42b1b15226","type":"LinearAxis"},{"id":"5876723c-3fa6-45e9-bf01-b468278cd978","type":"Grid"},{"id":"94a983b2-131d-4881-ae08-d86d3f158463","type":"BoxAnnotation"},{"id":"e4ced1c6-4c4a-416e-8998-0d4ace7fbf33","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"f731acb5-2b0e-4881-80f6-5a0e8d606112","type":"ToolEvents"},"toolbar_location":"below","tools":[{"id":"f1445ae8-eaac-4bdd-b3b1-d8fe1ee46037","type":"PanTool"},{"id":"17eb941f-2743-42ec-9162-65fcebf22a73","type":"WheelZoomTool"},{"id":"b88bb3ad-790f-473f-8873-2e2686a7dea6","type":"BoxZoomTool"},{"id":"42b6f846-03f8-4170-8773-807d07d204d4","type":"PreviewSaveTool"},{"id":"b4d2622a-5d25-483f-9e5f-60a34852d0d6","type":"ResizeTool"},{"id":"5be160b4-9ffa-4f53-bb1b-a38849980a67","type":"ResetTool"},{"id":"217e180a-be58-44fd-ad15-51d66c0eb3ec","type":"HelpTool"}],"x_range":{"id":"68a2c9a6-b22d-4dad-bdc8-9519d758f2ad","type":"DataRange1d"},"y_range":{"id":"e85b292e-a3cb-4bdc-b43d-6b687344aa0b","type":"DataRange1d"}},"id":"835c1f36-a2b6-409a-a299-8924e8fac44a","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"835c1f36-a2b6-409a-a299-8924e8fac44a","subtype":"Figure","type":"Plot"}},"id":"42b6f846-03f8-4170-8773-807d07d204d4","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"835c1f36-a2b6-409a-a299-8924e8fac44a","subtype":"Figure","type":"Plot"},"ticker":{"id":"c1790387-1b88-4419-b719-e1c4f5d60abe","type":"BasicTicker"}},"id":"e5cb0a48-6906-427e-a6d6-bfb1ff302407","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"94a983b2-131d-4881-ae08-d86d3f158463","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"835c1f36-a2b6-409a-a299-8924e8fac44a","subtype":"Figure","type":"Plot"}},"id":"217e180a-be58-44fd-ad15-51d66c0eb3ec","type":"HelpTool"},{"attributes":{"plot":{"id":"835c1f36-a2b6-409a-a299-8924e8fac44a","subtype":"Figure","type":"Plot"}},"id":"5be160b4-9ffa-4f53-bb1b-a38849980a67","type":"ResetTool"},{"attributes":{"data_source":{"id":"5d6aa911-1285-4f2a-a7cc-a22a1e34387a","type":"ColumnDataSource"},"glyph":{"id":"b4fa1614-230a-4f01-8df6-27f11d7a7917","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"d14065f8-0095-45fb-8daf-48ac21b50f74","type":"Circle"},"selection_glyph":null},"id":"e4ced1c6-4c4a-416e-8998-0d4ace7fbf33","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"835c1f36-a2b6-409a-a299-8924e8fac44a","subtype":"Figure","type":"Plot"}},"id":"f1445ae8-eaac-4bdd-b3b1-d8fe1ee46037","type":"PanTool"},{"attributes":{"formatter":{"id":"439c1eb6-b601-46ed-ac1a-1c9972bc003e","type":"BasicTickFormatter"},"plot":{"id":"835c1f36-a2b6-409a-a299-8924e8fac44a","subtype":"Figure","type":"Plot"},"ticker":{"id":"c1790387-1b88-4419-b719-e1c4f5d60abe","type":"BasicTicker"}},"id":"73689fb0-1596-40c0-8c66-e66d46f2af2a","type":"LinearAxis"},{"attributes":{},"id":"f731acb5-2b0e-4881-80f6-5a0e8d606112","type":"ToolEvents"},{"attributes":{"callback":null},"id":"68a2c9a6-b22d-4dad-bdc8-9519d758f2ad","type":"DataRange1d"},{"attributes":{},"id":"bc3d4f16-8de4-4359-bfdf-8ad047d3c6ba","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"94a983b2-131d-4881-ae08-d86d3f158463","type":"BoxAnnotation"},"plot":{"id":"835c1f36-a2b6-409a-a299-8924e8fac44a","subtype":"Figure","type":"Plot"}},"id":"b88bb3ad-790f-473f-8873-2e2686a7dea6","type":"BoxZoomTool"},{"attributes":{},"id":"c1790387-1b88-4419-b719-e1c4f5d60abe","type":"BasicTicker"},{"attributes":{"plot":{"id":"835c1f36-a2b6-409a-a299-8924e8fac44a","subtype":"Figure","type":"Plot"}},"id":"17eb941f-2743-42ec-9162-65fcebf22a73","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"5d6aa911-1285-4f2a-a7cc-a22a1e34387a","type":"ColumnDataSource"},{"attributes":{},"id":"439c1eb6-b601-46ed-ac1a-1c9972bc003e","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b4fa1614-230a-4f01-8df6-27f11d7a7917","type":"Circle"},{"attributes":{"callback":null},"id":"e85b292e-a3cb-4bdc-b43d-6b687344aa0b","type":"DataRange1d"}],"root_ids":["835c1f36-a2b6-409a-a299-8924e8fac44a"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"8f320f3b-1dc5-416c-b964-b888976109fa","elementid":"dc0a18a7-92f9-46ab-b3c6-c2e50097c9b5","modelid":"835c1f36-a2b6-409a-a299-8924e8fac44a"}];
          
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