
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
  };var element = document.getElementById("a9e59bdc-b5ab-4e36-923e-2b8e98ee5008");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'a9e59bdc-b5ab-4e36-923e-2b8e98ee5008' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"51604b66-4b43-472b-be5f-0215c391a8d6":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"70b9532d-0e1c-478d-8f83-be2a7d6ffc2e","subtype":"Figure","type":"Plot"},"ticker":{"id":"fa4b13bf-8ac6-4965-88a1-c2d5eccea3b1","type":"BasicTicker"}},"id":"e89fc0b5-d8d5-43b6-8592-263f01db57b1","type":"Grid"},{"attributes":{"formatter":{"id":"cfa08231-9bc7-419a-802b-b2889008356a","type":"BasicTickFormatter"},"plot":{"id":"70b9532d-0e1c-478d-8f83-be2a7d6ffc2e","subtype":"Figure","type":"Plot"},"ticker":{"id":"fa4b13bf-8ac6-4965-88a1-c2d5eccea3b1","type":"BasicTicker"}},"id":"8b53a74c-5c8b-4618-8a60-89aa6d5b31a9","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"80cb48ca-d198-45ec-a083-772b14f39123","type":"Circle"},{"attributes":{"callback":null,"end":20},"id":"bfb76fe0-f963-4f87-bf20-4fbb947b931e","type":"Range1d"},{"attributes":{"plot":{"id":"70b9532d-0e1c-478d-8f83-be2a7d6ffc2e","subtype":"Figure","type":"Plot"}},"id":"2e2f0e98-5a4d-4fd4-a4eb-6d2a96576460","type":"ResizeTool"},{"attributes":{},"id":"3fe47b57-c85d-4086-8270-5ea131a2b99a","type":"BasicTickFormatter"},{"attributes":{},"id":"cfa08231-9bc7-419a-802b-b2889008356a","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"70b9532d-0e1c-478d-8f83-be2a7d6ffc2e","subtype":"Figure","type":"Plot"}},"id":"fb5596cf-0a2d-43f1-b7fc-b1c21493db3a","type":"HelpTool"},{"attributes":{"data_source":{"id":"1694e022-96fe-45d6-a761-81e006394975","type":"ColumnDataSource"},"glyph":{"id":"66b1067b-b043-4ae0-ab31-85b44b6a07ba","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"80cb48ca-d198-45ec-a083-772b14f39123","type":"Circle"},"selection_glyph":null},"id":"456b62f1-3474-4181-aeab-40ab025d209b","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"2d496a16-34f9-4d1c-a070-f091378de360","type":"LinearAxis"}],"left":[{"id":"8b53a74c-5c8b-4618-8a60-89aa6d5b31a9","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2d496a16-34f9-4d1c-a070-f091378de360","type":"LinearAxis"},{"id":"dac23b46-f499-45e7-9412-0408eba9c84e","type":"Grid"},{"id":"8b53a74c-5c8b-4618-8a60-89aa6d5b31a9","type":"LinearAxis"},{"id":"e89fc0b5-d8d5-43b6-8592-263f01db57b1","type":"Grid"},{"id":"eef81779-b4aa-410a-9b91-3b27c6bd6f86","type":"BoxAnnotation"},{"id":"456b62f1-3474-4181-aeab-40ab025d209b","type":"GlyphRenderer"}],"tool_events":{"id":"dcbce64c-0eed-481b-9c63-9e7e8099b3be","type":"ToolEvents"},"tools":[{"id":"22b3533d-1e6d-4c71-9da7-ab3d6f2738ea","type":"PanTool"},{"id":"0de7f599-c99b-4064-84d2-5c9ee6b5d4bd","type":"WheelZoomTool"},{"id":"81df0f42-9583-4456-8862-c6cbced70c78","type":"BoxZoomTool"},{"id":"fa50a63d-a174-44ef-a8c0-655c0f3f594e","type":"PreviewSaveTool"},{"id":"2e2f0e98-5a4d-4fd4-a4eb-6d2a96576460","type":"ResizeTool"},{"id":"a76d4647-73a2-47a8-92be-fdc36f1e7e35","type":"ResetTool"},{"id":"fb5596cf-0a2d-43f1-b7fc-b1c21493db3a","type":"HelpTool"}],"x_range":{"id":"bfb76fe0-f963-4f87-bf20-4fbb947b931e","type":"Range1d"},"y_range":{"id":"833d050f-0f3c-4fa5-be37-855dc7ea3aaf","type":"Range1d"}},"id":"70b9532d-0e1c-478d-8f83-be2a7d6ffc2e","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"70b9532d-0e1c-478d-8f83-be2a7d6ffc2e","subtype":"Figure","type":"Plot"}},"id":"22b3533d-1e6d-4c71-9da7-ab3d6f2738ea","type":"PanTool"},{"attributes":{"formatter":{"id":"3fe47b57-c85d-4086-8270-5ea131a2b99a","type":"BasicTickFormatter"},"plot":{"id":"70b9532d-0e1c-478d-8f83-be2a7d6ffc2e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2494f08-0c56-4cee-994a-0263b091650e","type":"BasicTicker"}},"id":"2d496a16-34f9-4d1c-a070-f091378de360","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"eef81779-b4aa-410a-9b91-3b27c6bd6f86","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"1694e022-96fe-45d6-a761-81e006394975","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"66b1067b-b043-4ae0-ab31-85b44b6a07ba","type":"Circle"},{"attributes":{},"id":"dcbce64c-0eed-481b-9c63-9e7e8099b3be","type":"ToolEvents"},{"attributes":{"plot":{"id":"70b9532d-0e1c-478d-8f83-be2a7d6ffc2e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2494f08-0c56-4cee-994a-0263b091650e","type":"BasicTicker"}},"id":"dac23b46-f499-45e7-9412-0408eba9c84e","type":"Grid"},{"attributes":{"overlay":{"id":"eef81779-b4aa-410a-9b91-3b27c6bd6f86","type":"BoxAnnotation"},"plot":{"id":"70b9532d-0e1c-478d-8f83-be2a7d6ffc2e","subtype":"Figure","type":"Plot"}},"id":"81df0f42-9583-4456-8862-c6cbced70c78","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":15},"id":"833d050f-0f3c-4fa5-be37-855dc7ea3aaf","type":"Range1d"},{"attributes":{"plot":{"id":"70b9532d-0e1c-478d-8f83-be2a7d6ffc2e","subtype":"Figure","type":"Plot"}},"id":"a76d4647-73a2-47a8-92be-fdc36f1e7e35","type":"ResetTool"},{"attributes":{"plot":{"id":"70b9532d-0e1c-478d-8f83-be2a7d6ffc2e","subtype":"Figure","type":"Plot"}},"id":"fa50a63d-a174-44ef-a8c0-655c0f3f594e","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"70b9532d-0e1c-478d-8f83-be2a7d6ffc2e","subtype":"Figure","type":"Plot"}},"id":"0de7f599-c99b-4064-84d2-5c9ee6b5d4bd","type":"WheelZoomTool"},{"attributes":{},"id":"c2494f08-0c56-4cee-994a-0263b091650e","type":"BasicTicker"},{"attributes":{},"id":"fa4b13bf-8ac6-4965-88a1-c2d5eccea3b1","type":"BasicTicker"}],"root_ids":["70b9532d-0e1c-478d-8f83-be2a7d6ffc2e"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"51604b66-4b43-472b-be5f-0215c391a8d6","elementid":"a9e59bdc-b5ab-4e36-923e-2b8e98ee5008","modelid":"70b9532d-0e1c-478d-8f83-be2a7d6ffc2e"}];
          
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