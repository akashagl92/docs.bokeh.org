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
      };var element = document.getElementById("9e054927-957f-4d3e-8170-3512a9de74a7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9e054927-957f-4d3e-8170-3512a9de74a7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"6163350c-26d4-4746-be2c-efabbc425876":{"roots":{"references":[{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xm01":{"__ndarray__":"zczMzMzMAMCamZmZmZn5v5qZmZmZmfG/MzMzMzMz47+amZmZmZm5v5qZmZmZmdk/zczMzMzM7D9mZmZmZmb2P2ZmZmZmZv4/","dtype":"float64","shape":[9]},"xp01":{"__ndarray__":"ZmZmZmZm/r9mZmZmZmb2v83MzMzMzOy/mpmZmZmZ2b+amZmZmZm5PzMzMzMzM+M/mpmZmZmZ8T+amZmZmZn5P83MzMzMzABA","dtype":"float64","shape":[9]},"xp02":{"__ndarray__":"mpmZmZmZ+b+amZmZmZnxvzMzMzMzM+O/mJmZmZmZub+amZmZmZnZP83MzMzMzOw/ZmZmZmZm9j9mZmZmZmb+PzMzMzMzMwNA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"ym01":{"__ndarray__":"ZmZmZmZmDkBmZmZmZmYAQJqZmZmZmek/mJmZmZmZqT+amZmZmZnJv5iZmZmZmak/mpmZmZmZ6T9mZmZmZmYAQGZmZmZmZg5A","dtype":"float64","shape":[9]},"yp01":{"__ndarray__":"zczMzMzMEECamZmZmZkDQDMzMzMzM/M/zczMzMzM3D+amZmZmZnJP83MzMzMzNw/MzMzMzMz8z+amZmZmZkDQM3MzMzMzBBA","dtype":"float64","shape":[9]}},"selected":{"id":"27d8cc30-d872-49fd-9032-53be0edb51af","type":"Selection"},"selection_policy":{"id":"40668797-ad44-4cb0-85cc-65c39bd6a28d","type":"UnionRenderers"}},"id":"5c8d61ee-1052-49e9-b9d1-ea0c47fd213b","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"69b84d41-914f-4400-bb4f-ea2e22a7a17d","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"4bf300f3-dd4d-459b-a8b5-e036c523649d","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"e0f1b3b9-8fef-436e-b178-9c101079f1d5","type":"GlyphRenderer"},{"id":"69b84d41-914f-4400-bb4f-ea2e22a7a17d","type":"LinearAxis"},{"id":"4bf300f3-dd4d-459b-a8b5-e036c523649d","type":"LinearAxis"},{"id":"1300dc3d-d632-4112-a49c-e32c8454f12e","type":"Grid"},{"id":"ba5470ea-3e16-4c85-8403-c933229e9339","type":"Grid"}],"title":null,"toolbar":{"id":"484a3da5-900c-403f-9fc3-475e8269aa3c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9e13b64c-bdbe-4b5a-9309-66fab59c186f","type":"DataRange1d"},"x_scale":{"id":"9936475a-81d5-4ab3-a4f4-c52936c89e34","type":"LinearScale"},"y_range":{"id":"44fb89d7-9bd3-4eee-bbaf-7a044bd26ace","type":"DataRange1d"},"y_scale":{"id":"e1d518f9-cad3-4f14-b5db-10c2dd4bfac7","type":"LinearScale"}},"id":"b34d53ee-329d-483c-b1a9-c3e518007d4e","type":"Plot"},{"attributes":{"callback":null},"id":"9e13b64c-bdbe-4b5a-9309-66fab59c186f","type":"DataRange1d"},{"attributes":{"source":{"id":"5c8d61ee-1052-49e9-b9d1-ea0c47fd213b","type":"ColumnDataSource"}},"id":"f6a7381b-7318-4d2f-bf50-445cb1232fcb","type":"CDSView"},{"attributes":{"formatter":{"id":"1a391afe-5198-4658-bbb5-628b428c8334","type":"BasicTickFormatter"},"plot":{"id":"b34d53ee-329d-483c-b1a9-c3e518007d4e","type":"Plot"},"ticker":{"id":"edaea3b7-15bc-4887-9edf-326c5eb0b9ee","type":"BasicTicker"}},"id":"4bf300f3-dd4d-459b-a8b5-e036c523649d","type":"LinearAxis"},{"attributes":{"formatter":{"id":"1324a01a-c4ad-477d-ac9b-4561f3827e83","type":"BasicTickFormatter"},"plot":{"id":"b34d53ee-329d-483c-b1a9-c3e518007d4e","type":"Plot"},"ticker":{"id":"a6cabfae-c75a-46f5-9110-b093839842e4","type":"BasicTicker"}},"id":"69b84d41-914f-4400-bb4f-ea2e22a7a17d","type":"LinearAxis"},{"attributes":{},"id":"40668797-ad44-4cb0-85cc-65c39bd6a28d","type":"UnionRenderers"},{"attributes":{},"id":"1a391afe-5198-4658-bbb5-628b428c8334","type":"BasicTickFormatter"},{"attributes":{},"id":"1324a01a-c4ad-477d-ac9b-4561f3827e83","type":"BasicTickFormatter"},{"attributes":{},"id":"9936475a-81d5-4ab3-a4f4-c52936c89e34","type":"LinearScale"},{"attributes":{"callback":null},"id":"44fb89d7-9bd3-4eee-bbaf-7a044bd26ace","type":"DataRange1d"},{"attributes":{},"id":"a6cabfae-c75a-46f5-9110-b093839842e4","type":"BasicTicker"},{"attributes":{},"id":"27d8cc30-d872-49fd-9032-53be0edb51af","type":"Selection"},{"attributes":{},"id":"e1d518f9-cad3-4f14-b5db-10c2dd4bfac7","type":"LinearScale"},{"attributes":{"plot":{"id":"b34d53ee-329d-483c-b1a9-c3e518007d4e","type":"Plot"},"ticker":{"id":"a6cabfae-c75a-46f5-9110-b093839842e4","type":"BasicTicker"}},"id":"1300dc3d-d632-4112-a49c-e32c8454f12e","type":"Grid"},{"attributes":{},"id":"edaea3b7-15bc-4887-9edf-326c5eb0b9ee","type":"BasicTicker"},{"attributes":{"data_source":{"id":"5c8d61ee-1052-49e9-b9d1-ea0c47fd213b","type":"ColumnDataSource"},"glyph":{"id":"fe94dd91-b471-4afa-bcce-01c54cbd05e9","type":"Bezier"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"f6a7381b-7318-4d2f-bf50-445cb1232fcb","type":"CDSView"}},"id":"e0f1b3b9-8fef-436e-b178-9c101079f1d5","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"b34d53ee-329d-483c-b1a9-c3e518007d4e","type":"Plot"},"ticker":{"id":"edaea3b7-15bc-4887-9edf-326c5eb0b9ee","type":"BasicTicker"}},"id":"ba5470ea-3e16-4c85-8403-c933229e9339","type":"Grid"},{"attributes":{"cx0":{"field":"xp01"},"cx1":{"field":"xm01"},"cy0":{"field":"yp01"},"cy1":{"field":"ym01"},"line_color":{"value":"#d95f02"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"fe94dd91-b471-4afa-bcce-01c54cbd05e9","type":"Bezier"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"484a3da5-900c-403f-9fc3-475e8269aa3c","type":"Toolbar"}],"root_ids":["b34d53ee-329d-483c-b1a9-c3e518007d4e"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"6163350c-26d4-4746-be2c-efabbc425876","roots":{"b34d53ee-329d-483c-b1a9-c3e518007d4e":"9e054927-957f-4d3e-8170-3512a9de74a7"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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