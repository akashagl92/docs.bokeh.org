
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
  };var element = document.getElementById("128a19f7-d561-4da6-8c07-c2fe47216bce");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '128a19f7-d561-4da6-8c07-c2fe47216bce' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"2c29754a-0244-424e-9531-e34192cd1a4f":{"roots":{"references":[{"attributes":{"formatter":{"id":"48b1d6cd-6e48-476c-9feb-f58c29d7af55","type":"BasicTickFormatter"},"plot":{"id":"eb71b76d-215c-467f-8c32-6022406a777b","subtype":"Figure","type":"Plot"},"ticker":{"id":"b4df16f9-e625-4d12-b261-08c13d889429","type":"BasicTicker"}},"id":"e33f96d4-bea9-49b1-94be-8025766f4aca","type":"LinearAxis"},{"attributes":{"plot":{"id":"eb71b76d-215c-467f-8c32-6022406a777b","subtype":"Figure","type":"Plot"}},"id":"2d70f6e3-250d-4e69-b02d-d4217f19fd83","type":"HelpTool"},{"attributes":{},"id":"f4fc3a9f-a6af-4d8b-906a-e95e3afd9e67","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"38b945bd-7ad8-4b34-b1e9-5b9012739d0e","type":"Patches"},{"attributes":{"plot":{"id":"eb71b76d-215c-467f-8c32-6022406a777b","subtype":"Figure","type":"Plot"}},"id":"4e47e01d-29f5-4eab-9170-4adf213d3080","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"eb71b76d-215c-467f-8c32-6022406a777b","subtype":"Figure","type":"Plot"},"ticker":{"id":"a590e420-f2e4-412b-a69b-72fda7624c63","type":"BasicTicker"}},"id":"9668e0e0-2b65-4972-b3de-df27d81e042b","type":"Grid"},{"attributes":{"plot":{"id":"eb71b76d-215c-467f-8c32-6022406a777b","subtype":"Figure","type":"Plot"},"ticker":{"id":"b4df16f9-e625-4d12-b261-08c13d889429","type":"BasicTicker"}},"id":"5eb54032-af42-4f37-b1c8-d24de6563d73","type":"Grid"},{"attributes":{"below":[{"id":"e33f96d4-bea9-49b1-94be-8025766f4aca","type":"LinearAxis"}],"left":[{"id":"b5ef21f9-f2f5-4bcc-a3cb-563746146a38","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e33f96d4-bea9-49b1-94be-8025766f4aca","type":"LinearAxis"},{"id":"5eb54032-af42-4f37-b1c8-d24de6563d73","type":"Grid"},{"id":"b5ef21f9-f2f5-4bcc-a3cb-563746146a38","type":"LinearAxis"},{"id":"9668e0e0-2b65-4972-b3de-df27d81e042b","type":"Grid"},{"id":"987b1f1b-46cb-4219-af0f-5b54e1d71865","type":"BoxAnnotation"},{"id":"72158ed4-6081-44f9-b210-aa1a2a5198f6","type":"GlyphRenderer"}],"tool_events":{"id":"dac9de3f-bc5c-412f-a3ae-ee95a1bc9eb1","type":"ToolEvents"},"tools":[{"id":"4424266e-c030-4098-9ea4-9a0ffeae3789","type":"PanTool"},{"id":"cec599f8-f683-4012-9b0e-085026ef3d4b","type":"WheelZoomTool"},{"id":"8f1ad498-275d-444f-befc-4552fe80dbdb","type":"BoxZoomTool"},{"id":"58323c0b-033d-4175-8f95-3f02db5457c6","type":"PreviewSaveTool"},{"id":"8a184474-c4e6-4a40-98fd-b3085d56a077","type":"ResizeTool"},{"id":"4e47e01d-29f5-4eab-9170-4adf213d3080","type":"ResetTool"},{"id":"2d70f6e3-250d-4e69-b02d-d4217f19fd83","type":"HelpTool"}],"x_range":{"id":"cf76afce-6652-471a-93db-5231f8592ed4","type":"DataRange1d"},"y_range":{"id":"f7d566e5-d528-4230-ae80-5a8ca7c471cc","type":"DataRange1d"}},"id":"eb71b76d-215c-467f-8c32-6022406a777b","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"713907ac-8a0c-49ac-8978-bd959355f258","type":"ColumnDataSource"},"glyph":{"id":"409552d2-71b8-4abc-86df-cd8b75335efe","type":"Patches"},"hover_glyph":null,"nonselection_glyph":{"id":"38b945bd-7ad8-4b34-b1e9-5b9012739d0e","type":"Patches"},"selection_glyph":null},"id":"72158ed4-6081-44f9-b210-aa1a2a5198f6","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"eb71b76d-215c-467f-8c32-6022406a777b","subtype":"Figure","type":"Plot"}},"id":"8a184474-c4e6-4a40-98fd-b3085d56a077","type":"ResizeTool"},{"attributes":{},"id":"48b1d6cd-6e48-476c-9feb-f58c29d7af55","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["ys","xs","line_color","fill_color"],"data":{"fill_color":["#43a2ca","#a8ddb5"],"line_color":["#43a2ca","#a8ddb5"],"xs":[[1,2,3],[4,5,6,5]],"ys":[[1,2,1],[4,5,5,4]]}},"id":"713907ac-8a0c-49ac-8978-bd959355f258","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"eb71b76d-215c-467f-8c32-6022406a777b","subtype":"Figure","type":"Plot"}},"id":"58323c0b-033d-4175-8f95-3f02db5457c6","type":"PreviewSaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"987b1f1b-46cb-4219-af0f-5b54e1d71865","type":"BoxAnnotation"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"409552d2-71b8-4abc-86df-cd8b75335efe","type":"Patches"},{"attributes":{},"id":"b4df16f9-e625-4d12-b261-08c13d889429","type":"BasicTicker"},{"attributes":{"plot":{"id":"eb71b76d-215c-467f-8c32-6022406a777b","subtype":"Figure","type":"Plot"}},"id":"cec599f8-f683-4012-9b0e-085026ef3d4b","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"f4fc3a9f-a6af-4d8b-906a-e95e3afd9e67","type":"BasicTickFormatter"},"plot":{"id":"eb71b76d-215c-467f-8c32-6022406a777b","subtype":"Figure","type":"Plot"},"ticker":{"id":"a590e420-f2e4-412b-a69b-72fda7624c63","type":"BasicTicker"}},"id":"b5ef21f9-f2f5-4bcc-a3cb-563746146a38","type":"LinearAxis"},{"attributes":{},"id":"a590e420-f2e4-412b-a69b-72fda7624c63","type":"BasicTicker"},{"attributes":{"overlay":{"id":"987b1f1b-46cb-4219-af0f-5b54e1d71865","type":"BoxAnnotation"},"plot":{"id":"eb71b76d-215c-467f-8c32-6022406a777b","subtype":"Figure","type":"Plot"}},"id":"8f1ad498-275d-444f-befc-4552fe80dbdb","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"f7d566e5-d528-4230-ae80-5a8ca7c471cc","type":"DataRange1d"},{"attributes":{},"id":"dac9de3f-bc5c-412f-a3ae-ee95a1bc9eb1","type":"ToolEvents"},{"attributes":{"plot":{"id":"eb71b76d-215c-467f-8c32-6022406a777b","subtype":"Figure","type":"Plot"}},"id":"4424266e-c030-4098-9ea4-9a0ffeae3789","type":"PanTool"},{"attributes":{"callback":null},"id":"cf76afce-6652-471a-93db-5231f8592ed4","type":"DataRange1d"}],"root_ids":["eb71b76d-215c-467f-8c32-6022406a777b"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"2c29754a-0244-424e-9531-e34192cd1a4f","elementid":"128a19f7-d561-4da6-8c07-c2fe47216bce","modelid":"eb71b76d-215c-467f-8c32-6022406a777b"}];
          
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