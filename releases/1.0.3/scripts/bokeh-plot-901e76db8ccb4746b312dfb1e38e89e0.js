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
      };var element = document.getElementById("0f9046fa-e3df-4834-9988-254216e014c0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0f9046fa-e3df-4834-9988-254216e014c0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"535985ba-de9c-4391-9442-83297e8f85e9":{"roots":{"references":[{"attributes":{"overlay":{"id":"13340","type":"BoxAnnotation"}},"id":"13334","type":"BoxZoomTool"},{"attributes":{},"id":"13354","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"13313","subtype":"Figure","type":"Plot"},"ticker":{"id":"13323","type":"BasicTicker"}},"id":"13326","type":"Grid"},{"attributes":{"below":[{"id":"13322","type":"LinearAxis"}],"left":[{"id":"13327","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"13322","type":"LinearAxis"},{"id":"13326","type":"Grid"},{"id":"13327","type":"LinearAxis"},{"id":"13331","type":"Grid"},{"id":"13340","type":"BoxAnnotation"},{"id":"13350","type":"GlyphRenderer"}],"title":{"id":"13352","type":"Title"},"toolbar":{"id":"13338","type":"Toolbar"},"x_range":{"id":"13314","type":"DataRange1d"},"x_scale":{"id":"13318","type":"LinearScale"},"y_range":{"id":"13316","type":"DataRange1d"},"y_scale":{"id":"13320","type":"LinearScale"}},"id":"13313","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"13335","type":"SaveTool"},{"attributes":{},"id":"13356","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"13354","type":"BasicTickFormatter"},"plot":{"id":"13313","subtype":"Figure","type":"Plot"},"ticker":{"id":"13328","type":"BasicTicker"}},"id":"13327","type":"LinearAxis"},{"attributes":{},"id":"13336","type":"ResetTool"},{"attributes":{},"id":"13359","type":"Selection"},{"attributes":{},"id":"13328","type":"BasicTicker"},{"attributes":{},"id":"13337","type":"HelpTool"},{"attributes":{},"id":"13360","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"13313","subtype":"Figure","type":"Plot"},"ticker":{"id":"13328","type":"BasicTicker"}},"id":"13331","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13332","type":"PanTool"},{"id":"13333","type":"WheelZoomTool"},{"id":"13334","type":"BoxZoomTool"},{"id":"13335","type":"SaveTool"},{"id":"13336","type":"ResetTool"},{"id":"13337","type":"HelpTool"}]},"id":"13338","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"13352","type":"Title"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"13349","type":"Wedge"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"13359","type":"Selection"},"selection_policy":{"id":"13360","type":"UnionRenderers"}},"id":"13347","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"13340","type":"BoxAnnotation"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.6},"line_color":{"value":"firebrick"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"13348","type":"Wedge"},{"attributes":{},"id":"13320","type":"LinearScale"},{"attributes":{"callback":null},"id":"13314","type":"DataRange1d"},{"attributes":{},"id":"13318","type":"LinearScale"},{"attributes":{"data_source":{"id":"13347","type":"ColumnDataSource"},"glyph":{"id":"13348","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13349","type":"Wedge"},"selection_glyph":null,"view":{"id":"13351","type":"CDSView"}},"id":"13350","type":"GlyphRenderer"},{"attributes":{"source":{"id":"13347","type":"ColumnDataSource"}},"id":"13351","type":"CDSView"},{"attributes":{},"id":"13332","type":"PanTool"},{"attributes":{"formatter":{"id":"13356","type":"BasicTickFormatter"},"plot":{"id":"13313","subtype":"Figure","type":"Plot"},"ticker":{"id":"13323","type":"BasicTicker"}},"id":"13322","type":"LinearAxis"},{"attributes":{},"id":"13333","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"13316","type":"DataRange1d"},{"attributes":{},"id":"13323","type":"BasicTicker"}],"root_ids":["13313"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"535985ba-de9c-4391-9442-83297e8f85e9","roots":{"13313":"0f9046fa-e3df-4834-9988-254216e014c0"}}];
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