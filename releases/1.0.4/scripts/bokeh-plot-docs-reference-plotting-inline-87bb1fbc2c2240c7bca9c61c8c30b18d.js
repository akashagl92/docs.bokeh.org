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
      };var element = document.getElementById("cf0b04cb-30b7-4478-a852-213074a684ad");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cf0b04cb-30b7-4478-a852-213074a684ad' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"3bab11e6-6c30-471a-be22-dc9bdf800c06":{"roots":{"references":[{"attributes":{},"id":"34652","type":"UnionRenderers"},{"attributes":{},"id":"34630","type":"ResetTool"},{"attributes":{},"id":"34622","type":"BasicTicker"},{"attributes":{},"id":"34653","type":"Selection"},{"attributes":{},"id":"34631","type":"HelpTool"},{"attributes":{"callback":null},"id":"34608","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"34607","subtype":"Figure","type":"Plot"},"ticker":{"id":"34622","type":"BasicTicker"}},"id":"34625","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34626","type":"PanTool"},{"id":"34627","type":"WheelZoomTool"},{"id":"34628","type":"BoxZoomTool"},{"id":"34629","type":"SaveTool"},{"id":"34630","type":"ResetTool"},{"id":"34631","type":"HelpTool"}]},"id":"34632","type":"Toolbar"},{"attributes":{"data_source":{"id":"34641","type":"ColumnDataSource"},"glyph":{"id":"34642","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34643","type":"SquareX"},"selection_glyph":null,"view":{"id":"34645","type":"CDSView"}},"id":"34644","type":"GlyphRenderer"},{"attributes":{},"id":"34614","type":"LinearScale"},{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"34653","type":"Selection"},"selection_policy":{"id":"34652","type":"UnionRenderers"}},"id":"34641","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34643","type":"SquareX"},{"attributes":{"callback":null},"id":"34610","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34634","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"34616","type":"LinearAxis"}],"left":[{"id":"34621","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34616","type":"LinearAxis"},{"id":"34620","type":"Grid"},{"id":"34621","type":"LinearAxis"},{"id":"34625","type":"Grid"},{"id":"34634","type":"BoxAnnotation"},{"id":"34644","type":"GlyphRenderer"}],"title":{"id":"34646","type":"Title"},"toolbar":{"id":"34632","type":"Toolbar"},"x_range":{"id":"34608","type":"DataRange1d"},"x_scale":{"id":"34612","type":"LinearScale"},"y_range":{"id":"34610","type":"DataRange1d"},"y_scale":{"id":"34614","type":"LinearScale"}},"id":"34607","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#FDAE6B"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34642","type":"SquareX"},{"attributes":{},"id":"34612","type":"LinearScale"},{"attributes":{"source":{"id":"34641","type":"ColumnDataSource"}},"id":"34645","type":"CDSView"},{"attributes":{},"id":"34626","type":"PanTool"},{"attributes":{"formatter":{"id":"34650","type":"BasicTickFormatter"},"plot":{"id":"34607","subtype":"Figure","type":"Plot"},"ticker":{"id":"34617","type":"BasicTicker"}},"id":"34616","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"34646","type":"Title"},{"attributes":{},"id":"34627","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"34648","type":"BasicTickFormatter"},"plot":{"id":"34607","subtype":"Figure","type":"Plot"},"ticker":{"id":"34622","type":"BasicTicker"}},"id":"34621","type":"LinearAxis"},{"attributes":{},"id":"34648","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"34634","type":"BoxAnnotation"}},"id":"34628","type":"BoxZoomTool"},{"attributes":{},"id":"34617","type":"BasicTicker"},{"attributes":{},"id":"34650","type":"BasicTickFormatter"},{"attributes":{},"id":"34629","type":"SaveTool"},{"attributes":{"plot":{"id":"34607","subtype":"Figure","type":"Plot"},"ticker":{"id":"34617","type":"BasicTicker"}},"id":"34620","type":"Grid"}],"root_ids":["34607"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"3bab11e6-6c30-471a-be22-dc9bdf800c06","roots":{"34607":"cf0b04cb-30b7-4478-a852-213074a684ad"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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