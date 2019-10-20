
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
  };var element = document.getElementById("8e859504-48f4-4645-9ba2-926dbdaca4cd");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '8e859504-48f4-4645-9ba2-926dbdaca4cd' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"2788449a-eda5-408b-b1ad-6db3b3a12ed8":{"roots":{"references":[{"attributes":{"below":[{"id":"e8baa53d-ecc0-43d2-9030-f3b7186b88a9","type":"LinearAxis"}],"left":[{"id":"8ac8d4f7-53b8-42d5-a5c9-06171d177cea","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e8baa53d-ecc0-43d2-9030-f3b7186b88a9","type":"LinearAxis"},{"id":"6935a2d1-b857-4c04-9a02-35ad30735df6","type":"Grid"},{"id":"8ac8d4f7-53b8-42d5-a5c9-06171d177cea","type":"LinearAxis"},{"id":"1b5154b6-e192-4b75-9f54-51e8cd461ae3","type":"Grid"},{"id":"37c9e1ae-e510-4c11-b1b6-081a4d65558f","type":"BoxAnnotation"},{"id":"39fe9f18-01f3-4c8f-b3ef-964628faa968","type":"GlyphRenderer"}],"tool_events":{"id":"c66b819a-57f3-4ce9-acb3-0ffa12cbf173","type":"ToolEvents"},"tools":[{"id":"93f30916-4fc4-4ad0-aa1c-e43fd001420f","type":"PanTool"},{"id":"a3b61a5b-5d59-4160-924f-472aefd74b2e","type":"WheelZoomTool"},{"id":"ce56aaa9-e2a1-4fe3-a717-a0f7f66a805c","type":"BoxZoomTool"},{"id":"c67ac861-4120-48c7-9378-226c6b0e7e65","type":"PreviewSaveTool"},{"id":"bca08216-2d85-4162-b4cc-68371ec4e115","type":"ResizeTool"},{"id":"c9868e29-7736-419b-8327-128afd64d077","type":"ResetTool"},{"id":"ff1b8698-00a2-487f-8669-b4430a32a9bd","type":"HelpTool"}],"x_range":{"id":"762040dc-debc-4dfb-86bf-7fcfd8ddf687","type":"DataRange1d"},"y_range":{"id":"e2326d2f-1171-4988-b36f-d749d570926e","type":"DataRange1d"}},"id":"8fee4b3a-6d5c-427e-a52b-2bfb387dfee3","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f7bba422-dc52-4049-bc0c-278bbac6d265","type":"BasicTicker"},{"attributes":{"plot":{"id":"8fee4b3a-6d5c-427e-a52b-2bfb387dfee3","subtype":"Figure","type":"Plot"}},"id":"a3b61a5b-5d59-4160-924f-472aefd74b2e","type":"WheelZoomTool"},{"attributes":{},"id":"9ebc410f-00ba-4584-ba29-c6a0f978cbb6","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"8fee4b3a-6d5c-427e-a52b-2bfb387dfee3","subtype":"Figure","type":"Plot"}},"id":"c67ac861-4120-48c7-9378-226c6b0e7e65","type":"PreviewSaveTool"},{"attributes":{"callback":null,"column_names":["ys","xs","line_color"],"data":{"line_color":["red","green"],"xs":[[1,2,3],[2,3,4]],"ys":[[6,7,2],[4,5,7]]}},"id":"9ab8a3b0-6338-4cdb-824b-ca0dd39592d2","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"8fee4b3a-6d5c-427e-a52b-2bfb387dfee3","subtype":"Figure","type":"Plot"}},"id":"bca08216-2d85-4162-b4cc-68371ec4e115","type":"ResizeTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"37c9e1ae-e510-4c11-b1b6-081a4d65558f","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"8fee4b3a-6d5c-427e-a52b-2bfb387dfee3","subtype":"Figure","type":"Plot"}},"id":"93f30916-4fc4-4ad0-aa1c-e43fd001420f","type":"PanTool"},{"attributes":{"callback":null},"id":"e2326d2f-1171-4988-b36f-d749d570926e","type":"DataRange1d"},{"attributes":{},"id":"35d4e3e5-7d6a-43f3-8113-3c4b57dd6bd0","type":"BasicTicker"},{"attributes":{"plot":{"id":"8fee4b3a-6d5c-427e-a52b-2bfb387dfee3","subtype":"Figure","type":"Plot"},"ticker":{"id":"35d4e3e5-7d6a-43f3-8113-3c4b57dd6bd0","type":"BasicTicker"}},"id":"6935a2d1-b857-4c04-9a02-35ad30735df6","type":"Grid"},{"attributes":{"formatter":{"id":"9ebc410f-00ba-4584-ba29-c6a0f978cbb6","type":"BasicTickFormatter"},"plot":{"id":"8fee4b3a-6d5c-427e-a52b-2bfb387dfee3","subtype":"Figure","type":"Plot"},"ticker":{"id":"35d4e3e5-7d6a-43f3-8113-3c4b57dd6bd0","type":"BasicTicker"}},"id":"e8baa53d-ecc0-43d2-9030-f3b7186b88a9","type":"LinearAxis"},{"attributes":{"callback":null},"id":"762040dc-debc-4dfb-86bf-7fcfd8ddf687","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"0679ef1c-5596-4f02-a065-e260406c0725","type":"MultiLine"},{"attributes":{"dimension":1,"plot":{"id":"8fee4b3a-6d5c-427e-a52b-2bfb387dfee3","subtype":"Figure","type":"Plot"},"ticker":{"id":"f7bba422-dc52-4049-bc0c-278bbac6d265","type":"BasicTicker"}},"id":"1b5154b6-e192-4b75-9f54-51e8cd461ae3","type":"Grid"},{"attributes":{"formatter":{"id":"ffb182e9-0ad5-4c92-a861-2f9d7a6e1215","type":"BasicTickFormatter"},"plot":{"id":"8fee4b3a-6d5c-427e-a52b-2bfb387dfee3","subtype":"Figure","type":"Plot"},"ticker":{"id":"f7bba422-dc52-4049-bc0c-278bbac6d265","type":"BasicTicker"}},"id":"8ac8d4f7-53b8-42d5-a5c9-06171d177cea","type":"LinearAxis"},{"attributes":{"data_source":{"id":"9ab8a3b0-6338-4cdb-824b-ca0dd39592d2","type":"ColumnDataSource"},"glyph":{"id":"e1fce27a-7a7c-450b-a4a8-5ac9fbcca86f","type":"MultiLine"},"hover_glyph":null,"nonselection_glyph":{"id":"0679ef1c-5596-4f02-a065-e260406c0725","type":"MultiLine"},"selection_glyph":null},"id":"39fe9f18-01f3-4c8f-b3ef-964628faa968","type":"GlyphRenderer"},{"attributes":{"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"e1fce27a-7a7c-450b-a4a8-5ac9fbcca86f","type":"MultiLine"},{"attributes":{"overlay":{"id":"37c9e1ae-e510-4c11-b1b6-081a4d65558f","type":"BoxAnnotation"},"plot":{"id":"8fee4b3a-6d5c-427e-a52b-2bfb387dfee3","subtype":"Figure","type":"Plot"}},"id":"ce56aaa9-e2a1-4fe3-a717-a0f7f66a805c","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"8fee4b3a-6d5c-427e-a52b-2bfb387dfee3","subtype":"Figure","type":"Plot"}},"id":"ff1b8698-00a2-487f-8669-b4430a32a9bd","type":"HelpTool"},{"attributes":{},"id":"ffb182e9-0ad5-4c92-a861-2f9d7a6e1215","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"8fee4b3a-6d5c-427e-a52b-2bfb387dfee3","subtype":"Figure","type":"Plot"}},"id":"c9868e29-7736-419b-8327-128afd64d077","type":"ResetTool"},{"attributes":{},"id":"c66b819a-57f3-4ce9-acb3-0ffa12cbf173","type":"ToolEvents"}],"root_ids":["8fee4b3a-6d5c-427e-a52b-2bfb387dfee3"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"2788449a-eda5-408b-b1ad-6db3b3a12ed8","elementid":"8e859504-48f4-4645-9ba2-926dbdaca4cd","modelid":"8fee4b3a-6d5c-427e-a52b-2bfb387dfee3"}];
          
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