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
      };var element = document.getElementById("a4149ad6-324c-4e87-a3dd-6449e629e541");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a4149ad6-324c-4e87-a3dd-6449e629e541' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"66a36dba-0ad8-4d6b-8bee-46350d882370":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"18137","subtype":"Figure","type":"Plot"},"ticker":{"id":"18153","type":"BasicTicker"}},"id":"18156","type":"Grid"},{"attributes":{"callback":null,"end":10},"id":"18141","type":"Range1d"},{"attributes":{},"id":"18143","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18165","type":"BoxAnnotation"},{"attributes":{"line_alpha":{"value":0.4},"line_color":{"value":"red"},"line_width":{"value":5},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18173","type":"MultiLine"},{"attributes":{"callback":null,"data":{"xs":[[1,9]],"ys":[[5,5]]},"selected":{"id":"18186","type":"Selection"},"selection_policy":{"id":"18187","type":"UnionRenderers"}},"id":"18172","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18172","type":"ColumnDataSource"}},"id":"18176","type":"CDSView"},{"attributes":{"active_drag":{"id":"18177","type":"FreehandDrawTool"},"active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18157","type":"PanTool"},{"id":"18158","type":"WheelZoomTool"},{"id":"18159","type":"BoxZoomTool"},{"id":"18160","type":"SaveTool"},{"id":"18161","type":"ResetTool"},{"id":"18162","type":"HelpTool"},{"id":"18177","type":"FreehandDrawTool"}]},"id":"18163","type":"Toolbar"},{"attributes":{},"id":"18145","type":"LinearScale"},{"attributes":{"num_objects":3,"renderers":[{"id":"18175","type":"GlyphRenderer"}]},"id":"18177","type":"FreehandDrawTool"},{"attributes":{"overlay":{"id":"18165","type":"BoxAnnotation"}},"id":"18159","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"18183","type":"BasicTickFormatter"},"plot":{"id":"18137","subtype":"Figure","type":"Plot"},"ticker":{"id":"18148","type":"BasicTicker"}},"id":"18147","type":"LinearAxis"},{"attributes":{},"id":"18186","type":"Selection"},{"attributes":{},"id":"18158","type":"WheelZoomTool"},{"attributes":{},"id":"18160","type":"SaveTool"},{"attributes":{},"id":"18148","type":"BasicTicker"},{"attributes":{"below":[{"id":"18147","type":"LinearAxis"}],"left":[{"id":"18152","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"18147","type":"LinearAxis"},{"id":"18151","type":"Grid"},{"id":"18152","type":"LinearAxis"},{"id":"18156","type":"Grid"},{"id":"18165","type":"BoxAnnotation"},{"id":"18175","type":"GlyphRenderer"}],"title":{"id":"18136","type":"Title"},"toolbar":{"id":"18163","type":"Toolbar"},"x_range":{"id":"18139","type":"Range1d"},"x_scale":{"id":"18143","type":"LinearScale"},"y_range":{"id":"18141","type":"Range1d"},"y_scale":{"id":"18145","type":"LinearScale"}},"id":"18137","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18161","type":"ResetTool"},{"attributes":{"plot":{"id":"18137","subtype":"Figure","type":"Plot"},"ticker":{"id":"18148","type":"BasicTicker"}},"id":"18151","type":"Grid"},{"attributes":{},"id":"18187","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":5},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18174","type":"MultiLine"},{"attributes":{"plot":null,"text":"Freehand Draw Tool"},"id":"18136","type":"Title"},{"attributes":{},"id":"18162","type":"HelpTool"},{"attributes":{"formatter":{"id":"18181","type":"BasicTickFormatter"},"plot":{"id":"18137","subtype":"Figure","type":"Plot"},"ticker":{"id":"18153","type":"BasicTicker"}},"id":"18152","type":"LinearAxis"},{"attributes":{},"id":"18183","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"18172","type":"ColumnDataSource"},"glyph":{"id":"18173","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18174","type":"MultiLine"},"selection_glyph":null,"view":{"id":"18176","type":"CDSView"}},"id":"18175","type":"GlyphRenderer"},{"attributes":{},"id":"18157","type":"PanTool"},{"attributes":{},"id":"18153","type":"BasicTicker"},{"attributes":{"callback":null,"end":10},"id":"18139","type":"Range1d"},{"attributes":{},"id":"18181","type":"BasicTickFormatter"}],"root_ids":["18137"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"66a36dba-0ad8-4d6b-8bee-46350d882370","roots":{"18137":"a4149ad6-324c-4e87-a3dd-6449e629e541"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
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