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
      };var element = document.getElementById("4e8cd9ae-7eda-47d3-9171-103451b79f80");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '4e8cd9ae-7eda-47d3-9171-103451b79f80' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js"];
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
                    
                  var docs_json = '{"82187dd6-cab6-403b-b880-752f2282eddf":{"roots":{"references":[{"attributes":{"formatter":{"id":"18526","type":"BasicTickFormatter"},"ticker":{"id":"18509","type":"BasicTicker"}},"id":"18508","type":"LinearAxis"},{"attributes":{},"id":"18536","type":"Selection"},{"attributes":{"source":{"id":"18493","type":"ColumnDataSource"}},"id":"18520","type":"CDSView"},{"attributes":{},"id":"18535","type":"UnionRenderers"},{"attributes":{},"id":"18504","type":"BasicTicker"},{"attributes":{"data_source":{"id":"18493","type":"ColumnDataSource"},"glyph":{"id":"18517","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18518","type":"Circle"},"selection_glyph":null,"view":{"id":"18520","type":"CDSView"}},"id":"18519","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"18504","type":"BasicTicker"}},"id":"18507","type":"Grid"},{"attributes":{"text":""},"id":"18522","type":"Title"},{"attributes":{},"id":"18513","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18513","type":"SaveTool"}]},"id":"18514","type":"Toolbar"},{"attributes":{},"id":"18509","type":"BasicTicker"},{"attributes":{"formatter":{"id":"18524","type":"BasicTickFormatter"},"ticker":{"id":"18504","type":"BasicTicker"}},"id":"18503","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"18509","type":"BasicTicker"}},"id":"18512","type":"Grid"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"18517","type":"Circle"},{"attributes":{"callback":null,"end":3},"id":"18497","type":"Range1d"},{"attributes":{},"id":"18501","type":"LinearScale"},{"attributes":{},"id":"18524","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"18518","type":"Circle"},{"attributes":{"callback":null,"end":7},"id":"18495","type":"Range1d"},{"attributes":{"callback":null,"data":{"color":["#ef8a62","#67a9cf","#ef8a62","#67a9cf","#ef8a62","#67a9cf"],"label":["hi","lo","hi","lo","hi","lo"],"x":[1,2,3,4,5,6],"y":[2,1,2,1,2,1]},"selected":{"id":"18536","type":"Selection"},"selection_policy":{"id":"18535","type":"UnionRenderers"}},"id":"18493","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"18503","type":"LinearAxis"}],"center":[{"id":"18507","type":"Grid"},{"id":"18512","type":"Grid"},{"id":"18527","type":"Legend"}],"left":[{"id":"18508","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"18519","type":"GlyphRenderer"}],"title":{"id":"18522","type":"Title"},"toolbar":{"id":"18514","type":"Toolbar"},"x_range":{"id":"18495","type":"Range1d"},"x_scale":{"id":"18499","type":"LinearScale"},"y_range":{"id":"18497","type":"Range1d"},"y_scale":{"id":"18501","type":"LinearScale"}},"id":"18494","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"field":"label"},"renderers":[{"id":"18519","type":"GlyphRenderer"}]},"id":"18528","type":"LegendItem"},{"attributes":{},"id":"18526","type":"BasicTickFormatter"},{"attributes":{"items":[{"id":"18528","type":"LegendItem"}]},"id":"18527","type":"Legend"},{"attributes":{},"id":"18499","type":"LinearScale"}],"root_ids":["18494"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"82187dd6-cab6-403b-b880-752f2282eddf","roots":{"18494":"4e8cd9ae-7eda-47d3-9171-103451b79f80"}}];
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