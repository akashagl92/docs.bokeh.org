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
      };var element = document.getElementById("498ee835-a9ca-4948-9eef-238c81d14dfa");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '498ee835-a9ca-4948-9eef-238c81d14dfa' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5d2725c7-78d0-4696-869a-99762acab8e9":{"roots":{"references":[{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"21598","type":"AdaptiveTicker"},{"attributes":{"overlay":{"id":"21574","type":"BoxAnnotation"}},"id":"21569","type":"BoxZoomTool"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"21606","type":"MonthsTicker"},{"attributes":{},"id":"21612","type":"Selection"},{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"21557","type":"DatetimeAxis"}],"left":[{"id":"21562","type":"LinearAxis"}],"renderers":[{"id":"21557","type":"DatetimeAxis"},{"id":"21561","type":"Grid"},{"id":"21562","type":"LinearAxis"},{"id":"21566","type":"Grid"},{"id":"21574","type":"BoxAnnotation"},{"id":"21583","type":"GlyphRenderer"},{"id":"21588","type":"GlyphRenderer"},{"id":"21590","type":"BoxAnnotation"},{"id":"21591","type":"BoxAnnotation"}],"title":{"id":"21546","type":"Title"},"toolbar":{"id":"21572","type":"Toolbar"},"x_range":{"id":"21549","type":"DataRange1d"},"x_scale":{"id":"21553","type":"LinearScale"},"y_range":{"id":"21551","type":"DataRange1d"},"y_scale":{"id":"21555","type":"LinearScale"}},"id":"21547","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21613","type":"UnionRenderers"},{"attributes":{},"id":"21555","type":"LinearScale"},{"attributes":{"days":[1,8,15,22]},"id":"21603","type":"DaysTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"21547","subtype":"Figure","type":"Plot"},"ticker":{"id":"21558","type":"DatetimeTicker"}},"id":"21561","type":"Grid"},{"attributes":{"days":[1,15]},"id":"21604","type":"DaysTicker"},{"attributes":{"axis_label":"Time","formatter":{"id":"21595","type":"DatetimeTickFormatter"},"plot":{"id":"21547","subtype":"Figure","type":"Plot"},"ticker":{"id":"21558","type":"DatetimeTicker"}},"id":"21557","type":"DatetimeAxis"},{"attributes":{"data_source":{"id":"21585","type":"ColumnDataSource"},"glyph":{"id":"21586","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21587","type":"Circle"},"selection_glyph":null,"view":{"id":"21589","type":"CDSView"}},"id":"21588","type":"GlyphRenderer"},{"attributes":{},"id":"21595","type":"DatetimeTickFormatter"},{"attributes":{"months":[0,6]},"id":"21608","type":"MonthsTicker"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[288]},"y":[63,61,61,60,60,61,63,64,64,64,63,64,65,66,67,67,66,66,67,68,69,71,73,72,71,70,71,72,74,75,76,78,79,80,81,82,84,86,88,88,87,86,85,86,86,86,86,87,87,88,88,88,89,87,83,79,78,82,85,87,88,89,89,89,87,86,88,89,90,89,90,92,91,90,89,88,87,87,89,90,91,92,94,108,110,110,111,111,111,112,113,114,116,116,116,117,119,121,124,127,131,138,145,150,155,161,165,169,173,177,182,185,185,184,189,193,195,198,198,197,196,196,199,202,202,201,202,204,205,205,203,202,201,197,197,198,199,200,199,195,190,184,180,178,179,180,179,176,175,174,172,169,168,167,170,180,191,203,214,219,219,222,227,228,226,223,221,219,219,218,218,219,218,216,214,214,211,208,207,206,206,205,202,199,193,190,187,182,179,176,173,170,167,163,158,152,146,141,135,129,122,114,108,102,97,90,85,81,77,73,68,65,62,61,61,61,61,61,60,59,59,60,61,64,69,75,82,92,104,117,128,137,144,149,153,156,160,164,169,175,180,184,188,191,193,195,196,200,203,207,212,218,223,228,231,234,235,236,327,327,330,333,328,321,316,308,298,287,274,263,255,249,243,239,234,230,225,220,215,210,206,204,204,199,195,190,185,181]},"selected":{"id":"21612","type":"Selection"},"selection_policy":{"id":"21613","type":"UnionRenderers"}},"id":"21585","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"21587","type":"Circle"},{"attributes":{"callback":null},"id":"21549","type":"DataRange1d"},{"attributes":{},"id":"21568","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"21574","type":"BoxAnnotation"},{"attributes":{"source":{"id":"21585","type":"ColumnDataSource"}},"id":"21589","type":"CDSView"},{"attributes":{},"id":"21609","type":"YearsTicker"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"21599","type":"AdaptiveTicker"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"21602","type":"DaysTicker"},{"attributes":{"data_source":{"id":"21580","type":"ColumnDataSource"},"glyph":{"id":"21581","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21582","type":"Line"},"selection_glyph":null,"view":{"id":"21584","type":"CDSView"}},"id":"21583","type":"GlyphRenderer"},{"attributes":{},"id":"21563","type":"BasicTicker"},{"attributes":{"axis_label":"Value","formatter":{"id":"21593","type":"BasicTickFormatter"},"plot":{"id":"21547","subtype":"Figure","type":"Plot"},"ticker":{"id":"21563","type":"BasicTicker"}},"id":"21562","type":"LinearAxis"},{"attributes":{},"id":"21593","type":"BasicTickFormatter"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"21598","type":"AdaptiveTicker"},{"id":"21599","type":"AdaptiveTicker"},{"id":"21600","type":"AdaptiveTicker"},{"id":"21601","type":"DaysTicker"},{"id":"21602","type":"DaysTicker"},{"id":"21603","type":"DaysTicker"},{"id":"21604","type":"DaysTicker"},{"id":"21605","type":"MonthsTicker"},{"id":"21606","type":"MonthsTicker"},{"id":"21607","type":"MonthsTicker"},{"id":"21608","type":"MonthsTicker"},{"id":"21609","type":"YearsTicker"}]},"id":"21558","type":"DatetimeTicker"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"21605","type":"MonthsTicker"},{"attributes":{"months":[0,4,8]},"id":"21607","type":"MonthsTicker"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"21601","type":"DaysTicker"},{"attributes":{},"id":"21610","type":"Selection"},{"attributes":{},"id":"21611","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"21567","type":"PanTool"},{"id":"21568","type":"WheelZoomTool"},{"id":"21569","type":"BoxZoomTool"},{"id":"21570","type":"ResetTool"},{"id":"21571","type":"SaveTool"}]},"id":"21572","type":"Toolbar"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"21586","type":"Circle"},{"attributes":{"callback":null},"id":"21551","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"21547","subtype":"Figure","type":"Plot"},"ticker":{"id":"21563","type":"BasicTicker"}},"id":"21566","type":"Grid"},{"attributes":{"line_color":"grey","x":{"field":"x"},"y":{"field":"y"}},"id":"21581","type":"Line"},{"attributes":{},"id":"21571","type":"SaveTool"},{"attributes":{},"id":"21553","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"red"},"line_color":{"value":"red"},"plot":{"id":"21547","subtype":"Figure","type":"Plot"},"top":80},"id":"21590","type":"BoxAnnotation"},{"attributes":{},"id":"21570","type":"ResetTool"},{"attributes":{},"id":"21567","type":"PanTool"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"21600","type":"AdaptiveTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"21582","type":"Line"},{"attributes":{"source":{"id":"21580","type":"ColumnDataSource"}},"id":"21584","type":"CDSView"},{"attributes":{"bottom":180,"fill_alpha":{"value":0.1},"fill_color":{"value":"red"},"line_color":{"value":"red"},"plot":{"id":"21547","subtype":"Figure","type":"Plot"}},"id":"21591","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[288]},"y":[63,61,61,60,60,61,63,64,64,64,63,64,65,66,67,67,66,66,67,68,69,71,73,72,71,70,71,72,74,75,76,78,79,80,81,82,84,86,88,88,87,86,85,86,86,86,86,87,87,88,88,88,89,87,83,79,78,82,85,87,88,89,89,89,87,86,88,89,90,89,90,92,91,90,89,88,87,87,89,90,91,92,94,108,110,110,111,111,111,112,113,114,116,116,116,117,119,121,124,127,131,138,145,150,155,161,165,169,173,177,182,185,185,184,189,193,195,198,198,197,196,196,199,202,202,201,202,204,205,205,203,202,201,197,197,198,199,200,199,195,190,184,180,178,179,180,179,176,175,174,172,169,168,167,170,180,191,203,214,219,219,222,227,228,226,223,221,219,219,218,218,219,218,216,214,214,211,208,207,206,206,205,202,199,193,190,187,182,179,176,173,170,167,163,158,152,146,141,135,129,122,114,108,102,97,90,85,81,77,73,68,65,62,61,61,61,61,61,60,59,59,60,61,64,69,75,82,92,104,117,128,137,144,149,153,156,160,164,169,175,180,184,188,191,193,195,196,200,203,207,212,218,223,228,231,234,235,236,327,327,330,333,328,321,316,308,298,287,274,263,255,249,243,239,234,230,225,220,215,210,206,204,204,199,195,190,185,181]},"selected":{"id":"21610","type":"Selection"},"selection_policy":{"id":"21611","type":"UnionRenderers"}},"id":"21580","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Glocose Readings, Oct 4th (Red = Outside Range)"},"id":"21546","type":"Title"}],"root_ids":["21547"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"5d2725c7-78d0-4696-869a-99762acab8e9","roots":{"21547":"498ee835-a9ca-4948-9eef-238c81d14dfa"}}];
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