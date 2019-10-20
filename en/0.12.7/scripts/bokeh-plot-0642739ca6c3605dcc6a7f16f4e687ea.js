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
      };var element = document.getElementById("383d7509-8ab8-4480-85b3-c27cb9e83cd3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '383d7509-8ab8-4480-85b3-c27cb9e83cd3' but no matching script tag was found. ")
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
                var docs_json = {"c712346a-659b-403c-b5b6-723d43739fb4":{"roots":{"references":[{"attributes":{},"id":"c2e0f302-6ee7-4c4b-8dfa-c7d1290ca65d","type":"SaveTool"},{"attributes":{},"id":"3f4f3bb3-e4c4-4e2a-afa8-236f06c0c0ad","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"5b8a529f-5211-45f1-a7c8-7e85b1c141a7","type":"ColumnDataSource"},{"attributes":{},"id":"9fbb814b-2a6c-4177-b613-8811d7717b0e","type":"LinearScale"},{"attributes":{"data_source":{"id":"5b8a529f-5211-45f1-a7c8-7e85b1c141a7","type":"ColumnDataSource"},"glyph":{"id":"dd0748d2-79c7-4d7c-a528-cebb94587eea","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65e1dc90-4391-4070-90c3-ff13e3a51677","type":"Circle"},"selection_glyph":null,"view":{"id":"aa2e1d76-bd89-46fe-b7f2-01af06c2be81","type":"CDSView"}},"id":"d05ea44d-c238-478b-8e05-b0fee005eae4","type":"GlyphRenderer"},{"attributes":{},"id":"89d91910-b94f-4c89-b303-014d1a014bbb","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"a9912cdb-4099-417b-b4d3-aeda892923df","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3f4f3bb3-e4c4-4e2a-afa8-236f06c0c0ad","type":"PanTool"},{"id":"54d1ceaa-7b74-44d4-8fa7-fdc879a9305e","type":"WheelZoomTool"},{"id":"613121c3-fd06-4216-b96c-13fc38d38ec8","type":"BoxZoomTool"},{"id":"c2e0f302-6ee7-4c4b-8dfa-c7d1290ca65d","type":"SaveTool"},{"id":"2626a616-b5f1-4bd9-8d3c-4f3c46c7526a","type":"ResetTool"},{"id":"1d648fe2-caad-4e6a-85a4-055bd6b74ca4","type":"HelpTool"}]},"id":"7f9b5543-b8af-472e-a3cb-2b0274a5679a","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"65e1dc90-4391-4070-90c3-ff13e3a51677","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"dd0748d2-79c7-4d7c-a528-cebb94587eea","type":"Circle"},{"attributes":{},"id":"5761deef-9cdf-4226-a50b-afd8763902fa","type":"BasicTickFormatter"},{"attributes":{},"id":"1d648fe2-caad-4e6a-85a4-055bd6b74ca4","type":"HelpTool"},{"attributes":{"source":{"id":"5b8a529f-5211-45f1-a7c8-7e85b1c141a7","type":"ColumnDataSource"}},"id":"aa2e1d76-bd89-46fe-b7f2-01af06c2be81","type":"CDSView"},{"attributes":{"callback":null},"id":"9dac273a-b2d0-4780-a0c8-7017722cd619","type":"DataRange1d"},{"attributes":{},"id":"2626a616-b5f1-4bd9-8d3c-4f3c46c7526a","type":"ResetTool"},{"attributes":{},"id":"a19cf84a-38c2-416d-9850-351014e2f6e0","type":"BasicTicker"},{"attributes":{"formatter":{"id":"9aefaff2-0801-4ca2-9a33-9701adf2164a","type":"BasicTickFormatter"},"plot":{"id":"3da861cb-8da2-489c-bdad-7f0fba53336f","subtype":"Figure","type":"Plot"},"ticker":{"id":"89d91910-b94f-4c89-b303-014d1a014bbb","type":"BasicTicker"}},"id":"3df2c949-3ebc-4bec-9eba-fec3c02d9f93","type":"LinearAxis"},{"attributes":{"plot":{"id":"3da861cb-8da2-489c-bdad-7f0fba53336f","subtype":"Figure","type":"Plot"},"ticker":{"id":"a19cf84a-38c2-416d-9850-351014e2f6e0","type":"BasicTicker"}},"id":"c35c7cab-b89c-442b-9566-759e3b397a8d","type":"Grid"},{"attributes":{},"id":"54d1ceaa-7b74-44d4-8fa7-fdc879a9305e","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"66b9d65f-b9c7-44e2-bc4e-715c9482adb1","type":"BoxAnnotation"}},"id":"613121c3-fd06-4216-b96c-13fc38d38ec8","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"9d348e73-63e0-482a-8dfb-0bc644b8a12d","type":"LinearAxis"}],"left":[{"id":"3df2c949-3ebc-4bec-9eba-fec3c02d9f93","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9d348e73-63e0-482a-8dfb-0bc644b8a12d","type":"LinearAxis"},{"id":"c35c7cab-b89c-442b-9566-759e3b397a8d","type":"Grid"},{"id":"3df2c949-3ebc-4bec-9eba-fec3c02d9f93","type":"LinearAxis"},{"id":"563ef365-ca05-4097-baf0-7d6c6881d227","type":"Grid"},{"id":"66b9d65f-b9c7-44e2-bc4e-715c9482adb1","type":"BoxAnnotation"},{"id":"d05ea44d-c238-478b-8e05-b0fee005eae4","type":"GlyphRenderer"}],"title":{"id":"a9912cdb-4099-417b-b4d3-aeda892923df","type":"Title"},"toolbar":{"id":"7f9b5543-b8af-472e-a3cb-2b0274a5679a","type":"Toolbar"},"x_range":{"id":"9dac273a-b2d0-4780-a0c8-7017722cd619","type":"DataRange1d"},"x_scale":{"id":"9fbb814b-2a6c-4177-b613-8811d7717b0e","type":"LinearScale"},"y_range":{"id":"9e32d46c-0b65-4d4a-a678-f745409296a8","type":"DataRange1d"},"y_scale":{"id":"8cf1585c-75a1-4015-a58e-7b9ad120f7f7","type":"LinearScale"}},"id":"3da861cb-8da2-489c-bdad-7f0fba53336f","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"9e32d46c-0b65-4d4a-a678-f745409296a8","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"66b9d65f-b9c7-44e2-bc4e-715c9482adb1","type":"BoxAnnotation"},{"attributes":{},"id":"9aefaff2-0801-4ca2-9a33-9701adf2164a","type":"BasicTickFormatter"},{"attributes":{},"id":"8cf1585c-75a1-4015-a58e-7b9ad120f7f7","type":"LinearScale"},{"attributes":{"bounds":[2,4],"formatter":{"id":"5761deef-9cdf-4226-a50b-afd8763902fa","type":"BasicTickFormatter"},"plot":{"id":"3da861cb-8da2-489c-bdad-7f0fba53336f","subtype":"Figure","type":"Plot"},"ticker":{"id":"a19cf84a-38c2-416d-9850-351014e2f6e0","type":"BasicTicker"}},"id":"9d348e73-63e0-482a-8dfb-0bc644b8a12d","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"3da861cb-8da2-489c-bdad-7f0fba53336f","subtype":"Figure","type":"Plot"},"ticker":{"id":"89d91910-b94f-4c89-b303-014d1a014bbb","type":"BasicTicker"}},"id":"563ef365-ca05-4097-baf0-7d6c6881d227","type":"Grid"}],"root_ids":["3da861cb-8da2-489c-bdad-7f0fba53336f"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"c712346a-659b-403c-b5b6-723d43739fb4","elementid":"383d7509-8ab8-4480-85b3-c27cb9e83cd3","modelid":"3da861cb-8da2-489c-bdad-7f0fba53336f"}];
                
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
