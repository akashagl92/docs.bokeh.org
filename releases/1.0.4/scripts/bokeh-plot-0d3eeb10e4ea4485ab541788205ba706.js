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
      };var element = document.getElementById("d317bd3a-e8c1-4323-b5e6-6927c63e9935");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd317bd3a-e8c1-4323-b5e6-6927c63e9935' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"de51f3a0-5fa2-4a6e-8339-f1efec4c0480":{"roots":{"references":[{"attributes":{},"id":"12112","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"12112","type":"Selection"},"selection_policy":{"id":"12111","type":"UnionRenderers"}},"id":"12100","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"12067","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12085","type":"PanTool"},{"id":"12086","type":"WheelZoomTool"},{"id":"12087","type":"BoxZoomTool"},{"id":"12088","type":"SaveTool"},{"id":"12089","type":"ResetTool"},{"id":"12090","type":"HelpTool"}]},"id":"12091","type":"Toolbar"},{"attributes":{"data_source":{"id":"12100","type":"ColumnDataSource"},"glyph":{"id":"12101","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12102","type":"Circle"},"selection_glyph":null,"view":{"id":"12104","type":"CDSView"}},"id":"12103","type":"GlyphRenderer"},{"attributes":{},"id":"12085","type":"PanTool"},{"attributes":{"callback":null},"id":"12069","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12093","type":"BoxAnnotation"},{"attributes":{},"id":"12086","type":"WheelZoomTool"},{"attributes":{},"id":"12071","type":"LinearScale"},{"attributes":{"overlay":{"id":"12093","type":"BoxAnnotation"}},"id":"12087","type":"BoxZoomTool"},{"attributes":{"source":{"id":"12100","type":"ColumnDataSource"}},"id":"12104","type":"CDSView"},{"attributes":{},"id":"12076","type":"BasicTicker"},{"attributes":{},"id":"12088","type":"SaveTool"},{"attributes":{},"id":"12073","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"12105","type":"Title"},{"attributes":{"formatter":{"id":"12107","type":"BasicTickFormatter"},"plot":{"id":"12066","subtype":"Figure","type":"Plot"},"ticker":{"id":"12081","type":"BasicTicker"}},"id":"12080","type":"LinearAxis"},{"attributes":{"formatter":{"id":"12109","type":"BasicTickFormatter"},"plot":{"id":"12066","subtype":"Figure","type":"Plot"},"ticker":{"id":"12076","type":"BasicTicker"}},"id":"12075","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"12066","subtype":"Figure","type":"Plot"},"ticker":{"id":"12081","type":"BasicTicker"}},"id":"12084","type":"Grid"},{"attributes":{},"id":"12107","type":"BasicTickFormatter"},{"attributes":{},"id":"12081","type":"BasicTicker"},{"attributes":{"plot":{"id":"12066","subtype":"Figure","type":"Plot"},"ticker":{"id":"12076","type":"BasicTicker"}},"id":"12079","type":"Grid"},{"attributes":{},"id":"12109","type":"BasicTickFormatter"},{"attributes":{},"id":"12089","type":"ResetTool"},{"attributes":{"below":[{"id":"12075","type":"LinearAxis"}],"left":[{"id":"12080","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"12075","type":"LinearAxis"},{"id":"12079","type":"Grid"},{"id":"12080","type":"LinearAxis"},{"id":"12084","type":"Grid"},{"id":"12093","type":"BoxAnnotation"},{"id":"12103","type":"GlyphRenderer"}],"title":{"id":"12105","type":"Title"},"toolbar":{"id":"12091","type":"Toolbar"},"x_range":{"id":"12067","type":"DataRange1d"},"x_scale":{"id":"12071","type":"LinearScale"},"y_range":{"id":"12069","type":"DataRange1d"},"y_scale":{"id":"12073","type":"LinearScale"}},"id":"12066","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"12111","type":"UnionRenderers"},{"attributes":{},"id":"12090","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"12101","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"12102","type":"Circle"}],"root_ids":["12066"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"de51f3a0-5fa2-4a6e-8339-f1efec4c0480","roots":{"12066":"d317bd3a-e8c1-4323-b5e6-6927c63e9935"}}];
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