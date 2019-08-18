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
      };var element = document.getElementById("8624770b-7ab7-4b7e-8898-473965cce9e1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8624770b-7ab7-4b7e-8898-473965cce9e1' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"8e6bea7f-022f-4f50-b3cf-027417d86bb1":{"roots":{"references":[{"attributes":{"data_source":{"id":"4a269d8a-ca76-4c95-ae91-5028837c16ee","type":"ColumnDataSource"},"glyph":{"id":"1c94da47-07a3-470b-a27c-92348d9d5341","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"9af226e5-887e-45a3-a596-b813d08f120d","type":"CDSView"}},"id":"50507b49-c5d3-47f6-bafd-bab25e385b40","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"8b34bdab-15de-4b67-b071-20bb3cd91394","type":"Plot"},"ticker":{"id":"a59b8723-c7b4-4a4a-b6f6-fa23277f0c4e","type":"BasicTicker"}},"id":"e2a0f75c-a8f2-467f-9331-e611ae5c6f58","type":"Grid"},{"attributes":{},"id":"096e2a25-de7b-40f9-ac10-56542f1c90a2","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"4a269d8a-ca76-4c95-ae91-5028837c16ee","type":"ColumnDataSource"}},"id":"9af226e5-887e-45a3-a596-b813d08f120d","type":"CDSView"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#CAB2D6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1c94da47-07a3-470b-a27c-92348d9d5341","type":"Rect"},{"attributes":{"formatter":{"id":"096e2a25-de7b-40f9-ac10-56542f1c90a2","type":"BasicTickFormatter"},"plot":{"id":"8b34bdab-15de-4b67-b071-20bb3cd91394","type":"Plot"},"ticker":{"id":"a59b8723-c7b4-4a4a-b6f6-fa23277f0c4e","type":"BasicTicker"}},"id":"40c04b8a-cee5-4bfc-a51e-b1a7a9e445a3","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"8b34bdab-15de-4b67-b071-20bb3cd91394","type":"Plot"},"ticker":{"id":"1398efac-8f50-4f19-9397-c7e749bfadea","type":"BasicTicker"}},"id":"e1aa2190-76fe-44d2-a1e9-680315f40acf","type":"Grid"},{"attributes":{"below":[{"id":"40c04b8a-cee5-4bfc-a51e-b1a7a9e445a3","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"b221e158-ac7f-41b6-99ab-c95e8bf640b0","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"50507b49-c5d3-47f6-bafd-bab25e385b40","type":"GlyphRenderer"},{"id":"40c04b8a-cee5-4bfc-a51e-b1a7a9e445a3","type":"LinearAxis"},{"id":"b221e158-ac7f-41b6-99ab-c95e8bf640b0","type":"LinearAxis"},{"id":"e2a0f75c-a8f2-467f-9331-e611ae5c6f58","type":"Grid"},{"id":"e1aa2190-76fe-44d2-a1e9-680315f40acf","type":"Grid"}],"title":null,"toolbar":{"id":"315ba8fc-f662-4959-ae2d-f8f5a1aaf1a4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"be78482e-5457-422b-bdcf-a1fc853be38a","type":"DataRange1d"},"x_scale":{"id":"861fc923-29e2-4434-9257-b3fa4a43b3e6","type":"LinearScale"},"y_range":{"id":"62d059d8-e19f-4962-a161-7d709ff0aea0","type":"DataRange1d"},"y_scale":{"id":"e80007ae-fad8-410c-857f-4cc45e1902d7","type":"LinearScale"}},"id":"8b34bdab-15de-4b67-b071-20bb3cd91394","type":"Plot"},{"attributes":{},"id":"e80007ae-fad8-410c-857f-4cc45e1902d7","type":"LinearScale"},{"attributes":{"formatter":{"id":"0f6784b6-3230-4bad-9c57-13c9683fcd45","type":"BasicTickFormatter"},"plot":{"id":"8b34bdab-15de-4b67-b071-20bb3cd91394","type":"Plot"},"ticker":{"id":"1398efac-8f50-4f19-9397-c7e749bfadea","type":"BasicTicker"}},"id":"b221e158-ac7f-41b6-99ab-c95e8bf640b0","type":"LinearAxis"},{"attributes":{"callback":null},"id":"62d059d8-e19f-4962-a161-7d709ff0aea0","type":"DataRange1d"},{"attributes":{},"id":"0f6784b6-3230-4bad-9c57-13c9683fcd45","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y","w","h"],"data":{"h":{"__ndarray__":"AAAAAAAA4D9mZmZmZmbaP2ZmZmZmZtY/AAAAAAAA1D8zMzMzMzPTPwAAAAAAANQ/ZmZmZmZm1j9mZmZmZmbaPwAAAAAAAOA/","dtype":"float64","shape":[9]},"w":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"4a269d8a-ca76-4c95-ae91-5028837c16ee","type":"ColumnDataSource"},{"attributes":{},"id":"1398efac-8f50-4f19-9397-c7e749bfadea","type":"BasicTicker"},{"attributes":{},"id":"a59b8723-c7b4-4a4a-b6f6-fa23277f0c4e","type":"BasicTicker"},{"attributes":{"callback":null},"id":"be78482e-5457-422b-bdcf-a1fc853be38a","type":"DataRange1d"},{"attributes":{},"id":"861fc923-29e2-4434-9257-b3fa4a43b3e6","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"315ba8fc-f662-4959-ae2d-f8f5a1aaf1a4","type":"Toolbar"}],"root_ids":["8b34bdab-15de-4b67-b071-20bb3cd91394"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"8e6bea7f-022f-4f50-b3cf-027417d86bb1","elementid":"8624770b-7ab7-4b7e-8898-473965cce9e1","modelid":"8b34bdab-15de-4b67-b071-20bb3cd91394"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
