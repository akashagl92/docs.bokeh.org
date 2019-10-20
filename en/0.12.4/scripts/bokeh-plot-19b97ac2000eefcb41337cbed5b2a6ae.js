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
      };var element = document.getElementById("61d989c7-c9e9-4dfc-b1bc-a8b8d2275fd2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '61d989c7-c9e9-4dfc-b1bc-a8b8d2275fd2' but no matching script tag was found. ")
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
                var docs_json = {"6153498e-93d2-4dd6-9162-25444721f1b2":{"roots":{"references":[{"attributes":{"formatter":{"id":"4e18d61f-e0d2-4172-8926-57424ad3b90f","type":"BasicTickFormatter"},"plot":{"id":"6bf25bf1-e0de-4f79-816e-73786d02faab","subtype":"Figure","type":"Plot"},"ticker":{"id":"f569a93b-a2a8-4cc2-a1dd-9102b1c3cc8d","type":"BasicTicker"}},"id":"ccdc7577-aab7-4762-a60d-0d6e6406c0ef","type":"LinearAxis"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"5061064b-1dfb-481c-93c9-bd1f92aacaa5","type":"Line"},{"attributes":{},"id":"f569a93b-a2a8-4cc2-a1dd-9102b1c3cc8d","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"6bf25bf1-e0de-4f79-816e-73786d02faab","subtype":"Figure","type":"Plot"},"ticker":{"id":"f569a93b-a2a8-4cc2-a1dd-9102b1c3cc8d","type":"BasicTicker"}},"id":"c4020ecb-a6da-4913-a635-3bceee80f826","type":"Grid"},{"attributes":{"plot":{"id":"6bf25bf1-e0de-4f79-816e-73786d02faab","subtype":"Figure","type":"Plot"}},"id":"60e67d3b-b16d-40a3-9917-63e883349484","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"96b1ea20-6aaa-4b71-8d06-e6e522163bd8","type":"Title"},{"attributes":{},"id":"e39db8da-3518-441b-bd95-18a43e26bdb6","type":"ToolEvents"},{"attributes":{"callback":null},"id":"3e2be001-365c-449f-b17d-d5faffa3d3a5","type":"DataRange1d"},{"attributes":{"plot":{"id":"6bf25bf1-e0de-4f79-816e-73786d02faab","subtype":"Figure","type":"Plot"}},"id":"1cbadc31-b14c-42a2-a5c0-0c88fbd73a63","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4634c673-b6a9-4908-a55e-be19f1fe149c","type":"PanTool"},{"id":"1cbadc31-b14c-42a2-a5c0-0c88fbd73a63","type":"WheelZoomTool"},{"id":"a31a0889-0464-4f35-9f6e-4dd26cff6c22","type":"BoxZoomTool"},{"id":"1aaafd40-d1c1-4fd4-8617-65ff313e4fe2","type":"SaveTool"},{"id":"60e67d3b-b16d-40a3-9917-63e883349484","type":"ResetTool"},{"id":"e7d98c75-79d8-4242-b059-e58abd61bf84","type":"HelpTool"}]},"id":"868498e0-f5a5-4372-9195-48d857f91dca","type":"Toolbar"},{"attributes":{"plot":{"id":"6bf25bf1-e0de-4f79-816e-73786d02faab","subtype":"Figure","type":"Plot"}},"id":"1aaafd40-d1c1-4fd4-8617-65ff313e4fe2","type":"SaveTool"},{"attributes":{},"id":"f2bef062-765b-4fb1-bb9a-12dd6f98119d","type":"BasicTicker"},{"attributes":{"below":[{"id":"0ec0bc3e-adce-46b5-9a41-09a3f9babb60","type":"LinearAxis"}],"left":[{"id":"ccdc7577-aab7-4762-a60d-0d6e6406c0ef","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"0ec0bc3e-adce-46b5-9a41-09a3f9babb60","type":"LinearAxis"},{"id":"160401a0-5228-4be3-b869-ea53bf88d5ce","type":"Grid"},{"id":"ccdc7577-aab7-4762-a60d-0d6e6406c0ef","type":"LinearAxis"},{"id":"c4020ecb-a6da-4913-a635-3bceee80f826","type":"Grid"},{"id":"1be482a6-8836-4197-8f51-7e11558aba9d","type":"BoxAnnotation"},{"id":"9ad2cca4-14a7-40db-8606-5bf5fa997be2","type":"GlyphRenderer"}],"title":{"id":"96b1ea20-6aaa-4b71-8d06-e6e522163bd8","type":"Title"},"tool_events":{"id":"e39db8da-3518-441b-bd95-18a43e26bdb6","type":"ToolEvents"},"toolbar":{"id":"868498e0-f5a5-4372-9195-48d857f91dca","type":"Toolbar"},"x_range":{"id":"4f4f14e4-b4c6-447f-b312-7777d1f82cd0","type":"DataRange1d"},"y_range":{"id":"3e2be001-365c-449f-b17d-d5faffa3d3a5","type":"DataRange1d"}},"id":"6bf25bf1-e0de-4f79-816e-73786d02faab","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"d22dfa98-a359-4000-8637-a5a14587a2e2","type":"BasicTickFormatter"},"plot":{"id":"6bf25bf1-e0de-4f79-816e-73786d02faab","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2bef062-765b-4fb1-bb9a-12dd6f98119d","type":"BasicTicker"}},"id":"0ec0bc3e-adce-46b5-9a41-09a3f9babb60","type":"LinearAxis"},{"attributes":{"plot":{"id":"6bf25bf1-e0de-4f79-816e-73786d02faab","subtype":"Figure","type":"Plot"}},"id":"4634c673-b6a9-4908-a55e-be19f1fe149c","type":"PanTool"},{"attributes":{"callback":null},"id":"4f4f14e4-b4c6-447f-b312-7777d1f82cd0","type":"DataRange1d"},{"attributes":{"plot":{"id":"6bf25bf1-e0de-4f79-816e-73786d02faab","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2bef062-765b-4fb1-bb9a-12dd6f98119d","type":"BasicTicker"}},"id":"160401a0-5228-4be3-b869-ea53bf88d5ce","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,"NaN",4,5],"y":[6,7,2,4,4,5]}},"id":"a444378c-fa30-4a93-837c-1d5b7729f7cc","type":"ColumnDataSource"},{"attributes":{},"id":"d22dfa98-a359-4000-8637-a5a14587a2e2","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"a444378c-fa30-4a93-837c-1d5b7729f7cc","type":"ColumnDataSource"},"glyph":{"id":"5061064b-1dfb-481c-93c9-bd1f92aacaa5","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"ad4a99f3-2a20-4fa9-853a-017e9308d6ca","type":"Line"},"selection_glyph":null},"id":"9ad2cca4-14a7-40db-8606-5bf5fa997be2","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"1be482a6-8836-4197-8f51-7e11558aba9d","type":"BoxAnnotation"},"plot":{"id":"6bf25bf1-e0de-4f79-816e-73786d02faab","subtype":"Figure","type":"Plot"}},"id":"a31a0889-0464-4f35-9f6e-4dd26cff6c22","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1be482a6-8836-4197-8f51-7e11558aba9d","type":"BoxAnnotation"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ad4a99f3-2a20-4fa9-853a-017e9308d6ca","type":"Line"},{"attributes":{},"id":"4e18d61f-e0d2-4172-8926-57424ad3b90f","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"6bf25bf1-e0de-4f79-816e-73786d02faab","subtype":"Figure","type":"Plot"}},"id":"e7d98c75-79d8-4242-b059-e58abd61bf84","type":"HelpTool"}],"root_ids":["6bf25bf1-e0de-4f79-816e-73786d02faab"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"6153498e-93d2-4dd6-9162-25444721f1b2","elementid":"61d989c7-c9e9-4dfc-b1bc-a8b8d2275fd2","modelid":"6bf25bf1-e0de-4f79-816e-73786d02faab"}];
                
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
