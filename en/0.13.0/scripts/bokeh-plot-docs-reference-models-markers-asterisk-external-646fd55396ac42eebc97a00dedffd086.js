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
      };var element = document.getElementById("c8994b80-9ac4-4f08-aba1-c01863b001e9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c8994b80-9ac4-4f08-aba1-c01863b001e9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b56c875a-90a8-43de-9088-356cc0c69318":{"roots":{"references":[{"attributes":{"below":[{"id":"d6dccbc5-c9c8-428f-b15e-b224996e8da7","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"a13b9a7c-9fcb-43ce-8e79-54800afd7a74","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"0bfaf4ee-d3aa-415f-8a48-1c6837cd5ab5","type":"GlyphRenderer"},{"id":"d6dccbc5-c9c8-428f-b15e-b224996e8da7","type":"LinearAxis"},{"id":"a13b9a7c-9fcb-43ce-8e79-54800afd7a74","type":"LinearAxis"},{"id":"bf0454b1-8541-4a3c-b9cb-439d25b60529","type":"Grid"},{"id":"642c64f1-bb4b-4a0f-b3a6-973096639fc7","type":"Grid"}],"title":null,"toolbar":{"id":"fc67dec7-962c-4b7c-8fd7-49de6496d6fe","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7be81522-745b-4129-ae36-fc8348629973","type":"DataRange1d"},"x_scale":{"id":"868fa6ed-c06a-494b-939b-52dbfdda75fc","type":"LinearScale"},"y_range":{"id":"141ab8f3-9d2e-4bd5-b4b5-ac8ee1bf3e57","type":"DataRange1d"},"y_scale":{"id":"833ae193-fe23-4997-899e-0f75d0b153db","type":"LinearScale"}},"id":"af02dd8a-a413-4a61-8da0-2edcaba71e2a","type":"Plot"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"f80ac1c9-3b60-4417-b4a0-44b112cbd24a","type":"Selection"},"selection_policy":{"id":"c10bdcda-43c8-4de3-a33e-d95c89835e21","type":"UnionRenderers"}},"id":"84f7c903-ae8c-4fb6-8a97-967cb91c21ba","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"f118e015-93aa-49b5-be49-512fb8d3e381","type":"BasicTickFormatter"},"plot":{"id":"af02dd8a-a413-4a61-8da0-2edcaba71e2a","type":"Plot"},"ticker":{"id":"15b44fb0-416c-4703-93b3-c28fb2e4896c","type":"BasicTicker"}},"id":"d6dccbc5-c9c8-428f-b15e-b224996e8da7","type":"LinearAxis"},{"attributes":{},"id":"b1a7a276-25c9-4cf9-8079-1bbc2fedd6f1","type":"BasicTicker"},{"attributes":{},"id":"f118e015-93aa-49b5-be49-512fb8d3e381","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"fc67dec7-962c-4b7c-8fd7-49de6496d6fe","type":"Toolbar"},{"attributes":{"callback":null},"id":"7be81522-745b-4129-ae36-fc8348629973","type":"DataRange1d"},{"attributes":{"source":{"id":"84f7c903-ae8c-4fb6-8a97-967cb91c21ba","type":"ColumnDataSource"}},"id":"8bdba259-502d-404c-b784-a64fe2fc4584","type":"CDSView"},{"attributes":{"plot":{"id":"af02dd8a-a413-4a61-8da0-2edcaba71e2a","type":"Plot"},"ticker":{"id":"15b44fb0-416c-4703-93b3-c28fb2e4896c","type":"BasicTicker"}},"id":"bf0454b1-8541-4a3c-b9cb-439d25b60529","type":"Grid"},{"attributes":{"formatter":{"id":"77b8c0cd-3465-42c9-a45b-f79e0b460874","type":"BasicTickFormatter"},"plot":{"id":"af02dd8a-a413-4a61-8da0-2edcaba71e2a","type":"Plot"},"ticker":{"id":"b1a7a276-25c9-4cf9-8079-1bbc2fedd6f1","type":"BasicTicker"}},"id":"a13b9a7c-9fcb-43ce-8e79-54800afd7a74","type":"LinearAxis"},{"attributes":{},"id":"868fa6ed-c06a-494b-939b-52dbfdda75fc","type":"LinearScale"},{"attributes":{"callback":null},"id":"141ab8f3-9d2e-4bd5-b4b5-ac8ee1bf3e57","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#f0027f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8c8d1018-9add-4956-94a8-28dcf90bfdb3","type":"Asterisk"},{"attributes":{"data_source":{"id":"84f7c903-ae8c-4fb6-8a97-967cb91c21ba","type":"ColumnDataSource"},"glyph":{"id":"8c8d1018-9add-4956-94a8-28dcf90bfdb3","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"8bdba259-502d-404c-b784-a64fe2fc4584","type":"CDSView"}},"id":"0bfaf4ee-d3aa-415f-8a48-1c6837cd5ab5","type":"GlyphRenderer"},{"attributes":{},"id":"c10bdcda-43c8-4de3-a33e-d95c89835e21","type":"UnionRenderers"},{"attributes":{},"id":"77b8c0cd-3465-42c9-a45b-f79e0b460874","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"af02dd8a-a413-4a61-8da0-2edcaba71e2a","type":"Plot"},"ticker":{"id":"b1a7a276-25c9-4cf9-8079-1bbc2fedd6f1","type":"BasicTicker"}},"id":"642c64f1-bb4b-4a0f-b3a6-973096639fc7","type":"Grid"},{"attributes":{},"id":"833ae193-fe23-4997-899e-0f75d0b153db","type":"LinearScale"},{"attributes":{},"id":"f80ac1c9-3b60-4417-b4a0-44b112cbd24a","type":"Selection"},{"attributes":{},"id":"15b44fb0-416c-4703-93b3-c28fb2e4896c","type":"BasicTicker"}],"root_ids":["af02dd8a-a413-4a61-8da0-2edcaba71e2a"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"b56c875a-90a8-43de-9088-356cc0c69318","roots":{"af02dd8a-a413-4a61-8da0-2edcaba71e2a":"c8994b80-9ac4-4f08-aba1-c01863b001e9"}}];
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