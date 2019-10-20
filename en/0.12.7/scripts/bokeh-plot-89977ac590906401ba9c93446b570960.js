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
      };var element = document.getElementById("1e2925cf-e0f7-4c13-87e7-4525f2533635");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1e2925cf-e0f7-4c13-87e7-4525f2533635' but no matching script tag was found. ")
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
                var docs_json = {"5fe07b8d-5054-4ae1-8a00-55566c71c6e1":{"roots":{"references":[{"attributes":{},"id":"80605182-ceef-4065-ba2e-61b7963ccdac","type":"LinearScale"},{"attributes":{},"id":"bf9cff26-4f41-44dc-bb24-0caee4e0b85b","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bf9cff26-4f41-44dc-bb24-0caee4e0b85b","type":"PanTool"},{"id":"a571ab1e-7ae3-47a9-a082-150c1a638f0a","type":"WheelZoomTool"},{"id":"d45a0d27-db30-428d-bccd-a292918d9497","type":"BoxZoomTool"},{"id":"804ae66e-0c8c-4002-8201-c51d0383f65e","type":"SaveTool"},{"id":"b290112e-d22c-4f5b-9953-f0ec1bbd9746","type":"ResetTool"},{"id":"c51b298b-57ea-41f7-9f47-49511eb7a4ff","type":"HelpTool"}]},"id":"ca0db3e2-98f1-4eda-acd1-d413e2a97fe5","type":"Toolbar"},{"attributes":{"callback":null},"id":"324ea6ed-f275-41dd-bb12-94a2e961fe4e","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"092e0c8f-2639-4601-937e-9867b300fad4","type":"Circle"},{"attributes":{},"id":"804ae66e-0c8c-4002-8201-c51d0383f65e","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"97bfedf0-bdba-40fb-baac-4d28c03a4b1d","type":"Title"},{"attributes":{},"id":"774ecfea-1364-489a-a590-9ed23ce40f3b","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"995db900-faaa-42a5-8ea2-05a2e2acc322","type":"LinearAxis"}],"left":[{"id":"3f15e66f-5869-4c0e-bb21-d770e5b2bb24","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"995db900-faaa-42a5-8ea2-05a2e2acc322","type":"LinearAxis"},{"id":"c30b2a3a-3fe5-4ea4-9977-e82235e01a62","type":"Grid"},{"id":"3f15e66f-5869-4c0e-bb21-d770e5b2bb24","type":"LinearAxis"},{"id":"520c2d22-a0fc-465a-af4e-2051ff20bc0a","type":"Grid"},{"id":"7ed4dad1-a6b6-4db0-ad28-dee3af44c3ec","type":"BoxAnnotation"},{"id":"cd63ad74-5110-4f2d-8ba9-76e08431ba11","type":"GlyphRenderer"}],"title":{"id":"97bfedf0-bdba-40fb-baac-4d28c03a4b1d","type":"Title"},"toolbar":{"id":"ca0db3e2-98f1-4eda-acd1-d413e2a97fe5","type":"Toolbar"},"x_range":{"id":"324ea6ed-f275-41dd-bb12-94a2e961fe4e","type":"DataRange1d"},"x_scale":{"id":"79da60b9-a797-40ac-bbf6-dad518ae6e15","type":"LinearScale"},"y_range":{"id":"2345e324-b280-4a34-ad50-e03e457c8847","type":"DataRange1d"},"y_scale":{"id":"80605182-ceef-4065-ba2e-61b7963ccdac","type":"LinearScale"}},"id":"1d55e5bc-6bef-4b06-a44b-6590d4a550d7","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"481dea26-2110-4e33-b397-2d1b58a8eee4","type":"ColumnDataSource"},{"attributes":{},"id":"c51b298b-57ea-41f7-9f47-49511eb7a4ff","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"1d55e5bc-6bef-4b06-a44b-6590d4a550d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"c898c42e-91ca-433c-9127-e338e9736c27","type":"BasicTicker"}},"id":"520c2d22-a0fc-465a-af4e-2051ff20bc0a","type":"Grid"},{"attributes":{},"id":"c898c42e-91ca-433c-9127-e338e9736c27","type":"BasicTicker"},{"attributes":{"source":{"id":"481dea26-2110-4e33-b397-2d1b58a8eee4","type":"ColumnDataSource"}},"id":"a53c2736-cbb8-4bfa-a01c-fb9ad740e5ca","type":"CDSView"},{"attributes":{},"id":"e9b4e971-d3af-46bc-a2ce-3affe058a50b","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7ed4dad1-a6b6-4db0-ad28-dee3af44c3ec","type":"BoxAnnotation"},{"attributes":{},"id":"8a1dc320-4c79-4e1c-83e2-04d2b72508b3","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"2345e324-b280-4a34-ad50-e03e457c8847","type":"DataRange1d"},{"attributes":{"plot":{"id":"1d55e5bc-6bef-4b06-a44b-6590d4a550d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"e9b4e971-d3af-46bc-a2ce-3affe058a50b","type":"BasicTicker"}},"id":"c30b2a3a-3fe5-4ea4-9977-e82235e01a62","type":"Grid"},{"attributes":{"axis_label":"Temp","axis_line_color":{"value":"red"},"axis_line_width":{"value":3},"formatter":{"id":"8a1dc320-4c79-4e1c-83e2-04d2b72508b3","type":"BasicTickFormatter"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"1d55e5bc-6bef-4b06-a44b-6590d4a550d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"e9b4e971-d3af-46bc-a2ce-3affe058a50b","type":"BasicTicker"}},"id":"995db900-faaa-42a5-8ea2-05a2e2acc322","type":"LinearAxis"},{"attributes":{"data_source":{"id":"481dea26-2110-4e33-b397-2d1b58a8eee4","type":"ColumnDataSource"},"glyph":{"id":"37d00984-6b9c-4778-b392-0e173cf7406c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"092e0c8f-2639-4601-937e-9867b300fad4","type":"Circle"},"selection_glyph":null,"view":{"id":"a53c2736-cbb8-4bfa-a01c-fb9ad740e5ca","type":"CDSView"}},"id":"cd63ad74-5110-4f2d-8ba9-76e08431ba11","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"7ed4dad1-a6b6-4db0-ad28-dee3af44c3ec","type":"BoxAnnotation"}},"id":"d45a0d27-db30-428d-bccd-a292918d9497","type":"BoxZoomTool"},{"attributes":{"axis_label":"Pressure","formatter":{"id":"774ecfea-1364-489a-a590-9ed23ce40f3b","type":"BasicTickFormatter"},"major_label_orientation":"vertical","major_label_text_color":{"value":"orange"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"1d55e5bc-6bef-4b06-a44b-6590d4a550d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"c898c42e-91ca-433c-9127-e338e9736c27","type":"BasicTicker"}},"id":"3f15e66f-5869-4c0e-bb21-d770e5b2bb24","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"37d00984-6b9c-4778-b392-0e173cf7406c","type":"Circle"},{"attributes":{},"id":"a571ab1e-7ae3-47a9-a082-150c1a638f0a","type":"WheelZoomTool"},{"attributes":{},"id":"79da60b9-a797-40ac-bbf6-dad518ae6e15","type":"LinearScale"},{"attributes":{},"id":"b290112e-d22c-4f5b-9953-f0ec1bbd9746","type":"ResetTool"}],"root_ids":["1d55e5bc-6bef-4b06-a44b-6590d4a550d7"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"5fe07b8d-5054-4ae1-8a00-55566c71c6e1","elementid":"1e2925cf-e0f7-4c13-87e7-4525f2533635","modelid":"1d55e5bc-6bef-4b06-a44b-6590d4a550d7"}];
                
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
