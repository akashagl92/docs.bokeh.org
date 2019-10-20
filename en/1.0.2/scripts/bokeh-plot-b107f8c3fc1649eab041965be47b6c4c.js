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
      };var element = document.getElementById("dc6b5c4c-1b74-43d0-bd51-3f411122b2e8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dc6b5c4c-1b74-43d0-bd51-3f411122b2e8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a390f986-bbf0-41b4-befb-e06ee0b03f17":{"roots":{"references":[{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"21544","subtype":"Figure","type":"Plot"},"ticker":{"id":"21555","type":"DatetimeTicker"}},"id":"21558","type":"Grid"},{"attributes":{},"id":"21591","type":"DatetimeTickFormatter"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"21596","type":"AdaptiveTicker"},{"attributes":{"months":[0,6]},"id":"21605","type":"MonthsTicker"},{"attributes":{"plot":null,"text":"Glocose Readings, Oct 4th (Red = Outside Range)"},"id":"21543","type":"Title"},{"attributes":{"source":{"id":"21577","type":"ColumnDataSource"}},"id":"21581","type":"CDSView"},{"attributes":{"axis_label":"Value","formatter":{"id":"21593","type":"BasicTickFormatter"},"plot":{"id":"21544","subtype":"Figure","type":"Plot"},"ticker":{"id":"21560","type":"BasicTicker"}},"id":"21559","type":"LinearAxis"},{"attributes":{},"id":"21568","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAByxki3ckIAALAPSbdyQgAA7lhJt3JCAAAsokm3ckIAAGrrSbdyQgAAqDRKt3JCAADmfUq3ckIAACTHSrdyQgAAYhBLt3JCAACgWUu3ckIAAN6iS7dyQgAAHOxLt3JCAABaNUy3ckIAAJh+TLdyQgAA1sdMt3JCAAAUEU23ckIAAFJaTbdyQgAAkKNNt3JCAADO7E23ckIAAAw2TrdyQgAASn9Ot3JCAACIyE63ckIAAMYRT7dyQgAABFtPt3JCAABCpE+3ckIAAIDtT7dyQgAAvjZQt3JCAAD8f1C3ckIAADrJULdyQgAAeBJRt3JCAAC2W1G3ckIAAPSkUbdyQgAAMu5Rt3JCAABwN1K3ckIAAK6AUrdyQgAA7MlSt3JCAAAqE1O3ckIAAGhcU7dyQgAApqVTt3JCAADk7lO3ckIAACI4VLdyQgAAYIFUt3JCAACeylS3ckIAANwTVbdyQgAAGl1Vt3JCAABYplW3ckIAAJbvVbdyQgAA1DhWt3JCAAASgla3ckIAAFDLVrdyQgAAjhRXt3JCAADMXVe3ckIAAAqnV7dyQgAASPBXt3JCAACGOVi3ckIAAMSCWLdyQgAAAsxYt3JCAABAFVm3ckIAAH5eWbdyQgAAvKdZt3JCAAD68Fm3ckIAADg6WrdyQgAAdoNat3JCAAC0zFq3ckIAAPIVW7dyQgAAMF9bt3JCAABuqFu3ckIAAKzxW7dyQgAA6jpct3JCAAAohFy3ckIAAGbNXLdyQgAApBZdt3JCAADiX123ckIAACCpXbdyQgAAXvJdt3JCAACcO163ckIAANqEXrdyQgAAGM5et3JCAABWF1+3ckIAAJRgX7dyQgAA0qlft3JCAAAQ81+3ckIAAE48YLdyQgAAjIVgt3JCAADKzmC3ckIAAAgYYbdyQgAARmFht3JCAACEqmG3ckIAAMLzYbdyQgAAAD1it3JCAAA+hmK3ckIAAHzPYrdyQgAAuhhjt3JCAAD4YWO3ckIAADarY7dyQgAAdPRjt3JCAACyPWS3ckIAAPCGZLdyQgAALtBkt3JCAABsGWW3ckIAAKpiZbdyQgAA6Ktlt3JCAAAm9WW3ckIAAGQ+ZrdyQgAAoodmt3JCAADg0Ga3ckIAAB4aZ7dyQgAAXGNnt3JCAACarGe3ckIAANj1Z7dyQgAAFj9ot3JCAABUiGi3ckIAAJLRaLdyQgAA0Bppt3JCAAAOZGm3ckIAAEytabdyQgAAivZpt3JCAADIP2q3ckIAAAaJardyQgAARNJqt3JCAACCG2u3ckIAAMBka7dyQgAA/q1rt3JCAAA892u3ckIAAHpAbLdyQgAAuIlst3JCAAD20my3ckIAADQcbbdyQgAAcmVtt3JCAACwrm23ckIAAO73bbdyQgAALEFut3JCAABqim63ckIAAKjTbrdyQgAA5hxvt3JCAAAkZm+3ckIAAGKvb7dyQgAAoPhvt3JCAADeQXC3ckIAAByLcLdyQgAAWtRwt3JCAACYHXG3ckIAANZmcbdyQgAAFLBxt3JCAABS+XG3ckIAAJBCcrdyQgAAzotyt3JCAAAM1XK3ckIAAEoec7dyQgAAiGdzt3JCAADGsHO3ckIAAAT6c7dyQgAAQkN0t3JCAACAjHS3ckIAAL7VdLdyQgAA/B51t3JCAAA6aHW3ckIAAHixdbdyQgAAtvp1t3JCAAD0Q3a3ckIAADKNdrdyQgAAcNZ2t3JCAACuH3e3ckIAAOxod7dyQgAAKrJ3t3JCAABo+3e3ckIAAKZEeLdyQgAA5I14t3JCAAAi13i3ckIAAGAgebdyQgAAnml5t3JCAADcsnm3ckIAABr8ebdyQgAAWEV6t3JCAACWjnq3ckIAANTXerdyQgAAEiF7t3JCAABQanu3ckIAAI6ze7dyQgAAzPx7t3JCAAAKRny3ckIAAEiPfLdyQgAAhth8t3JCAADEIX23ckIAAAJrfbdyQgAAQLR9t3JCAAB+/X23ckIAALxGfrdyQgAA+o9+t3JCAAA42X63ckIAAHYif7dyQgAAtGt/t3JCAADytH+3ckIAADD+f7dyQgAAbkeAt3JCAACskIC3ckIAAOrZgLdyQgAAKCOBt3JCAABmbIG3ckIAAKS1gbdyQgAA4v6Bt3JCAAAgSIK3ckIAAF6RgrdyQgAAnNqCt3JCAADaI4O3ckIAABhtg7dyQgAAVraDt3JCAACU/4O3ckIAANJIhLdyQgAAEJKEt3JCAABO24S3ckIAAIwkhbdyQgAAym2Ft3JCAAAIt4W3ckIAAEYAhrdyQgAAhEmGt3JCAADCkoa3ckIAAADchrdyQgAAPiWHt3JCAAB8boe3ckIAALq3h7dyQgAA+ACIt3JCAAA2Soi3ckIAAHSTiLdyQgAAstyIt3JCAADwJYm3ckIAAC5vibdyQgAAbLiJt3JCAACqAYq3ckIAAOhKirdyQgAAJpSKt3JCAABk3Yq3ckIAAKImi7dyQgAA4G+Lt3JCAAAeuYu3ckIAAFwCjLdyQgAAmkuMt3JCAADYlIy3ckIAABbejLdyQgAAVCeNt3JCAACScI23ckIAANC5jbdyQgAADgOOt3JCAABMTI63ckIAAIqVjrdyQgAAyN6Ot3JCAAAGKI+3ckIAAERxj7dyQgAAgrqPt3JCAADAA5C3ckIAAP5MkLdyQgAAPJaQt3JCAAB635C3ckIAALgokbdyQgAA9nGRt3JCAAA0u5G3ckIAAHIEkrdyQgAAsE2St3JCAADulpK3ckIAACzgkrdyQgAAaimTt3JCAACocpO3ckIAAOa7k7dyQgAAJAWUt3JCAABiTpS3ckIAAKCXlLdyQgAA3uCUt3JCAAAcKpW3ckIAAFpzlbdyQgAAmLyVt3JCAADWBZa3ckIAABRPlrdyQgAAUpiWt3JCAACQ4Za3ckIAAM4ql7dyQgAADHSXt3JCAABKvZe3ckIAAIgGmLdyQgAAxk+Yt3JCAAAEmZi3ckIAAELimLdyQgAAgCuZt3JCAAC+dJm3ckIAAPy9mbdyQgAAOgeat3JCAAB4UJq3ckIAALaZmrdyQgAA9OKat3JC","dtype":"float64","shape":[288]},"y":[63,61,61,60,60,61,63,64,64,64,63,64,65,66,67,67,66,66,67,68,69,71,73,72,71,70,71,72,74,75,76,78,79,80,81,82,84,86,88,88,87,86,85,86,86,86,86,87,87,88,88,88,89,87,83,79,78,82,85,87,88,89,89,89,87,86,88,89,90,89,90,92,91,90,89,88,87,87,89,90,91,92,94,108,110,110,111,111,111,112,113,114,116,116,116,117,119,121,124,127,131,138,145,150,155,161,165,169,173,177,182,185,185,184,189,193,195,198,198,197,196,196,199,202,202,201,202,204,205,205,203,202,201,197,197,198,199,200,199,195,190,184,180,178,179,180,179,176,175,174,172,169,168,167,170,180,191,203,214,219,219,222,227,228,226,223,221,219,219,218,218,219,218,216,214,214,211,208,207,206,206,205,202,199,193,190,187,182,179,176,173,170,167,163,158,152,146,141,135,129,122,114,108,102,97,90,85,81,77,73,68,65,62,61,61,61,61,61,60,59,59,60,61,64,69,75,82,92,104,117,128,137,144,149,153,156,160,164,169,175,180,184,188,191,193,195,196,200,203,207,212,218,223,228,231,234,235,236,327,327,330,333,328,321,316,308,298,287,274,263,255,249,243,239,234,230,225,220,215,210,206,204,204,199,195,190,185,181]},"selected":{"id":"21610","type":"Selection"},"selection_policy":{"id":"21609","type":"UnionRenderers"}},"id":"21582","type":"ColumnDataSource"},{"attributes":{},"id":"21593","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"21583","type":"Circle"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"21598","type":"DaysTicker"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"21599","type":"DaysTicker"},{"attributes":{},"id":"21607","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"21544","subtype":"Figure","type":"Plot"},"ticker":{"id":"21560","type":"BasicTicker"}},"id":"21563","type":"Grid"},{"attributes":{"data_source":{"id":"21582","type":"ColumnDataSource"},"glyph":{"id":"21583","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21584","type":"Circle"},"selection_glyph":null,"view":{"id":"21586","type":"CDSView"}},"id":"21585","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"21571","type":"BoxAnnotation"}},"id":"21566","type":"BoxZoomTool"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"21597","type":"AdaptiveTicker"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"21595","type":"AdaptiveTicker"},{"id":"21596","type":"AdaptiveTicker"},{"id":"21597","type":"AdaptiveTicker"},{"id":"21598","type":"DaysTicker"},{"id":"21599","type":"DaysTicker"},{"id":"21600","type":"DaysTicker"},{"id":"21601","type":"DaysTicker"},{"id":"21602","type":"MonthsTicker"},{"id":"21603","type":"MonthsTicker"},{"id":"21604","type":"MonthsTicker"},{"id":"21605","type":"MonthsTicker"},{"id":"21606","type":"YearsTicker"}]},"id":"21555","type":"DatetimeTicker"},{"attributes":{},"id":"21606","type":"YearsTicker"},{"attributes":{},"id":"21552","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"21584","type":"Circle"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"21602","type":"MonthsTicker"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"21603","type":"MonthsTicker"},{"attributes":{"data_source":{"id":"21577","type":"ColumnDataSource"},"glyph":{"id":"21578","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21579","type":"Line"},"selection_glyph":null,"view":{"id":"21581","type":"CDSView"}},"id":"21580","type":"GlyphRenderer"},{"attributes":{"days":[1,8,15,22]},"id":"21600","type":"DaysTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"21564","type":"PanTool"},{"id":"21565","type":"WheelZoomTool"},{"id":"21566","type":"BoxZoomTool"},{"id":"21567","type":"ResetTool"},{"id":"21568","type":"SaveTool"}]},"id":"21569","type":"Toolbar"},{"attributes":{"axis_label":"Time","formatter":{"id":"21591","type":"DatetimeTickFormatter"},"plot":{"id":"21544","subtype":"Figure","type":"Plot"},"ticker":{"id":"21555","type":"DatetimeTicker"}},"id":"21554","type":"DatetimeAxis"},{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"21554","type":"DatetimeAxis"}],"left":[{"id":"21559","type":"LinearAxis"}],"renderers":[{"id":"21554","type":"DatetimeAxis"},{"id":"21558","type":"Grid"},{"id":"21559","type":"LinearAxis"},{"id":"21563","type":"Grid"},{"id":"21571","type":"BoxAnnotation"},{"id":"21580","type":"GlyphRenderer"},{"id":"21585","type":"GlyphRenderer"},{"id":"21587","type":"BoxAnnotation"},{"id":"21588","type":"BoxAnnotation"}],"title":{"id":"21543","type":"Title"},"toolbar":{"id":"21569","type":"Toolbar"},"x_range":{"id":"21546","type":"DataRange1d"},"x_scale":{"id":"21550","type":"LinearScale"},"y_range":{"id":"21548","type":"DataRange1d"},"y_scale":{"id":"21552","type":"LinearScale"}},"id":"21544","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"red"},"line_color":{"value":"red"},"plot":{"id":"21544","subtype":"Figure","type":"Plot"},"top":80},"id":"21587","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[288]},"y":[63,61,61,60,60,61,63,64,64,64,63,64,65,66,67,67,66,66,67,68,69,71,73,72,71,70,71,72,74,75,76,78,79,80,81,82,84,86,88,88,87,86,85,86,86,86,86,87,87,88,88,88,89,87,83,79,78,82,85,87,88,89,89,89,87,86,88,89,90,89,90,92,91,90,89,88,87,87,89,90,91,92,94,108,110,110,111,111,111,112,113,114,116,116,116,117,119,121,124,127,131,138,145,150,155,161,165,169,173,177,182,185,185,184,189,193,195,198,198,197,196,196,199,202,202,201,202,204,205,205,203,202,201,197,197,198,199,200,199,195,190,184,180,178,179,180,179,176,175,174,172,169,168,167,170,180,191,203,214,219,219,222,227,228,226,223,221,219,219,218,218,219,218,216,214,214,211,208,207,206,206,205,202,199,193,190,187,182,179,176,173,170,167,163,158,152,146,141,135,129,122,114,108,102,97,90,85,81,77,73,68,65,62,61,61,61,61,61,60,59,59,60,61,64,69,75,82,92,104,117,128,137,144,149,153,156,160,164,169,175,180,184,188,191,193,195,196,200,203,207,212,218,223,228,231,234,235,236,327,327,330,333,328,321,316,308,298,287,274,263,255,249,243,239,234,230,225,220,215,210,206,204,204,199,195,190,185,181]},"selected":{"id":"21608","type":"Selection"},"selection_policy":{"id":"21607","type":"UnionRenderers"}},"id":"21577","type":"ColumnDataSource"},{"attributes":{},"id":"21560","type":"BasicTicker"},{"attributes":{},"id":"21565","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"21571","type":"BoxAnnotation"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"21595","type":"AdaptiveTicker"},{"attributes":{},"id":"21608","type":"Selection"},{"attributes":{"line_color":"grey","x":{"field":"x"},"y":{"field":"y"}},"id":"21578","type":"Line"},{"attributes":{"days":[1,15]},"id":"21601","type":"DaysTicker"},{"attributes":{"bottom":180,"fill_alpha":{"value":0.1},"fill_color":{"value":"red"},"line_color":{"value":"red"},"plot":{"id":"21544","subtype":"Figure","type":"Plot"}},"id":"21588","type":"BoxAnnotation"},{"attributes":{},"id":"21609","type":"UnionRenderers"},{"attributes":{},"id":"21564","type":"PanTool"},{"attributes":{},"id":"21610","type":"Selection"},{"attributes":{},"id":"21567","type":"ResetTool"},{"attributes":{"source":{"id":"21582","type":"ColumnDataSource"}},"id":"21586","type":"CDSView"},{"attributes":{},"id":"21550","type":"LinearScale"},{"attributes":{"months":[0,4,8]},"id":"21604","type":"MonthsTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"21579","type":"Line"},{"attributes":{"callback":null},"id":"21546","type":"DataRange1d"},{"attributes":{"callback":null},"id":"21548","type":"DataRange1d"}],"root_ids":["21544"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"a390f986-bbf0-41b4-befb-e06ee0b03f17","roots":{"21544":"dc6b5c4c-1b74-43d0-bd51-3f411122b2e8"}}];
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