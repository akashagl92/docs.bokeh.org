(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("23521281-2208-4104-9d6f-73cee0e88ffc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '23521281-2208-4104-9d6f-73cee0e88ffc' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"9ce3404a-0418-42d0-9be3-24590a20ff8d":{"roots":{"references":[{"attributes":{"formatter":{"id":"4ceab6ee-762f-4d53-96dc-3ebaf7ee7592","type":"BasicTickFormatter"},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":null},"minor_tick_out":8,"plot":{"id":"210a7292-7960-4dda-a6c1-a978378a2f60","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0926a35-f01e-4fde-846d-e39046b0ebd7","type":"BasicTicker"}},"id":"5455a6b2-8192-4d8c-972a-b9834d9baaa7","type":"LinearAxis"},{"attributes":{},"id":"d40ad4c6-3c26-458c-a2b6-808d8e8b0a02","type":"LinearScale"},{"attributes":{},"id":"6c674e43-1faa-4874-9204-ae7150997e26","type":"LinearScale"},{"attributes":{"plot":{"id":"210a7292-7960-4dda-a6c1-a978378a2f60","subtype":"Figure","type":"Plot"}},"id":"cf3375f3-fa42-4d90-8c9d-6c571cb21f96","type":"PanTool"},{"attributes":{"plot":{"id":"210a7292-7960-4dda-a6c1-a978378a2f60","subtype":"Figure","type":"Plot"}},"id":"b3590c0f-c27b-4dc3-bb33-2797665d0dd7","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"210a7292-7960-4dda-a6c1-a978378a2f60","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0926a35-f01e-4fde-846d-e39046b0ebd7","type":"BasicTicker"}},"id":"9c257b76-780d-45ac-a605-b81556072dd6","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"54dae8c6-67b7-4add-9181-94eb80e184cc","type":"Circle"},{"attributes":{"plot":{"id":"210a7292-7960-4dda-a6c1-a978378a2f60","subtype":"Figure","type":"Plot"}},"id":"ae7d1e56-3030-4a4f-986e-21d760cbb16d","type":"ResetTool"},{"attributes":{},"id":"505a1d19-af5b-4900-bafd-868faba42fd2","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"fe4bf764-bd15-4fb4-869f-16996f1d8e77","type":"ColumnDataSource"},{"attributes":{},"id":"2a4f1fa8-e081-4db3-abb8-20bb73cc5cf8","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"532b0213-3493-4781-9506-2337129374c1","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"532b0213-3493-4781-9506-2337129374c1","type":"BoxAnnotation"},"plot":{"id":"210a7292-7960-4dda-a6c1-a978378a2f60","subtype":"Figure","type":"Plot"}},"id":"a0f4983e-ac65-47b1-8fd7-ce7c12206356","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"2ce937a0-1375-4464-b5f0-b2cdb73a9c1c","type":"LinearAxis"}],"left":[{"id":"5455a6b2-8192-4d8c-972a-b9834d9baaa7","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2ce937a0-1375-4464-b5f0-b2cdb73a9c1c","type":"LinearAxis"},{"id":"618dcb2a-ea52-4ef5-8be0-d93656e0f0ef","type":"Grid"},{"id":"5455a6b2-8192-4d8c-972a-b9834d9baaa7","type":"LinearAxis"},{"id":"9c257b76-780d-45ac-a605-b81556072dd6","type":"Grid"},{"id":"532b0213-3493-4781-9506-2337129374c1","type":"BoxAnnotation"},{"id":"40b9cb43-9dcd-4740-bd90-3ece2c512709","type":"GlyphRenderer"}],"title":{"id":"fce3e87a-711e-4717-99d7-627b79c5fcd1","type":"Title"},"tool_events":{"id":"464ee18f-3a96-4bf3-825f-f31df7f2fe88","type":"ToolEvents"},"toolbar":{"id":"8db1719d-d31d-46c3-9717-f1293294403b","type":"Toolbar"},"x_range":{"id":"4dd4d5f9-c0e9-4cc1-81ce-231d338c2aff","type":"DataRange1d"},"x_scale":{"id":"6c674e43-1faa-4874-9204-ae7150997e26","type":"LinearScale"},"y_range":{"id":"ada15b3e-87fa-4861-9f8b-5b6a32bcab84","type":"DataRange1d"},"y_scale":{"id":"d40ad4c6-3c26-458c-a2b6-808d8e8b0a02","type":"LinearScale"}},"id":"210a7292-7960-4dda-a6c1-a978378a2f60","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f0926a35-f01e-4fde-846d-e39046b0ebd7","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"fce3e87a-711e-4717-99d7-627b79c5fcd1","type":"Title"},{"attributes":{"plot":{"id":"210a7292-7960-4dda-a6c1-a978378a2f60","subtype":"Figure","type":"Plot"},"ticker":{"id":"505a1d19-af5b-4900-bafd-868faba42fd2","type":"BasicTicker"}},"id":"618dcb2a-ea52-4ef5-8be0-d93656e0f0ef","type":"Grid"},{"attributes":{"plot":{"id":"210a7292-7960-4dda-a6c1-a978378a2f60","subtype":"Figure","type":"Plot"}},"id":"32db14d8-5777-4d6b-ae5e-6fc8a427801d","type":"HelpTool"},{"attributes":{"data_source":{"id":"fe4bf764-bd15-4fb4-869f-16996f1d8e77","type":"ColumnDataSource"},"glyph":{"id":"54dae8c6-67b7-4add-9181-94eb80e184cc","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9880f9ce-a68c-4cb8-8352-186148f1955f","type":"Circle"},"selection_glyph":null},"id":"40b9cb43-9dcd-4740-bd90-3ece2c512709","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cf3375f3-fa42-4d90-8c9d-6c571cb21f96","type":"PanTool"},{"id":"b3590c0f-c27b-4dc3-bb33-2797665d0dd7","type":"WheelZoomTool"},{"id":"a0f4983e-ac65-47b1-8fd7-ce7c12206356","type":"BoxZoomTool"},{"id":"d7532fe5-0e56-486e-a38b-75084e04c8fc","type":"SaveTool"},{"id":"ae7d1e56-3030-4a4f-986e-21d760cbb16d","type":"ResetTool"},{"id":"32db14d8-5777-4d6b-ae5e-6fc8a427801d","type":"HelpTool"}]},"id":"8db1719d-d31d-46c3-9717-f1293294403b","type":"Toolbar"},{"attributes":{},"id":"464ee18f-3a96-4bf3-825f-f31df7f2fe88","type":"ToolEvents"},{"attributes":{"formatter":{"id":"2a4f1fa8-e081-4db3-abb8-20bb73cc5cf8","type":"BasicTickFormatter"},"major_tick_line_color":{"value":"firebrick"},"major_tick_line_width":{"value":3},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":"orange"},"minor_tick_out":8,"plot":{"id":"210a7292-7960-4dda-a6c1-a978378a2f60","subtype":"Figure","type":"Plot"},"ticker":{"id":"505a1d19-af5b-4900-bafd-868faba42fd2","type":"BasicTicker"}},"id":"2ce937a0-1375-4464-b5f0-b2cdb73a9c1c","type":"LinearAxis"},{"attributes":{"plot":{"id":"210a7292-7960-4dda-a6c1-a978378a2f60","subtype":"Figure","type":"Plot"}},"id":"d7532fe5-0e56-486e-a38b-75084e04c8fc","type":"SaveTool"},{"attributes":{},"id":"4ceab6ee-762f-4d53-96dc-3ebaf7ee7592","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9880f9ce-a68c-4cb8-8352-186148f1955f","type":"Circle"},{"attributes":{"callback":null},"id":"4dd4d5f9-c0e9-4cc1-81ce-231d338c2aff","type":"DataRange1d"},{"attributes":{"callback":null},"id":"ada15b3e-87fa-4861-9f8b-5b6a32bcab84","type":"DataRange1d"}],"root_ids":["210a7292-7960-4dda-a6c1-a978378a2f60"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"9ce3404a-0418-42d0-9be3-24590a20ff8d","elementid":"23521281-2208-4104-9d6f-73cee0e88ffc","modelid":"210a7292-7960-4dda-a6c1-a978378a2f60"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
