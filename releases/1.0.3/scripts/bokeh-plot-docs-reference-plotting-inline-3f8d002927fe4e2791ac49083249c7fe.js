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
      };var element = document.getElementById("94100c2d-7e99-47ee-ab85-07152c4c903d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '94100c2d-7e99-47ee-ab85-07152c4c903d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b227c306-91f2-448f-8bb9-0e30ccfd5159":{"roots":{"references":[{"attributes":{},"id":"33344","type":"LinearScale"},{"attributes":{"plot":{"id":"33339","subtype":"Figure","type":"Plot"},"ticker":{"id":"33349","type":"BasicTicker"}},"id":"33352","type":"Grid"},{"attributes":{},"id":"33385","type":"Selection"},{"attributes":{},"id":"33346","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33366","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"q":[1,2,2],"r":[0,0,1]},"selected":{"id":"33385","type":"Selection"},"selection_policy":{"id":"33386","type":"UnionRenderers"}},"id":"33373","type":"ColumnDataSource"},{"attributes":{},"id":"33361","type":"SaveTool"},{"attributes":{},"id":"33363","type":"HelpTool"},{"attributes":{},"id":"33354","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"33378","type":"Title"},{"attributes":{},"id":"33358","type":"PanTool"},{"attributes":{"below":[{"id":"33348","type":"LinearAxis"}],"left":[{"id":"33353","type":"LinearAxis"}],"match_aspect":true,"plot_height":300,"plot_width":300,"renderers":[{"id":"33348","type":"LinearAxis"},{"id":"33352","type":"Grid"},{"id":"33353","type":"LinearAxis"},{"id":"33357","type":"Grid"},{"id":"33366","type":"BoxAnnotation"},{"id":"33376","type":"GlyphRenderer"}],"title":{"id":"33378","type":"Title"},"toolbar":{"id":"33364","type":"Toolbar"},"x_range":{"id":"33340","type":"DataRange1d"},"x_scale":{"id":"33344","type":"LinearScale"},"y_range":{"id":"33342","type":"DataRange1d"},"y_scale":{"id":"33346","type":"LinearScale"}},"id":"33339","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"33373","type":"ColumnDataSource"},"glyph":{"id":"33374","type":"HexTile"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33375","type":"HexTile"},"selection_glyph":null,"view":{"id":"33377","type":"CDSView"}},"id":"33376","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"33339","subtype":"Figure","type":"Plot"},"ticker":{"id":"33354","type":"BasicTicker"}},"id":"33357","type":"Grid"},{"attributes":{},"id":"33359","type":"WheelZoomTool"},{"attributes":{},"id":"33380","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"33382","type":"BasicTickFormatter"},"plot":{"id":"33339","subtype":"Figure","type":"Plot"},"ticker":{"id":"33349","type":"BasicTicker"}},"id":"33348","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33358","type":"PanTool"},{"id":"33359","type":"WheelZoomTool"},{"id":"33360","type":"BoxZoomTool"},{"id":"33361","type":"SaveTool"},{"id":"33362","type":"ResetTool"},{"id":"33363","type":"HelpTool"}]},"id":"33364","type":"Toolbar"},{"attributes":{},"id":"33386","type":"UnionRenderers"},{"attributes":{},"id":"33382","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"33366","type":"BoxAnnotation"}},"id":"33360","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"33342","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"}},"id":"33375","type":"HexTile"},{"attributes":{},"id":"33362","type":"ResetTool"},{"attributes":{"source":{"id":"33373","type":"ColumnDataSource"}},"id":"33377","type":"CDSView"},{"attributes":{},"id":"33349","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"}},"id":"33374","type":"HexTile"},{"attributes":{"formatter":{"id":"33380","type":"BasicTickFormatter"},"plot":{"id":"33339","subtype":"Figure","type":"Plot"},"ticker":{"id":"33354","type":"BasicTicker"}},"id":"33353","type":"LinearAxis"},{"attributes":{"callback":null},"id":"33340","type":"DataRange1d"}],"root_ids":["33339"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"b227c306-91f2-448f-8bb9-0e30ccfd5159","roots":{"33339":"94100c2d-7e99-47ee-ab85-07152c4c903d"}}];
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