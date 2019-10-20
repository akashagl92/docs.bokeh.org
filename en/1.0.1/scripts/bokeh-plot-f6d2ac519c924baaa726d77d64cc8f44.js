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
      };var element = document.getElementById("4c328400-5dc4-445f-a7aa-e3bdcba4e4c8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4c328400-5dc4-445f-a7aa-e3bdcba4e4c8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"10041e71-c946-4bfd-b9ef-fc688c367a2a":{"roots":{"references":[{"attributes":{"plot":{"id":"3319","subtype":"Figure","type":"Plot"},"ticker":{"id":"3329","type":"BasicTicker"}},"id":"3332","type":"Grid"},{"attributes":{"toolbar":{"id":"3408","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"3409","type":"ToolbarBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3372","type":"BoxSelectTool"},{"id":"3373","type":"HoverTool"},{"id":"3374","type":"ResetTool"}]},"id":"3377","type":"Toolbar"},{"attributes":{"callback":null,"renderers":"auto"},"id":"3373","type":"HoverTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3348","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3341","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3375","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3383","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"3341","type":"BoxAnnotation"}},"id":"3338","type":"BoxSelectTool"},{"attributes":{},"id":"3360","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3349","type":"Circle"},{"attributes":{},"id":"3399","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"3322","type":"DataRange1d"},{"attributes":{"callback":null},"id":"3356","type":"DataRange1d"},{"attributes":{"indices":[0,2,4]},"id":"3317","type":"IndexFilter"},{"attributes":{},"id":"3391","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"3362","type":"LinearAxis"}],"left":[{"id":"3367","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"3362","type":"LinearAxis"},{"id":"3366","type":"Grid"},{"id":"3367","type":"LinearAxis"},{"id":"3371","type":"Grid"},{"id":"3375","type":"BoxAnnotation"},{"id":"3385","type":"GlyphRenderer"}],"title":{"id":"3397","type":"Title"},"toolbar":{"id":"3377","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3354","type":"DataRange1d"},"x_scale":{"id":"3358","type":"LinearScale"},"y_range":{"id":"3356","type":"DataRange1d"},"y_scale":{"id":"3360","type":"LinearScale"}},"id":"3353","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"renderers":"auto"},"id":"3339","type":"HoverTool"},{"attributes":{},"id":"3363","type":"BasicTicker"},{"attributes":{"filters":[{"id":"3317","type":"IndexFilter"}],"source":{"id":"3316","type":"ColumnDataSource"}},"id":"3318","type":"CDSView"},{"attributes":{"formatter":{"id":"3401","type":"BasicTickFormatter"},"plot":{"id":"3353","subtype":"Figure","type":"Plot"},"ticker":{"id":"3368","type":"BasicTicker"}},"id":"3367","type":"LinearAxis"},{"attributes":{"formatter":{"id":"3399","type":"BasicTickFormatter"},"plot":{"id":"3353","subtype":"Figure","type":"Plot"},"ticker":{"id":"3363","type":"BasicTicker"}},"id":"3362","type":"LinearAxis"},{"attributes":{"plot":{"id":"3353","subtype":"Figure","type":"Plot"},"ticker":{"id":"3363","type":"BasicTicker"}},"id":"3366","type":"Grid"},{"attributes":{},"id":"3340","type":"ResetTool"},{"attributes":{},"id":"3368","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3384","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"3387","type":"Title"},{"attributes":{"callback":null,"overlay":{"id":"3375","type":"BoxAnnotation"}},"id":"3372","type":"BoxSelectTool"},{"attributes":{"children":[{"id":"3409","type":"ToolbarBox"},{"id":"3407","type":"Column"}]},"id":"3410","type":"Column"},{"attributes":{"data_source":{"id":"3316","type":"ColumnDataSource"},"glyph":{"id":"3348","type":"Circle"},"hover_glyph":{"id":"3350","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"3349","type":"Circle"},"selection_glyph":null,"view":{"id":"3352","type":"CDSView"}},"id":"3351","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"3319","subtype":"Figure","type":"Plot"},"ticker":{"id":"3334","type":"BasicTicker"}},"id":"3337","type":"Grid"},{"attributes":{},"id":"3393","type":"Selection"},{"attributes":{"plot":null,"text":""},"id":"3397","type":"Title"},{"attributes":{},"id":"3334","type":"BasicTicker"},{"attributes":{},"id":"3401","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3338","type":"BoxSelectTool"},{"id":"3339","type":"HoverTool"},{"id":"3340","type":"ResetTool"}]},"id":"3343","type":"Toolbar"},{"attributes":{"data_source":{"id":"3316","type":"ColumnDataSource"},"glyph":{"id":"3382","type":"Circle"},"hover_glyph":{"id":"3384","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"3383","type":"Circle"},"selection_glyph":null,"view":{"id":"3318","type":"CDSView"}},"id":"3385","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"3389","type":"BasicTickFormatter"},"plot":{"id":"3319","subtype":"Figure","type":"Plot"},"ticker":{"id":"3329","type":"BasicTicker"}},"id":"3328","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3350","type":"Circle"},{"attributes":{"source":{"id":"3316","type":"ColumnDataSource"}},"id":"3352","type":"CDSView"},{"attributes":{},"id":"3374","type":"ResetTool"},{"attributes":{"tools":[{"id":"3338","type":"BoxSelectTool"},{"id":"3339","type":"HoverTool"},{"id":"3340","type":"ResetTool"},{"id":"3372","type":"BoxSelectTool"},{"id":"3373","type":"HoverTool"},{"id":"3374","type":"ResetTool"}]},"id":"3408","type":"ProxyToolbar"},{"attributes":{},"id":"3389","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"3391","type":"BasicTickFormatter"},"plot":{"id":"3319","subtype":"Figure","type":"Plot"},"ticker":{"id":"3334","type":"BasicTicker"}},"id":"3333","type":"LinearAxis"},{"attributes":{"callback":null},"id":"3354","type":"DataRange1d"},{"attributes":{},"id":"3324","type":"LinearScale"},{"attributes":{"children":[{"id":"3406","type":"Row"}]},"id":"3407","type":"Column"},{"attributes":{"callback":null},"id":"3320","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3382","type":"Circle"},{"attributes":{"below":[{"id":"3328","type":"LinearAxis"}],"left":[{"id":"3333","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"3328","type":"LinearAxis"},{"id":"3332","type":"Grid"},{"id":"3333","type":"LinearAxis"},{"id":"3337","type":"Grid"},{"id":"3341","type":"BoxAnnotation"},{"id":"3351","type":"GlyphRenderer"}],"title":{"id":"3387","type":"Title"},"toolbar":{"id":"3343","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3320","type":"DataRange1d"},"x_scale":{"id":"3324","type":"LinearScale"},"y_range":{"id":"3322","type":"DataRange1d"},"y_scale":{"id":"3326","type":"LinearScale"}},"id":"3319","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"3319","subtype":"Figure","type":"Plot"},{"id":"3353","subtype":"Figure","type":"Plot"}]},"id":"3406","type":"Row"},{"attributes":{"dimension":1,"plot":{"id":"3353","subtype":"Figure","type":"Plot"},"ticker":{"id":"3368","type":"BasicTicker"}},"id":"3371","type":"Grid"},{"attributes":{},"id":"3329","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]},"selected":{"id":"3393","type":"Selection"},"selection_policy":{"id":"3394","type":"UnionRenderers"}},"id":"3316","type":"ColumnDataSource"},{"attributes":{},"id":"3358","type":"LinearScale"},{"attributes":{},"id":"3394","type":"UnionRenderers"},{"attributes":{},"id":"3326","type":"LinearScale"}],"root_ids":["3410"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"10041e71-c946-4bfd-b9ef-fc688c367a2a","roots":{"3410":"4c328400-5dc4-445f-a7aa-e3bdcba4e4c8"}}];
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