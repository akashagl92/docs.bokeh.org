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
      };var element = document.getElementById("597048d9-acdc-4505-97c5-e999ae18660e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '597048d9-acdc-4505-97c5-e999ae18660e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"ae5caf13-dd8b-4ca5-ba1f-ded0477cad99":{"roots":{"references":[{"attributes":{"below":[{"id":"11306","type":"LinearAxis"}],"left":[{"id":"11311","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11306","type":"LinearAxis"},{"id":"11310","type":"Grid"},{"id":"11311","type":"LinearAxis"},{"id":"11315","type":"Grid"},{"id":"11324","type":"BoxAnnotation"},{"id":"11334","type":"GlyphRenderer"}],"title":{"id":"11337","type":"Title"},"toolbar":{"id":"11322","type":"Toolbar"},"x_range":{"id":"11298","type":"DataRange1d"},"x_scale":{"id":"11302","type":"LinearScale"},"y_range":{"id":"11300","type":"DataRange1d"},"y_scale":{"id":"11304","type":"LinearScale"}},"id":"11297","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"11341","type":"BasicTickFormatter"},"plot":{"id":"11297","subtype":"Figure","type":"Plot"},"ticker":{"id":"11312","type":"BasicTicker"}},"id":"11311","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11333","type":"MultiPolygons"},{"attributes":{},"id":"11320","type":"ResetTool"},{"attributes":{},"id":"11312","type":"BasicTicker"},{"attributes":{"callback":null},"id":"11298","type":"DataRange1d"},{"attributes":{},"id":"11321","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"11297","subtype":"Figure","type":"Plot"},"ticker":{"id":"11312","type":"BasicTicker"}},"id":"11315","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11316","type":"PanTool"},{"id":"11317","type":"WheelZoomTool"},{"id":"11318","type":"BoxZoomTool"},{"id":"11319","type":"SaveTool"},{"id":"11320","type":"ResetTool"},{"id":"11321","type":"HelpTool"}]},"id":"11322","type":"Toolbar"},{"attributes":{"callback":null},"id":"11300","type":"DataRange1d"},{"attributes":{},"id":"11302","type":"LinearScale"},{"attributes":{},"id":"11343","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11332","type":"MultiPolygons"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11324","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"xs":[[[[1,1,2,2],[1.2,1.6,1.6],[1.8,1.8,1.6]],[[3,4,3]]]],"ys":[[[[4,3,3,4],[3.2,3.2,3.6],[3.4,3.8,3.8]],[[1,1,3]]]]},"selected":{"id":"11343","type":"Selection"},"selection_policy":{"id":"11344","type":"UnionRenderers"}},"id":"11331","type":"ColumnDataSource"},{"attributes":{},"id":"11307","type":"BasicTicker"},{"attributes":{"data_source":{"id":"11331","type":"ColumnDataSource"},"glyph":{"id":"11332","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11333","type":"MultiPolygons"},"selection_glyph":null,"view":{"id":"11335","type":"CDSView"}},"id":"11334","type":"GlyphRenderer"},{"attributes":{},"id":"11304","type":"LinearScale"},{"attributes":{"source":{"id":"11331","type":"ColumnDataSource"}},"id":"11335","type":"CDSView"},{"attributes":{},"id":"11316","type":"PanTool"},{"attributes":{},"id":"11344","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"11339","type":"BasicTickFormatter"},"plot":{"id":"11297","subtype":"Figure","type":"Plot"},"ticker":{"id":"11307","type":"BasicTicker"}},"id":"11306","type":"LinearAxis"},{"attributes":{},"id":"11317","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"11337","type":"Title"},{"attributes":{"plot":{"id":"11297","subtype":"Figure","type":"Plot"},"ticker":{"id":"11307","type":"BasicTicker"}},"id":"11310","type":"Grid"},{"attributes":{"overlay":{"id":"11324","type":"BoxAnnotation"}},"id":"11318","type":"BoxZoomTool"},{"attributes":{},"id":"11339","type":"BasicTickFormatter"},{"attributes":{},"id":"11341","type":"BasicTickFormatter"},{"attributes":{},"id":"11319","type":"SaveTool"}],"root_ids":["11297"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"ae5caf13-dd8b-4ca5-ba1f-ded0477cad99","roots":{"11297":"597048d9-acdc-4505-97c5-e999ae18660e"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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