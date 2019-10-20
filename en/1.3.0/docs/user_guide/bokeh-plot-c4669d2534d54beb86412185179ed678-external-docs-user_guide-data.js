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
      };var element = document.getElementById("ada87e80-c51e-47f3-8201-bf15ce85477e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'ada87e80-c51e-47f3-8201-bf15ce85477e' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"7a38bdf6-a88a-42b2-996f-f6dadde52e77":{"roots":{"references":[{"attributes":{},"id":"22388","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22401","type":"BoxAnnotation"},{"attributes":{},"id":"22400","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"22388","type":"BasicTickFormatter"},"ticker":{"id":"22334","type":"BasicTicker"}},"id":"22333","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22343","type":"BoxSelectTool"},{"id":"22344","type":"HoverTool"},{"id":"22345","type":"ResetTool"}]},"id":"22346","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]},"selected":{"id":"22393","type":"Selection"},"selection_policy":{"id":"22392","type":"UnionRenderers"}},"id":"22321","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"22327","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22353","type":"Circle"},{"attributes":{"text":""},"id":"22396","type":"Title"},{"attributes":{"callback":null,"overlay":{"id":"22401","type":"BoxAnnotation"}},"id":"22373","type":"BoxSelectTool"},{"attributes":{"source":{"id":"22321","type":"ColumnDataSource"}},"id":"22355","type":"CDSView"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22383","type":"Circle"},{"attributes":{"ticker":{"id":"22364","type":"BasicTicker"}},"id":"22367","type":"Grid"},{"attributes":{"data_source":{"id":"22321","type":"ColumnDataSource"},"glyph":{"id":"22351","type":"Circle"},"hover_glyph":{"id":"22353","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"22352","type":"Circle"},"selection_glyph":null,"view":{"id":"22355","type":"CDSView"}},"id":"22354","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22373","type":"BoxSelectTool"},{"id":"22374","type":"HoverTool"},{"id":"22375","type":"ResetTool"}]},"id":"22376","type":"Toolbar"},{"attributes":{"below":[{"id":"22333","type":"LinearAxis"}],"center":[{"id":"22337","type":"Grid"},{"id":"22342","type":"Grid"}],"left":[{"id":"22338","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22354","type":"GlyphRenderer"}],"title":{"id":"22386","type":"Title"},"toolbar":{"id":"22346","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22325","type":"DataRange1d"},"x_scale":{"id":"22329","type":"LinearScale"},"y_range":{"id":"22327","type":"DataRange1d"},"y_scale":{"id":"22331","type":"LinearScale"}},"id":"22324","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"22364","type":"BasicTicker"},{"attributes":{"data_source":{"id":"22321","type":"ColumnDataSource"},"glyph":{"id":"22381","type":"Circle"},"hover_glyph":{"id":"22383","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"22382","type":"Circle"},"selection_glyph":null,"view":{"id":"22323","type":"CDSView"}},"id":"22384","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"22407","type":"ToolbarBox"},{"id":"22405","type":"GridBox"}]},"id":"22408","type":"Column"},{"attributes":{},"id":"22392","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22352","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22382","type":"Circle"},{"attributes":{},"id":"22359","type":"LinearScale"},{"attributes":{"callback":null},"id":"22325","type":"DataRange1d"},{"attributes":{},"id":"22331","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22391","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"22400","type":"BasicTickFormatter"},"ticker":{"id":"22369","type":"BasicTicker"}},"id":"22368","type":"LinearAxis"},{"attributes":{},"id":"22339","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22381","type":"Circle"},{"attributes":{"tools":[{"id":"22343","type":"BoxSelectTool"},{"id":"22344","type":"HoverTool"},{"id":"22345","type":"ResetTool"},{"id":"22373","type":"BoxSelectTool"},{"id":"22374","type":"HoverTool"},{"id":"22375","type":"ResetTool"}]},"id":"22406","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"22344","type":"HoverTool"},{"attributes":{"callback":null},"id":"22374","type":"HoverTool"},{"attributes":{"children":[[{"id":"22324","subtype":"Figure","type":"Plot"},0,0],[{"id":"22356","subtype":"Figure","type":"Plot"},0,1]]},"id":"22405","type":"GridBox"},{"attributes":{},"id":"22375","type":"ResetTool"},{"attributes":{"booleans":[false,false,true,true,true]},"id":"22322","type":"BooleanFilter"},{"attributes":{},"id":"22393","type":"Selection"},{"attributes":{"callback":null,"overlay":{"id":"22391","type":"BoxAnnotation"}},"id":"22343","type":"BoxSelectTool"},{"attributes":{},"id":"22369","type":"BasicTicker"},{"attributes":{"filters":[{"id":"22322","type":"BooleanFilter"}],"source":{"id":"22321","type":"ColumnDataSource"}},"id":"22323","type":"CDSView"},{"attributes":{"formatter":{"id":"22390","type":"BasicTickFormatter"},"ticker":{"id":"22339","type":"BasicTicker"}},"id":"22338","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"22339","type":"BasicTicker"}},"id":"22342","type":"Grid"},{"attributes":{"formatter":{"id":"22398","type":"BasicTickFormatter"},"ticker":{"id":"22364","type":"BasicTicker"}},"id":"22363","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22351","type":"Circle"},{"attributes":{"ticker":{"id":"22334","type":"BasicTicker"}},"id":"22337","type":"Grid"},{"attributes":{},"id":"22398","type":"BasicTickFormatter"},{"attributes":{},"id":"22345","type":"ResetTool"},{"attributes":{},"id":"22361","type":"LinearScale"},{"attributes":{},"id":"22390","type":"BasicTickFormatter"},{"attributes":{"text":""},"id":"22386","type":"Title"},{"attributes":{},"id":"22329","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"22369","type":"BasicTicker"}},"id":"22372","type":"Grid"},{"attributes":{},"id":"22334","type":"BasicTicker"},{"attributes":{"below":[{"id":"22363","type":"LinearAxis"}],"center":[{"id":"22367","type":"Grid"},{"id":"22372","type":"Grid"}],"left":[{"id":"22368","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22384","type":"GlyphRenderer"}],"title":{"id":"22396","type":"Title"},"toolbar":{"id":"22376","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22325","type":"DataRange1d"},"x_scale":{"id":"22359","type":"LinearScale"},"y_range":{"id":"22327","type":"DataRange1d"},"y_scale":{"id":"22361","type":"LinearScale"}},"id":"22356","subtype":"Figure","type":"Plot"},{"attributes":{"toolbar":{"id":"22406","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"22407","type":"ToolbarBox"}],"root_ids":["22408"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"7a38bdf6-a88a-42b2-996f-f6dadde52e77","roots":{"22408":"ada87e80-c51e-47f3-8201-bf15ce85477e"}}];
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