
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
  };var element = document.getElementById("7134591a-18db-42a2-a43c-c19b3cda5a43");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '7134591a-18db-42a2-a43c-c19b3cda5a43' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"2dac19f2-2a2c-46fb-b0d5-f399ba7468ae":{"roots":{"references":[{"attributes":{"axis_label":"index","formatter":{"id":"184eee6b-8489-467c-81a7-0a2c076cea1c","type":"BasicTickFormatter"},"plot":{"id":"c9216a19-eb26-4f87-b6e8-4acedba7ee26","subtype":"Chart","type":"Plot"},"ticker":{"id":"1dc130c0-fc79-41ad-a634-2ee602bb1f01","type":"BasicTicker"}},"id":"ed591ff2-dd1d-4445-867a-74c4270eff8e","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":[0.2,0.2,0.2,0.2,0.21,0.21,0.23,0.23,0.23,0.23,0.23,0.23,0.23,0.23,0.24,0.24,0.26,0.26,0.27,0.27,0.28,0.28,0.28,0.28,0.29,0.29,0.32,0.32,0.33,0.33,0.34,0.34,0.35]}},"id":"73573c13-dae3-4878-a8be-6bf459cfe2a1","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"c9216a19-eb26-4f87-b6e8-4acedba7ee26","subtype":"Chart","type":"Plot"},"ticker":{"id":"1dc130c0-fc79-41ad-a634-2ee602bb1f01","type":"BasicTicker"}},"id":"41207148-3f6e-4db2-9a8d-f85078a1c801","type":"Grid"},{"attributes":{"plot":{"id":"c9216a19-eb26-4f87-b6e8-4acedba7ee26","subtype":"Chart","type":"Plot"}},"id":"9f34e88f-8bd2-4573-98bd-7ce6644fe520","type":"PanTool"},{"attributes":{},"id":"7fe3241e-0c0c-4309-bea9-5e07516df66b","type":"BasicTicker"},{"attributes":{},"id":"1dc130c0-fc79-41ad-a634-2ee602bb1f01","type":"BasicTicker"},{"attributes":{},"id":"3c74b608-0167-4d0d-8046-c8b4bf53e0fa","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"c9216a19-eb26-4f87-b6e8-4acedba7ee26","subtype":"Chart","type":"Plot"}},"id":"e6b3855f-a352-4043-8d71-246bce639d0b","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"73573c13-dae3-4878-a8be-6bf459cfe2a1","type":"ColumnDataSource"},"glyph":{"id":"569a595b-2894-4d7b-afcf-1b5a6eb71990","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5f2e292f-dd15-4bd0-944f-f5958a4786f1","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"150f5e42-face-4d54-b51c-2168d2f9650f","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"c9216a19-eb26-4f87-b6e8-4acedba7ee26","subtype":"Chart","type":"Plot"},"ticker":{"id":"7fe3241e-0c0c-4309-bea9-5e07516df66b","type":"BasicTicker"}},"id":"147853b2-8a5c-436f-b907-33e25d425c81","type":"Grid"},{"attributes":{"below":[{"id":"ed591ff2-dd1d-4445-867a-74c4270eff8e","type":"LinearAxis"}],"left":[{"id":"b11f41ef-8685-4c0a-8a37-6da876b5cfc0","type":"LinearAxis"}],"legend":true,"plot_height":400,"plot_width":400,"renderers":[{"id":"150f5e42-face-4d54-b51c-2168d2f9650f","type":"BoxAnnotation"},{"id":"29904980-d8e5-4d18-b781-6e0eda41741f","type":"GlyphRenderer"},{"id":"5f2e292f-dd15-4bd0-944f-f5958a4786f1","type":"GlyphRenderer"},{"id":"26f53c32-3d30-45f3-9d5e-91eddf6c14ac","type":"Legend"},{"id":"ed591ff2-dd1d-4445-867a-74c4270eff8e","type":"LinearAxis"},{"id":"b11f41ef-8685-4c0a-8a37-6da876b5cfc0","type":"LinearAxis"},{"id":"41207148-3f6e-4db2-9a8d-f85078a1c801","type":"Grid"},{"id":"147853b2-8a5c-436f-b907-33e25d425c81","type":"Grid"}],"title":"U.S. Postage Rates (1999-2015)","title_text_font_size":{"value":"14pt"},"tool_events":{"id":"89ca1bbe-2ea5-4bb8-bf00-4d55b4cfb825","type":"ToolEvents"},"tools":[{"id":"9f34e88f-8bd2-4573-98bd-7ce6644fe520","type":"PanTool"},{"id":"e6b3855f-a352-4043-8d71-246bce639d0b","type":"WheelZoomTool"},{"id":"f12345e1-6b11-4171-9572-04e67e20ad12","type":"BoxZoomTool"},{"id":"35741755-b531-4094-b2a4-8efaf15995f0","type":"PreviewSaveTool"},{"id":"db9fc0c3-f30f-4c64-aede-beb7d41249d6","type":"ResizeTool"},{"id":"82c7a3c9-934b-417e-a416-1568a336935c","type":"ResetTool"},{"id":"05304afe-278b-43f2-aaba-1ca7936e50f5","type":"HelpTool"}],"x_mapper_type":"auto","x_range":{"id":"bde0aa2a-0a73-4d81-a2d1-af8c6e31e26c","type":"Range1d"},"xscale":"auto","y_mapper_type":"auto","y_range":{"id":"77484ef4-d17c-4516-af0c-461af3758b73","type":"Range1d"},"yscale":"auto"},"id":"c9216a19-eb26-4f87-b6e8-4acedba7ee26","subtype":"Chart","type":"Plot"},{"attributes":{"axis_label":"Rate per ounce","formatter":{"id":"3c74b608-0167-4d0d-8046-c8b4bf53e0fa","type":"BasicTickFormatter"},"plot":{"id":"c9216a19-eb26-4f87-b6e8-4acedba7ee26","subtype":"Chart","type":"Plot"},"ticker":{"id":"7fe3241e-0c0c-4309-bea9-5e07516df66b","type":"BasicTicker"}},"id":"b11f41ef-8685-4c0a-8a37-6da876b5cfc0","type":"LinearAxis"},{"attributes":{"callback":null,"end":0.519,"start":0.171},"id":"77484ef4-d17c-4516-af0c-461af3758b73","type":"Range1d"},{"attributes":{"overlay":{"id":"150f5e42-face-4d54-b51c-2168d2f9650f","type":"BoxAnnotation"},"plot":{"id":"c9216a19-eb26-4f87-b6e8-4acedba7ee26","subtype":"Chart","type":"Plot"}},"id":"f12345e1-6b11-4171-9572-04e67e20ad12","type":"BoxZoomTool"},{"attributes":{},"id":"184eee6b-8489-467c-81a7-0a2c076cea1c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"c9216a19-eb26-4f87-b6e8-4acedba7ee26","subtype":"Chart","type":"Plot"}},"id":"35741755-b531-4094-b2a4-8efaf15995f0","type":"PreviewSaveTool"},{"attributes":{"line_color":{"value":"#5ab738"},"line_dash":[6],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"a0b81186-1125-4e80-90c5-1031112bfb66","type":"Line"},{"attributes":{"callback":null,"end":17.6,"start":-1.6},"id":"bde0aa2a-0a73-4d81-a2d1-af8c6e31e26c","type":"Range1d"},{"attributes":{"plot":{"id":"c9216a19-eb26-4f87-b6e8-4acedba7ee26","subtype":"Chart","type":"Plot"}},"id":"05304afe-278b-43f2-aaba-1ca7936e50f5","type":"HelpTool"},{"attributes":{},"id":"89ca1bbe-2ea5-4bb8-bf00-4d55b4cfb825","type":"ToolEvents"},{"attributes":{"data_source":{"id":"a41e2273-5e8f-4438-8437-9b19c47eabf6","type":"ColumnDataSource"},"glyph":{"id":"a0b81186-1125-4e80-90c5-1031112bfb66","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"29904980-d8e5-4d18-b781-6e0eda41741f","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"c9216a19-eb26-4f87-b6e8-4acedba7ee26","subtype":"Chart","type":"Plot"}},"id":"82c7a3c9-934b-417e-a416-1568a336935c","type":"ResetTool"},{"attributes":{"legends":[["stamp",[{"id":"29904980-d8e5-4d18-b781-6e0eda41741f","type":"GlyphRenderer"}]],["postcard",[{"id":"5f2e292f-dd15-4bd0-944f-f5958a4786f1","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"c9216a19-eb26-4f87-b6e8-4acedba7ee26","subtype":"Chart","type":"Plot"}},"id":"26f53c32-3d30-45f3-9d5e-91eddf6c14ac","type":"Legend"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"569a595b-2894-4d7b-afcf-1b5a6eb71990","type":"Line"},{"attributes":{"plot":{"id":"c9216a19-eb26-4f87-b6e8-4acedba7ee26","subtype":"Chart","type":"Plot"}},"id":"db9fc0c3-f30f-4c64-aede-beb7d41249d6","type":"ResizeTool"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":[0.33,0.33,0.33,0.33,0.34,0.34,0.37,0.37,0.37,0.37,0.37,0.37,0.37,0.37,0.39,0.39,0.41,0.41,0.42,0.42,0.44,0.44,0.44,0.44,0.44,0.44,0.45,0.45,0.46,0.46,0.49,0.49,0.49]}},"id":"a41e2273-5e8f-4438-8437-9b19c47eabf6","type":"ColumnDataSource"}],"root_ids":["c9216a19-eb26-4f87-b6e8-4acedba7ee26"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"2dac19f2-2a2c-46fb-b0d5-f399ba7468ae","elementid":"7134591a-18db-42a2-a43c-c19b3cda5a43","modelid":"c9216a19-eb26-4f87-b6e8-4acedba7ee26"}];
          
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