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
      };var element = document.getElementById("e3945641-4aeb-4fba-90c6-4b9724bccb5b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e3945641-4aeb-4fba-90c6-4b9724bccb5b' but no matching script tag was found. ")
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
                var docs_json = {"1175d1f1-96a0-4b96-85f6-66644e34df8f":{"roots":{"references":[{"attributes":{},"id":"5133065f-ce0e-4c7e-978d-da371f5499b0","type":"LinearScale"},{"attributes":{},"id":"9c1c2842-012e-4042-b58a-9b16a9facca3","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"15523beb-18b5-4ecd-9c06-2ef3fa858261","type":"Circle"},{"attributes":{"plot":{"id":"c48ba8aa-a2cd-472d-8bd5-dd863b46b7f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"77606c85-aa40-4ee9-9cb3-3b759ed1edf1","type":"BasicTicker"}},"id":"dd6f973e-9159-4953-b9a9-aa85d09c325c","type":"Grid"},{"attributes":{},"id":"82874da1-b36d-4a2c-bb05-1c5644cf129a","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"c48ba8aa-a2cd-472d-8bd5-dd863b46b7f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"05d7b57b-25ab-4e98-bea5-4a4cc4c582e8","type":"BasicTicker"}},"id":"2928ec38-a83e-4b81-ba9d-1fae36567d01","type":"Grid"},{"attributes":{"formatter":{"id":"9c1c2842-012e-4042-b58a-9b16a9facca3","type":"BasicTickFormatter"},"plot":{"id":"c48ba8aa-a2cd-472d-8bd5-dd863b46b7f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"77606c85-aa40-4ee9-9cb3-3b759ed1edf1","type":"BasicTicker"}},"id":"3567eed8-2571-4a8c-9f5a-4d330231fa79","type":"LinearAxis"},{"attributes":{},"id":"77606c85-aa40-4ee9-9cb3-3b759ed1edf1","type":"BasicTicker"},{"attributes":{"formatter":{"id":"82874da1-b36d-4a2c-bb05-1c5644cf129a","type":"BasicTickFormatter"},"plot":{"id":"c48ba8aa-a2cd-472d-8bd5-dd863b46b7f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"05d7b57b-25ab-4e98-bea5-4a4cc4c582e8","type":"BasicTicker"}},"id":"937f04af-92f0-42dd-9792-0b09cdcc4bb6","type":"LinearAxis"},{"attributes":{},"id":"05d7b57b-25ab-4e98-bea5-4a4cc4c582e8","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"7f75bfb9-e4f8-40fc-9430-040f7b278b5c","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8f3c6d77-92cc-4f80-b7aa-b823b8e47bdd","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"f018a289-38a7-4ef0-8856-262b3d1fb2f1","type":"ColumnDataSource"},{"attributes":{},"id":"7777b583-05f7-4c7d-8b8d-c78389d39d10","type":"HelpTool"},{"attributes":{"data_source":{"id":"f018a289-38a7-4ef0-8856-262b3d1fb2f1","type":"ColumnDataSource"},"glyph":{"id":"4b40c8f2-d164-472f-a4eb-39e28a5ac007","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15523beb-18b5-4ecd-9c06-2ef3fa858261","type":"Circle"},"selection_glyph":null,"view":{"id":"5e72d308-b2dd-4cb1-9d04-e2904d643495","type":"CDSView"}},"id":"b533c2c1-99f8-461d-9cff-6bfa7d7affea","type":"GlyphRenderer"},{"attributes":{},"id":"338f2132-813f-4881-8413-f6c488b7697d","type":"PanTool"},{"attributes":{"below":[{"id":"3567eed8-2571-4a8c-9f5a-4d330231fa79","type":"LinearAxis"}],"left":[{"id":"937f04af-92f0-42dd-9792-0b09cdcc4bb6","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3567eed8-2571-4a8c-9f5a-4d330231fa79","type":"LinearAxis"},{"id":"dd6f973e-9159-4953-b9a9-aa85d09c325c","type":"Grid"},{"id":"937f04af-92f0-42dd-9792-0b09cdcc4bb6","type":"LinearAxis"},{"id":"2928ec38-a83e-4b81-ba9d-1fae36567d01","type":"Grid"},{"id":"8f3c6d77-92cc-4f80-b7aa-b823b8e47bdd","type":"BoxAnnotation"},{"id":"b533c2c1-99f8-461d-9cff-6bfa7d7affea","type":"GlyphRenderer"}],"title":{"id":"7f75bfb9-e4f8-40fc-9430-040f7b278b5c","type":"Title"},"toolbar":{"id":"d43e2a04-bf4f-4ec4-a064-8f39063ede62","type":"Toolbar"},"x_range":{"id":"f5178cb6-5d44-42b5-86bd-822db9279a8b","type":"DataRange1d"},"x_scale":{"id":"42da0d15-64f9-41e3-8c61-f67bdf38c225","type":"LinearScale"},"y_range":{"id":"ddae1d45-84a0-451b-9f92-03054cd44fc9","type":"DataRange1d"},"y_scale":{"id":"5133065f-ce0e-4c7e-978d-da371f5499b0","type":"LinearScale"}},"id":"c48ba8aa-a2cd-472d-8bd5-dd863b46b7f8","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"f018a289-38a7-4ef0-8856-262b3d1fb2f1","type":"ColumnDataSource"}},"id":"5e72d308-b2dd-4cb1-9d04-e2904d643495","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"338f2132-813f-4881-8413-f6c488b7697d","type":"PanTool"},{"id":"9162ea57-12d1-4963-abaf-5f810e3c098e","type":"WheelZoomTool"},{"id":"8ee89bec-76e7-4032-b4d9-71ddab9758a9","type":"BoxZoomTool"},{"id":"29cfad75-e883-45e2-9806-0f69b0529081","type":"SaveTool"},{"id":"90c6c931-4e67-44fc-8075-8e32788c63ed","type":"ResetTool"},{"id":"7777b583-05f7-4c7d-8b8d-c78389d39d10","type":"HelpTool"}]},"id":"d43e2a04-bf4f-4ec4-a064-8f39063ede62","type":"Toolbar"},{"attributes":{},"id":"9162ea57-12d1-4963-abaf-5f810e3c098e","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"f5178cb6-5d44-42b5-86bd-822db9279a8b","type":"DataRange1d"},{"attributes":{"overlay":{"id":"8f3c6d77-92cc-4f80-b7aa-b823b8e47bdd","type":"BoxAnnotation"}},"id":"8ee89bec-76e7-4032-b4d9-71ddab9758a9","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"4b40c8f2-d164-472f-a4eb-39e28a5ac007","type":"Circle"},{"attributes":{},"id":"29cfad75-e883-45e2-9806-0f69b0529081","type":"SaveTool"},{"attributes":{},"id":"42da0d15-64f9-41e3-8c61-f67bdf38c225","type":"LinearScale"},{"attributes":{},"id":"90c6c931-4e67-44fc-8075-8e32788c63ed","type":"ResetTool"},{"attributes":{"callback":null},"id":"ddae1d45-84a0-451b-9f92-03054cd44fc9","type":"DataRange1d"}],"root_ids":["c48ba8aa-a2cd-472d-8bd5-dd863b46b7f8"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"1175d1f1-96a0-4b96-85f6-66644e34df8f","elementid":"e3945641-4aeb-4fba-90c6-4b9724bccb5b","modelid":"c48ba8aa-a2cd-472d-8bd5-dd863b46b7f8"}];
                
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
