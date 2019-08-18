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
      };var element = document.getElementById("ca497e99-ce92-4ba5-b379-c05e16097aa2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ca497e99-ce92-4ba5-b379-c05e16097aa2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c246337b-3535-4905-b869-34d870312088":{"roots":{"references":[{"attributes":{"below":[{"id":"35475","type":"LinearAxis"}],"left":[{"id":"35480","type":"LinearAxis"}],"renderers":[{"id":"35475","type":"LinearAxis"},{"id":"35479","type":"Grid"},{"id":"35480","type":"LinearAxis"},{"id":"35484","type":"Grid"},{"id":"35493","type":"BoxAnnotation"},{"id":"35511","type":"Legend"},{"id":"35503","type":"GlyphRenderer"}],"title":{"id":"35464","type":"Title"},"toolbar":{"id":"35491","type":"Toolbar"},"x_range":{"id":"35467","type":"DataRange1d"},"x_scale":{"id":"35471","type":"LinearScale"},"y_range":{"id":"35469","type":"DataRange1d"},"y_scale":{"id":"35473","type":"LinearScale"}},"id":"35465","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"35501","type":"Line"},{"attributes":{"plot":{"id":"35465","subtype":"Figure","type":"Plot"},"ticker":{"id":"35476","type":"BasicTicker"}},"id":"35479","type":"Grid"},{"attributes":{},"id":"35471","type":"LinearScale"},{"attributes":{},"id":"35489","type":"ResetTool"},{"attributes":{},"id":"35473","type":"LinearScale"},{"attributes":{"callback":null},"id":"35467","type":"DataRange1d"},{"attributes":{"data_source":{"id":"35500","type":"ColumnDataSource"},"glyph":{"id":"35501","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35502","type":"Line"},"selection_glyph":null,"view":{"id":"35504","type":"CDSView"}},"id":"35503","type":"GlyphRenderer"},{"attributes":{},"id":"35481","type":"BasicTicker"},{"attributes":{},"id":"35509","type":"BasicTickFormatter"},{"attributes":{},"id":"35507","type":"BasicTickFormatter"},{"attributes":{"items":[{"id":"35512","type":"LegendItem"}],"plot":{"id":"35465","subtype":"Figure","type":"Plot"}},"id":"35511","type":"Legend"},{"attributes":{},"id":"35476","type":"BasicTicker"},{"attributes":{"plot":null,"text":"simple line example"},"id":"35464","type":"Title"},{"attributes":{"axis_label":"y","formatter":{"id":"35509","type":"BasicTickFormatter"},"plot":{"id":"35465","subtype":"Figure","type":"Plot"},"ticker":{"id":"35481","type":"BasicTicker"}},"id":"35480","type":"LinearAxis"},{"attributes":{},"id":"35488","type":"SaveTool"},{"attributes":{},"id":"35485","type":"PanTool"},{"attributes":{"source":{"id":"35500","type":"ColumnDataSource"}},"id":"35504","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"35502","type":"Line"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"35519","type":"Selection"},"selection_policy":{"id":"35520","type":"UnionRenderers"}},"id":"35500","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Temp."},"renderers":[{"id":"35503","type":"GlyphRenderer"}]},"id":"35512","type":"LegendItem"},{"attributes":{"axis_label":"x","formatter":{"id":"35507","type":"BasicTickFormatter"},"plot":{"id":"35465","subtype":"Figure","type":"Plot"},"ticker":{"id":"35476","type":"BasicTicker"}},"id":"35475","type":"LinearAxis"},{"attributes":{},"id":"35486","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35493","type":"BoxAnnotation"},{"attributes":{},"id":"35520","type":"UnionRenderers"},{"attributes":{},"id":"35519","type":"Selection"},{"attributes":{"overlay":{"id":"35493","type":"BoxAnnotation"}},"id":"35487","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"35465","subtype":"Figure","type":"Plot"},"ticker":{"id":"35481","type":"BasicTicker"}},"id":"35484","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35485","type":"PanTool"},{"id":"35486","type":"WheelZoomTool"},{"id":"35487","type":"BoxZoomTool"},{"id":"35488","type":"SaveTool"},{"id":"35489","type":"ResetTool"},{"id":"35490","type":"HelpTool"}]},"id":"35491","type":"Toolbar"},{"attributes":{"callback":null},"id":"35469","type":"DataRange1d"},{"attributes":{},"id":"35490","type":"HelpTool"}],"root_ids":["35465"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"c246337b-3535-4905-b869-34d870312088","roots":{"35465":"ca497e99-ce92-4ba5-b379-c05e16097aa2"}}];
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