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
      };var element = document.getElementById("cb8e65a7-6241-414c-bead-4edc8d9184fb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cb8e65a7-6241-414c-bead-4edc8d9184fb' but no matching script tag was found. ")
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
                var docs_json = {"4a6cf794-6603-44a8-a632-ce40a934f41e":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"ffb56d8f-8be0-417a-8e6b-88f2dc874226","type":"Title"},{"attributes":{"formatter":{"id":"7bb55b72-7ac0-437d-8d28-258f4569ca4d","type":"BasicTickFormatter"},"plot":{"id":"20707935-d20a-43e7-a1d4-2d0a53b53c45","subtype":"Figure","type":"Plot"},"ticker":{"id":"ef62c0fc-7072-4f57-b3cb-adf020c883bb","type":"BasicTicker"}},"id":"c4c2cdd2-c7d6-404d-8e12-cc29107aa143","type":"LinearAxis"},{"attributes":{},"id":"7bb55b72-7ac0-437d-8d28-258f4569ca4d","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"a8f67d8a-0b3c-48c0-9e4a-0b6ace99d76b","type":"ColumnDataSource"},{"attributes":{},"id":"90e719a4-1d0d-4911-9015-718fb1755db3","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"80962444-feae-4bf9-925a-8e96db936682","type":"Circle"},{"attributes":{"plot":{"id":"20707935-d20a-43e7-a1d4-2d0a53b53c45","subtype":"Figure","type":"Plot"},"ticker":{"id":"90e719a4-1d0d-4911-9015-718fb1755db3","type":"BasicTicker"}},"id":"54cc0c74-a5ba-495e-9754-265660e087c2","type":"Grid"},{"attributes":{},"id":"91b448b2-c5a7-4f9a-8464-19598f7e060c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"20707935-d20a-43e7-a1d4-2d0a53b53c45","subtype":"Figure","type":"Plot"}},"id":"432b42da-ce7b-4515-9a77-047a2e232ca9","type":"PanTool"},{"attributes":{"data_source":{"id":"a8f67d8a-0b3c-48c0-9e4a-0b6ace99d76b","type":"ColumnDataSource"},"glyph":{"id":"d7bb43f1-a685-4843-b66a-667d22effb0b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"80962444-feae-4bf9-925a-8e96db936682","type":"Circle"},"selection_glyph":null},"id":"4328c132-19bc-447a-998a-dfdf24af056e","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"65c1ce06-0f9a-4e80-b517-98f1affdd809","type":"BoxAnnotation"},{"attributes":{},"id":"ef62c0fc-7072-4f57-b3cb-adf020c883bb","type":"BasicTicker"},{"attributes":{"plot":{"id":"20707935-d20a-43e7-a1d4-2d0a53b53c45","subtype":"Figure","type":"Plot"}},"id":"cfbfb5a2-3ff5-4920-96b1-71d93d737efe","type":"WheelZoomTool"},{"attributes":{},"id":"e1909bf8-5e3e-49f3-b13a-7314712c23a0","type":"ToolEvents"},{"attributes":{"plot":{"id":"20707935-d20a-43e7-a1d4-2d0a53b53c45","subtype":"Figure","type":"Plot"}},"id":"e63cf8f6-45cf-441f-b8df-64e6a7176e8e","type":"ResetTool"},{"attributes":{"overlay":{"id":"65c1ce06-0f9a-4e80-b517-98f1affdd809","type":"BoxAnnotation"},"plot":{"id":"20707935-d20a-43e7-a1d4-2d0a53b53c45","subtype":"Figure","type":"Plot"}},"id":"9e1499b8-6757-4b9e-9d09-d3d096dd0361","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"463ffacd-3de5-443c-9e37-0370e8a67a20","type":"LinearAxis"}],"left":[{"id":"c4c2cdd2-c7d6-404d-8e12-cc29107aa143","type":"LinearAxis"}],"outline_line_alpha":{"value":0.3},"outline_line_color":{"value":"navy"},"outline_line_width":{"value":7},"plot_height":400,"plot_width":400,"renderers":[{"id":"463ffacd-3de5-443c-9e37-0370e8a67a20","type":"LinearAxis"},{"id":"54cc0c74-a5ba-495e-9754-265660e087c2","type":"Grid"},{"id":"c4c2cdd2-c7d6-404d-8e12-cc29107aa143","type":"LinearAxis"},{"id":"b27e658d-ab57-44c0-ae60-e5891cbefc5d","type":"Grid"},{"id":"65c1ce06-0f9a-4e80-b517-98f1affdd809","type":"BoxAnnotation"},{"id":"4328c132-19bc-447a-998a-dfdf24af056e","type":"GlyphRenderer"}],"title":{"id":"ffb56d8f-8be0-417a-8e6b-88f2dc874226","type":"Title"},"tool_events":{"id":"e1909bf8-5e3e-49f3-b13a-7314712c23a0","type":"ToolEvents"},"toolbar":{"id":"b50dc4e4-e91b-499d-83e9-05db02029fac","type":"Toolbar"},"x_range":{"id":"68304d93-49e2-4cb5-9685-3e6d833a9a77","type":"DataRange1d"},"y_range":{"id":"a2dab1e9-c66e-46e9-942e-6c7a4f05eaa4","type":"DataRange1d"}},"id":"20707935-d20a-43e7-a1d4-2d0a53b53c45","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"68304d93-49e2-4cb5-9685-3e6d833a9a77","type":"DataRange1d"},{"attributes":{"callback":null},"id":"a2dab1e9-c66e-46e9-942e-6c7a4f05eaa4","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"20707935-d20a-43e7-a1d4-2d0a53b53c45","subtype":"Figure","type":"Plot"},"ticker":{"id":"ef62c0fc-7072-4f57-b3cb-adf020c883bb","type":"BasicTicker"}},"id":"b27e658d-ab57-44c0-ae60-e5891cbefc5d","type":"Grid"},{"attributes":{"formatter":{"id":"91b448b2-c5a7-4f9a-8464-19598f7e060c","type":"BasicTickFormatter"},"plot":{"id":"20707935-d20a-43e7-a1d4-2d0a53b53c45","subtype":"Figure","type":"Plot"},"ticker":{"id":"90e719a4-1d0d-4911-9015-718fb1755db3","type":"BasicTicker"}},"id":"463ffacd-3de5-443c-9e37-0370e8a67a20","type":"LinearAxis"},{"attributes":{"plot":{"id":"20707935-d20a-43e7-a1d4-2d0a53b53c45","subtype":"Figure","type":"Plot"}},"id":"337765f6-3627-4d44-998b-89562a08576a","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d7bb43f1-a685-4843-b66a-667d22effb0b","type":"Circle"},{"attributes":{"plot":{"id":"20707935-d20a-43e7-a1d4-2d0a53b53c45","subtype":"Figure","type":"Plot"}},"id":"2182133b-d154-4a1b-be21-63fef0d9caf1","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"432b42da-ce7b-4515-9a77-047a2e232ca9","type":"PanTool"},{"id":"cfbfb5a2-3ff5-4920-96b1-71d93d737efe","type":"WheelZoomTool"},{"id":"9e1499b8-6757-4b9e-9d09-d3d096dd0361","type":"BoxZoomTool"},{"id":"337765f6-3627-4d44-998b-89562a08576a","type":"SaveTool"},{"id":"e63cf8f6-45cf-441f-b8df-64e6a7176e8e","type":"ResetTool"},{"id":"2182133b-d154-4a1b-be21-63fef0d9caf1","type":"HelpTool"}]},"id":"b50dc4e4-e91b-499d-83e9-05db02029fac","type":"Toolbar"}],"root_ids":["20707935-d20a-43e7-a1d4-2d0a53b53c45"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"4a6cf794-6603-44a8-a632-ce40a934f41e","elementid":"cb8e65a7-6241-414c-bead-4edc8d9184fb","modelid":"20707935-d20a-43e7-a1d4-2d0a53b53c45"}];
                
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
