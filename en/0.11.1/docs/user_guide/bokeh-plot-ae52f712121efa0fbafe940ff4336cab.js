
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
  };var element = document.getElementById("7dfe5e46-ba16-477a-b74c-a8981eed3cf6");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '7dfe5e46-ba16-477a-b74c-a8981eed3cf6' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"8941eca4-cece-42ac-a102-77a0bfbbfd70":{"roots":{"references":[{"attributes":{"below":[{"id":"900c9718-5bde-4526-85c6-72ca2e1369d6","type":"LinearAxis"}],"left":[{"id":"92cdfa3e-c610-49c1-97c3-3e2435a54240","type":"LinearAxis"}],"plot_height":300,"plot_width":700,"renderers":[{"id":"900c9718-5bde-4526-85c6-72ca2e1369d6","type":"LinearAxis"},{"id":"c44ff6d4-66e0-43ed-8078-88053eab857a","type":"Grid"},{"id":"92cdfa3e-c610-49c1-97c3-3e2435a54240","type":"LinearAxis"},{"id":"ee76732f-6035-45d4-b0d5-f314f7cc347f","type":"Grid"},{"id":"08e0eacf-f61d-483c-b787-71c625b8c96b","type":"BoxAnnotation"},{"id":"71f41a81-7271-4142-bc02-46baaad726d0","type":"GlyphRenderer"}],"tool_events":{"id":"199a6204-d858-412e-bf80-3b2cd22b0462","type":"ToolEvents"},"tools":[{"id":"8a65570a-3d70-4dd1-9f15-a7e5d84161a9","type":"PanTool"},{"id":"b42096a9-d960-4f86-abde-ba04d55300d0","type":"WheelZoomTool"},{"id":"f889f5ed-6b87-4eae-854a-a729aa2e071b","type":"BoxZoomTool"},{"id":"7347ff3f-b3cd-44ce-8ff5-896d2bc47115","type":"PreviewSaveTool"},{"id":"2740777f-e552-4fb2-9cf9-d51bb80bba09","type":"ResizeTool"},{"id":"ce7abed7-f40d-4d12-ab8a-05cd7947b6ac","type":"ResetTool"},{"id":"1031d2f9-8674-4003-b90f-fa3f4207cb32","type":"HelpTool"}],"x_range":{"id":"55853300-64f9-4fae-9b92-d1ee67f95d4c","type":"DataRange1d"},"y_range":{"id":"8b0b911b-2445-46ef-826a-570fe0b8cc56","type":"DataRange1d"}},"id":"6ade78ef-c984-474b-98fd-70fab8c4b07d","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"55853300-64f9-4fae-9b92-d1ee67f95d4c","type":"DataRange1d"},{"attributes":{"plot":{"id":"6ade78ef-c984-474b-98fd-70fab8c4b07d","subtype":"Figure","type":"Plot"}},"id":"1031d2f9-8674-4003-b90f-fa3f4207cb32","type":"HelpTool"},{"attributes":{},"id":"e8ae50df-bd7d-44fe-8684-7133003f749e","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"2b5b04a1-5b10-403d-be28-98537e1db32f","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"960fe312-3151-40f0-aff4-0c0dd486e1bc","type":"BasicTickFormatter"},"plot":{"id":"6ade78ef-c984-474b-98fd-70fab8c4b07d","subtype":"Figure","type":"Plot"},"ticker":{"id":"5f2ebe22-a930-4ccd-b2a9-9e482a64bc0a","type":"BasicTicker"}},"id":"900c9718-5bde-4526-85c6-72ca2e1369d6","type":"LinearAxis"},{"attributes":{},"id":"199a6204-d858-412e-bf80-3b2cd22b0462","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ef8103dd-9229-4174-b459-f571ab4691b3","type":"Circle"},{"attributes":{},"id":"960fe312-3151-40f0-aff4-0c0dd486e1bc","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"2b5b04a1-5b10-403d-be28-98537e1db32f","type":"ColumnDataSource"},"glyph":{"id":"6e3dddc8-556c-413e-bb12-3b69dd0bf165","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"ef8103dd-9229-4174-b459-f571ab4691b3","type":"Circle"},"selection_glyph":null},"id":"71f41a81-7271-4142-bc02-46baaad726d0","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"8b0b911b-2445-46ef-826a-570fe0b8cc56","type":"DataRange1d"},{"attributes":{},"id":"86dd0d89-4b8b-41bd-84fd-7779de901b96","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6e3dddc8-556c-413e-bb12-3b69dd0bf165","type":"Circle"},{"attributes":{"formatter":{"id":"86dd0d89-4b8b-41bd-84fd-7779de901b96","type":"BasicTickFormatter"},"plot":{"id":"6ade78ef-c984-474b-98fd-70fab8c4b07d","subtype":"Figure","type":"Plot"},"ticker":{"id":"e8ae50df-bd7d-44fe-8684-7133003f749e","type":"BasicTicker"}},"id":"92cdfa3e-c610-49c1-97c3-3e2435a54240","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"08e0eacf-f61d-483c-b787-71c625b8c96b","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"6ade78ef-c984-474b-98fd-70fab8c4b07d","subtype":"Figure","type":"Plot"},"ticker":{"id":"e8ae50df-bd7d-44fe-8684-7133003f749e","type":"BasicTicker"}},"id":"ee76732f-6035-45d4-b0d5-f314f7cc347f","type":"Grid"},{"attributes":{"plot":{"id":"6ade78ef-c984-474b-98fd-70fab8c4b07d","subtype":"Figure","type":"Plot"}},"id":"8a65570a-3d70-4dd1-9f15-a7e5d84161a9","type":"PanTool"},{"attributes":{"plot":{"id":"6ade78ef-c984-474b-98fd-70fab8c4b07d","subtype":"Figure","type":"Plot"}},"id":"7347ff3f-b3cd-44ce-8ff5-896d2bc47115","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"6ade78ef-c984-474b-98fd-70fab8c4b07d","subtype":"Figure","type":"Plot"}},"id":"2740777f-e552-4fb2-9cf9-d51bb80bba09","type":"ResizeTool"},{"attributes":{"plot":{"id":"6ade78ef-c984-474b-98fd-70fab8c4b07d","subtype":"Figure","type":"Plot"},"ticker":{"id":"5f2ebe22-a930-4ccd-b2a9-9e482a64bc0a","type":"BasicTicker"}},"id":"c44ff6d4-66e0-43ed-8078-88053eab857a","type":"Grid"},{"attributes":{"plot":{"id":"6ade78ef-c984-474b-98fd-70fab8c4b07d","subtype":"Figure","type":"Plot"}},"id":"ce7abed7-f40d-4d12-ab8a-05cd7947b6ac","type":"ResetTool"},{"attributes":{},"id":"5f2ebe22-a930-4ccd-b2a9-9e482a64bc0a","type":"BasicTicker"},{"attributes":{"plot":{"id":"6ade78ef-c984-474b-98fd-70fab8c4b07d","subtype":"Figure","type":"Plot"}},"id":"b42096a9-d960-4f86-abde-ba04d55300d0","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"08e0eacf-f61d-483c-b787-71c625b8c96b","type":"BoxAnnotation"},"plot":{"id":"6ade78ef-c984-474b-98fd-70fab8c4b07d","subtype":"Figure","type":"Plot"}},"id":"f889f5ed-6b87-4eae-854a-a729aa2e071b","type":"BoxZoomTool"}],"root_ids":["6ade78ef-c984-474b-98fd-70fab8c4b07d"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"8941eca4-cece-42ac-a102-77a0bfbbfd70","elementid":"7dfe5e46-ba16-477a-b74c-a8981eed3cf6","modelid":"6ade78ef-c984-474b-98fd-70fab8c4b07d"}];
          
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