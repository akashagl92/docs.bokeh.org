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
      };var element = document.getElementById("c3766924-d3b5-447f-8f85-ae01078ec4d0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c3766924-d3b5-447f-8f85-ae01078ec4d0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"67f74dbe-3037-4bbe-81e8-af73238a52d0":{"roots":{"references":[{"attributes":{},"id":"17610","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"17589","subtype":"Figure","type":"Plot"},"ticker":{"id":"17605","type":"BasicTicker"}},"id":"17608","type":"Grid"},{"attributes":{"data_source":{"id":"17624","type":"ColumnDataSource"},"glyph":{"id":"17625","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17626","type":"Circle"},"selection_glyph":null,"view":{"id":"17628","type":"CDSView"}},"id":"17627","type":"GlyphRenderer"},{"attributes":{},"id":"17595","type":"LinearScale"},{"attributes":{},"id":"17600","type":"BasicTicker"},{"attributes":{},"id":"17605","type":"BasicTicker"},{"attributes":{"formatter":{"id":"17630","type":"BasicTickFormatter"},"plot":{"id":"17589","subtype":"Figure","type":"Plot"},"ticker":{"id":"17605","type":"BasicTicker"}},"id":"17604","type":"LinearAxis"},{"attributes":{"formatter":{"id":"17632","type":"BasicTickFormatter"},"plot":{"id":"17589","subtype":"Figure","type":"Plot"},"ticker":{"id":"17600","type":"BasicTicker"}},"id":"17599","type":"LinearAxis"},{"attributes":{},"id":"17614","type":"HelpTool"},{"attributes":{},"id":"17597","type":"LinearScale"},{"attributes":{},"id":"17609","type":"PanTool"},{"attributes":{"overlay":{"id":"17617","type":"BoxAnnotation"}},"id":"17611","type":"BoxZoomTool"},{"attributes":{},"id":"17630","type":"BasicTickFormatter"},{"attributes":{},"id":"17612","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17626","type":"Circle"},{"attributes":{"callback":null},"id":"17593","type":"DataRange1d"},{"attributes":{},"id":"17634","type":"UnionRenderers"},{"attributes":{},"id":"17632","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"17589","subtype":"Figure","type":"Plot"},"ticker":{"id":"17600","type":"BasicTicker"}},"id":"17603","type":"Grid"},{"attributes":{"below":[{"id":"17599","type":"LinearAxis"}],"left":[{"id":"17604","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"17599","type":"LinearAxis"},{"id":"17603","type":"Grid"},{"id":"17604","type":"LinearAxis"},{"id":"17608","type":"Grid"},{"id":"17617","type":"BoxAnnotation"},{"id":"17627","type":"GlyphRenderer"}],"title":{"id":"17588","type":"Title"},"toolbar":{"id":"17615","type":"Toolbar"},"x_range":{"id":"17591","type":"DataRange1d"},"x_scale":{"id":"17595","type":"LinearScale"},"y_range":{"id":"17593","type":"DataRange1d"},"y_scale":{"id":"17597","type":"LinearScale"}},"id":"17589","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17625","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"17635","type":"Selection"},"selection_policy":{"id":"17634","type":"UnionRenderers"}},"id":"17624","type":"ColumnDataSource"},{"attributes":{},"id":"17613","type":"ResetTool"},{"attributes":{},"id":"17635","type":"Selection"},{"attributes":{"plot":null,"text":"Some Title","text_color":{"value":"olive"},"text_font":"times","text_font_style":"italic"},"id":"17588","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17609","type":"PanTool"},{"id":"17610","type":"WheelZoomTool"},{"id":"17611","type":"BoxZoomTool"},{"id":"17612","type":"SaveTool"},{"id":"17613","type":"ResetTool"},{"id":"17614","type":"HelpTool"}]},"id":"17615","type":"Toolbar"},{"attributes":{"source":{"id":"17624","type":"ColumnDataSource"}},"id":"17628","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17617","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"17591","type":"DataRange1d"}],"root_ids":["17589"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"67f74dbe-3037-4bbe-81e8-af73238a52d0","roots":{"17589":"c3766924-d3b5-447f-8f85-ae01078ec4d0"}}];
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