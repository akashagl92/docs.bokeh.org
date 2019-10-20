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
      };var element = document.getElementById("6f7a319d-5922-45ee-a49c-e6831c7c757b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6f7a319d-5922-45ee-a49c-e6831c7c757b' but no matching script tag was found. ")
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
                var docs_json = {"9a606b7d-612e-4149-adc0-5e870190c081":{"roots":{"references":[{"attributes":{"plot":{"id":"6ba96496-16a8-440e-b420-40184ac09781","subtype":"Figure","type":"Plot"}},"id":"7d2a94cf-0a07-4ee8-801e-c845b995309a","type":"PanTool"},{"attributes":{"callback":null},"id":"1a5d0a6a-8151-4999-901e-4f1cd10bf76c","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7d2a94cf-0a07-4ee8-801e-c845b995309a","type":"PanTool"},{"id":"0c9f11ee-e993-4901-b074-78bfa208430b","type":"WheelZoomTool"},{"id":"8b4f9734-e74c-4822-8935-67aa6b580b25","type":"BoxZoomTool"},{"id":"b97ec729-3885-48f7-9c19-ac71a8fc0295","type":"SaveTool"},{"id":"706f61ca-e935-465e-9e10-5ebeeceef2a2","type":"ResetTool"},{"id":"15f6c1bc-5024-4fb2-9e2e-38733cfc47a5","type":"HelpTool"}]},"id":"11db1f88-13bf-4d65-8c12-31bfb604932b","type":"Toolbar"},{"attributes":{"plot":{"id":"6ba96496-16a8-440e-b420-40184ac09781","subtype":"Figure","type":"Plot"}},"id":"706f61ca-e935-465e-9e10-5ebeeceef2a2","type":"ResetTool"},{"attributes":{"callback":null},"id":"3f69efbf-8405-4bf7-9b13-9771f93721b9","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c793764f-ad9f-46c5-90fb-c92765902b3f","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"88e2fe9a-1c2b-41fc-b1cd-f4d0c3965ac9","type":"Title"},{"attributes":{},"id":"4ecab8bc-1932-4e47-a846-dd731f339faa","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e2298f4b-294e-4366-ad02-2b4f7a7c7281","type":"Circle"},{"attributes":{},"id":"ff404bfb-4d87-4109-87ba-c703fd6206b5","type":"BasicTicker"},{"attributes":{"plot":{"id":"6ba96496-16a8-440e-b420-40184ac09781","subtype":"Figure","type":"Plot"}},"id":"15f6c1bc-5024-4fb2-9e2e-38733cfc47a5","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"cc4cd2ba-146b-4bfc-8e52-26dc2ade25cd","type":"Circle"},{"attributes":{"bounds":[2,4],"dimension":1,"plot":{"id":"6ba96496-16a8-440e-b420-40184ac09781","subtype":"Figure","type":"Plot"},"ticker":{"id":"ff404bfb-4d87-4109-87ba-c703fd6206b5","type":"BasicTicker"}},"id":"38522f89-da7d-4728-9952-a8abeb9297dd","type":"Grid"},{"attributes":{"formatter":{"id":"56460b65-4730-4dec-b7c2-904b49fdbf8e","type":"BasicTickFormatter"},"plot":{"id":"6ba96496-16a8-440e-b420-40184ac09781","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ecab8bc-1932-4e47-a846-dd731f339faa","type":"BasicTicker"}},"id":"bfe9d441-e6fd-4095-a840-c7ed7c8c0d59","type":"LinearAxis"},{"attributes":{},"id":"9f0daf4d-4744-4d6f-b523-31d95042e349","type":"ToolEvents"},{"attributes":{"overlay":{"id":"c793764f-ad9f-46c5-90fb-c92765902b3f","type":"BoxAnnotation"},"plot":{"id":"6ba96496-16a8-440e-b420-40184ac09781","subtype":"Figure","type":"Plot"}},"id":"8b4f9734-e74c-4822-8935-67aa6b580b25","type":"BoxZoomTool"},{"attributes":{"bounds":[2,4],"plot":{"id":"6ba96496-16a8-440e-b420-40184ac09781","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ecab8bc-1932-4e47-a846-dd731f339faa","type":"BasicTicker"}},"id":"62323372-3cdd-40bf-b144-74fd6a4c709f","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"8c46dc18-8618-4fc3-9356-3aa8d3282b84","type":"ColumnDataSource"},{"attributes":{},"id":"56460b65-4730-4dec-b7c2-904b49fdbf8e","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"6ba96496-16a8-440e-b420-40184ac09781","subtype":"Figure","type":"Plot"}},"id":"b97ec729-3885-48f7-9c19-ac71a8fc0295","type":"SaveTool"},{"attributes":{"data_source":{"id":"8c46dc18-8618-4fc3-9356-3aa8d3282b84","type":"ColumnDataSource"},"glyph":{"id":"e2298f4b-294e-4366-ad02-2b4f7a7c7281","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cc4cd2ba-146b-4bfc-8e52-26dc2ade25cd","type":"Circle"},"selection_glyph":null},"id":"81ab9580-60bb-4725-9f72-ccf657a9ed44","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"6ba96496-16a8-440e-b420-40184ac09781","subtype":"Figure","type":"Plot"}},"id":"0c9f11ee-e993-4901-b074-78bfa208430b","type":"WheelZoomTool"},{"attributes":{},"id":"6c85678b-3b4c-4a7b-a4e3-d523ac38154a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"6c85678b-3b4c-4a7b-a4e3-d523ac38154a","type":"BasicTickFormatter"},"plot":{"id":"6ba96496-16a8-440e-b420-40184ac09781","subtype":"Figure","type":"Plot"},"ticker":{"id":"ff404bfb-4d87-4109-87ba-c703fd6206b5","type":"BasicTicker"}},"id":"1bcddc26-474a-4144-a43f-7bb3cce95a34","type":"LinearAxis"},{"attributes":{"below":[{"id":"bfe9d441-e6fd-4095-a840-c7ed7c8c0d59","type":"LinearAxis"}],"left":[{"id":"1bcddc26-474a-4144-a43f-7bb3cce95a34","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"bfe9d441-e6fd-4095-a840-c7ed7c8c0d59","type":"LinearAxis"},{"id":"62323372-3cdd-40bf-b144-74fd6a4c709f","type":"Grid"},{"id":"1bcddc26-474a-4144-a43f-7bb3cce95a34","type":"LinearAxis"},{"id":"38522f89-da7d-4728-9952-a8abeb9297dd","type":"Grid"},{"id":"c793764f-ad9f-46c5-90fb-c92765902b3f","type":"BoxAnnotation"},{"id":"81ab9580-60bb-4725-9f72-ccf657a9ed44","type":"GlyphRenderer"}],"title":{"id":"88e2fe9a-1c2b-41fc-b1cd-f4d0c3965ac9","type":"Title"},"tool_events":{"id":"9f0daf4d-4744-4d6f-b523-31d95042e349","type":"ToolEvents"},"toolbar":{"id":"11db1f88-13bf-4d65-8c12-31bfb604932b","type":"Toolbar"},"x_range":{"id":"1a5d0a6a-8151-4999-901e-4f1cd10bf76c","type":"DataRange1d"},"y_range":{"id":"3f69efbf-8405-4bf7-9b13-9771f93721b9","type":"DataRange1d"}},"id":"6ba96496-16a8-440e-b420-40184ac09781","subtype":"Figure","type":"Plot"}],"root_ids":["6ba96496-16a8-440e-b420-40184ac09781"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"9a606b7d-612e-4149-adc0-5e870190c081","elementid":"6f7a319d-5922-45ee-a49c-e6831c7c757b","modelid":"6ba96496-16a8-440e-b420-40184ac09781"}];
                
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
