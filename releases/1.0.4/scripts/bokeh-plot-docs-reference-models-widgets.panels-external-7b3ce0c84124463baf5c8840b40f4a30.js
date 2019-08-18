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
      };var element = document.getElementById("9b8a3b80-b495-4581-aa11-6b79eba295b5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9b8a3b80-b495-4581-aa11-6b79eba295b5' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a9cacd43-6cd9-4488-8c13-916ba7e60053":{"roots":{"references":[{"attributes":{},"id":"32107","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"32123","type":"Line"},{"attributes":{"source":{"id":"32081","type":"ColumnDataSource"}},"id":"32085","type":"CDSView"},{"attributes":{},"id":"32067","type":"WheelZoomTool"},{"attributes":{},"id":"32138","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"32056","type":"LinearAxis"}],"left":[{"id":"32061","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32056","type":"LinearAxis"},{"id":"32060","type":"Grid"},{"id":"32061","type":"LinearAxis"},{"id":"32065","type":"Grid"},{"id":"32074","type":"BoxAnnotation"},{"id":"32084","type":"GlyphRenderer"}],"title":{"id":"32128","type":"Title"},"toolbar":{"id":"32072","type":"Toolbar"},"x_range":{"id":"32048","type":"DataRange1d"},"x_scale":{"id":"32052","type":"LinearScale"},"y_range":{"id":"32050","type":"DataRange1d"},"y_scale":{"id":"32054","type":"LinearScale"}},"id":"32047","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32057","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32106","type":"PanTool"},{"id":"32107","type":"WheelZoomTool"},{"id":"32108","type":"BoxZoomTool"},{"id":"32109","type":"SaveTool"},{"id":"32110","type":"ResetTool"},{"id":"32111","type":"HelpTool"}]},"id":"32112","type":"Toolbar"},{"attributes":{"formatter":{"id":"32134","type":"BasicTickFormatter"},"plot":{"id":"32047","subtype":"Figure","type":"Plot"},"ticker":{"id":"32057","type":"BasicTicker"}},"id":"32056","type":"LinearAxis"},{"attributes":{"plot":{"id":"32087","subtype":"Figure","type":"Plot"},"ticker":{"id":"32097","type":"BasicTicker"}},"id":"32100","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32074","type":"BoxAnnotation"},{"attributes":{"callback":null,"tabs":[{"id":"32086","type":"Panel"},{"id":"32126","type":"Panel"}]},"id":"32127","type":"Tabs"},{"attributes":{},"id":"32132","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"32048","type":"DataRange1d"},{"attributes":{},"id":"32134","type":"BasicTickFormatter"},{"attributes":{},"id":"32109","type":"SaveTool"},{"attributes":{"formatter":{"id":"32132","type":"BasicTickFormatter"},"plot":{"id":"32047","subtype":"Figure","type":"Plot"},"ticker":{"id":"32062","type":"BasicTicker"}},"id":"32061","type":"LinearAxis"},{"attributes":{},"id":"32071","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32066","type":"PanTool"},{"id":"32067","type":"WheelZoomTool"},{"id":"32068","type":"BoxZoomTool"},{"id":"32069","type":"SaveTool"},{"id":"32070","type":"ResetTool"},{"id":"32071","type":"HelpTool"}]},"id":"32072","type":"Toolbar"},{"attributes":{},"id":"32102","type":"BasicTicker"},{"attributes":{},"id":"32136","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"32138","type":"BasicTickFormatter"},"plot":{"id":"32087","subtype":"Figure","type":"Plot"},"ticker":{"id":"32097","type":"BasicTicker"}},"id":"32096","type":"LinearAxis"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"32122","type":"Line"},{"attributes":{},"id":"32094","type":"LinearScale"},{"attributes":{"overlay":{"id":"32074","type":"BoxAnnotation"}},"id":"32068","type":"BoxZoomTool"},{"attributes":{"child":{"id":"32087","subtype":"Figure","type":"Plot"},"title":"line"},"id":"32126","type":"Panel"},{"attributes":{},"id":"32062","type":"BasicTicker"},{"attributes":{},"id":"32069","type":"SaveTool"},{"attributes":{},"id":"32141","type":"Selection"},{"attributes":{"data_source":{"id":"32081","type":"ColumnDataSource"},"glyph":{"id":"32082","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32083","type":"Circle"},"selection_glyph":null,"view":{"id":"32085","type":"CDSView"}},"id":"32084","type":"GlyphRenderer"},{"attributes":{},"id":"32110","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"32130","type":"Title"},{"attributes":{},"id":"32144","type":"Selection"},{"attributes":{},"id":"32070","type":"ResetTool"},{"attributes":{"data_source":{"id":"32121","type":"ColumnDataSource"},"glyph":{"id":"32122","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32123","type":"Line"},"selection_glyph":null,"view":{"id":"32125","type":"CDSView"}},"id":"32124","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"32088","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"32128","type":"Title"},{"attributes":{},"id":"32106","type":"PanTool"},{"attributes":{"callback":null},"id":"32090","type":"DataRange1d"},{"attributes":{"overlay":{"id":"32114","type":"BoxAnnotation"}},"id":"32108","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"32136","type":"BasicTickFormatter"},"plot":{"id":"32087","subtype":"Figure","type":"Plot"},"ticker":{"id":"32102","type":"BasicTicker"}},"id":"32101","type":"LinearAxis"},{"attributes":{"child":{"id":"32047","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"32086","type":"Panel"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"32141","type":"Selection"},"selection_policy":{"id":"32140","type":"UnionRenderers"}},"id":"32081","type":"ColumnDataSource"},{"attributes":{},"id":"32140","type":"UnionRenderers"},{"attributes":{},"id":"32143","type":"UnionRenderers"},{"attributes":{},"id":"32092","type":"LinearScale"},{"attributes":{},"id":"32054","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32082","type":"Circle"},{"attributes":{"below":[{"id":"32096","type":"LinearAxis"}],"left":[{"id":"32101","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32096","type":"LinearAxis"},{"id":"32100","type":"Grid"},{"id":"32101","type":"LinearAxis"},{"id":"32105","type":"Grid"},{"id":"32114","type":"BoxAnnotation"},{"id":"32124","type":"GlyphRenderer"}],"title":{"id":"32130","type":"Title"},"toolbar":{"id":"32112","type":"Toolbar"},"x_range":{"id":"32088","type":"DataRange1d"},"x_scale":{"id":"32092","type":"LinearScale"},"y_range":{"id":"32090","type":"DataRange1d"},"y_scale":{"id":"32094","type":"LinearScale"}},"id":"32087","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"32121","type":"ColumnDataSource"}},"id":"32125","type":"CDSView"},{"attributes":{"callback":null},"id":"32050","type":"DataRange1d"},{"attributes":{},"id":"32052","type":"LinearScale"},{"attributes":{},"id":"32111","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"32144","type":"Selection"},"selection_policy":{"id":"32143","type":"UnionRenderers"}},"id":"32121","type":"ColumnDataSource"},{"attributes":{},"id":"32066","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"32047","subtype":"Figure","type":"Plot"},"ticker":{"id":"32062","type":"BasicTicker"}},"id":"32065","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"32087","subtype":"Figure","type":"Plot"},"ticker":{"id":"32102","type":"BasicTicker"}},"id":"32105","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32114","type":"BoxAnnotation"},{"attributes":{},"id":"32097","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32083","type":"Circle"},{"attributes":{"plot":{"id":"32047","subtype":"Figure","type":"Plot"},"ticker":{"id":"32057","type":"BasicTicker"}},"id":"32060","type":"Grid"}],"root_ids":["32127"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"a9cacd43-6cd9-4488-8c13-916ba7e60053","roots":{"32127":"9b8a3b80-b495-4581-aa11-6b79eba295b5"}}];
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