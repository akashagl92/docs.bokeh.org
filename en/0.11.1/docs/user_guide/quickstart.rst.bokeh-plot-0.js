
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
  };var element = document.getElementById("a15b8508-ed89-4178-9d9c-d0b08efe5eeb");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'a15b8508-ed89-4178-9d9c-d0b08efe5eeb' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"c5045447-0e4b-46c5-a362-9f6f4fa5b44e":{"roots":{"references":[{"attributes":{"axis_label":"x","formatter":{"id":"95b58c58-8eab-44df-ae2b-9d5d6f3ae53a","type":"BasicTickFormatter"},"plot":{"id":"d502277b-18ff-4708-97fc-ad14b7c0e95b","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b90262f-c353-48c9-a8b4-aac18548525b","type":"BasicTicker"}},"id":"0a4b75cd-4779-479c-ad36-0255696f208f","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"a89d3f16-966e-4b9b-b500-e7e8ac2c55da","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d502277b-18ff-4708-97fc-ad14b7c0e95b","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b90262f-c353-48c9-a8b4-aac18548525b","type":"BasicTicker"}},"id":"b9d43b1b-b964-45a7-8340-a03db979668c","type":"Grid"},{"attributes":{"plot":{"id":"d502277b-18ff-4708-97fc-ad14b7c0e95b","subtype":"Figure","type":"Plot"}},"id":"33100063-297f-4528-b900-939f9ef6f54c","type":"ResizeTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"a4c59d18-dae4-4cde-9773-4c625b18f5e8","type":"Line"},{"attributes":{},"id":"7104067b-5634-4165-9cee-7dd7cd5929d9","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d502277b-18ff-4708-97fc-ad14b7c0e95b","subtype":"Figure","type":"Plot"}},"id":"0067fce4-ff36-4828-a415-7e3406225a17","type":"ResetTool"},{"attributes":{"axis_label":"y","formatter":{"id":"7104067b-5634-4165-9cee-7dd7cd5929d9","type":"BasicTickFormatter"},"plot":{"id":"d502277b-18ff-4708-97fc-ad14b7c0e95b","subtype":"Figure","type":"Plot"},"ticker":{"id":"0f36eb36-d3c3-490a-b33b-5fd2f4d75f07","type":"BasicTicker"}},"id":"58d5782c-aed8-4e84-b267-a3f4240f31d7","type":"LinearAxis"},{"attributes":{},"id":"6fe2e2f3-08c0-480e-8046-b901167ca288","type":"ToolEvents"},{"attributes":{"below":[{"id":"0a4b75cd-4779-479c-ad36-0255696f208f","type":"LinearAxis"}],"left":[{"id":"58d5782c-aed8-4e84-b267-a3f4240f31d7","type":"LinearAxis"}],"renderers":[{"id":"0a4b75cd-4779-479c-ad36-0255696f208f","type":"LinearAxis"},{"id":"b9d43b1b-b964-45a7-8340-a03db979668c","type":"Grid"},{"id":"58d5782c-aed8-4e84-b267-a3f4240f31d7","type":"LinearAxis"},{"id":"1892a9af-d2fc-4be1-b53a-cb8b299d3e3e","type":"Grid"},{"id":"89e23f3d-5c67-441c-b69e-c522622bcd3a","type":"BoxAnnotation"},{"id":"d6946f99-24fe-4e2f-9bcf-b55b0c7ccca2","type":"Legend"},{"id":"35283724-5fc5-4901-9541-bcd4d4a13e1e","type":"GlyphRenderer"}],"title":"simple line example","tool_events":{"id":"6fe2e2f3-08c0-480e-8046-b901167ca288","type":"ToolEvents"},"tools":[{"id":"9b075778-5ea6-445e-b814-cced19a0c360","type":"PanTool"},{"id":"8e3f524a-1d3c-437f-8976-4701be8f1002","type":"WheelZoomTool"},{"id":"4dbac81b-7e81-43bb-ad8d-e830484f4b6b","type":"BoxZoomTool"},{"id":"115ca791-111f-40f4-a130-41f00bb3d750","type":"PreviewSaveTool"},{"id":"33100063-297f-4528-b900-939f9ef6f54c","type":"ResizeTool"},{"id":"0067fce4-ff36-4828-a415-7e3406225a17","type":"ResetTool"},{"id":"59c0d60f-295a-4dd7-8180-b7b5df709b2a","type":"HelpTool"}],"x_range":{"id":"c726efa4-67c7-4fbe-a679-d1acd45ffa03","type":"DataRange1d"},"y_range":{"id":"f77ae92f-6963-4d8b-b596-55464ab53c74","type":"DataRange1d"}},"id":"d502277b-18ff-4708-97fc-ad14b7c0e95b","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"89e23f3d-5c67-441c-b69e-c522622bcd3a","type":"BoxAnnotation"},"plot":{"id":"d502277b-18ff-4708-97fc-ad14b7c0e95b","subtype":"Figure","type":"Plot"}},"id":"4dbac81b-7e81-43bb-ad8d-e830484f4b6b","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"d502277b-18ff-4708-97fc-ad14b7c0e95b","subtype":"Figure","type":"Plot"}},"id":"59c0d60f-295a-4dd7-8180-b7b5df709b2a","type":"HelpTool"},{"attributes":{"plot":{"id":"d502277b-18ff-4708-97fc-ad14b7c0e95b","subtype":"Figure","type":"Plot"}},"id":"115ca791-111f-40f4-a130-41f00bb3d750","type":"PreviewSaveTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"c438f2e3-9ff9-4a2e-905d-11c7c55f8c6b","type":"Line"},{"attributes":{},"id":"95b58c58-8eab-44df-ae2b-9d5d6f3ae53a","type":"BasicTickFormatter"},{"attributes":{},"id":"0f36eb36-d3c3-490a-b33b-5fd2f4d75f07","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"d502277b-18ff-4708-97fc-ad14b7c0e95b","subtype":"Figure","type":"Plot"},"ticker":{"id":"0f36eb36-d3c3-490a-b33b-5fd2f4d75f07","type":"BasicTicker"}},"id":"1892a9af-d2fc-4be1-b53a-cb8b299d3e3e","type":"Grid"},{"attributes":{"data_source":{"id":"a89d3f16-966e-4b9b-b500-e7e8ac2c55da","type":"ColumnDataSource"},"glyph":{"id":"c438f2e3-9ff9-4a2e-905d-11c7c55f8c6b","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"a4c59d18-dae4-4cde-9773-4c625b18f5e8","type":"Line"},"selection_glyph":null},"id":"35283724-5fc5-4901-9541-bcd4d4a13e1e","type":"GlyphRenderer"},{"attributes":{},"id":"7b90262f-c353-48c9-a8b4-aac18548525b","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"89e23f3d-5c67-441c-b69e-c522622bcd3a","type":"BoxAnnotation"},{"attributes":{"legends":[["Temp.",[{"id":"35283724-5fc5-4901-9541-bcd4d4a13e1e","type":"GlyphRenderer"}]]],"plot":{"id":"d502277b-18ff-4708-97fc-ad14b7c0e95b","subtype":"Figure","type":"Plot"}},"id":"d6946f99-24fe-4e2f-9bcf-b55b0c7ccca2","type":"Legend"},{"attributes":{"callback":null},"id":"c726efa4-67c7-4fbe-a679-d1acd45ffa03","type":"DataRange1d"},{"attributes":{"plot":{"id":"d502277b-18ff-4708-97fc-ad14b7c0e95b","subtype":"Figure","type":"Plot"}},"id":"8e3f524a-1d3c-437f-8976-4701be8f1002","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"d502277b-18ff-4708-97fc-ad14b7c0e95b","subtype":"Figure","type":"Plot"}},"id":"9b075778-5ea6-445e-b814-cced19a0c360","type":"PanTool"},{"attributes":{"callback":null},"id":"f77ae92f-6963-4d8b-b596-55464ab53c74","type":"DataRange1d"}],"root_ids":["d502277b-18ff-4708-97fc-ad14b7c0e95b"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"c5045447-0e4b-46c5-a362-9f6f4fa5b44e","elementid":"a15b8508-ed89-4178-9d9c-d0b08efe5eeb","modelid":"d502277b-18ff-4708-97fc-ad14b7c0e95b"}];
          
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