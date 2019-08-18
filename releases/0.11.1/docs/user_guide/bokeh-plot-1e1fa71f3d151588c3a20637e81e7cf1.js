
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
  };var element = document.getElementById("cbb21586-b5eb-44cb-83ef-e951a93b9a0a");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'cbb21586-b5eb-44cb-83ef-e951a93b9a0a' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"2fa35e6c-dc8c-4802-8aff-8d7fbf80d634":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8591416c-9b3e-49ec-97bf-b830a692eeba","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"05703151-ec44-4b74-8d5b-733204671a21","subtype":"Figure","type":"Plot"}},"id":"647d10d4-fb91-4f12-969a-4e82b2e7bb85","type":"ResizeTool"},{"attributes":{"below":[{"id":"bb13eb95-75be-4b5b-8abd-57c5b84445f2","type":"LinearAxis"}],"left":[{"id":"746fc9e3-baf9-4afb-84b8-6989e1f68896","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"bb13eb95-75be-4b5b-8abd-57c5b84445f2","type":"LinearAxis"},{"id":"acf1d8ed-bb78-4965-bfcb-e5815f4d9388","type":"Grid"},{"id":"746fc9e3-baf9-4afb-84b8-6989e1f68896","type":"LinearAxis"},{"id":"54417da6-7875-4282-87a7-d7b3d471fa8e","type":"Grid"},{"id":"8591416c-9b3e-49ec-97bf-b830a692eeba","type":"BoxAnnotation"},{"id":"868d7b12-4b8b-45f2-b85d-e028e0e5b434","type":"GlyphRenderer"}],"tool_events":{"id":"2a5d48a6-1b0e-4be2-ba40-c50d001ac9e5","type":"ToolEvents"},"tools":[{"id":"e7a3df1e-0620-4f8f-aa02-366fd711f01f","type":"PanTool"},{"id":"f7c3dbf9-ca3d-4f94-967e-1c88d59cd8f9","type":"WheelZoomTool"},{"id":"7ed46658-1d33-491a-8191-fc9363016299","type":"BoxZoomTool"},{"id":"30404d82-ab24-489e-ab58-aed5bf3dc9b9","type":"PreviewSaveTool"},{"id":"647d10d4-fb91-4f12-969a-4e82b2e7bb85","type":"ResizeTool"},{"id":"0fc24795-e6f0-4ac6-94bc-aef42fbc2b28","type":"ResetTool"},{"id":"d1c0728c-fbbb-4b24-910d-47be57b285f1","type":"HelpTool"}],"x_range":{"id":"76807379-f4aa-42ce-9418-a4b1b5d48a80","type":"DataRange1d"},"y_range":{"id":"5e1a8f21-c425-4434-949b-e5bdb39196d4","type":"DataRange1d"}},"id":"05703151-ec44-4b74-8d5b-733204671a21","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"16d7c143-a01c-461e-9898-21eb61f4013c","type":"BasicTicker"},{"attributes":{"callback":null},"id":"76807379-f4aa-42ce-9418-a4b1b5d48a80","type":"DataRange1d"},{"attributes":{"callback":null},"id":"5e1a8f21-c425-4434-949b-e5bdb39196d4","type":"DataRange1d"},{"attributes":{},"id":"d56b4746-7311-4011-b907-d95e66e7d6e2","type":"BasicTickFormatter"},{"attributes":{},"id":"60666391-5ff4-4d05-bc43-a317f23a6827","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"60666391-5ff4-4d05-bc43-a317f23a6827","type":"BasicTickFormatter"},"plot":{"id":"05703151-ec44-4b74-8d5b-733204671a21","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4a88a7a-4693-4e97-aa4b-201f02ddd441","type":"BasicTicker"}},"id":"746fc9e3-baf9-4afb-84b8-6989e1f68896","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d1ea66da-ca9c-4a95-aedc-d25f88ebd72a","type":"Circle"},{"attributes":{"plot":{"id":"05703151-ec44-4b74-8d5b-733204671a21","subtype":"Figure","type":"Plot"}},"id":"30404d82-ab24-489e-ab58-aed5bf3dc9b9","type":"PreviewSaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2d62a219-1e87-46ec-9187-e061e506a097","type":"Circle"},{"attributes":{"band_fill_alpha":{"value":0.1},"band_fill_color":{"value":"navy"},"dimension":1,"plot":{"id":"05703151-ec44-4b74-8d5b-733204671a21","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4a88a7a-4693-4e97-aa4b-201f02ddd441","type":"BasicTicker"}},"id":"54417da6-7875-4282-87a7-d7b3d471fa8e","type":"Grid"},{"attributes":{"plot":{"id":"05703151-ec44-4b74-8d5b-733204671a21","subtype":"Figure","type":"Plot"}},"id":"0fc24795-e6f0-4ac6-94bc-aef42fbc2b28","type":"ResetTool"},{"attributes":{"plot":{"id":"05703151-ec44-4b74-8d5b-733204671a21","subtype":"Figure","type":"Plot"}},"id":"d1c0728c-fbbb-4b24-910d-47be57b285f1","type":"HelpTool"},{"attributes":{"plot":{"id":"05703151-ec44-4b74-8d5b-733204671a21","subtype":"Figure","type":"Plot"}},"id":"e7a3df1e-0620-4f8f-aa02-366fd711f01f","type":"PanTool"},{"attributes":{"formatter":{"id":"d56b4746-7311-4011-b907-d95e66e7d6e2","type":"BasicTickFormatter"},"plot":{"id":"05703151-ec44-4b74-8d5b-733204671a21","subtype":"Figure","type":"Plot"},"ticker":{"id":"16d7c143-a01c-461e-9898-21eb61f4013c","type":"BasicTicker"}},"id":"bb13eb95-75be-4b5b-8abd-57c5b84445f2","type":"LinearAxis"},{"attributes":{},"id":"a4a88a7a-4693-4e97-aa4b-201f02ddd441","type":"BasicTicker"},{"attributes":{},"id":"2a5d48a6-1b0e-4be2-ba40-c50d001ac9e5","type":"ToolEvents"},{"attributes":{"overlay":{"id":"8591416c-9b3e-49ec-97bf-b830a692eeba","type":"BoxAnnotation"},"plot":{"id":"05703151-ec44-4b74-8d5b-733204671a21","subtype":"Figure","type":"Plot"}},"id":"7ed46658-1d33-491a-8191-fc9363016299","type":"BoxZoomTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"05703151-ec44-4b74-8d5b-733204671a21","subtype":"Figure","type":"Plot"},"ticker":{"id":"16d7c143-a01c-461e-9898-21eb61f4013c","type":"BasicTicker"}},"id":"acf1d8ed-bb78-4965-bfcb-e5815f4d9388","type":"Grid"},{"attributes":{"plot":{"id":"05703151-ec44-4b74-8d5b-733204671a21","subtype":"Figure","type":"Plot"}},"id":"f7c3dbf9-ca3d-4f94-967e-1c88d59cd8f9","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"fd5b100a-eafa-41ca-b704-97dd0822deac","type":"ColumnDataSource"},"glyph":{"id":"2d62a219-1e87-46ec-9187-e061e506a097","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"d1ea66da-ca9c-4a95-aedc-d25f88ebd72a","type":"Circle"},"selection_glyph":null},"id":"868d7b12-4b8b-45f2-b85d-e028e0e5b434","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"fd5b100a-eafa-41ca-b704-97dd0822deac","type":"ColumnDataSource"}],"root_ids":["05703151-ec44-4b74-8d5b-733204671a21"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"2fa35e6c-dc8c-4802-8aff-8d7fbf80d634","elementid":"cbb21586-b5eb-44cb-83ef-e951a93b9a0a","modelid":"05703151-ec44-4b74-8d5b-733204671a21"}];
          
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