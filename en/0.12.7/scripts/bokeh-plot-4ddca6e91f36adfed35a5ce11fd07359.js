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
      };var element = document.getElementById("b11848de-9c3c-4e58-97a8-c562cd58e319");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b11848de-9c3c-4e58-97a8-c562cd58e319' but no matching script tag was found. ")
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
                var docs_json = {"e3220385-1c90-4774-aaec-7302eda1b8a0":{"roots":{"references":[{"attributes":{"formatter":{"id":"0a794397-6b87-4276-8642-d89611dd5295","type":"BasicTickFormatter"},"plot":{"id":"9939e421-feb8-4211-a816-bdca6359a916","subtype":"Figure","type":"Plot"},"ticker":{"id":"6e5ec4cd-eb8d-4766-999b-8fbfa99922d4","type":"BasicTicker"}},"id":"81954128-53f6-4a3d-a052-9b4fcf868820","type":"LinearAxis"},{"attributes":{},"id":"6e5ec4cd-eb8d-4766-999b-8fbfa99922d4","type":"BasicTicker"},{"attributes":{"data_source":{"id":"dab2b143-df3f-47db-963a-ec5c9bf5e58d","type":"ColumnDataSource"},"glyph":{"id":"c7b28d64-a751-4482-b627-4fa73544f948","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e765c8b7-1e47-4b66-a502-e3e59b760c9f","type":"Circle"},"selection_glyph":null,"view":{"id":"87f8ce0e-f6ac-445f-84e9-408ded81c2ff","type":"CDSView"}},"id":"8ff5bce8-1666-4252-820c-31157003d07d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"71d11aef-66dd-41e3-9e17-b01153708db3","type":"ColumnDataSource"},{"attributes":{},"id":"e9e49e59-268f-4a20-9767-64a48b3f1b00","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"a0159de0-e2f1-4a2b-a994-9a79ee7cabc4","type":"Line"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"c7b28d64-a751-4482-b627-4fa73544f948","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"9939e421-feb8-4211-a816-bdca6359a916","subtype":"Figure","type":"Plot"},"ticker":{"id":"2f3de64a-87a6-43b3-b6ac-45370ca66a6c","type":"LogTicker"}},"id":"2b2cce2e-8795-4eda-9f51-1241debfc737","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"e765c8b7-1e47-4b66-a502-e3e59b760c9f","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"dab2b143-df3f-47db-963a-ec5c9bf5e58d","type":"ColumnDataSource"},{"attributes":{"num_minor_ticks":10},"id":"2f3de64a-87a6-43b3-b6ac-45370ca66a6c","type":"LogTicker"},{"attributes":{"formatter":{"id":"5bdc6e7e-86cc-4683-8d44-72b0bf68b56a","type":"LogTickFormatter"},"plot":{"id":"9939e421-feb8-4211-a816-bdca6359a916","subtype":"Figure","type":"Plot"},"ticker":{"id":"2f3de64a-87a6-43b3-b6ac-45370ca66a6c","type":"LogTicker"}},"id":"11d2cec9-9fbe-438f-a16d-0d44bc955b13","type":"LogAxis"},{"attributes":{"source":{"id":"71d11aef-66dd-41e3-9e17-b01153708db3","type":"ColumnDataSource"}},"id":"3f2a8f2f-29be-406a-b2a2-c60aa4a3f073","type":"CDSView"},{"attributes":{"overlay":{"id":"5c5d4933-3814-46d6-ad8f-32cd3527d690","type":"BoxAnnotation"}},"id":"c57a131c-cc23-486f-9126-1528470de9fa","type":"BoxZoomTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"42c7f328-2ee0-465d-ba08-f01ffc997c75","type":"Line"},{"attributes":{},"id":"971b5ac9-2071-4aab-a721-5d1f5d7bf630","type":"LogScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5c5d4933-3814-46d6-ad8f-32cd3527d690","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"9939e421-feb8-4211-a816-bdca6359a916","subtype":"Figure","type":"Plot"},"ticker":{"id":"6e5ec4cd-eb8d-4766-999b-8fbfa99922d4","type":"BasicTicker"}},"id":"2113a217-f15e-4c51-b033-4531d5cede8b","type":"Grid"},{"attributes":{"below":[{"id":"81954128-53f6-4a3d-a052-9b4fcf868820","type":"LinearAxis"}],"left":[{"id":"11d2cec9-9fbe-438f-a16d-0d44bc955b13","type":"LogAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"81954128-53f6-4a3d-a052-9b4fcf868820","type":"LinearAxis"},{"id":"2113a217-f15e-4c51-b033-4531d5cede8b","type":"Grid"},{"id":"11d2cec9-9fbe-438f-a16d-0d44bc955b13","type":"LogAxis"},{"id":"2b2cce2e-8795-4eda-9f51-1241debfc737","type":"Grid"},{"id":"5c5d4933-3814-46d6-ad8f-32cd3527d690","type":"BoxAnnotation"},{"id":"13c71bf9-8454-43cb-a2be-c2d87b7be318","type":"GlyphRenderer"},{"id":"8ff5bce8-1666-4252-820c-31157003d07d","type":"GlyphRenderer"}],"title":{"id":"11288979-18b5-4e54-81e1-c331234ff845","type":"Title"},"toolbar":{"id":"cb9c8089-01de-488a-972a-a80e10a35bb3","type":"Toolbar"},"x_range":{"id":"40a4d8c9-fb5b-4b5c-9d5d-f019772399d1","type":"DataRange1d"},"x_scale":{"id":"279d71f7-566f-4a1c-af28-fe094ec7c9ee","type":"LinearScale"},"y_range":{"id":"d9651235-d8bd-41c2-a4f4-00cf7268f695","type":"DataRange1d"},"y_scale":{"id":"971b5ac9-2071-4aab-a721-5d1f5d7bf630","type":"LogScale"}},"id":"9939e421-feb8-4211-a816-bdca6359a916","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b8b56dbd-0cef-4fde-8ddc-cb25bf14d755","type":"PanTool"},{"attributes":{"source":{"id":"dab2b143-df3f-47db-963a-ec5c9bf5e58d","type":"ColumnDataSource"}},"id":"87f8ce0e-f6ac-445f-84e9-408ded81c2ff","type":"CDSView"},{"attributes":{},"id":"10374fb0-e90c-4db2-b05d-3f78ce4e4cb6","type":"ResetTool"},{"attributes":{"ticker":null},"id":"5bdc6e7e-86cc-4683-8d44-72b0bf68b56a","type":"LogTickFormatter"},{"attributes":{},"id":"d80ce7c3-711a-4c31-9ddc-ea8e3d6581ce","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b8b56dbd-0cef-4fde-8ddc-cb25bf14d755","type":"PanTool"},{"id":"e9e49e59-268f-4a20-9767-64a48b3f1b00","type":"WheelZoomTool"},{"id":"c57a131c-cc23-486f-9126-1528470de9fa","type":"BoxZoomTool"},{"id":"d80ce7c3-711a-4c31-9ddc-ea8e3d6581ce","type":"SaveTool"},{"id":"10374fb0-e90c-4db2-b05d-3f78ce4e4cb6","type":"ResetTool"},{"id":"f4650ff0-2bbc-49c4-a12c-650d46f8896b","type":"HelpTool"}]},"id":"cb9c8089-01de-488a-972a-a80e10a35bb3","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"11288979-18b5-4e54-81e1-c331234ff845","type":"Title"},{"attributes":{},"id":"0a794397-6b87-4276-8642-d89611dd5295","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"40a4d8c9-fb5b-4b5c-9d5d-f019772399d1","type":"DataRange1d"},{"attributes":{},"id":"f4650ff0-2bbc-49c4-a12c-650d46f8896b","type":"HelpTool"},{"attributes":{"data_source":{"id":"71d11aef-66dd-41e3-9e17-b01153708db3","type":"ColumnDataSource"},"glyph":{"id":"42c7f328-2ee0-465d-ba08-f01ffc997c75","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a0159de0-e2f1-4a2b-a994-9a79ee7cabc4","type":"Line"},"selection_glyph":null,"view":{"id":"3f2a8f2f-29be-406a-b2a2-c60aa4a3f073","type":"CDSView"}},"id":"13c71bf9-8454-43cb-a2be-c2d87b7be318","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"d9651235-d8bd-41c2-a4f4-00cf7268f695","type":"DataRange1d"},{"attributes":{},"id":"279d71f7-566f-4a1c-af28-fe094ec7c9ee","type":"LinearScale"}],"root_ids":["9939e421-feb8-4211-a816-bdca6359a916"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"e3220385-1c90-4774-aaec-7302eda1b8a0","elementid":"b11848de-9c3c-4e58-97a8-c562cd58e319","modelid":"9939e421-feb8-4211-a816-bdca6359a916"}];
                
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
