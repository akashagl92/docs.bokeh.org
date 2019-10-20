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
      };var element = document.getElementById("a42ae6b2-b4aa-49f1-bd23-6929505a783a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a42ae6b2-b4aa-49f1-bd23-6929505a783a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"e9fded8c-0043-4cab-8579-5e056b847875":{"roots":{"references":[{"attributes":{},"id":"8d65ad81-f669-4287-b277-8a522d55cebc","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"668736ee-9aa6-4a78-85b1-50326a70368d","type":"ColumnDataSource"},"glyph":{"id":"2b447764-340f-434c-8d53-d8970d90220d","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9e103ba3-3e6e-4e93-b8b5-aeb992c391fb","type":"InvertedTriangle"},"selection_glyph":null,"view":{"id":"c0ae4492-3581-47cb-a97e-19a2961582e0","type":"CDSView"}},"id":"c1a62d37-6933-4b1e-9ca8-17939e16405c","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"668736ee-9aa6-4a78-85b1-50326a70368d","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"02cbf425-fcf6-4688-9513-8fb842cb5c17","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"3ed0f27e-f367-4bfa-9638-b83879ff643e","type":"LinearAxis"}],"left":[{"id":"ea00046e-96cc-40ce-aad5-12c30abfa854","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"3ed0f27e-f367-4bfa-9638-b83879ff643e","type":"LinearAxis"},{"id":"f7af119f-9903-445e-bc10-9274da20ee95","type":"Grid"},{"id":"ea00046e-96cc-40ce-aad5-12c30abfa854","type":"LinearAxis"},{"id":"441a61eb-53de-4901-bd55-ada99f88ddb5","type":"Grid"},{"id":"02cbf425-fcf6-4688-9513-8fb842cb5c17","type":"BoxAnnotation"},{"id":"c1a62d37-6933-4b1e-9ca8-17939e16405c","type":"GlyphRenderer"}],"title":{"id":"5686dfbd-e270-4ba7-8779-4c7df782debb","type":"Title"},"toolbar":{"id":"a97e1305-7c79-43c6-932a-6cac542da21f","type":"Toolbar"},"x_range":{"id":"7c1fb04e-a962-41d0-b0d8-01c873fc56cb","type":"DataRange1d"},"x_scale":{"id":"8c6f9bad-f386-45cc-845a-85a495236af0","type":"LinearScale"},"y_range":{"id":"602f6a77-4c51-4ca9-b6b0-9891b03ccbce","type":"DataRange1d"},"y_scale":{"id":"051e1e7c-4466-486b-8494-20897070ed89","type":"LinearScale"}},"id":"75ad0806-a81d-4af1-8ac8-18961aea3a73","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"78d38dbf-2f53-4309-a2f7-b36806af83ab","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"78d38dbf-2f53-4309-a2f7-b36806af83ab","type":"PanTool"},{"id":"440b74b3-c390-48d2-83f1-067fde63a0e4","type":"WheelZoomTool"},{"id":"0f9d2602-991c-4f02-b4c5-ab9dc64c0da5","type":"BoxZoomTool"},{"id":"dff9291f-3009-4293-9c58-466af62e5597","type":"SaveTool"},{"id":"723df514-200a-4d6b-9254-ca3c70d42755","type":"ResetTool"},{"id":"b9459d39-4736-4415-ab83-68488b71e2eb","type":"HelpTool"}]},"id":"a97e1305-7c79-43c6-932a-6cac542da21f","type":"Toolbar"},{"attributes":{"source":{"id":"668736ee-9aa6-4a78-85b1-50326a70368d","type":"ColumnDataSource"}},"id":"c0ae4492-3581-47cb-a97e-19a2961582e0","type":"CDSView"},{"attributes":{"callback":null},"id":"7c1fb04e-a962-41d0-b0d8-01c873fc56cb","type":"DataRange1d"},{"attributes":{},"id":"440b74b3-c390-48d2-83f1-067fde63a0e4","type":"WheelZoomTool"},{"attributes":{},"id":"d981a59b-85aa-4d45-b087-2158ba8081ca","type":"BasicTicker"},{"attributes":{"overlay":{"id":"02cbf425-fcf6-4688-9513-8fb842cb5c17","type":"BoxAnnotation"}},"id":"0f9d2602-991c-4f02-b4c5-ab9dc64c0da5","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#DE2D26"},"line_color":{"value":"#DE2D26"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"2b447764-340f-434c-8d53-d8970d90220d","type":"InvertedTriangle"},{"attributes":{},"id":"dff9291f-3009-4293-9c58-466af62e5597","type":"SaveTool"},{"attributes":{"formatter":{"id":"8d65ad81-f669-4287-b277-8a522d55cebc","type":"BasicTickFormatter"},"plot":{"id":"75ad0806-a81d-4af1-8ac8-18961aea3a73","subtype":"Figure","type":"Plot"},"ticker":{"id":"d981a59b-85aa-4d45-b087-2158ba8081ca","type":"BasicTicker"}},"id":"3ed0f27e-f367-4bfa-9638-b83879ff643e","type":"LinearAxis"},{"attributes":{},"id":"723df514-200a-4d6b-9254-ca3c70d42755","type":"ResetTool"},{"attributes":{"callback":null},"id":"602f6a77-4c51-4ca9-b6b0-9891b03ccbce","type":"DataRange1d"},{"attributes":{},"id":"b9459d39-4736-4415-ab83-68488b71e2eb","type":"HelpTool"},{"attributes":{},"id":"8c6f9bad-f386-45cc-845a-85a495236af0","type":"LinearScale"},{"attributes":{},"id":"051e1e7c-4466-486b-8494-20897070ed89","type":"LinearScale"},{"attributes":{"plot":{"id":"75ad0806-a81d-4af1-8ac8-18961aea3a73","subtype":"Figure","type":"Plot"},"ticker":{"id":"d981a59b-85aa-4d45-b087-2158ba8081ca","type":"BasicTicker"}},"id":"f7af119f-9903-445e-bc10-9274da20ee95","type":"Grid"},{"attributes":{"formatter":{"id":"b6409fed-a1de-473f-9afe-8bf7fa43b560","type":"BasicTickFormatter"},"plot":{"id":"75ad0806-a81d-4af1-8ac8-18961aea3a73","subtype":"Figure","type":"Plot"},"ticker":{"id":"3169665b-a48f-4e5f-9cc9-f984bcb1dc26","type":"BasicTicker"}},"id":"ea00046e-96cc-40ce-aad5-12c30abfa854","type":"LinearAxis"},{"attributes":{},"id":"3169665b-a48f-4e5f-9cc9-f984bcb1dc26","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"5686dfbd-e270-4ba7-8779-4c7df782debb","type":"Title"},{"attributes":{},"id":"b6409fed-a1de-473f-9afe-8bf7fa43b560","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"75ad0806-a81d-4af1-8ac8-18961aea3a73","subtype":"Figure","type":"Plot"},"ticker":{"id":"3169665b-a48f-4e5f-9cc9-f984bcb1dc26","type":"BasicTicker"}},"id":"441a61eb-53de-4901-bd55-ada99f88ddb5","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"9e103ba3-3e6e-4e93-b8b5-aeb992c391fb","type":"InvertedTriangle"}],"root_ids":["75ad0806-a81d-4af1-8ac8-18961aea3a73"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"e9fded8c-0043-4cab-8579-5e056b847875","elementid":"a42ae6b2-b4aa-49f1-bd23-6929505a783a","modelid":"75ad0806-a81d-4af1-8ac8-18961aea3a73"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
