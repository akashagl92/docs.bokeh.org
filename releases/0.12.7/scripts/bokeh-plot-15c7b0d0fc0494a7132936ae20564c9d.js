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
      };var element = document.getElementById("ccd868a6-6a1e-4f9b-ab6d-8c925927b3b5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ccd868a6-6a1e-4f9b-ab6d-8c925927b3b5' but no matching script tag was found. ")
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
                var docs_json = {"ac679c2b-9509-4526-aff3-2e650fa3c7ba":{"roots":{"references":[{"attributes":{"formatter":{"id":"12eb7fcd-0a44-444c-ac4b-e4b72b741abb","type":"BasicTickFormatter"},"plot":{"id":"7fdf19e6-ccf4-4394-9e5d-1425661a81a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"489106a3-699e-4932-ac9d-e7f5c62d1fa8","type":"BasicTicker"}},"id":"4f35f13f-be0e-46d2-a2d7-0c195cc3eff3","type":"LinearAxis"},{"attributes":{"below":[{"id":"4f35f13f-be0e-46d2-a2d7-0c195cc3eff3","type":"LinearAxis"}],"left":[{"id":"38fb905f-1a28-40b3-b187-49bf3d85514e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"4f35f13f-be0e-46d2-a2d7-0c195cc3eff3","type":"LinearAxis"},{"id":"1c53cc70-9d83-424d-ab71-caed07d59449","type":"Grid"},{"id":"38fb905f-1a28-40b3-b187-49bf3d85514e","type":"LinearAxis"},{"id":"dc8821eb-6eb3-4c3d-9c5d-c98137b4f40b","type":"Grid"},{"id":"c65e7e23-5c50-4463-91c3-0c8acac0a9c8","type":"GlyphRenderer"},{"id":"7e749682-6752-44b5-9643-0297c5c25574","type":"GlyphRenderer"}],"title":{"id":"68e15288-71a5-4b79-85fd-f25e6de291d9","type":"Title"},"toolbar":{"id":"270f6909-22f2-4fd4-a1f3-1cac91de30ee","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"bc4de829-af2e-49f9-80b4-6b88ee63d300","type":"DataRange1d"},"x_scale":{"id":"5e65fbb3-9aad-4c3c-9454-edb77fa1ac80","type":"LinearScale"},"y_range":{"id":"05783b7a-4ae5-47a1-8f10-75907201c9c2","type":"DataRange1d"},"y_scale":{"id":"e7687054-9d82-4396-87ca-ede7fdfbe560","type":"LinearScale"}},"id":"7fdf19e6-ccf4-4394-9e5d-1425661a81a6","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"489106a3-699e-4932-ac9d-e7f5c62d1fa8","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":[],"x1":[],"y0":[],"y1":[]}},"id":"a34d62e1-c7d5-4239-98b1-34f08c472540","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"7fdf19e6-ccf4-4394-9e5d-1425661a81a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"489106a3-699e-4932-ac9d-e7f5c62d1fa8","type":"BasicTicker"}},"id":"1c53cc70-9d83-424d-ab71-caed07d59449","type":"Grid"},{"attributes":{"formatter":{"id":"43256eca-1133-4366-87a5-ede36f9291f3","type":"BasicTickFormatter"},"plot":{"id":"7fdf19e6-ccf4-4394-9e5d-1425661a81a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"8a9d07fb-f64d-49ce-b825-22a45cdbbeb7","type":"BasicTicker"}},"id":"38fb905f-1a28-40b3-b187-49bf3d85514e","type":"LinearAxis"},{"attributes":{},"id":"8a9d07fb-f64d-49ce-b825-22a45cdbbeb7","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"7fdf19e6-ccf4-4394-9e5d-1425661a81a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"8a9d07fb-f64d-49ce-b825-22a45cdbbeb7","type":"BasicTicker"}},"id":"dc8821eb-6eb3-4c3d-9c5d-c98137b4f40b","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"olive"},"line_alpha":{"value":0.4},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"5a52405e-416d-4ad3-b2ae-8fef398df806","type":"Circle"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"06e27610-925f-4304-af66-855e103ef685","type":"Circle"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"olive"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"a5d5f40b-d960-4292-ac09-9115c383c419","type":"Segment"},{"attributes":{"args":{"circle":{"id":"37a67665-7ae3-4cdd-a1aa-193e1af15849","type":"ColumnDataSource"},"segment":{"id":"a34d62e1-c7d5-4239-98b1-34f08c472540","type":"ColumnDataSource"}},"code":"\nvar links = {0: [1, 2], 1: [0, 3, 4], 2: [0, 5], 3: [1, 4], 4: [1, 3], 5: [2, 3, 4]};\nvar data = {'x0': [], 'y0': [], 'x1': [], 'y1': []};\nvar cdata = circle.data;\nvar indices = cb_data.index['1d'].indices;\nfor (i=0; i < indices.length; i++) {\n    ind0 = indices[i]\n    for (j=0; j < links[ind0].length; j++) {\n        ind1 = links[ind0][j];\n        data['x0'].push(cdata.x[ind0]);\n        data['y0'].push(cdata.y[ind0]);\n        data['x1'].push(cdata.x[ind1]);\n        data['y1'].push(cdata.y[ind1]);\n    }\n}\nsegment.data = data;\n"},"id":"ad1c33dd-1d79-4f34-81f3-23d3a5ad8b0f","type":"CustomJS"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"70b1f993-8883-40c4-a311-2de6d996ec18","type":"Segment"},{"attributes":{"data_source":{"id":"37a67665-7ae3-4cdd-a1aa-193e1af15849","type":"ColumnDataSource"},"glyph":{"id":"5a52405e-416d-4ad3-b2ae-8fef398df806","type":"Circle"},"hover_glyph":{"id":"06e27610-925f-4304-af66-855e103ef685","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"901bc852-d564-465b-9017-65447c078991","type":"Circle"},"selection_glyph":null,"view":{"id":"826299d0-1bae-439b-8fe3-4da7fedc9740","type":"CDSView"}},"id":"7e749682-6752-44b5-9643-0297c5c25574","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"a34d62e1-c7d5-4239-98b1-34f08c472540","type":"ColumnDataSource"},"glyph":{"id":"a5d5f40b-d960-4292-ac09-9115c383c419","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"70b1f993-8883-40c4-a311-2de6d996ec18","type":"Segment"},"selection_glyph":null,"view":{"id":"158607f8-9ee4-4347-a575-1956bb3a728e","type":"CDSView"}},"id":"c65e7e23-5c50-4463-91c3-0c8acac0a9c8","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[2,3,5,6,8,7],"y":[6,4,3,8,7,5]}},"id":"37a67665-7ae3-4cdd-a1aa-193e1af15849","type":"ColumnDataSource"},{"attributes":{"source":{"id":"a34d62e1-c7d5-4239-98b1-34f08c472540","type":"ColumnDataSource"}},"id":"158607f8-9ee4-4347-a575-1956bb3a728e","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"901bc852-d564-465b-9017-65447c078991","type":"Circle"},{"attributes":{},"id":"43256eca-1133-4366-87a5-ede36f9291f3","type":"BasicTickFormatter"},{"attributes":{},"id":"12eb7fcd-0a44-444c-ac4b-e4b72b741abb","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"bc4de829-af2e-49f9-80b4-6b88ee63d300","type":"DataRange1d"},{"attributes":{"callback":{"id":"ad1c33dd-1d79-4f34-81f3-23d3a5ad8b0f","type":"CustomJS"},"renderers":[{"id":"7e749682-6752-44b5-9643-0297c5c25574","type":"GlyphRenderer"}],"tooltips":null},"id":"0cd289e9-f5ab-455e-a521-e587a2660ffc","type":"HoverTool"},{"attributes":{"source":{"id":"37a67665-7ae3-4cdd-a1aa-193e1af15849","type":"ColumnDataSource"}},"id":"826299d0-1bae-439b-8fe3-4da7fedc9740","type":"CDSView"},{"attributes":{},"id":"5e65fbb3-9aad-4c3c-9454-edb77fa1ac80","type":"LinearScale"},{"attributes":{"callback":null},"id":"05783b7a-4ae5-47a1-8f10-75907201c9c2","type":"DataRange1d"},{"attributes":{},"id":"e7687054-9d82-4396-87ca-ede7fdfbe560","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0cd289e9-f5ab-455e-a521-e587a2660ffc","type":"HoverTool"}]},"id":"270f6909-22f2-4fd4-a1f3-1cac91de30ee","type":"Toolbar"},{"attributes":{"plot":null,"text":"Hover over points"},"id":"68e15288-71a5-4b79-85fd-f25e6de291d9","type":"Title"}],"root_ids":["7fdf19e6-ccf4-4394-9e5d-1425661a81a6"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"ac679c2b-9509-4526-aff3-2e650fa3c7ba","elementid":"ccd868a6-6a1e-4f9b-ab6d-8c925927b3b5","modelid":"7fdf19e6-ccf4-4394-9e5d-1425661a81a6"}];
                
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
