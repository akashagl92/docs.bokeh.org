
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
  };var element = document.getElementById("a01986d5-73a0-477d-8b22-567bf37848da");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'a01986d5-73a0-477d-8b22-567bf37848da' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"833e5025-188b-45a8-b065-f892895ec53d":{"roots":{"references":[{"attributes":{"plot":{"id":"67ce5cc3-4e69-4b7d-a296-9a1dc8fed63c","subtype":"Figure","type":"Plot"}},"id":"28529214-0cc1-4ebe-b754-d1a25f044c70","type":"ResizeTool"},{"attributes":{"formatter":{"id":"bc35810f-f8b7-4542-aa3f-b5eea642512f","type":"BasicTickFormatter"},"plot":{"id":"67ce5cc3-4e69-4b7d-a296-9a1dc8fed63c","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e4001ac-816d-4e5d-874b-549a631a7efd","type":"BasicTicker"}},"id":"58a690c0-c32c-461e-956e-383ee6171368","type":"LinearAxis"},{"attributes":{"below":[{"id":"58a690c0-c32c-461e-956e-383ee6171368","type":"LinearAxis"}],"left":[{"id":"bdd4d606-0f9b-4a46-b289-f9c6f1569b33","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"58a690c0-c32c-461e-956e-383ee6171368","type":"LinearAxis"},{"id":"a69bfdd2-256f-46a8-b594-cda9e2c1a589","type":"Grid"},{"id":"bdd4d606-0f9b-4a46-b289-f9c6f1569b33","type":"LinearAxis"},{"id":"eb2a5b3c-d8d7-4be5-8af1-010d070bec76","type":"Grid"},{"id":"6270b3dd-6e7c-4c05-a0b2-ad547b0072a9","type":"BoxAnnotation"},{"id":"28a65591-416c-4f49-abc4-bbc2aa715e03","type":"GlyphRenderer"}],"tool_events":{"id":"355bb3c9-5c2b-462b-b32c-f96b568806e4","type":"ToolEvents"},"tools":[{"id":"0b8e577a-c4f1-41ee-81bb-1d0f0050a156","type":"PanTool"},{"id":"9d721f50-eaed-4536-8b01-590fd166c009","type":"WheelZoomTool"},{"id":"58d90abc-52d8-465c-a6ad-35438c9a68df","type":"BoxZoomTool"},{"id":"9be2e98a-c3e9-4be8-b956-f201b32af84f","type":"PreviewSaveTool"},{"id":"28529214-0cc1-4ebe-b754-d1a25f044c70","type":"ResizeTool"},{"id":"797fb4a6-d5b6-48c2-8c94-9a2ea69eac57","type":"ResetTool"},{"id":"57b29f92-c3d4-4a12-ac6c-93bb74565379","type":"HelpTool"}],"x_range":{"id":"a0d42d0a-f577-43a6-8338-2b9b506e5569","type":"DataRange1d"},"y_range":{"id":"a6dd8c02-ecdd-4571-a356-c70fee820708","type":"DataRange1d"}},"id":"67ce5cc3-4e69-4b7d-a296-9a1dc8fed63c","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"67ce5cc3-4e69-4b7d-a296-9a1dc8fed63c","subtype":"Figure","type":"Plot"}},"id":"57b29f92-c3d4-4a12-ac6c-93bb74565379","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"67ce5cc3-4e69-4b7d-a296-9a1dc8fed63c","subtype":"Figure","type":"Plot"},"ticker":{"id":"c6a74bbd-896b-4286-9e04-2e356e99eb28","type":"BasicTicker"}},"id":"eb2a5b3c-d8d7-4be5-8af1-010d070bec76","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8025dba6-959b-41ae-a8d7-137cc67afcd3","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6270b3dd-6e7c-4c05-a0b2-ad547b0072a9","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"firebrick"},"line_dash":[6,3],"line_width":{"value":2},"size":{"units":"screen","value":60},"x":{"field":"x"},"y":{"field":"y"}},"id":"416c0ae5-a694-4fa8-be2f-8382329d7840","type":"Circle"},{"attributes":{"formatter":{"id":"9af442b1-de4e-48bf-a7a8-0b199ea90ff0","type":"BasicTickFormatter"},"plot":{"id":"67ce5cc3-4e69-4b7d-a296-9a1dc8fed63c","subtype":"Figure","type":"Plot"},"ticker":{"id":"c6a74bbd-896b-4286-9e04-2e356e99eb28","type":"BasicTicker"}},"id":"bdd4d606-0f9b-4a46-b289-f9c6f1569b33","type":"LinearAxis"},{"attributes":{},"id":"bc35810f-f8b7-4542-aa3f-b5eea642512f","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"6270b3dd-6e7c-4c05-a0b2-ad547b0072a9","type":"BoxAnnotation"},"plot":{"id":"67ce5cc3-4e69-4b7d-a296-9a1dc8fed63c","subtype":"Figure","type":"Plot"}},"id":"58d90abc-52d8-465c-a6ad-35438c9a68df","type":"BoxZoomTool"},{"attributes":{},"id":"4e4001ac-816d-4e5d-874b-549a631a7efd","type":"BasicTicker"},{"attributes":{"plot":{"id":"67ce5cc3-4e69-4b7d-a296-9a1dc8fed63c","subtype":"Figure","type":"Plot"}},"id":"9be2e98a-c3e9-4be8-b956-f201b32af84f","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"67ce5cc3-4e69-4b7d-a296-9a1dc8fed63c","subtype":"Figure","type":"Plot"}},"id":"797fb4a6-d5b6-48c2-8c94-9a2ea69eac57","type":"ResetTool"},{"attributes":{"plot":{"id":"67ce5cc3-4e69-4b7d-a296-9a1dc8fed63c","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e4001ac-816d-4e5d-874b-549a631a7efd","type":"BasicTicker"}},"id":"a69bfdd2-256f-46a8-b594-cda9e2c1a589","type":"Grid"},{"attributes":{"callback":null},"id":"a6dd8c02-ecdd-4571-a356-c70fee820708","type":"DataRange1d"},{"attributes":{},"id":"355bb3c9-5c2b-462b-b32c-f96b568806e4","type":"ToolEvents"},{"attributes":{"data_source":{"id":"75ffec5c-c1d1-4187-a4d7-53239c509ee9","type":"ColumnDataSource"},"glyph":{"id":"416c0ae5-a694-4fa8-be2f-8382329d7840","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"8025dba6-959b-41ae-a8d7-137cc67afcd3","type":"Circle"},"selection_glyph":null},"id":"28a65591-416c-4f49-abc4-bbc2aa715e03","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"67ce5cc3-4e69-4b7d-a296-9a1dc8fed63c","subtype":"Figure","type":"Plot"}},"id":"9d721f50-eaed-4536-8b01-590fd166c009","type":"WheelZoomTool"},{"attributes":{},"id":"9af442b1-de4e-48bf-a7a8-0b199ea90ff0","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"75ffec5c-c1d1-4187-a4d7-53239c509ee9","type":"ColumnDataSource"},{"attributes":{},"id":"c6a74bbd-896b-4286-9e04-2e356e99eb28","type":"BasicTicker"},{"attributes":{"callback":null},"id":"a0d42d0a-f577-43a6-8338-2b9b506e5569","type":"DataRange1d"},{"attributes":{"plot":{"id":"67ce5cc3-4e69-4b7d-a296-9a1dc8fed63c","subtype":"Figure","type":"Plot"}},"id":"0b8e577a-c4f1-41ee-81bb-1d0f0050a156","type":"PanTool"}],"root_ids":["67ce5cc3-4e69-4b7d-a296-9a1dc8fed63c"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"833e5025-188b-45a8-b065-f892895ec53d","elementid":"a01986d5-73a0-477d-8b22-567bf37848da","modelid":"67ce5cc3-4e69-4b7d-a296-9a1dc8fed63c"}];
          
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