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
      };var element = document.getElementById("d727b478-9b01-4ff8-99d3-d3de89bacd8a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd727b478-9b01-4ff8-99d3-d3de89bacd8a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"5f0f0b27-c147-4a50-b714-b8995744f507":{"roots":{"references":[{"attributes":{"callback":null},"id":"24ddd865-f08c-4f3e-b683-02693716e99a","type":"DataRange1d"},{"attributes":{"data_source":{"id":"5205d040-0507-4c22-b8c4-c6912fb8ce06","type":"ColumnDataSource"},"glyph":{"id":"9c3f86a9-208b-4686-b3fa-110dea303880","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"c8b80c44-fcbe-4576-a9c6-38af4ebc9404","type":"CDSView"}},"id":"4c382ac4-df69-42a6-9afd-8d1eef5deca8","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#99d594"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9c3f86a9-208b-4686-b3fa-110dea303880","type":"Triangle"},{"attributes":{},"id":"d600b8fa-93e8-4aa8-9901-183d9af8b6a6","type":"BasicTicker"},{"attributes":{"formatter":{"id":"9aaebca3-1996-41f0-841c-5482e1301d71","type":"BasicTickFormatter"},"plot":{"id":"af71e7f8-a7e6-49bc-a283-9d57a47363bd","type":"Plot"},"ticker":{"id":"db01ee33-e03f-43ad-bb63-ef39f3d7098e","type":"BasicTicker"}},"id":"7eaa127d-24a3-41bb-a956-82179487d43f","type":"LinearAxis"},{"attributes":{},"id":"9aaebca3-1996-41f0-841c-5482e1301d71","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"99029fa5-54e7-4f47-ba67-cccdc06d7230","type":"BasicTickFormatter"},"plot":{"id":"af71e7f8-a7e6-49bc-a283-9d57a47363bd","type":"Plot"},"ticker":{"id":"d600b8fa-93e8-4aa8-9901-183d9af8b6a6","type":"BasicTicker"}},"id":"2908c90d-04f4-4040-851a-ab9fdfe8a8b8","type":"LinearAxis"},{"attributes":{},"id":"b1e6c605-8790-487b-a5fa-3ffe42bd28cc","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"5205d040-0507-4c22-b8c4-c6912fb8ce06","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"1da31d7d-c002-4f32-a5bf-4e777620d3ea","type":"Toolbar"},{"attributes":{"below":[{"id":"7eaa127d-24a3-41bb-a956-82179487d43f","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"2908c90d-04f4-4040-851a-ab9fdfe8a8b8","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"4c382ac4-df69-42a6-9afd-8d1eef5deca8","type":"GlyphRenderer"},{"id":"7eaa127d-24a3-41bb-a956-82179487d43f","type":"LinearAxis"},{"id":"2908c90d-04f4-4040-851a-ab9fdfe8a8b8","type":"LinearAxis"},{"id":"eb41ff51-d01d-4a4f-842f-df53d952297c","type":"Grid"},{"id":"a41d4a90-6b3d-49dc-a058-3a9c92cb9b18","type":"Grid"}],"title":null,"toolbar":{"id":"1da31d7d-c002-4f32-a5bf-4e777620d3ea","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"24ddd865-f08c-4f3e-b683-02693716e99a","type":"DataRange1d"},"x_scale":{"id":"a76c8556-688e-4560-a2ac-df028ee0d85b","type":"LinearScale"},"y_range":{"id":"80bb95b2-3be1-424b-a0ae-1db5aa37d855","type":"DataRange1d"},"y_scale":{"id":"b1e6c605-8790-487b-a5fa-3ffe42bd28cc","type":"LinearScale"}},"id":"af71e7f8-a7e6-49bc-a283-9d57a47363bd","type":"Plot"},{"attributes":{"plot":{"id":"af71e7f8-a7e6-49bc-a283-9d57a47363bd","type":"Plot"},"ticker":{"id":"db01ee33-e03f-43ad-bb63-ef39f3d7098e","type":"BasicTicker"}},"id":"eb41ff51-d01d-4a4f-842f-df53d952297c","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"af71e7f8-a7e6-49bc-a283-9d57a47363bd","type":"Plot"},"ticker":{"id":"d600b8fa-93e8-4aa8-9901-183d9af8b6a6","type":"BasicTicker"}},"id":"a41d4a90-6b3d-49dc-a058-3a9c92cb9b18","type":"Grid"},{"attributes":{},"id":"db01ee33-e03f-43ad-bb63-ef39f3d7098e","type":"BasicTicker"},{"attributes":{},"id":"99029fa5-54e7-4f47-ba67-cccdc06d7230","type":"BasicTickFormatter"},{"attributes":{},"id":"a76c8556-688e-4560-a2ac-df028ee0d85b","type":"LinearScale"},{"attributes":{"callback":null},"id":"80bb95b2-3be1-424b-a0ae-1db5aa37d855","type":"DataRange1d"},{"attributes":{"source":{"id":"5205d040-0507-4c22-b8c4-c6912fb8ce06","type":"ColumnDataSource"}},"id":"c8b80c44-fcbe-4576-a9c6-38af4ebc9404","type":"CDSView"}],"root_ids":["af71e7f8-a7e6-49bc-a283-9d57a47363bd"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"5f0f0b27-c147-4a50-b714-b8995744f507","elementid":"d727b478-9b01-4ff8-99d3-d3de89bacd8a","modelid":"af71e7f8-a7e6-49bc-a283-9d57a47363bd"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
