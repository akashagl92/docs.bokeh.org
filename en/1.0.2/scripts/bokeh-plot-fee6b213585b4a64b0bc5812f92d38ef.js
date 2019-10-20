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
      };var element = document.getElementById("288e6a39-e314-4523-953b-59583c427d0b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '288e6a39-e314-4523-953b-59583c427d0b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f5baf018-62c5-4d8c-9948-06026c6048c6":{"roots":{"references":[{"attributes":{},"id":"13320","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"13350","type":"Title"},{"attributes":{"data_source":{"id":"13344","type":"ColumnDataSource"},"glyph":{"id":"13345","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13346","type":"Wedge"},"selection_glyph":null,"view":{"id":"13348","type":"CDSView"}},"id":"13347","type":"GlyphRenderer"},{"attributes":{},"id":"13352","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"13344","type":"ColumnDataSource"}},"id":"13348","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"13357","type":"Selection"},"selection_policy":{"id":"13356","type":"UnionRenderers"}},"id":"13344","type":"ColumnDataSource"},{"attributes":{},"id":"13315","type":"LinearScale"},{"attributes":{"overlay":{"id":"13337","type":"BoxAnnotation"}},"id":"13331","type":"BoxZoomTool"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.6},"line_color":{"value":"firebrick"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"13345","type":"Wedge"},{"attributes":{"formatter":{"id":"13352","type":"BasicTickFormatter"},"plot":{"id":"13310","subtype":"Figure","type":"Plot"},"ticker":{"id":"13320","type":"BasicTicker"}},"id":"13319","type":"LinearAxis"},{"attributes":{},"id":"13330","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"13310","subtype":"Figure","type":"Plot"},"ticker":{"id":"13320","type":"BasicTicker"}},"id":"13323","type":"Grid"},{"attributes":{"callback":null},"id":"13313","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13329","type":"PanTool"},{"id":"13330","type":"WheelZoomTool"},{"id":"13331","type":"BoxZoomTool"},{"id":"13332","type":"SaveTool"},{"id":"13333","type":"ResetTool"},{"id":"13334","type":"HelpTool"}]},"id":"13335","type":"Toolbar"},{"attributes":{},"id":"13317","type":"LinearScale"},{"attributes":{},"id":"13332","type":"SaveTool"},{"attributes":{},"id":"13334","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"13310","subtype":"Figure","type":"Plot"},"ticker":{"id":"13325","type":"BasicTicker"}},"id":"13328","type":"Grid"},{"attributes":{"below":[{"id":"13319","type":"LinearAxis"}],"left":[{"id":"13324","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"13319","type":"LinearAxis"},{"id":"13323","type":"Grid"},{"id":"13324","type":"LinearAxis"},{"id":"13328","type":"Grid"},{"id":"13337","type":"BoxAnnotation"},{"id":"13347","type":"GlyphRenderer"}],"title":{"id":"13350","type":"Title"},"toolbar":{"id":"13335","type":"Toolbar"},"x_range":{"id":"13311","type":"DataRange1d"},"x_scale":{"id":"13315","type":"LinearScale"},"y_range":{"id":"13313","type":"DataRange1d"},"y_scale":{"id":"13317","type":"LinearScale"}},"id":"13310","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"13329","type":"PanTool"},{"attributes":{},"id":"13356","type":"UnionRenderers"},{"attributes":{},"id":"13333","type":"ResetTool"},{"attributes":{},"id":"13325","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"13337","type":"BoxAnnotation"},{"attributes":{},"id":"13357","type":"Selection"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"13346","type":"Wedge"},{"attributes":{"formatter":{"id":"13354","type":"BasicTickFormatter"},"plot":{"id":"13310","subtype":"Figure","type":"Plot"},"ticker":{"id":"13325","type":"BasicTicker"}},"id":"13324","type":"LinearAxis"},{"attributes":{"callback":null},"id":"13311","type":"DataRange1d"},{"attributes":{},"id":"13354","type":"BasicTickFormatter"}],"root_ids":["13310"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"f5baf018-62c5-4d8c-9948-06026c6048c6","roots":{"13310":"288e6a39-e314-4523-953b-59583c427d0b"}}];
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