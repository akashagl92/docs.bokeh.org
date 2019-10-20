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
      };var element = document.getElementById("db3ae6ef-8784-4f5b-afe3-94a590fccee9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'db3ae6ef-8784-4f5b-afe3-94a590fccee9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"79a846ee-04f8-4dd7-8f27-4d3a943ce156":{"roots":{"references":[{"attributes":{},"id":"10439","type":"BasicTicker"},{"attributes":{"below":[{"id":"10433","type":"LinearAxis"}],"left":[{"id":"10438","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"10433","type":"LinearAxis"},{"id":"10437","type":"Grid"},{"id":"10438","type":"LinearAxis"},{"id":"10442","type":"Grid"},{"id":"10457","type":"Legend"},{"id":"10449","type":"GlyphRenderer"}],"title":{"id":"10452","type":"Title"},"toolbar":{"id":"10444","type":"Toolbar"},"x_range":{"id":"10425","type":"Range1d"},"x_scale":{"id":"10429","type":"LinearScale"},"y_range":{"id":"10427","type":"Range1d"},"y_scale":{"id":"10431","type":"LinearScale"}},"id":"10424","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"10423","type":"ColumnDataSource"},"glyph":{"id":"10447","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10448","type":"Circle"},"selection_glyph":null,"view":{"id":"10450","type":"CDSView"}},"id":"10449","type":"GlyphRenderer"},{"attributes":{},"id":"10466","type":"Selection"},{"attributes":{},"id":"10431","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"10448","type":"Circle"},{"attributes":{"formatter":{"id":"10454","type":"BasicTickFormatter"},"plot":{"id":"10424","subtype":"Figure","type":"Plot"},"ticker":{"id":"10434","type":"BasicTicker"}},"id":"10433","type":"LinearAxis"},{"attributes":{},"id":"10454","type":"BasicTickFormatter"},{"attributes":{},"id":"10443","type":"SaveTool"},{"attributes":{"callback":null,"end":3},"id":"10427","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"10424","subtype":"Figure","type":"Plot"},"ticker":{"id":"10439","type":"BasicTicker"}},"id":"10442","type":"Grid"},{"attributes":{},"id":"10429","type":"LinearScale"},{"attributes":{"items":[{"id":"10458","type":"LegendItem"}],"plot":{"id":"10424","subtype":"Figure","type":"Plot"}},"id":"10457","type":"Legend"},{"attributes":{"plot":{"id":"10424","subtype":"Figure","type":"Plot"},"ticker":{"id":"10434","type":"BasicTicker"}},"id":"10437","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"10452","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"10443","type":"SaveTool"}]},"id":"10444","type":"Toolbar"},{"attributes":{"formatter":{"id":"10456","type":"BasicTickFormatter"},"plot":{"id":"10424","subtype":"Figure","type":"Plot"},"ticker":{"id":"10439","type":"BasicTicker"}},"id":"10438","type":"LinearAxis"},{"attributes":{},"id":"10434","type":"BasicTicker"},{"attributes":{},"id":"10456","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":7},"id":"10425","type":"Range1d"},{"attributes":{"source":{"id":"10423","type":"ColumnDataSource"}},"id":"10450","type":"CDSView"},{"attributes":{"callback":null,"data":{"color":["#ef8a62","#67a9cf","#ef8a62","#67a9cf","#ef8a62","#67a9cf"],"label":["hi","lo","hi","lo","hi","lo"],"x":[1,2,3,4,5,6],"y":[2,1,2,1,2,1]},"selected":{"id":"10466","type":"Selection"},"selection_policy":{"id":"10465","type":"UnionRenderers"}},"id":"10423","type":"ColumnDataSource"},{"attributes":{},"id":"10465","type":"UnionRenderers"},{"attributes":{"label":{"field":"label"},"renderers":[{"id":"10449","type":"GlyphRenderer"}]},"id":"10458","type":"LegendItem"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"10447","type":"Circle"}],"root_ids":["10424"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"79a846ee-04f8-4dd7-8f27-4d3a943ce156","roots":{"10424":"db3ae6ef-8784-4f5b-afe3-94a590fccee9"}}];
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