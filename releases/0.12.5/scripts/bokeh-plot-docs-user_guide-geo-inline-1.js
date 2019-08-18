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
      };var element = document.getElementById("996aa0b9-36ab-4521-a21d-1de5a7ed0258");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '996aa0b9-36ab-4521-a21d-1de5a7ed0258' but no matching script tag was found. ")
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
                var docs_json = {"05a70497-578e-4e97-861c-ec2d15d3a872":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"blue"},"line_color":{"value":null},"size":{"units":"screen","value":15},"x":{"field":"lon"},"y":{"field":"lat"}},"id":"11152030-b3ec-4ac0-8a6c-dbe5fe31d0d5","type":"Circle"},{"attributes":{"plot":{"id":"e1964317-107d-4b82-a8de-248b0eeaa777","type":"GMapPlot"}},"id":"1dbe9696-f00d-49c5-b114-ee0c39868d97","type":"WheelZoomTool"},{"attributes":{},"id":"f0820694-0784-476d-b163-c3032bf4d86e","type":"ToolEvents"},{"attributes":{"data_source":{"id":"4f778854-230f-4a44-b5eb-485832a26f49","type":"ColumnDataSource"},"glyph":{"id":"11152030-b3ec-4ac0-8a6c-dbe5fe31d0d5","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"253f9b69-ff3b-4928-a4e7-fb935f6815ca","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3005ca57-67b4-4b39-94be-d8043eea8f19","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"e1964317-107d-4b82-a8de-248b0eeaa777","type":"GMapPlot"}},"id":"b8611f3a-b0c3-4fe6-a1f0-26f9a1675f78","type":"PanTool"},{"attributes":{"callback":null},"id":"d50c4c8c-ca7e-4373-9186-0ddb7f620b87","type":"DataRange1d"},{"attributes":{"api_key":"AIzaSyAM1OHVm6Yr_i54Kt01mylfxyNxQdxmxHQ","map_options":{"id":"15639710-a938-4e97-98a4-6efdef8136d7","type":"GMapOptions"},"renderers":[{"id":"253f9b69-ff3b-4928-a4e7-fb935f6815ca","type":"GlyphRenderer"},{"id":"3005ca57-67b4-4b39-94be-d8043eea8f19","type":"BoxAnnotation"}],"title":{"id":"6a4134d3-0ec6-4bb6-bf6b-02898306a510","type":"Title"},"tool_events":{"id":"f0820694-0784-476d-b163-c3032bf4d86e","type":"ToolEvents"},"toolbar":{"id":"af16e284-c865-4ed3-a452-b6463144677c","type":"Toolbar"},"x_range":{"id":"d50c4c8c-ca7e-4373-9186-0ddb7f620b87","type":"DataRange1d"},"y_range":{"id":"4af689d7-cfb4-46f6-9080-9ebeba3c7caa","type":"DataRange1d"}},"id":"e1964317-107d-4b82-a8de-248b0eeaa777","type":"GMapPlot"},{"attributes":{"callback":null,"overlay":{"id":"3005ca57-67b4-4b39-94be-d8043eea8f19","type":"BoxAnnotation"},"plot":{"id":"e1964317-107d-4b82-a8de-248b0eeaa777","type":"GMapPlot"}},"id":"fca021e5-5d02-4d2d-b2fe-49b20617c346","type":"BoxSelectTool"},{"attributes":{"callback":null,"column_names":["lon","lat"],"data":{"lat":[30.29,30.2,30.29],"lon":[-97.7,-97.74,-97.78]}},"id":"4f778854-230f-4a44-b5eb-485832a26f49","type":"ColumnDataSource"},{"attributes":{"lat":30.29,"lng":-97.73,"zoom":11},"id":"15639710-a938-4e97-98a4-6efdef8136d7","type":"GMapOptions"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b8611f3a-b0c3-4fe6-a1f0-26f9a1675f78","type":"PanTool"},{"id":"1dbe9696-f00d-49c5-b114-ee0c39868d97","type":"WheelZoomTool"},{"id":"fca021e5-5d02-4d2d-b2fe-49b20617c346","type":"BoxSelectTool"}]},"id":"af16e284-c865-4ed3-a452-b6463144677c","type":"Toolbar"},{"attributes":{"plot":null,"text":"Austin"},"id":"6a4134d3-0ec6-4bb6-bf6b-02898306a510","type":"Title"},{"attributes":{"callback":null},"id":"4af689d7-cfb4-46f6-9080-9ebeba3c7caa","type":"DataRange1d"}],"root_ids":["e1964317-107d-4b82-a8de-248b0eeaa777"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"05a70497-578e-4e97-861c-ec2d15d3a872","elementid":"996aa0b9-36ab-4521-a21d-1de5a7ed0258","modelid":"e1964317-107d-4b82-a8de-248b0eeaa777"}];
                
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
