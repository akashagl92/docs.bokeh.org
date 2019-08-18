
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
  };var element = document.getElementById("8afa677d-875d-479e-ad2e-446cfcf96e64");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '8afa677d-875d-479e-ad2e-446cfcf96e64' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"18586ded-74ea-442c-8e2a-64cb79916ca1":{"roots":{"references":[{"attributes":{"plot":{"id":"38c9b223-393e-4d30-a672-1a5422b51915","subtype":"Figure","type":"Plot"}},"id":"b135a6a8-c8f7-46b1-a4c1-077e64605d43","type":"PreviewSaveTool"},{"attributes":{},"id":"30ffceab-40be-4d4e-9b6d-243055cfe415","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"38c9b223-393e-4d30-a672-1a5422b51915","subtype":"Figure","type":"Plot"},"ticker":{"id":"30ffceab-40be-4d4e-9b6d-243055cfe415","type":"BasicTicker"}},"id":"9f935e25-7f14-4fd6-8eb6-367324631706","type":"Grid"},{"attributes":{"below":[{"id":"83a2a6c1-6900-49fa-9c61-b5c533361382","type":"LinearAxis"}],"left":[{"id":"e2a940c9-6a68-442e-8450-47a26677ebd3","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"83a2a6c1-6900-49fa-9c61-b5c533361382","type":"LinearAxis"},{"id":"84ed723c-7d4a-4cea-a1df-3483a553eac1","type":"Grid"},{"id":"e2a940c9-6a68-442e-8450-47a26677ebd3","type":"LinearAxis"},{"id":"9f935e25-7f14-4fd6-8eb6-367324631706","type":"Grid"},{"id":"14bfd86b-2bb4-435d-affa-5f675e4f8567","type":"BoxAnnotation"},{"id":"a97c6134-1504-44fb-8385-1eca62204b84","type":"GlyphRenderer"}],"tool_events":{"id":"1968e957-acd0-4a7b-aef5-7e8d4779e3e8","type":"ToolEvents"},"tools":[{"id":"61145d5a-8773-46c3-aba4-1eb538bc9205","type":"PanTool"},{"id":"1942cbd7-3f4c-4b8f-a6e4-c2556a04e42f","type":"WheelZoomTool"},{"id":"afdfff2d-5ef8-4a9f-a7cc-df88876afb85","type":"BoxZoomTool"},{"id":"b135a6a8-c8f7-46b1-a4c1-077e64605d43","type":"PreviewSaveTool"},{"id":"7f38db15-d2e1-4e29-ac6b-b743e09493d8","type":"ResizeTool"},{"id":"5968572f-8147-4da7-99ba-cdeba328c21b","type":"ResetTool"},{"id":"7ecd23c8-e2ee-41c6-87d4-7dbcc3b75470","type":"HelpTool"}],"x_range":{"id":"0f4de926-b1e6-4784-9d6c-5e4f97b43e55","type":"DataRange1d"},"y_range":{"id":"57da31fb-a388-4be6-a043-aa9a3b9d7576","type":"DataRange1d"}},"id":"38c9b223-393e-4d30-a672-1a5422b51915","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1968e957-acd0-4a7b-aef5-7e8d4779e3e8","type":"ToolEvents"},{"attributes":{"plot":{"id":"38c9b223-393e-4d30-a672-1a5422b51915","subtype":"Figure","type":"Plot"}},"id":"61145d5a-8773-46c3-aba4-1eb538bc9205","type":"PanTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"bb27d05a-309a-4db4-af07-78d6386a52af","type":"Line"},{"attributes":{"plot":{"id":"38c9b223-393e-4d30-a672-1a5422b51915","subtype":"Figure","type":"Plot"}},"id":"1942cbd7-3f4c-4b8f-a6e4-c2556a04e42f","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"38c9b223-393e-4d30-a672-1a5422b51915","subtype":"Figure","type":"Plot"}},"id":"7f38db15-d2e1-4e29-ac6b-b743e09493d8","type":"ResizeTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14bfd86b-2bb4-435d-affa-5f675e4f8567","type":"BoxAnnotation"},{"attributes":{},"id":"11197450-10a3-4af4-8bc9-d32816b7eb92","type":"BasicTickFormatter"},{"attributes":{},"id":"f6be671b-981f-4946-9422-a300caaaaec5","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"38c9b223-393e-4d30-a672-1a5422b51915","subtype":"Figure","type":"Plot"}},"id":"7ecd23c8-e2ee-41c6-87d4-7dbcc3b75470","type":"HelpTool"},{"attributes":{"plot":{"id":"38c9b223-393e-4d30-a672-1a5422b51915","subtype":"Figure","type":"Plot"},"ticker":{"id":"b5aef21a-fcb0-478b-9b8a-88437b47a3d0","type":"BasicTicker"}},"id":"84ed723c-7d4a-4cea-a1df-3483a553eac1","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]}},"id":"9f0b12f6-5db3-4158-aa8c-f6a479e518c5","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"11197450-10a3-4af4-8bc9-d32816b7eb92","type":"BasicTickFormatter"},"plot":{"id":"38c9b223-393e-4d30-a672-1a5422b51915","subtype":"Figure","type":"Plot"},"ticker":{"id":"30ffceab-40be-4d4e-9b6d-243055cfe415","type":"BasicTicker"}},"id":"e2a940c9-6a68-442e-8450-47a26677ebd3","type":"LinearAxis"},{"attributes":{"children":[{"id":"f8ce04ae-a747-45ab-b353-1399a74c71cc","type":"Slider"},{"id":"38c9b223-393e-4d30-a672-1a5422b51915","subtype":"Figure","type":"Plot"}]},"id":"b84bea57-a0ad-44ba-8f6a-453439070ac1","type":"VBoxForm"},{"attributes":{"args":{"source":{"id":"9f0b12f6-5db3-4158-aa8c-f6a479e518c5","type":"ColumnDataSource"}},"code":"\n        var data = source.get('data');\n        var f = cb_obj.get('value')\n        x = data['x']\n        y = data['y']\n        for (i = 0; i < x.length; i++) {\n            y[i] = Math.pow(x[i], f)\n        }\n        source.trigger('change');\n    "},"id":"0adbde45-d3fc-420a-ba51-390a88f12fa7","type":"CustomJS"},{"attributes":{"data_source":{"id":"9f0b12f6-5db3-4158-aa8c-f6a479e518c5","type":"ColumnDataSource"},"glyph":{"id":"33e1d337-4950-4605-87af-29c1c90743ce","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"bb27d05a-309a-4db4-af07-78d6386a52af","type":"Line"},"selection_glyph":null},"id":"a97c6134-1504-44fb-8385-1eca62204b84","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"33e1d337-4950-4605-87af-29c1c90743ce","type":"Line"},{"attributes":{"formatter":{"id":"f6be671b-981f-4946-9422-a300caaaaec5","type":"BasicTickFormatter"},"plot":{"id":"38c9b223-393e-4d30-a672-1a5422b51915","subtype":"Figure","type":"Plot"},"ticker":{"id":"b5aef21a-fcb0-478b-9b8a-88437b47a3d0","type":"BasicTicker"}},"id":"83a2a6c1-6900-49fa-9c61-b5c533361382","type":"LinearAxis"},{"attributes":{"plot":{"id":"38c9b223-393e-4d30-a672-1a5422b51915","subtype":"Figure","type":"Plot"}},"id":"5968572f-8147-4da7-99ba-cdeba328c21b","type":"ResetTool"},{"attributes":{"overlay":{"id":"14bfd86b-2bb4-435d-affa-5f675e4f8567","type":"BoxAnnotation"},"plot":{"id":"38c9b223-393e-4d30-a672-1a5422b51915","subtype":"Figure","type":"Plot"}},"id":"afdfff2d-5ef8-4a9f-a7cc-df88876afb85","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"0f4de926-b1e6-4784-9d6c-5e4f97b43e55","type":"DataRange1d"},{"attributes":{"callback":{"id":"0adbde45-d3fc-420a-ba51-390a88f12fa7","type":"CustomJS"},"end":4,"start":0.1,"title":"power","value":1},"id":"f8ce04ae-a747-45ab-b353-1399a74c71cc","type":"Slider"},{"attributes":{"callback":null},"id":"57da31fb-a388-4be6-a043-aa9a3b9d7576","type":"DataRange1d"},{"attributes":{},"id":"b5aef21a-fcb0-478b-9b8a-88437b47a3d0","type":"BasicTicker"}],"root_ids":["b84bea57-a0ad-44ba-8f6a-453439070ac1"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"18586ded-74ea-442c-8e2a-64cb79916ca1","elementid":"8afa677d-875d-479e-ad2e-446cfcf96e64","modelid":"b84bea57-a0ad-44ba-8f6a-453439070ac1"}];
          
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