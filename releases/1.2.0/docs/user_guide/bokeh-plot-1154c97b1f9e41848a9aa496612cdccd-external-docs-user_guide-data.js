(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("088f0932-75b5-424b-8cab-14cd196f4e6f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '088f0932-75b5-424b-8cab-14cd196f4e6f' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                    
                  var docs_json = '{"8d582876-dc13-4415-b68a-493f546e7ff8":{"roots":{"references":[{"attributes":{"data_source":{"id":"22301","type":"ColumnDataSource"},"glyph":{"id":"22331","type":"Circle"},"hover_glyph":{"id":"22333","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"22332","type":"Circle"},"selection_glyph":null,"view":{"id":"22335","type":"CDSView"}},"id":"22334","type":"GlyphRenderer"},{"attributes":{},"id":"22369","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"22307","type":"DataRange1d"},{"attributes":{},"id":"22371","type":"Selection"},{"attributes":{"callback":null,"overlay":{"id":"22383","type":"BoxAnnotation"}},"id":"22353","type":"BoxSelectTool"},{"attributes":{"formatter":{"id":"22379","type":"BasicTickFormatter"},"ticker":{"id":"22344","type":"BasicTicker"}},"id":"22343","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22323","type":"BoxSelectTool"},{"id":"22324","type":"HoverTool"},{"id":"22325","type":"ResetTool"}]},"id":"22326","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"22319","type":"BasicTicker"}},"id":"22322","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]},"selected":{"id":"22371","type":"Selection"},"selection_policy":{"id":"22372","type":"UnionRenderers"}},"id":"22301","type":"ColumnDataSource"},{"attributes":{},"id":"22309","type":"LinearScale"},{"attributes":{"callback":null},"id":"22354","type":"HoverTool"},{"attributes":{"filters":[{"id":"22302","type":"BooleanFilter"}],"source":{"id":"22301","type":"ColumnDataSource"}},"id":"22303","type":"CDSView"},{"attributes":{"callback":null},"id":"22324","type":"HoverTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22361","type":"Circle"},{"attributes":{"children":[{"id":"22387","type":"ToolbarBox"},{"id":"22385","type":"GridBox"}]},"id":"22388","type":"Column"},{"attributes":{},"id":"22319","type":"BasicTicker"},{"attributes":{"callback":null},"id":"22305","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22331","type":"Circle"},{"attributes":{},"id":"22377","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"22377","type":"BasicTickFormatter"},"ticker":{"id":"22349","type":"BasicTicker"}},"id":"22348","type":"LinearAxis"},{"attributes":{"below":[{"id":"22313","type":"LinearAxis"}],"center":[{"id":"22317","type":"Grid"},{"id":"22322","type":"Grid"}],"left":[{"id":"22318","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22334","type":"GlyphRenderer"}],"title":{"id":"22365","type":"Title"},"toolbar":{"id":"22326","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22305","type":"DataRange1d"},"x_scale":{"id":"22309","type":"LinearScale"},"y_range":{"id":"22307","type":"DataRange1d"},"y_scale":{"id":"22311","type":"LinearScale"}},"id":"22304","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22363","type":"Circle"},{"attributes":{},"id":"22311","type":"LinearScale"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22333","type":"Circle"},{"attributes":{"text":""},"id":"22375","type":"Title"},{"attributes":{},"id":"22344","type":"BasicTicker"},{"attributes":{},"id":"22314","type":"BasicTicker"},{"attributes":{},"id":"22372","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"22369","type":"BasicTickFormatter"},"ticker":{"id":"22314","type":"BasicTicker"}},"id":"22313","type":"LinearAxis"},{"attributes":{"text":""},"id":"22365","type":"Title"},{"attributes":{"callback":null,"overlay":{"id":"22373","type":"BoxAnnotation"}},"id":"22323","type":"BoxSelectTool"},{"attributes":{"dimension":1,"ticker":{"id":"22349","type":"BasicTicker"}},"id":"22352","type":"Grid"},{"attributes":{"ticker":{"id":"22344","type":"BasicTicker"}},"id":"22347","type":"Grid"},{"attributes":{},"id":"22367","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22373","type":"BoxAnnotation"},{"attributes":{},"id":"22325","type":"ResetTool"},{"attributes":{"source":{"id":"22301","type":"ColumnDataSource"}},"id":"22335","type":"CDSView"},{"attributes":{"formatter":{"id":"22367","type":"BasicTickFormatter"},"ticker":{"id":"22319","type":"BasicTicker"}},"id":"22318","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22362","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22332","type":"Circle"},{"attributes":{"below":[{"id":"22343","type":"LinearAxis"}],"center":[{"id":"22347","type":"Grid"},{"id":"22352","type":"Grid"}],"left":[{"id":"22348","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22364","type":"GlyphRenderer"}],"title":{"id":"22375","type":"Title"},"toolbar":{"id":"22356","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22305","type":"DataRange1d"},"x_scale":{"id":"22339","type":"LinearScale"},"y_range":{"id":"22307","type":"DataRange1d"},"y_scale":{"id":"22341","type":"LinearScale"}},"id":"22336","subtype":"Figure","type":"Plot"},{"attributes":{"tools":[{"id":"22323","type":"BoxSelectTool"},{"id":"22324","type":"HoverTool"},{"id":"22325","type":"ResetTool"},{"id":"22353","type":"BoxSelectTool"},{"id":"22354","type":"HoverTool"},{"id":"22355","type":"ResetTool"}]},"id":"22386","type":"ProxyToolbar"},{"attributes":{"ticker":{"id":"22314","type":"BasicTicker"}},"id":"22317","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22383","type":"BoxAnnotation"},{"attributes":{},"id":"22341","type":"LinearScale"},{"attributes":{},"id":"22339","type":"LinearScale"},{"attributes":{"toolbar":{"id":"22386","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"22387","type":"ToolbarBox"},{"attributes":{},"id":"22379","type":"BasicTickFormatter"},{"attributes":{"booleans":[false,false,true,true,true]},"id":"22302","type":"BooleanFilter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22353","type":"BoxSelectTool"},{"id":"22354","type":"HoverTool"},{"id":"22355","type":"ResetTool"}]},"id":"22356","type":"Toolbar"},{"attributes":{},"id":"22355","type":"ResetTool"},{"attributes":{"data_source":{"id":"22301","type":"ColumnDataSource"},"glyph":{"id":"22361","type":"Circle"},"hover_glyph":{"id":"22363","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"22362","type":"Circle"},"selection_glyph":null,"view":{"id":"22303","type":"CDSView"}},"id":"22364","type":"GlyphRenderer"},{"attributes":{},"id":"22349","type":"BasicTicker"},{"attributes":{"children":[[{"id":"22304","subtype":"Figure","type":"Plot"},0,0],[{"id":"22336","subtype":"Figure","type":"Plot"},0,1]]},"id":"22385","type":"GridBox"}],"root_ids":["22388"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"8d582876-dc13-4415-b68a-493f546e7ff8","roots":{"22388":"088f0932-75b5-424b-8cab-14cd196f4e6f"}}];
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
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();