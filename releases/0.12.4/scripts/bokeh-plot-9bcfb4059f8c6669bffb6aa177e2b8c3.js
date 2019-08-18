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
      };var element = document.getElementById("33f9d4c8-35be-4d68-ab75-545f9fed6d65");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '33f9d4c8-35be-4d68-ab75-545f9fed6d65' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"5b4f64e2-8a94-4f67-8f08-bc45768eef93":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"d434d88e-c206-44bc-9dda-c10440e04855","subtype":"Figure","type":"Plot"},"ticker":{"id":"03ff1262-ce6f-42d9-845b-dd650775d49a","type":"BasicTicker"}},"id":"ec3a0a17-e0ff-48fe-8e25-44a5d454085c","type":"Grid"},{"attributes":{"callback":null},"id":"d04c72c2-b6ca-4113-863b-07da068b1c7f","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"9c340d15-c7b3-4bc4-ba8d-3b6ca8a7c933","type":"Title"},{"attributes":{"formatter":{"id":"b8adfa9d-be82-4c52-87b2-340cd7687b68","type":"BasicTickFormatter"},"plot":{"id":"d434d88e-c206-44bc-9dda-c10440e04855","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3f1e9a5-f970-4770-8f39-95d7315b5aff","type":"BasicTicker"}},"id":"d62fbdca-cfa6-46bb-9ea3-ac5666de0c7f","type":"LinearAxis"},{"attributes":{"below":[{"id":"d62fbdca-cfa6-46bb-9ea3-ac5666de0c7f","type":"LinearAxis"}],"left":[{"id":"c81726a3-166a-418e-b42d-fb06c7047671","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d62fbdca-cfa6-46bb-9ea3-ac5666de0c7f","type":"LinearAxis"},{"id":"0f656ec8-cdd2-4b1a-85eb-18bc8546ea3d","type":"Grid"},{"id":"c81726a3-166a-418e-b42d-fb06c7047671","type":"LinearAxis"},{"id":"ec3a0a17-e0ff-48fe-8e25-44a5d454085c","type":"Grid"},{"id":"542cbde4-c9bd-458e-a117-44d44dc94263","type":"BoxAnnotation"},{"id":"94df90da-f200-4f5b-aea3-77c5b4a130a7","type":"GlyphRenderer"}],"title":{"id":"9c340d15-c7b3-4bc4-ba8d-3b6ca8a7c933","type":"Title"},"tool_events":{"id":"6b2ae544-122c-42cf-8221-4693bce22ae3","type":"ToolEvents"},"toolbar":{"id":"7cf60eff-09f4-4a6f-9c5b-5cf9914e5956","type":"Toolbar"},"x_range":{"id":"d04c72c2-b6ca-4113-863b-07da068b1c7f","type":"DataRange1d"},"y_range":{"id":"2e51d172-5a7e-40cf-a70e-e3a93c53550c","type":"DataRange1d"}},"id":"d434d88e-c206-44bc-9dda-c10440e04855","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"d434d88e-c206-44bc-9dda-c10440e04855","subtype":"Figure","type":"Plot"}},"id":"692b6125-0c52-4e20-8b9e-c15413e5f63f","type":"HelpTool"},{"attributes":{"callback":null},"id":"2e51d172-5a7e-40cf-a70e-e3a93c53550c","type":"DataRange1d"},{"attributes":{},"id":"03ff1262-ce6f-42d9-845b-dd650775d49a","type":"BasicTicker"},{"attributes":{"formatter":{"id":"65f98660-dbaa-4764-bc90-63677760d7c7","type":"BasicTickFormatter"},"plot":{"id":"d434d88e-c206-44bc-9dda-c10440e04855","subtype":"Figure","type":"Plot"},"ticker":{"id":"03ff1262-ce6f-42d9-845b-dd650775d49a","type":"BasicTicker"}},"id":"c81726a3-166a-418e-b42d-fb06c7047671","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"94817243-5f92-4815-8cd6-61344f6f1b27","type":"Patches"},{"attributes":{"plot":{"id":"d434d88e-c206-44bc-9dda-c10440e04855","subtype":"Figure","type":"Plot"}},"id":"ae92140f-4d65-4ad7-bd2a-c8df0dee0565","type":"SaveTool"},{"attributes":{},"id":"65f98660-dbaa-4764-bc90-63677760d7c7","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"a8c58073-bdea-4dff-a146-d7c500c18986","type":"ColumnDataSource"},"glyph":{"id":"085c04c1-12af-4a82-90e2-8f24b4a8e789","type":"Patches"},"hover_glyph":null,"nonselection_glyph":{"id":"94817243-5f92-4815-8cd6-61344f6f1b27","type":"Patches"},"selection_glyph":null},"id":"94df90da-f200-4f5b-aea3-77c5b4a130a7","type":"GlyphRenderer"},{"attributes":{},"id":"6b2ae544-122c-42cf-8221-4693bce22ae3","type":"ToolEvents"},{"attributes":{"plot":{"id":"d434d88e-c206-44bc-9dda-c10440e04855","subtype":"Figure","type":"Plot"}},"id":"5ecd7f4f-0800-4168-8265-6086ffb77829","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d9c24506-0c93-46b6-8d92-eff6b7322d4f","type":"PanTool"},{"id":"ca5c6877-bcb3-453b-a852-74727ecbe0c5","type":"WheelZoomTool"},{"id":"7432c219-10bd-4d31-99d9-dab6d7f9649d","type":"BoxZoomTool"},{"id":"ae92140f-4d65-4ad7-bd2a-c8df0dee0565","type":"SaveTool"},{"id":"5ecd7f4f-0800-4168-8265-6086ffb77829","type":"ResetTool"},{"id":"692b6125-0c52-4e20-8b9e-c15413e5f63f","type":"HelpTool"}]},"id":"7cf60eff-09f4-4a6f-9c5b-5cf9914e5956","type":"Toolbar"},{"attributes":{"plot":{"id":"d434d88e-c206-44bc-9dda-c10440e04855","subtype":"Figure","type":"Plot"}},"id":"d9c24506-0c93-46b6-8d92-eff6b7322d4f","type":"PanTool"},{"attributes":{},"id":"b8adfa9d-be82-4c52-87b2-340cd7687b68","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"fill_color"},"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"085c04c1-12af-4a82-90e2-8f24b4a8e789","type":"Patches"},{"attributes":{"callback":null,"column_names":["xs","ys","line_color","fill_color","line_alpha","fill_alpha"],"data":{"fill_alpha":[0.8,0.3],"fill_color":["firebrick","navy"],"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]}},"id":"a8c58073-bdea-4dff-a146-d7c500c18986","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d434d88e-c206-44bc-9dda-c10440e04855","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3f1e9a5-f970-4770-8f39-95d7315b5aff","type":"BasicTicker"}},"id":"0f656ec8-cdd2-4b1a-85eb-18bc8546ea3d","type":"Grid"},{"attributes":{},"id":"e3f1e9a5-f970-4770-8f39-95d7315b5aff","type":"BasicTicker"},{"attributes":{"plot":{"id":"d434d88e-c206-44bc-9dda-c10440e04855","subtype":"Figure","type":"Plot"}},"id":"ca5c6877-bcb3-453b-a852-74727ecbe0c5","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"542cbde4-c9bd-458e-a117-44d44dc94263","type":"BoxAnnotation"},"plot":{"id":"d434d88e-c206-44bc-9dda-c10440e04855","subtype":"Figure","type":"Plot"}},"id":"7432c219-10bd-4d31-99d9-dab6d7f9649d","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"542cbde4-c9bd-458e-a117-44d44dc94263","type":"BoxAnnotation"}],"root_ids":["d434d88e-c206-44bc-9dda-c10440e04855"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"5b4f64e2-8a94-4f67-8f08-bc45768eef93","elementid":"33f9d4c8-35be-4d68-ab75-545f9fed6d65","modelid":"d434d88e-c206-44bc-9dda-c10440e04855"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
