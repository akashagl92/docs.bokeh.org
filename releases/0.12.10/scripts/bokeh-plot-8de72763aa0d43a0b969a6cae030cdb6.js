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
      };var element = document.getElementById("6f14ae79-49f6-41b4-9a18-61a82a9edd28");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6f14ae79-49f6-41b4-9a18-61a82a9edd28' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"5eb39ae8-c727-4a7a-b8cc-308cc02529dc":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"230138f1-bd91-4d1e-a3f5-716c5b50681b","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"437e23ee-3456-4de4-83bd-9cf4d25920ef","type":"LinearAxis"}],"left":[{"id":"fda3a006-587e-416c-a4ed-64fb7fd58e0b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"437e23ee-3456-4de4-83bd-9cf4d25920ef","type":"LinearAxis"},{"id":"7a6310ba-0cc9-4514-8d41-61b288bc3bd3","type":"Grid"},{"id":"fda3a006-587e-416c-a4ed-64fb7fd58e0b","type":"LinearAxis"},{"id":"811315b3-a5e9-43d5-a98a-d3961c17eb81","type":"Grid"},{"id":"230138f1-bd91-4d1e-a3f5-716c5b50681b","type":"BoxAnnotation"},{"id":"9189cb5f-5848-46d6-a6e9-b229e54e38e2","type":"GlyphRenderer"}],"title":{"id":"e1e92971-3182-499c-8df1-b0a6eb9acdbf","type":"Title"},"toolbar":{"id":"73ef0ee2-60b6-4c1d-b81f-1052999056a0","type":"Toolbar"},"x_range":{"id":"5f386c57-7eb0-4bcb-964d-b75c25f719f4","type":"DataRange1d"},"x_scale":{"id":"ab5b930e-fdc6-4cbf-a41e-2eb6021889a9","type":"LinearScale"},"y_range":{"id":"c3075ac7-cf78-49f4-84c4-eddaf6e22040","type":"DataRange1d"},"y_scale":{"id":"94cacb81-d8c9-43c2-912a-9a316ac8876c","type":"LinearScale"}},"id":"14b9c9e9-746f-45a9-b10a-75cd9d591be9","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"ab5b930e-fdc6-4cbf-a41e-2eb6021889a9","type":"LinearScale"},{"attributes":{},"id":"34de55c4-3cb3-40c0-92d4-99434d485442","type":"SaveTool"},{"attributes":{},"id":"c21954a9-3428-4ef7-82b1-c349bc611fc8","type":"BasicTicker"},{"attributes":{},"id":"c00ea68b-12d7-4dab-9ac2-f1c823841fd4","type":"PanTool"},{"attributes":{"formatter":{"id":"7e107123-db81-4d3f-8166-274055fe09aa","type":"BasicTickFormatter"},"plot":{"id":"14b9c9e9-746f-45a9-b10a-75cd9d591be9","subtype":"Figure","type":"Plot"},"ticker":{"id":"777b1046-5ac1-416b-a88f-63f85b55ddc2","type":"BasicTicker"}},"id":"437e23ee-3456-4de4-83bd-9cf4d25920ef","type":"LinearAxis"},{"attributes":{"overlay":{"id":"230138f1-bd91-4d1e-a3f5-716c5b50681b","type":"BoxAnnotation"}},"id":"4ef04038-5443-4843-aa5a-de2e3db77481","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"c3075ac7-cf78-49f4-84c4-eddaf6e22040","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"c92ce83f-13b8-4c7e-a3c0-1d98e0a8eb22","type":"ColumnDataSource"},{"attributes":{},"id":"0517e469-a9a7-418b-abf1-05fc5ce68cf5","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"5f386c57-7eb0-4bcb-964d-b75c25f719f4","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"7889d70b-bcb8-4a6f-9e15-11021a9c67ed","type":"Oval"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"953cd4f5-3936-4d01-9136-45b5182c7875","type":"Oval"},{"attributes":{"plot":{"id":"14b9c9e9-746f-45a9-b10a-75cd9d591be9","subtype":"Figure","type":"Plot"},"ticker":{"id":"777b1046-5ac1-416b-a88f-63f85b55ddc2","type":"BasicTicker"}},"id":"7a6310ba-0cc9-4514-8d41-61b288bc3bd3","type":"Grid"},{"attributes":{"data_source":{"id":"c92ce83f-13b8-4c7e-a3c0-1d98e0a8eb22","type":"ColumnDataSource"},"glyph":{"id":"953cd4f5-3936-4d01-9136-45b5182c7875","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7889d70b-bcb8-4a6f-9e15-11021a9c67ed","type":"Oval"},"selection_glyph":null,"view":{"id":"62f209d5-18e0-469b-a417-ed30f6270d24","type":"CDSView"}},"id":"9189cb5f-5848-46d6-a6e9-b229e54e38e2","type":"GlyphRenderer"},{"attributes":{},"id":"2852f3bc-65e5-438c-893f-4296c2523e94","type":"ResetTool"},{"attributes":{"formatter":{"id":"0517e469-a9a7-418b-abf1-05fc5ce68cf5","type":"BasicTickFormatter"},"plot":{"id":"14b9c9e9-746f-45a9-b10a-75cd9d591be9","subtype":"Figure","type":"Plot"},"ticker":{"id":"c21954a9-3428-4ef7-82b1-c349bc611fc8","type":"BasicTicker"}},"id":"fda3a006-587e-416c-a4ed-64fb7fd58e0b","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"e1e92971-3182-499c-8df1-b0a6eb9acdbf","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c00ea68b-12d7-4dab-9ac2-f1c823841fd4","type":"PanTool"},{"id":"49d24e1e-070c-4bf2-8571-cabb4b39f962","type":"WheelZoomTool"},{"id":"4ef04038-5443-4843-aa5a-de2e3db77481","type":"BoxZoomTool"},{"id":"34de55c4-3cb3-40c0-92d4-99434d485442","type":"SaveTool"},{"id":"2852f3bc-65e5-438c-893f-4296c2523e94","type":"ResetTool"},{"id":"25427240-868f-47d1-b83c-1e0fec1ef658","type":"HelpTool"}]},"id":"73ef0ee2-60b6-4c1d-b81f-1052999056a0","type":"Toolbar"},{"attributes":{},"id":"49d24e1e-070c-4bf2-8571-cabb4b39f962","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"14b9c9e9-746f-45a9-b10a-75cd9d591be9","subtype":"Figure","type":"Plot"},"ticker":{"id":"c21954a9-3428-4ef7-82b1-c349bc611fc8","type":"BasicTicker"}},"id":"811315b3-a5e9-43d5-a98a-d3961c17eb81","type":"Grid"},{"attributes":{},"id":"25427240-868f-47d1-b83c-1e0fec1ef658","type":"HelpTool"},{"attributes":{},"id":"777b1046-5ac1-416b-a88f-63f85b55ddc2","type":"BasicTicker"},{"attributes":{},"id":"7e107123-db81-4d3f-8166-274055fe09aa","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"c92ce83f-13b8-4c7e-a3c0-1d98e0a8eb22","type":"ColumnDataSource"}},"id":"62f209d5-18e0-469b-a417-ed30f6270d24","type":"CDSView"},{"attributes":{},"id":"94cacb81-d8c9-43c2-912a-9a316ac8876c","type":"LinearScale"}],"root_ids":["14b9c9e9-746f-45a9-b10a-75cd9d591be9"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"5eb39ae8-c727-4a7a-b8cc-308cc02529dc","elementid":"6f14ae79-49f6-41b4-9a18-61a82a9edd28","modelid":"14b9c9e9-746f-45a9-b10a-75cd9d591be9"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
