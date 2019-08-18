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
      };var element = document.getElementById("e3e3dfcb-ea7d-4d30-a83c-b069da060eb2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e3e3dfcb-ea7d-4d30-a83c-b069da060eb2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"17608eab-d421-4f56-aff0-55cf36f71507":{"roots":{"references":[{"attributes":{},"id":"12798","type":"PanTool"},{"attributes":{"overlay":{"id":"12806","type":"BoxAnnotation"}},"id":"12800","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"12820","type":"BasicTickFormatter"},"plot":{"id":"12778","subtype":"Figure","type":"Plot"},"ticker":{"id":"12789","type":"BasicTicker"}},"id":"12788","type":"LinearAxis"},{"attributes":{"below":[{"id":"12788","type":"LinearAxis"}],"left":[{"id":"12793","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"12788","type":"LinearAxis"},{"id":"12792","type":"Grid"},{"id":"12793","type":"LinearAxis"},{"id":"12797","type":"Grid"},{"id":"12806","type":"BoxAnnotation"},{"id":"12816","type":"GlyphRenderer"}],"title":{"id":"12777","type":"Title"},"toolbar":{"id":"12804","type":"Toolbar"},"x_range":{"id":"12780","type":"DataRange1d"},"x_scale":{"id":"12784","type":"LinearScale"},"y_range":{"id":"12782","type":"DataRange1d"},"y_scale":{"id":"12786","type":"LinearScale"}},"id":"12778","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"12813","type":"ColumnDataSource"},"glyph":{"id":"12814","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12815","type":"Circle"},"selection_glyph":null,"view":{"id":"12817","type":"CDSView"}},"id":"12816","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"12822","type":"BasicTickFormatter"},"plot":{"id":"12778","subtype":"Figure","type":"Plot"},"ticker":{"id":"12794","type":"BasicTicker"}},"id":"12793","type":"LinearAxis"},{"attributes":{"callback":null},"id":"12780","type":"DataRange1d"},{"attributes":{"callback":null},"id":"12782","type":"DataRange1d"},{"attributes":{},"id":"12786","type":"LinearScale"},{"attributes":{},"id":"12822","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"12813","type":"ColumnDataSource"}},"id":"12817","type":"CDSView"},{"attributes":{"plot":{"id":"12778","subtype":"Figure","type":"Plot"},"ticker":{"id":"12789","type":"BasicTicker"}},"id":"12792","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12806","type":"BoxAnnotation"},{"attributes":{},"id":"12802","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12798","type":"PanTool"},{"id":"12799","type":"WheelZoomTool"},{"id":"12800","type":"BoxZoomTool"},{"id":"12801","type":"SaveTool"},{"id":"12802","type":"ResetTool"},{"id":"12803","type":"HelpTool"}]},"id":"12804","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"12814","type":"Circle"},{"attributes":{},"id":"12799","type":"WheelZoomTool"},{"attributes":{},"id":"12803","type":"HelpTool"},{"attributes":{},"id":"12825","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"12778","subtype":"Figure","type":"Plot"},"ticker":{"id":"12794","type":"BasicTicker"}},"id":"12797","type":"Grid"},{"attributes":{},"id":"12824","type":"UnionRenderers"},{"attributes":{},"id":"12801","type":"SaveTool"},{"attributes":{},"id":"12784","type":"LinearScale"},{"attributes":{},"id":"12789","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Basic Title"},"id":"12777","type":"Title"},{"attributes":{},"id":"12794","type":"BasicTicker"},{"attributes":{},"id":"12820","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"12815","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"12825","type":"Selection"},"selection_policy":{"id":"12824","type":"UnionRenderers"}},"id":"12813","type":"ColumnDataSource"}],"root_ids":["12778"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"17608eab-d421-4f56-aff0-55cf36f71507","roots":{"12778":"e3e3dfcb-ea7d-4d30-a83c-b069da060eb2"}}];
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