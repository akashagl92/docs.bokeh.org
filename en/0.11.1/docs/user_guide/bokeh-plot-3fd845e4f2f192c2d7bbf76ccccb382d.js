
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
  };var element = document.getElementById("8c49c3b4-0b33-4834-8a1e-6c2a77dbe1d2");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '8c49c3b4-0b33-4834-8a1e-6c2a77dbe1d2' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"68584d7a-0ab8-4ba0-abc3-d6223a5a209b":{"roots":{"references":[{"attributes":{"axis_label":"Temp","axis_line_color":{"value":"red"},"axis_line_width":{"value":3},"formatter":{"id":"42e373f8-646f-4d91-ba21-2c2a409855a0","type":"BasicTickFormatter"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"90383e2f-08e1-497a-95ba-c816bc351d0c","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1fb0c84-c145-45f4-bd19-5013af18bc10","type":"BasicTicker"}},"id":"55b01d75-793f-4b73-997a-2575e4df8bfe","type":"LinearAxis"},{"attributes":{"overlay":{"id":"95598d25-b3cb-45eb-bdc1-9de02ce29af6","type":"BoxAnnotation"},"plot":{"id":"90383e2f-08e1-497a-95ba-c816bc351d0c","subtype":"Figure","type":"Plot"}},"id":"ec3cb027-c788-4395-a56b-2b06a141c679","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95598d25-b3cb-45eb-bdc1-9de02ce29af6","type":"BoxAnnotation"},{"attributes":{},"id":"e1fb0c84-c145-45f4-bd19-5013af18bc10","type":"BasicTicker"},{"attributes":{"data_source":{"id":"539c9347-b45d-4e25-a02d-6840be388a5f","type":"ColumnDataSource"},"glyph":{"id":"cb58aa74-c7b8-4134-a63f-580df4e21157","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"4b5a9bca-0bbf-49d1-b877-fa74238ec75f","type":"Circle"},"selection_glyph":null},"id":"b550a279-93a8-4962-a7c1-c0d70fbeda46","type":"GlyphRenderer"},{"attributes":{},"id":"c932b76b-57ff-40af-9a00-eacb1d2998a0","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4b5a9bca-0bbf-49d1-b877-fa74238ec75f","type":"Circle"},{"attributes":{"plot":{"id":"90383e2f-08e1-497a-95ba-c816bc351d0c","subtype":"Figure","type":"Plot"}},"id":"2c5e7ddb-5214-4960-9dde-8afcb7b2d2fa","type":"PreviewSaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"cb58aa74-c7b8-4134-a63f-580df4e21157","type":"Circle"},{"attributes":{"plot":{"id":"90383e2f-08e1-497a-95ba-c816bc351d0c","subtype":"Figure","type":"Plot"}},"id":"74be20f9-8306-4747-9822-6347782d273d","type":"ResizeTool"},{"attributes":{"callback":null},"id":"bf12c4ab-6b8e-4bc5-ad1f-97b458b5c668","type":"DataRange1d"},{"attributes":{"plot":{"id":"90383e2f-08e1-497a-95ba-c816bc351d0c","subtype":"Figure","type":"Plot"}},"id":"1398ec9c-abf0-4185-a694-42f726021c76","type":"PanTool"},{"attributes":{"plot":{"id":"90383e2f-08e1-497a-95ba-c816bc351d0c","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1fb0c84-c145-45f4-bd19-5013af18bc10","type":"BasicTicker"}},"id":"141446b6-b851-4638-8f34-955623963e88","type":"Grid"},{"attributes":{"plot":{"id":"90383e2f-08e1-497a-95ba-c816bc351d0c","subtype":"Figure","type":"Plot"}},"id":"1bcfb139-60f3-447e-86da-4c258c6d115b","type":"WheelZoomTool"},{"attributes":{"axis_label":"Pressure","formatter":{"id":"c932b76b-57ff-40af-9a00-eacb1d2998a0","type":"BasicTickFormatter"},"major_label_orientation":"vertical","major_label_text_color":{"value":"orange"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"90383e2f-08e1-497a-95ba-c816bc351d0c","subtype":"Figure","type":"Plot"},"ticker":{"id":"9aeb56f7-3d9e-41dd-858e-b83cd8f4ba6a","type":"BasicTicker"}},"id":"695eb5ac-8183-4772-b2ac-30a5625deb5e","type":"LinearAxis"},{"attributes":{"plot":{"id":"90383e2f-08e1-497a-95ba-c816bc351d0c","subtype":"Figure","type":"Plot"}},"id":"f12c9e43-8f6f-4eed-a141-a9c648a9c795","type":"ResetTool"},{"attributes":{},"id":"42e373f8-646f-4d91-ba21-2c2a409855a0","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"539c9347-b45d-4e25-a02d-6840be388a5f","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"55b01d75-793f-4b73-997a-2575e4df8bfe","type":"LinearAxis"}],"left":[{"id":"695eb5ac-8183-4772-b2ac-30a5625deb5e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"55b01d75-793f-4b73-997a-2575e4df8bfe","type":"LinearAxis"},{"id":"141446b6-b851-4638-8f34-955623963e88","type":"Grid"},{"id":"695eb5ac-8183-4772-b2ac-30a5625deb5e","type":"LinearAxis"},{"id":"2e8ac4bf-2561-43a6-b5e8-cbde043defe1","type":"Grid"},{"id":"95598d25-b3cb-45eb-bdc1-9de02ce29af6","type":"BoxAnnotation"},{"id":"b550a279-93a8-4962-a7c1-c0d70fbeda46","type":"GlyphRenderer"}],"tool_events":{"id":"36fbf011-09ff-4988-94b1-f724a71f6905","type":"ToolEvents"},"tools":[{"id":"1398ec9c-abf0-4185-a694-42f726021c76","type":"PanTool"},{"id":"1bcfb139-60f3-447e-86da-4c258c6d115b","type":"WheelZoomTool"},{"id":"ec3cb027-c788-4395-a56b-2b06a141c679","type":"BoxZoomTool"},{"id":"2c5e7ddb-5214-4960-9dde-8afcb7b2d2fa","type":"PreviewSaveTool"},{"id":"74be20f9-8306-4747-9822-6347782d273d","type":"ResizeTool"},{"id":"f12c9e43-8f6f-4eed-a141-a9c648a9c795","type":"ResetTool"},{"id":"a4857add-ffbc-46f5-985f-dd2942a83da4","type":"HelpTool"}],"x_range":{"id":"bf12c4ab-6b8e-4bc5-ad1f-97b458b5c668","type":"DataRange1d"},"y_range":{"id":"a249252c-0bc6-4944-8dd5-52bd51eb8035","type":"DataRange1d"}},"id":"90383e2f-08e1-497a-95ba-c816bc351d0c","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"90383e2f-08e1-497a-95ba-c816bc351d0c","subtype":"Figure","type":"Plot"}},"id":"a4857add-ffbc-46f5-985f-dd2942a83da4","type":"HelpTool"},{"attributes":{"callback":null},"id":"a249252c-0bc6-4944-8dd5-52bd51eb8035","type":"DataRange1d"},{"attributes":{},"id":"9aeb56f7-3d9e-41dd-858e-b83cd8f4ba6a","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"90383e2f-08e1-497a-95ba-c816bc351d0c","subtype":"Figure","type":"Plot"},"ticker":{"id":"9aeb56f7-3d9e-41dd-858e-b83cd8f4ba6a","type":"BasicTicker"}},"id":"2e8ac4bf-2561-43a6-b5e8-cbde043defe1","type":"Grid"},{"attributes":{},"id":"36fbf011-09ff-4988-94b1-f724a71f6905","type":"ToolEvents"}],"root_ids":["90383e2f-08e1-497a-95ba-c816bc351d0c"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"68584d7a-0ab8-4ba0-abc3-d6223a5a209b","elementid":"8c49c3b4-0b33-4834-8a1e-6c2a77dbe1d2","modelid":"90383e2f-08e1-497a-95ba-c816bc351d0c"}];
          
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