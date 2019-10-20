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
      };var element = document.getElementById("a86fd80f-2b4c-428c-ab5d-67d71a68ca10");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a86fd80f-2b4c-428c-ab5d-67d71a68ca10' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"dd645615-c8aa-434e-9521-e6e7ffe4e728":{"roots":{"references":[{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"olive"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"5415","type":"Segment"},{"attributes":{"source":{"id":"5413","type":"ColumnDataSource"}},"id":"5418","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[2,3,5,6,8,7],"y":[6,4,3,8,7,5]},"selected":{"id":"5435","type":"Selection"},"selection_policy":{"id":"5436","type":"UnionRenderers"}},"id":"5419","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"5392","subtype":"Figure","type":"Plot"},"ticker":{"id":"5408","type":"BasicTicker"}},"id":"5411","type":"Grid"},{"attributes":{"callback":null,"data":{"x0":[],"x1":[],"y0":[],"y1":[]},"selected":{"id":"5433","type":"Selection"},"selection_policy":{"id":"5434","type":"UnionRenderers"}},"id":"5413","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5413","type":"ColumnDataSource"},"glyph":{"id":"5415","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5416","type":"Segment"},"selection_glyph":null,"view":{"id":"5418","type":"CDSView"}},"id":"5417","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"5432","type":"BasicTickFormatter"},"plot":{"id":"5392","subtype":"Figure","type":"Plot"},"ticker":{"id":"5408","type":"BasicTicker"}},"id":"5407","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"5421","type":"Circle"},{"attributes":{},"id":"5435","type":"Selection"},{"attributes":{"callback":null},"id":"5396","type":"DataRange1d"},{"attributes":{},"id":"5436","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"5394","type":"DataRange1d"},{"attributes":{"data_source":{"id":"5419","type":"ColumnDataSource"},"glyph":{"id":"5420","type":"Circle"},"hover_glyph":{"id":"5422","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"5421","type":"Circle"},"selection_glyph":null,"view":{"id":"5424","type":"CDSView"}},"id":"5423","type":"GlyphRenderer"},{"attributes":{},"id":"5400","type":"LinearScale"},{"attributes":{"plot":{"id":"5392","subtype":"Figure","type":"Plot"},"ticker":{"id":"5403","type":"BasicTicker"}},"id":"5406","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"5416","type":"Segment"},{"attributes":{},"id":"5434","type":"UnionRenderers"},{"attributes":{},"id":"5403","type":"BasicTicker"},{"attributes":{"callback":{"id":"5425","type":"CustomJS"},"renderers":[{"id":"5423","type":"GlyphRenderer"}],"tooltips":null},"id":"5426","type":"HoverTool"},{"attributes":{"source":{"id":"5419","type":"ColumnDataSource"}},"id":"5424","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5426","type":"HoverTool"}]},"id":"5412","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"olive"},"line_alpha":{"value":0.4},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"5420","type":"Circle"},{"attributes":{"formatter":{"id":"5430","type":"BasicTickFormatter"},"plot":{"id":"5392","subtype":"Figure","type":"Plot"},"ticker":{"id":"5403","type":"BasicTicker"}},"id":"5402","type":"LinearAxis"},{"attributes":{},"id":"5432","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"5422","type":"Circle"},{"attributes":{},"id":"5430","type":"BasicTickFormatter"},{"attributes":{},"id":"5398","type":"LinearScale"},{"attributes":{"plot":null,"text":"Hover over points"},"id":"5391","type":"Title"},{"attributes":{},"id":"5433","type":"Selection"},{"attributes":{"args":{"circle":{"id":"5419","type":"ColumnDataSource"},"segment":{"id":"5413","type":"ColumnDataSource"}},"code":"\\nvar links = {0: [1, 2], 1: [0, 3, 4], 2: [0, 5], 3: [1, 4], 4: [1, 3], 5: [2, 3, 4]};\\nvar data = {&#x27;x0&#x27;: [], &#x27;y0&#x27;: [], &#x27;x1&#x27;: [], &#x27;y1&#x27;: []};\\nvar cdata = circle.data;\\nvar indices = cb_data.index[&#x27;1d&#x27;].indices;\\nfor (var i = 0; i &lt; indices.length; i++) {\\n    var ind0 = indices[i]\\n    for (var j = 0; j &lt; links[ind0].length; j++) {\\n        var ind1 = links[ind0][j];\\n        data[&#x27;x0&#x27;].push(cdata.x[ind0]);\\n        data[&#x27;y0&#x27;].push(cdata.y[ind0]);\\n        data[&#x27;x1&#x27;].push(cdata.x[ind1]);\\n        data[&#x27;y1&#x27;].push(cdata.y[ind1]);\\n    }\\n}\\nsegment.data = data;\\n"},"id":"5425","type":"CustomJS"},{"attributes":{"below":[{"id":"5402","type":"LinearAxis"}],"left":[{"id":"5407","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"5402","type":"LinearAxis"},{"id":"5406","type":"Grid"},{"id":"5407","type":"LinearAxis"},{"id":"5411","type":"Grid"},{"id":"5417","type":"GlyphRenderer"},{"id":"5423","type":"GlyphRenderer"}],"title":{"id":"5391","type":"Title"},"toolbar":{"id":"5412","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5394","type":"DataRange1d"},"x_scale":{"id":"5398","type":"LinearScale"},"y_range":{"id":"5396","type":"DataRange1d"},"y_scale":{"id":"5400","type":"LinearScale"}},"id":"5392","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5408","type":"BasicTicker"}],"root_ids":["5392"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"dd645615-c8aa-434e-9521-e6e7ffe4e728","roots":{"5392":"a86fd80f-2b4c-428c-ab5d-67d71a68ca10"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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