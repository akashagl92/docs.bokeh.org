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
      };var element = document.getElementById("8e1b8b08-7309-46cf-8a8a-5f9807195629");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8e1b8b08-7309-46cf-8a8a-5f9807195629' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"c7fecb99-fa12-4eef-984f-007038ec30f6":{"roots":{"references":[{"attributes":{},"id":"16349","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"16304","subtype":"Figure","type":"Plot"},"ticker":{"id":"16315","type":"BasicTicker"}},"id":"16318","type":"Grid"},{"attributes":{},"id":"16329","type":"HelpTool"},{"attributes":{},"id":"16327","type":"SaveTool"},{"attributes":{},"id":"16328","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5,7,8,9,10],"y":[1,2,3,4,5,7,8,9,10]},"selected":{"id":"16353","type":"Selection"},"selection_policy":{"id":"16354","type":"UnionRenderers"}},"id":"16302","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Linear Color Map Based on Y"},"id":"16303","type":"Title"},{"attributes":{"high":10,"low":1,"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"16301","type":"LinearColorMapper"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":12},"x":{"field":"x"},"y":{"field":"y"}},"id":"16341","type":"Circle"},{"attributes":{"formatter":{"id":"16349","type":"BasicTickFormatter"},"plot":{"id":"16304","subtype":"Figure","type":"Plot"},"ticker":{"id":"16315","type":"BasicTicker"}},"id":"16314","type":"LinearAxis"},{"attributes":{"callback":null},"id":"16308","type":"DataRange1d"},{"attributes":{"overlay":{"id":"16332","type":"BoxAnnotation"}},"id":"16326","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"16314","type":"LinearAxis"}],"left":[{"id":"16319","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16314","type":"LinearAxis"},{"id":"16318","type":"Grid"},{"id":"16319","type":"LinearAxis"},{"id":"16323","type":"Grid"},{"id":"16332","type":"BoxAnnotation"},{"id":"16342","type":"GlyphRenderer"},{"id":"16344","type":"ColorBar"}],"right":[{"id":"16344","type":"ColorBar"}],"title":{"id":"16303","type":"Title"},"toolbar":{"id":"16330","type":"Toolbar"},"x_range":{"id":"16306","type":"DataRange1d"},"x_scale":{"id":"16310","type":"LinearScale"},"y_range":{"id":"16308","type":"DataRange1d"},"y_scale":{"id":"16312","type":"LinearScale"}},"id":"16304","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"16325","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"16306","type":"DataRange1d"},{"attributes":{},"id":"16310","type":"LinearScale"},{"attributes":{"formatter":{"id":"16351","type":"BasicTickFormatter"},"plot":{"id":"16304","subtype":"Figure","type":"Plot"},"ticker":{"id":"16320","type":"BasicTicker"}},"id":"16319","type":"LinearAxis"},{"attributes":{},"id":"16346","type":"BasicTicker"},{"attributes":{},"id":"16312","type":"LinearScale"},{"attributes":{"color_mapper":{"id":"16301","type":"LinearColorMapper"},"formatter":{"id":"16347","type":"BasicTickFormatter"},"location":[0,0],"plot":{"id":"16304","subtype":"Figure","type":"Plot"},"ticker":{"id":"16346","type":"BasicTicker"},"width":8},"id":"16344","type":"ColorBar"},{"attributes":{},"id":"16320","type":"BasicTicker"},{"attributes":{},"id":"16351","type":"BasicTickFormatter"},{"attributes":{},"id":"16315","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"y","transform":{"id":"16301","type":"LinearColorMapper"}},"line_color":{"field":"y","transform":{"id":"16301","type":"LinearColorMapper"}},"size":{"units":"screen","value":12},"x":{"field":"x"},"y":{"field":"y"}},"id":"16340","type":"Circle"},{"attributes":{"source":{"id":"16302","type":"ColumnDataSource"}},"id":"16343","type":"CDSView"},{"attributes":{},"id":"16354","type":"UnionRenderers"},{"attributes":{},"id":"16347","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16332","type":"BoxAnnotation"},{"attributes":{},"id":"16324","type":"PanTool"},{"attributes":{},"id":"16353","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"16304","subtype":"Figure","type":"Plot"},"ticker":{"id":"16320","type":"BasicTicker"}},"id":"16323","type":"Grid"},{"attributes":{"data_source":{"id":"16302","type":"ColumnDataSource"},"glyph":{"id":"16340","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16341","type":"Circle"},"selection_glyph":null,"view":{"id":"16343","type":"CDSView"}},"id":"16342","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16324","type":"PanTool"},{"id":"16325","type":"WheelZoomTool"},{"id":"16326","type":"BoxZoomTool"},{"id":"16327","type":"SaveTool"},{"id":"16328","type":"ResetTool"},{"id":"16329","type":"HelpTool"}]},"id":"16330","type":"Toolbar"}],"root_ids":["16304"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"c7fecb99-fa12-4eef-984f-007038ec30f6","roots":{"16304":"8e1b8b08-7309-46cf-8a8a-5f9807195629"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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