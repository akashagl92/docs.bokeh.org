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
      };var element = document.getElementById("53f88e07-1118-42da-ac19-d6ebf6f451cb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '53f88e07-1118-42da-ac19-d6ebf6f451cb' but no matching script tag was found. ")
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
                var docs_json = {"afe678ba-c27d-466c-943d-7e59783caffd":{"roots":{"references":[{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"e9bc3ff8-d501-4454-a3da-12b44ee14df2","type":"Arc"},{"attributes":{},"id":"c2aa5113-0b0c-4936-aff8-aa43079899d3","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"591ee813-2b75-4b54-a0b6-90b1dc330d5b","type":"ColumnDataSource"},{"attributes":{},"id":"9ab7ee34-5759-4e67-ba86-52c7d50a9b6b","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27eb34e5-15ac-47c9-a92b-3d5c2141061a","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"cc60768e-84b3-44e7-a6d1-2d973a201a33","type":"LinearAxis"}],"left":[{"id":"b65cdd67-5621-4308-a930-c9cede279b4f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"cc60768e-84b3-44e7-a6d1-2d973a201a33","type":"LinearAxis"},{"id":"7133820b-b4fa-4945-aa77-444c274fc27a","type":"Grid"},{"id":"b65cdd67-5621-4308-a930-c9cede279b4f","type":"LinearAxis"},{"id":"fc43ce5c-f5a4-4309-a85e-097182218cc7","type":"Grid"},{"id":"27eb34e5-15ac-47c9-a92b-3d5c2141061a","type":"BoxAnnotation"},{"id":"f87eec1e-0b90-46d6-a746-a5190ecee38a","type":"GlyphRenderer"}],"title":{"id":"35628dd9-f72e-4a74-954e-d57fb1028a23","type":"Title"},"toolbar":{"id":"5c0ad4a6-dbc4-49d6-9eee-76da6f94d327","type":"Toolbar"},"x_range":{"id":"7d03913a-8970-4bcf-962b-feb33dad3f8d","type":"DataRange1d"},"x_scale":{"id":"cc759db2-c57c-4d33-b2a9-c6664af5ef8f","type":"LinearScale"},"y_range":{"id":"eb10be54-27a5-4021-aa76-e6798e44dbce","type":"DataRange1d"},"y_scale":{"id":"9ef2367b-915f-4798-9f61-1cb6f76eea5f","type":"LinearScale"}},"id":"bff4be80-ec5a-49b7-8728-7bffe7d57080","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a4173b62-cbd7-4b47-a6c1-898e37c57bd7","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a4173b62-cbd7-4b47-a6c1-898e37c57bd7","type":"PanTool"},{"id":"2817c264-23d8-48a2-8474-2508bb14b0d4","type":"WheelZoomTool"},{"id":"597ddb9f-cf37-4dda-8b9f-66e2082a2bbf","type":"BoxZoomTool"},{"id":"cd7433b0-0646-4bb7-a0ea-2ddb67e52e13","type":"SaveTool"},{"id":"63a0b0c9-147a-4d12-a2e1-8526733c3d07","type":"ResetTool"},{"id":"851f0dc5-8c76-4269-974d-57808c0375d1","type":"HelpTool"}]},"id":"5c0ad4a6-dbc4-49d6-9eee-76da6f94d327","type":"Toolbar"},{"attributes":{"data_source":{"id":"591ee813-2b75-4b54-a0b6-90b1dc330d5b","type":"ColumnDataSource"},"glyph":{"id":"cf135e47-b77f-4d25-a699-712d8502470b","type":"Arc"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e9bc3ff8-d501-4454-a3da-12b44ee14df2","type":"Arc"},"selection_glyph":null,"view":{"id":"59d4c439-fbc2-44be-b686-de2b31ef00da","type":"CDSView"}},"id":"f87eec1e-0b90-46d6-a746-a5190ecee38a","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"7d03913a-8970-4bcf-962b-feb33dad3f8d","type":"DataRange1d"},{"attributes":{},"id":"2817c264-23d8-48a2-8474-2508bb14b0d4","type":"WheelZoomTool"},{"attributes":{},"id":"595d25a4-40a2-4f0a-a5bf-2ea62baac51c","type":"BasicTicker"},{"attributes":{"overlay":{"id":"27eb34e5-15ac-47c9-a92b-3d5c2141061a","type":"BoxAnnotation"}},"id":"597ddb9f-cf37-4dda-8b9f-66e2082a2bbf","type":"BoxZoomTool"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_color":{"value":"navy"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"cf135e47-b77f-4d25-a699-712d8502470b","type":"Arc"},{"attributes":{},"id":"cd7433b0-0646-4bb7-a0ea-2ddb67e52e13","type":"SaveTool"},{"attributes":{"formatter":{"id":"c2aa5113-0b0c-4936-aff8-aa43079899d3","type":"BasicTickFormatter"},"plot":{"id":"bff4be80-ec5a-49b7-8728-7bffe7d57080","subtype":"Figure","type":"Plot"},"ticker":{"id":"595d25a4-40a2-4f0a-a5bf-2ea62baac51c","type":"BasicTicker"}},"id":"cc60768e-84b3-44e7-a6d1-2d973a201a33","type":"LinearAxis"},{"attributes":{},"id":"63a0b0c9-147a-4d12-a2e1-8526733c3d07","type":"ResetTool"},{"attributes":{"callback":null},"id":"eb10be54-27a5-4021-aa76-e6798e44dbce","type":"DataRange1d"},{"attributes":{},"id":"851f0dc5-8c76-4269-974d-57808c0375d1","type":"HelpTool"},{"attributes":{},"id":"cc759db2-c57c-4d33-b2a9-c6664af5ef8f","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"35628dd9-f72e-4a74-954e-d57fb1028a23","type":"Title"},{"attributes":{},"id":"9ef2367b-915f-4798-9f61-1cb6f76eea5f","type":"LinearScale"},{"attributes":{"plot":{"id":"bff4be80-ec5a-49b7-8728-7bffe7d57080","subtype":"Figure","type":"Plot"},"ticker":{"id":"595d25a4-40a2-4f0a-a5bf-2ea62baac51c","type":"BasicTicker"}},"id":"7133820b-b4fa-4945-aa77-444c274fc27a","type":"Grid"},{"attributes":{"formatter":{"id":"9ab7ee34-5759-4e67-ba86-52c7d50a9b6b","type":"BasicTickFormatter"},"plot":{"id":"bff4be80-ec5a-49b7-8728-7bffe7d57080","subtype":"Figure","type":"Plot"},"ticker":{"id":"d50f7c30-7b12-4c48-b61d-4aaeb8618724","type":"BasicTicker"}},"id":"b65cdd67-5621-4308-a930-c9cede279b4f","type":"LinearAxis"},{"attributes":{"source":{"id":"591ee813-2b75-4b54-a0b6-90b1dc330d5b","type":"ColumnDataSource"}},"id":"59d4c439-fbc2-44be-b686-de2b31ef00da","type":"CDSView"},{"attributes":{},"id":"d50f7c30-7b12-4c48-b61d-4aaeb8618724","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"bff4be80-ec5a-49b7-8728-7bffe7d57080","subtype":"Figure","type":"Plot"},"ticker":{"id":"d50f7c30-7b12-4c48-b61d-4aaeb8618724","type":"BasicTicker"}},"id":"fc43ce5c-f5a4-4309-a85e-097182218cc7","type":"Grid"}],"root_ids":["bff4be80-ec5a-49b7-8728-7bffe7d57080"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"afe678ba-c27d-466c-943d-7e59783caffd","elementid":"53f88e07-1118-42da-ac19-d6ebf6f451cb","modelid":"bff4be80-ec5a-49b7-8728-7bffe7d57080"}];
                
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
