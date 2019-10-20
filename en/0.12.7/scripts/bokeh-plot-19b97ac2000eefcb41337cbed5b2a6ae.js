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
      };var element = document.getElementById("35b05118-7553-438f-8f7c-689c8561c8d1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '35b05118-7553-438f-8f7c-689c8561c8d1' but no matching script tag was found. ")
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
                var docs_json = {"d576fb79-fcb2-4fc3-83e9-dec84d97f2f3":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"68ffdfe4-1c94-4f55-92bb-7f54ae90d2a1","type":"Title"},{"attributes":{},"id":"a536b9f2-04c6-4ae7-b9b8-ff7da6094cab","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"04fc519d-4616-4698-af7c-2a9f1566c29e","subtype":"Figure","type":"Plot"},"ticker":{"id":"03d4de4a-cb6d-4900-a1a6-725fdb72308a","type":"BasicTicker"}},"id":"bd4b927d-58ca-434e-a6bd-60e1e3cd3f89","type":"Grid"},{"attributes":{},"id":"96edd6af-a889-45c2-8105-3885509766e7","type":"BasicTickFormatter"},{"attributes":{},"id":"82fcdad0-731f-4da2-b088-edaceeb9691c","type":"LinearScale"},{"attributes":{},"id":"03d4de4a-cb6d-4900-a1a6-725fdb72308a","type":"BasicTicker"},{"attributes":{"plot":{"id":"04fc519d-4616-4698-af7c-2a9f1566c29e","subtype":"Figure","type":"Plot"},"ticker":{"id":"38cec70c-9733-4e5f-bcfd-797ba6253c80","type":"BasicTicker"}},"id":"34246f4e-b907-44c3-ae35-ad7417b7dd37","type":"Grid"},{"attributes":{"formatter":{"id":"c2945103-d33b-4474-babe-6936db87445c","type":"BasicTickFormatter"},"plot":{"id":"04fc519d-4616-4698-af7c-2a9f1566c29e","subtype":"Figure","type":"Plot"},"ticker":{"id":"38cec70c-9733-4e5f-bcfd-797ba6253c80","type":"BasicTicker"}},"id":"a5894343-c82e-4414-9976-e2a9a9332a70","type":"LinearAxis"},{"attributes":{},"id":"38cec70c-9733-4e5f-bcfd-797ba6253c80","type":"BasicTicker"},{"attributes":{"formatter":{"id":"96edd6af-a889-45c2-8105-3885509766e7","type":"BasicTickFormatter"},"plot":{"id":"04fc519d-4616-4698-af7c-2a9f1566c29e","subtype":"Figure","type":"Plot"},"ticker":{"id":"03d4de4a-cb6d-4900-a1a6-725fdb72308a","type":"BasicTicker"}},"id":"4b4be827-38f4-4971-85a2-bfb00c57b82f","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"c9b8dd5d-518a-4860-9821-e9cc16b0b92e","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4c857d13-a581-4775-b92f-bf9d2603c06b","type":"BoxAnnotation"},{"attributes":{"source":{"id":"9ddabf88-22a4-47a4-b43f-1e7f3dd1069c","type":"ColumnDataSource"}},"id":"23fc20da-c410-4c79-9aff-c12a775bcb9e","type":"CDSView"},{"attributes":{},"id":"c2945103-d33b-4474-babe-6936db87445c","type":"BasicTickFormatter"},{"attributes":{},"id":"e4fd0321-ea38-425f-b040-ab665ec091cf","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,"NaN",4,5],"y":[6,7,2,4,4,5]}},"id":"9ddabf88-22a4-47a4-b43f-1e7f3dd1069c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9ddabf88-22a4-47a4-b43f-1e7f3dd1069c","type":"ColumnDataSource"},"glyph":{"id":"fd32905e-2df4-488b-8bf4-61df6a93d605","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c9b8dd5d-518a-4860-9821-e9cc16b0b92e","type":"Line"},"selection_glyph":null,"view":{"id":"23fc20da-c410-4c79-9aff-c12a775bcb9e","type":"CDSView"}},"id":"6b3be845-0b09-40f5-8b75-72ab81b66feb","type":"GlyphRenderer"},{"attributes":{},"id":"62eb70c0-a253-4cad-a09b-6cc731549691","type":"SaveTool"},{"attributes":{},"id":"b7343d8a-ef54-4f2c-b7cf-8e66ceb1f682","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"a5894343-c82e-4414-9976-e2a9a9332a70","type":"LinearAxis"}],"left":[{"id":"4b4be827-38f4-4971-85a2-bfb00c57b82f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"a5894343-c82e-4414-9976-e2a9a9332a70","type":"LinearAxis"},{"id":"34246f4e-b907-44c3-ae35-ad7417b7dd37","type":"Grid"},{"id":"4b4be827-38f4-4971-85a2-bfb00c57b82f","type":"LinearAxis"},{"id":"bd4b927d-58ca-434e-a6bd-60e1e3cd3f89","type":"Grid"},{"id":"4c857d13-a581-4775-b92f-bf9d2603c06b","type":"BoxAnnotation"},{"id":"6b3be845-0b09-40f5-8b75-72ab81b66feb","type":"GlyphRenderer"}],"title":{"id":"68ffdfe4-1c94-4f55-92bb-7f54ae90d2a1","type":"Title"},"toolbar":{"id":"42932048-5626-4fc6-aea7-bf9b5e0c5254","type":"Toolbar"},"x_range":{"id":"e9ec96c1-802b-46a6-95e2-77ea5becb396","type":"DataRange1d"},"x_scale":{"id":"a536b9f2-04c6-4ae7-b9b8-ff7da6094cab","type":"LinearScale"},"y_range":{"id":"fe3eece2-7fff-493a-b297-c06bb9713ae2","type":"DataRange1d"},"y_scale":{"id":"82fcdad0-731f-4da2-b088-edaceeb9691c","type":"LinearScale"}},"id":"04fc519d-4616-4698-af7c-2a9f1566c29e","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a7b68ba7-b571-47aa-b91c-453978338507","type":"ResetTool"},{"attributes":{"overlay":{"id":"4c857d13-a581-4775-b92f-bf9d2603c06b","type":"BoxAnnotation"}},"id":"e2671825-020b-4fba-806a-e730b4452f08","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e4fd0321-ea38-425f-b040-ab665ec091cf","type":"PanTool"},{"id":"b7343d8a-ef54-4f2c-b7cf-8e66ceb1f682","type":"WheelZoomTool"},{"id":"e2671825-020b-4fba-806a-e730b4452f08","type":"BoxZoomTool"},{"id":"62eb70c0-a253-4cad-a09b-6cc731549691","type":"SaveTool"},{"id":"a7b68ba7-b571-47aa-b91c-453978338507","type":"ResetTool"},{"id":"117affd4-2e3e-4a9f-8636-eb9261986c62","type":"HelpTool"}]},"id":"42932048-5626-4fc6-aea7-bf9b5e0c5254","type":"Toolbar"},{"attributes":{"callback":null},"id":"e9ec96c1-802b-46a6-95e2-77ea5becb396","type":"DataRange1d"},{"attributes":{"callback":null},"id":"fe3eece2-7fff-493a-b297-c06bb9713ae2","type":"DataRange1d"},{"attributes":{},"id":"117affd4-2e3e-4a9f-8636-eb9261986c62","type":"HelpTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"fd32905e-2df4-488b-8bf4-61df6a93d605","type":"Line"}],"root_ids":["04fc519d-4616-4698-af7c-2a9f1566c29e"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"d576fb79-fcb2-4fc3-83e9-dec84d97f2f3","elementid":"35b05118-7553-438f-8f7c-689c8561c8d1","modelid":"04fc519d-4616-4698-af7c-2a9f1566c29e"}];
                
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
