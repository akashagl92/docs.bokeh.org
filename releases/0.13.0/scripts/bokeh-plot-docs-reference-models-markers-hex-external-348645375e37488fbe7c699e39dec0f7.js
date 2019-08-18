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
      };var element = document.getElementById("9d6c3eaf-6507-4232-8c14-3a22e38cf9ed");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9d6c3eaf-6507-4232-8c14-3a22e38cf9ed' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2eeb6f03-bcbb-4069-a284-858e7cfee332":{"roots":{"references":[{"attributes":{"below":[{"id":"03e576a3-858c-4f3b-86ee-64db83891c72","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"bb0820eb-354f-4a8e-927a-d34447a92633","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"c804316f-6b52-4699-b518-4fe1f5fced0f","type":"GlyphRenderer"},{"id":"03e576a3-858c-4f3b-86ee-64db83891c72","type":"LinearAxis"},{"id":"bb0820eb-354f-4a8e-927a-d34447a92633","type":"LinearAxis"},{"id":"1308639a-1637-4129-bce3-5358caf5fdcd","type":"Grid"},{"id":"2ba55f45-6145-49c0-bb2e-b79a8fed4f0f","type":"Grid"}],"title":null,"toolbar":{"id":"64e278e1-1efe-4c52-838a-2307f6987f00","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7ce2e97b-4e66-4fa2-9cb4-8057cb57d8ac","type":"DataRange1d"},"x_scale":{"id":"406c8a9b-67ba-47ac-ac75-c31b8aed0c61","type":"LinearScale"},"y_range":{"id":"ecbfee1d-c2a7-445d-beb9-3405f235b4ea","type":"DataRange1d"},"y_scale":{"id":"d1f32470-4a3e-406c-b019-b05b1cf985ce","type":"LinearScale"}},"id":"bbd2d3b0-39ef-41ae-8e5a-12f3f00aa5a1","type":"Plot"},{"attributes":{},"id":"ce002c45-b556-40d5-8f91-2ae390087a53","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"64e278e1-1efe-4c52-838a-2307f6987f00","type":"Toolbar"},{"attributes":{},"id":"5db06e66-9d10-47fe-9e86-44c65aa8acd5","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"bbd2d3b0-39ef-41ae-8e5a-12f3f00aa5a1","type":"Plot"},"ticker":{"id":"b8b460d9-b4fd-40c9-a068-49e80673226e","type":"BasicTicker"}},"id":"2ba55f45-6145-49c0-bb2e-b79a8fed4f0f","type":"Grid"},{"attributes":{"callback":null},"id":"ecbfee1d-c2a7-445d-beb9-3405f235b4ea","type":"DataRange1d"},{"attributes":{"data_source":{"id":"64e3e58f-d71c-48df-8c72-153b30bea9df","type":"ColumnDataSource"},"glyph":{"id":"027d1c0b-72fa-49c4-8356-937c2b50228b","type":"Hex"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"48a87e30-1efb-4754-a256-cc6a1d5f8297","type":"CDSView"}},"id":"c804316f-6b52-4699-b518-4fe1f5fced0f","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"d9a7c34d-4a3d-4495-8578-86e0377f1aa4","type":"BasicTickFormatter"},"plot":{"id":"bbd2d3b0-39ef-41ae-8e5a-12f3f00aa5a1","type":"Plot"},"ticker":{"id":"63319d3a-a3d3-4912-825a-f1151ad5d026","type":"BasicTicker"}},"id":"03e576a3-858c-4f3b-86ee-64db83891c72","type":"LinearAxis"},{"attributes":{},"id":"d9a7c34d-4a3d-4495-8578-86e0377f1aa4","type":"BasicTickFormatter"},{"attributes":{},"id":"d1f32470-4a3e-406c-b019-b05b1cf985ce","type":"LinearScale"},{"attributes":{},"id":"406c8a9b-67ba-47ac-ac75-c31b8aed0c61","type":"LinearScale"},{"attributes":{"source":{"id":"64e3e58f-d71c-48df-8c72-153b30bea9df","type":"ColumnDataSource"}},"id":"48a87e30-1efb-4754-a256-cc6a1d5f8297","type":"CDSView"},{"attributes":{"formatter":{"id":"ce002c45-b556-40d5-8f91-2ae390087a53","type":"BasicTickFormatter"},"plot":{"id":"bbd2d3b0-39ef-41ae-8e5a-12f3f00aa5a1","type":"Plot"},"ticker":{"id":"b8b460d9-b4fd-40c9-a068-49e80673226e","type":"BasicTicker"}},"id":"bb0820eb-354f-4a8e-927a-d34447a92633","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"5db06e66-9d10-47fe-9e86-44c65aa8acd5","type":"Selection"},"selection_policy":{"id":"616389f1-dcc5-48b5-af01-72cc214b4952","type":"UnionRenderers"}},"id":"64e3e58f-d71c-48df-8c72-153b30bea9df","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#f0027f"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"027d1c0b-72fa-49c4-8356-937c2b50228b","type":"Hex"},{"attributes":{},"id":"63319d3a-a3d3-4912-825a-f1151ad5d026","type":"BasicTicker"},{"attributes":{},"id":"b8b460d9-b4fd-40c9-a068-49e80673226e","type":"BasicTicker"},{"attributes":{"plot":{"id":"bbd2d3b0-39ef-41ae-8e5a-12f3f00aa5a1","type":"Plot"},"ticker":{"id":"63319d3a-a3d3-4912-825a-f1151ad5d026","type":"BasicTicker"}},"id":"1308639a-1637-4129-bce3-5358caf5fdcd","type":"Grid"},{"attributes":{},"id":"616389f1-dcc5-48b5-af01-72cc214b4952","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"7ce2e97b-4e66-4fa2-9cb4-8057cb57d8ac","type":"DataRange1d"}],"root_ids":["bbd2d3b0-39ef-41ae-8e5a-12f3f00aa5a1"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"2eeb6f03-bcbb-4069-a284-858e7cfee332","roots":{"bbd2d3b0-39ef-41ae-8e5a-12f3f00aa5a1":"9d6c3eaf-6507-4232-8c14-3a22e38cf9ed"}}];
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