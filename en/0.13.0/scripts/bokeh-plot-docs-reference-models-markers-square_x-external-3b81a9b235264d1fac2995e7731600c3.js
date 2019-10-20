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
      };var element = document.getElementById("faa936b8-ae48-4049-a3bc-fdad4ce3e823");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'faa936b8-ae48-4049-a3bc-fdad4ce3e823' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"75b66372-b584-44b6-88dd-097ac68c9d89":{"roots":{"references":[{"attributes":{"source":{"id":"fee1e933-24fb-4086-81a7-7867f86c956e","type":"ColumnDataSource"}},"id":"b0b8b2cd-563e-4e0e-b2d1-3d97b845cb52","type":"CDSView"},{"attributes":{"callback":null},"id":"50237836-d834-4370-94bc-e363ef9294be","type":"DataRange1d"},{"attributes":{"formatter":{"id":"f1099b85-18ae-4023-ac69-35a1bdc43816","type":"BasicTickFormatter"},"plot":{"id":"2ae4c2fb-5166-4187-b48c-f7555b220b05","type":"Plot"},"ticker":{"id":"4c78609f-bf1f-4c74-ae0e-503fd3c5536e","type":"BasicTicker"}},"id":"5b15421b-d0dd-4aba-8148-28930e85d2fd","type":"LinearAxis"},{"attributes":{},"id":"f1099b85-18ae-4023-ac69-35a1bdc43816","type":"BasicTickFormatter"},{"attributes":{},"id":"351b3d9d-c7ad-458e-82c6-13f3ff420299","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"fee1e933-24fb-4086-81a7-7867f86c956e","type":"ColumnDataSource"},"glyph":{"id":"0edf1090-8398-4e8d-a6f7-af9a0b7fd4f7","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"b0b8b2cd-563e-4e0e-b2d1-3d97b845cb52","type":"CDSView"}},"id":"5716d230-1f1b-4830-ba5c-5469085ff902","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"2ae4c2fb-5166-4187-b48c-f7555b220b05","type":"Plot"},"ticker":{"id":"4c78609f-bf1f-4c74-ae0e-503fd3c5536e","type":"BasicTicker"}},"id":"b8d28479-16e3-42e9-9122-aa149fea952b","type":"Grid"},{"attributes":{"callback":null},"id":"581863cb-96c3-40f0-b6dd-62a38e865ca2","type":"DataRange1d"},{"attributes":{},"id":"84143701-57c6-46c0-9ec5-ecf7f88e45f1","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"f27f3619-c80f-41a3-b4f2-53a30b324fa6","type":"Toolbar"},{"attributes":{},"id":"2165892d-7e10-4f59-889b-0664f4d50a82","type":"BasicTicker"},{"attributes":{},"id":"82a45d5d-b61d-42df-a0ba-8801767aaf02","type":"LinearScale"},{"attributes":{"plot":{"id":"2ae4c2fb-5166-4187-b48c-f7555b220b05","type":"Plot"},"ticker":{"id":"2165892d-7e10-4f59-889b-0664f4d50a82","type":"BasicTicker"}},"id":"86db8ba9-98e4-46c3-a5ec-736f4fea346b","type":"Grid"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"84143701-57c6-46c0-9ec5-ecf7f88e45f1","type":"Selection"},"selection_policy":{"id":"a19be6dc-e2f0-4014-a068-8826bef3e40a","type":"UnionRenderers"}},"id":"fee1e933-24fb-4086-81a7-7867f86c956e","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"351b3d9d-c7ad-458e-82c6-13f3ff420299","type":"BasicTickFormatter"},"plot":{"id":"2ae4c2fb-5166-4187-b48c-f7555b220b05","type":"Plot"},"ticker":{"id":"2165892d-7e10-4f59-889b-0664f4d50a82","type":"BasicTicker"}},"id":"faca5103-cc10-41ab-ac97-4fc12b92743b","type":"LinearAxis"},{"attributes":{},"id":"4c78609f-bf1f-4c74-ae0e-503fd3c5536e","type":"BasicTicker"},{"attributes":{},"id":"7b341b3e-c684-41a8-bf3a-f51693247bed","type":"LinearScale"},{"attributes":{"below":[{"id":"faca5103-cc10-41ab-ac97-4fc12b92743b","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"5b15421b-d0dd-4aba-8148-28930e85d2fd","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"5716d230-1f1b-4830-ba5c-5469085ff902","type":"GlyphRenderer"},{"id":"faca5103-cc10-41ab-ac97-4fc12b92743b","type":"LinearAxis"},{"id":"5b15421b-d0dd-4aba-8148-28930e85d2fd","type":"LinearAxis"},{"id":"86db8ba9-98e4-46c3-a5ec-736f4fea346b","type":"Grid"},{"id":"b8d28479-16e3-42e9-9122-aa149fea952b","type":"Grid"}],"title":null,"toolbar":{"id":"f27f3619-c80f-41a3-b4f2-53a30b324fa6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"581863cb-96c3-40f0-b6dd-62a38e865ca2","type":"DataRange1d"},"x_scale":{"id":"7b341b3e-c684-41a8-bf3a-f51693247bed","type":"LinearScale"},"y_range":{"id":"50237836-d834-4370-94bc-e363ef9294be","type":"DataRange1d"},"y_scale":{"id":"82a45d5d-b61d-42df-a0ba-8801767aaf02","type":"LinearScale"}},"id":"2ae4c2fb-5166-4187-b48c-f7555b220b05","type":"Plot"},{"attributes":{},"id":"a19be6dc-e2f0-4014-a068-8826bef3e40a","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0edf1090-8398-4e8d-a6f7-af9a0b7fd4f7","type":"SquareX"}],"root_ids":["2ae4c2fb-5166-4187-b48c-f7555b220b05"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"75b66372-b584-44b6-88dd-097ac68c9d89","roots":{"2ae4c2fb-5166-4187-b48c-f7555b220b05":"faa936b8-ae48-4049-a3bc-fdad4ce3e823"}}];
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