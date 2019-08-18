
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
  };var element = document.getElementById("fac7d1fd-28b3-4c8c-b0be-4a9e4d3ef2fa");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'fac7d1fd-28b3-4c8c-b0be-4a9e4d3ef2fa' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"0d0d570d-d8e3-44fa-ae45-2134728b2bd9":{"roots":{"references":[{"attributes":{"callback":null},"id":"ac86f20d-0e34-490b-87f8-f5ab7d4fffd2","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x","line_color","fill_color"],"data":{"fill_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"line_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"x":[1.4,1.4,1.3,1.5,1.4,1.7,1.4,1.5,1.4,1.5,1.5,1.6,1.4,1.1,1.2,1.5,1.3,1.4,1.7,1.5,1.7,1.5,1.0,1.7,1.9,1.6,1.6,1.5,1.4,1.6,1.6,1.5,1.5,1.4,1.5,1.2,1.3,1.4,1.3,1.5,1.3,1.3,1.3,1.6,1.9,1.4,1.6,1.4,1.5,1.4,4.7,4.5,4.9,4.0,4.6,4.5,4.7,3.3,4.6,3.9,3.5,4.2,4.0,4.7,3.6,4.4,4.5,4.1,4.5,3.9,4.8,4.0,4.9,4.7,4.3,4.4,4.8,5.0,4.5,3.5,3.8,3.7,3.9,5.1,4.5,4.5,4.7,4.4,4.1,4.0,4.4,4.6,4.0,3.3,4.2,4.2,4.2,4.3,3.0,4.1,6.0,5.1,5.9,5.6,5.8,6.6,4.5,6.3,5.8,6.1,5.1,5.3,5.5,5.0,5.1,5.3,5.5,6.7,6.9,5.0,5.7,4.9,6.7,4.9,5.7,6.0,4.8,4.9,5.6,5.8,6.1,6.4,5.6,5.1,5.6,6.1,5.6,5.5,4.8,5.4,5.6,5.1,5.1,5.9,5.7,5.2,5.0,5.2,5.4,5.1],"y":[0.2,0.2,0.2,0.2,0.2,0.4,0.3,0.2,0.2,0.1,0.2,0.2,0.1,0.1,0.2,0.4,0.4,0.3,0.3,0.3,0.2,0.4,0.2,0.5,0.2,0.2,0.4,0.2,0.2,0.2,0.2,0.4,0.1,0.2,0.2,0.2,0.2,0.1,0.2,0.2,0.3,0.3,0.2,0.6,0.4,0.3,0.2,0.2,0.2,0.2,1.4,1.5,1.5,1.3,1.5,1.3,1.6,1.0,1.3,1.4,1.0,1.5,1.0,1.4,1.3,1.4,1.5,1.0,1.5,1.1,1.8,1.3,1.5,1.2,1.3,1.4,1.4,1.7,1.5,1.0,1.1,1.0,1.2,1.6,1.5,1.6,1.5,1.3,1.3,1.3,1.2,1.4,1.2,1.0,1.3,1.2,1.3,1.3,1.1,1.3,2.5,1.9,2.1,1.8,2.2,2.1,1.7,1.8,1.8,2.5,2.0,1.9,2.1,2.0,2.4,2.3,1.8,2.2,2.3,1.5,2.3,2.0,2.0,1.8,2.1,1.8,1.8,1.8,2.1,1.6,1.9,2.0,2.2,1.5,1.4,2.3,2.4,1.8,1.8,2.1,2.4,2.3,1.9,2.3,2.5,2.3,1.9,2.0,2.3,1.8]}},"id":"8dd12d1f-90e9-4d1b-8e5d-368bea9c7ea7","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f8e09617-17db-47cd-90ef-19c4bd97a903","type":"Circle"},{"attributes":{"plot":{"id":"00b1d55a-aaf3-43c2-9dd0-255ae5d92603","subtype":"Figure","type":"Plot"}},"id":"2e12c851-ffc5-47fe-aa1d-c5a41a3f6eca","type":"WheelZoomTool"},{"attributes":{"axis_label":"Petal Length","formatter":{"id":"f546db16-f01d-41ab-998b-7c776d2043b4","type":"BasicTickFormatter"},"plot":{"id":"00b1d55a-aaf3-43c2-9dd0-255ae5d92603","subtype":"Figure","type":"Plot"},"ticker":{"id":"1dbebe1f-ab25-4e73-9b8a-95f8376e34d1","type":"BasicTicker"}},"id":"f914bb0e-c484-4a3c-ac71-274d5a762bb5","type":"LinearAxis"},{"attributes":{},"id":"1dbebe1f-ab25-4e73-9b8a-95f8376e34d1","type":"BasicTicker"},{"attributes":{"axis_label":"Petal Width","formatter":{"id":"a8f1cc51-5c27-4877-b905-f41b47b1b9a4","type":"BasicTickFormatter"},"plot":{"id":"00b1d55a-aaf3-43c2-9dd0-255ae5d92603","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8974a40-9ee7-4266-b5be-21aaed0c686f","type":"BasicTicker"}},"id":"9bf94449-9060-4273-87d1-51ffdb2ba263","type":"LinearAxis"},{"attributes":{"plot":{"id":"00b1d55a-aaf3-43c2-9dd0-255ae5d92603","subtype":"Figure","type":"Plot"}},"id":"2b07f9ad-968a-4237-b572-544578522644","type":"PreviewSaveTool"},{"attributes":{"callback":null},"id":"8db1b4dd-3380-4a7f-b0dc-47e415a026ba","type":"DataRange1d"},{"attributes":{"plot":{"id":"00b1d55a-aaf3-43c2-9dd0-255ae5d92603","subtype":"Figure","type":"Plot"}},"id":"15e629a2-86ee-470c-a8a9-19e12d684503","type":"ResetTool"},{"attributes":{},"id":"f546db16-f01d-41ab-998b-7c776d2043b4","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"f914bb0e-c484-4a3c-ac71-274d5a762bb5","type":"LinearAxis"}],"left":[{"id":"9bf94449-9060-4273-87d1-51ffdb2ba263","type":"LinearAxis"}],"renderers":[{"id":"f914bb0e-c484-4a3c-ac71-274d5a762bb5","type":"LinearAxis"},{"id":"881e8fd9-774a-4256-a67d-0adc476b1ed2","type":"Grid"},{"id":"9bf94449-9060-4273-87d1-51ffdb2ba263","type":"LinearAxis"},{"id":"db7f78c3-cabb-408f-a4a2-96c1e0118883","type":"Grid"},{"id":"2f657069-2829-429d-8f6a-ea560c637617","type":"BoxAnnotation"},{"id":"c32c7a79-c0cc-4e25-8901-4b9b945864cf","type":"GlyphRenderer"}],"title":"Iris Morphology","tool_events":{"id":"aa927420-7717-480b-9f6a-a9f3d7411825","type":"ToolEvents"},"tools":[{"id":"154cf822-c79e-4b38-855e-2c735aac6e90","type":"PanTool"},{"id":"2e12c851-ffc5-47fe-aa1d-c5a41a3f6eca","type":"WheelZoomTool"},{"id":"d0b67b20-01c8-41e9-9dd5-8ae772eb4966","type":"BoxZoomTool"},{"id":"2b07f9ad-968a-4237-b572-544578522644","type":"PreviewSaveTool"},{"id":"c3db8659-27e7-48aa-b9ab-9abf512fb924","type":"ResizeTool"},{"id":"15e629a2-86ee-470c-a8a9-19e12d684503","type":"ResetTool"},{"id":"2b790285-fcff-43cc-ad71-6921a31f88d8","type":"HelpTool"}],"x_range":{"id":"ac86f20d-0e34-490b-87f8-f5ab7d4fffd2","type":"DataRange1d"},"y_range":{"id":"8db1b4dd-3380-4a7f-b0dc-47e415a026ba","type":"DataRange1d"}},"id":"00b1d55a-aaf3-43c2-9dd0-255ae5d92603","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b6fdb348-0098-4b99-b406-3358711dc79b","type":"Circle"},{"attributes":{},"id":"aa927420-7717-480b-9f6a-a9f3d7411825","type":"ToolEvents"},{"attributes":{"plot":{"id":"00b1d55a-aaf3-43c2-9dd0-255ae5d92603","subtype":"Figure","type":"Plot"}},"id":"2b790285-fcff-43cc-ad71-6921a31f88d8","type":"HelpTool"},{"attributes":{"plot":{"id":"00b1d55a-aaf3-43c2-9dd0-255ae5d92603","subtype":"Figure","type":"Plot"}},"id":"c3db8659-27e7-48aa-b9ab-9abf512fb924","type":"ResizeTool"},{"attributes":{},"id":"d8974a40-9ee7-4266-b5be-21aaed0c686f","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2f657069-2829-429d-8f6a-ea560c637617","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"2f657069-2829-429d-8f6a-ea560c637617","type":"BoxAnnotation"},"plot":{"id":"00b1d55a-aaf3-43c2-9dd0-255ae5d92603","subtype":"Figure","type":"Plot"}},"id":"d0b67b20-01c8-41e9-9dd5-8ae772eb4966","type":"BoxZoomTool"},{"attributes":{},"id":"a8f1cc51-5c27-4877-b905-f41b47b1b9a4","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"00b1d55a-aaf3-43c2-9dd0-255ae5d92603","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8974a40-9ee7-4266-b5be-21aaed0c686f","type":"BasicTicker"}},"id":"db7f78c3-cabb-408f-a4a2-96c1e0118883","type":"Grid"},{"attributes":{"plot":{"id":"00b1d55a-aaf3-43c2-9dd0-255ae5d92603","subtype":"Figure","type":"Plot"},"ticker":{"id":"1dbebe1f-ab25-4e73-9b8a-95f8376e34d1","type":"BasicTicker"}},"id":"881e8fd9-774a-4256-a67d-0adc476b1ed2","type":"Grid"},{"attributes":{"plot":{"id":"00b1d55a-aaf3-43c2-9dd0-255ae5d92603","subtype":"Figure","type":"Plot"}},"id":"154cf822-c79e-4b38-855e-2c735aac6e90","type":"PanTool"},{"attributes":{"data_source":{"id":"8dd12d1f-90e9-4d1b-8e5d-368bea9c7ea7","type":"ColumnDataSource"},"glyph":{"id":"b6fdb348-0098-4b99-b406-3358711dc79b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"f8e09617-17db-47cd-90ef-19c4bd97a903","type":"Circle"},"selection_glyph":null},"id":"c32c7a79-c0cc-4e25-8901-4b9b945864cf","type":"GlyphRenderer"}],"root_ids":["00b1d55a-aaf3-43c2-9dd0-255ae5d92603"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"0d0d570d-d8e3-44fa-ae45-2134728b2bd9","elementid":"fac7d1fd-28b3-4c8c-b0be-4a9e4d3ef2fa","modelid":"00b1d55a-aaf3-43c2-9dd0-255ae5d92603"}];
          
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