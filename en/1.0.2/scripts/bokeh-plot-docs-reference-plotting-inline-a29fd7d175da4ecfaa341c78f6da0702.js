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
      };var element = document.getElementById("71cd1ea4-0121-4335-9821-c1340eb38899");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '71cd1ea4-0121-4335-9821-c1340eb38899' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"240caa46-852b-4e89-9906-8f22ff3dc0a9":{"roots":{"references":[{"attributes":{},"id":"35063","type":"BasicTickFormatter"},{"attributes":{},"id":"35024","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35055","type":"X"},{"attributes":{},"id":"35066","type":"Selection"},{"attributes":{},"id":"35026","type":"LinearScale"},{"attributes":{},"id":"35038","type":"PanTool"},{"attributes":{"data_source":{"id":"35053","type":"ColumnDataSource"},"glyph":{"id":"35054","type":"X"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35055","type":"X"},"selection_glyph":null,"view":{"id":"35057","type":"CDSView"}},"id":"35056","type":"GlyphRenderer"},{"attributes":{},"id":"35029","type":"BasicTicker"},{"attributes":{},"id":"35039","type":"WheelZoomTool"},{"attributes":{"source":{"id":"35053","type":"ColumnDataSource"}},"id":"35057","type":"CDSView"},{"attributes":{"overlay":{"id":"35046","type":"BoxAnnotation"}},"id":"35040","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#fa9fb5"},"line_color":{"value":"#fa9fb5"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35054","type":"X"},{"attributes":{},"id":"35041","type":"SaveTool"},{"attributes":{"plot":{"id":"35019","subtype":"Figure","type":"Plot"},"ticker":{"id":"35029","type":"BasicTicker"}},"id":"35032","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35046","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"35059","type":"Title"},{"attributes":{"below":[{"id":"35028","type":"LinearAxis"}],"left":[{"id":"35033","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"35028","type":"LinearAxis"},{"id":"35032","type":"Grid"},{"id":"35033","type":"LinearAxis"},{"id":"35037","type":"Grid"},{"id":"35046","type":"BoxAnnotation"},{"id":"35056","type":"GlyphRenderer"}],"title":{"id":"35059","type":"Title"},"toolbar":{"id":"35044","type":"Toolbar"},"x_range":{"id":"35020","type":"DataRange1d"},"x_scale":{"id":"35024","type":"LinearScale"},"y_range":{"id":"35022","type":"DataRange1d"},"y_scale":{"id":"35026","type":"LinearScale"}},"id":"35019","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"35063","type":"BasicTickFormatter"},"plot":{"id":"35019","subtype":"Figure","type":"Plot"},"ticker":{"id":"35034","type":"BasicTicker"}},"id":"35033","type":"LinearAxis"},{"attributes":{},"id":"35061","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"35066","type":"Selection"},"selection_policy":{"id":"35065","type":"UnionRenderers"}},"id":"35053","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35038","type":"PanTool"},{"id":"35039","type":"WheelZoomTool"},{"id":"35040","type":"BoxZoomTool"},{"id":"35041","type":"SaveTool"},{"id":"35042","type":"ResetTool"},{"id":"35043","type":"HelpTool"}]},"id":"35044","type":"Toolbar"},{"attributes":{},"id":"35034","type":"BasicTicker"},{"attributes":{"callback":null},"id":"35020","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"35019","subtype":"Figure","type":"Plot"},"ticker":{"id":"35034","type":"BasicTicker"}},"id":"35037","type":"Grid"},{"attributes":{"formatter":{"id":"35061","type":"BasicTickFormatter"},"plot":{"id":"35019","subtype":"Figure","type":"Plot"},"ticker":{"id":"35029","type":"BasicTicker"}},"id":"35028","type":"LinearAxis"},{"attributes":{},"id":"35043","type":"HelpTool"},{"attributes":{"callback":null},"id":"35022","type":"DataRange1d"},{"attributes":{},"id":"35065","type":"UnionRenderers"},{"attributes":{},"id":"35042","type":"ResetTool"}],"root_ids":["35019"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"240caa46-852b-4e89-9906-8f22ff3dc0a9","roots":{"35019":"71cd1ea4-0121-4335-9821-c1340eb38899"}}];
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