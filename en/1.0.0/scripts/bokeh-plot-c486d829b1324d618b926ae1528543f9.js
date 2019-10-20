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
      };var element = document.getElementById("45a5e013-9261-4eb6-abbe-6a7912eaf192");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '45a5e013-9261-4eb6-abbe-6a7912eaf192' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"15f4311f-1c0e-4279-9c02-a25e3e13af02":{"roots":{"references":[{"attributes":{},"id":"9924","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"}},"id":"9911","type":"HexTile"},{"attributes":{"source":{"id":"9914","type":"ColumnDataSource"}},"id":"9918","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"9920","type":"Title"},{"attributes":{},"id":"9880","type":"LinearScale"},{"attributes":{"data_source":{"id":"9914","type":"ColumnDataSource"},"glyph":{"id":"9915","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9916","type":"Text"},"selection_glyph":null,"view":{"id":"9918","type":"CDSView"}},"id":"9917","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"9875","subtype":"Figure","type":"Plot"},"ticker":{"id":"9885","type":"BasicTicker"},"visible":false},"id":"9888","type":"Grid"},{"attributes":{"callback":null},"id":"9876","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"9875","subtype":"Figure","type":"Plot"},"ticker":{"id":"9890","type":"BasicTicker"},"visible":false},"id":"9893","type":"Grid"},{"attributes":{"source":{"id":"9909","type":"ColumnDataSource"}},"id":"9913","type":"CDSView"},{"attributes":{},"id":"9894","type":"PanTool"},{"attributes":{},"id":"9898","type":"ResetTool"},{"attributes":{"overlay":{"id":"9902","type":"BoxAnnotation"}},"id":"9896","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.5},"line_color":{"value":"white"},"q":{"field":"q"},"r":{"field":"r"}},"id":"9910","type":"HexTile"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"9894","type":"PanTool"},{"id":"9895","type":"WheelZoomTool"},{"id":"9896","type":"BoxZoomTool"},{"id":"9897","type":"SaveTool"},{"id":"9898","type":"ResetTool"},{"id":"9899","type":"HelpTool"}]},"id":"9900","type":"Toolbar"},{"attributes":{},"id":"9885","type":"BasicTicker"},{"attributes":{"below":[{"id":"9884","type":"LinearAxis"}],"left":[{"id":"9889","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9884","type":"LinearAxis"},{"id":"9888","type":"Grid"},{"id":"9889","type":"LinearAxis"},{"id":"9893","type":"Grid"},{"id":"9902","type":"BoxAnnotation"},{"id":"9912","type":"GlyphRenderer"},{"id":"9917","type":"GlyphRenderer"}],"title":{"id":"9920","type":"Title"},"toolbar":{"id":"9900","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9876","type":"DataRange1d"},"x_scale":{"id":"9880","type":"LinearScale"},"y_range":{"id":"9878","type":"DataRange1d"},"y_scale":{"id":"9882","type":"LinearScale"}},"id":"9875","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9890","type":"BasicTicker"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9916","type":"Text"},{"attributes":{"callback":null,"data":{"fill_color":["firebrick","firebrick","firebrick","navy","navy","navy","navy"],"q":[0,0,0,-1,-1,1,1],"r":[0,-1,1,0,1,-1,0]},"selected":{"id":"9926","type":"Selection"},"selection_policy":{"id":"9927","type":"UnionRenderers"}},"id":"9909","type":"ColumnDataSource"},{"attributes":{},"id":"9882","type":"LinearScale"},{"attributes":{},"id":"9927","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"text":["(0, 0)","(0, -1)","(0, 1)","(-1, 0)","(-1, 1)","(1, -1)","(1, 0)"],"x":{"__ndarray__":"AAAAAAAAAACqTFjoerbrv6pMWOh6tus/qkxY6Hq2+7+qTFjoerbrv6pMWOh6tus/qkxY6Hq2+z8=","dtype":"float64","shape":[7]},"y":{"__ndarray__":"AAAAAAAAAIAAAAAAAAD4PwAAAAAAAPi/AAAAAAAAAIAAAAAAAAD4vwAAAAAAAPg/AAAAAAAAAIA=","dtype":"float64","shape":[7]}},"selected":{"id":"9928","type":"Selection"},"selection_policy":{"id":"9929","type":"UnionRenderers"}},"id":"9914","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"9922","type":"BasicTickFormatter"},"plot":{"id":"9875","subtype":"Figure","type":"Plot"},"ticker":{"id":"9885","type":"BasicTicker"}},"id":"9884","type":"LinearAxis"},{"attributes":{"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9915","type":"Text"},{"attributes":{"data_source":{"id":"9909","type":"ColumnDataSource"},"glyph":{"id":"9910","type":"HexTile"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9911","type":"HexTile"},"selection_glyph":null,"view":{"id":"9913","type":"CDSView"}},"id":"9912","type":"GlyphRenderer"},{"attributes":{},"id":"9928","type":"Selection"},{"attributes":{},"id":"9929","type":"UnionRenderers"},{"attributes":{},"id":"9895","type":"WheelZoomTool"},{"attributes":{},"id":"9897","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9902","type":"BoxAnnotation"},{"attributes":{},"id":"9926","type":"Selection"},{"attributes":{"callback":null},"id":"9878","type":"DataRange1d"},{"attributes":{"formatter":{"id":"9924","type":"BasicTickFormatter"},"plot":{"id":"9875","subtype":"Figure","type":"Plot"},"ticker":{"id":"9890","type":"BasicTicker"}},"id":"9889","type":"LinearAxis"},{"attributes":{},"id":"9899","type":"HelpTool"},{"attributes":{},"id":"9922","type":"BasicTickFormatter"}],"root_ids":["9875"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"15f4311f-1c0e-4279-9c02-a25e3e13af02","roots":{"9875":"45a5e013-9261-4eb6-abbe-6a7912eaf192"}}];
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