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
      };var element = document.getElementById("8f0d3c1c-2259-4c98-a035-f665f4e90e18");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8f0d3c1c-2259-4c98-a035-f665f4e90e18' but no matching script tag was found. ")
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
                var docs_json = {"14eb234a-e9a9-410a-ac78-37d9749a245f":{"roots":{"references":[{"attributes":{"plot":{"id":"ff0a2fac-7610-4ade-b312-10b3514abcda","subtype":"Figure","type":"Plot"}},"id":"f939f9b1-fdcc-4964-bcc6-85072b552d8d","type":"SaveTool"},{"attributes":{"plot":{"id":"ff0a2fac-7610-4ade-b312-10b3514abcda","subtype":"Figure","type":"Plot"}},"id":"ec23929a-4252-4c61-9312-c7d23b98992c","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"90acc00d-7c90-4c7b-a361-4c66243621fd","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ef5d34d0-0da9-4f04-ad09-e151348e1a0a","type":"Circle"},{"attributes":{},"id":"4c228561-7d89-4718-802a-1185d58a808d","type":"ToolEvents"},{"attributes":{},"id":"d0053b6e-e00d-465c-bbac-fd68f973021a","type":"BasicTickFormatter"},{"attributes":{},"id":"85a3f9e4-d862-4d48-8618-610a397b7028","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"ff0a2fac-7610-4ade-b312-10b3514abcda","subtype":"Figure","type":"Plot"}},"id":"2eb76d88-232d-4686-bb5f-220b632d3f10","type":"HelpTool"},{"attributes":{"plot":{"id":"ff0a2fac-7610-4ade-b312-10b3514abcda","subtype":"Figure","type":"Plot"}},"id":"044e6ff8-47ff-4031-b083-9d0aa6fbf05e","type":"ResetTool"},{"attributes":{"callback":null},"id":"ffd18a81-b801-4c4d-93c9-90ae15c0bb79","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"b5c10c8a-e681-4983-99f3-f6bb16d6d53b","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ec23929a-4252-4c61-9312-c7d23b98992c","type":"PanTool"},{"id":"d3644ac6-8f2c-4e7b-bda9-ee7d83a608d4","type":"WheelZoomTool"},{"id":"9d5c5fbb-47fc-415d-9cec-3f4c0e35c24a","type":"BoxZoomTool"},{"id":"f939f9b1-fdcc-4964-bcc6-85072b552d8d","type":"SaveTool"},{"id":"044e6ff8-47ff-4031-b083-9d0aa6fbf05e","type":"ResetTool"},{"id":"2eb76d88-232d-4686-bb5f-220b632d3f10","type":"HelpTool"}]},"id":"6205e00c-c754-48c7-b168-e837c3db54ff","type":"Toolbar"},{"attributes":{"plot":{"id":"ff0a2fac-7610-4ade-b312-10b3514abcda","subtype":"Figure","type":"Plot"}},"id":"d3644ac6-8f2c-4e7b-bda9-ee7d83a608d4","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"9ec011be-dbf1-4346-8b3e-3a579ccd7fc8","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9ec011be-dbf1-4346-8b3e-3a579ccd7fc8","type":"ColumnDataSource"},"glyph":{"id":"90acc00d-7c90-4c7b-a361-4c66243621fd","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ef5d34d0-0da9-4f04-ad09-e151348e1a0a","type":"Circle"},"selection_glyph":null},"id":"fa4de1fb-de03-47e0-b0f0-59253b5bdf12","type":"GlyphRenderer"},{"attributes":{},"id":"c380fa58-20a1-493b-9037-a597e05e247c","type":"BasicTicker"},{"attributes":{"callback":null},"id":"6c11687f-4f28-4c47-9497-e4273e675aae","type":"DataRange1d"},{"attributes":{},"id":"8d424054-ca37-4861-aea4-422c45cc926a","type":"BasicTicker"},{"attributes":{"overlay":{"id":"c12100a2-5256-4d5b-bd23-14762a61630e","type":"BoxAnnotation"},"plot":{"id":"ff0a2fac-7610-4ade-b312-10b3514abcda","subtype":"Figure","type":"Plot"}},"id":"9d5c5fbb-47fc-415d-9cec-3f4c0e35c24a","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"5bbbf592-b895-4212-bdca-eafa18af21d9","type":"LinearAxis"}],"left":[{"id":"f0eb125b-4944-4b01-aec8-9ccfed67f7d9","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"5bbbf592-b895-4212-bdca-eafa18af21d9","type":"LinearAxis"},{"id":"72576671-a89b-47d8-835d-4f7af80badb6","type":"Grid"},{"id":"f0eb125b-4944-4b01-aec8-9ccfed67f7d9","type":"LinearAxis"},{"id":"528816b2-5ba2-4434-8dd4-1bfa2676a531","type":"Grid"},{"id":"c12100a2-5256-4d5b-bd23-14762a61630e","type":"BoxAnnotation"},{"id":"fa4de1fb-de03-47e0-b0f0-59253b5bdf12","type":"GlyphRenderer"}],"title":{"id":"b5c10c8a-e681-4983-99f3-f6bb16d6d53b","type":"Title"},"tool_events":{"id":"4c228561-7d89-4718-802a-1185d58a808d","type":"ToolEvents"},"toolbar":{"id":"6205e00c-c754-48c7-b168-e837c3db54ff","type":"Toolbar"},"x_range":{"id":"ffd18a81-b801-4c4d-93c9-90ae15c0bb79","type":"DataRange1d"},"y_range":{"id":"6c11687f-4f28-4c47-9497-e4273e675aae","type":"DataRange1d"}},"id":"ff0a2fac-7610-4ade-b312-10b3514abcda","subtype":"Figure","type":"Plot"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"ff0a2fac-7610-4ade-b312-10b3514abcda","subtype":"Figure","type":"Plot"},"ticker":{"id":"8d424054-ca37-4861-aea4-422c45cc926a","type":"BasicTicker"}},"id":"72576671-a89b-47d8-835d-4f7af80badb6","type":"Grid"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.5},"grid_line_dash":[6,4],"plot":{"id":"ff0a2fac-7610-4ade-b312-10b3514abcda","subtype":"Figure","type":"Plot"},"ticker":{"id":"c380fa58-20a1-493b-9037-a597e05e247c","type":"BasicTicker"}},"id":"528816b2-5ba2-4434-8dd4-1bfa2676a531","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c12100a2-5256-4d5b-bd23-14762a61630e","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"85a3f9e4-d862-4d48-8618-610a397b7028","type":"BasicTickFormatter"},"plot":{"id":"ff0a2fac-7610-4ade-b312-10b3514abcda","subtype":"Figure","type":"Plot"},"ticker":{"id":"c380fa58-20a1-493b-9037-a597e05e247c","type":"BasicTicker"}},"id":"f0eb125b-4944-4b01-aec8-9ccfed67f7d9","type":"LinearAxis"},{"attributes":{"formatter":{"id":"d0053b6e-e00d-465c-bbac-fd68f973021a","type":"BasicTickFormatter"},"plot":{"id":"ff0a2fac-7610-4ade-b312-10b3514abcda","subtype":"Figure","type":"Plot"},"ticker":{"id":"8d424054-ca37-4861-aea4-422c45cc926a","type":"BasicTicker"}},"id":"5bbbf592-b895-4212-bdca-eafa18af21d9","type":"LinearAxis"}],"root_ids":["ff0a2fac-7610-4ade-b312-10b3514abcda"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"14eb234a-e9a9-410a-ac78-37d9749a245f","elementid":"8f0d3c1c-2259-4c98-a035-f665f4e90e18","modelid":"ff0a2fac-7610-4ade-b312-10b3514abcda"}];
                
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
