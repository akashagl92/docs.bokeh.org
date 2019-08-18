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
      };var element = document.getElementById("4467f1a7-6a32-44a0-aa3e-cc0e57f81c93");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4467f1a7-6a32-44a0-aa3e-cc0e57f81c93' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b0a44698-9748-403c-b3bb-4f74c9302e21":{"roots":{"references":[{"attributes":{"source":{"id":"4cb5be33-7a1c-402d-8fad-daff89248558","type":"ColumnDataSource"}},"id":"2ddcda20-a7f9-4a37-8aa1-7da158640e52","type":"CDSView"},{"attributes":{"callback":null},"id":"6ba6edc4-4f26-4d3a-9257-dfb32ee9dba9","type":"DataRange1d"},{"attributes":{},"id":"73bc440c-c6bb-4315-a833-0765f86401fc","type":"BasicTicker"},{"attributes":{"callback":null},"id":"791562fd-e67c-4432-a61c-ec774944abfa","type":"DataRange1d"},{"attributes":{},"id":"a3396723-368d-4b1a-9bab-b2d48be5c1e8","type":"Selection"},{"attributes":{"line_color":{"value":"#f4a582"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xm01"},"y0":{"field":"y"},"y1":{"field":"ym01"}},"id":"cbfb3524-564f-4d4b-92eb-ec738e2ba5e6","type":"Segment"},{"attributes":{"formatter":{"id":"af6da106-6ecb-4ac3-b0cf-3235ac5e6d05","type":"BasicTickFormatter"},"plot":{"id":"a00e664a-3fb0-4b89-a235-f5fa5744d7c3","type":"Plot"},"ticker":{"id":"73bc440c-c6bb-4315-a833-0765f86401fc","type":"BasicTicker"}},"id":"51218b18-793d-452a-97ff-903e80b847fd","type":"LinearAxis"},{"attributes":{},"id":"d4d0dd81-758e-4023-87b4-4bcf94de15b5","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"d695207f-1169-484d-b33a-a55055612e92","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"a00e664a-3fb0-4b89-a235-f5fa5744d7c3","type":"Plot"},"ticker":{"id":"73bc440c-c6bb-4315-a833-0765f86401fc","type":"BasicTicker"}},"id":"3356e5f0-51f8-487a-b5b7-8d5a7c7821eb","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xm01":{"__ndarray__":"zMzMzMzM7L+amZmZmZnrvzQzMzMzM+O/AAAAAAAAyL8zMzMzMzPTPzMzMzMzM+k/MzMzMzMz8z9nZmZmZmb3PwAAAAAAAPg/","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"ym01":{"__ndarray__":"ZmZmZmZmEEAzMzMzMzMEQGZmZmZmZvY/MzMzMzMz5z8AAAAAAADgPzMzMzMzM+c/ZmZmZmZm9j8zMzMzMzMEQGZmZmZmZhBA","dtype":"float64","shape":[9]}},"selected":{"id":"a3396723-368d-4b1a-9bab-b2d48be5c1e8","type":"Selection"},"selection_policy":{"id":"0dfbe92b-5be5-4847-965a-edcb19d6ffc5","type":"UnionRenderers"}},"id":"4cb5be33-7a1c-402d-8fad-daff89248558","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"bc777a2d-f7b3-44fb-a230-9abc262ac68d","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"51218b18-793d-452a-97ff-903e80b847fd","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"c1ae2d25-e7da-4e4e-9320-a85645699573","type":"GlyphRenderer"},{"id":"bc777a2d-f7b3-44fb-a230-9abc262ac68d","type":"LinearAxis"},{"id":"51218b18-793d-452a-97ff-903e80b847fd","type":"LinearAxis"},{"id":"010a9695-0cb2-4188-ad08-f25bb2d5104c","type":"Grid"},{"id":"3356e5f0-51f8-487a-b5b7-8d5a7c7821eb","type":"Grid"}],"title":null,"toolbar":{"id":"d695207f-1169-484d-b33a-a55055612e92","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"791562fd-e67c-4432-a61c-ec774944abfa","type":"DataRange1d"},"x_scale":{"id":"7c58c0ef-00c2-4dbf-888c-cb56a96d227b","type":"LinearScale"},"y_range":{"id":"6ba6edc4-4f26-4d3a-9257-dfb32ee9dba9","type":"DataRange1d"},"y_scale":{"id":"b6602275-1089-4299-8d5b-5ca031a694ea","type":"LinearScale"}},"id":"a00e664a-3fb0-4b89-a235-f5fa5744d7c3","type":"Plot"},{"attributes":{},"id":"7c58c0ef-00c2-4dbf-888c-cb56a96d227b","type":"LinearScale"},{"attributes":{},"id":"0dfbe92b-5be5-4847-965a-edcb19d6ffc5","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"4cb5be33-7a1c-402d-8fad-daff89248558","type":"ColumnDataSource"},"glyph":{"id":"cbfb3524-564f-4d4b-92eb-ec738e2ba5e6","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"2ddcda20-a7f9-4a37-8aa1-7da158640e52","type":"CDSView"}},"id":"c1ae2d25-e7da-4e4e-9320-a85645699573","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"d4d0dd81-758e-4023-87b4-4bcf94de15b5","type":"BasicTickFormatter"},"plot":{"id":"a00e664a-3fb0-4b89-a235-f5fa5744d7c3","type":"Plot"},"ticker":{"id":"af828308-fcc9-4b90-9d4f-22bf048c0a55","type":"BasicTicker"}},"id":"bc777a2d-f7b3-44fb-a230-9abc262ac68d","type":"LinearAxis"},{"attributes":{},"id":"af6da106-6ecb-4ac3-b0cf-3235ac5e6d05","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a00e664a-3fb0-4b89-a235-f5fa5744d7c3","type":"Plot"},"ticker":{"id":"af828308-fcc9-4b90-9d4f-22bf048c0a55","type":"BasicTicker"}},"id":"010a9695-0cb2-4188-ad08-f25bb2d5104c","type":"Grid"},{"attributes":{},"id":"b6602275-1089-4299-8d5b-5ca031a694ea","type":"LinearScale"},{"attributes":{},"id":"af828308-fcc9-4b90-9d4f-22bf048c0a55","type":"BasicTicker"}],"root_ids":["a00e664a-3fb0-4b89-a235-f5fa5744d7c3"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"b0a44698-9748-403c-b3bb-4f74c9302e21","roots":{"a00e664a-3fb0-4b89-a235-f5fa5744d7c3":"4467f1a7-6a32-44a0-aa3e-cc0e57f81c93"}}];
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