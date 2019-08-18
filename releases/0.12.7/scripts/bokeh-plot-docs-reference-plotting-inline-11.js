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
      };var element = document.getElementById("b10a922e-cef3-4d62-aad2-a6feaac7f3e3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b10a922e-cef3-4d62-aad2-a6feaac7f3e3' but no matching script tag was found. ")
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
                var docs_json = {"641d4a70-63c7-44a3-a82d-fe0f69afca79":{"roots":{"references":[{"attributes":{},"id":"875673f4-3c98-4453-85b2-009bb35d3175","type":"ResetTool"},{"attributes":{},"id":"d0b7ae1f-30d7-4db3-b91c-f9a27eb25a40","type":"PanTool"},{"attributes":{"callback":null},"id":"63a9957d-b48e-417e-bf63-f5d45724054a","type":"DataRange1d"},{"attributes":{},"id":"8a5bd3cf-6c8a-4f19-88ce-149d2a0e6974","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d0b7ae1f-30d7-4db3-b91c-f9a27eb25a40","type":"PanTool"},{"id":"89d75580-6a90-404b-9868-15d9fc756736","type":"WheelZoomTool"},{"id":"42df7a10-ac1e-4af5-a401-219eec6d1520","type":"BoxZoomTool"},{"id":"bb48d6fa-e346-4624-8cbf-dac1d2518b69","type":"SaveTool"},{"id":"875673f4-3c98-4453-85b2-009bb35d3175","type":"ResetTool"},{"id":"312594ed-3393-4002-a769-22feb79bfa5e","type":"HelpTool"}]},"id":"059fa363-c91e-4046-8125-1a756f70a5ae","type":"Toolbar"},{"attributes":{},"id":"87b569e3-12b5-471b-a24a-4ad3ff321204","type":"BasicTicker"},{"attributes":{"formatter":{"id":"8a5bd3cf-6c8a-4f19-88ce-149d2a0e6974","type":"BasicTickFormatter"},"plot":{"id":"05424c9e-2031-4cfd-aa0a-955c66ea471b","subtype":"Figure","type":"Plot"},"ticker":{"id":"87b569e3-12b5-471b-a24a-4ad3ff321204","type":"BasicTicker"}},"id":"d0c790aa-3561-4d9e-aab6-5c9805977d3c","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"e727cf1c-6b40-4ca3-9d91-c57752bec6eb","type":"ColumnDataSource"},{"attributes":{},"id":"dcf5c85d-7a94-44f5-8555-8cd1b3be1cec","type":"LinearScale"},{"attributes":{},"id":"ae843491-e4ab-4ae1-aa99-530c4a900f5f","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c7656ebf-b4a6-434a-ac0b-2fc06b566eeb","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"line"},"id":"63e2a432-3ca2-42ff-9cf5-8515c40e36d7","type":"Title"},{"attributes":{"callback":null},"id":"fc506a56-bac0-4e0e-a7f7-579da70ef979","type":"DataRange1d"},{"attributes":{"below":[{"id":"d0c790aa-3561-4d9e-aab6-5c9805977d3c","type":"LinearAxis"}],"left":[{"id":"9d81a5fb-df0d-4560-9dda-33b8eee26b3f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d0c790aa-3561-4d9e-aab6-5c9805977d3c","type":"LinearAxis"},{"id":"e508e6ba-a2c6-4ca3-8ef1-bd9416e314df","type":"Grid"},{"id":"9d81a5fb-df0d-4560-9dda-33b8eee26b3f","type":"LinearAxis"},{"id":"7b6d4540-17b1-4d65-af4c-1d835c7bcefa","type":"Grid"},{"id":"c7656ebf-b4a6-434a-ac0b-2fc06b566eeb","type":"BoxAnnotation"},{"id":"c4398925-8ac2-4db3-bc78-56e1cd0b9cfa","type":"GlyphRenderer"}],"title":{"id":"63e2a432-3ca2-42ff-9cf5-8515c40e36d7","type":"Title"},"toolbar":{"id":"059fa363-c91e-4046-8125-1a756f70a5ae","type":"Toolbar"},"x_range":{"id":"63a9957d-b48e-417e-bf63-f5d45724054a","type":"DataRange1d"},"x_scale":{"id":"dcf5c85d-7a94-44f5-8555-8cd1b3be1cec","type":"LinearScale"},"y_range":{"id":"fc506a56-bac0-4e0e-a7f7-579da70ef979","type":"DataRange1d"},"y_scale":{"id":"ae843491-e4ab-4ae1-aa99-530c4a900f5f","type":"LinearScale"}},"id":"05424c9e-2031-4cfd-aa0a-955c66ea471b","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b88abdc2-ec1a-4dd1-a5a3-4e1d619f0839","type":"Line"},{"attributes":{"formatter":{"id":"0386c5d2-41b3-4b86-ac86-710a8ca77750","type":"BasicTickFormatter"},"plot":{"id":"05424c9e-2031-4cfd-aa0a-955c66ea471b","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e4576a8-8013-484d-8a73-f3ec9cbb004a","type":"BasicTicker"}},"id":"9d81a5fb-df0d-4560-9dda-33b8eee26b3f","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"05424c9e-2031-4cfd-aa0a-955c66ea471b","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e4576a8-8013-484d-8a73-f3ec9cbb004a","type":"BasicTicker"}},"id":"7b6d4540-17b1-4d65-af4c-1d835c7bcefa","type":"Grid"},{"attributes":{"source":{"id":"e727cf1c-6b40-4ca3-9d91-c57752bec6eb","type":"ColumnDataSource"}},"id":"8d3c8890-9f77-44f0-9927-19a3605dd29a","type":"CDSView"},{"attributes":{},"id":"3e4576a8-8013-484d-8a73-f3ec9cbb004a","type":"BasicTicker"},{"attributes":{},"id":"312594ed-3393-4002-a769-22feb79bfa5e","type":"HelpTool"},{"attributes":{},"id":"bb48d6fa-e346-4624-8cbf-dac1d2518b69","type":"SaveTool"},{"attributes":{"data_source":{"id":"e727cf1c-6b40-4ca3-9d91-c57752bec6eb","type":"ColumnDataSource"},"glyph":{"id":"b88abdc2-ec1a-4dd1-a5a3-4e1d619f0839","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c2194696-3e3c-408f-8dd3-21e4ec7b1672","type":"Line"},"selection_glyph":null,"view":{"id":"8d3c8890-9f77-44f0-9927-19a3605dd29a","type":"CDSView"}},"id":"c4398925-8ac2-4db3-bc78-56e1cd0b9cfa","type":"GlyphRenderer"},{"attributes":{},"id":"0386c5d2-41b3-4b86-ac86-710a8ca77750","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"c7656ebf-b4a6-434a-ac0b-2fc06b566eeb","type":"BoxAnnotation"}},"id":"42df7a10-ac1e-4af5-a401-219eec6d1520","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"05424c9e-2031-4cfd-aa0a-955c66ea471b","subtype":"Figure","type":"Plot"},"ticker":{"id":"87b569e3-12b5-471b-a24a-4ad3ff321204","type":"BasicTicker"}},"id":"e508e6ba-a2c6-4ca3-8ef1-bd9416e314df","type":"Grid"},{"attributes":{},"id":"89d75580-6a90-404b-9868-15d9fc756736","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c2194696-3e3c-408f-8dd3-21e4ec7b1672","type":"Line"}],"root_ids":["05424c9e-2031-4cfd-aa0a-955c66ea471b"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"641d4a70-63c7-44a3-a82d-fe0f69afca79","elementid":"b10a922e-cef3-4d62-aad2-a6feaac7f3e3","modelid":"05424c9e-2031-4cfd-aa0a-955c66ea471b"}];
                
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
