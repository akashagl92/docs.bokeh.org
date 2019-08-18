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
      };var element = document.getElementById("e2034983-a8f6-4f01-bb11-660f8c5dd1b3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e2034983-a8f6-4f01-bb11-660f8c5dd1b3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d38baf06-6223-4024-aed5-e50fb5da3556":{"roots":{"references":[{"attributes":{},"id":"34776","type":"BasicTicker"},{"attributes":{"data_source":{"id":"34795","type":"ColumnDataSource"},"glyph":{"id":"34796","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34797","type":"Triangle"},"selection_glyph":null,"view":{"id":"34799","type":"CDSView"}},"id":"34798","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"34770","type":"LinearAxis"}],"left":[{"id":"34775","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34770","type":"LinearAxis"},{"id":"34774","type":"Grid"},{"id":"34775","type":"LinearAxis"},{"id":"34779","type":"Grid"},{"id":"34788","type":"BoxAnnotation"},{"id":"34798","type":"GlyphRenderer"}],"title":{"id":"34801","type":"Title"},"toolbar":{"id":"34786","type":"Toolbar"},"x_range":{"id":"34762","type":"DataRange1d"},"x_scale":{"id":"34766","type":"LinearScale"},"y_range":{"id":"34764","type":"DataRange1d"},"y_scale":{"id":"34768","type":"LinearScale"}},"id":"34761","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"34785","type":"HelpTool"},{"attributes":{"source":{"id":"34795","type":"ColumnDataSource"}},"id":"34799","type":"CDSView"},{"attributes":{},"id":"34808","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"34761","subtype":"Figure","type":"Plot"},"ticker":{"id":"34776","type":"BasicTicker"}},"id":"34779","type":"Grid"},{"attributes":{"callback":null},"id":"34762","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34780","type":"PanTool"},{"id":"34781","type":"WheelZoomTool"},{"id":"34782","type":"BoxZoomTool"},{"id":"34783","type":"SaveTool"},{"id":"34784","type":"ResetTool"},{"id":"34785","type":"HelpTool"}]},"id":"34786","type":"Toolbar"},{"attributes":{"callback":null},"id":"34764","type":"DataRange1d"},{"attributes":{},"id":"34805","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34788","type":"BoxAnnotation"},{"attributes":{},"id":"34766","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#99D594"},"line_color":{"value":"#99D594"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34796","type":"Triangle"},{"attributes":{"plot":null,"text":""},"id":"34801","type":"Title"},{"attributes":{},"id":"34768","type":"LinearScale"},{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"34807","type":"Selection"},"selection_policy":{"id":"34808","type":"UnionRenderers"}},"id":"34795","type":"ColumnDataSource"},{"attributes":{},"id":"34780","type":"PanTool"},{"attributes":{},"id":"34803","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"34803","type":"BasicTickFormatter"},"plot":{"id":"34761","subtype":"Figure","type":"Plot"},"ticker":{"id":"34771","type":"BasicTicker"}},"id":"34770","type":"LinearAxis"},{"attributes":{},"id":"34807","type":"Selection"},{"attributes":{},"id":"34781","type":"WheelZoomTool"},{"attributes":{},"id":"34771","type":"BasicTicker"},{"attributes":{"overlay":{"id":"34788","type":"BoxAnnotation"}},"id":"34782","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"34761","subtype":"Figure","type":"Plot"},"ticker":{"id":"34771","type":"BasicTicker"}},"id":"34774","type":"Grid"},{"attributes":{},"id":"34783","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34797","type":"Triangle"},{"attributes":{"formatter":{"id":"34805","type":"BasicTickFormatter"},"plot":{"id":"34761","subtype":"Figure","type":"Plot"},"ticker":{"id":"34776","type":"BasicTicker"}},"id":"34775","type":"LinearAxis"},{"attributes":{},"id":"34784","type":"ResetTool"}],"root_ids":["34761"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"d38baf06-6223-4024-aed5-e50fb5da3556","roots":{"34761":"e2034983-a8f6-4f01-bb11-660f8c5dd1b3"}}];
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