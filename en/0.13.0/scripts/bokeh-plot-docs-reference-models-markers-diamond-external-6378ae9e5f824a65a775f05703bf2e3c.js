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
      };var element = document.getElementById("52c912f9-943a-4364-b36e-73455a032187");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '52c912f9-943a-4364-b36e-73455a032187' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"dfae2bc8-6b12-4793-884b-df0ec8251004":{"roots":{"references":[{"attributes":{"plot":{"id":"7ac40b6c-68c4-4f68-add3-f0127a83d837","type":"Plot"},"ticker":{"id":"47cb8ff5-4e5c-4d7b-bafc-cf8bb59b830a","type":"BasicTicker"}},"id":"ed967eda-4d96-4e97-b2a9-e565090d8dc7","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"7ac40b6c-68c4-4f68-add3-f0127a83d837","type":"Plot"},"ticker":{"id":"7ba458ec-f835-42d8-9f12-b7bb38b7a892","type":"BasicTicker"}},"id":"d324b140-58e0-4ff6-8348-ee2546315809","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"f444a3ff-20bd-4a8b-a73d-28afa58947af","type":"Toolbar"},{"attributes":{"source":{"id":"4cc49654-dd72-4f4b-904a-60e5acd01026","type":"ColumnDataSource"}},"id":"931af298-540b-415c-b54d-8c7f42ce2bc9","type":"CDSView"},{"attributes":{},"id":"1afa4ab7-9fa0-4db4-9b95-cd2b0f6a787f","type":"LinearScale"},{"attributes":{},"id":"95b9b13b-7f23-478e-852f-a8eb69441540","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"95b9b13b-7f23-478e-852f-a8eb69441540","type":"BasicTickFormatter"},"plot":{"id":"7ac40b6c-68c4-4f68-add3-f0127a83d837","type":"Plot"},"ticker":{"id":"47cb8ff5-4e5c-4d7b-bafc-cf8bb59b830a","type":"BasicTicker"}},"id":"0f2d3487-ef49-4bfb-bd19-0ddf7a9315ec","type":"LinearAxis"},{"attributes":{},"id":"85fcec62-2a5f-4a90-8fd6-f6957d50f67f","type":"BasicTickFormatter"},{"attributes":{},"id":"e38a82fa-16b9-4f6f-9d32-1ec7f7c6e565","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#1c9099"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a09bbb81-f89e-4e86-bd2d-f2d47789f136","type":"Diamond"},{"attributes":{},"id":"ab775e53-35e8-4137-8db9-2744ba474bfe","type":"LinearScale"},{"attributes":{"data_source":{"id":"4cc49654-dd72-4f4b-904a-60e5acd01026","type":"ColumnDataSource"},"glyph":{"id":"a09bbb81-f89e-4e86-bd2d-f2d47789f136","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"931af298-540b-415c-b54d-8c7f42ce2bc9","type":"CDSView"}},"id":"d7113244-1db8-4cb3-b418-2916ac6e43f2","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"9283c022-8374-436e-9f92-51606de61c62","type":"DataRange1d"},{"attributes":{"formatter":{"id":"85fcec62-2a5f-4a90-8fd6-f6957d50f67f","type":"BasicTickFormatter"},"plot":{"id":"7ac40b6c-68c4-4f68-add3-f0127a83d837","type":"Plot"},"ticker":{"id":"7ba458ec-f835-42d8-9f12-b7bb38b7a892","type":"BasicTicker"}},"id":"fb70c846-3994-45cf-a2a5-3f5a58bd27b4","type":"LinearAxis"},{"attributes":{"callback":null},"id":"5df22bcb-5b34-4035-a65b-bea8133010ef","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"6dad7ff4-83bf-418a-9dc2-63be02175ab0","type":"Selection"},"selection_policy":{"id":"e38a82fa-16b9-4f6f-9d32-1ec7f7c6e565","type":"UnionRenderers"}},"id":"4cc49654-dd72-4f4b-904a-60e5acd01026","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"0f2d3487-ef49-4bfb-bd19-0ddf7a9315ec","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"fb70c846-3994-45cf-a2a5-3f5a58bd27b4","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"d7113244-1db8-4cb3-b418-2916ac6e43f2","type":"GlyphRenderer"},{"id":"0f2d3487-ef49-4bfb-bd19-0ddf7a9315ec","type":"LinearAxis"},{"id":"fb70c846-3994-45cf-a2a5-3f5a58bd27b4","type":"LinearAxis"},{"id":"ed967eda-4d96-4e97-b2a9-e565090d8dc7","type":"Grid"},{"id":"d324b140-58e0-4ff6-8348-ee2546315809","type":"Grid"}],"title":null,"toolbar":{"id":"f444a3ff-20bd-4a8b-a73d-28afa58947af","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9283c022-8374-436e-9f92-51606de61c62","type":"DataRange1d"},"x_scale":{"id":"ab775e53-35e8-4137-8db9-2744ba474bfe","type":"LinearScale"},"y_range":{"id":"5df22bcb-5b34-4035-a65b-bea8133010ef","type":"DataRange1d"},"y_scale":{"id":"1afa4ab7-9fa0-4db4-9b95-cd2b0f6a787f","type":"LinearScale"}},"id":"7ac40b6c-68c4-4f68-add3-f0127a83d837","type":"Plot"},{"attributes":{},"id":"6dad7ff4-83bf-418a-9dc2-63be02175ab0","type":"Selection"},{"attributes":{},"id":"47cb8ff5-4e5c-4d7b-bafc-cf8bb59b830a","type":"BasicTicker"},{"attributes":{},"id":"7ba458ec-f835-42d8-9f12-b7bb38b7a892","type":"BasicTicker"}],"root_ids":["7ac40b6c-68c4-4f68-add3-f0127a83d837"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"dfae2bc8-6b12-4793-884b-df0ec8251004","roots":{"7ac40b6c-68c4-4f68-add3-f0127a83d837":"52c912f9-943a-4364-b36e-73455a032187"}}];
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