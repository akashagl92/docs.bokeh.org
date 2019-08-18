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
      };var element = document.getElementById("d76cbcf6-b2df-4137-a8d5-ce266c4f34c1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd76cbcf6-b2df-4137-a8d5-ce266c4f34c1' but no matching script tag was found. ")
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
                var docs_json = {"bf765fdc-c5f8-40bf-aa0e-37188e07a2fa":{"roots":{"references":[{"attributes":{},"id":"4a77c5eb-b776-44aa-9c57-a33d5f9ba8ab","type":"LinearScale"},{"attributes":{},"id":"0c85007b-30d4-471a-8c13-61f411fb53c1","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7fa8d74d-3000-4480-835a-6c17fe9e3177","type":"Circle"},{"attributes":{},"id":"d9c3d406-93ed-487d-b453-cc5871d03346","type":"ResetTool"},{"attributes":{},"id":"7b8c1c91-a2cf-4295-a89e-0dbac1cee953","type":"HelpTool"},{"attributes":{},"id":"51a12067-007e-4240-b2eb-848659a29b1f","type":"BasicTicker"},{"attributes":{"data_source":{"id":"ef1d25ee-0b06-448f-9108-bd95195408e8","type":"ColumnDataSource"},"glyph":{"id":"7fa8d74d-3000-4480-835a-6c17fe9e3177","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8533ddf9-4c68-4d61-b522-39d0851ea899","type":"Circle"},"selection_glyph":null,"view":{"id":"0e3f1127-959c-45ea-94d7-d64e93f54718","type":"CDSView"}},"id":"dc39be64-12ce-4a6a-a919-6c6e0bd8726e","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"f80516ce-fe98-4ddd-8fbb-0038238aa399","type":"LinearAxis"}],"left":[{"id":"002ef228-850d-428b-9f85-318fe1010fdd","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f80516ce-fe98-4ddd-8fbb-0038238aa399","type":"LinearAxis"},{"id":"407ed69e-b841-479e-ac45-9d1dad812887","type":"Grid"},{"id":"002ef228-850d-428b-9f85-318fe1010fdd","type":"LinearAxis"},{"id":"b86b07de-14e9-441d-bc93-304e774ca0db","type":"Grid"},{"id":"4a8063f9-6747-46a3-b9d1-3bbf4f3fea51","type":"BoxAnnotation"},{"id":"9e4aa520-f5ec-467d-a346-0c50dd2c7131","type":"GlyphRenderer"},{"id":"dc39be64-12ce-4a6a-a919-6c6e0bd8726e","type":"GlyphRenderer"}],"title":{"id":"31b43cf7-a4a6-403d-82df-0aa1929d6795","type":"Title"},"toolbar":{"id":"97e3de15-f5d3-4a5b-8a72-6e24312f6b52","type":"Toolbar"},"x_range":{"id":"3030dbe6-d55a-45a6-91a4-bf37cca1e764","type":"DataRange1d"},"x_scale":{"id":"4a77c5eb-b776-44aa-9c57-a33d5f9ba8ab","type":"LinearScale"},"y_range":{"id":"af74c8de-e853-4b08-82e5-a8bcf47f3e51","type":"DataRange1d"},"y_scale":{"id":"46a5b029-bb50-4fcf-94ef-590796d2b0e7","type":"LinearScale"}},"id":"24f6563d-5882-41de-a1ed-e4a7e3d03afb","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"ef1d25ee-0b06-448f-9108-bd95195408e8","type":"ColumnDataSource"},{"attributes":{"source":{"id":"bc32555e-6a84-4bc1-8fa2-3e1fef55699d","type":"ColumnDataSource"}},"id":"43886376-815c-4be3-906c-6d5ac1244feb","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"28221496-0052-4f2e-a996-663c7c5e966e","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"18df522f-9348-4ad7-ad09-59f4518ca1d6","type":"PanTool"},{"id":"78e463b5-6b9d-4b4a-9d97-687dd1e6dc38","type":"WheelZoomTool"},{"id":"f14d8057-3b20-4f59-9b58-f0b06554ad74","type":"BoxZoomTool"},{"id":"7aef0f31-d7db-47f1-a9aa-cac293886685","type":"SaveTool"},{"id":"d9c3d406-93ed-487d-b453-cc5871d03346","type":"ResetTool"},{"id":"7b8c1c91-a2cf-4295-a89e-0dbac1cee953","type":"HelpTool"}]},"id":"97e3de15-f5d3-4a5b-8a72-6e24312f6b52","type":"Toolbar"},{"attributes":{"source":{"id":"ef1d25ee-0b06-448f-9108-bd95195408e8","type":"ColumnDataSource"}},"id":"0e3f1127-959c-45ea-94d7-d64e93f54718","type":"CDSView"},{"attributes":{"callback":null},"id":"3030dbe6-d55a-45a6-91a4-bf37cca1e764","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"24f6563d-5882-41de-a1ed-e4a7e3d03afb","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c85007b-30d4-471a-8c13-61f411fb53c1","type":"BasicTicker"}},"id":"b86b07de-14e9-441d-bc93-304e774ca0db","type":"Grid"},{"attributes":{"data_source":{"id":"bc32555e-6a84-4bc1-8fa2-3e1fef55699d","type":"ColumnDataSource"},"glyph":{"id":"4377b92e-5608-4b63-8f98-4c0ae39398fe","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28221496-0052-4f2e-a996-663c7c5e966e","type":"Line"},"selection_glyph":null,"view":{"id":"43886376-815c-4be3-906c-6d5ac1244feb","type":"CDSView"}},"id":"9e4aa520-f5ec-467d-a346-0c50dd2c7131","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"af74c8de-e853-4b08-82e5-a8bcf47f3e51","type":"DataRange1d"},{"attributes":{"plot":null,"text":"example"},"id":"31b43cf7-a4a6-403d-82df-0aa1929d6795","type":"Title"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"4377b92e-5608-4b63-8f98-4c0ae39398fe","type":"Line"},{"attributes":{},"id":"7a4c5b2b-88d4-4e3b-a14f-4810481782b4","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8533ddf9-4c68-4d61-b522-39d0851ea899","type":"Circle"},{"attributes":{},"id":"18df522f-9348-4ad7-ad09-59f4518ca1d6","type":"PanTool"},{"attributes":{"overlay":{"id":"4a8063f9-6747-46a3-b9d1-3bbf4f3fea51","type":"BoxAnnotation"}},"id":"f14d8057-3b20-4f59-9b58-f0b06554ad74","type":"BoxZoomTool"},{"attributes":{},"id":"7aef0f31-d7db-47f1-a9aa-cac293886685","type":"SaveTool"},{"attributes":{"formatter":{"id":"153cb1fc-94d3-4756-9059-5f14ef6edb03","type":"BasicTickFormatter"},"plot":{"id":"24f6563d-5882-41de-a1ed-e4a7e3d03afb","subtype":"Figure","type":"Plot"},"ticker":{"id":"51a12067-007e-4240-b2eb-848659a29b1f","type":"BasicTicker"}},"id":"f80516ce-fe98-4ddd-8fbb-0038238aa399","type":"LinearAxis"},{"attributes":{"formatter":{"id":"7a4c5b2b-88d4-4e3b-a14f-4810481782b4","type":"BasicTickFormatter"},"plot":{"id":"24f6563d-5882-41de-a1ed-e4a7e3d03afb","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c85007b-30d4-471a-8c13-61f411fb53c1","type":"BasicTicker"}},"id":"002ef228-850d-428b-9f85-318fe1010fdd","type":"LinearAxis"},{"attributes":{},"id":"46a5b029-bb50-4fcf-94ef-590796d2b0e7","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4a8063f9-6747-46a3-b9d1-3bbf4f3fea51","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"24f6563d-5882-41de-a1ed-e4a7e3d03afb","subtype":"Figure","type":"Plot"},"ticker":{"id":"51a12067-007e-4240-b2eb-848659a29b1f","type":"BasicTicker"}},"id":"407ed69e-b841-479e-ac45-9d1dad812887","type":"Grid"},{"attributes":{},"id":"78e463b5-6b9d-4b4a-9d97-687dd1e6dc38","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"bc32555e-6a84-4bc1-8fa2-3e1fef55699d","type":"ColumnDataSource"},{"attributes":{},"id":"153cb1fc-94d3-4756-9059-5f14ef6edb03","type":"BasicTickFormatter"}],"root_ids":["24f6563d-5882-41de-a1ed-e4a7e3d03afb"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"bf765fdc-c5f8-40bf-aa0e-37188e07a2fa","elementid":"d76cbcf6-b2df-4137-a8d5-ce266c4f34c1","modelid":"24f6563d-5882-41de-a1ed-e4a7e3d03afb"}];
                
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
