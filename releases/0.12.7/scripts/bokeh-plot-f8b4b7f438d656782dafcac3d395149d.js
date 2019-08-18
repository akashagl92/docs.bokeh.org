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
      };var element = document.getElementById("91af97e6-18c3-4ac3-b229-94dfc9bea610");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '91af97e6-18c3-4ac3-b229-94dfc9bea610' but no matching script tag was found. ")
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
                var docs_json = {"a8932fe3-4dda-422c-8eed-9cbe77fdeb8b":{"roots":{"references":[{"attributes":{},"id":"026d222e-5e0c-4657-bdcc-8cc7b6788d41","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"31d61e8b-cd56-42ee-a3e5-0fd3feaedb9d","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"31d61e8b-cd56-42ee-a3e5-0fd3feaedb9d","type":"BoxAnnotation"}},"id":"cd8f6bb0-80b4-4b81-9267-81340047f64e","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"1e507607-f606-4793-b361-795760847b21","subtype":"Figure","type":"Plot"},"ticker":{"id":"c89673c8-488d-4d04-9f9c-eacd7e7f5c36","type":"BasicTicker"}},"id":"10cc90d8-0002-42d6-a05e-66ad2729db60","type":"Grid"},{"attributes":{},"id":"ba276cf3-cd82-40ef-a75e-dfd7b2721d10","type":"ResetTool"},{"attributes":{"plot":{"id":"1e507607-f606-4793-b361-795760847b21","subtype":"Figure","type":"Plot"},"ticker":{"id":"1d6fa3bf-299f-46af-b314-fd6f4850f318","type":"BasicTicker"}},"id":"96237419-96da-4a87-81ac-478487edc4aa","type":"Grid"},{"attributes":{"formatter":{"id":"78780350-0ce8-4701-a0d8-6cec2f3c9418","type":"BasicTickFormatter"},"plot":{"id":"1e507607-f606-4793-b361-795760847b21","subtype":"Figure","type":"Plot"},"ticker":{"id":"c89673c8-488d-4d04-9f9c-eacd7e7f5c36","type":"BasicTicker"}},"id":"cc4f62c3-cc9e-4fea-bc7f-059678e1b2a4","type":"LinearAxis"},{"attributes":{},"id":"b7a68976-168c-4be5-987a-fbf29e32c936","type":"HelpTool"},{"attributes":{"data_source":{"id":"f8cf4982-e134-4ba0-b9cf-d7cafae0de13","type":"ColumnDataSource"},"glyph":{"id":"4dfda866-c70b-449a-8dd9-9634f8a6c5fb","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"931e1dad-7782-4464-aff5-b10fdcdedc98","type":"Circle"},"selection_glyph":null,"view":{"id":"13d42e27-76db-478d-a577-793f76f44181","type":"CDSView"}},"id":"c58ce89e-eb91-4e0b-a0f6-17a1a0f53ffd","type":"GlyphRenderer"},{"attributes":{},"id":"c89673c8-488d-4d04-9f9c-eacd7e7f5c36","type":"BasicTicker"},{"attributes":{"formatter":{"id":"a2fa2778-9dbc-4197-84be-6f5afcacc533","type":"BasicTickFormatter"},"plot":{"id":"1e507607-f606-4793-b361-795760847b21","subtype":"Figure","type":"Plot"},"ticker":{"id":"1d6fa3bf-299f-46af-b314-fd6f4850f318","type":"BasicTicker"}},"id":"7f9eaae3-e8e3-4850-b2ab-356be7accaf7","type":"LinearAxis"},{"attributes":{"source":{"id":"f8cf4982-e134-4ba0-b9cf-d7cafae0de13","type":"ColumnDataSource"}},"id":"13d42e27-76db-478d-a577-793f76f44181","type":"CDSView"},{"attributes":{},"id":"1d6fa3bf-299f-46af-b314-fd6f4850f318","type":"BasicTicker"},{"attributes":{},"id":"329fbd71-dbec-42b8-a8d4-50c5505fbd03","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":15},"id":"ba45b9c8-efe4-471a-a838-ddc0e73fcb16","type":"Range1d"},{"attributes":{"below":[{"id":"7f9eaae3-e8e3-4850-b2ab-356be7accaf7","type":"LinearAxis"}],"left":[{"id":"cc4f62c3-cc9e-4fea-bc7f-059678e1b2a4","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"7f9eaae3-e8e3-4850-b2ab-356be7accaf7","type":"LinearAxis"},{"id":"96237419-96da-4a87-81ac-478487edc4aa","type":"Grid"},{"id":"cc4f62c3-cc9e-4fea-bc7f-059678e1b2a4","type":"LinearAxis"},{"id":"10cc90d8-0002-42d6-a05e-66ad2729db60","type":"Grid"},{"id":"31d61e8b-cd56-42ee-a3e5-0fd3feaedb9d","type":"BoxAnnotation"},{"id":"c58ce89e-eb91-4e0b-a0f6-17a1a0f53ffd","type":"GlyphRenderer"}],"title":{"id":"39dd9e24-649f-4a11-bdba-ab736d107a65","type":"Title"},"toolbar":{"id":"8b4eb50c-5abd-4881-9767-1abe91b94d1d","type":"Toolbar"},"x_range":{"id":"b78fd7e3-9eb8-4cdc-8b7a-53aff911a891","type":"Range1d"},"x_scale":{"id":"cb06aab6-eb95-43fc-8119-70a883d9aa90","type":"LinearScale"},"y_range":{"id":"ba45b9c8-efe4-471a-a838-ddc0e73fcb16","type":"Range1d"},"y_scale":{"id":"d80c1ad9-f1ea-4bee-a7a3-81f6ab5d2871","type":"LinearScale"}},"id":"1e507607-f606-4793-b361-795760847b21","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"78780350-0ce8-4701-a0d8-6cec2f3c9418","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"931e1dad-7782-4464-aff5-b10fdcdedc98","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"f8cf4982-e134-4ba0-b9cf-d7cafae0de13","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0849db03-ca23-408d-8f85-f0914b61e178","type":"PanTool"},{"id":"329fbd71-dbec-42b8-a8d4-50c5505fbd03","type":"WheelZoomTool"},{"id":"cd8f6bb0-80b4-4b81-9267-81340047f64e","type":"BoxZoomTool"},{"id":"026d222e-5e0c-4657-bdcc-8cc7b6788d41","type":"SaveTool"},{"id":"ba276cf3-cd82-40ef-a75e-dfd7b2721d10","type":"ResetTool"},{"id":"b7a68976-168c-4be5-987a-fbf29e32c936","type":"HelpTool"}]},"id":"8b4eb50c-5abd-4881-9767-1abe91b94d1d","type":"Toolbar"},{"attributes":{},"id":"a2fa2778-9dbc-4197-84be-6f5afcacc533","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":20},"id":"b78fd7e3-9eb8-4cdc-8b7a-53aff911a891","type":"Range1d"},{"attributes":{},"id":"d80c1ad9-f1ea-4bee-a7a3-81f6ab5d2871","type":"LinearScale"},{"attributes":{},"id":"0849db03-ca23-408d-8f85-f0914b61e178","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"39dd9e24-649f-4a11-bdba-ab736d107a65","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4dfda866-c70b-449a-8dd9-9634f8a6c5fb","type":"Circle"},{"attributes":{},"id":"cb06aab6-eb95-43fc-8119-70a883d9aa90","type":"LinearScale"}],"root_ids":["1e507607-f606-4793-b361-795760847b21"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"a8932fe3-4dda-422c-8eed-9cbe77fdeb8b","elementid":"91af97e6-18c3-4ac3-b229-94dfc9bea610","modelid":"1e507607-f606-4793-b361-795760847b21"}];
                
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
