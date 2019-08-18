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
      };var element = document.getElementById("a33ef4ea-0940-436d-a77d-e23bd8da38e3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a33ef4ea-0940-436d-a77d-e23bd8da38e3' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"ac78c66c-f943-49d8-a92d-9c98f1ac1245":{"roots":{"references":[{"attributes":{"callback":null,"end":10},"id":"18136","type":"Range1d"},{"attributes":{},"id":"18159","type":"HelpTool"},{"attributes":{},"id":"18154","type":"PanTool"},{"attributes":{},"id":"18183","type":"UnionRenderers"},{"attributes":{"callback":null,"end":10},"id":"18138","type":"Range1d"},{"attributes":{},"id":"18179","type":"BasicTickFormatter"},{"attributes":{},"id":"18140","type":"LinearScale"},{"attributes":{},"id":"18181","type":"BasicTickFormatter"},{"attributes":{"num_objects":3,"renderers":[{"id":"18172","type":"GlyphRenderer"}]},"id":"18174","type":"FreehandDrawTool"},{"attributes":{},"id":"18184","type":"Selection"},{"attributes":{"active_drag":{"id":"18174","type":"FreehandDrawTool"},"active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18154","type":"PanTool"},{"id":"18155","type":"WheelZoomTool"},{"id":"18156","type":"BoxZoomTool"},{"id":"18157","type":"SaveTool"},{"id":"18158","type":"ResetTool"},{"id":"18159","type":"HelpTool"},{"id":"18174","type":"FreehandDrawTool"}]},"id":"18160","type":"Toolbar"},{"attributes":{},"id":"18150","type":"BasicTicker"},{"attributes":{},"id":"18142","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":5},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18171","type":"MultiLine"},{"attributes":{"callback":null,"data":{"xs":[[1,9]],"ys":[[5,5]]},"selected":{"id":"18184","type":"Selection"},"selection_policy":{"id":"18183","type":"UnionRenderers"}},"id":"18169","type":"ColumnDataSource"},{"attributes":{},"id":"18155","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"18179","type":"BasicTickFormatter"},"plot":{"id":"18134","subtype":"Figure","type":"Plot"},"ticker":{"id":"18145","type":"BasicTicker"}},"id":"18144","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"18134","subtype":"Figure","type":"Plot"},"ticker":{"id":"18150","type":"BasicTicker"}},"id":"18153","type":"Grid"},{"attributes":{"overlay":{"id":"18162","type":"BoxAnnotation"}},"id":"18156","type":"BoxZoomTool"},{"attributes":{},"id":"18158","type":"ResetTool"},{"attributes":{},"id":"18145","type":"BasicTicker"},{"attributes":{"below":[{"id":"18144","type":"LinearAxis"}],"left":[{"id":"18149","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"18144","type":"LinearAxis"},{"id":"18148","type":"Grid"},{"id":"18149","type":"LinearAxis"},{"id":"18153","type":"Grid"},{"id":"18162","type":"BoxAnnotation"},{"id":"18172","type":"GlyphRenderer"}],"title":{"id":"18133","type":"Title"},"toolbar":{"id":"18160","type":"Toolbar"},"x_range":{"id":"18136","type":"Range1d"},"x_scale":{"id":"18140","type":"LinearScale"},"y_range":{"id":"18138","type":"Range1d"},"y_scale":{"id":"18142","type":"LinearScale"}},"id":"18134","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"18134","subtype":"Figure","type":"Plot"},"ticker":{"id":"18145","type":"BasicTicker"}},"id":"18148","type":"Grid"},{"attributes":{"data_source":{"id":"18169","type":"ColumnDataSource"},"glyph":{"id":"18170","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18171","type":"MultiLine"},"selection_glyph":null,"view":{"id":"18173","type":"CDSView"}},"id":"18172","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.4},"line_color":{"value":"red"},"line_width":{"value":5},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18170","type":"MultiLine"},{"attributes":{"plot":null,"text":"Freehand Draw Tool"},"id":"18133","type":"Title"},{"attributes":{},"id":"18157","type":"SaveTool"},{"attributes":{"formatter":{"id":"18181","type":"BasicTickFormatter"},"plot":{"id":"18134","subtype":"Figure","type":"Plot"},"ticker":{"id":"18150","type":"BasicTicker"}},"id":"18149","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18162","type":"BoxAnnotation"},{"attributes":{"source":{"id":"18169","type":"ColumnDataSource"}},"id":"18173","type":"CDSView"}],"root_ids":["18134"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"ac78c66c-f943-49d8-a92d-9c98f1ac1245","roots":{"18134":"a33ef4ea-0940-436d-a77d-e23bd8da38e3"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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