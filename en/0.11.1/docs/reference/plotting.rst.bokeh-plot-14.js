
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
  };var element = document.getElementById("1bb4d806-7dd4-481e-9d36-6c5a81dac957");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '1bb4d806-7dd4-481e-9d36-6c5a81dac957' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"488d40b7-27d6-4cd7-8be8-a705136f501f":{"roots":{"references":[{"attributes":{"plot":{"id":"37d43393-2d55-483c-be68-ecb5bcb70c5f","subtype":"Figure","type":"Plot"}},"id":"a7581424-530b-4589-9e67-8cd53cf301ac","type":"HelpTool"},{"attributes":{},"id":"5f538aee-4f4d-4008-ad6f-d5c86ebc1a69","type":"BasicTicker"},{"attributes":{},"id":"452511ac-8234-4324-a447-af95e14e3546","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"37d43393-2d55-483c-be68-ecb5bcb70c5f","subtype":"Figure","type":"Plot"}},"id":"ede9a19e-1078-40f6-bd13-7f6ebdff804b","type":"PanTool"},{"attributes":{},"id":"47ec6a2b-76ab-4347-8e6f-69fc066c2ea1","type":"BasicTickFormatter"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"47367a5f-78d8-4493-b309-28bbf54bfb06","type":"Quad"},{"attributes":{"plot":{"id":"37d43393-2d55-483c-be68-ecb5bcb70c5f","subtype":"Figure","type":"Plot"}},"id":"890fbac5-6c0d-43eb-a848-4add0b619c9e","type":"ResizeTool"},{"attributes":{"dimension":1,"plot":{"id":"37d43393-2d55-483c-be68-ecb5bcb70c5f","subtype":"Figure","type":"Plot"},"ticker":{"id":"5f538aee-4f4d-4008-ad6f-d5c86ebc1a69","type":"BasicTicker"}},"id":"d9a50d0d-b009-4dd1-a682-fdfe36f640af","type":"Grid"},{"attributes":{"formatter":{"id":"47ec6a2b-76ab-4347-8e6f-69fc066c2ea1","type":"BasicTickFormatter"},"plot":{"id":"37d43393-2d55-483c-be68-ecb5bcb70c5f","subtype":"Figure","type":"Plot"},"ticker":{"id":"5f538aee-4f4d-4008-ad6f-d5c86ebc1a69","type":"BasicTicker"}},"id":"e8444e42-6462-49f7-9213-9dd7cb5ef146","type":"LinearAxis"},{"attributes":{},"id":"9b975296-0849-4d4b-9c34-4a51fb7b1fb6","type":"BasicTicker"},{"attributes":{"overlay":{"id":"77728f7f-bc8b-44a8-a5be-f958439442c5","type":"BoxAnnotation"},"plot":{"id":"37d43393-2d55-483c-be68-ecb5bcb70c5f","subtype":"Figure","type":"Plot"}},"id":"724445ab-1745-406e-94fc-2d511034d3f1","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["top","bottom","left","right"],"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]}},"id":"0126636c-3b7e-46ac-96f4-6880c3d0436e","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"77728f7f-bc8b-44a8-a5be-f958439442c5","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"5ff15e6a-c14e-43e6-931e-0521998ca344","type":"LinearAxis"}],"left":[{"id":"e8444e42-6462-49f7-9213-9dd7cb5ef146","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"5ff15e6a-c14e-43e6-931e-0521998ca344","type":"LinearAxis"},{"id":"5f3bc2d5-9fb3-4342-8f85-3acbd47713d5","type":"Grid"},{"id":"e8444e42-6462-49f7-9213-9dd7cb5ef146","type":"LinearAxis"},{"id":"d9a50d0d-b009-4dd1-a682-fdfe36f640af","type":"Grid"},{"id":"77728f7f-bc8b-44a8-a5be-f958439442c5","type":"BoxAnnotation"},{"id":"e34472cd-fbf3-4a73-8dc4-010fbff7e435","type":"GlyphRenderer"}],"tool_events":{"id":"3f82c509-0014-4604-ba57-7d02aa419dfe","type":"ToolEvents"},"tools":[{"id":"ede9a19e-1078-40f6-bd13-7f6ebdff804b","type":"PanTool"},{"id":"cec2b076-64ee-4f2a-a094-23e1df9d0ae2","type":"WheelZoomTool"},{"id":"724445ab-1745-406e-94fc-2d511034d3f1","type":"BoxZoomTool"},{"id":"a94b98c8-136c-4a14-b6a8-c4eecf4c41c5","type":"PreviewSaveTool"},{"id":"890fbac5-6c0d-43eb-a848-4add0b619c9e","type":"ResizeTool"},{"id":"e99fc704-9344-4b76-84cd-4439909489e7","type":"ResetTool"},{"id":"a7581424-530b-4589-9e67-8cd53cf301ac","type":"HelpTool"}],"x_range":{"id":"5f214fa4-0572-42c6-b707-8207734b01d8","type":"DataRange1d"},"y_range":{"id":"cef12802-11c0-42ed-bcea-86ef91c2c17a","type":"DataRange1d"}},"id":"37d43393-2d55-483c-be68-ecb5bcb70c5f","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"37d43393-2d55-483c-be68-ecb5bcb70c5f","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b975296-0849-4d4b-9c34-4a51fb7b1fb6","type":"BasicTicker"}},"id":"5f3bc2d5-9fb3-4342-8f85-3acbd47713d5","type":"Grid"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"5920a598-d3a1-4206-89a3-71257d23f5ee","type":"Quad"},{"attributes":{"formatter":{"id":"452511ac-8234-4324-a447-af95e14e3546","type":"BasicTickFormatter"},"plot":{"id":"37d43393-2d55-483c-be68-ecb5bcb70c5f","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b975296-0849-4d4b-9c34-4a51fb7b1fb6","type":"BasicTicker"}},"id":"5ff15e6a-c14e-43e6-931e-0521998ca344","type":"LinearAxis"},{"attributes":{"callback":null},"id":"cef12802-11c0-42ed-bcea-86ef91c2c17a","type":"DataRange1d"},{"attributes":{"plot":{"id":"37d43393-2d55-483c-be68-ecb5bcb70c5f","subtype":"Figure","type":"Plot"}},"id":"cec2b076-64ee-4f2a-a094-23e1df9d0ae2","type":"WheelZoomTool"},{"attributes":{},"id":"3f82c509-0014-4604-ba57-7d02aa419dfe","type":"ToolEvents"},{"attributes":{"plot":{"id":"37d43393-2d55-483c-be68-ecb5bcb70c5f","subtype":"Figure","type":"Plot"}},"id":"e99fc704-9344-4b76-84cd-4439909489e7","type":"ResetTool"},{"attributes":{"callback":null},"id":"5f214fa4-0572-42c6-b707-8207734b01d8","type":"DataRange1d"},{"attributes":{"data_source":{"id":"0126636c-3b7e-46ac-96f4-6880c3d0436e","type":"ColumnDataSource"},"glyph":{"id":"5920a598-d3a1-4206-89a3-71257d23f5ee","type":"Quad"},"hover_glyph":null,"nonselection_glyph":{"id":"47367a5f-78d8-4493-b309-28bbf54bfb06","type":"Quad"},"selection_glyph":null},"id":"e34472cd-fbf3-4a73-8dc4-010fbff7e435","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"37d43393-2d55-483c-be68-ecb5bcb70c5f","subtype":"Figure","type":"Plot"}},"id":"a94b98c8-136c-4a14-b6a8-c4eecf4c41c5","type":"PreviewSaveTool"}],"root_ids":["37d43393-2d55-483c-be68-ecb5bcb70c5f"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"488d40b7-27d6-4cd7-8be8-a705136f501f","elementid":"1bb4d806-7dd4-481e-9d36-6c5a81dac957","modelid":"37d43393-2d55-483c-be68-ecb5bcb70c5f"}];
          
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