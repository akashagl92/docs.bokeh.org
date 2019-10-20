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
      };var element = document.getElementById("3dadd64b-7deb-4119-ad47-92dccb1f53a9");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '3dadd64b-7deb-4119-ad47-92dccb1f53a9' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"dc5b42ca-8d41-4108-95d1-186c3db8b6b0":{"roots":{"references":[{"attributes":{"ticker":{"id":"32557","type":"BasicTicker"}},"id":"32560","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"32589","type":"PolyAnnotation"},{"attributes":{"formatter":{"id":"32584","type":"BasicTickFormatter"},"ticker":{"id":"32557","type":"BasicTicker"}},"id":"32556","type":"LinearAxis"},{"attributes":{"below":[{"id":"32556","type":"LinearAxis"}],"center":[{"id":"32560","type":"Grid"},{"id":"32565","type":"Grid"}],"left":[{"id":"32561","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"32578","type":"GlyphRenderer"}],"title":{"id":"32546","type":"Title"},"toolbar":{"id":"32570","type":"Toolbar"},"x_range":{"id":"32548","type":"DataRange1d"},"x_scale":{"id":"32552","type":"LinearScale"},"y_range":{"id":"32550","type":"DataRange1d"},"y_scale":{"id":"32554","type":"LinearScale"}},"id":"32545","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32587","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32566","type":"BoxSelectTool"},{"id":"32567","type":"BoxZoomTool"},{"id":"32568","type":"LassoSelectTool"},{"id":"32569","type":"ResetTool"}]},"id":"32570","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32588","type":"BoxAnnotation"},{"attributes":{},"id":"32554","type":"LinearScale"},{"attributes":{"callback":null},"id":"32550","type":"DataRange1d"},{"attributes":{},"id":"32569","type":"ResetTool"},{"attributes":{},"id":"32586","type":"Selection"},{"attributes":{},"id":"32562","type":"BasicTicker"},{"attributes":{"callback":null},"id":"32548","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"32589","type":"PolyAnnotation"}},"id":"32568","type":"LassoSelectTool"},{"attributes":{},"id":"32582","type":"BasicTickFormatter"},{"attributes":{"text":"Select and Zoom"},"id":"32546","type":"Title"},{"attributes":{"data_source":{"id":"32575","type":"ColumnDataSource"},"glyph":{"id":"32576","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32577","type":"Circle"},"selection_glyph":null,"view":{"id":"32579","type":"CDSView"}},"id":"32578","type":"GlyphRenderer"},{"attributes":{},"id":"32585","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"32588","type":"BoxAnnotation"}},"id":"32567","type":"BoxZoomTool"},{"attributes":{},"id":"32552","type":"LinearScale"},{"attributes":{},"id":"32584","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"32562","type":"BasicTicker"}},"id":"32565","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"32587","type":"BoxAnnotation"}},"id":"32566","type":"BoxSelectTool"},{"attributes":{"source":{"id":"32575","type":"ColumnDataSource"}},"id":"32579","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"32576","type":"Circle"},{"attributes":{},"id":"32557","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"iHEpc7Nw4D+jYJBeVwrrPzCabd37od0/lAXdbNCs0D8gIBYmAuTlP5w6lGaDoek/+tkHAR5e5T/HTK/yC1LgP7B2az/DbtU/4PQUakAjzD9N0K3psFviPwx2JXArbcc/CDtm8SWBwD97FUi2pP3oP9SsvaJtKsU/qCnUxdUX0j+UTAA5GcTqP+z6vL4UX+Q/pBdVIVHizT+9r5+GwLrqP1A9fDhaH7s/xVEcT53J6j/MoBk5pHPhP6BJBi6g6Nk/Fjbmg9eA5j8gOe3Pfq7fP+xU959VM80/mpBmmWEa6T+Yl6dTMhmwP2eHuJca2es/ptGtsiZO6D9aMqNkHKHtP37IJvXUAN8/KTztZZYP7T8Ao6yOgzZzP7lcMod0ae8/zTQmkScu5D/oebNk9NrIP46PdKemneI/jUFsT39h5T+ADcZ8/daNP/UkfLwOUus/SDygW3tj5D9NLSpFRz/oPw6I+GbAO9k/uB79d6vgzj+L8thlqUHvP5oeZn9TfeY/wNc37OD17D8j8YRi0HLnPwTDgaFqhNo/WDgcpSrW6j9x6GyaTX7mP4B3cYMz7qY/+dmEGmXP5j/+mRPgBavuP1Zsjb4fY+w/gJVhxmrx3z8sHedkDDbbP9zb87PrSdE/eXn5Tp4m4j9QWlVEUumhP0LfyPd/q+I/anPydcyM0D8UumM54i7mP2A9hcRRjtE/UDkPL0GyqD+AMFqV+IPlP7oihg6dkdo/E4f8UtId4j9KGmRlMUzsP22N/Zk9WOk/an/L1Lgg2D/K+hishNPZPyB7In8gorI//vwE8G1r7T+xuAzx72XuPyQwJX1IQcQ/sIpEFElArT+8mBaqQTvNPzJNhRpNrtA/dS+k8WQD6j8iU+9pWA7VP7e+nBaRues/FJfZzR/P4D9xekHhPaTjP1hwulQGiOY/TcJVGHxc6z9WJmtrV0LpP76SNqSQn9w/hUXTe32F6j/6yjELTP7pP1KUbsedKu8/ABxqRX1+dz+W5sg1/5bkPxLVMeWmduw/KKeVqT2Z4j80YDHiLWPLPzS68tZFLds/U+hA6/PM5T9GxnaNuPjYP3KqPvLO5Nc/4FUMPd7hnT8PMW1SB03oPyNSS1OE9eQ/Hj1B9TPu5z+89Fz0ezzXP7QIWYkFS+U/oLTbERMNzT9hmQLRJtPvP9hvl4wNBOI/ADKUHe+4gT+ke/uHDBTAP/bU8tO9Q94/2Rc4bfb74D8S4fG0/hnnP5CC9ty4Luk/Tn8s5xVP0T+lwYKzvWnuP7Qft2kVk+0/ms+qOaDA6D+AAyk/Ce/cP+5eCiZ/Bt4/iijzXurO3j/wzEm8R6i+P1ZNdYi+Nek/d6KHJ8v45D+QgW5nScfGP8C+IMEwQdc/LmmFcBga5T9swUXuxuvPP7CwUjGjFuY/VscgCcH/0j/t4JVkCV7sP+1pdFrZXOg/oMH8UpDQkz9bFlm966XtP0DxQjqWj7I/Tgx78Y8j1D9AF3ReahjMP7pPa3oiPdg/rFjaukah3j80wFZOl8vjP/2FtCTOa+s/VHz7Cus52D8AVm9hERziP3z5IbgqD+0/OMpfBMe75z9Q0fyvCgHKP96iUjqb29A/hFwRzAPr0T/4rarcI32/P61Jhm7/Vek/plBFDtuY6j8sB7LZY3rGP/BWzdjWMOs/8F/7vymx3z+kEMgV6AfqPywWobXO88Q/o9Rmyoe36z/YqbxMTVPQP3CWxqkNvrE/oP/5NiFVvz+y3tskPvzlPxHxXt4jreE/RJMzY0gYzj9GecbColfVP4AjSq5arY8/OOsZ85jXwz/W7qkQj/7sP1wQabmbH+U/Po7bv3UB4z/1WiDW9T7iP1a++NE/1Ow/Dg3L2wrb6D8ogHX4ShHeP0XxeOXexuU/TJeshOUYzT/K5CbH2bbTPxguiqweleg/NJx9wIrW4D+UiEAXjwTYP7yBYjVvvcE/B6UPGuvh7D9XS89M8MziP9/Y+y4Ub+4/6uujTOVV6T8Mck7vJn3MP8mtexQq5eo/HMoUrjXf4j+EXRIEJfDNP06A8PLoFNg/UAkTfKqBsz9+CZTtKX3lP2xf+TW+Keg/QDNymQgCgj/YmhP9gHi+P9C4G/RyR6E/Yg0iuUNo4T9uut4YTHfqPw==","dtype":"float64","shape":[200]}},"selected":{"id":"32586","type":"Selection"},"selection_policy":{"id":"32585","type":"UnionRenderers"}},"id":"32575","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"32577","type":"Circle"},{"attributes":{"formatter":{"id":"32582","type":"BasicTickFormatter"},"ticker":{"id":"32562","type":"BasicTicker"}},"id":"32561","type":"LinearAxis"}],"root_ids":["32545"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"dc5b42ca-8d41-4108-95d1-186c3db8b6b0","roots":{"32545":"3dadd64b-7deb-4119-ad47-92dccb1f53a9"}}];
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