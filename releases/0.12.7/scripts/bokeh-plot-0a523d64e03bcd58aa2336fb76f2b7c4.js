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
      };var element = document.getElementById("3e4d8d3c-a715-4f9d-951c-a6d09e4da1c1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3e4d8d3c-a715-4f9d-951c-a6d09e4da1c1' but no matching script tag was found. ")
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
                var docs_json = {"63063e4a-05b5-4b6b-b686-056ec5b7a2e4":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"d5841fb4-249d-460c-9dc6-76add5595cc0","type":"Title"},{"attributes":{},"id":"0f127808-42ee-49c0-8135-2ec07395dbf2","type":"LinearScale"},{"attributes":{"overlay":{"id":"44e4d282-eb48-4431-bfd6-ea0f56df1cd3","type":"BoxAnnotation"}},"id":"96e26a50-105c-401d-8192-1ec93f18514a","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"370d1f75-4d0c-48dc-96c2-dac7f3cb2bd5","type":"PanTool"},{"id":"a753200f-c607-446f-a7c8-fa0a5f9e4723","type":"WheelZoomTool"},{"id":"96e26a50-105c-401d-8192-1ec93f18514a","type":"BoxZoomTool"},{"id":"6992adcc-9fea-4f3a-85f2-26095f20e8cc","type":"SaveTool"},{"id":"1aabefaa-98b8-484d-87d5-e530c4a0c15e","type":"ResetTool"},{"id":"efdd3c09-e772-4009-847d-40db2067df09","type":"HelpTool"}]},"id":"787306bb-3572-4d2d-af2b-676755cb20c9","type":"Toolbar"},{"attributes":{"formatter":{"id":"207d9598-b357-4592-b559-cb1e4917072e","type":"BasicTickFormatter"},"plot":{"id":"0d1ca684-d5e7-4319-9ddd-2936a1ba7e08","subtype":"Figure","type":"Plot"},"ticker":{"id":"42a4cd63-ef76-41d3-8a90-0bcd988c35f6","type":"BasicTicker"}},"id":"fd26e114-1123-4f80-b337-eb56d110ad6f","type":"LinearAxis"},{"attributes":{"plot":{"id":"0d1ca684-d5e7-4319-9ddd-2936a1ba7e08","subtype":"Figure","type":"Plot"},"ticker":{"id":"9c543579-c654-48e7-b85d-cd004e1f5e09","type":"BasicTicker"}},"id":"e5f4cfad-63ba-4389-a8c9-c606661d6010","type":"Grid"},{"attributes":{},"id":"9c543579-c654-48e7-b85d-cd004e1f5e09","type":"BasicTicker"},{"attributes":{},"id":"207d9598-b357-4592-b559-cb1e4917072e","type":"BasicTickFormatter"},{"attributes":{},"id":"42a4cd63-ef76-41d3-8a90-0bcd988c35f6","type":"BasicTicker"},{"attributes":{},"id":"a753200f-c607-446f-a7c8-fa0a5f9e4723","type":"WheelZoomTool"},{"attributes":{},"id":"0f203f85-0588-4f92-890d-59ba80719022","type":"LinearScale"},{"attributes":{},"id":"6992adcc-9fea-4f3a-85f2-26095f20e8cc","type":"SaveTool"},{"attributes":{},"id":"efdd3c09-e772-4009-847d-40db2067df09","type":"HelpTool"},{"attributes":{},"id":"1aabefaa-98b8-484d-87d5-e530c4a0c15e","type":"ResetTool"},{"attributes":{"callback":null},"id":"6889a055-078f-43a5-b6e6-2f31af280f29","type":"DataRange1d"},{"attributes":{},"id":"ee03a070-3f17-4402-a1d5-42b0ae399214","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"963616d5-3fc8-4980-9730-f02ca3c99a09","type":"LinearAxis"}],"left":[{"id":"fd26e114-1123-4f80-b337-eb56d110ad6f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"963616d5-3fc8-4980-9730-f02ca3c99a09","type":"LinearAxis"},{"id":"e5f4cfad-63ba-4389-a8c9-c606661d6010","type":"Grid"},{"id":"fd26e114-1123-4f80-b337-eb56d110ad6f","type":"LinearAxis"},{"id":"f6fb33a5-5a3c-4ba4-a499-1552c2f3a182","type":"Grid"},{"id":"44e4d282-eb48-4431-bfd6-ea0f56df1cd3","type":"BoxAnnotation"},{"id":"f80b71c5-9160-4114-95e2-324bc5ec5d79","type":"GlyphRenderer"}],"title":{"id":"d5841fb4-249d-460c-9dc6-76add5595cc0","type":"Title"},"toolbar":{"id":"787306bb-3572-4d2d-af2b-676755cb20c9","type":"Toolbar"},"x_range":{"id":"38cab4b0-1f46-4a39-80e1-5ae891da5fe4","type":"DataRange1d"},"x_scale":{"id":"0f127808-42ee-49c0-8135-2ec07395dbf2","type":"LinearScale"},"y_range":{"id":"6889a055-078f-43a5-b6e6-2f31af280f29","type":"DataRange1d"},"y_scale":{"id":"0f203f85-0588-4f92-890d-59ba80719022","type":"LinearScale"}},"id":"0d1ca684-d5e7-4319-9ddd-2936a1ba7e08","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"363455b3-bbc2-4a9b-932c-c2266bdfa5e3","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"363455b3-bbc2-4a9b-932c-c2266bdfa5e3","type":"ColumnDataSource"},"glyph":{"id":"c63dcdf1-55b9-49b3-be3f-3ac79f9881fc","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"abc3302f-91f4-45a8-b428-6c67af09fa5a","type":"Rect"},"selection_glyph":null,"view":{"id":"35cee007-9555-4ebb-96cb-996b4ff92064","type":"CDSView"}},"id":"f80b71c5-9160-4114-95e2-324bc5ec5d79","type":"GlyphRenderer"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"abc3302f-91f4-45a8-b428-6c67af09fa5a","type":"Rect"},{"attributes":{"dimension":1,"plot":{"id":"0d1ca684-d5e7-4319-9ddd-2936a1ba7e08","subtype":"Figure","type":"Plot"},"ticker":{"id":"42a4cd63-ef76-41d3-8a90-0bcd988c35f6","type":"BasicTicker"}},"id":"f6fb33a5-5a3c-4ba4-a499-1552c2f3a182","type":"Grid"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"c63dcdf1-55b9-49b3-be3f-3ac79f9881fc","type":"Rect"},{"attributes":{"source":{"id":"363455b3-bbc2-4a9b-932c-c2266bdfa5e3","type":"ColumnDataSource"}},"id":"35cee007-9555-4ebb-96cb-996b4ff92064","type":"CDSView"},{"attributes":{"callback":null},"id":"38cab4b0-1f46-4a39-80e1-5ae891da5fe4","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"44e4d282-eb48-4431-bfd6-ea0f56df1cd3","type":"BoxAnnotation"},{"attributes":{},"id":"370d1f75-4d0c-48dc-96c2-dac7f3cb2bd5","type":"PanTool"},{"attributes":{"formatter":{"id":"ee03a070-3f17-4402-a1d5-42b0ae399214","type":"BasicTickFormatter"},"plot":{"id":"0d1ca684-d5e7-4319-9ddd-2936a1ba7e08","subtype":"Figure","type":"Plot"},"ticker":{"id":"9c543579-c654-48e7-b85d-cd004e1f5e09","type":"BasicTicker"}},"id":"963616d5-3fc8-4980-9730-f02ca3c99a09","type":"LinearAxis"}],"root_ids":["0d1ca684-d5e7-4319-9ddd-2936a1ba7e08"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"63063e4a-05b5-4b6b-b686-056ec5b7a2e4","elementid":"3e4d8d3c-a715-4f9d-951c-a6d09e4da1c1","modelid":"0d1ca684-d5e7-4319-9ddd-2936a1ba7e08"}];
                
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
