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
      };var element = document.getElementById("de19cd9d-6d07-4133-b2c1-d0297f0ecebd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'de19cd9d-6d07-4133-b2c1-d0297f0ecebd' but no matching script tag was found. ")
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
                var docs_json = {"57bdf54b-c427-4224-b3f0-ec8b79a65a8a":{"roots":{"references":[{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"167a53b7-072a-4494-a3e0-e9feaab0327d","type":"Arc"},{"attributes":{"dimension":1,"plot":{"id":"5c2d3598-c628-43ba-ac10-5aff962b2740","subtype":"Figure","type":"Plot"},"ticker":{"id":"638d1e4c-c77f-4c10-833e-679431e2cb5f","type":"BasicTicker"}},"id":"8296b57a-5cf9-4d15-998f-60748bc0f757","type":"Grid"},{"attributes":{"below":[{"id":"33d3192f-a55c-413e-97ee-499aaafa346e","type":"LinearAxis"}],"left":[{"id":"9abd3961-aa6e-4931-be06-715c2891688a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"33d3192f-a55c-413e-97ee-499aaafa346e","type":"LinearAxis"},{"id":"7c7efa08-e8dd-4622-81d1-97122d794322","type":"Grid"},{"id":"9abd3961-aa6e-4931-be06-715c2891688a","type":"LinearAxis"},{"id":"8296b57a-5cf9-4d15-998f-60748bc0f757","type":"Grid"},{"id":"56e713cc-3333-4ff2-b806-fcb2eb38e3b7","type":"BoxAnnotation"},{"id":"52e51ede-118e-4031-8049-03d7a3742f84","type":"GlyphRenderer"}],"title":{"id":"2f8419ee-2194-4276-9e85-0c8e5b292db6","type":"Title"},"tool_events":{"id":"25659fde-7951-4576-8bb1-d748816b8de4","type":"ToolEvents"},"toolbar":{"id":"5344d81a-e97e-4a23-81db-3a5281a08751","type":"Toolbar"},"x_range":{"id":"8d09afc6-6e29-473c-8d03-74d51d956096","type":"DataRange1d"},"y_range":{"id":"4a83cf4a-ae08-47c9-ae8a-a1de8cd8dad3","type":"DataRange1d"}},"id":"5c2d3598-c628-43ba-ac10-5aff962b2740","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"fe42a81d-021c-4b26-9057-41f05e0fe464","type":"BasicTicker"},{"attributes":{},"id":"638d1e4c-c77f-4c10-833e-679431e2cb5f","type":"BasicTicker"},{"attributes":{"plot":{"id":"5c2d3598-c628-43ba-ac10-5aff962b2740","subtype":"Figure","type":"Plot"}},"id":"b8043f4a-7c47-4b27-8d0e-10436f00a685","type":"PanTool"},{"attributes":{"plot":{"id":"5c2d3598-c628-43ba-ac10-5aff962b2740","subtype":"Figure","type":"Plot"}},"id":"c2c59d2d-be84-4507-bc39-332582882843","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"5c2d3598-c628-43ba-ac10-5aff962b2740","subtype":"Figure","type":"Plot"}},"id":"a929bf16-263b-4f90-add9-c6ad86939812","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56e713cc-3333-4ff2-b806-fcb2eb38e3b7","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"a8b5cc92-b654-415d-82b9-1b3c210c2e15","type":"ColumnDataSource"},"glyph":{"id":"deec3a9a-fa81-4e5d-b3be-e87a86ab7b06","type":"Arc"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"167a53b7-072a-4494-a3e0-e9feaab0327d","type":"Arc"},"selection_glyph":null},"id":"52e51ede-118e-4031-8049-03d7a3742f84","type":"GlyphRenderer"},{"attributes":{},"id":"99f728b4-4591-4965-9207-b209ae120b49","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"4a83cf4a-ae08-47c9-ae8a-a1de8cd8dad3","type":"DataRange1d"},{"attributes":{"formatter":{"id":"6c8a8029-3639-451d-9e37-570eb861056a","type":"BasicTickFormatter"},"plot":{"id":"5c2d3598-c628-43ba-ac10-5aff962b2740","subtype":"Figure","type":"Plot"},"ticker":{"id":"638d1e4c-c77f-4c10-833e-679431e2cb5f","type":"BasicTicker"}},"id":"9abd3961-aa6e-4931-be06-715c2891688a","type":"LinearAxis"},{"attributes":{"formatter":{"id":"99f728b4-4591-4965-9207-b209ae120b49","type":"BasicTickFormatter"},"plot":{"id":"5c2d3598-c628-43ba-ac10-5aff962b2740","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe42a81d-021c-4b26-9057-41f05e0fe464","type":"BasicTicker"}},"id":"33d3192f-a55c-413e-97ee-499aaafa346e","type":"LinearAxis"},{"attributes":{},"id":"6c8a8029-3639-451d-9e37-570eb861056a","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b8043f4a-7c47-4b27-8d0e-10436f00a685","type":"PanTool"},{"id":"c2c59d2d-be84-4507-bc39-332582882843","type":"WheelZoomTool"},{"id":"f5bcf583-879b-4d0b-b2f5-ce3a8e373f2a","type":"BoxZoomTool"},{"id":"5ce562cb-d1d3-489e-8ceb-27e20936b45f","type":"SaveTool"},{"id":"e6b5c981-6cb2-4e20-aba5-caa84900ef1e","type":"ResetTool"},{"id":"a929bf16-263b-4f90-add9-c6ad86939812","type":"HelpTool"}]},"id":"5344d81a-e97e-4a23-81db-3a5281a08751","type":"Toolbar"},{"attributes":{"plot":{"id":"5c2d3598-c628-43ba-ac10-5aff962b2740","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe42a81d-021c-4b26-9057-41f05e0fe464","type":"BasicTicker"}},"id":"7c7efa08-e8dd-4622-81d1-97122d794322","type":"Grid"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_color":{"value":"navy"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"deec3a9a-fa81-4e5d-b3be-e87a86ab7b06","type":"Arc"},{"attributes":{},"id":"25659fde-7951-4576-8bb1-d748816b8de4","type":"ToolEvents"},{"attributes":{"plot":null,"text":""},"id":"2f8419ee-2194-4276-9e85-0c8e5b292db6","type":"Title"},{"attributes":{"overlay":{"id":"56e713cc-3333-4ff2-b806-fcb2eb38e3b7","type":"BoxAnnotation"},"plot":{"id":"5c2d3598-c628-43ba-ac10-5aff962b2740","subtype":"Figure","type":"Plot"}},"id":"f5bcf583-879b-4d0b-b2f5-ce3a8e373f2a","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"a8b5cc92-b654-415d-82b9-1b3c210c2e15","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"5c2d3598-c628-43ba-ac10-5aff962b2740","subtype":"Figure","type":"Plot"}},"id":"e6b5c981-6cb2-4e20-aba5-caa84900ef1e","type":"ResetTool"},{"attributes":{"callback":null},"id":"8d09afc6-6e29-473c-8d03-74d51d956096","type":"DataRange1d"},{"attributes":{"plot":{"id":"5c2d3598-c628-43ba-ac10-5aff962b2740","subtype":"Figure","type":"Plot"}},"id":"5ce562cb-d1d3-489e-8ceb-27e20936b45f","type":"SaveTool"}],"root_ids":["5c2d3598-c628-43ba-ac10-5aff962b2740"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"57bdf54b-c427-4224-b3f0-ec8b79a65a8a","elementid":"de19cd9d-6d07-4133-b2c1-d0297f0ecebd","modelid":"5c2d3598-c628-43ba-ac10-5aff962b2740"}];
                
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
