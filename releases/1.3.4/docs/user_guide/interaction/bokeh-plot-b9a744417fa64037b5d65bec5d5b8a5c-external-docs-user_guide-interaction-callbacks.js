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
      };var element = document.getElementById("996706e0-3173-4576-bca4-d4f41639853e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '996706e0-3173-4576-bca4-d4f41639853e' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.4.min.js"];
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
                    
                  var docs_json = '{"bf99e215-cb52-4b8d-9a5d-40326fac1083":{"roots":{"references":[{"attributes":{},"id":"24909","type":"LinearScale"},{"attributes":{},"id":"24947","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"24907","type":"DataRange1d"},{"attributes":{},"id":"24919","type":"BasicTicker"},{"attributes":{"source":{"id":"24924","type":"ColumnDataSource"}},"id":"24929","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"olive"},"line_alpha":{"value":0.4},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"24931","type":"Circle"},{"attributes":{"callback":{"id":"24936","type":"CustomJS"},"renderers":[{"id":"24934","type":"GlyphRenderer"}],"tooltips":null},"id":"24937","type":"HoverTool"},{"attributes":{"dimension":1,"ticker":{"id":"24919","type":"BasicTicker"}},"id":"24922","type":"Grid"},{"attributes":{},"id":"24946","type":"Selection"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"24927","type":"Segment"},{"attributes":{},"id":"24944","type":"Selection"},{"attributes":{"args":{"circle":{"id":"24930","type":"ColumnDataSource"},"segment":{"id":"24924","type":"ColumnDataSource"}},"code":"\\nvar links = {0: [1, 2], 1: [0, 3, 4], 2: [0, 5], 3: [1, 4], 4: [1, 3], 5: [2, 3, 4]};\\nvar data = {&#x27;x0&#x27;: [], &#x27;y0&#x27;: [], &#x27;x1&#x27;: [], &#x27;y1&#x27;: []};\\nvar cdata = circle.data;\\nvar indices = cb_data.index[&#x27;1d&#x27;].indices;\\nfor (var i = 0; i &lt; indices.length; i++) {\\n    var ind0 = indices[i]\\n    for (var j = 0; j &lt; links[ind0].length; j++) {\\n        var ind1 = links[ind0][j];\\n        data[&#x27;x0&#x27;].push(cdata.x[ind0]);\\n        data[&#x27;y0&#x27;].push(cdata.y[ind0]);\\n        data[&#x27;x1&#x27;].push(cdata.x[ind1]);\\n        data[&#x27;y1&#x27;].push(cdata.y[ind1]);\\n    }\\n}\\nsegment.data = data;\\n"},"id":"24936","type":"CustomJS"},{"attributes":{"data_source":{"id":"24924","type":"ColumnDataSource"},"glyph":{"id":"24926","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"24927","type":"Segment"},"selection_glyph":null,"view":{"id":"24929","type":"CDSView"}},"id":"24928","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"24933","type":"Circle"},{"attributes":{},"id":"24941","type":"BasicTickFormatter"},{"attributes":{},"id":"24914","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"24937","type":"HoverTool"}]},"id":"24923","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x0":[],"x1":[],"y0":[],"y1":[]},"selected":{"id":"24944","type":"Selection"},"selection_policy":{"id":"24945","type":"UnionRenderers"}},"id":"24924","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"24932","type":"Circle"},{"attributes":{"below":[{"id":"24913","type":"LinearAxis"}],"center":[{"id":"24917","type":"Grid"},{"id":"24922","type":"Grid"}],"left":[{"id":"24918","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"24928","type":"GlyphRenderer"},{"id":"24934","type":"GlyphRenderer"}],"title":{"id":"24903","type":"Title"},"toolbar":{"id":"24923","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"24905","type":"DataRange1d"},"x_scale":{"id":"24909","type":"LinearScale"},"y_range":{"id":"24907","type":"DataRange1d"},"y_scale":{"id":"24911","type":"LinearScale"}},"id":"24902","subtype":"Figure","type":"Plot"},{"attributes":{"ticker":{"id":"24914","type":"BasicTicker"}},"id":"24917","type":"Grid"},{"attributes":{"text":"Hover over points"},"id":"24903","type":"Title"},{"attributes":{"data_source":{"id":"24930","type":"ColumnDataSource"},"glyph":{"id":"24931","type":"Circle"},"hover_glyph":{"id":"24933","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"24932","type":"Circle"},"selection_glyph":null,"view":{"id":"24935","type":"CDSView"}},"id":"24934","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"24941","type":"BasicTickFormatter"},"ticker":{"id":"24919","type":"BasicTicker"}},"id":"24918","type":"LinearAxis"},{"attributes":{"source":{"id":"24930","type":"ColumnDataSource"}},"id":"24935","type":"CDSView"},{"attributes":{},"id":"24943","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"24905","type":"DataRange1d"},{"attributes":{},"id":"24945","type":"UnionRenderers"},{"attributes":{},"id":"24911","type":"LinearScale"},{"attributes":{"formatter":{"id":"24943","type":"BasicTickFormatter"},"ticker":{"id":"24914","type":"BasicTicker"}},"id":"24913","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[2,3,5,6,8,7],"y":[6,4,3,8,7,5]},"selected":{"id":"24946","type":"Selection"},"selection_policy":{"id":"24947","type":"UnionRenderers"}},"id":"24930","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"olive"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"24926","type":"Segment"}],"root_ids":["24902"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"bf99e215-cb52-4b8d-9a5d-40326fac1083","roots":{"24902":"996706e0-3173-4576-bca4-d4f41639853e"}}];
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
        
        
        }
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