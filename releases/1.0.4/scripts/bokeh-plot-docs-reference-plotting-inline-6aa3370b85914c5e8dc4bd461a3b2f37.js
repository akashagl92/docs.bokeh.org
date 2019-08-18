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
      };var element = document.getElementById("4596079e-fc21-408b-b1d7-a9f025f908a3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4596079e-fc21-408b-b1d7-a9f025f908a3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b8df7eaa-9c02-46c9-b397-4b5214cda801":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33117","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":null},"height":{"units":"data","value":20},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"33125","type":"Ellipse"},{"attributes":{},"id":"33095","type":"LinearScale"},{"attributes":{"data_source":{"id":"33124","type":"ColumnDataSource"},"glyph":{"id":"33125","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33126","type":"Ellipse"},"selection_glyph":null,"view":{"id":"33128","type":"CDSView"}},"id":"33127","type":"GlyphRenderer"},{"attributes":{},"id":"33097","type":"LinearScale"},{"attributes":{"source":{"id":"33124","type":"ColumnDataSource"}},"id":"33128","type":"CDSView"},{"attributes":{},"id":"33109","type":"PanTool"},{"attributes":{"formatter":{"id":"33133","type":"BasicTickFormatter"},"plot":{"id":"33090","subtype":"Figure","type":"Plot"},"ticker":{"id":"33100","type":"BasicTicker"}},"id":"33099","type":"LinearAxis"},{"attributes":{},"id":"33110","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"33129","type":"Title"},{"attributes":{},"id":"33100","type":"BasicTicker"},{"attributes":{"overlay":{"id":"33117","type":"BoxAnnotation"}},"id":"33111","type":"BoxZoomTool"},{"attributes":{},"id":"33131","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"33090","subtype":"Figure","type":"Plot"},"ticker":{"id":"33100","type":"BasicTicker"}},"id":"33103","type":"Grid"},{"attributes":{},"id":"33112","type":"SaveTool"},{"attributes":{},"id":"33133","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"33131","type":"BasicTickFormatter"},"plot":{"id":"33090","subtype":"Figure","type":"Plot"},"ticker":{"id":"33105","type":"BasicTicker"}},"id":"33104","type":"LinearAxis"},{"attributes":{"below":[{"id":"33099","type":"LinearAxis"}],"left":[{"id":"33104","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33099","type":"LinearAxis"},{"id":"33103","type":"Grid"},{"id":"33104","type":"LinearAxis"},{"id":"33108","type":"Grid"},{"id":"33117","type":"BoxAnnotation"},{"id":"33127","type":"GlyphRenderer"}],"title":{"id":"33129","type":"Title"},"toolbar":{"id":"33115","type":"Toolbar"},"x_range":{"id":"33091","type":"DataRange1d"},"x_scale":{"id":"33095","type":"LinearScale"},"y_range":{"id":"33093","type":"DataRange1d"},"y_scale":{"id":"33097","type":"LinearScale"}},"id":"33090","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33113","type":"ResetTool"},{"attributes":{},"id":"33135","type":"UnionRenderers"},{"attributes":{},"id":"33105","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"33136","type":"Selection"},"selection_policy":{"id":"33135","type":"UnionRenderers"}},"id":"33124","type":"ColumnDataSource"},{"attributes":{},"id":"33114","type":"HelpTool"},{"attributes":{},"id":"33136","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"33090","subtype":"Figure","type":"Plot"},"ticker":{"id":"33105","type":"BasicTicker"}},"id":"33108","type":"Grid"},{"attributes":{"callback":null},"id":"33091","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33109","type":"PanTool"},{"id":"33110","type":"WheelZoomTool"},{"id":"33111","type":"BoxZoomTool"},{"id":"33112","type":"SaveTool"},{"id":"33113","type":"ResetTool"},{"id":"33114","type":"HelpTool"}]},"id":"33115","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"33126","type":"Ellipse"},{"attributes":{"callback":null},"id":"33093","type":"DataRange1d"}],"root_ids":["33090"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"b8df7eaa-9c02-46c9-b397-4b5214cda801","roots":{"33090":"4596079e-fc21-408b-b1d7-a9f025f908a3"}}];
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