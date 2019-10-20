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
      };var element = document.getElementById("92c72332-e404-4d34-8fb2-4b35480f9c34");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '92c72332-e404-4d34-8fb2-4b35480f9c34' but no matching script tag was found. ")
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
                var docs_json = {"2c92773c-2afb-421a-8e82-7c61a58dfa69":{"roots":{"references":[{"attributes":{},"id":"3ef6991f-7b45-4c4d-92a2-5fa02f52a779","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d6018b73-7e02-4f33-b3ff-03809ccf0e61","type":"Circle"},{"attributes":{"data_source":{"id":"212d838d-ddc9-4a48-b593-e148203b349e","type":"ColumnDataSource"},"glyph":{"id":"d6018b73-7e02-4f33-b3ff-03809ccf0e61","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"702d5a05-0a9e-4ad9-8230-614fba244686","type":"Circle"},"selection_glyph":null,"view":{"id":"201380e6-0f45-42a6-9350-dafe333ebcde","type":"CDSView"}},"id":"5e57a5db-6a1c-44c1-99b6-161d1b3ae67e","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"106bc7c0-14a6-426e-8680-eb3a56349a13","type":"BoxAnnotation"}},"id":"20405e6d-d304-4eb5-a307-06428f88aa18","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"dc79b247-836a-4b22-9205-595d57b7348d","type":"LinearAxis"}],"left":[{"id":"84101bd2-25f1-4d76-b4ca-e7449603070e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"dc79b247-836a-4b22-9205-595d57b7348d","type":"LinearAxis"},{"id":"4fe2ff42-37bd-4ca3-9d35-1f535283b31b","type":"Grid"},{"id":"84101bd2-25f1-4d76-b4ca-e7449603070e","type":"LinearAxis"},{"id":"06ec5063-9379-469e-8b4b-ce3d0f1f19b9","type":"Grid"},{"id":"106bc7c0-14a6-426e-8680-eb3a56349a13","type":"BoxAnnotation"},{"id":"5e57a5db-6a1c-44c1-99b6-161d1b3ae67e","type":"GlyphRenderer"}],"title":{"id":"251576b7-fa28-4c89-9c21-b7e1dcf4039b","type":"Title"},"toolbar":{"id":"86d817e6-a5a5-45b1-8a9e-e5b824b446e2","type":"Toolbar"},"x_range":{"id":"c41bf324-4549-4dcb-b258-479bfb86b9ee","type":"DataRange1d"},"x_scale":{"id":"b36d817d-3f0a-496b-ac5a-db6604f7ac07","type":"LinearScale"},"y_range":{"id":"39234796-0a56-4a15-8262-1c7ad96668f2","type":"DataRange1d"},"y_scale":{"id":"f6ad272b-010a-4d49-9a70-77ed94a2c7cb","type":"LinearScale"}},"id":"a13284c4-257f-4475-87f3-9cc29b0fd3b0","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"32d603a8-381c-4587-aa76-d4cf59de78dd","type":"PanTool"},{"id":"12758b37-acbd-4d9f-9c7c-d77c75d6e860","type":"WheelZoomTool"},{"id":"20405e6d-d304-4eb5-a307-06428f88aa18","type":"BoxZoomTool"},{"id":"3ef6991f-7b45-4c4d-92a2-5fa02f52a779","type":"SaveTool"},{"id":"2aec1784-f87f-4778-b559-035da99ba922","type":"ResetTool"},{"id":"648078ad-659b-4923-8e99-aea3a0f11539","type":"HelpTool"}]},"id":"86d817e6-a5a5-45b1-8a9e-e5b824b446e2","type":"Toolbar"},{"attributes":{},"id":"648078ad-659b-4923-8e99-aea3a0f11539","type":"HelpTool"},{"attributes":{"callback":null},"id":"c41bf324-4549-4dcb-b258-479bfb86b9ee","type":"DataRange1d"},{"attributes":{"source":{"id":"212d838d-ddc9-4a48-b593-e148203b349e","type":"ColumnDataSource"}},"id":"201380e6-0f45-42a6-9350-dafe333ebcde","type":"CDSView"},{"attributes":{},"id":"32d603a8-381c-4587-aa76-d4cf59de78dd","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"212d838d-ddc9-4a48-b593-e148203b349e","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"39234796-0a56-4a15-8262-1c7ad96668f2","type":"DataRange1d"},{"attributes":{},"id":"12758b37-acbd-4d9f-9c7c-d77c75d6e860","type":"WheelZoomTool"},{"attributes":{},"id":"f6ad272b-010a-4d49-9a70-77ed94a2c7cb","type":"LinearScale"},{"attributes":{"format":"%5.3f mu"},"id":"f0e10673-d815-4b5a-89f4-da4006339214","type":"PrintfTickFormatter"},{"attributes":{},"id":"b36d817d-3f0a-496b-ac5a-db6604f7ac07","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"106bc7c0-14a6-426e-8680-eb3a56349a13","type":"BoxAnnotation"},{"attributes":{"format":"%4.1e"},"id":"e3b9449d-4ae4-447f-a92b-d8049c30d97e","type":"PrintfTickFormatter"},{"attributes":{"plot":{"id":"a13284c4-257f-4475-87f3-9cc29b0fd3b0","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb5956e6-cd35-45df-a160-a65c6264a33c","type":"BasicTicker"}},"id":"4fe2ff42-37bd-4ca3-9d35-1f535283b31b","type":"Grid"},{"attributes":{},"id":"2aec1784-f87f-4778-b559-035da99ba922","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"702d5a05-0a9e-4ad9-8230-614fba244686","type":"Circle"},{"attributes":{"formatter":{"id":"e3b9449d-4ae4-447f-a92b-d8049c30d97e","type":"PrintfTickFormatter"},"plot":{"id":"a13284c4-257f-4475-87f3-9cc29b0fd3b0","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb5956e6-cd35-45df-a160-a65c6264a33c","type":"BasicTicker"}},"id":"dc79b247-836a-4b22-9205-595d57b7348d","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"a13284c4-257f-4475-87f3-9cc29b0fd3b0","subtype":"Figure","type":"Plot"},"ticker":{"id":"c32e2efa-1c5a-4e36-9590-48e369f8e1c0","type":"BasicTicker"}},"id":"06ec5063-9379-469e-8b4b-ce3d0f1f19b9","type":"Grid"},{"attributes":{},"id":"cb5956e6-cd35-45df-a160-a65c6264a33c","type":"BasicTicker"},{"attributes":{"formatter":{"id":"f0e10673-d815-4b5a-89f4-da4006339214","type":"PrintfTickFormatter"},"plot":{"id":"a13284c4-257f-4475-87f3-9cc29b0fd3b0","subtype":"Figure","type":"Plot"},"ticker":{"id":"c32e2efa-1c5a-4e36-9590-48e369f8e1c0","type":"BasicTicker"}},"id":"84101bd2-25f1-4d76-b4ca-e7449603070e","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"251576b7-fa28-4c89-9c21-b7e1dcf4039b","type":"Title"},{"attributes":{},"id":"c32e2efa-1c5a-4e36-9590-48e369f8e1c0","type":"BasicTicker"}],"root_ids":["a13284c4-257f-4475-87f3-9cc29b0fd3b0"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"2c92773c-2afb-421a-8e82-7c61a58dfa69","elementid":"92c72332-e404-4d34-8fb2-4b35480f9c34","modelid":"a13284c4-257f-4475-87f3-9cc29b0fd3b0"}];
                
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
