
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
  };var element = document.getElementById("5f3d1395-6a5e-4183-b422-1e6f92680a01");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '5f3d1395-6a5e-4183-b422-1e6f92680a01' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"bf185106-103b-4038-b06a-44430c7923a2":{"roots":{"references":[{"attributes":{"callback":null},"id":"d6def67a-10d6-4353-800f-f880751d4b51","type":"DataRange1d"},{"attributes":{},"id":"dd950374-1f95-4e8c-89ef-e1ce66ff7bd3","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b5af9b9d-4686-4a32-a6f9-ee98dc2f0aa5","type":"Square"},{"attributes":{},"id":"9013520c-e690-44c7-879f-04fa59fc3bb7","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]}},"id":"35559af3-2a1f-485c-b3c6-6afaee489c84","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"dcd90e24-c720-4b34-bf4b-e87c98a71754","subtype":"Figure","type":"Plot"}},"id":"16455e2f-fd86-4513-a57b-4e2ff1ac4fce","type":"HelpTool"},{"attributes":{},"id":"63d0ee16-1d2c-4898-a33e-27c1cd92ca48","type":"ToolEvents"},{"attributes":{"formatter":{"id":"7676acf7-d49c-43ea-bde0-811bbaa1938a","type":"BasicTickFormatter"},"plot":{"id":"dcd90e24-c720-4b34-bf4b-e87c98a71754","subtype":"Figure","type":"Plot"},"ticker":{"id":"dd950374-1f95-4e8c-89ef-e1ce66ff7bd3","type":"BasicTicker"}},"id":"80523c03-f6f5-4429-b0da-ba714888913e","type":"LinearAxis"},{"attributes":{"below":[{"id":"80523c03-f6f5-4429-b0da-ba714888913e","type":"LinearAxis"}],"left":[{"id":"95608c25-30c7-401d-8c6d-86b52bbd1c71","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"80523c03-f6f5-4429-b0da-ba714888913e","type":"LinearAxis"},{"id":"15cf8fba-f340-48f6-a304-21d1d81b0131","type":"Grid"},{"id":"95608c25-30c7-401d-8c6d-86b52bbd1c71","type":"LinearAxis"},{"id":"dab21a00-570e-4d8a-acec-0a30fa109a5d","type":"Grid"},{"id":"d71ad747-1e0a-44ac-97fd-29983f35fcc6","type":"BoxAnnotation"},{"id":"876cb4f2-bdc4-4fac-8011-0eef921fc79d","type":"GlyphRenderer"}],"tool_events":{"id":"63d0ee16-1d2c-4898-a33e-27c1cd92ca48","type":"ToolEvents"},"tools":[{"id":"3dbd5f86-a779-4854-af5c-dfbf7825b9e8","type":"PanTool"},{"id":"cda7a463-2a73-4c09-bd8c-ca3aeb043206","type":"WheelZoomTool"},{"id":"bc203239-0dd6-434e-a704-164cb3c02bd8","type":"BoxZoomTool"},{"id":"c0352906-b23d-41b4-9e21-6ae7a9c3cb88","type":"PreviewSaveTool"},{"id":"87bfe571-c235-4091-9529-ef2c7b943c7c","type":"ResizeTool"},{"id":"bc336f98-1ed7-4a7c-b94c-9f8d9437a1d7","type":"ResetTool"},{"id":"16455e2f-fd86-4513-a57b-4e2ff1ac4fce","type":"HelpTool"}],"x_range":{"id":"d6def67a-10d6-4353-800f-f880751d4b51","type":"DataRange1d"},"y_range":{"id":"eb852a7f-f9c8-4c23-b983-122ec7050fe8","type":"DataRange1d"}},"id":"dcd90e24-c720-4b34-bf4b-e87c98a71754","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"dcd90e24-c720-4b34-bf4b-e87c98a71754","subtype":"Figure","type":"Plot"},"ticker":{"id":"9013520c-e690-44c7-879f-04fa59fc3bb7","type":"BasicTicker"}},"id":"dab21a00-570e-4d8a-acec-0a30fa109a5d","type":"Grid"},{"attributes":{"plot":{"id":"dcd90e24-c720-4b34-bf4b-e87c98a71754","subtype":"Figure","type":"Plot"}},"id":"cda7a463-2a73-4c09-bd8c-ca3aeb043206","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"d71ad747-1e0a-44ac-97fd-29983f35fcc6","type":"BoxAnnotation"},"plot":{"id":"dcd90e24-c720-4b34-bf4b-e87c98a71754","subtype":"Figure","type":"Plot"}},"id":"bc203239-0dd6-434e-a704-164cb3c02bd8","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"35559af3-2a1f-485c-b3c6-6afaee489c84","type":"ColumnDataSource"},"glyph":{"id":"55a43bad-5fcb-40f8-9319-14c676b19555","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"b5af9b9d-4686-4a32-a6f9-ee98dc2f0aa5","type":"Square"},"selection_glyph":null},"id":"876cb4f2-bdc4-4fac-8011-0eef921fc79d","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"dcd90e24-c720-4b34-bf4b-e87c98a71754","subtype":"Figure","type":"Plot"}},"id":"3dbd5f86-a779-4854-af5c-dfbf7825b9e8","type":"PanTool"},{"attributes":{"plot":{"id":"dcd90e24-c720-4b34-bf4b-e87c98a71754","subtype":"Figure","type":"Plot"},"ticker":{"id":"dd950374-1f95-4e8c-89ef-e1ce66ff7bd3","type":"BasicTicker"}},"id":"15cf8fba-f340-48f6-a304-21d1d81b0131","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d71ad747-1e0a-44ac-97fd-29983f35fcc6","type":"BoxAnnotation"},{"attributes":{},"id":"98c4d349-007e-4453-8089-9bc089fff98b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"dcd90e24-c720-4b34-bf4b-e87c98a71754","subtype":"Figure","type":"Plot"}},"id":"bc336f98-1ed7-4a7c-b94c-9f8d9437a1d7","type":"ResetTool"},{"attributes":{},"id":"7676acf7-d49c-43ea-bde0-811bbaa1938a","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"55a43bad-5fcb-40f8-9319-14c676b19555","type":"Square"},{"attributes":{"callback":null},"id":"eb852a7f-f9c8-4c23-b983-122ec7050fe8","type":"DataRange1d"},{"attributes":{"plot":{"id":"dcd90e24-c720-4b34-bf4b-e87c98a71754","subtype":"Figure","type":"Plot"}},"id":"c0352906-b23d-41b4-9e21-6ae7a9c3cb88","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"dcd90e24-c720-4b34-bf4b-e87c98a71754","subtype":"Figure","type":"Plot"}},"id":"87bfe571-c235-4091-9529-ef2c7b943c7c","type":"ResizeTool"},{"attributes":{"formatter":{"id":"98c4d349-007e-4453-8089-9bc089fff98b","type":"BasicTickFormatter"},"plot":{"id":"dcd90e24-c720-4b34-bf4b-e87c98a71754","subtype":"Figure","type":"Plot"},"ticker":{"id":"9013520c-e690-44c7-879f-04fa59fc3bb7","type":"BasicTicker"}},"id":"95608c25-30c7-401d-8c6d-86b52bbd1c71","type":"LinearAxis"}],"root_ids":["dcd90e24-c720-4b34-bf4b-e87c98a71754"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"bf185106-103b-4038-b06a-44430c7923a2","elementid":"5f3d1395-6a5e-4183-b422-1e6f92680a01","modelid":"dcd90e24-c720-4b34-bf4b-e87c98a71754"}];
          
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