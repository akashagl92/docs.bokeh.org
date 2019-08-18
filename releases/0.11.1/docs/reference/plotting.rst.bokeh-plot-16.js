
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
  };var element = document.getElementById("7bfcdc97-e2bf-4c9f-8b68-de3a97cd620c");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '7bfcdc97-e2bf-4c9f-8b68-de3a97cd620c' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"7398f6dc-3625-418e-bc6f-d9af298de3bb":{"roots":{"references":[{"attributes":{"formatter":{"id":"7f14ae8a-bcf9-4381-b97d-00a756a2927f","type":"BasicTickFormatter"},"plot":{"id":"2ebd7db5-3cc0-42fd-9bfb-7e393cd273c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"a0cfa8c8-eec9-42dd-a09e-246d146b1091","type":"BasicTicker"}},"id":"456faab4-a510-4640-a61f-83e7e13f9ddf","type":"LinearAxis"},{"attributes":{"plot":{"id":"2ebd7db5-3cc0-42fd-9bfb-7e393cd273c4","subtype":"Figure","type":"Plot"}},"id":"89ad3bd9-4a6a-4bac-a849-84c692c57f35","type":"ResetTool"},{"attributes":{"plot":{"id":"2ebd7db5-3cc0-42fd-9bfb-7e393cd273c4","subtype":"Figure","type":"Plot"}},"id":"edf9dacd-a33f-4a44-90cf-bbd6c98dee34","type":"PanTool"},{"attributes":{"below":[{"id":"456faab4-a510-4640-a61f-83e7e13f9ddf","type":"LinearAxis"}],"left":[{"id":"e6e61139-bc41-48e1-a023-99bf351ddf2f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"456faab4-a510-4640-a61f-83e7e13f9ddf","type":"LinearAxis"},{"id":"3ea03821-eea6-4511-a520-3fd0d75a4bf5","type":"Grid"},{"id":"e6e61139-bc41-48e1-a023-99bf351ddf2f","type":"LinearAxis"},{"id":"bf7f987e-3e9d-4d4b-b678-4614491f5132","type":"Grid"},{"id":"1c42c62e-3554-4143-a1c1-f6f08f6f2a49","type":"BoxAnnotation"},{"id":"2c85df73-c699-40f4-9ed9-5d35b23a06ed","type":"GlyphRenderer"}],"tool_events":{"id":"8e6359ea-4438-428a-b3e5-60451cb1efff","type":"ToolEvents"},"tools":[{"id":"edf9dacd-a33f-4a44-90cf-bbd6c98dee34","type":"PanTool"},{"id":"a9b76c6f-1059-4ca7-8ded-9b0b302e904d","type":"WheelZoomTool"},{"id":"1a18e39b-f692-4ad1-a859-c3d5ba7c5ae4","type":"BoxZoomTool"},{"id":"45334caf-f6b3-41d6-9e65-228dd0caa1e6","type":"PreviewSaveTool"},{"id":"edf2e54f-d4b7-45dc-88a5-2c68f222fbc8","type":"ResizeTool"},{"id":"89ad3bd9-4a6a-4bac-a849-84c692c57f35","type":"ResetTool"},{"id":"062beb9c-663c-42f7-bec2-e2b9d14e6671","type":"HelpTool"}],"x_range":{"id":"e70e7ba3-1c30-4286-9dca-01f30df9f859","type":"DataRange1d"},"y_range":{"id":"63c63c2c-83d1-42f7-9bbf-f0fa89d7dc6f","type":"DataRange1d"}},"id":"2ebd7db5-3cc0-42fd-9bfb-7e393cd273c4","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"2ebd7db5-3cc0-42fd-9bfb-7e393cd273c4","subtype":"Figure","type":"Plot"}},"id":"edf2e54f-d4b7-45dc-88a5-2c68f222fbc8","type":"ResizeTool"},{"attributes":{},"id":"c8dfea8d-b47d-4ff1-8b76-86c5f363cd07","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"2ebd7db5-3cc0-42fd-9bfb-7e393cd273c4","subtype":"Figure","type":"Plot"}},"id":"a9b76c6f-1059-4ca7-8ded-9b0b302e904d","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"2c09b0fd-e951-4fb5-bbe9-1f26c2b23128","type":"ColumnDataSource"},{"attributes":{},"id":"8e6359ea-4438-428a-b3e5-60451cb1efff","type":"ToolEvents"},{"attributes":{"plot":{"id":"2ebd7db5-3cc0-42fd-9bfb-7e393cd273c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"a0cfa8c8-eec9-42dd-a09e-246d146b1091","type":"BasicTicker"}},"id":"3ea03821-eea6-4511-a520-3fd0d75a4bf5","type":"Grid"},{"attributes":{},"id":"7f14ae8a-bcf9-4381-b97d-00a756a2927f","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"63c63c2c-83d1-42f7-9bbf-f0fa89d7dc6f","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"2ebd7db5-3cc0-42fd-9bfb-7e393cd273c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2ff6984-1401-4dc6-bd70-0a19fa2e315b","type":"BasicTicker"}},"id":"bf7f987e-3e9d-4d4b-b678-4614491f5132","type":"Grid"},{"attributes":{"plot":{"id":"2ebd7db5-3cc0-42fd-9bfb-7e393cd273c4","subtype":"Figure","type":"Plot"}},"id":"062beb9c-663c-42f7-bec2-e2b9d14e6671","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":20},"line_color":{"value":"#CAB2D6"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"340808b8-1aca-460c-ab51-41decb3631d1","type":"Rect"},{"attributes":{"callback":null},"id":"e70e7ba3-1c30-4286-9dca-01f30df9f859","type":"DataRange1d"},{"attributes":{"formatter":{"id":"c8dfea8d-b47d-4ff1-8b76-86c5f363cd07","type":"BasicTickFormatter"},"plot":{"id":"2ebd7db5-3cc0-42fd-9bfb-7e393cd273c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2ff6984-1401-4dc6-bd70-0a19fa2e315b","type":"BasicTicker"}},"id":"e6e61139-bc41-48e1-a023-99bf351ddf2f","type":"LinearAxis"},{"attributes":{},"id":"f2ff6984-1401-4dc6-bd70-0a19fa2e315b","type":"BasicTicker"},{"attributes":{"data_source":{"id":"2c09b0fd-e951-4fb5-bbe9-1f26c2b23128","type":"ColumnDataSource"},"glyph":{"id":"340808b8-1aca-460c-ab51-41decb3631d1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"3e7070c2-d03a-4ed9-80a0-868a63293bf3","type":"Rect"},"selection_glyph":null},"id":"2c85df73-c699-40f4-9ed9-5d35b23a06ed","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1c42c62e-3554-4143-a1c1-f6f08f6f2a49","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"1c42c62e-3554-4143-a1c1-f6f08f6f2a49","type":"BoxAnnotation"},"plot":{"id":"2ebd7db5-3cc0-42fd-9bfb-7e393cd273c4","subtype":"Figure","type":"Plot"}},"id":"1a18e39b-f692-4ad1-a859-c3d5ba7c5ae4","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"2ebd7db5-3cc0-42fd-9bfb-7e393cd273c4","subtype":"Figure","type":"Plot"}},"id":"45334caf-f6b3-41d6-9e65-228dd0caa1e6","type":"PreviewSaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3e7070c2-d03a-4ed9-80a0-868a63293bf3","type":"Rect"},{"attributes":{},"id":"a0cfa8c8-eec9-42dd-a09e-246d146b1091","type":"BasicTicker"}],"root_ids":["2ebd7db5-3cc0-42fd-9bfb-7e393cd273c4"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"7398f6dc-3625-418e-bc6f-d9af298de3bb","elementid":"7bfcdc97-e2bf-4c9f-8b68-de3a97cd620c","modelid":"2ebd7db5-3cc0-42fd-9bfb-7e393cd273c4"}];
          
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