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
      };var element = document.getElementById("07acd75c-c321-49b6-a179-0a5d22228dd4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '07acd75c-c321-49b6-a179-0a5d22228dd4' but no matching script tag was found. ")
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
                var docs_json = {"d6c269c7-3889-4c91-8556-24fa3cbe2262":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"766ee091-909e-440d-bcb7-a4dd5b2bcc6f","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0b1eecc9-eb18-4abb-8f73-90f056d0fb8f","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3dcbd2f9-b8be-402d-bfc7-41653dd3b21f","type":"PanTool"},{"id":"0d070d51-f96b-4a3b-8668-ac981efb3338","type":"WheelZoomTool"},{"id":"4e6ccbe9-3f72-4215-9d21-41e84722a501","type":"BoxZoomTool"},{"id":"9e8072ba-42e1-4062-bbbe-8db0677f3130","type":"SaveTool"},{"id":"793c8caf-9986-46eb-b843-f4bd62e1c5be","type":"ResetTool"},{"id":"357e4aec-0445-46d2-b3af-063ff5dfc725","type":"HelpTool"}]},"id":"e2e0a5ec-91df-466f-905e-51313d950923","type":"Toolbar"},{"attributes":{"below":[{"id":"bb30a622-1f54-41d2-9a2a-61d9efbe03f5","type":"LinearAxis"}],"left":[{"id":"d2128904-7f3e-4e1d-8967-f6b2ff1bd914","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"bb30a622-1f54-41d2-9a2a-61d9efbe03f5","type":"LinearAxis"},{"id":"95efe2ab-fd85-4927-b005-73fcb51ea52b","type":"Grid"},{"id":"d2128904-7f3e-4e1d-8967-f6b2ff1bd914","type":"LinearAxis"},{"id":"408f4d3f-c961-47c6-91a9-83a1637057b7","type":"Grid"},{"id":"0b1eecc9-eb18-4abb-8f73-90f056d0fb8f","type":"BoxAnnotation"},{"id":"57dbcb24-8903-47c2-abb0-3ad392739de1","type":"GlyphRenderer"}],"title":{"id":"766ee091-909e-440d-bcb7-a4dd5b2bcc6f","type":"Title"},"tool_events":{"id":"283054fc-8d53-4dbb-9192-a99e144df839","type":"ToolEvents"},"toolbar":{"id":"e2e0a5ec-91df-466f-905e-51313d950923","type":"Toolbar"},"x_range":{"id":"14a79df0-9142-4f50-8391-ca1de2b84ac5","type":"DataRange1d"},"y_range":{"id":"c6099317-d068-4940-8010-712379cb7921","type":"DataRange1d"}},"id":"4632da17-65f9-41bb-b14e-1d47e7d47949","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"4632da17-65f9-41bb-b14e-1d47e7d47949","subtype":"Figure","type":"Plot"},"ticker":{"id":"a6fe07ec-513d-436a-bbe2-400ecb9961b4","type":"BasicTicker"}},"id":"408f4d3f-c961-47c6-91a9-83a1637057b7","type":"Grid"},{"attributes":{},"id":"a6fe07ec-513d-436a-bbe2-400ecb9961b4","type":"BasicTicker"},{"attributes":{"plot":{"id":"4632da17-65f9-41bb-b14e-1d47e7d47949","subtype":"Figure","type":"Plot"},"ticker":{"id":"b0515f35-9577-4fad-a236-ac4b02fa0a04","type":"BasicTicker"}},"id":"95efe2ab-fd85-4927-b005-73fcb51ea52b","type":"Grid"},{"attributes":{"overlay":{"id":"0b1eecc9-eb18-4abb-8f73-90f056d0fb8f","type":"BoxAnnotation"},"plot":{"id":"4632da17-65f9-41bb-b14e-1d47e7d47949","subtype":"Figure","type":"Plot"}},"id":"4e6ccbe9-3f72-4215-9d21-41e84722a501","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"418b9097-a05b-4808-a06b-31b26631607c","type":"BasicTickFormatter"},"plot":{"id":"4632da17-65f9-41bb-b14e-1d47e7d47949","subtype":"Figure","type":"Plot"},"ticker":{"id":"b0515f35-9577-4fad-a236-ac4b02fa0a04","type":"BasicTicker"}},"id":"bb30a622-1f54-41d2-9a2a-61d9efbe03f5","type":"LinearAxis"},{"attributes":{"callback":null},"id":"c6099317-d068-4940-8010-712379cb7921","type":"DataRange1d"},{"attributes":{},"id":"76e93303-e622-4ad8-8d55-e3b266367ff7","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#FB8072"},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"73621976-f152-4ce1-a4df-416b86533b5e","type":"CircleCross"},{"attributes":{"formatter":{"id":"76e93303-e622-4ad8-8d55-e3b266367ff7","type":"BasicTickFormatter"},"plot":{"id":"4632da17-65f9-41bb-b14e-1d47e7d47949","subtype":"Figure","type":"Plot"},"ticker":{"id":"a6fe07ec-513d-436a-bbe2-400ecb9961b4","type":"BasicTicker"}},"id":"d2128904-7f3e-4e1d-8967-f6b2ff1bd914","type":"LinearAxis"},{"attributes":{},"id":"283054fc-8d53-4dbb-9192-a99e144df839","type":"ToolEvents"},{"attributes":{"callback":null},"id":"14a79df0-9142-4f50-8391-ca1de2b84ac5","type":"DataRange1d"},{"attributes":{"plot":{"id":"4632da17-65f9-41bb-b14e-1d47e7d47949","subtype":"Figure","type":"Plot"}},"id":"3dcbd2f9-b8be-402d-bfc7-41653dd3b21f","type":"PanTool"},{"attributes":{"plot":{"id":"4632da17-65f9-41bb-b14e-1d47e7d47949","subtype":"Figure","type":"Plot"}},"id":"0d070d51-f96b-4a3b-8668-ac981efb3338","type":"WheelZoomTool"},{"attributes":{},"id":"b0515f35-9577-4fad-a236-ac4b02fa0a04","type":"BasicTicker"},{"attributes":{"plot":{"id":"4632da17-65f9-41bb-b14e-1d47e7d47949","subtype":"Figure","type":"Plot"}},"id":"9e8072ba-42e1-4062-bbbe-8db0677f3130","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"c3e4408d-6e40-4826-9389-de2e15a9c0aa","type":"CircleCross"},{"attributes":{"plot":{"id":"4632da17-65f9-41bb-b14e-1d47e7d47949","subtype":"Figure","type":"Plot"}},"id":"357e4aec-0445-46d2-b3af-063ff5dfc725","type":"HelpTool"},{"attributes":{"plot":{"id":"4632da17-65f9-41bb-b14e-1d47e7d47949","subtype":"Figure","type":"Plot"}},"id":"793c8caf-9986-46eb-b843-f4bd62e1c5be","type":"ResetTool"},{"attributes":{},"id":"418b9097-a05b-4808-a06b-31b26631607c","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"b089f377-6dc0-49a2-a0cb-ab3ba9611452","type":"ColumnDataSource"},"glyph":{"id":"73621976-f152-4ce1-a4df-416b86533b5e","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c3e4408d-6e40-4826-9389-de2e15a9c0aa","type":"CircleCross"},"selection_glyph":null},"id":"57dbcb24-8903-47c2-abb0-3ad392739de1","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[4,5,6]}},"id":"b089f377-6dc0-49a2-a0cb-ab3ba9611452","type":"ColumnDataSource"}],"root_ids":["4632da17-65f9-41bb-b14e-1d47e7d47949"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"d6c269c7-3889-4c91-8556-24fa3cbe2262","elementid":"07acd75c-c321-49b6-a179-0a5d22228dd4","modelid":"4632da17-65f9-41bb-b14e-1d47e7d47949"}];
                
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
