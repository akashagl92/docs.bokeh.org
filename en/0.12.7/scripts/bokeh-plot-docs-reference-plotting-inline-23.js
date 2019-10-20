(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("71483120-d509-4671-8e02-242e6921f929");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '71483120-d509-4671-8e02-242e6921f929' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"a5c686a8-f124-4b0d-8a00-2b804f222cc7":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"79e8cc17-43c5-477e-a10b-db1c9fb2bc98","type":"Triangle"},{"attributes":{"callback":null,"column_names":["x","y","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"a38a8cfe-277e-43ed-90ae-aa9d6582add8","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"7a38564a-0b4e-4cef-8b63-155133077e19","type":"LinearAxis"}],"left":[{"id":"fb1be922-35f6-4453-bdba-4e68b3a52737","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7a38564a-0b4e-4cef-8b63-155133077e19","type":"LinearAxis"},{"id":"7df0acf9-a2f5-4388-95a8-4b9ae6f82e80","type":"Grid"},{"id":"fb1be922-35f6-4453-bdba-4e68b3a52737","type":"LinearAxis"},{"id":"54967a23-6070-4c58-819a-64d91b3b5aab","type":"Grid"},{"id":"47f6812b-7ac9-4595-b23d-043d42700a91","type":"BoxAnnotation"},{"id":"52e21964-178e-4c83-a666-5d8b91461ba3","type":"GlyphRenderer"}],"title":{"id":"c3030fe5-59ae-473d-927b-e71945086042","type":"Title"},"toolbar":{"id":"a3b1aed6-bb3f-4921-b8f6-2adf1c174463","type":"Toolbar"},"x_range":{"id":"5bb635c4-9a43-4716-908c-794c9688030b","type":"DataRange1d"},"x_scale":{"id":"0aa7014c-95d6-4ffe-98ea-ff29da2f9c0a","type":"LinearScale"},"y_range":{"id":"a2c867e9-f426-4ecc-98fb-b14beae4a886","type":"DataRange1d"},"y_scale":{"id":"299c9672-9248-42ca-8c43-4d3eaddaf3ec","type":"LinearScale"}},"id":"13a7531d-5595-4634-836e-1379bcb30d9f","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"2b145a84-d2c1-46ad-9303-437e3f324eb6","type":"BasicTickFormatter"},"plot":{"id":"13a7531d-5595-4634-836e-1379bcb30d9f","subtype":"Figure","type":"Plot"},"ticker":{"id":"a9ba92be-c2f1-4fcf-932c-6b34f9caac32","type":"BasicTicker"}},"id":"7a38564a-0b4e-4cef-8b63-155133077e19","type":"LinearAxis"},{"attributes":{"data_source":{"id":"a38a8cfe-277e-43ed-90ae-aa9d6582add8","type":"ColumnDataSource"},"glyph":{"id":"b71982f2-31c9-4041-b2e3-b9ace46185f5","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"79e8cc17-43c5-477e-a10b-db1c9fb2bc98","type":"Triangle"},"selection_glyph":null,"view":{"id":"23c7fcd4-9ad8-43aa-a2c1-f62ac40456b5","type":"CDSView"}},"id":"52e21964-178e-4c83-a666-5d8b91461ba3","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"c3030fe5-59ae-473d-927b-e71945086042","type":"Title"},{"attributes":{"fill_color":{"value":"#99D594"},"line_color":{"value":"#99D594"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b71982f2-31c9-4041-b2e3-b9ace46185f5","type":"Triangle"},{"attributes":{"source":{"id":"a38a8cfe-277e-43ed-90ae-aa9d6582add8","type":"ColumnDataSource"}},"id":"23c7fcd4-9ad8-43aa-a2c1-f62ac40456b5","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"13a7531d-5595-4634-836e-1379bcb30d9f","subtype":"Figure","type":"Plot"},"ticker":{"id":"acda0398-3531-4fb9-96a0-b4efa86e22b8","type":"BasicTicker"}},"id":"54967a23-6070-4c58-819a-64d91b3b5aab","type":"Grid"},{"attributes":{},"id":"38b62e9c-3ccc-483d-a8c5-a133dd6cc228","type":"HelpTool"},{"attributes":{},"id":"acda0398-3531-4fb9-96a0-b4efa86e22b8","type":"BasicTicker"},{"attributes":{"callback":null},"id":"a2c867e9-f426-4ecc-98fb-b14beae4a886","type":"DataRange1d"},{"attributes":{},"id":"7a8dd6b0-c7a5-4c54-90fd-bec8b65c252f","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"5bb635c4-9a43-4716-908c-794c9688030b","type":"DataRange1d"},{"attributes":{},"id":"c34b567c-c6fe-4e9f-b285-a4e66d3d43aa","type":"ResetTool"},{"attributes":{},"id":"8b01cee6-dc95-4484-bb53-2e935c653bb6","type":"PanTool"},{"attributes":{},"id":"2b60ebe7-74f1-4604-a807-9aa79075e363","type":"SaveTool"},{"attributes":{},"id":"f0c6eb32-db3b-4d1e-a0d1-9db3605b58ae","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"f0c6eb32-db3b-4d1e-a0d1-9db3605b58ae","type":"BasicTickFormatter"},"plot":{"id":"13a7531d-5595-4634-836e-1379bcb30d9f","subtype":"Figure","type":"Plot"},"ticker":{"id":"acda0398-3531-4fb9-96a0-b4efa86e22b8","type":"BasicTicker"}},"id":"fb1be922-35f6-4453-bdba-4e68b3a52737","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8b01cee6-dc95-4484-bb53-2e935c653bb6","type":"PanTool"},{"id":"7a8dd6b0-c7a5-4c54-90fd-bec8b65c252f","type":"WheelZoomTool"},{"id":"61415755-19d1-47b7-8a1d-c44083bc0020","type":"BoxZoomTool"},{"id":"2b60ebe7-74f1-4604-a807-9aa79075e363","type":"SaveTool"},{"id":"c34b567c-c6fe-4e9f-b285-a4e66d3d43aa","type":"ResetTool"},{"id":"38b62e9c-3ccc-483d-a8c5-a133dd6cc228","type":"HelpTool"}]},"id":"a3b1aed6-bb3f-4921-b8f6-2adf1c174463","type":"Toolbar"},{"attributes":{"overlay":{"id":"47f6812b-7ac9-4595-b23d-043d42700a91","type":"BoxAnnotation"}},"id":"61415755-19d1-47b7-8a1d-c44083bc0020","type":"BoxZoomTool"},{"attributes":{},"id":"a9ba92be-c2f1-4fcf-932c-6b34f9caac32","type":"BasicTicker"},{"attributes":{"plot":{"id":"13a7531d-5595-4634-836e-1379bcb30d9f","subtype":"Figure","type":"Plot"},"ticker":{"id":"a9ba92be-c2f1-4fcf-932c-6b34f9caac32","type":"BasicTicker"}},"id":"7df0acf9-a2f5-4388-95a8-4b9ae6f82e80","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"47f6812b-7ac9-4595-b23d-043d42700a91","type":"BoxAnnotation"},{"attributes":{},"id":"2b145a84-d2c1-46ad-9303-437e3f324eb6","type":"BasicTickFormatter"},{"attributes":{},"id":"299c9672-9248-42ca-8c43-4d3eaddaf3ec","type":"LinearScale"},{"attributes":{},"id":"0aa7014c-95d6-4ffe-98ea-ff29da2f9c0a","type":"LinearScale"}],"root_ids":["13a7531d-5595-4634-836e-1379bcb30d9f"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"a5c686a8-f124-4b0d-8a00-2b804f222cc7","elementid":"71483120-d509-4671-8e02-242e6921f929","modelid":"13a7531d-5595-4634-836e-1379bcb30d9f"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
