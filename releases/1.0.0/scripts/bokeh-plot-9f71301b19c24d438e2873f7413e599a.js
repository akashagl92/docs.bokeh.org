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
      };var element = document.getElementById("dfefd187-fa13-4a38-aaa9-b117b60e8933");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dfefd187-fa13-4a38-aaa9-b117b60e8933' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"a3d72e07-7993-48f3-af3d-84226b07e6c9":{"roots":{"references":[{"attributes":{},"id":"11171","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11154","type":"BoxAnnotation"},{"attributes":{},"id":"11134","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11163","type":"MultiPolygons"},{"attributes":{"formatter":{"id":"11169","type":"BasicTickFormatter"},"plot":{"id":"11127","subtype":"Figure","type":"Plot"},"ticker":{"id":"11137","type":"BasicTicker"}},"id":"11136","type":"LinearAxis"},{"attributes":{},"id":"11146","type":"PanTool"},{"attributes":{},"id":"11173","type":"Selection"},{"attributes":{},"id":"11142","type":"BasicTicker"},{"attributes":{},"id":"11132","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11162","type":"MultiPolygons"},{"attributes":{"callback":null},"id":"11130","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11146","type":"PanTool"},{"id":"11147","type":"WheelZoomTool"},{"id":"11148","type":"BoxZoomTool"},{"id":"11149","type":"SaveTool"},{"id":"11150","type":"ResetTool"},{"id":"11151","type":"HelpTool"}]},"id":"11152","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"11127","subtype":"Figure","type":"Plot"},"ticker":{"id":"11142","type":"BasicTicker"}},"id":"11145","type":"Grid"},{"attributes":{"data_source":{"id":"11161","type":"ColumnDataSource"},"glyph":{"id":"11162","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11163","type":"MultiPolygons"},"selection_glyph":null,"view":{"id":"11165","type":"CDSView"}},"id":"11164","type":"GlyphRenderer"},{"attributes":{},"id":"11147","type":"WheelZoomTool"},{"attributes":{},"id":"11137","type":"BasicTicker"},{"attributes":{"formatter":{"id":"11171","type":"BasicTickFormatter"},"plot":{"id":"11127","subtype":"Figure","type":"Plot"},"ticker":{"id":"11142","type":"BasicTicker"}},"id":"11141","type":"LinearAxis"},{"attributes":{},"id":"11150","type":"ResetTool"},{"attributes":{},"id":"11169","type":"BasicTickFormatter"},{"attributes":{},"id":"11149","type":"SaveTool"},{"attributes":{"below":[{"id":"11136","type":"LinearAxis"}],"left":[{"id":"11141","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11136","type":"LinearAxis"},{"id":"11140","type":"Grid"},{"id":"11141","type":"LinearAxis"},{"id":"11145","type":"Grid"},{"id":"11154","type":"BoxAnnotation"},{"id":"11164","type":"GlyphRenderer"}],"title":{"id":"11167","type":"Title"},"toolbar":{"id":"11152","type":"Toolbar"},"x_range":{"id":"11128","type":"DataRange1d"},"x_scale":{"id":"11132","type":"LinearScale"},"y_range":{"id":"11130","type":"DataRange1d"},"y_scale":{"id":"11134","type":"LinearScale"}},"id":"11127","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"11167","type":"Title"},{"attributes":{"overlay":{"id":"11154","type":"BoxAnnotation"}},"id":"11148","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"xs":[[[[1,1,2,2]]]],"ys":[[[[3,4,4,3]]]]},"selected":{"id":"11173","type":"Selection"},"selection_policy":{"id":"11174","type":"UnionRenderers"}},"id":"11161","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"11128","type":"DataRange1d"},{"attributes":{"source":{"id":"11161","type":"ColumnDataSource"}},"id":"11165","type":"CDSView"},{"attributes":{},"id":"11151","type":"HelpTool"},{"attributes":{"plot":{"id":"11127","subtype":"Figure","type":"Plot"},"ticker":{"id":"11137","type":"BasicTicker"}},"id":"11140","type":"Grid"},{"attributes":{},"id":"11174","type":"UnionRenderers"}],"root_ids":["11127"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"a3d72e07-7993-48f3-af3d-84226b07e6c9","roots":{"11127":"dfefd187-fa13-4a38-aaa9-b117b60e8933"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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