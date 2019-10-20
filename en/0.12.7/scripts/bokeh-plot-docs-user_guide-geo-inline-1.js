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
      };var element = document.getElementById("dbbdc8d6-4dc8-49e5-98bc-ef1b5bdb1644");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dbbdc8d6-4dc8-49e5-98bc-ef1b5bdb1644' but no matching script tag was found. ")
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
                var docs_json = {"b46b4ca5-4c8b-4445-a529-3abbcb94bd3a":{"roots":{"references":[{"attributes":{"callback":null},"id":"7109fd54-7126-4e09-9635-72fa747f7b93","type":"DataRange1d"},{"attributes":{"source":{"id":"d0eff807-1170-47b3-99af-aa6431fc6bb3","type":"ColumnDataSource"}},"id":"fdc2f206-f8e7-4f6b-9409-7db2501a6d96","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4e095035-2715-40d3-b4ab-2ea4a72daed6","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"blue"},"line_color":{"value":null},"size":{"units":"screen","value":15},"x":{"field":"lon"},"y":{"field":"lat"}},"id":"5a5dac49-eb95-42f8-8492-c72abcda9fbd","type":"Circle"},{"attributes":{"callback":null},"id":"7f7cf2bd-0426-43da-bb90-224d8d001e83","type":"DataRange1d"},{"attributes":{"data_source":{"id":"d0eff807-1170-47b3-99af-aa6431fc6bb3","type":"ColumnDataSource"},"glyph":{"id":"5a5dac49-eb95-42f8-8492-c72abcda9fbd","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"fdc2f206-f8e7-4f6b-9409-7db2501a6d96","type":"CDSView"}},"id":"549c72dd-fb29-4def-ba64-d19814f47a51","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"4e095035-2715-40d3-b4ab-2ea4a72daed6","type":"BoxAnnotation"}},"id":"0ab06944-4d6b-43d2-98ce-a4964ae68c82","type":"BoxSelectTool"},{"attributes":{"plot":null,"text":"Austin"},"id":"4b8bf2c5-3155-4229-994c-ae984812d6f5","type":"Title"},{"attributes":{},"id":"615fe686-6885-4db9-a4ed-dd4ab87de206","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"94a87180-2a0d-4731-97b0-dcde8b5dee24","type":"PanTool"},{"id":"008ef090-46df-4f89-8fee-7206bf7cd92d","type":"WheelZoomTool"},{"id":"0ab06944-4d6b-43d2-98ce-a4964ae68c82","type":"BoxSelectTool"}]},"id":"35c62343-0d33-4320-932b-3f5088b288e6","type":"Toolbar"},{"attributes":{},"id":"94a87180-2a0d-4731-97b0-dcde8b5dee24","type":"PanTool"},{"attributes":{"lat":30.29,"lng":-97.73,"zoom":11},"id":"c5a774e7-da10-4e24-8164-a165eadf1681","type":"GMapOptions"},{"attributes":{},"id":"008ef090-46df-4f89-8fee-7206bf7cd92d","type":"WheelZoomTool"},{"attributes":{},"id":"2e61a629-dc44-4a6e-ade1-3c60281d6f5d","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["lat","lon"],"data":{"lat":[30.29,30.2,30.29],"lon":[-97.7,-97.74,-97.78]}},"id":"d0eff807-1170-47b3-99af-aa6431fc6bb3","type":"ColumnDataSource"},{"attributes":{"api_key":"AIzaSyAM1OHVm6Yr_i54Kt01mylfxyNxQdxmxHQ","map_options":{"id":"c5a774e7-da10-4e24-8164-a165eadf1681","type":"GMapOptions"},"renderers":[{"id":"549c72dd-fb29-4def-ba64-d19814f47a51","type":"GlyphRenderer"},{"id":"4e095035-2715-40d3-b4ab-2ea4a72daed6","type":"BoxAnnotation"}],"title":{"id":"4b8bf2c5-3155-4229-994c-ae984812d6f5","type":"Title"},"toolbar":{"id":"35c62343-0d33-4320-932b-3f5088b288e6","type":"Toolbar"},"x_range":{"id":"7109fd54-7126-4e09-9635-72fa747f7b93","type":"DataRange1d"},"x_scale":{"id":"2e61a629-dc44-4a6e-ade1-3c60281d6f5d","type":"LinearScale"},"y_range":{"id":"7f7cf2bd-0426-43da-bb90-224d8d001e83","type":"DataRange1d"},"y_scale":{"id":"615fe686-6885-4db9-a4ed-dd4ab87de206","type":"LinearScale"}},"id":"8de7f1d5-58c7-4716-82f7-c1761269d4c1","type":"GMapPlot"}],"root_ids":["8de7f1d5-58c7-4716-82f7-c1761269d4c1"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"b46b4ca5-4c8b-4445-a529-3abbcb94bd3a","elementid":"dbbdc8d6-4dc8-49e5-98bc-ef1b5bdb1644","modelid":"8de7f1d5-58c7-4716-82f7-c1761269d4c1"}];
                
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
