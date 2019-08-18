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
      };var element = document.getElementById("ffd340e2-80e0-415e-aa4b-d5ceb7f31037");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ffd340e2-80e0-415e-aa4b-d5ceb7f31037' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"cc73e41a-7615-4708-a6fc-8d54b7c0ecc8":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"f4165165-061e-42f4-91fb-91fae42d0ac1","type":"Plot"},"ticker":{"id":"54dedec4-5014-4397-bf9b-6cc1eadb5cc3","type":"BasicTicker"}},"id":"afedfeca-d785-4678-b75a-bd4cc20806e1","type":"Grid"},{"attributes":{},"id":"ada5772f-7399-47a2-8280-0dd9faa6c896","type":"UnionRenderers"},{"attributes":{},"id":"1ec8fcf1-cbed-47dd-b4e4-cb0abf673b6d","type":"LinearScale"},{"attributes":{},"id":"58ee0488-7f0d-45e3-9887-fb528c52b133","type":"LinearScale"},{"attributes":{},"id":"d4412de5-4ba2-4cf4-9527-15beb7b81911","type":"BasicTicker"},{"attributes":{},"id":"1badaed5-f209-4069-9678-7c6ae044bb4c","type":"Selection"},{"attributes":{"callback":null},"id":"fdc78851-0bfd-4db7-9289-cd95fbd4f3a6","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7fc97f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"df7beb56-e090-48bf-9b2c-13cb65bd5459","type":"SquareCross"},{"attributes":{"formatter":{"id":"062b8b39-435e-4acd-895c-35b7ffcc4ea0","type":"BasicTickFormatter"},"plot":{"id":"f4165165-061e-42f4-91fb-91fae42d0ac1","type":"Plot"},"ticker":{"id":"54dedec4-5014-4397-bf9b-6cc1eadb5cc3","type":"BasicTicker"}},"id":"4a231d72-e7d3-4db4-bcfb-efe0dd0a4645","type":"LinearAxis"},{"attributes":{"plot":{"id":"f4165165-061e-42f4-91fb-91fae42d0ac1","type":"Plot"},"ticker":{"id":"d4412de5-4ba2-4cf4-9527-15beb7b81911","type":"BasicTicker"}},"id":"013f8d2a-98cb-4126-8e03-37a212e09b2f","type":"Grid"},{"attributes":{"formatter":{"id":"872148f2-44f0-46ff-a7f8-6bcfac4efeb5","type":"BasicTickFormatter"},"plot":{"id":"f4165165-061e-42f4-91fb-91fae42d0ac1","type":"Plot"},"ticker":{"id":"d4412de5-4ba2-4cf4-9527-15beb7b81911","type":"BasicTicker"}},"id":"83cfcc11-eae8-4fe3-a830-fc6c59e2036d","type":"LinearAxis"},{"attributes":{"callback":null},"id":"491f1436-130a-4bbd-be61-343047974e1f","type":"DataRange1d"},{"attributes":{},"id":"872148f2-44f0-46ff-a7f8-6bcfac4efeb5","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"cc176f6d-457f-4686-9c8e-93b7ae5673e4","type":"ColumnDataSource"},"glyph":{"id":"df7beb56-e090-48bf-9b2c-13cb65bd5459","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"0c94080d-f9f2-4b70-a6b1-34b71ec428c2","type":"CDSView"}},"id":"487caa43-7f38-4baf-8146-86b7d4dd53c7","type":"GlyphRenderer"},{"attributes":{},"id":"54dedec4-5014-4397-bf9b-6cc1eadb5cc3","type":"BasicTicker"},{"attributes":{"below":[{"id":"83cfcc11-eae8-4fe3-a830-fc6c59e2036d","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"4a231d72-e7d3-4db4-bcfb-efe0dd0a4645","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"487caa43-7f38-4baf-8146-86b7d4dd53c7","type":"GlyphRenderer"},{"id":"83cfcc11-eae8-4fe3-a830-fc6c59e2036d","type":"LinearAxis"},{"id":"4a231d72-e7d3-4db4-bcfb-efe0dd0a4645","type":"LinearAxis"},{"id":"013f8d2a-98cb-4126-8e03-37a212e09b2f","type":"Grid"},{"id":"afedfeca-d785-4678-b75a-bd4cc20806e1","type":"Grid"}],"title":null,"toolbar":{"id":"babf37ab-cfbc-4209-a01f-7501c1467a82","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"491f1436-130a-4bbd-be61-343047974e1f","type":"DataRange1d"},"x_scale":{"id":"1ec8fcf1-cbed-47dd-b4e4-cb0abf673b6d","type":"LinearScale"},"y_range":{"id":"fdc78851-0bfd-4db7-9289-cd95fbd4f3a6","type":"DataRange1d"},"y_scale":{"id":"58ee0488-7f0d-45e3-9887-fb528c52b133","type":"LinearScale"}},"id":"f4165165-061e-42f4-91fb-91fae42d0ac1","type":"Plot"},{"attributes":{"source":{"id":"cc176f6d-457f-4686-9c8e-93b7ae5673e4","type":"ColumnDataSource"}},"id":"0c94080d-f9f2-4b70-a6b1-34b71ec428c2","type":"CDSView"},{"attributes":{},"id":"062b8b39-435e-4acd-895c-35b7ffcc4ea0","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"babf37ab-cfbc-4209-a01f-7501c1467a82","type":"Toolbar"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"1badaed5-f209-4069-9678-7c6ae044bb4c","type":"Selection"},"selection_policy":{"id":"ada5772f-7399-47a2-8280-0dd9faa6c896","type":"UnionRenderers"}},"id":"cc176f6d-457f-4686-9c8e-93b7ae5673e4","type":"ColumnDataSource"}],"root_ids":["f4165165-061e-42f4-91fb-91fae42d0ac1"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"cc73e41a-7615-4708-a6fc-8d54b7c0ecc8","roots":{"f4165165-061e-42f4-91fb-91fae42d0ac1":"ffd340e2-80e0-415e-aa4b-d5ceb7f31037"}}];
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