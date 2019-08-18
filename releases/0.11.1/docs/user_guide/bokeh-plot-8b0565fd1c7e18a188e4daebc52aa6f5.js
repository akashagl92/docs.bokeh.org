
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
  };var element = document.getElementById("2b5acfd2-64d9-4842-9689-2742e598b467");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '2b5acfd2-64d9-4842-9689-2742e598b467' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"e3c761c5-2c52-4843-b5f3-4299fd6b7ee7":{"roots":{"references":[{"attributes":{"plot":{"id":"b61955b3-a880-4019-9d1c-cfe77f39522c","subtype":"Figure","type":"Plot"}},"id":"1e2f1629-4aa3-45e3-8558-e1864e1b2d2d","type":"ResizeTool"},{"attributes":{"plot":{"id":"b61955b3-a880-4019-9d1c-cfe77f39522c","subtype":"Figure","type":"Plot"}},"id":"2ecb3ebf-4b93-4473-8127-ea7afb82c9ff","type":"WheelZoomTool"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"c4ca8fee-9971-41b3-86c1-a9a9f5b7a0e7","type":"Rect"},{"attributes":{"callback":null},"id":"39e18168-c84b-4cd0-a0e3-b0474839a0dc","type":"DataRange1d"},{"attributes":{"plot":{"id":"b61955b3-a880-4019-9d1c-cfe77f39522c","subtype":"Figure","type":"Plot"}},"id":"e34dbcaf-a2fb-4ac4-adb4-8f41abd92b18","type":"PreviewSaveTool"},{"attributes":{},"id":"7f4374b9-0d52-46ed-b508-9285196fdc8d","type":"BasicTicker"},{"attributes":{"data_source":{"id":"da9bc4c6-cb38-4e34-a98c-e25c7936b00b","type":"ColumnDataSource"},"glyph":{"id":"c4ca8fee-9971-41b3-86c1-a9a9f5b7a0e7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"79d0764e-8d16-4070-83a0-1178879df627","type":"Rect"},"selection_glyph":null},"id":"4537bb06-9fc0-4dfb-b748-1bcc9802c604","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"f04b9f13-e835-40a3-91b1-382a76198207","type":"LinearAxis"}],"left":[{"id":"7781ecee-28f0-411f-bf74-505acc88ad02","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"f04b9f13-e835-40a3-91b1-382a76198207","type":"LinearAxis"},{"id":"2e01d99d-a641-4dd3-9450-08528dfa106b","type":"Grid"},{"id":"7781ecee-28f0-411f-bf74-505acc88ad02","type":"LinearAxis"},{"id":"7d8d89e9-321f-4a09-95ee-d004ed3346ff","type":"Grid"},{"id":"9c20542a-baf5-47aa-a4c2-624fa33af060","type":"BoxAnnotation"},{"id":"4537bb06-9fc0-4dfb-b748-1bcc9802c604","type":"GlyphRenderer"}],"tool_events":{"id":"e388ab46-a6cf-4a6a-b720-c34df7c32e8f","type":"ToolEvents"},"tools":[{"id":"8294ccf0-7d3a-4dae-a2c0-d954ceca9877","type":"PanTool"},{"id":"2ecb3ebf-4b93-4473-8127-ea7afb82c9ff","type":"WheelZoomTool"},{"id":"dddec78d-e0ef-4b2c-b440-fff4678914c0","type":"BoxZoomTool"},{"id":"e34dbcaf-a2fb-4ac4-adb4-8f41abd92b18","type":"PreviewSaveTool"},{"id":"1e2f1629-4aa3-45e3-8558-e1864e1b2d2d","type":"ResizeTool"},{"id":"c11955ee-94a2-4df0-97dd-d0479b514c13","type":"ResetTool"},{"id":"28deb698-5d7f-4123-b761-5b173ea42926","type":"HelpTool"}],"x_range":{"id":"479ddd0b-00f2-4269-971a-296484a31a43","type":"DataRange1d"},"y_range":{"id":"39e18168-c84b-4cd0-a0e3-b0474839a0dc","type":"DataRange1d"}},"id":"b61955b3-a880-4019-9d1c-cfe77f39522c","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a4cd4426-38ae-41e6-ab52-84570cddbe60","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"479ddd0b-00f2-4269-971a-296484a31a43","type":"DataRange1d"},{"attributes":{"formatter":{"id":"717773a7-6192-4f12-bec2-d0c4f9dfc42f","type":"BasicTickFormatter"},"plot":{"id":"b61955b3-a880-4019-9d1c-cfe77f39522c","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ad16436-0f01-4dcb-9025-f214ae764a05","type":"BasicTicker"}},"id":"7781ecee-28f0-411f-bf74-505acc88ad02","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"b61955b3-a880-4019-9d1c-cfe77f39522c","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ad16436-0f01-4dcb-9025-f214ae764a05","type":"BasicTicker"}},"id":"7d8d89e9-321f-4a09-95ee-d004ed3346ff","type":"Grid"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"79d0764e-8d16-4070-83a0-1178879df627","type":"Rect"},{"attributes":{"plot":{"id":"b61955b3-a880-4019-9d1c-cfe77f39522c","subtype":"Figure","type":"Plot"}},"id":"8294ccf0-7d3a-4dae-a2c0-d954ceca9877","type":"PanTool"},{"attributes":{"plot":{"id":"b61955b3-a880-4019-9d1c-cfe77f39522c","subtype":"Figure","type":"Plot"}},"id":"c11955ee-94a2-4df0-97dd-d0479b514c13","type":"ResetTool"},{"attributes":{},"id":"717773a7-6192-4f12-bec2-d0c4f9dfc42f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"a4cd4426-38ae-41e6-ab52-84570cddbe60","type":"BasicTickFormatter"},"plot":{"id":"b61955b3-a880-4019-9d1c-cfe77f39522c","subtype":"Figure","type":"Plot"},"ticker":{"id":"7f4374b9-0d52-46ed-b508-9285196fdc8d","type":"BasicTicker"}},"id":"f04b9f13-e835-40a3-91b1-382a76198207","type":"LinearAxis"},{"attributes":{"plot":{"id":"b61955b3-a880-4019-9d1c-cfe77f39522c","subtype":"Figure","type":"Plot"},"ticker":{"id":"7f4374b9-0d52-46ed-b508-9285196fdc8d","type":"BasicTicker"}},"id":"2e01d99d-a641-4dd3-9450-08528dfa106b","type":"Grid"},{"attributes":{"overlay":{"id":"9c20542a-baf5-47aa-a4c2-624fa33af060","type":"BoxAnnotation"},"plot":{"id":"b61955b3-a880-4019-9d1c-cfe77f39522c","subtype":"Figure","type":"Plot"}},"id":"dddec78d-e0ef-4b2c-b440-fff4678914c0","type":"BoxZoomTool"},{"attributes":{},"id":"9ad16436-0f01-4dcb-9025-f214ae764a05","type":"BasicTicker"},{"attributes":{"plot":{"id":"b61955b3-a880-4019-9d1c-cfe77f39522c","subtype":"Figure","type":"Plot"}},"id":"28deb698-5d7f-4123-b761-5b173ea42926","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"da9bc4c6-cb38-4e34-a98c-e25c7936b00b","type":"ColumnDataSource"},{"attributes":{},"id":"e388ab46-a6cf-4a6a-b720-c34df7c32e8f","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9c20542a-baf5-47aa-a4c2-624fa33af060","type":"BoxAnnotation"}],"root_ids":["b61955b3-a880-4019-9d1c-cfe77f39522c"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"e3c761c5-2c52-4843-b5f3-4299fd6b7ee7","elementid":"2b5acfd2-64d9-4842-9689-2742e598b467","modelid":"b61955b3-a880-4019-9d1c-cfe77f39522c"}];
          
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