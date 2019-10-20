
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
  };var element = document.getElementById("7052b1ee-4285-431c-96e5-3e844c0c3a2e");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '7052b1ee-4285-431c-96e5-3e844c0c3a2e' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"3928b74c-d5b7-42b5-ad99-5df5ecc2d236":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"49ec2b5f-cf07-445c-8e88-91c8a1cda290","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f52a7f93-cb47-4fb0-948a-dbfe1eef74eb","type":"Circle"},{"attributes":{"plot":{"id":"f1c28560-4c12-40d3-9448-8da5c1f7b50b","subtype":"Figure","type":"Plot"}},"id":"251720d2-9b34-4e29-975e-689751a7e5b1","type":"WheelZoomTool"},{"attributes":{},"id":"10923b08-9da2-4420-a44f-45ab45233a17","type":"BasicTicker"},{"attributes":{"callback":null},"id":"2cf92d3d-7826-4153-b2b4-8381ef4e684c","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"de85d22b-6813-4325-820e-393a492a53b1","type":"Circle"},{"attributes":{"plot":{"id":"f1c28560-4c12-40d3-9448-8da5c1f7b50b","subtype":"Figure","type":"Plot"}},"id":"f1fcf078-d493-41e3-87af-52142f61e082","type":"PanTool"},{"attributes":{"plot":{"id":"f1c28560-4c12-40d3-9448-8da5c1f7b50b","subtype":"Figure","type":"Plot"}},"id":"5bd078ba-71c1-4c55-8a2f-5f68764c3f60","type":"HelpTool"},{"attributes":{},"id":"7f73a156-a7c2-4c7b-a665-7c8d73ac1a79","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"f1c28560-4c12-40d3-9448-8da5c1f7b50b","subtype":"Figure","type":"Plot"}},"id":"14c41e83-178f-4987-8a78-30b7e2b1b6a5","type":"ResizeTool"},{"attributes":{"callback":null},"id":"7f579d06-a290-4576-9bc8-19a9b8ac301d","type":"DataRange1d"},{"attributes":{"axis_label":"Lot Number","axis_label_standoff":30,"axis_label_text_color":{"value":"#aa6666"},"formatter":{"id":"c398e3f6-1feb-434d-bee1-197fb0c9fbd5","type":"BasicTickFormatter"},"plot":{"id":"f1c28560-4c12-40d3-9448-8da5c1f7b50b","subtype":"Figure","type":"Plot"},"ticker":{"id":"10923b08-9da2-4420-a44f-45ab45233a17","type":"BasicTicker"}},"id":"93f2494e-77fc-47cf-8963-d9d5d917e381","type":"LinearAxis"},{"attributes":{"overlay":{"id":"49ec2b5f-cf07-445c-8e88-91c8a1cda290","type":"BoxAnnotation"},"plot":{"id":"f1c28560-4c12-40d3-9448-8da5c1f7b50b","subtype":"Figure","type":"Plot"}},"id":"f980b3ce-8342-408b-a9c5-5b94def2f722","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"f1c28560-4c12-40d3-9448-8da5c1f7b50b","subtype":"Figure","type":"Plot"},"ticker":{"id":"1310ef96-e444-498b-829c-210ce5ef9ce8","type":"BasicTicker"}},"id":"c9d71d72-0fa6-4145-ade4-5f7ebaa6d314","type":"Grid"},{"attributes":{"plot":{"id":"f1c28560-4c12-40d3-9448-8da5c1f7b50b","subtype":"Figure","type":"Plot"}},"id":"bf291a82-27c3-4a4c-907c-450ca152a3ab","type":"ResetTool"},{"attributes":{"plot":{"id":"f1c28560-4c12-40d3-9448-8da5c1f7b50b","subtype":"Figure","type":"Plot"},"ticker":{"id":"10923b08-9da2-4420-a44f-45ab45233a17","type":"BasicTicker"}},"id":"de085cc7-01fa-4c0a-a491-ef1bf5984387","type":"Grid"},{"attributes":{"data_source":{"id":"ca209e5b-de51-45fe-a3a5-c79d42873f6f","type":"ColumnDataSource"},"glyph":{"id":"de85d22b-6813-4325-820e-393a492a53b1","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"f52a7f93-cb47-4fb0-948a-dbfe1eef74eb","type":"Circle"},"selection_glyph":null},"id":"691f0675-13ac-4407-8be2-662e971b97d3","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"f1c28560-4c12-40d3-9448-8da5c1f7b50b","subtype":"Figure","type":"Plot"}},"id":"35403670-f917-4d49-94a4-a96816e9e7e3","type":"PreviewSaveTool"},{"attributes":{"below":[{"id":"93f2494e-77fc-47cf-8963-d9d5d917e381","type":"LinearAxis"}],"left":[{"id":"96eb1ebb-312d-4211-8c14-85d8a444d885","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"93f2494e-77fc-47cf-8963-d9d5d917e381","type":"LinearAxis"},{"id":"de085cc7-01fa-4c0a-a491-ef1bf5984387","type":"Grid"},{"id":"96eb1ebb-312d-4211-8c14-85d8a444d885","type":"LinearAxis"},{"id":"c9d71d72-0fa6-4145-ade4-5f7ebaa6d314","type":"Grid"},{"id":"49ec2b5f-cf07-445c-8e88-91c8a1cda290","type":"BoxAnnotation"},{"id":"691f0675-13ac-4407-8be2-662e971b97d3","type":"GlyphRenderer"}],"tool_events":{"id":"2e1efe9f-c86c-400e-9468-990fc6de9cb8","type":"ToolEvents"},"tools":[{"id":"f1fcf078-d493-41e3-87af-52142f61e082","type":"PanTool"},{"id":"251720d2-9b34-4e29-975e-689751a7e5b1","type":"WheelZoomTool"},{"id":"f980b3ce-8342-408b-a9c5-5b94def2f722","type":"BoxZoomTool"},{"id":"35403670-f917-4d49-94a4-a96816e9e7e3","type":"PreviewSaveTool"},{"id":"14c41e83-178f-4987-8a78-30b7e2b1b6a5","type":"ResizeTool"},{"id":"bf291a82-27c3-4a4c-907c-450ca152a3ab","type":"ResetTool"},{"id":"5bd078ba-71c1-4c55-8a2f-5f68764c3f60","type":"HelpTool"}],"x_range":{"id":"2cf92d3d-7826-4153-b2b4-8381ef4e684c","type":"DataRange1d"},"y_range":{"id":"7f579d06-a290-4576-9bc8-19a9b8ac301d","type":"DataRange1d"}},"id":"f1c28560-4c12-40d3-9448-8da5c1f7b50b","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"ca209e5b-de51-45fe-a3a5-c79d42873f6f","type":"ColumnDataSource"},{"attributes":{},"id":"1310ef96-e444-498b-829c-210ce5ef9ce8","type":"BasicTicker"},{"attributes":{},"id":"c398e3f6-1feb-434d-bee1-197fb0c9fbd5","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Bin Count","axis_label_text_font_style":"italic","formatter":{"id":"7f73a156-a7c2-4c7b-a665-7c8d73ac1a79","type":"BasicTickFormatter"},"plot":{"id":"f1c28560-4c12-40d3-9448-8da5c1f7b50b","subtype":"Figure","type":"Plot"},"ticker":{"id":"1310ef96-e444-498b-829c-210ce5ef9ce8","type":"BasicTicker"}},"id":"96eb1ebb-312d-4211-8c14-85d8a444d885","type":"LinearAxis"},{"attributes":{},"id":"2e1efe9f-c86c-400e-9468-990fc6de9cb8","type":"ToolEvents"}],"root_ids":["f1c28560-4c12-40d3-9448-8da5c1f7b50b"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"3928b74c-d5b7-42b5-ad99-5df5ecc2d236","elementid":"7052b1ee-4285-431c-96e5-3e844c0c3a2e","modelid":"f1c28560-4c12-40d3-9448-8da5c1f7b50b"}];
          
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