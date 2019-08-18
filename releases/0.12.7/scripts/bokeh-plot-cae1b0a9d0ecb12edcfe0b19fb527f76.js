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
      };var element = document.getElementById("c67433a1-2682-4a31-8351-2be0deb627ac");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c67433a1-2682-4a31-8351-2be0deb627ac' but no matching script tag was found. ")
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
                var docs_json = {"b3ece18b-18b3-4cd9-958b-d8da2228abeb":{"roots":{"references":[{"attributes":{},"id":"9e5ac18d-bf96-41fa-a1d0-87ffce7b9676","type":"ResetTool"},{"attributes":{},"id":"b7d87eda-029e-4316-9715-d34c04f5c7fe","type":"HelpTool"},{"attributes":{},"id":"473094c5-e535-402c-bfc6-57d8684be5be","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"c6ef5f31-b320-47a9-a001-a8098505ab67","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a7c6ee63-64aa-49b1-ba81-c41a9621c24d","type":"Circle"},{"attributes":{"callback":null},"id":"e1fa1780-cbc9-4b54-bafd-030ba5c2d249","type":"DataRange1d"},{"attributes":{"plot":{"id":"f464e200-1f06-4e4c-b634-96b03fc984a3","subtype":"Figure","type":"Plot"},"ticker":{"id":"5be41dc3-99ab-4328-8fc6-d78110e605de","type":"BasicTicker"}},"id":"e3ab9fac-3cfc-4c89-9780-c4ab5222b82b","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"87489dec-81c7-4835-95e2-eb012335972d","type":"PanTool"},{"id":"e53d345b-7c2d-48f5-a339-4eb295916ef7","type":"WheelZoomTool"},{"id":"a83206db-b396-46d2-abf1-dcb76c77ceba","type":"BoxZoomTool"},{"id":"65895656-9b63-4bf8-b960-9240a24ca9c7","type":"SaveTool"},{"id":"9e5ac18d-bf96-41fa-a1d0-87ffce7b9676","type":"ResetTool"},{"id":"b7d87eda-029e-4316-9715-d34c04f5c7fe","type":"HelpTool"}]},"id":"9349aaad-8d16-4c7f-a4a2-0c1cfb068408","type":"Toolbar"},{"attributes":{"formatter":{"id":"1c5b711f-4619-4bb8-b01a-77f8820c6b90","type":"BasicTickFormatter"},"major_tick_line_color":{"value":"firebrick"},"major_tick_line_width":{"value":3},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":"orange"},"minor_tick_out":8,"plot":{"id":"f464e200-1f06-4e4c-b634-96b03fc984a3","subtype":"Figure","type":"Plot"},"ticker":{"id":"5be41dc3-99ab-4328-8fc6-d78110e605de","type":"BasicTicker"}},"id":"66924708-1069-4122-bf26-2e9f617f4766","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"d19126d1-227f-4608-a2a2-9d4494c9ee65","type":"ColumnDataSource"},{"attributes":{},"id":"5301cf34-5bf6-433c-8184-25e98b69b886","type":"BasicTickFormatter"},{"attributes":{},"id":"5be41dc3-99ab-4328-8fc6-d78110e605de","type":"BasicTicker"},{"attributes":{},"id":"bcb8c687-b901-4347-b051-ed2b9b5cf951","type":"LinearScale"},{"attributes":{"formatter":{"id":"5301cf34-5bf6-433c-8184-25e98b69b886","type":"BasicTickFormatter"},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":null},"minor_tick_out":8,"plot":{"id":"f464e200-1f06-4e4c-b634-96b03fc984a3","subtype":"Figure","type":"Plot"},"ticker":{"id":"594477c2-1ac4-477e-be05-a87b17c9bfc7","type":"BasicTicker"}},"id":"3e93443b-a097-49cc-9eac-cecf01052de6","type":"LinearAxis"},{"attributes":{"below":[{"id":"66924708-1069-4122-bf26-2e9f617f4766","type":"LinearAxis"}],"left":[{"id":"3e93443b-a097-49cc-9eac-cecf01052de6","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"66924708-1069-4122-bf26-2e9f617f4766","type":"LinearAxis"},{"id":"e3ab9fac-3cfc-4c89-9780-c4ab5222b82b","type":"Grid"},{"id":"3e93443b-a097-49cc-9eac-cecf01052de6","type":"LinearAxis"},{"id":"78aeb3b3-3394-4b73-8746-50b6ab226f3b","type":"Grid"},{"id":"b640bc47-8ccb-4e8e-a34d-4672d280db71","type":"BoxAnnotation"},{"id":"48d9edad-1f4f-4049-8946-894ccccd1ab8","type":"GlyphRenderer"}],"title":{"id":"c6ef5f31-b320-47a9-a001-a8098505ab67","type":"Title"},"toolbar":{"id":"9349aaad-8d16-4c7f-a4a2-0c1cfb068408","type":"Toolbar"},"x_range":{"id":"e1fa1780-cbc9-4b54-bafd-030ba5c2d249","type":"DataRange1d"},"x_scale":{"id":"bcb8c687-b901-4347-b051-ed2b9b5cf951","type":"LinearScale"},"y_range":{"id":"4cbc985a-cb69-4168-ac31-df18c836193a","type":"DataRange1d"},"y_scale":{"id":"473094c5-e535-402c-bfc6-57d8684be5be","type":"LinearScale"}},"id":"f464e200-1f06-4e4c-b634-96b03fc984a3","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"594477c2-1ac4-477e-be05-a87b17c9bfc7","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"f464e200-1f06-4e4c-b634-96b03fc984a3","subtype":"Figure","type":"Plot"},"ticker":{"id":"594477c2-1ac4-477e-be05-a87b17c9bfc7","type":"BasicTicker"}},"id":"78aeb3b3-3394-4b73-8746-50b6ab226f3b","type":"Grid"},{"attributes":{"data_source":{"id":"d19126d1-227f-4608-a2a2-9d4494c9ee65","type":"ColumnDataSource"},"glyph":{"id":"ad7cda13-2f3f-4682-a511-7ede05a93a28","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a7c6ee63-64aa-49b1-ba81-c41a9621c24d","type":"Circle"},"selection_glyph":null,"view":{"id":"bc5b764a-4335-4c98-8829-e2a613209d53","type":"CDSView"}},"id":"48d9edad-1f4f-4049-8946-894ccccd1ab8","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ad7cda13-2f3f-4682-a511-7ede05a93a28","type":"Circle"},{"attributes":{},"id":"1c5b711f-4619-4bb8-b01a-77f8820c6b90","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b640bc47-8ccb-4e8e-a34d-4672d280db71","type":"BoxAnnotation"},{"attributes":{},"id":"87489dec-81c7-4835-95e2-eb012335972d","type":"PanTool"},{"attributes":{"source":{"id":"d19126d1-227f-4608-a2a2-9d4494c9ee65","type":"ColumnDataSource"}},"id":"bc5b764a-4335-4c98-8829-e2a613209d53","type":"CDSView"},{"attributes":{"callback":null},"id":"4cbc985a-cb69-4168-ac31-df18c836193a","type":"DataRange1d"},{"attributes":{},"id":"e53d345b-7c2d-48f5-a339-4eb295916ef7","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"b640bc47-8ccb-4e8e-a34d-4672d280db71","type":"BoxAnnotation"}},"id":"a83206db-b396-46d2-abf1-dcb76c77ceba","type":"BoxZoomTool"},{"attributes":{},"id":"65895656-9b63-4bf8-b960-9240a24ca9c7","type":"SaveTool"}],"root_ids":["f464e200-1f06-4e4c-b634-96b03fc984a3"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"b3ece18b-18b3-4cd9-958b-d8da2228abeb","elementid":"c67433a1-2682-4a31-8351-2be0deb627ac","modelid":"f464e200-1f06-4e4c-b634-96b03fc984a3"}];
                
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
