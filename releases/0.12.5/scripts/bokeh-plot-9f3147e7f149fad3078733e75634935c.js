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
      };var element = document.getElementById("fbc44446-9a16-4cf0-9d3f-daf9aa2d0bb8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fbc44446-9a16-4cf0-9d3f-daf9aa2d0bb8' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"b7e0bb69-ca28-4eb0-a996-93c5a51dc100":{"roots":{"references":[{"attributes":{"below":[{"id":"1283ec31-bb9d-452f-a795-3bb1631dbf0a","type":"LinearAxis"}],"left":[{"id":"79ad7016-672b-4b91-a151-f8500555ab32","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"1283ec31-bb9d-452f-a795-3bb1631dbf0a","type":"LinearAxis"},{"id":"1659e870-d83e-4902-b757-22ffc236a755","type":"Grid"},{"id":"79ad7016-672b-4b91-a151-f8500555ab32","type":"LinearAxis"},{"id":"cc2a978d-f339-4e40-8673-2a9b40a94cb3","type":"Grid"},{"id":"a8fad3e1-2f6f-4e2c-8b11-2967524a5661","type":"BoxAnnotation"},{"id":"b7892268-8ecf-4c65-8926-16116837468c","type":"GlyphRenderer"}],"title":{"id":"e080b84e-c9f2-4427-9947-c83289bcf447","type":"Title"},"tool_events":{"id":"62ce8b12-f336-41e2-b1bf-54aa5d1b1466","type":"ToolEvents"},"toolbar":{"id":"10d64f1a-efc8-4600-a586-f4b2b46b6927","type":"Toolbar"},"x_range":{"id":"0b88f4d3-2fa2-4c77-9e59-9b4d64d4e7c5","type":"DataRange1d"},"y_range":{"id":"34d20aeb-ffb4-440d-8604-717d7f2e0bf7","type":"DataRange1d"}},"id":"d825b13d-4ba8-4d31-854e-04d4478a6f22","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b1b5a432-8435-45bb-bf07-b0e217b6a58d","type":"BasicTickFormatter"},{"attributes":{},"id":"b76dc3d0-dee9-410b-ba62-2e92472a940e","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ff62c8f2-f512-441f-9ad9-7f35b2beace4","type":"Circle"},{"attributes":{"formatter":{"id":"b1b5a432-8435-45bb-bf07-b0e217b6a58d","type":"BasicTickFormatter"},"plot":{"id":"d825b13d-4ba8-4d31-854e-04d4478a6f22","subtype":"Figure","type":"Plot"},"ticker":{"id":"3c1385b4-5e19-4824-a9e8-545aa0132c2e","type":"BasicTicker"}},"id":"79ad7016-672b-4b91-a151-f8500555ab32","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9a227c02-7e80-4f17-bb65-338c12d42072","type":"PanTool"},{"id":"5130dfe6-8948-4106-8bb9-98aad27e2ed5","type":"WheelZoomTool"},{"id":"d1232a3e-2763-4673-a113-94ef5734d3a5","type":"BoxZoomTool"},{"id":"2c8d92e6-abf1-4200-9544-815c965a75b3","type":"SaveTool"},{"id":"c0a40e40-20f1-4741-b38a-888705bb7b1e","type":"ResetTool"},{"id":"34321a9d-acce-4f21-813e-494a9ea7fb17","type":"HelpTool"}]},"id":"10d64f1a-efc8-4600-a586-f4b2b46b6927","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"7b4e99b3-0d48-4cc8-b9c2-94dcbf3dbf1a","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"e4cf7f24-7f46-4a10-b35a-44def7d0ee18","type":"BasicTickFormatter"},"plot":{"id":"d825b13d-4ba8-4d31-854e-04d4478a6f22","subtype":"Figure","type":"Plot"},"ticker":{"id":"b76dc3d0-dee9-410b-ba62-2e92472a940e","type":"BasicTicker"}},"id":"1283ec31-bb9d-452f-a795-3bb1631dbf0a","type":"LinearAxis"},{"attributes":{"plot":{"id":"d825b13d-4ba8-4d31-854e-04d4478a6f22","subtype":"Figure","type":"Plot"}},"id":"2c8d92e6-abf1-4200-9544-815c965a75b3","type":"SaveTool"},{"attributes":{},"id":"62ce8b12-f336-41e2-b1bf-54aa5d1b1466","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"firebrick"},"line_dash":[6,3],"line_width":{"value":2},"size":{"units":"screen","value":60},"x":{"field":"x"},"y":{"field":"y"}},"id":"b6dab94d-1723-4edb-a72a-a5a4241dcd50","type":"Circle"},{"attributes":{"plot":{"id":"d825b13d-4ba8-4d31-854e-04d4478a6f22","subtype":"Figure","type":"Plot"}},"id":"9a227c02-7e80-4f17-bb65-338c12d42072","type":"PanTool"},{"attributes":{"plot":{"id":"d825b13d-4ba8-4d31-854e-04d4478a6f22","subtype":"Figure","type":"Plot"}},"id":"34321a9d-acce-4f21-813e-494a9ea7fb17","type":"HelpTool"},{"attributes":{"callback":null},"id":"34d20aeb-ffb4-440d-8604-717d7f2e0bf7","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a8fad3e1-2f6f-4e2c-8b11-2967524a5661","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"a8fad3e1-2f6f-4e2c-8b11-2967524a5661","type":"BoxAnnotation"},"plot":{"id":"d825b13d-4ba8-4d31-854e-04d4478a6f22","subtype":"Figure","type":"Plot"}},"id":"d1232a3e-2763-4673-a113-94ef5734d3a5","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"d825b13d-4ba8-4d31-854e-04d4478a6f22","subtype":"Figure","type":"Plot"},"ticker":{"id":"b76dc3d0-dee9-410b-ba62-2e92472a940e","type":"BasicTicker"}},"id":"1659e870-d83e-4902-b757-22ffc236a755","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"e080b84e-c9f2-4427-9947-c83289bcf447","type":"Title"},{"attributes":{},"id":"e4cf7f24-7f46-4a10-b35a-44def7d0ee18","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d825b13d-4ba8-4d31-854e-04d4478a6f22","subtype":"Figure","type":"Plot"}},"id":"c0a40e40-20f1-4741-b38a-888705bb7b1e","type":"ResetTool"},{"attributes":{"callback":null},"id":"0b88f4d3-2fa2-4c77-9e59-9b4d64d4e7c5","type":"DataRange1d"},{"attributes":{"data_source":{"id":"7b4e99b3-0d48-4cc8-b9c2-94dcbf3dbf1a","type":"ColumnDataSource"},"glyph":{"id":"b6dab94d-1723-4edb-a72a-a5a4241dcd50","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ff62c8f2-f512-441f-9ad9-7f35b2beace4","type":"Circle"},"selection_glyph":null},"id":"b7892268-8ecf-4c65-8926-16116837468c","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d825b13d-4ba8-4d31-854e-04d4478a6f22","subtype":"Figure","type":"Plot"}},"id":"5130dfe6-8948-4106-8bb9-98aad27e2ed5","type":"WheelZoomTool"},{"attributes":{},"id":"3c1385b4-5e19-4824-a9e8-545aa0132c2e","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"d825b13d-4ba8-4d31-854e-04d4478a6f22","subtype":"Figure","type":"Plot"},"ticker":{"id":"3c1385b4-5e19-4824-a9e8-545aa0132c2e","type":"BasicTicker"}},"id":"cc2a978d-f339-4e40-8673-2a9b40a94cb3","type":"Grid"}],"root_ids":["d825b13d-4ba8-4d31-854e-04d4478a6f22"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"b7e0bb69-ca28-4eb0-a996-93c5a51dc100","elementid":"fbc44446-9a16-4cf0-9d3f-daf9aa2d0bb8","modelid":"d825b13d-4ba8-4d31-854e-04d4478a6f22"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
