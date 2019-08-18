document.addEventListener("DOMContentLoaded", function(event) {
    
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
      };var element = document.getElementById("6b0ab37e-7a4f-42b5-82a1-15ef948d4b2b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6b0ab37e-7a4f-42b5-82a1-15ef948d4b2b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"3be08886-b984-4f95-bc2c-6b532456857e":{"roots":{"references":[{"attributes":{"plot":{"id":"a70afc42-3cbb-434f-bf22-5ce008b16a8d","subtype":"Figure","type":"Plot"}},"id":"f5355a55-4658-436e-b6dc-2dee2f545432","type":"ResetTool"},{"attributes":{"below":[{"id":"6f0f3ce2-0b13-4423-9491-bcfb32ed236c","type":"LinearAxis"}],"left":[{"id":"15b17b23-43c8-4b65-9b7d-7b5b764dd2c9","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"6f0f3ce2-0b13-4423-9491-bcfb32ed236c","type":"LinearAxis"},{"id":"73bb02c5-4b0f-4ddd-b284-e5ad720e8561","type":"Grid"},{"id":"15b17b23-43c8-4b65-9b7d-7b5b764dd2c9","type":"LinearAxis"},{"id":"817ed627-0714-4dbd-abb7-70c0ed651e27","type":"Grid"},{"id":"e41abf77-29fe-4183-8b0e-8a77bd134098","type":"BoxAnnotation"},{"id":"0959bd76-bd1a-4198-b327-a6606e49d904","type":"GlyphRenderer"}],"title":{"id":"ef21d7e0-a092-4705-b7f5-edb9ba24610c","type":"Title"},"tool_events":{"id":"1d281589-484a-4f8c-9ff6-554bfd0b453f","type":"ToolEvents"},"toolbar":{"id":"98d9b018-a777-4b0c-9d2f-4579b9d6a29d","type":"Toolbar"},"x_range":{"id":"e5a151a0-c45d-476c-8ae4-b702fa67c6fb","type":"DataRange1d"},"y_range":{"id":"38ef4ab3-60ed-4b05-93ea-7ba3f7c90f2f","type":"DataRange1d"}},"id":"a70afc42-3cbb-434f-bf22-5ce008b16a8d","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#FDAE6B"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"899cf927-4ef7-44ea-912d-6a18dd140d6b","type":"SquareX"},{"attributes":{"dimension":1,"plot":{"id":"a70afc42-3cbb-434f-bf22-5ce008b16a8d","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbc20201-eaf9-4bd9-a62c-c0da6ff4adb2","type":"BasicTicker"}},"id":"817ed627-0714-4dbd-abb7-70c0ed651e27","type":"Grid"},{"attributes":{"callback":null},"id":"38ef4ab3-60ed-4b05-93ea-7ba3f7c90f2f","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2c3716cc-e6dd-4cd3-9616-fd466739035c","type":"PanTool"},{"id":"6ba9daa3-4fad-41fe-8563-7ec807e3dd1e","type":"WheelZoomTool"},{"id":"8b0ec5b0-c56d-4972-8e94-73bbdfd0c949","type":"BoxZoomTool"},{"id":"e1c41bbe-0795-478f-9ef3-b6d73d8675d9","type":"SaveTool"},{"id":"f5355a55-4658-436e-b6dc-2dee2f545432","type":"ResetTool"},{"id":"d4f7c360-86fa-431e-aa4a-319b99eda4b8","type":"HelpTool"}]},"id":"98d9b018-a777-4b0c-9d2f-4579b9d6a29d","type":"Toolbar"},{"attributes":{"plot":{"id":"a70afc42-3cbb-434f-bf22-5ce008b16a8d","subtype":"Figure","type":"Plot"}},"id":"d4f7c360-86fa-431e-aa4a-319b99eda4b8","type":"HelpTool"},{"attributes":{},"id":"1d281589-484a-4f8c-9ff6-554bfd0b453f","type":"ToolEvents"},{"attributes":{},"id":"13bce2b3-b4cc-4c53-b675-0e3dfca850a2","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"52c2c4e3-5ec3-4b08-a77a-c798c639ff87","type":"BasicTickFormatter"},"plot":{"id":"a70afc42-3cbb-434f-bf22-5ce008b16a8d","subtype":"Figure","type":"Plot"},"ticker":{"id":"e0523a88-4f61-417f-9af8-5f18e3ab17c6","type":"BasicTicker"}},"id":"6f0f3ce2-0b13-4423-9491-bcfb32ed236c","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"ef21d7e0-a092-4705-b7f5-edb9ba24610c","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"270e7521-88a0-4d34-b580-a8a4a407e4a5","type":"SquareX"},{"attributes":{"plot":{"id":"a70afc42-3cbb-434f-bf22-5ce008b16a8d","subtype":"Figure","type":"Plot"}},"id":"2c3716cc-e6dd-4cd3-9616-fd466739035c","type":"PanTool"},{"attributes":{"plot":{"id":"a70afc42-3cbb-434f-bf22-5ce008b16a8d","subtype":"Figure","type":"Plot"}},"id":"e1c41bbe-0795-478f-9ef3-b6d73d8675d9","type":"SaveTool"},{"attributes":{},"id":"bbc20201-eaf9-4bd9-a62c-c0da6ff4adb2","type":"BasicTicker"},{"attributes":{"plot":{"id":"a70afc42-3cbb-434f-bf22-5ce008b16a8d","subtype":"Figure","type":"Plot"}},"id":"6ba9daa3-4fad-41fe-8563-7ec807e3dd1e","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"5cc8cf9c-14fe-4478-8647-28c267f99d87","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"e5a151a0-c45d-476c-8ae4-b702fa67c6fb","type":"DataRange1d"},{"attributes":{},"id":"e0523a88-4f61-417f-9af8-5f18e3ab17c6","type":"BasicTicker"},{"attributes":{"data_source":{"id":"5cc8cf9c-14fe-4478-8647-28c267f99d87","type":"ColumnDataSource"},"glyph":{"id":"899cf927-4ef7-44ea-912d-6a18dd140d6b","type":"SquareX"},"hover_glyph":null,"nonselection_glyph":{"id":"270e7521-88a0-4d34-b580-a8a4a407e4a5","type":"SquareX"},"selection_glyph":null},"id":"0959bd76-bd1a-4198-b327-a6606e49d904","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e41abf77-29fe-4183-8b0e-8a77bd134098","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"e41abf77-29fe-4183-8b0e-8a77bd134098","type":"BoxAnnotation"},"plot":{"id":"a70afc42-3cbb-434f-bf22-5ce008b16a8d","subtype":"Figure","type":"Plot"}},"id":"8b0ec5b0-c56d-4972-8e94-73bbdfd0c949","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"a70afc42-3cbb-434f-bf22-5ce008b16a8d","subtype":"Figure","type":"Plot"},"ticker":{"id":"e0523a88-4f61-417f-9af8-5f18e3ab17c6","type":"BasicTicker"}},"id":"73bb02c5-4b0f-4ddd-b284-e5ad720e8561","type":"Grid"},{"attributes":{"formatter":{"id":"13bce2b3-b4cc-4c53-b675-0e3dfca850a2","type":"BasicTickFormatter"},"plot":{"id":"a70afc42-3cbb-434f-bf22-5ce008b16a8d","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbc20201-eaf9-4bd9-a62c-c0da6ff4adb2","type":"BasicTicker"}},"id":"15b17b23-43c8-4b65-9b7d-7b5b764dd2c9","type":"LinearAxis"},{"attributes":{},"id":"52c2c4e3-5ec3-4b08-a77a-c798c639ff87","type":"BasicTickFormatter"}],"root_ids":["a70afc42-3cbb-434f-bf22-5ce008b16a8d"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"3be08886-b984-4f95-bc2c-6b532456857e","elementid":"6b0ab37e-7a4f-42b5-82a1-15ef948d4b2b","modelid":"a70afc42-3cbb-434f-bf22-5ce008b16a8d"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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
});