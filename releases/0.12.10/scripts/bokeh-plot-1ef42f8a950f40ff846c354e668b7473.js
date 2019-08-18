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
      };var element = document.getElementById("a0a25ea1-65f6-4181-9b91-cf4532642245");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a0a25ea1-65f6-4181-9b91-cf4532642245' but no matching script tag was found. ")
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
                    var docs_json = {"80730f68-6758-4db4-b0bf-2710d24518d4":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d591fc3e-60d6-4f0f-b9e6-c4b40ccfab8e","type":"Circle"},{"attributes":{},"id":"f0a18a39-86b2-4f57-aa9b-65e68512e46e","type":"LinearScale"},{"attributes":{"source":{"id":"6f0643d6-782d-4459-bc95-42d1b2dd890c","type":"ColumnDataSource"}},"id":"c061b971-9bd5-4782-a6e9-c1e29693914f","type":"CDSView"},{"attributes":{"callback":null},"id":"50781ffc-fffe-491c-9714-1277726d223a","type":"DataRange1d"},{"attributes":{},"id":"815c8bdd-d7fd-4208-98f3-e59720b825d8","type":"HelpTool"},{"attributes":{},"id":"6b0833ca-8a4c-480c-b14c-45a03f1a8538","type":"LinearScale"},{"attributes":{},"id":"7f99d577-cb76-4e20-a25c-63555e78d2b3","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c33b3d28-6f3f-4e64-8ee3-68fc05e00c11","type":"PanTool"},{"id":"9e1d951c-7440-42a2-bea2-e4b57f262b0a","type":"WheelZoomTool"},{"id":"d7ea2f48-bef7-4bbd-acb5-86770a9ab409","type":"BoxZoomTool"},{"id":"7f99d577-cb76-4e20-a25c-63555e78d2b3","type":"SaveTool"},{"id":"78dfcc51-407a-40ca-9336-91703d024864","type":"ResetTool"},{"id":"815c8bdd-d7fd-4208-98f3-e59720b825d8","type":"HelpTool"}]},"id":"ed3bed7f-1663-4f39-b331-4172b3936505","type":"Toolbar"},{"attributes":{"data_source":{"id":"6f0643d6-782d-4459-bc95-42d1b2dd890c","type":"ColumnDataSource"},"glyph":{"id":"d591fc3e-60d6-4f0f-b9e6-c4b40ccfab8e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2453ce07-abcc-4e0a-b148-4852ad63bb6f","type":"Circle"},"selection_glyph":null,"view":{"id":"c061b971-9bd5-4782-a6e9-c1e29693914f","type":"CDSView"}},"id":"a3e12033-6ba4-4ed9-83c0-a7ea6a2d1d16","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"6f0643d6-782d-4459-bc95-42d1b2dd890c","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"8b553ae8-7be6-490c-94ec-de83da3cd88c","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c8ed4a0-e21c-4d71-a1cb-ae3f0ae55073","type":"BasicTicker"}},"id":"3c4eb416-c2ec-4001-a6d2-9730333119a4","type":"Grid"},{"attributes":{},"id":"78dfcc51-407a-40ca-9336-91703d024864","type":"ResetTool"},{"attributes":{"formatter":{"id":"cb1077c6-07be-42c2-a532-254704833c2b","type":"BasicTickFormatter"},"plot":{"id":"8b553ae8-7be6-490c-94ec-de83da3cd88c","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed479db1-253e-4733-9989-e6836c33f229","type":"BasicTicker"}},"id":"124a63e1-2aff-4bfe-b4d4-7852e9a478b0","type":"LinearAxis"},{"attributes":{"overlay":{"id":"1e741c93-1abb-4ed6-b485-942c6eb807ca","type":"BoxAnnotation"}},"id":"d7ea2f48-bef7-4bbd-acb5-86770a9ab409","type":"BoxZoomTool"},{"attributes":{},"id":"c33b3d28-6f3f-4e64-8ee3-68fc05e00c11","type":"PanTool"},{"attributes":{},"id":"2c8ed4a0-e21c-4d71-a1cb-ae3f0ae55073","type":"BasicTicker"},{"attributes":{},"id":"9e1d951c-7440-42a2-bea2-e4b57f262b0a","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"4b525eec-342a-4486-9975-80d06faef1ec","type":"DataRange1d"},{"attributes":{},"id":"ed479db1-253e-4733-9989-e6836c33f229","type":"BasicTicker"},{"attributes":{"formatter":{"id":"46528d6c-b610-485a-b76e-547594d421e2","type":"BasicTickFormatter"},"plot":{"id":"8b553ae8-7be6-490c-94ec-de83da3cd88c","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c8ed4a0-e21c-4d71-a1cb-ae3f0ae55073","type":"BasicTicker"}},"id":"17d293f8-2b4f-4d52-aec5-e0b26308255f","type":"LinearAxis"},{"attributes":{"below":[{"id":"124a63e1-2aff-4bfe-b4d4-7852e9a478b0","type":"LinearAxis"}],"left":[{"id":"17d293f8-2b4f-4d52-aec5-e0b26308255f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"124a63e1-2aff-4bfe-b4d4-7852e9a478b0","type":"LinearAxis"},{"id":"15cb2514-9fb5-4369-8301-b8087c12513c","type":"Grid"},{"id":"17d293f8-2b4f-4d52-aec5-e0b26308255f","type":"LinearAxis"},{"id":"3c4eb416-c2ec-4001-a6d2-9730333119a4","type":"Grid"},{"id":"1e741c93-1abb-4ed6-b485-942c6eb807ca","type":"BoxAnnotation"},{"id":"a3e12033-6ba4-4ed9-83c0-a7ea6a2d1d16","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"ed3bed7f-1663-4f39-b331-4172b3936505","type":"Toolbar"},"toolbar_location":"below","toolbar_sticky":false,"x_range":{"id":"50781ffc-fffe-491c-9714-1277726d223a","type":"DataRange1d"},"x_scale":{"id":"f0a18a39-86b2-4f57-aa9b-65e68512e46e","type":"LinearScale"},"y_range":{"id":"4b525eec-342a-4486-9975-80d06faef1ec","type":"DataRange1d"},"y_scale":{"id":"6b0833ca-8a4c-480c-b14c-45a03f1a8538","type":"LinearScale"}},"id":"8b553ae8-7be6-490c-94ec-de83da3cd88c","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"46528d6c-b610-485a-b76e-547594d421e2","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"8b553ae8-7be6-490c-94ec-de83da3cd88c","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed479db1-253e-4733-9989-e6836c33f229","type":"BasicTicker"}},"id":"15cb2514-9fb5-4369-8301-b8087c12513c","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1e741c93-1abb-4ed6-b485-942c6eb807ca","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2453ce07-abcc-4e0a-b148-4852ad63bb6f","type":"Circle"},{"attributes":{},"id":"cb1077c6-07be-42c2-a532-254704833c2b","type":"BasicTickFormatter"}],"root_ids":["8b553ae8-7be6-490c-94ec-de83da3cd88c"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"80730f68-6758-4db4-b0bf-2710d24518d4","elementid":"a0a25ea1-65f6-4181-9b91-cf4532642245","modelid":"8b553ae8-7be6-490c-94ec-de83da3cd88c"}];
                
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
