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
      };var element = document.getElementById("ec7b7088-7e4b-486a-9737-35d5535cd3df");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ec7b7088-7e4b-486a-9737-35d5535cd3df' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"646f51e2-16a3-4706-bea1-89433fe4e7f2":{"roots":{"references":[{"attributes":{},"id":"11653","type":"BasicTicker"},{"attributes":{"callback":null},"id":"11641","type":"DataRange1d"},{"attributes":{},"id":"11657","type":"PanTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"fill_color"},"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11673","type":"Patches"},{"attributes":{"dimension":1,"plot":{"id":"11638","subtype":"Figure","type":"Plot"},"ticker":{"id":"11653","type":"BasicTicker"}},"id":"11656","type":"Grid"},{"attributes":{"overlay":{"id":"11665","type":"BoxAnnotation"}},"id":"11659","type":"BoxZoomTool"},{"attributes":{},"id":"11682","type":"BasicTickFormatter"},{"attributes":{},"id":"11643","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"11678","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11657","type":"PanTool"},{"id":"11658","type":"WheelZoomTool"},{"id":"11659","type":"BoxZoomTool"},{"id":"11660","type":"SaveTool"},{"id":"11661","type":"ResetTool"},{"id":"11662","type":"HelpTool"}]},"id":"11663","type":"Toolbar"},{"attributes":{},"id":"11645","type":"LinearScale"},{"attributes":{},"id":"11658","type":"WheelZoomTool"},{"attributes":{},"id":"11660","type":"SaveTool"},{"attributes":{"source":{"id":"11672","type":"ColumnDataSource"}},"id":"11676","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11665","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11674","type":"Patches"},{"attributes":{"data_source":{"id":"11672","type":"ColumnDataSource"},"glyph":{"id":"11673","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11674","type":"Patches"},"selection_glyph":null,"view":{"id":"11676","type":"CDSView"}},"id":"11675","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"11638","subtype":"Figure","type":"Plot"},"ticker":{"id":"11648","type":"BasicTicker"}},"id":"11651","type":"Grid"},{"attributes":{"callback":null,"data":{"fill_alpha":[0.8,0.3],"fill_color":["firebrick","navy"],"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]},"selected":{"id":"11685","type":"Selection"},"selection_policy":{"id":"11684","type":"UnionRenderers"}},"id":"11672","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"11680","type":"BasicTickFormatter"},"plot":{"id":"11638","subtype":"Figure","type":"Plot"},"ticker":{"id":"11648","type":"BasicTicker"}},"id":"11647","type":"LinearAxis"},{"attributes":{},"id":"11661","type":"ResetTool"},{"attributes":{},"id":"11662","type":"HelpTool"},{"attributes":{},"id":"11680","type":"BasicTickFormatter"},{"attributes":{},"id":"11648","type":"BasicTicker"},{"attributes":{},"id":"11684","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"11682","type":"BasicTickFormatter"},"plot":{"id":"11638","subtype":"Figure","type":"Plot"},"ticker":{"id":"11653","type":"BasicTicker"}},"id":"11652","type":"LinearAxis"},{"attributes":{"below":[{"id":"11647","type":"LinearAxis"}],"left":[{"id":"11652","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11647","type":"LinearAxis"},{"id":"11651","type":"Grid"},{"id":"11652","type":"LinearAxis"},{"id":"11656","type":"Grid"},{"id":"11665","type":"BoxAnnotation"},{"id":"11675","type":"GlyphRenderer"}],"title":{"id":"11678","type":"Title"},"toolbar":{"id":"11663","type":"Toolbar"},"x_range":{"id":"11639","type":"DataRange1d"},"x_scale":{"id":"11643","type":"LinearScale"},"y_range":{"id":"11641","type":"DataRange1d"},"y_scale":{"id":"11645","type":"LinearScale"}},"id":"11638","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11685","type":"Selection"},{"attributes":{"callback":null},"id":"11639","type":"DataRange1d"}],"root_ids":["11638"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"646f51e2-16a3-4706-bea1-89433fe4e7f2","roots":{"11638":"ec7b7088-7e4b-486a-9737-35d5535cd3df"}}];
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